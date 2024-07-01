<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethodRequirement extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function payment_method()
    {
        return $this->belongsTo(PaymentMethod::class, "payment_method_id");
    }
}
