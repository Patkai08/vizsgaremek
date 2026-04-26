<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'card_name',
        'card_number',
        'expiry',
        'cvv',
        'amount',
    ];
}
