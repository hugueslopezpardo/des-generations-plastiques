<?php

namespace App\Models\Kit\Dirt;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KitDirt extends Model
{
    /** @use HasFactory<\Database\Factories\Kit\Dirt\KitDirtFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

}
