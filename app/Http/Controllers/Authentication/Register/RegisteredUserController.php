<?php

namespace App\Http\Controllers\Authentication\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authentication\Register\RegisterRequest;
use App\Mail\Visualbuilder\EmailTemplates\UserRegisterIndividual;
use App\Mail\Visualbuilder\EmailTemplates\UserRegisterOthers;
use App\Mail\Visualbuilder\EmailTemplates\UserRegisterSchool;
use App\Mail\Visualbuilder\EmailTemplates\UserWelcomeIndividual;
use App\Models\Gender\Gender;
use App\Models\Role\Role;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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
            'user_type_id' => $request->user_type_id,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->roles()->attach(
            Role::where('slug', 'utilisateur')->first()->id
        );

        // If user_type_id == 1 (individual)
        if ($request->user_type_id == 1) {
            Mail::to($user->email)->send(new UserRegisterIndividual($user));
        }

        // If user_type_id == 2 (school)
        else if ($request->user_type_id == 2) {
            Mail::to($user->email)->send(new UserRegisterSchool($user));
        }

        // If user_type_id == 3 (other)
        else if ($request->user_type_id == 3) {
            Mail::to($user->email)->send(new UserRegisterOthers($user));
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}