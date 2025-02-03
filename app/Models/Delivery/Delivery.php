<?php

namespace App\Models\Delivery;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Delivery extends Model
{
    /**
     * The name of the table associated with the model.
     *
     * @var string
     */
    protected $table = 'deliveries';  // The table name is 'deliveries'

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'city',                  // City of the delivery address
        'address',               // Detailed delivery address (optional)
        'zip_code',              // Zip code of the delivery location
        'optional_information',  // Additional information about the delivery (optional)
        'user_id',               // Foreign key referencing the user making the delivery
        'delivery_status_id',    // Foreign key referencing the delivery status
        'delivery_type_id',      // Foreign key referencing the delivery type
    ];

    /**
     * Relation with the users table.
     *
     * Defines a "many-to-one" relationship between Delivery and User.
     * Each delivery belongs to one user.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Relation with the delivery statuses table.
     *
     * Defines a "many-to-one" relationship between Delivery and DeliveryStatus.
     * Each delivery has one status.
     *
     * @return BelongsTo
     */
    public function status(): BelongsTo
    {
        return $this->belongsTo(DeliveryStatus::class, 'delivery_status_id');
    }

    /**
     * Relation with the delivery types table.
     *
     * Defines a "many-to-one" relationship between Delivery and DeliveryType.
     * Each delivery has one type.
     *
     * @return BelongsTo
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(DeliveryType::class, 'delivery_type_id');
    }

}
