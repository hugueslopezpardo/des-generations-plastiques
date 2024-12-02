<?php

namespace App\Models\Association;

use App\Models\Association\Association;
use Illuminate\Database\Eloquent\Model;

class AssociationType extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', // The name of the association type
        'slug', // The unique slug for the association type
    ];

    /**
     * Get all associations of this type.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function association()
    {
        return $this->hasMany(Association::class);
    }

}
