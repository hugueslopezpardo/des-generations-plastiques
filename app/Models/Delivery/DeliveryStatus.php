<?php

namespace App\Models\Delivery;

use Illuminate\Database\Eloquent\Model;

/**
 * Class DeliveryStatus
 * @package App\Models\Core\Delivery
 */
class DeliveryStatus extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here.
     *
     * @var string
     */
    protected $table = 'delivery_statuses';  // The table name is 'delivery_statuses'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'slug', 'description'];  // Name, slug, and description of the delivery status

    /**
     * The attributes that should be hidden for serialization.
     *
     * Define any attributes you do not want to include in the JSON response.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * Define relationships if necessary.
     *
     * Add any relationships here if delivery statuses are linked to other models.
     */
}
