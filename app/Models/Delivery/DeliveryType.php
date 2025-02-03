<?php

namespace App\Models\Delivery;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DeliveryType
 * @package App\Models\Delivery
 */
class DeliveryType extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here.
     *
     * @var string
     */
    protected $table = 'delivery_types'; // The table name is 'delivery_types'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', // The name of the delivery type (e.g., "Standard", "Express")
        'slug', // A unique slug for the delivery type
    ];
}
