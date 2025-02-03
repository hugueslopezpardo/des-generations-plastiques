<?php

namespace Database\Seeders\School;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchoolLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Moyenne section', 'slug' => 'moyenne-section'],
            ['name' => 'Grande section', 'slug' => 'grande-section'],
            ['name' => 'CP', 'slug' => 'cp'],
            ['name' => 'CE1', 'slug' => 'ce1'],
            ['name' => 'CE2', 'slug' => 'ce2'],
            ['name' => 'CM1', 'slug' => 'cm1'],
            ['name' => 'CM2', 'slug' => 'cm2'],
            ['name' => '6ème', 'slug' => '6eme'],
            ['name' => '5ème', 'slug' => '5eme'],
            ['name' => '4ème', 'slug' => '4eme'],
            ['name' => '3ème', 'slug' => '3eme'],
            ['name' => '2nde', 'slug' => '2nde'],
            ['name' => '1ère', 'slug' => '1ere'],
            ['name' => 'Terminale', 'slug' => 'terminale'],
            ['name' => 'Étude supérieure', 'slug' => 'etude-superieure'],
        ];

        $timestamp = now();

        foreach ($data as &$level) {
            $level['created_at'] = $timestamp;
            $level['updated_at'] = $timestamp;
        }

        DB::table('school_levels')->insert($data);
    }
}
