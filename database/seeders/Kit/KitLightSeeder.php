<?php

namespace Database\Seeders\Kit;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitLightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Non défini',
                'slug' => 'non-defini',
            ],
            [
                'name' => 'Très lumineux',
                'slug' => 'tres-lumineux',
            ],
            [
                'name' => 'Lumineux',
                'slug' => 'lumineux',
            ],
            [
                'name' => 'Peu lumineux',
                'slug' => 'peu-lumineux',
            ],
            [
                'name' => 'Sombre',
                'slug' => 'sombre',
            ]
        ];

        $now = now();

        foreach ($data as &$item) {
            $item['created_at'] = $now;
            $item['updated_at'] = $now;
        }

        DB::table('kit_lights')->insert($data);
    }
}
