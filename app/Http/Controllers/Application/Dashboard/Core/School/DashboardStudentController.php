<?php

namespace App\Http\Controllers\Application\Dashboard\Core\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Dashboard\School\StoreSchoolStudentRequest;
use App\Models\Gender\Gender;
use App\Models\School\School;
use App\Models\School\SchoolStudent;

class DashboardStudentController extends Controller
{

    public function store(StoreSchoolStudentRequest $request)
    {
        $school_id = School::where('user_id', auth()->id())->first()->id;
        $gender_id = Gender::where('slug', $request->gender)->first()->id;
        SchoolStudent::create([
            'first_name' => ucfirst($request->first_name),
            'last_name' => strtoupper($request->last_name),
            'age' => $request->age,
            'gender_id' => $gender_id,
            'school_id' => $school_id,
        ]);
    }
}
