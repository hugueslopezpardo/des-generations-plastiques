<?php

namespace App\Models\File;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class File extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',          // Title of the file
        'thumbnail_path', // Path to the file's thumbnail image
        'file_path',      // Path to the file
        'description',    // Description of the file (optional)
        'file_category_id', // Foreign key for the file's category
    ];

    /**
     * Get the file category associated with this file.
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(FileCategory::class, 'file_category_id');
    }

    /**
     * Get the URL for the file.
     *
     * @return string
     */
    public function getFileUrlAttribute(): string
    {
        return asset('storage/' . $this->file_path);
    }

    /**
     * Get the URL for the thumbnail image.
     *
     * @return string
     */
    public function getThumbnailUrlAttribute(): string
    {
        return asset('storage/' . $this->thumbnail_path);
    }
}
