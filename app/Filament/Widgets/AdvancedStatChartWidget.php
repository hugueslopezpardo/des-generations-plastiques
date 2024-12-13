<?php

namespace App\Filament\Widgets;

use EightyNine\FilamentAdvancedWidget\AdvancedChartWidget;

class AdvancedStatChartWidget extends AdvancedChartWidget
{
    protected static ?string $heading = 'Répartition des genres';

    protected static ?string $label = 'Répartition des genres dans les établissements scolaires';

    protected static string $color = 'info';
    protected static ?string $icon = 'heroicon-o-chart-bar';
    protected static ?string $iconColor = 'success';
    protected static ?string $iconBackgroundColor = 'success';

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'data' => [10, 20, 30],
                    'backgroundColor' => [
                        '#FF6633',
                        '#FFB399',
                        '#FF33FF',
                    ],
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'pie';
    }
}
