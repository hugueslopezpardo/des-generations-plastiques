<?php

namespace App\Models\Gender;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Gender
 * @package App\Models\Gender
 */
class Gender extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here. Laravel, by default, uses the plural of the model name
     * for the table name.
     *
     * @var string
     */
    protected $table = 'genders';  // The table name is 'genders'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk. In this case, it is
     * the 'name' of the gender.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name'          // The name of the gender (e.g., 'Male', 'Female', etc.)
    ];

    /**
     * The users that belong to the gender.
     *
     * Defines the relationship between the Gender and User models.
     * This assumes a "one-to-many" relationship where one gender can
     * be associated with many users.
     *
     * @return HasMany
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'gender_id');  // The 'gender_id' is the foreign key in the 'users' table
    }
}
