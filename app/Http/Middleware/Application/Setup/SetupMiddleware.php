<?php

namespace App\Http\Middleware\Application\Setup;

use App\Models\Delivery\Delivery;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetupMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $hasDelivery = $request->user() && Delivery::where('user_id', $request->user()->id)->exists();
        if ($request->user() && !$hasDelivery) {
            return redirect()->route('setup');
        }
        return $next($request);
    }
}
