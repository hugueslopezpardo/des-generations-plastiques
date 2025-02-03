<?php

namespace Database\Seeders\Delivery;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeliveryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['name' => 'Le Dôme', 'slug' => 'le-dome'],
            ['name' => 'La Poste', 'slug' => 'la-poste'],
            ['name' => 'Relais Partenaire', 'slug' => 'relais-partenaire'],
        ];

        $timestamp = now();

        foreach ($types as &$type) {
            $type['created_at'] = $timestamp;
            $type['updated_at'] = $timestamp;
        }

        DB::table('delivery_types')->insert($types);
    }
}
