<?php

namespace Database\Seeders\File;

use App\Models\File\FileCategory;
use Illuminate\Database\Seeder;

class FileCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'En Bref'],
            ['name' => 'Coups de coeur'],
            ['name' => 'Livre et films'],
            ['name' => 'Article scientifique et thèses'],
            ['name' => 'Dans la presse'],
            ['name' => 'Trucs et astuces']
        ];

        $timestamp = now();

        foreach ($data as $category) {
            $category['created_at'] = $timestamp;
            $category['updated_at'] = $timestamp;
        }

        FileCategory::insert($data);

    }
}
