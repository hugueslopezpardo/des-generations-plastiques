<?php

namespace App\Http\Requests\Application\Delivery;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreDeliveryPosteRequest extends FormRequest
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
            'city' => 'required|string|max:255',
            'zip_code' => 'required|string|max:255',
            'address' => 'string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'city.required' => 'La ville est obligatoire',
            'city.string' => 'La ville doit être une chaîne de caractères',
            'city.max' => 'La ville ne doit pas dépasser 255 caractères',
            'address.required' => 'L\'adresse est obligatoire',
            'address.string' => 'L\'adresse doit être une chaîne de caractères',
            'address.max' => 'L\'adresse ne doit pas dépasser 255 caractères',
            'zip_code.required' => 'Le code postal est obligatoire',
            'zip_code.string' => 'Le code postal doit être une chaîne de caractères',
            'zip_code.max' => 'Le code postal ne doit pas dépasser 255 caractères',
        ];
    }

}
