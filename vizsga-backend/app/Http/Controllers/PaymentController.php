<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:100',
            'zip' => 'required|string|max:20',
            'payment_method' => 'required|string',
            'total_price' => 'required|numeric',
            'items' => 'required|array|min:1',
            'items.*.id' => 'required',
            'items.*.name' => 'required|string',
            'items.*.price' => 'required|numeric',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        $validated = $request->validate([
            'card_name' => 'required|string|max:255',
            'card_number' => 'required|string|max:50',
            'expiry' => 'required|string|max:10',
            'cvv' => 'required|string|max:10',
            'amount' => 'nullable|numeric',
        ]);

        $payment = Payment::create($validated);

        return response()->json([
            'message' => 'Sikeres mentés',
            'data' => $payment
        ], 201);
    }
}
