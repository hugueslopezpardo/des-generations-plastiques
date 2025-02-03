<?php

namespace App\Http\Controllers\Application\Setup\Individual;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Setup\Individual\StoreIndividualRequest;
use Illuminate\Http\Request;

class SetupIndividualController extends Controller
{
    /**
     * Store the individual setup.
     * @param StoreIndividualRequest $request - The incoming request.
     * @return void
     */
    public function store(StoreIndividualRequest $request)
    {

        $user = auth()->user();
        $user->update([
            'user_type_id' => 1
        ]);
    }
}
