<?php

namespace Database\Seeders\Kit;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitDirtSeeder extends Seeder
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
                'name' => 'Sol du jardin (terre naturelle)',
                'slug' => 'sol-jardin',
            ],
            [
                'name' => 'Terreau (sol enrichi ou acheté en sacs)',
                'slug' => 'terreau',
            ],
            [
                'name' => 'Jardinière ou bac de culture',
                'slug' => 'jardiniere-bac',
            ],
            [
                'name' => 'Pot de fleurs',
                'slug' => 'pot-fleurs',
            ],
            [
                'name' => 'Autre',
                'slug' => 'autre',
            ],
        ];

        $now = now();

        foreach ($data as &$item) {
            $item['created_at'] = $now;
            $item['updated_at'] = $now;
        }

        DB::table('kit_dirts')->insert($data);
    }
}
