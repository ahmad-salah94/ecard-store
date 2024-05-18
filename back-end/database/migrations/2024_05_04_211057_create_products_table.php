<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title_ar')->unique();
            $table->string('title_en')->unique();
            $table->string('title_api')->nullable();
            $table->string('active_api')->nullable(); //0 or 1
            //
            $table->string('currency_name')->nullable();
                     $table->bigInteger('currency_id')->nullable();
   //
            $table->string('image')->nullable();
            //
            $table->decimal('cost_price')->nullable();
            $table->decimal('selling_price')->nullable();
            $table->integer('for_quantity');
            //
            $table->bigInteger('category_id');
            //
            $table->string('description_ar')->nullable();
            $table->string('description_en')->nullable();
            //
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
