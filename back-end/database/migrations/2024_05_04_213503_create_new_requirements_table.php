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
        Schema::create('new_requirements', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('product_id');
            $table->string('font_size');
            $table->string('title_ar');
            $table->string('title_en');
            $table->string('details_ar');
            $table->string('details_en');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('new_requirements');
    }
};
