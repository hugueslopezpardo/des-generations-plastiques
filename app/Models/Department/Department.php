<?php

namespace App\Models\Department;

use App\Models\Region\Region;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Department extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here. By default, Laravel uses the plural form of the model name.
     *
     * @var string
     */
    protected $table = 'departments';  // The table name is 'departments'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'code', 'region_id'];  // Name, code, and related region ID of the department

    /**
     * Relation with the regions table.
     *
     * Defines a "many-to-one" relationship between Department and Region.
     * Each department belongs to one region, linked by the 'region_id' foreign key.
     *
     * @return BelongsTo
     */
    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class, 'region_id');
    }

}
