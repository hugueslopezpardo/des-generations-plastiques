<?php

namespace Database\Seeders\Role;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'Super Administrateur', 'slug' => 'super-administrateur', 'description' => 'Accès complet à toutes les fonctionnalités'],
            ['name' => 'Administrateur', 'slug' => 'administrateur', 'description' => 'Accès à la gestion des utilisateurs et des paramètres'],
            ['name' => 'Editeur', 'slug' => 'editeur', 'description' => 'Peut créer et modifier du contenu'],
            ['name' => 'Prestataire', 'slug' => 'prestataire', 'description' => 'Accès limité aux fonctions de prestation'],
            ['name' => 'Utilisateur', 'slug' => 'utilisateur', 'description' => 'Accès de base aux fonctionnalités'],
        ];

        $timestamp = now();
        foreach ($data as &$role) {
            $role['created_at'] = $timestamp;
            $role['updated_at'] = $timestamp;
        }

        DB::table('roles')->insert($data);
    }
}
