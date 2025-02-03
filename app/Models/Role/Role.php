<?php

namespace App\Models\Role;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * Class Role
 * @package App\Models\Role
 */
class Role extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here.
     *
     * @var string
     */
    protected $table = 'roles';

    /**
     * The attributes that are mass assignable.
     *
     * Define the fields that can be mass-assigned here.
     *
     * @var array
     */
    protected $fillable = [
        'name',         // Name of the role
        'slug',         // Slug of the role
        'description'   // Description of the role
    ];

    /**
     * The users that belong to the role.
     *
     * Defines the relationship between the Role and User models.
     * This assumes a many-to-many relationship.
     *
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
