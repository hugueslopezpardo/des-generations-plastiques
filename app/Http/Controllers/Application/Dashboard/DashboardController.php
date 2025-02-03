<?php

namespace App\Http\Controllers\Application\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Association\Association;
use App\Models\Association\AssociationMember;
use App\Models\Delivery\Delivery;
use App\Models\Gender\Gender;
use App\Models\Kit\Dirt\KitDirt;
use App\Models\Kit\Kit;
use App\Models\Kit\Light\KitLight;
use App\Models\Kit\Vegetation\KitVegetation;
use App\Models\Region\Region;
use App\Models\School\School;
use App\Models\School\SchoolLevel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
     * @return RedirectResponse - Response
     */
    public function index(): RedirectResponse | Response
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

        // Check the user type
        if (Auth::user()->user_type_id == 1) {
            // If the the user have a delivery
            $delivery = Delivery::where('user_id', Auth::id())->first();
            if (!$delivery) {
                return redirect()->route('setup');
            }
        }
        else if (Auth::user()->user_type_id == 2) {
            $delivery = Delivery::where('user_id', Auth::id())->first();
            if (!$delivery) {
                return redirect()->route('setup');
            }
        }

        else if (Auth::user()->user_type_id == 3) {
            $delivery = Delivery::where('user_id', Auth::id())->first();
            if (!$delivery) {
                return redirect()->route('setup');
            }
        }

        return Inertia::render('Application/Dashboard/Index', [
            'user' => Auth::user()->toArray(),
            'levels' => SchoolLevel::all()->toArray(),
            'regions' => Region::all()->toArray(),
            'genders' => Gender::all()->toArray(),
            'deliveryStatus' => Delivery::where('user_id', Auth::id())->first(),
            'images' => Auth::user()->images->toArray(),
            'students' => $students,
            'members' => $members,
            'schoolInformation' => $school,
            'kits' => Kit::with('protocol', 'vegetation', 'dirt', 'light', 'images')->where('user_id', auth()->id())->get(),
            'kit_vegetations' => KitVegetation::all()->toArray(),
            'kit_dirts' => KitDirt::all()->toArray(),
            'kit_lights' => KitLight::all()->toArray(),
        ]);
    }

    public function patch(Request $request): RedirectResponse
    {
        $school = School::where('user_id', auth()->id())->first();
        $school->name = $request->school_name;
        $school->address = $request->school_address;
        $school->city = $request->school_city;
        $school->zip_code = $request->school_zip_code;
        $school->discipline = $request->school_discipline;
        $school->is_ngp = $request->school_is_ngp;
        $school->is_ngp_autonomous = $request->school_is_ngp_autonomous;


        // Check if the (school_region) is a number
        if (is_numeric($request->school_region)) {
            $school->region_id = $request->school_region;
        } else {
            $school->region_id = Region::where('name', $request->school_region)->first()->id;
        }

        if (is_numeric($request->school_level)) {
            $school->school_level_id = $request->school_level;
        } else {
            $school->school_level_id = SchoolLevel::where('name', $request->school_level)->first()->id;
        }

        $school->number_of_students = $request->school_number_of_students;
        $school->number_of_students_girls = $request->school_number_of_students_girls;
        $school->save();
        return redirect()->back();
    }

}
