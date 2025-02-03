<?php

namespace App\Filament\Resources\Delivery;

use App\Filament\Resources\Delivery\DeliveryResource\Pages;
use App\Filament\Resources\Delivery\DeliveryResource\RelationManagers;
use App\Models\Delivery\Delivery;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DeliveryResource extends Resource
{
    protected static ?string $model = Delivery::class;

    protected static ?string $navigationIcon = 'heroicon-o-archive-box';

    protected static ?string $navigationLabel = 'Livraisons';

    protected static ?string $navigationGroup = 'Gestion';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('delivery_status_id')
                    ->columnSpanFull()
                    ->label('Statut de la livraison')
                    ->relationship('status', 'name')
                    ->required(),
                Forms\Components\Select::make('delivery_type_id')
                    ->label('Type de livraison')
                    ->columnSpanFull()
                    ->disabled()
                    ->relationship('type', 'name')
                    ->required(),
                Forms\Components\Select::make('user_id')
                    ->label('Nom de l\'utilisateur à livrer')
                    ->relationship('user', 'name')
                    ->columnSpanFull()
                    ->disabled()
                    ->required(),
                Forms\Components\TextInput::make('city')
                    ->label('Ville')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('address')
                    ->label('Adresse')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('zip_code')
                    ->label('Code postal')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('optional_information')
                    ->label('Informations complémentaires')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Nom de l\'utilisateur')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status.name')
                    ->label('Statut de la livraison')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('deliveryType.name')
                    ->label('Type de livraison')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([

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
            'index' => Pages\ListDeliveries::route('/'),
            'create' => Pages\CreateDelivery::route('/create'),
            'edit' => Pages\EditDelivery::route('/{record}/edit'),
        ];
    }
}
