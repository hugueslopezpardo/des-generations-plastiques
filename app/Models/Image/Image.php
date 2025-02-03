<?php

namespace App\Models\Image;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Image
 * @package App\Models\Image
 */
class Image extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here.
     *
     * @var string
     */
    protected $table = 'images'; // The table name is 'images'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'path',     // Path to the image file
        'user_id',  // Foreign key referencing the user who owns the image
    ];

    /**
     * Relation with the users table.
     *
     * Defines a "many-to-one" relationship between Image and User.
     * Each image is associated with one user.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id'); // The 'user_id' is the foreign key
    }
}
