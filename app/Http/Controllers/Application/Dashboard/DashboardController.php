<?php

namespace App\Http\Controllers\Application\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Association\Association;
use App\Models\Association\AssociationMember;
use App\Models\Gender\Gender;
use App\Models\School\School;
use App\Models\User\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Class DashboardController
 * @package App\Http\Controllers\Application\Dashboard
 */
class DashboardController extends Controller
{
    /**
     * Display the dashboard view.
     * @return Response
     */
    public function index(): Response
    {
        // Get the school where the user_id is the same as the authenticated user
        $school = School::where('user_id', auth()->id())->first();
        $association = Association::where('user_id', auth()->id())->first();

        if ($school) {
            $students = $school->students->sortBy('first_name')->map(function ($student) {
                return array_merge($student->toArray(), [
                    'gender' => $student->gender->name ?? null,
                ]);
            });
        } else {
            $students = [];
        }

        if ($association) {
            $members = AssociationMember::where('association_id', $association->id)->get();
        } else {
            $members = [];
        }

        return Inertia::render('Application/Dashboard/Index', [
            'genders' => Gender::all()->toArray(),
            'images' => Auth::user()->images->toArray(),
            'students' => $students,
            'members' => $members,
        ]);

    }
}
