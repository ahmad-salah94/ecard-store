<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:currencies,name',
            'abbreviation' => 'required|unique:currencies,abbreviation',
            'code' => 'required|unique:currencies,code',
            'price' => 'required|unique:currencies,price',
            'purchase_price' => 'required|unique:currencies,purchase_price',
        ]);

        $currency = new Currency();
        $currency->name = $request->input('name');
        $currency->abbreviation = $request->input('abbreviation');
        $currency->price = $request->input('price');
        $currency->purchase_price = $request->input('purchase_price');
        $currency->price = $request->input('price');
        $currency->type = $request->input('type', '0');
        $currency->register_accounts = $request->input('register_accounts', '0');
        $currency->save();

        return response()->json([
            'status' => 200,
            'currency' => $currency,
        ]);
    }

    public function index()
    {
        $currency = Currency::all();
        return response()->json([
            'status' => 200,
            'Currency' => $currency,
        ]);
    }
    public function update(Request $request, $id)
    {

        $currency = Currency::find($id);

        if (!$currency) {
            return response()->json([
                'status' => 404,
                'message' => 'Currency not found',
            ], 404);
        }

        $currency->name = $request->input('name');
        $currency->abbreviation = $request->input('abbreviation');
        $currency->price = $request->input('price');
        $currency->purchase_price = $request->input('purchase_price');
        $currency->type = $request->input('type', '0');
        $currency->register_accounts = $request->input('register_accounts', '0');
        $currency->save();

        return response()->json([
            'status' => 200,
            'currency' => $currency,
        ]);
    }

    public function delete($id)
    {
        if (!Currency::where('id', $id)->first()) {
            return response()->json([
                'status' => 402,
                'message' => 'Currency not found !',
            ]);
        }
        Currency::where('id', $id)->first()->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Currency deleted successfully',
        ]);
    }
}
