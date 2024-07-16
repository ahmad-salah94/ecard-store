<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function method()
    {
        return $this->hasMany(PaymentMethod::class, "id");
    }
    public function currency()
    {
        return $this->hasMany(Currency::class, "id");
    }
    public function user()
    {
        return $this->hasMany(User::class, "id");
    }
}
