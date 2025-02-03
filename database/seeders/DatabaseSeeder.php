<?php

namespace Database\Seeders;

use Database\Seeders\Association\AssociationSeeder;
use Database\Seeders\Association\AssociationTypeSeeder;
use Database\Seeders\Delivery\DeliveryStatusSeeder;
use Database\Seeders\Delivery\DeliveryTypeSeeder;
use Database\Seeders\Email\EmailTemplateSeeder;
use Database\Seeders\Email\EmailTemplateThemeSeeder;
use Database\Seeders\File\FileCategorySeeder;
use Database\Seeders\Gender\GenderSeeder;
use Database\Seeders\Kit\KitDirtSeeder;
use Database\Seeders\Kit\KitLightSeeder;
use Database\Seeders\Kit\KitProtocolSeeder;
use Database\Seeders\Kit\KitVegetationSeeder;
use Database\Seeders\Location\DepartmentSeeder;
use Database\Seeders\Location\RegionSeeder;
use Database\Seeders\Role\RoleSeeder;
use Database\Seeders\School\SchoolLevelSeeder;
use Database\Seeders\User\UserTypeSeeder;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            DeliveryTypeSeeder::class,
            FileCategorySeeder::class,
            DeliveryStatusSeeder::class,
            RegionSeeder::class,
            DepartmentSeeder::class,
            SchoolLevelSeeder::class,
            GenderSeeder::class,
            UserTypeSeeder::class,
            RoleSeeder::class,
            AssociationTypeSeeder::class,
            EmailTemplateSeeder::class,
            EmailTemplateThemeSeeder::class,
            KitDirtSeeder::class,
            KitLightSeeder::class,
            KitProtocolSeeder::class,
            KitVegetationSeeder::class,
        ]);
    }
}
