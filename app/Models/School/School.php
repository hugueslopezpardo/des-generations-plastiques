<?php

namespace App\Models\School;

use App\Models\Department\Department;
use App\Models\Region\Region;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class School extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * @var string
     */
    protected $table = 'schools';  // The table name is 'schools'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',                 // Name of the school
        'address',              // Address of the school
        'city',                 // City where the school is located
        'zip_code',             // Zip code of the school's location
        'discipline',           // Whether the school enforces discipline (boolean)
        'is_ngp',               // Whether the school is NGP-compliant (boolean)
        'is_ngp_autonomous',    // Whether the school is NGP autonomous (boolean)
        'user_id',                 // Foreign key referencing the user responsible for the school
        'region_id',                // Foreign key referencing the region
        'number_of_students',       // Number of students in the school
        'number_of_students_girls', // Number
        'department_id',        // Foreign key referencing the department
        'school_level_id',      // Foreign key referencing the school level
    ];

    /**
     * Relation with the users table.
     *
     * Defines a "many-to-one" relationship between School and User.
     * Each school is managed by one user.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Relation with the regions table.
     *
     * Defines a "many-to-one" relationship between School and Region.
     * Each school belongs to one region.
     *
     * @return BelongsTo
     */
    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

    /**
     * Relation with the departments table.
     *
     * Defines a "many-to-one" relationship between School and Department.
     * Each school belongs to one department.
     *
     * @return BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    /**
     * Relation with the school levels table.
     *
     * Defines a "many-to-one" relationship between School and SchoolLevel.
     * Each school belongs to one school level.
     *
     * @return BelongsTo
     */
    public function schoolLevel(): BelongsTo
    {
        return $this->belongsTo(SchoolLevel::class, 'school_level_id');
    }

    /**
     * Relation with the school students table.
     *
     * Defines a "one-to-many" relationship between School and SchoolStudent.
     * Each school can have multiple students.
     *
     * @return HasMany
     */
    public function students(): HasMany
    {
        return $this->hasMany(SchoolStudent::class, 'school_id');  // Links the 'school_id' foreign key in the school_students table
    }

    public function nbGeneralStudents(): int
    {
        return $this->number_of_students;
    }

    public function nbFemaleStudents(): int
    {
        return $this->number_of_students_girls;
    }

    /**
     * Relation with the school students table.
     *
     * Defines a "one-to-many" relationship between School and SchoolStudent.
     * Each school can have multiple
     *
     * @return HasMany
     */
    public function femaleStudents(): HasMany
    {
        return $this->hasMany(SchoolStudent::class, 'school_id')->where('gender_id', 2);
    }

}
