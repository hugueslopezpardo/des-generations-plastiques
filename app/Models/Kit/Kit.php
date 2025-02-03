<?php

namespace App\Models\Kit;

use App\Models\Kit\Dirt\KitDirt;
use App\Models\Kit\Image\KitImage;
use App\Models\Kit\Light\KitLight;
use App\Models\Kit\Protocol\KitProtocol;
use App\Models\Kit\Vegetation\KitVegetation;
use Database\Factories\Kit\KitFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Kit extends Model
{
    /** @use HasFactory<KitFactory> */
    use HasFactory;

    protected $fillable = [
        'kit_protocol_id',
        'kit_vegetation_id',
        'kit_dirt_id',
        'kit_light_id',
        'user_id',
    ];

    protected $casts = [
        'id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function images(): HasMany
    {
        return $this->hasMany(KitImage::class);
    }

    public function protocol()
    {
        return $this->belongsTo(KitProtocol::class);
    }

    public function vegetation()
    {
        return $this->belongsTo(KitVegetation::class);
    }

    public function dirt()
    {
        return $this->belongsTo(KitDirt::class);
    }

    public function light()
    {
        return $this->belongsTo(KitLight::class);
    }

}
