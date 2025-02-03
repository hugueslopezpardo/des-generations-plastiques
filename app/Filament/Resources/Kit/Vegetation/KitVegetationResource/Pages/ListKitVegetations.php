<?php

namespace App\Filament\Resources\Kit\Vegetation\KitVegetationResource\Pages;

use App\Filament\Resources\Kit\Vegetation\KitVegetationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListKitVegetations extends ListRecords
{
    protected static string $resource = KitVegetationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
