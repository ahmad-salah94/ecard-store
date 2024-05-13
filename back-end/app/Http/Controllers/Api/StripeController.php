<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StripeController extends Controller
{
    public function session(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        // $productname = $request->productname;
        // $totalprice = $request->total;
        // $two0 = "00";
        // $total = "$totalprice$two0";
        $session = \Stripe\Checkout\Session::create([
            'line_items'  => [
                [
                    'price_data' => [
                        'currency'     => 'USD',
                        'product_data' => [
                            "name" => 'islam',
                        ],
                        'unit_amount'  => 1000,
                    ],
                    'quantity'   => 1,
                ],
            ],
            'mode' => 'payment',
            'success_url' => route('success'),
            // 'cancel_url'  => route('cancel'),
        ]);
        return redirect()->away($session->url);
    }
    public function success()
    {
        return "Thanks for you order You have just completed your payment. The seeler will reach out to you as soon as possible";
    }
}
