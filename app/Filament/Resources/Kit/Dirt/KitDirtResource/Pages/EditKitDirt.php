<?php

namespace App\Filament\Resources\Kit\Dirt\KitDirtResource\Pages;

use App\Filament\Resources\Kit\Dirt\KitDirtResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditKitDirt extends EditRecord
{
    protected static string $resource = KitDirtResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
