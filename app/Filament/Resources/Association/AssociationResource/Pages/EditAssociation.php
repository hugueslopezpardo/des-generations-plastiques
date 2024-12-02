<?php

namespace App\Filament\Resources\Association\AssociationResource\Pages;

use App\Filament\Resources\Association\AssociationResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditAssociation extends EditRecord
{
    protected static string $resource = AssociationResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
