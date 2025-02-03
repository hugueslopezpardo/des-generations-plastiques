<?php

namespace Database\Seeders\Kit;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitVegetationSeeder extends Seeder
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
                'name' => 'Aucun végétal',
                'slug' => 'aucun-vegetal',
            ],
            [
                'name' => 'Herbe (gazon, pelouse, etc.)',
                'slug' => 'herbe',
            ],
            [
                'name' => 'Fleurs (plantes ornementales ou sauvages, ex. : marguerites, tulipes)',
                'slug' => 'fleurs',
            ],
            [
                'name' => 'Plantes (légumes, arbustes, ou plantes non fleuries)',
                'slug' => 'plantes',
            ],
            [
                'name' => 'Arbres (petits ou grands arbres, ex. : pommier, érable)',
                'slug' => 'arbres',
            ],
            [
                'name' => 'Autre (précisez)',
                'slug' => 'autre',
            ],
        ];

        $now = now();

        foreach ($data as &$item) {
            $item['created_at'] = $now;
            $item['updated_at'] = $now;
        }

        DB::table('kit_vegetations')->insert($data);
    }
}
