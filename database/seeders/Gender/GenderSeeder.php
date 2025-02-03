<?php

namespace Database\Seeders\Gender;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Homme', 'slug' => 'homme'],
            ['name' => 'Femme', 'slug' => 'femme'],
            ['name' => 'Neutre', 'slug' => 'neutre'],
            ['name' => 'Ne se prononce pas', 'slug' => 'ne-se-prononce-pas'],
        ];

        $timestamp = now();
        foreach ($data as &$gender) {
            $gender['created_at'] = $timestamp;
            $gender['updated_at'] = $timestamp;
        }

        DB::table('genders')->insert($data);
    }
}
