<?php

namespace App\Models\Kit\Image;

use App\Models\Kit\Kit;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class KitImage extends Model
{
    /** @use HasFactory<\Database\Factories\Kit\Image\KitImageFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[] $fillable
     */
    protected $fillable = [
        'kit_id',
        'index',
        'title',
        'description',
        'href',
        'date'
    ];

    /**
     * Get the kit that owns the image.
     */
    public function kit(): BelongsTo
    {
        return $this->belongsTo(Kit::class);
    }

    /**
     * Get the image's URL.
     *
     * @return string
     */
    public function getUrlAttribute(): string
    {
        return asset('storage/' . $this->href);
    }

}
