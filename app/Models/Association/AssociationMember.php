<?php

namespace App\Models\Association;

use App\Models\Gender\Gender;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssociationMember extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',  // First name of the member
        'last_name',   // Last name of the member
        'age',         // Age of the member
        'gender_id',   // Foreign key to the gender table
        'association_id', // Foreign key to the association table
    ];

    /**
     * Relationship with the Gender model.
     * Each member has one gender.
     *
     * @return BelongsTo
     */
    public function gender()
    {
        return $this->belongsTo(Gender::class, 'gender_id');
    }

    /**
     * Relationship with the Association model.
     * Each member belongs to one association.
     *
     * @return BelongsTo
     */
    public function association()
    {
        return $this->belongsTo(Association::class, 'association_id');
    }
}
