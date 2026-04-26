<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\Auth\RegisterController;

Route::post('/orders', [OrderController::class, 'store']);
Route::post('/payments', [PaymentController::class, 'store']);
Route::post('/register', [RegisterController::class, 'store']);
