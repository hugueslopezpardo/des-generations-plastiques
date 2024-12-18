<?php

namespace App\Http\Requests\Authentication\Register;

use App\Models\Gender\Gender;
use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

/**
 * Class RegisterRequest
 * @package App\Http\Requests\Authentication\Register
 */
class RegisterRequest extends FormRequest
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
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'pseudo' => 'required|string',
            'age' => 'required|integer',
            'gender' => 'required|in:'.implode(',', Gender::all()->pluck('slug')->toArray()),
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'is_solo' => 'required|boolean',
            'password' => ['required', 'confirmed', Password::defaults()],
            'password_confirmation' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required' => 'Le prénom est obligatoire',
            'first_name.string' => 'Le prénom doit être une chaîne de caractères',
            'first_name.max' => 'Le prénom ne doit pas dépasser 255 caractères',
            'last_name.required' => 'Le nom est obligatoire',
            'last_name.string' => 'Le nom doit être une chaîne de caractères',
            'last_name.max' => 'Le nom ne doit pas dépasser 255 caractères',
            'pseudo.required' => 'Le pseudo est obligatoire',
            'pseudo.string' => 'Le pseudo doit être une chaîne de caractères',
            'pseudo.max' => 'Le pseudo ne doit pas dépasser 255 caractères',
            'pseudo.unique' => 'Le pseudo est déjà utilisé',
            'age.required' => 'L\'âge est obligatoire',
            'age.integer' => 'L\'âge doit être un entier',
            'age.min' => 'Vous devez avoir au moins 13 ans pour vous inscrire',
            'age.max' => 'L\'âge ne doit pas dépasser 255 caractères',
            'gender.required' => 'Le genre est obligatoire',
            'gender.integer' => 'Le genre doit être un entier',
            'gender.in' => 'Le genre doit être un genre valide',
            'email.required' => 'L\'email est obligatoire',
            'email.string' => 'L\'email doit être une chaîne de caractères',
            'email.lowercase' => 'L\'email doit être en minuscules',
            'email.email' => 'L\'email doit être une adresse email valide',
            'email.max' => 'L\'email ne doit pas dépasser 255 caractères',
            'email.unique' => 'L\'email est déjà utilisé',
            'password.required' => 'Le mot de passe est obligatoire',
            'password.confirmed' => 'Le mot de passe doit être confirmé',
            'password.min' => 'Le mot de passe doit contenir au moins 8 caractères',
            'password.max' => 'Le mot de passe ne doit pas dépasser 255 caractères',
            'password.regex' => 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial',
            'password_confirmation.required' => 'La confirmation du mot de passe est obligatoire',
        ];
    }

}
