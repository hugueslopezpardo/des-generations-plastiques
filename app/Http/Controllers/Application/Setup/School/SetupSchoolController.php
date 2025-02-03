<?php

namespace App\Http\Controllers\Application\Setup\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Setup\School\StoreSchoolRequest;
use App\Mail\Visualbuilder\EmailTemplates\UserRegisterIndividual;
use App\Mail\Visualbuilder\EmailTemplates\UserWelcomeSchoolNgp;
use App\Mail\Visualbuilder\EmailTemplates\UserWelcomeSchoolNgpAutonomous;
use App\Models\Delivery\Delivery;
use App\Models\Department\Department;
use App\Models\Kit\Kit;
use App\Models\Region\Region;
use App\Models\School\School;
use App\Models\School\SchoolLevel;
use App\Models\School\SchoolStudent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SetupSchoolController extends Controller
{
    /**
     * Store the school setup.
     * @param StoreSchoolRequest $request - The incoming request.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreSchoolRequest $request)
    {

        if (auth()->user()->school) {
            return redirect()->back();
        }

        $school = School::create([
            'name' => $request->school_name,
            'address' => $request->school_address,
            'city' => $request->school_city,
            'zip_code' => $request->school_zip_code,
            'discipline' => $request->school_discipline,
            'is_ngp' => $request->school_is_ngp,
            'is_ngp_autonomous' => $request->school_is_ngp_autonomous,
            'number_of_students' => $request->school_number_of_students,
            'number_of_students_girls' => $request->school_number_of_students_girls,
            'user_id' => auth()->id(),
            'region_id' => Region::where('name', $request->school_region)->first()->id,
            'school_level_id' => SchoolLevel::where('name', $request->school_level)->first()->id,
        ]);

        $user = auth()->user();

        SchoolStudent::create([
            'first_name' => 'Enseignant',
            'last_name' => '',
            'age' => $user->age,
            'token' => bin2hex(random_bytes(16)),
            'is_first_report_finished' => false,
            'is_second_report_finished' => false,
            'is_third_report_finished' => false,
            'is_teacher' => true,
            'gender_id' => $user->gender_id,
            'school_id' => $school->id,
        ]);

        // Création de 5 kits par défaut
        for ($i = 0; $i < 5; $i++) {
            Kit::create([
                'user_id' => auth()->id(),
                'kit_protocol_id' => 1,
                'kit_vegetation_id' => 1,
                'kit_dirt_id' => 1,
                'kit_light_id' => 1,
            ]);
        }

        $deliveryNeeded = true;

        if ($school) {
            if ($school['is_ngp'] && !$school['is_ngp_autonomous']) {
                $deliveryNeeded = false;
            }
        }

        if (!$deliveryNeeded) {
            Delivery::create([
                'city' => $school['city'] ?? 'N/A',
                'address' => $school['address'] ?? 'N/A',
                'zip_code' => $school['zip_code'] ?? 'N/A',
                'optional_information' => $school['optional_information'] ?? 'N/A',
                'user_id' => auth()->user()->id,
                'delivery_status_id' => 6,
                'delivery_type_id' => 1,
            ]);
            $user->is_solo = false;
            $user->is_setup = true;
            $user->save();

            return redirect()->route('dashboard');
        }

        if ($request->school_is_ngp_autonomous) {
            $user->is_solo = false;
            $user->save();
        }


        return redirect()->back();
        // return redirect()->route('setup');

    }

    /**
     * Store the second step of the school setup.
     * @param Request $request - The incoming request.
     * @return \Illuminate\Http\RedirectResponse
     */
    public function storeAccount(Request $request)
    {
        $user = auth()->user();
        $user->is_setup = true;
        $user->is_solo = $request->is_solo;
        $user->save();
        return redirect()->route('setup');
    }

}
