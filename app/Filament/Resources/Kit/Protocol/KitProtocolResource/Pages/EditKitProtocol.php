<?php

namespace App\Filament\Resources\Kit\Protocol\KitProtocolResource\Pages;

use App\Filament\Resources\Kit\Protocol\KitProtocolResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKitProtocol extends EditRecord
{
    protected static string $resource = KitProtocolResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
