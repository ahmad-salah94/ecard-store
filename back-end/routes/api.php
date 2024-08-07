<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CurrencyController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\PaypalController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\StripeController;
use App\Http\Controllers\Api\WalletController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::group(['middleware' => 'auth:api','prefix'=>'auth'],function($router){
    Route::post('/register',[AuthController::class,'register'])->withoutMiddleware(['auth:api']);
    Route::post('/login',[AuthController::class,'login'])->withoutMiddleware(['auth:api']);
    Route::post('/update/profile/{id}', [AuthController::class, 'update']);
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
    //google back
    Route::get('/google',[AuthController::class,'redirectToGoogle'])->withoutMiddleware(['auth:api']);
    Route::get('/google/callback',[AuthController::class,'handleGoogleCallback'])->withoutMiddleware(['auth:api']);
    //google front
    Route::post('/google/login',[AuthController::class,'googleAuth'])->withoutMiddleware(['auth:api']);



    //otp
    // Route::Post('/otp/generate', [AuthOtpController::class, 'otpGenerate']);
    // Route::Post('/otp/login', [AuthOtpController::class, 'loginWithOtp']);
    // Route::Post('/otp/update/password', [AuthOtpController::class, 'updatePassword']);

});
//category
Route::group(['middleware' => 'auth:api','prefix'=>'category'],function($router){
  Route::post('/store', [CategoryController::class, 'store']);
  Route::get('/index', [CategoryController::class, 'index']);
  Route::put('/update/{id}', [CategoryController::class, 'update']);
  Route::delete('/delete/{id}', [CategoryController::class, 'delete']);
});
//product
Route::group(['middleware' => 'auth:api','prefix'=>'product'],function($router){
  Route::post('/store', [ProductController::class, 'store']);
  Route::get('/index', [ProductController::class, 'index']);
  Route::put('/update/{id}', [ProductController::class, 'update']);
  Route::delete('/delete/{id}', [ProductController::class, 'delete']);
});
//currency
Route::group([ 'middleware' => 'auth:api','prefix'=>'currency'],function($router){
  Route::post('/store', [CurrencyController::class, 'store']);
  Route::get('/index', [CurrencyController::class, 'index']);
  Route::put('/update/{id}', [CurrencyController::class, 'update']);
  Route::delete('/delete/{id}', [CurrencyController::class, 'delete']);
});
//group
Route::group(['middleware' => 'auth:api','prefix'=>'group'],function($router){
  Route::post('/store', [GroupController::class, 'store']);
  Route::get('/index', [GroupController::class, 'index']);
  Route::put('/update/{id}', [GroupController::class, 'update']);
  Route::delete('/delete/{id}', [GroupController::class, 'delete']);
});

Route::group(['prefix'=>'wallet'],function($router){
  Route::get('/payment-methods', [WalletController::class, 'index']);
  // Route::get('/payment-methods/{id}', [WalletController::class, 'show']);
  Route::post('/payment-methods', [WalletController::class, 'store']);
  Route::put('/payment-methods/{id}', [WalletController::class, 'update']);
  Route::delete('/payment-methods/{id}', [WalletController::class, 'destroy']);
  //chargeWallet
  Route::post('/charge/{user}/{currency}/{method}', [WalletController::class, 'chargeWallet']);
  Route::post('/accept/charge/{payment}', [WalletController::class, 'acceptWalletCharge']);
  Route::post('/reject/charge/{payment}', [WalletController::class, 'rejectWalletCharge']);
  Route::get('/{id}', [WalletController::class, 'wallet']);
  Route::get('/payments/{status}', [WalletController::class, 'payments']);


});


//stripe
Route::get('/session', [StripeController::class,'session']);
Route::get('/success', [StripeController::class,'success'])->name('success');

//paypal
Route::get('process-transaction', [PayPalController::class, 'processTransaction'])->name('processTransaction');
Route::get('success-transaction', [PayPalController::class, 'successTransaction'])->name('successTransaction');
Route::get('cancel-transaction', [PayPalController::class, 'cancelTransaction'])->name('cancelTransaction');
