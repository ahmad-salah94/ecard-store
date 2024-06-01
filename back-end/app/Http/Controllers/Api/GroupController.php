<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:groups,name',
            'image' => 'nullable|image', // Added image validation
            'agent_ratio' => 'required',
            // 'price' => 'required|unique:groups,price', // Assuming 'price' is a field in groups
            'pricing_type' => 'nullable',
            'maturity_value' => 'nullable|numeric',
            'type' => 'nullable|integer',
            'private_group' => 'nullable|boolean',
        ]);
    
        $group = new Group();
        $group->name = $request->input('name');
        $group->agent_ratio = $request->input('agent_ratio');
        $group->pricing_type = $request->input('pricing_type');
        $group->maturity_value = $request->input('maturity_value');
        $group->type = $request->input('type', '0');
        $group->private_group = $request->input('private_group', '0');
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('groups'), $imageName);
            $group->image = 'groups/' . $imageName;
        }
        $group->save();
    
        return response()->json([
            'status' => 200,
            'group' => $group,
        ]);
    }
    

    public function index()
    {
        $group = Group::all();
        return response()->json([
            'status' => 200,
            'groups' => $group,
        ]);
    }
    public function update(Request $request, $id)
    {
        // التحقق من المدخلات
        $request->validate([
            'name' => 'required',
            'image' => 'nullable|image',
            'agent_ratio' => 'required',
            'pricing_type' => 'nullable',
            'maturity_value' => 'nullable|numeric',
            'type' => 'nullable|integer',
            'private_group' => 'nullable|boolean',
        ]);
    
        $group = Group::find($id);
        if (!$group) {
            return response()->json([
                'status' => 404,
                'message' => 'Group not found',
            ], 404);
        }
    
        $group->name = $request->input('name');
        $group->agent_ratio = $request->input('agent_ratio');
        $group->pricing_type = $request->input('pricing_type');
        $group->maturity_value = $request->input('maturity_value');
        $group->type = $request->input('type', '0');
        $group->private_group = $request->input('private_group', '0');
    
        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('groups'), $imageName);
            $group->image = 'groups/' . $imageName;
        }
    
        $group->save();
    
        return response()->json([
            'status' => 200,
            'group' => $group,
        ]);
    }
    

    public function delete($id)
    {
        if (!Group::where('id', $id)->first()) {
            return response()->json([
                'status' => 402,
                'message' => 'Group not found !',
            ]);
        }
        Group::where('id', $id)->first()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Group deleted successfully',
        ]);
    }
}
