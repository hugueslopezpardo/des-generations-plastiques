<?php

namespace Database\Seeders\Association;

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
                'name' => 'Associations',
                'slug' => 'associations',
            ],
            [
                'name' => 'Entreprises',
                'slug' => 'entreprises',
            ],
            [
                'name' => 'Centres culturels',
                'slug' => 'centres-culturels',
            ],
            [
                'name' => 'Médiathèques',
                'slug' => 'mediatheques',
            ],
            [
                'name' => 'Établissements d’hébergement pour personnes âgées (EHPAD, résidence sénior)',
                'slug' => 'etablissements-hebergement-personnes-agees',
            ],
            [
                'name' => 'Foyers d’accueil',
                'slug' => 'foyers-accueil',
            ],
            [
                'name' => 'MJC',
                'slug' => 'mjc',
            ],
            [
                'name' => 'Universités',
                'slug' => 'universites',
            ],
            [
                'name' => 'Collectivités',
                'slug' => 'collectivites',
            ],
            [
                'name' => 'Instituts d’éducation motrice (IEM)',
                'slug' => 'instituts-education-motrice',
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
