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
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('address');
            $table->string('city');
            $table->string('zip_code');
            $table->boolean('discipline');
            $table->boolean('is_ngp');
            $table->boolean('is_ngp_autonomous');
            $table->integer('number_of_students')->nullable();
            $table->integer('number_of_students_girls')->nullable();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('region_id')->constrained();
            $table->foreignId('school_level_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};
