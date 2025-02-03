<?php

namespace App\Http\Requests\Application\Dashboard\Shared\Kit;

use Illuminate\Foundation\Http\FormRequest;

class PatchKitRequest extends FormRequest
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
            'kit_id' => 'required|exists:kits,id',
            'kit_protocol_id' => 'required|exists:kit_protocols,id',
            'kit_vegetation_id' => 'required|exists:kit_vegetations,id',
            'kit_dirt_id' => 'required|exists:kit_dirts,id',
            'kit_light_id' => 'required|exists:kit_lights,id',
        ];
    }

    public function messages(): array
    {
        return [
            'kit_id.required' => 'Le kit est obligatoire.',
            'kit_id.string' => 'Le kit doit être une chaîne de caractères.',
            'kit_id.exists' => 'Le kit sélectionné n\'existe pas.',
            'kit_protocol_id.required' => 'Le protocole est obligatoire.',
            'kit_protocol_id.string' => 'Le protocole doit être une chaîne de caractères.',
            'kit_protocol_id.exists' => 'Le protocole sélectionné n\'existe pas.',
            'kit_vegetation_id.required' => 'La végétation est obligatoire.',
            'kit_vegetation_id.string' => 'La végétation doit être une chaîne de caractères.',
            'kit_vegetation_id.exists' => 'La végétation sélectionnée n\'existe pas.',
            'kit_dirt_id.required' => 'Le type de terre est obligatoire.',
            'kit_dirt_id.string' => 'La type de terre doit être une chaîne de caractères.',
            'kit_dirt_id.exists' => 'La type de terre sélectionnée n\'existe pas.',
            'kit_light_id.required' => 'La lumière est obligatoire.',
            'kit_light_id.string' => 'La lumière doit être une chaîne de caractères.',
            'kit_light_id.exists' => 'La lumière sélectionnée n\'existe pas.',
        ];
    }

}
