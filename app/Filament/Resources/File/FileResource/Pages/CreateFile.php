<?php

namespace App\Filament\Resources\File\FileResource\Pages;

use App\Filament\Resources\File\FileResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateFile extends CreateRecord
{
    protected static string $resource = FileResource::class;
}
