<?php

namespace App\Models\Kit\Protocol;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KitProtocol extends Model
{
    /** @use HasFactory<\Database\Factories\Kit\Protocol\KitProtocolFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

}
