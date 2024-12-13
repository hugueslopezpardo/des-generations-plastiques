<?php

namespace Database\Seeders\User;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Individuel', 'slug' => 'individual'],
            ['name' => 'Établissement scolaire', 'slug' => 'school'],
            ['name' => 'Organisation', 'slug' => 'organization'],
            ['name' => 'Non défini', 'slug' => 'undefined'],
        ];

        $timestamp = now();

        foreach ($data as $item) {
            $item['created_at'] = $timestamp;
            $item['updated_at'] = $timestamp;
        }

        DB::table('user_types')->insert($data);
    }
}
