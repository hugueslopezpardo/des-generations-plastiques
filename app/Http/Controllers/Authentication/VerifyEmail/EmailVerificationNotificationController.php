<?php

namespace App\Http\Controllers\Authentication\VerifyEmail;

use App\Http\Controllers\Controller;
use App\Mail\Visualbuilder\EmailTemplates\UserLogin;
use App\Mail\Visualbuilder\EmailTemplates\UserVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false));
        }

        // $request->user()->sendEmailVerificationNotification();

        $user = $request->user();
        Mail::to($user->email)->send(new UserVerifyEmail($user));

        return back()->with('status', 'verification-link-sent');
    }
}
