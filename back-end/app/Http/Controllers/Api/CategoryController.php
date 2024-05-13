<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title_ar' => 'required|unique:categories,title_ar',
            'title_en' => 'required|unique:categories,title_en',
            'image' => 'nullable|image',
            'follow_up' => 'nullable|string',
        ]);
    
        $category = new Category();
        $category->title_ar = $request->input('title_ar');
        $category->title_en = $request->input('title_en');
        $category->follow_up = $request->input('follow_up');
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('categories'), $imageName);
            $category->image = 'categories/' . $imageName;
        }
    
        $category->save();
    
        return response()->json([
            'status' => 200,
            'category' => $category,
        ]);
    }
    public function index(){
        $categories=Category::all();
        return response()->json([
            'status' => 200,
            'category' => $categories,
        ]);
    }
    public function update(Request $request, $id)
{
    $request->validate([
        'title_ar' => 'required|unique:categories,title_ar,' . $id,
        'title_en' => 'required|unique:categories,title_en,' . $id,
        'image' => 'nullable|image',
        'follow_up' => 'nullable|string',
    ]);

    $category = Category::findOrFail($id);
    $category->title_ar = $request->input('title_ar');
    $category->title_en = $request->input('title_en');
    $category->follow_up = $request->input('follow_up');

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('categories'), $imageName);
        $category->image = 'categories/' . $imageName;
    }

    $category->save();

    return response()->json([
        'status' => 200,
        'message' => 'Category updated successfully',
        'category' => $category,
    ]);
}
public function delete($id){
    if(!Category::where('id',$id)->first()){
        return response()->json([
            'status' => 402,
            'message' => 'Category not found !',
        ]);
    }
    Category::where('id',$id)->first()->delete();

    return response()->json([
        'status' => 200,
        'message' => 'Category deleted successfully',
    ]);

}

    
}
