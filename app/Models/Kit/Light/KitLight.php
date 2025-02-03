<?php

namespace App\Models\Kit\Light;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KitLight extends Model
{
    /** @use HasFactory<\Database\Factories\Kit\Light\KitLightFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

}
