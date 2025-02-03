<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',  // Name of the user type
        'slug',  // Slug for the user type
    ];
}
