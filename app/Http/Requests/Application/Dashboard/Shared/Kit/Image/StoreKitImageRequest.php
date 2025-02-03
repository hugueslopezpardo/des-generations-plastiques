<?php

namespace App\Http\Requests\Application\Dashboard\Shared\Kit\Image;

use Illuminate\Foundation\Http\FormRequest;

class StoreKitImageRequest extends FormRequest
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
            'kit_id' => 'required', 'integer', 'exists:kits,id',
            'index' => 'required', 'integer',
            'title' => 'required', 'string', 'max:255',
            'description' => 'required', 'string', 'max:255',
            'date' => 'required', 'date',
        ];
    }

    public function messages(): array
    {
        return [
            'kit_id.required' => 'Le champ kit_id est obligatoire.',
            'kit_id.integer' => 'Le champ kit_id doit être un entier.',
            'kit_id.exists' => 'Le champ kit_id doit exister dans la table kits.',
            'index.required' => 'Le champ index est obligatoire.',
            'index.integer' => 'Le champ index doit être un entier.',
            'title.required' => 'Le champ title est obligatoire.',
            'title.string' => 'Le champ title doit être une chaîne de caractères.',
            'title.max' => 'Le champ title ne doit pas dépasser 255 caractères.',
            'description.required' => 'Le champ description est obligatoire.',
            'description.string' => 'Le champ description doit être une chaîne de caractères.',
            'description.max' => 'Le champ description ne doit pas dépasser 255 caractères.',
            'image.required' => 'Le champ image est obligatoire.',
            'image.image' => 'Le champ image doit être une image.',
            'image.mimes' => 'Le champ image doit être une image de type : jpeg, png, jpg, gif.',
            'image.max' => 'Le champ image ne doit pas dépasser 524288 octets.',
            'date.required' => 'Le champ date est obligatoire.',
            'date.date' => 'Le champ date doit être une date.',
        ];
    }

}
