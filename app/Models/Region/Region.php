<?php

namespace App\Models\Region;

use App\Models\Department\Department;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Region extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here. By default, Laravel uses the plural form of the model name.
     *
     * @var string
     */
    protected $table = 'regions';  // The table name is 'regions'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'code'];  // Name, code, and related country ID of the region

    /**
     * Relation with the departments table.
     *
     * Defines a "one-to-many" relationship between Region and Department.
     * Each region can have many departments.
     *
     * @return HasMany
     */
    public function departments(): HasMany
    {
        return $this->hasMany(Department::class, 'region_id');  // The 'region_id' is the foreign key in the 'departments' table
    }

}
