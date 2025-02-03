<?php

namespace App\Filament\Resources\Kit\Light\KitLightResource\Pages;

use App\Filament\Resources\Kit\Light\KitLightResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKitLight extends EditRecord
{
    protected static string $resource = KitLightResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
