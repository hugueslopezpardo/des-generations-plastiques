<?php

namespace App\Models\Association;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Association extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',                 // Name of the association
        'user_id',              // Foreign key for user
        'association_type_id',  // Foreign key for association type
    ];

    /**
     * Get the type of the association.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function associationType()
    {
        return $this->belongsTo(AssociationType::class);
    }

    /**
     * Get the user that owns the association.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the type of the association.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function type()
    {
        return $this->belongsTo(AssociationType::class, 'association_type_id');
    }

    /**
     * Relation with the school students table.
     *
     * Defines a "one-to-many" relationship between School and SchoolStudent.
     * Each school can have multiple
     *
     * @return HasMany
     */
    public function members(): HasMany
    {
        return $this->hasMany(AssociationMember::class, 'association_id');
    }

    /**
     * Relation with the school students table.
     *
     * Defines a "one-to-many" relationship between School and SchoolStudent.
     * Each school can have multiple
     *
     * @return HasMany
     */
    public function femaleMembers(): HasMany
    {
        return $this->hasMany(AssociationMember::class, 'association_id')->where('gender_id', 2);
    }

}
