<?php

namespace Database\Seeders\Delivery;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeliveryStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            ['name' => 'En attente', 'slug' => 'en-attente', 'description' => 'La livraison est en attente de traitement.'],
            ['name' => 'En transit', 'slug' => 'en-transit', 'description' => 'La livraison est en cours de transport vers sa destination.'],
            ['name' => 'Livrée', 'slug' => 'livree', 'description' => 'La livraison a été effectuée avec succès.'],
            ['name' => 'Annulée', 'slug' => 'annulee', 'description' => 'La livraison a été annulée et ne sera pas traitée.'],
            ['name' => 'Retournée', 'slug' => 'retournee', 'description' => 'La livraison a été retournée à l’expéditeur.'],
            ['name' => 'Livraison par nos médiateur·rices', 'slug' => 'livraison-par-nos-mediateur·rices', 'description' => 'La livraison a été effectuée par nos médiateur·rices.'],
        ];

        $timestamp = now();

        foreach ($statuses as &$status) {
            $status['created_at'] = $timestamp;
            $status['updated_at'] = $timestamp;
        }

        DB::table('delivery_statuses')->insert($statuses);
    }
}
