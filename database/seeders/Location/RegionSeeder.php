<?php

namespace Database\Seeders\Location;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $regions = [
            ['name' => 'Auvergne-Rhône-Alpes', 'code' => 'ARA'],
            ['name' => 'Bourgogne-Franche-Comté', 'code' => 'BFC'],
            ['name' => 'Bretagne', 'code' => 'BRE'],
            ['name' => 'Centre-Val de Loire', 'code' => 'CVL'],
            ['name' => 'Grand Est', 'code' => 'GES'],
            ['name' => 'Hauts-de-France', 'code' => 'HDF'],
            ['name' => 'Île-de-France', 'code' => 'IDF'],
            ['name' => 'Normandie', 'code' => 'NOR'],
            ['name' => 'Nouvelle-Aquitaine', 'code' => 'NAQ'],
            ['name' => 'Occitanie', 'code' => 'OCC'],
            ['name' => 'Pays de la Loire', 'code' => 'PDL'],
            ['name' => 'Provence-Alpes-Côte d\'Azur', 'code' => 'PAC'],
        ];

        $timestamp = now();

        foreach ($regions as &$region) {
            $region['created_at'] = $timestamp;
            $region['updated_at'] = $timestamp;
        }

        DB::table('regions')->insert($regions);

    }
}
