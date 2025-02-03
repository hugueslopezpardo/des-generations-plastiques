<?php

namespace Database\Seeders\Kit;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitProtocolSeeder extends Seeder
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
                'name' => 'Enfouissement',
                'slug' => 'enfouissement'
            ],
            [
                'name' => 'Clouage du kit',
                'slug' => 'clouage-du-kit'
            ],
            [
                'name' => 'Exposition à la lumière',
                'slug' => 'exposition-a-la-lumiere'
            ]
        ];

        $now = now();

        foreach ($data as &$item) {
            $item['created_at'] = $now;
            $item['updated_at'] = $now;
        }

        DB::table('kit_protocols')->insert($data);
    }
}
