<?php

namespace App\Http\Controllers\Application\Dashboard\Core\School;

use App\Http\Controllers\Controller;
use App\Models\Delivery\Delivery;
use App\Models\Kit\Kit;
use Illuminate\Http\Request;

class DashboardSchoolController extends Controller
{

    public function updateDeliveryStatus(Request $request)
    {
        // Get the user id
        $user_id = auth()->id();

        // Get the delivery
        $delivery = Delivery::where('user_id', $user_id)->first();

        // Update the delivery status
        $delivery->update([
            'delivery_status_id' => $request->is_delivery,
        ]);

        // On sauvegarde la livraison
        $delivery->save();

        return redirect()->back();
    }

    public function updateProtocole(Request $request)
    {
        // Get the user
        $user = auth()->user();

        // Update the protocole_type
        $user->update([
            'protocole_type' => $request->protocole_type,
        ]);

        $kit = Kit::where('id', $request->kit_id)->first();
        $kit->update([
            'kit_protocol_id' => $request->kit_protocol_id,
            'kit_vegetation_id' => $request->kit_vegetation_id,
            'kit_dirt_id' => $request->kit_dirt_id,
            'kit_light_id' => $request->kit_light_id,
        ]);

        // On sauvegarde le protocole
        $user->save();

        return redirect()->back();
    }

}
