<?php

namespace App\Http\Controllers\Application\Setup;

use App\Http\Controllers\Controller;
use App\Models\Association\Association;
use App\Models\Association\AssociationType;
use App\Models\Delivery\DeliveryType;
use App\Models\Region\Region;
use App\Models\School\SchoolLevel;
use Inertia\Inertia;
use Inertia\Response;

class SetupController extends Controller
{
    /**
     * Display the setup view.
     * @return Response
     */
    public function index(): Response
    {
        $regions = Region::with(['departments' => function ($query) {
            $query->orderBy('name');
        }])->orderBy('name')->get()->toArray();

        $school = auth()->user()->school ? auth()->user()->school->toArray() : null;
        $association = auth()->user()->association ? auth()->user()->association->toArray() : [];
        $alreadySetup = (!empty($school) || !empty($association)) && auth()->user()->is_setup;

        $deliveryNeeded = true;

        if ($school) {
            if ($school['is_ngp'] && $school['is_ngp_autonomous']) {
                $deliveryNeeded = false;
            }
        }

        $user = auth()->user();

        return Inertia::render('Application/Setup/Index', [
            'accountType' => $user->user_type_id,
            'regions' => $regions,
            'levels' => SchoolLevel::all()->toArray(),
            'associationTypes' => AssociationType::all()->toArray(),
            'deliveryTypes' => DeliveryType::all()->toArray(),
            'alreadySetup' => $alreadySetup,
            'deliveryNeeded' => $deliveryNeeded,
            'school' => $school,
        ]);
    }

}
