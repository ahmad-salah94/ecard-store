<?php

namespace App\Http\Controllers;

use App\Mail\emailMailable;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;
use Validator;




class AuthController extends Controller
{
    
    public function __construct()
    {
        //   $this->middleware('auth:api',['except'=>['login','register']]);
    }

    /**
     * @middleware('auth:api')
     */

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'address' => 'nullable',
            'currency_id' => 'nullable',
            'group_id' => 'nullable',
            //'phone' => 'required|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 200,
                'errors' => $validator->errors()
            ], 200);
        }

        $type = $request->input('user_type', 'user');
        $address=$request->address;

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)],
            ['user_type' => $type] ,
            ['address' => $address]
        ));
        if (!$user) {
            return response()->json([
                'status' => 401,
                'message' => 'faild!',
            ], 401);
        }
        // $userOtp = $this->generateOTP($user->phone);
        // $userOtp->send($user->phone);
        return $this->sendEmail($user->email,$user);
        
      
    }
    // public function generateOTP($phone)
    // {
    //     $provider =  User::where('phone', $phone)->first();
    //     $userOtp = UserOtp::where('provider_id', $provider->id)->latest()->first();
    //     $now = now();
    //     if ($userOtp && $now->isBefore($userOtp->expire_at)) {
    //         return $userOtp;
    //     }
    //     return UserOtp::create([
    //         'provider_id' => $provider->id,
    //         'otp' => rand(123456, 999999),
    //         'expire_at' => $now->addMinutes(10)
    //     ]);
    // }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:6'
        ]);
        if ($validator->fails()) {
            return response()->json(
                [
                    'status' => 200,
                    $validator->errors()
                ],
                200
            );
        }
        if (!$token = Auth::guard('api')->attempt($validator->validated())) {
            return response()->json(
                [
                    'status' => 401,
                    'error' => 'Unauthorized'
                ],
                401
            );
        }
        return $this->createNewToken($token);
    }
    public function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_tybe' => 'bearer',
            'expires_in' => auth()->guard('api')->factory()->getTTl() * 600000,
            'user' => auth()->guard('api')->user(),
            // 'user'=>userLoginResource::make(auth()->user())
        ]);
    }
    public function profile()
    {
        $user = User::find(auth()->guard('api')->user()->id);
        return response()->json([
            // 'user' => auth()->guard('api')->user(),
            'user' => $user,
        ]);
    }
    public function logout()
    {
        auth()->logout();

        return response()->json([
            'message' => 'User logged out',
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        if ($request->has('password')) {
            $user->password = bcrypt($request->input('password'));
            $user->save();
        }

        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatarName = time() . '.' . $avatar->getClientOriginalExtension();
            $avatar->move(public_path('avatars'), $avatarName);
            $avatarPath = 'avatars/' . $avatarName;
            $user->avatar = $avatarPath;
            $user->save();
        }

        $updatedUser = User::findOrFail($id);

        return response()->json([
            'status' => 200,
            'message' => 'User updated successfully!',
            'data' => $updatedUser
        ], 200);
    }

    //Socialite (Google)
    public function redirectToGoogle(){
        return Socialite::driver('google')->stateless()->redirect();
    } 
    public function handleGoogleCallback(){
        $user=Socialite::driver('google')->stateless()->user();
        $findUser=User::where('social_id',$user->id)->orWhere('email',$user->email)->first();
        if($findUser){
            Auth::login($findUser);
            $token = auth()->guard('api')->tokenById(auth()->id());
            return $this->createNewToken($token,$findUser);
        }else{
            $newUser=User::create([
                'name'=>$user->name,
                'email'=>$user->email,
                'phone'=>$user->phone,
                'social_id'=>$user->id,
                'social_type'=>'google',
                'password'=>bcrypt('my-google'),
            ]);
            Auth::login($newUser);
            $token = auth()->guard('api')->tokenById(auth()->id());
            return $this->createNewToken($token,$newUser);
        }
    }

    //google react Api
    public function googleAuth(request $request){
    
        $findUser=User::where('social_id',$request->social_id)->orWhere('email',$request->email)->first();
        if($findUser){
            Auth::login($findUser);
            $token = auth()->guard('api')->tokenById(auth()->id());
            return $this->createNewToken($token,$findUser);
        }else{
            $newUser=User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'phone'=>$request->phone,
                'social_id'=>$request->social_id,
                'social_type'=>'google',
                'password'=>bcrypt('my-google'),
            ]);
            Auth::login($newUser);
            $token = auth()->guard('api')->tokenById(auth()->id());
            return $this->createNewToken($token,$newUser);
        }
    }


    //email
    public function sendEmail($email,$user){
        Mail::to($email)->send(new emailMailable());  
        return response()->json([
            'status' => 200,
            'message' => 'User registered successfully ',
            'user'=>$user,
        ], 200);     
    }
}
