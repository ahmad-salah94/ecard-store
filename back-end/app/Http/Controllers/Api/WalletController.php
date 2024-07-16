<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\PaymentMethod;
use App\Models\PaymentMethodRequirement;
use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
      // Create
      public function store(Request $request)
      {
          $paymentMethod = new PaymentMethod();
          $paymentMethod->currency_id = $request->currency_id;
          $paymentMethod->name = $request->name;
          $paymentMethod->description = $request->description;
          $paymentMethod->tax = $request->tax;
          $paymentMethod->min = $request->min;
          $paymentMethod->max = $request->max;
          if ($request->hasFile('image')) {
              $image = $request->file('image');
              $imageName = time() . '.' . $image->getClientOriginalExtension();
              $image->move(public_path('payments'), $imageName);
              $paymentMethod->image = 'payments/' . $imageName;
          }
          $paymentMethod->save();
      
          if ($request->has('requirements')) {
              foreach ($request->requirements as $requirementData) {
                  $requirement = new PaymentMethodRequirement();
                  $requirement->payment_method_id = $paymentMethod->id;
                  $requirement->type = $requirementData['type'];
                  $requirement->field_name = $requirementData['field_name'];
                  $requirement->name_ar = $requirementData['name_ar'];
                  $requirement->name_en = $requirementData['name_en'];
                  $requirement->save();
              }
          }
      
          return response()->json($paymentMethod->load('requirement'), 201);
      }
      
  
      // Read
      public function index()
      {
          $paymentMethods = PaymentMethod::all();
          return response()->json($paymentMethods);
      }
  
      public function show($id)
      {
          $paymentMethod = PaymentMethod::find($id);
          if (!$paymentMethod) {
              return response()->json(['message' => 'Payment Method not found'], 404);
          }
  
          return response()->json($paymentMethod->load('requirement'));
      }
  
      // Update
      public function update(Request $request, $id)
      {
          $paymentMethod = PaymentMethod::findOrFail($id);
          $paymentMethod->currency_id = $request->currency_id;
          $paymentMethod->name = $request->name;
          $paymentMethod->description = $request->description;
          $paymentMethod->tax = $request->tax;
          $paymentMethod->min = $request->min;
          $paymentMethod->max = $request->max;
          if ($request->hasFile('image')) {
              $image = $request->file('image');
              $imageName = time() . '.' . $image->getClientOriginalExtension();
              $image->move(public_path('payments'), $imageName);
              $paymentMethod->image = 'payments/' . $imageName;
          }
          $paymentMethod->save();
      
          if ($request->has('requirements')) {
              // Remove existing requirements
              PaymentMethodRequirement::where('payment_method_id', $paymentMethod->id)->delete();
      
              // Add new requirements
              foreach ($request->requirements as $requirementData) {
                  $requirement = new PaymentMethodRequirement();
                  $requirement->payment_method_id = $paymentMethod->id;
                  $requirement->type = $requirementData['type'];
                  $requirement->field_name = $requirementData['field_name'];
                  $requirement->name_ar = $requirementData['name_ar'];
                  $requirement->name_en = $requirementData['name_en'];
                  $requirement->save();
              }
          }
      
          return response()->json($paymentMethod->load('requirement'), 200);
      }
      
  
      // Delete
      public function destroy($id)
      {
          $paymentMethod = PaymentMethod::find($id);
          if (!$paymentMethod) {
              return response()->json(['message' => 'Payment Method not found'], 404);
          }
  
          $paymentMethod->delete();
          return response()->json(['message' => 'Payment Method deleted']);
      }
    //charge 

    public function chargeWallet(Request $request, $user_id ,$currency ,$method)
    {
        $request->validate([
            'value' => 'required',
            'dollar_value' => 'required',
            'image' => 'required|image',
        ]);
    
        $payment = new Payment();
        $payment->value = $request->input('value');
        $payment->user_id = $user_id;
        $payment->method_id = $method;
        $payment->currency_id = $currency;
        $payment->dollar_value = $request->input('dollar_value');
        $payment->status = 'Pending';
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('payments'), $imageName);
            $payment->image = 'payments/' . $imageName;
        }    
        $payment->save();
    
        return response()->json([
            'status' => 200,
            'payment' => $payment,
        ]);
    }
    public function acceptWalletCharge($id){
        $payment = Payment::findOrFail($id);
        $payment->status = 'Accepted';
        $payment->save();
        $wallet = Wallet::where('user_id',$payment->user_id)->firstOrCreate(
            ['user_id' => $payment->user_id], 
            ['value' => '0'], 
        );
        $wallet->update([
            'value'=>$wallet->value + $payment->value
        ]);
        return response()->json([
            'status' => 200,
            'payment' => $payment,
            'wallet'=>$wallet->load('user')
        ]);


    }
    public function rejectWalletCharge($id){
        $payment = Payment::findOrFail($id);
        $payment->status = 'Rejected';
        $payment->save();
        return response()->json([
            'status' => 200,
            'payment' => $payment,
        ]);
    }
    public function wallet($user_id){
        $wallet = Wallet::where('user_id',$user_id)->firstOrCreate(
            ['user_id' => $user_id], 
            ['value' => '0'], 
        )
    ;return $wallet;
    }
     
    public function payments($status){
        switch ($status) {
            case 1:
                $payment = Payment::where('status', 'Pending')->with('user','method')->get();
                break;
            case 2:
                $payment = Payment::where('status', 'Accepted')->with('user','method')->get();
                break;
            case 3:
                $payment = Payment::where('status', 'Rejected')->with('user','method')->get();
                break;
            default:
            $payment = Payment::with('user','method')->get();
                break;
        }
    
        return $payment;
    }
    
    

}
