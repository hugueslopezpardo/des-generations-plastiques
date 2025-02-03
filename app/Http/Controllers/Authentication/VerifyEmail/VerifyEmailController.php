<?php

namespace App\Http\Controllers\Authentication\VerifyEmail;

use App\Http\Controllers\Controller;
use App\Mail\Visualbuilder\EmailTemplates\UserVerified;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
            $user = $request->user();
            Mail::to($user->email)->send(
              new UserVerified($user)
            );
        }

        return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
    }
}
