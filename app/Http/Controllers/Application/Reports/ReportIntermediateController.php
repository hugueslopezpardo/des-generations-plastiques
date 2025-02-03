<?php

namespace App\Http\Controllers\Application\Reports;

use App\Http\Controllers\Controller;
use App\Models\School\SchoolStudent;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReportIntermediateController extends Controller
{
    public function index(Request $request, $token, $status): RedirectResponse | Response
    {
        $student = SchoolStudent::where('token', $token)->first();
        if (!$student || !$student->is_first_report_finished) {
            return redirect()->route('dashboard');
        }
        return Inertia::render('Application/Reports/Core/ReportIntermediate/Index', [
            'token' => $token,
            'status' => $status
        ]);
    }

    public function finish(Request $request, $token): RedirectResponse
    {
        $student = SchoolStudent::where('token', $token)->first();
        if (!$student) {
            return redirect()->route('dashboard');
        }
        $student->is_second_report_finished = true;
        $student->save();
        return redirect()->route('dashboard');
    }

}
