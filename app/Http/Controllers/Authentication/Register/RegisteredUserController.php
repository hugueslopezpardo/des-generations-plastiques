<?php

namespace App\Http\Controllers\Authentication\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\Register\RegisterRequest;
use App\Models\Gender\Gender;
use App\Models\Role\Role;
use App\Models\User\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Authentication/Register/Index', [
            'genders' => Gender::all(),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $user = User::create([
            'first_name' => ucfirst($request->first_name),
            'last_name' => strtoupper($request->last_name),
            'name' => ucfirst($request->first_name) . ' ' . strtoupper($request->last_name),
            'pseudo' => $request->pseudo,
            'age' => $request->age,
            'gender_id' => Gender::where('slug', $request->gender)->first()->id,
            'user_type_id' => 1,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->roles()->attach(
            Role::where('slug', 'utilisateur')->first()->id
        );

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
