<?php

namespace App\Http\Controllers\Application\Reports;

use App\Http\Controllers\Controller;
use App\Models\School\SchoolStudent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReportInitialController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return RedirectResponse
     */
    public function index(Request $request, $token, $status): RedirectResponse | Response
    {
        $student = SchoolStudent::where('token', $token)->first();
        if (!$student) {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Application/Reports/Core/ReportInitial/Index', [
            'token' => $token,
            'status' => $status
        ]);
    }

    public function finish(Request $request, $token)
    {
        $student = SchoolStudent::where('token', $token)->first();
        if (!$student) {
            return redirect()->route('home');
        }
        $student->is_first_report_finished = true;
        $student->save();
        return redirect()->route('dashboard');
    }

}
