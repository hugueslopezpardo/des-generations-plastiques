<?php

namespace App\Filament\Resources\Delivery\DeliveryResource\Pages;

use App\Filament\Resources\Delivery\DeliveryResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDelivery extends EditRecord
{
    protected static string $resource = DeliveryResource::class;

    protected function getHeaderActions(): array
    {
        return [
        ];
    }
}
