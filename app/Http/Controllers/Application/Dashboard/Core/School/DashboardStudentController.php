<?php

namespace App\Http\Controllers\Application\Dashboard\Core\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Dashboard\School\StoreSchoolStudentRequest;
use App\Models\Gender\Gender;
use App\Models\School\School;
use App\Models\School\SchoolStudent;
use Illuminate\Http\RedirectResponse;

class DashboardStudentController extends Controller
{

    public function store(StoreSchoolStudentRequest $request)
    {
        $school_id = School::where('user_id', auth()->id())->first()->id;
        $gender_id = Gender::where('slug', $request->gender)->first()->id;

        // Génération d'un UUID pour le token
        $token = bin2hex(random_bytes(16));

        SchoolStudent::create([
            'first_name' => ucfirst($request->first_name),
            'last_name' => strtoupper($request->last_name),
            'age' => $request->age,
            'token' => $token,
            'is_first_report_finished' => false,
            'is_second_report_finished' => false,
            'is_third_report_finished' => false,
            'gender_id' => $gender_id,
            'school_id' => $school_id,
        ]);
    }

    /**
     * Delete a student
     * @param $id - student id
     * @return RedirectResponse
     */
    public function delete($id)
    {
        SchoolStudent::where('id', $id)->delete();
        return redirect()->back();
    }

}
