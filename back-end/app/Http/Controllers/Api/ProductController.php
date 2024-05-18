<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\NewRequirement;
use App\Models\Product;
use App\Models\ProductCounter;
use App\Models\ProductOption;
use App\Models\ProductQuantity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with(['category', 'product_counter', 'product_quantity', 'product_option', 'new_requirement'])->get();
        return response()->json(['products' => $products], 201);
    }
    public function store(Request $request)
    {
        DB::beginTransaction();

        try {
            $validatedData = $request->validate([
                'title_ar' => 'required|string|unique:products,title_ar',
                'title_en' => 'required|string|unique:products,title_en',
                'title_api' => 'nullable',
                'active_api' => 'nullable',
                'currency_id' => 'nullable|integer',
                'currency_name' => 'nullable|string',
                'image' => 'nullable|image',
                'cost_price' => 'nullable|numeric',
                'selling_price' => 'nullable|numeric',
                'for_quantity' => 'required|integer|min:1',
                'category_id' => 'required|integer',
                'description_ar' => 'nullable|string',
                'description_en' => 'nullable|string',
            ]);

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('products'), $imageName);
                $validatedData['image'] = 'products/' . $imageName;
            }

            $product = Product::create($validatedData);

            if ($request->has('requirements')) {
                foreach ($request->requirements as $requirement) {
                    switch ($requirement['type']) {
                        case 1:
                            ProductCounter::create([
                                'product_id' => $product->id,
                                'start' => $requirement['start'],
                                'end' => $requirement['end'],
                            ]);
                            break;
                        case 2:
                            ProductQuantity::create([
                                'product_id' => $product->id,
                                'start' => $requirement['start'],
                                'end' => $requirement['end'],
                            ]);
                            break;
                        case 3:
                            ProductOption::create([
                                'product_id' => $product->id,
                                'options' => $requirement['options'],
                            ]);
                            break;
                        default:
                            break;
                    }
                }
            }
            if ($request->has('new_requirement')) {
                NewRequirement::create([
                    'product_id' => $product->id,
                    'font_size' => $request->new_requirement['font_size'],
                    'title_ar' => $request->new_requirement['title_ar'],
                    'title_en' => $request->new_requirement['title_en'],
                    'details_ar' => $request->new_requirement['details_ar'],
                    'details_en' => $request->new_requirement['details_en'],
                ]);
            }
            DB::commit();
            return response()->json(['message' => 'Product and related tables created successfully', 'data' => $product], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => 'Failed to create product', 'error' => $e->getMessage()], 500);
        }
    }


    public function update(Request $request, $product_id)
    {
        $product = Product::findOrFail($product_id);

        $validatedData = $request->validate([
            'title_ar' => 'required|string|unique:products,title_ar,' . $product->id,
            'title_en' => 'required|string|unique:products,title_en,' . $product->id,
            'title_api' => 'nullable',
            'active_api' => 'nullable',
            'currency_id' => 'nullable|integer',
            'currency_name' => 'nullable|string',
            'image' => 'nullable|image',
            'cost_price' => 'nullable|numeric',
            'selling_price' => 'nullable|numeric',
            'for_quantity' => 'required|integer|min:1',
            'category_id' => 'required|integer',
            'description_ar' => 'nullable|string',
            'description_en' => 'nullable|string',
        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('products'), $imageName);
            $validatedData['image'] = 'products/' . $imageName;
        }
        $product->update($validatedData);
        if ($request->has('requirements')) {
            foreach ($request->requirements as $requirement) {
                switch ($requirement['type']) {
                    case 1:
                        $product->product_counter->update([
                            'start' => $requirement['start'],
                            'end' => $requirement['end'],
                        ]);
                        break;
                    case 2:
                        $product->product_quantity->update([
                            'start' => $requirement['start'],
                            'end' => $requirement['end'],
                        ]);
                        break;
                    case 3:
                        $product->product_option->update([
                            'options' => $requirement['options'],
                        ]);
                        break;
                    default:
                        break;
                }
            }
        }
        if ($request->has('new_requirement')) {
            $product->new_requirement->update([
                'font_size' => $request->new_requirement['font_size'],
                'title_ar' => $request->new_requirement['title_ar'],
                'title_en' => $request->new_requirement['title_en'],
                'details_ar' => $request->new_requirement['details_ar'],
                'details_en' => $request->new_requirement['details_en'],
            ]);
        }

        return response()->json(['message' => 'Product and related tables updated successfully', 'data' => $product], 200);
    }

    public function delete($product_id)
    {
        $product = Product::find($product_id);
        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully'], 201);
    }
}
