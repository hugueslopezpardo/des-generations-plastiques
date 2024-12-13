<?php

namespace App\Http\Requests\Application\Dashboard\School;

use App\Models\Gender\Gender;
use Illuminate\Foundation\Http\FormRequest;

class StoreSchoolStudentRequest extends FormRequest
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
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'age' => 'required|integer',
            'gender' => 'required|in:'.implode(',', Gender::all()->pluck('slug')->toArray()),
        ];
    }

    public function messages()
    {
        return [
            'first_name.required' => 'Le prénom est obligatoire',
            'first_name.string' => 'Le prénom doit être une chaîne de caractères',
            'first_name.max' => 'Le prénom ne doit pas dépasser 255 caractères',
            'last_name.required' => 'Le nom est obligatoire',
            'last_name.string' => 'Le nom doit être une chaîne de caractères',
            'last_name.max' => 'Le nom ne doit pas dépasser 255 caractères',
            'age.required' => 'L\'âge est obligatoire',
            'age.integer' => 'L\'âge doit être un entier',
            'gender.required' => 'Le genre est obligatoire'
        ];
    }

}
