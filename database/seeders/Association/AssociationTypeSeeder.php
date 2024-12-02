<?php

namespace Database\Seeders\Association;

use App\Models\Association\Association;
use App\Models\Association\AssociationType;
use Illuminate\Database\Seeder;

class AssociationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Association 1',
                'slug' => 'association-1',
            ],
            [
                'name' => 'Association 2',
                'slug' => 'association-2',
            ],
            [
                'name' => 'Association 3',
                'slug' => 'association-3',
            ],
            [
                'name' => 'Association 4',
                'slug' => 'association-4',
            ],
            [
                'name' => 'Association 5',
                'slug' => 'association-5',
            ],
        ];

        $timestamps = now();

        foreach ($data as &$item) {
            $item['created_at'] = $timestamps;
            $item['updated_at'] = $timestamps;
        }

        AssociationType::insert($data);
    }
}
