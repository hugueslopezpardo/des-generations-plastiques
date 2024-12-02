<?php

namespace App\Http\Controllers\Application\Delivery;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Delivery\StoreDeliveryPosteRequest;
use App\Models\Delivery\Delivery;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DeliveryPosteController extends Controller
{
    /**
     * Store a newly created resource in storage.
     * @param DeliveryPosteController $request - Incoming request object.
     * @return RedirectResponse
     */
    public function store(StoreDeliveryPosteRequest $request): RedirectResponse
    {
        Delivery::create([
            'city' => $request->city,
            'address' => $request->address,
            'zip_code' => $request->zip_code,
            'optional_information' => $request->optional_information ?? 'Aucune information',
            'user_id' => auth()->id(),
            'delivery_status_id' => 1,
            'delivery_type_id' => 2,
        ]);
        return redirect()->route('dashboard');
    }
}
