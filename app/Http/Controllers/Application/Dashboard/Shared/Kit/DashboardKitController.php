<?php

namespace App\Http\Controllers\Application\Dashboard\Shared\Kit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Dashboard\Shared\Kit\PatchKitRequest;
use App\Models\Kit\Kit;
use Illuminate\Http\Request;

class DashboardKitController extends Controller
{

    /**
     * Update the specified resource in storage.
     *
     * @param PatchKitRequest $request
     * @return void
     */
    public function patch(PatchKitRequest $request)
    {
        $kit = Kit::find($request->kit_id);
        $kit->kit_protocol_id = $request->kit_protocol_id;
        $kit->kit_vegetation_id = $request->kit_vegetation_id;
        $kit->kit_dirt_id = $request->kit_dirt_id;
        $kit->kit_light_id = $request->kit_light_id;
        $kit->save();
    }

}
