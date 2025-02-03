<?php

namespace App\Filament\Resources\Kit\Protocol\KitProtocolResource\Pages;

use App\Filament\Resources\Kit\Protocol\KitProtocolResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListKitProtocols extends ListRecords
{
    protected static string $resource = KitProtocolResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
