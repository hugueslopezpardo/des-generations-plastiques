<?php

namespace App\Models\School;

use App\Models\Gender\Gender;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SchoolStudent extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * @var string
     */
    protected $table = 'school_students';  // The table name is 'school_students'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',  // First name of the student
        'last_name',   // Last name of the student
        'age',         // Age of the student
        'token',       // Token for the student
        'is_first_report_finished',  // Whether the first report is finished (boolean)
        'is_second_report_finished',  // Whether the second report is finished (boolean)
        'is_third_report_finished',   // Whether the third report is finished (boolean)
        'gender_id',   // Foreign key referencing the student's gender
        'school_id',   // Foreign key referencing the school the student belongs to
        'is_teacher',  // Whether the student is a teacher (boolean)
    ];

    /**
     * Relation with the genders table.
     *
     * Defines a "many-to-one" relationship between SchoolStudent and Gender.
     * Each student is associated with one gender.
     *
     * @return BelongsTo
     */
    public function gender(): BelongsTo
    {
        return $this->belongsTo(Gender::class, 'gender_id');  // Links the 'gender_id' foreign key to the Gender model
    }

    /**
     * Relation with the schools table.
     *
     * Defines a "many-to-one" relationship between SchoolStudent and School.
     * Each student is associated with one school.
     *
     * @return BelongsTo
     */
    public function school(): BelongsTo
    {
        return $this->belongsTo(School::class, 'school_id');  // Links the 'school_id' foreign key to the School model
    }
}
