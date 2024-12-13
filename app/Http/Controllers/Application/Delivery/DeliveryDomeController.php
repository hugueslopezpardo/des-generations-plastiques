<?php

namespace App\Http\Controllers\Application\Delivery;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Delivery\StoreDeliveryDomeRequest;
use App\Mail\Visualbuilder\EmailTemplates\UserDeliveryDome;
use App\Models\Delivery\Delivery;
use App\Models\Delivery\DeliveryStatus;
use App\Models\Delivery\DeliveryType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class DeliveryDomeController extends Controller
{
    /**
     * Store a newly created resource in storage.
     * @param StoreDeliveryDomeRequest $request - Incoming request object.
     * @return RedirectResponse
     */
    public function store(StoreDeliveryDomeRequest $request): RedirectResponse
    {
        Delivery::create([
            'city' => $request->city,
            'address' => 'Aucune information',
            'zip_code' => $request->zip_code,
            'optional_information' => 'Aucune information',
            'user_id' => auth()->id(),
            'delivery_status_id' => 1,
            'delivery_type_id' => 1,
        ]);

        $user = auth()->user();
        // Mail::to($user->email)->send(new UserDeliveryDome($user));

        return redirect()->route('dashboard');
    }
}
