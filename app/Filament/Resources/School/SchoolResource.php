<?php

namespace App\Filament\Resources\School;

use App\Filament\Resources\School\SchoolResource\Pages;
use App\Filament\Resources\School\SchoolResource\RelationManagers;
use App\Models\School\School;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SchoolResource extends Resource
{
    protected static ?string $model = School::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';

    protected static ?string $navigationLabel = 'Établissements';

    protected static ?string $navigationGroup = 'Gestion';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label('Nom de l\'établissement')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('address')
                    ->label('Adresse')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('city')
                    ->label('Ville')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('zip_code')
                    ->label('Code postal')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\TextInput::make('discipline')
                    ->label('Discipline')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\Select::make('user_id')
                    ->label('Nom du référent')
                    ->disabled()
                    ->columnSpanFull()
                    ->relationship('user', 'name')
                    ->required(),
                Forms\Components\Select::make('region_id')
                    ->label('Région')
                    ->disabled()
                    ->columnSpanFull()
                    ->relationship('region', 'name')
                    ->required(),
                Forms\Components\Select::make('department_id')
                    ->label('Département')
                    ->disabled()
                    ->columnSpanFull()
                    ->relationship('department', 'name')
                    ->required(),
                Forms\Components\Select::make('school_level_id')
                    ->relationship('schoolLevel', 'name')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\Toggle::make('is_ngp')
                    ->label('Fait partie du NGP')
                    ->disabled()
                    ->columnSpanFull()
                    ->required(),
                Forms\Components\Toggle::make('is_ngp_autonomous')
                    ->label('Établissement autonome')
                    ->disabled()
                    ->columnSpanFull()
                    ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nom de l\'établissement')
                    ->searchable(),
                Tables\Columns\TextColumn::make('region.name')
                    ->label('Région')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('department.name')
                    ->label('Département')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('address')
                    ->label('Adresse')
                    ->searchable(),
                Tables\Columns\TextColumn::make('city')
                    ->label('Ville')
                    ->searchable(),
                Tables\Columns\TextColumn::make('zip_code')
                    ->label('Code postal')
                    ->searchable(),
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Nom du référent')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('user.email')
                    ->label('Email du référent')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('students_count')
                    ->label('Nombre d\'élèves')
                    ->getStateUsing(fn ($record) =>
                        $record->nbGeneralStudents() > $record->students()->count() ? $record->nbGeneralStudents() : $record->students()->count() - 1
                    )
                    ->sortable(),
                Tables\Columns\TextColumn::make('female_students_count')
                    ->label('Nombre d\'élèves femmes')
                    ->getStateUsing(fn ($record) =>
                        $record->nbFemaleStudents() > $record->students()->where('gender_id', 2)->count() ? $record->nbFemaleStudents() : $record->students()->where('gender_id', 2)->count() - 1
                    )
                    ->sortable(),
                Tables\Columns\TextColumn::make('discipline')
                    ->label('Discipline'),
                Tables\Columns\TextColumn::make('schoolLevel.name')
                    ->label('Niveau scolaire')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_ngp')
                    ->label('Fait partie du NGP')
                    ->boolean(),
                Tables\Columns\IconColumn::make('is_ngp_autonomous')
                    ->label('Établissement autonome')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Créé le')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Modifié le')
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
            'index' => Pages\ListSchools::route('/'),
            'create' => Pages\CreateSchool::route('/create'),
        ];
    }
}
