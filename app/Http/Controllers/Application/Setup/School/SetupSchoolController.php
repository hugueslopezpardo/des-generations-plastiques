<?php

namespace App\Http\Controllers\Application\Setup\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Setup\School\StoreSchoolRequest;
use App\Mail\Visualbuilder\EmailTemplates\UserRegisterIndividual;
use App\Mail\Visualbuilder\EmailTemplates\UserWelcomeSchoolNgp;
use App\Mail\Visualbuilder\EmailTemplates\UserWelcomeSchoolNgpAutonomous;
use App\Models\Department\Department;
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
     * @return void
     */
    public function store(StoreSchoolRequest $request)
    {
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
            'gender_id' => $user->gender_id,
            'school_id' => $school->id,
        ]);

        if ($request->school_is_ngp) {
            Mail::to($user->email)->send(new UserWelcomeSchoolNgp($user));
        }

        if ($request->school_is_ngp_autonomous) {
            Mail::to($user->email)->send(new UserWelcomeSchoolNgpAutonomous($user));
        }

    }
}
