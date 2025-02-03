<?php

namespace Database\Seeders\Location;

use App\Models\Department\Department;
use App\Models\Region\Region;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departements = [
            'Auvergne-Rhône-Alpes' => [
                ['name' => 'Ain', 'code' => '01'],
                ['name' => 'Allier', 'code' => '03'],
                ['name' => 'Ardèche', 'code' => '07'],
                ['name' => 'Cantal', 'code' => '15'],
                ['name' => 'Drôme', 'code' => '26'],
                ['name' => 'Isère', 'code' => '38'],
                ['name' => 'Loire', 'code' => '42'],
                ['name' => 'Haute-Loire', 'code' => '43'],
                ['name' => 'Rhône', 'code' => '69'],
                ['name' => 'Savoie', 'code' => '73'],
                ['name' => 'Haute-Savoie', 'code' => '74'],
            ],
            'Bourgogne-Franche-Comté' => [
                ['name' => 'Côte-d\'Or', 'code' => '21'],
                ['name' => 'Doubs', 'code' => '25'],
                ['name' => 'Jura', 'code' => '39'],
                ['name' => 'Nièvre', 'code' => '58'],
                ['name' => 'Haute-Saône', 'code' => '70'],
                ['name' => 'Saône-et-Loire', 'code' => '71'],
                ['name' => 'Territoire de Belfort', 'code' => '90'],
            ],
            'Bretagne' => [
                ['name' => 'Côtes-d\'Armor', 'code' => '22'],
                ['name' => 'Finistère', 'code' => '29'],
                ['name' => 'Ille-et-Vilaine', 'code' => '35'],
                ['name' => 'Morbihan', 'code' => '56'],
            ],
            'Centre-Val de Loire' => [
                ['name' => 'Cher', 'code' => '18'],
                ['name' => 'Eure-et-Loir', 'code' => '28'],
                ['name' => 'Indre', 'code' => '36'],
                ['name' => 'Indre-et-Loire', 'code' => '37'],
                ['name' => 'Loir-et-Cher', 'code' => '41'],
                ['name' => 'Loiret', 'code' => '45'],
            ],
            'Grand Est' => [
                ['name' => 'Ardennes', 'code' => '08'],
                ['name' => 'Aube', 'code' => '10'],
                ['name' => 'Marne', 'code' => '51'],
                ['name' => 'Haute-Marne', 'code' => '52'],
                ['name' => 'Meurthe-et-Moselle', 'code' => '54'],
                ['name' => 'Meuse', 'code' => '55'],
                ['name' => 'Moselle', 'code' => '57'],
                ['name' => 'Bas-Rhin', 'code' => '67'],
                ['name' => 'Haut-Rhin', 'code' => '68'],
                ['name' => 'Vosges', 'code' => '88'],
            ],
            'Hauts-de-France' => [
                ['name' => 'Aisne', 'code' => '02'],
                ['name' => 'Nord', 'code' => '59'],
                ['name' => 'Oise', 'code' => '60'],
                ['name' => 'Pas-de-Calais', 'code' => '62'],
                ['name' => 'Somme', 'code' => '80'],
            ],
            'Île-de-France' => [
                ['name' => 'Paris', 'code' => '75'],
                ['name' => 'Seine-et-Marne', 'code' => '77'],
                ['name' => 'Yvelines', 'code' => '78'],
                ['name' => 'Essonne', 'code' => '91'],
                ['name' => 'Hauts-de-Seine', 'code' => '92'],
                ['name' => 'Seine-Saint-Denis', 'code' => '93'],
                ['name' => 'Val-de-Marne', 'code' => '94'],
                ['name' => 'Val-d\'Oise', 'code' => '95'],
            ],
            'Normandie' => [
                ['name' => 'Calvados', 'code' => '14'],
                ['name' => 'Eure', 'code' => '27'],
                ['name' => 'Manche', 'code' => '50'],
                ['name' => 'Orne', 'code' => '61'],
                ['name' => 'Seine-Maritime', 'code' => '76'],
            ],
            'Nouvelle-Aquitaine' => [
                ['name' => 'Charente', 'code' => '16'],
                ['name' => 'Charente-Maritime', 'code' => '17'],
                ['name' => 'Corrèze', 'code' => '19'],
                ['name' => 'Creuse', 'code' => '23'],
                ['name' => 'Dordogne', 'code' => '24'],
                ['name' => 'Gironde', 'code' => '33'],
                ['name' => 'Landes', 'code' => '40'],
                ['name' => 'Lot-et-Garonne', 'code' => '47'],
                ['name' => 'Pyrénées-Atlantiques', 'code' => '64'],
                ['name' => 'Deux-Sèvres', 'code' => '79'],
                ['name' => 'Vienne', 'code' => '86'],
                ['name' => 'Haute-Vienne', 'code' => '87'],
            ],
            'Occitanie' => [
                ['name' => 'Ariège', 'code' => '09'],
                ['name' => 'Aude', 'code' => '11'],
                ['name' => 'Aveyron', 'code' => '12'],
                ['name' => 'Gard', 'code' => '30'],
                ['name' => 'Haute-Garonne', 'code' => '31'],
                ['name' => 'Gers', 'code' => '32'],
                ['name' => 'Hautes-Pyrénées', 'code' => '65'],
                ['name' => 'Pyrénées-Orientales', 'code' => '66'],
                ['name' => 'Tarn', 'code' => '81'],
                ['name' => 'Tarn-et-Garonne', 'code' => '82'],
            ],
            'Pays de la Loire' => [
                ['name' => 'Loire-Atlantique', 'code' => '44'],
                ['name' => 'Maine-et-Loire', 'code' => '49'],
                ['name' => 'Sarthe', 'code' => '72'],
                ['name' => 'Vendée', 'code' => '85'],
            ],
            'Provence-Alpes-Côte d\'Azur' => [
                ['name' => 'Alpes-de-Haute-Provence', 'code' => '04'],
                ['name' => 'Alpes-Maritimes', 'code' => '06'],
                ['name' => 'Bouches-du-Rhône', 'code' => '13'],
                ['name' => 'Var', 'code' => '83'],
                ['name' => 'Vaucluse', 'code' => '84'],
            ],
        ];

        $timestamp = now();

        foreach ($departements as $region => $departments) {
            $region = Region::where('name', $region)->first();
            foreach ($departments as &$department) {
                $department['region_id'] = $region->id;
                $department['created_at'] = $timestamp;
                $department['updated_at'] = $timestamp;
            }
            Department::insert($departments);
        }

    }
}
