<?php

namespace App\Models;

use App\Models\Association\Association;
use App\Models\Gender\Gender;
use App\Models\Image\Image;
use App\Models\Kit\Kit;
use App\Models\Role\Role;
use App\Models\School\School;
use App\Models\User\UserType;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Class User
 * @package App\Models\User
 */
class User extends Authenticatable implements FilamentUser
{
    /**
     * The factory to be used for creating User instances.
     *
     * @use HasFactory<\Database\Factories\UserFactory>
     */
    use HasFactory, Notifiable;

    /**
     * The name of the table associated with the model.
     *
     * If the table name is different from the plural form of the model name,
     * define it here.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * These are the fields that can be assigned in bulk.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',   // First name of the user
        'last_name',    // Last name of the user
        'name',         // Full name of the user
        'pseudo',       // Pseudo name (username) of the user
        'email',        // Email address of the user
        'age',          // Age of the user
        'password',     // Password of the user
        'gender_id',    // Foreign key for the gender of the user
        'user_type_id', // Foreign key for the user type of the user
        'is_solo',      // Boolean to determine if the user is solo
        'is_setup',     // Boolean to determine if the user is setup
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * These fields will not be included when the model is serialized.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',      // Hide password from serialization
        'remember_token', // Hide remember token from serialization
    ];

    /**
     * Get the attributes that should be cast.
     *
     * This defines how certain attributes should be cast when retrieved.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',  // Cast 'email_verified_at' to a datetime instance
            'password' => 'hashed',  // Cast 'password' to a hashed value
        ];
    }

    /**
     * Relation with the gender table.
     *
     * Defines a "many-to-one" relationship between User and Gender.
     * Each user has one gender, linked by the 'gender_id' foreign key.
     *
     * @return BelongsTo
     */
    public function gender(): BelongsTo
    {
        return $this->belongsTo(Gender::class, 'gender_id');  // The 'gender_id' is the foreign key
    }

    /**
     * Relation with the roles table.
     *
     * Defines a "many-to-many" relationship between User and Role.
     * Each user can have many roles, and each role can be assigned to many users.
     *
     * @return BelongsToMany
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    /**
     * Relation with the schools table.
     *
     * Defines a "one-to-one" relationship between User and School.
     * Each user can have one school.
     *
     * @return HasOne
     */
    public function school(): HasOne
    {
        return $this->hasOne(School::class, 'user_id');  // 'user_id' is the foreign key in schools
    }

    /**
     * Relation with the associations table.
     *
     * Defines a "one-to-one" relationship between User and Association.
     * Each user can have one association.
     *
     * @return HasOne
     */
    public function association(): HasOne
    {
        return $this->hasOne(Association::class, 'user_id');  // 'user_id' is the foreign key in associations
    }


    /**
     * Relation with the images table.
     *
     * Defines a "one-to-many" relationship between User and Image.
     * Each user can have multiple images.
     *
     * @return HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(Image::class, 'user_id');  // 'user_id' is the foreign key in images
    }

    /**
     * Relation with the user_types table.
     *
     * Defines a "many-to-one" relationship between User and UserType.
     * Each user has one user type, linked by the 'user_type_id' foreign key.
     *
     * @return BelongsTo
     */
    public function userType(): BelongsTo
    {
        return $this->belongsTo(UserType::class, 'user_type_id');
    }

    /**
     * Relation with the kits table.
     *
     * Defines a "one-to-many" relationship between User and Kit.
     * Each user can have multiple kits.
     *
     * @return HasMany
     */
    public function kits(): HasMany
    {
        return $this->hasMany(Kit::class);
    }

    /**
     * Determine if the user can access the Filament panel.
     *
     * @param Panel $panel
     * @return bool
     */
    public function canAccessPanel(Panel $panel): bool
    {
        return true; // You can add more complex logic here if needed
    }
}
