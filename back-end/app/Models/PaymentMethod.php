<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function payment()
    {
        return $this->belongsTo(Payment::class, "method_id");
    }
    public function requirement()
    {
        return $this->hasMany(PaymentMethodRequirement::class, "payment_method_id");
    }

}
