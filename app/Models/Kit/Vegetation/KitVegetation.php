<?php

namespace App\Models\Kit\Vegetation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KitVegetation extends Model
{
    /** @use HasFactory<\Database\Factories\Kit\Vegetation\KitVegetationFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

}
