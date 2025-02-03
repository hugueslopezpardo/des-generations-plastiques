<?php

namespace App\Filament\Resources\User;

use App\Filament\Resources\User\UserResource\Pages;
use App\Filament\Resources\User\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\ExportBulkAction;
use Filament\Tables\Table;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Utilisateurs';

    protected static ?string $navigationGroup = 'Gestion';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('first_name')
                    ->label('Prénom')
                    ->disabled()
                    ->required(),
                Forms\Components\TextInput::make('last_name')
                    ->label('Nom')
                    ->disabled()
                    ->required(),
                Forms\Components\TextInput::make('name')
                    ->label('Nom complet')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('pseudo')
                    ->label('Pseudo')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('email')
                    ->label('Adresse email')
                    ->disabled()
                    ->columnSpanFull()
                    ->email()
                    ->required(),
                Forms\Components\DateTimePicker::make('email_verified_at')
                    ->columnSpanFull()
                    ->disabled()
                    ->label('Date de vérification de l\'email'),
                Forms\Components\TextInput::make('age')
                    ->label('Année de naissance')
                    ->disabled()
                    ->columnSpanFull()
                    ->required()
                    ->numeric(),
                Forms\Components\Select::make('gender_id')
                    ->columnSpanFull()
                    ->disabled()
                    ->relationship('gender', 'name')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('first_name')
                    ->label('Prénom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('last_name')
                    ->label('Nom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom complet')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->label('Adresse email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('pseudo')
                    ->label('Pseudo')
                    ->searchable(),
                Tables\Columns\TextColumn::make('gender.name')
                    ->label('Genre')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('userType.name')
                    ->label('Type d\'utilisateur')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('age')
                    ->label('Année de naissance')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Date de création')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Date de modification')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    ExportBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
        ];
    }
}
