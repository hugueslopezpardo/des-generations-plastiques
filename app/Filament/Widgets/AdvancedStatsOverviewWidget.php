<?php

namespace App\Filament\Widgets;

use App\Models\Association\Association;
use App\Models\School\School;
use App\Models\User;
use EightyNine\FilamentAdvancedWidget\AdvancedStatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AdvancedStatsOverviewWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Users', "")
                ->icon('heroicon-o-users')
                ->value(User::count())
                ->label('Nombre total d\'utilisateurs'),

            Stat::make('Total Schools', "")
                ->label('Nombre d\'établissements')
                ->icon('heroicon-o-academic-cap')
                ->value(School::count()),
            Stat::make('Total Others', "")
                ->label('Nombre d\'établissements non scolaires')
                ->icon('heroicon-o-heart')
                ->value(Association::count()),
        ];
    }
}
