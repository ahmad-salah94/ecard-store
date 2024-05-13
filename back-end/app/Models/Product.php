<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function category()
    {
        return $this->belongsTo(Category::class, "category_id");
    }
    //
    public function product_counter()
    {
        return $this->hasOne(ProductCounter::class, "product_id");
    }
    //
    public function product_quantity()
    {
        return $this->hasOne(ProductQuantity::class, "product_id");
    }
    //
    public function product_option()
    {
        return $this->hasOne(ProductOption::class, "product_id");
    }
    //
    public function new_requirement()
    {
        return $this->hasOne(NewRequirement::class, "product_id");
    }
    //
    public function currency()
    {
        return $this->hasMany(Currency::class, "currency_id");
    }
    
}
