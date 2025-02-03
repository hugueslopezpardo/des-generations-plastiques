<?php

namespace App\Http\Requests\Application\Setup\School;

use App\Models\Department\Department;
use App\Models\Region\Region;
use App\Models\School\SchoolLevel;
use Illuminate\Foundation\Http\FormRequest;

class StoreSchoolRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        $regions = Region::all('name')->toArray();
        $departments = Department::all('name')->toArray();
        $levels = SchoolLevel::all('name')->toArray();

        return [
            'school_name' => 'required|string|max:255',
            'school_region' => 'required|in:' . implode(',', array_column($regions, 'name')),
            'school_address' => 'required|string|max:255',
            'school_city' => 'required|string|max:255',
            'school_zip_code' => 'required|string|max:255',
            'school_discipline' => 'required|string|max:255',
            'school_level' => 'required|in:' . implode(',', array_column($levels, 'name')),
            'school_is_ngp' => 'required|boolean',
            'school_is_ngp_autonomous' => 'required|boolean',
            'school_number_of_students' => 'required|integer',
            'school_number_of_students_girls' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'school_name.required' => 'Le nom de l\'établissement est requis',
            'school_name.string' => 'Le nom de l\'établissement doit être une chaîne de caractères',
            'school_name.max' => 'Le nom de l\'établissement ne doit pas dépasser 255 caractères',
            'school_region.required' => 'La région de l\'établissement est requise',
            'school_region.in' => 'La région de l\'établissement doit être une région valide',
            'school_department.required' => 'Le département de l\'établissement est requis',
            'school_department.in' => 'Le département de l\'établissement doit être un département valide',
            'school_address.required' => 'L\'adresse de l\'établissement est requise',
            'school_address.string' => 'L\'adresse de l\'établissement doit être une chaîne de caractères',
            'school_address.max' => 'L\'adresse de l\'établissement ne doit pas dépasser 255 caractères',
            'school_city.required' => 'La ville de l\'établissement est requise',
            'school_city.string' => 'La ville de l\'établissement doit être une chaîne de caractères',
            'school_city.max' => 'La ville de l\'établissement ne doit pas dépasser 255 caractères',
            'school_zip_code.required' => 'Le code postal de l\'établissement est requis',
            'school_zip_code.string' => 'Le code postal de l\'établissement doit être une chaîne de caractères',
            'school_zip_code.max' => 'Le code postal de l\'établissement ne doit pas dépasser 255 caractères',
            'school_discipline.required' => 'La discipline de l\'établissement est requise',
            'school_discipline.string' => 'La discipline de l\'établissement doit être une chaîne de caractères',
            'school_discipline.max' => 'La discipline de l\'établissement ne doit pas dépasser 255 caractères',
            'school_level.required' => 'Le niveau de l\'établissement est requis',
            'school_level.in' => 'Le niveau de l\'établissement doit être un niveau valide',
            'school_is_ngp.required' => 'Le statut NGP de l\'établissement est requis',
            'school_is_ngp.boolean' => 'Le statut NGP de l\'établissement doit être un booléen',
            'school_is_ngp_autonomous.required' => 'Le statut NGP autonome de l\'établissement est requis',
            'school_is_ngp_autonomous.boolean' => 'Le statut NGP autonome de l\'établissement doit être un booléen',
            'school_number_of_students.required' => 'Le nombre d\'élèves de l\'établissement est requis',
            'school_number_of_students.string' => 'Le nombre d\'élèves de l\'établissement doit être un entier',
            'school_number_of_students_girls.required' => 'Le nombre de filles de l\'établissement est requis',
            'school_number_of_students_girls.string' => 'Le nombre de filles de l\'établissement doit être un entier',
        ];
    }

}
