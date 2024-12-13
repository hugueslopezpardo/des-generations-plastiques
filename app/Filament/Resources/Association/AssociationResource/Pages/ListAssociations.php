<?php

namespace App\Filament\Resources\Association\AssociationResource\Pages;

use App\Filament\Resources\Association\AssociationResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListAssociations extends ListRecords
{
    protected static string $resource = AssociationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
