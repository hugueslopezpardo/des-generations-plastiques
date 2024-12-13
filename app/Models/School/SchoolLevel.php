<?php

namespace App\Models\School;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SchoolLevel extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * @var string
     */
    protected $table = 'school_levels';  // The table name is 'school_levels'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',  // Name of the school level
        'slug',  // Slug representing the school level
    ];

    /**
     * Relation with the schools table.
     *
     * Defines a "one-to-many" relationship between SchoolLevel and School.
     * Each school level can be associated with multiple schools.
     *
     * @return HasMany
     */
    public function schools(): HasMany
    {
        return $this->hasMany(School::class, 'school_level_id');  // Links the 'school_level_id' foreign key in the schools table
    }
}
