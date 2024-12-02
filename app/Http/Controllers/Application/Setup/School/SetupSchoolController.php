<?php

namespace App\Http\Controllers\Application\Setup\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Setup\School\StoreSchoolRequest;
use App\Models\Department\Department;
use App\Models\Region\Region;
use App\Models\School\School;
use App\Models\School\SchoolLevel;
use Illuminate\Http\Request;

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
            'user_id' => auth()->id(),
            'region_id' => Region::where('name', $request->school_region)->first()->id,
            'department_id' => Department::where('name', $request->school_department)->first()->id,
            'school_level_id' => SchoolLevel::where('name', $request->school_level)->first()->id,
        ]);

        $user = auth()->user();

        $user->update([
            'user_type_id' => 2
        ]);

    }
}
