<?php

use App\Http\Controllers\Application\Dashboard\Core\Association\DashboardAssociationController;
use App\Http\Controllers\Application\Dashboard\Core\School\DashboardSchoolController;
use App\Http\Controllers\Application\Dashboard\Core\School\DashboardStudentController;
use App\Http\Controllers\Application\Dashboard\DashboardController;
use App\Http\Controllers\Application\Dashboard\Shared\Kit\DashboardKitController;
use App\Http\Controllers\Application\Dashboard\Shared\Kit\Image\DashboardKitImageController;
use App\Http\Controllers\Application\Delivery\DeliveryDomeController;
use App\Http\Controllers\Application\Delivery\DeliveryPosteController;
use App\Http\Controllers\Application\Reports\ReportFinalController;
use App\Http\Controllers\Application\Reports\ReportInitialController;
use App\Http\Controllers\Application\Reports\ReportIntermediateController;
use App\Http\Controllers\Application\Setup\Association\SetupAssociationController;
use App\Http\Controllers\Application\Setup\Individual\SetupIndividualController;
use App\Http\Controllers\Application\Setup\School\SetupSchoolController;
use App\Http\Controllers\Application\Setup\SetupController;
use App\Models\File\File;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Application/Home/Index');
});

Route::get('/about', function () {
    return Inertia::render('Application/About/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Application/Contact/Index');
});

Route::get('/participate', function () {
    return Inertia::render('Application/Participate/Index');
});

Route::get('/program', function () {
    return Inertia::render('Application/Program/Index');
});

Route::patch('/dashboard/settings', [DashboardController::class, 'patch'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.settings.patch');

Route::get('/resources', function () {
    // Get all files with their categories
    $files = File::with('category')->get();

    // Loop through each file to create storage links
    foreach ($files as $file) {
        // Assuming 'path' is a directory where files are stored
        $file->thumbnail_path = asset('storage/' . $file->path . '/' . $file->thumbnail_path);
        $file->file_path = asset('storage/' . $file->path . '/' . $file->file_path);
    }

    return Inertia::render('Application/Media/Index', [
        'files' => $files
    ]);

});


Route::get('/setup', [SetupController::class, 'index'])
    ->name('setup')
    ->middleware(['auth', 'verified']);

Route::post('/setup/association', [SetupAssociationController::class, 'store'])->name('setup.association.store')->middleware(['auth', 'verified']);
Route::post('/setup/individual', [SetupIndividualController::class, 'store'])->name('setup.individual.store')->middleware(['auth', 'verified']);
Route::post('/setup/school', [SetupSchoolController::class, 'store'])->name('setup.school.store')->middleware(['auth', 'verified']);
Route::post('/setup/school/account', [SetupSchoolController::class, 'storeAccount'])->name('setup.school.account.store')->middleware(['auth', 'verified']);


Route::post('/setup/delivery/poste', [DeliveryPosteController::class, 'store'])->name('setup.delivery.poste.store')->middleware(['auth', 'verified']);
Route::post('/setup/delivery/dome', [DeliveryDomeController::class, 'store'])->name('setup.delivery.dome.store')->middleware(['auth', 'verified']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/dashboard/students', [DashboardStudentController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.students.store');

Route::post('/dashboard/members', [DashboardAssociationController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.association.store');

Route::get('/reports/initial/{token}', [ReportInitialController::class, 'index'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.initial');

Route::get('/reports/intermediate/{token}', [ReportIntermediateController::class, 'index'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.intermediate');

Route::get('/reports/final/{token}', [ReportFinalController::class, 'index'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.final');

Route::post('/reports/initial/{token}/{status}', [ReportInitialController::class, 'finish'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.initial.finish');

Route::post('/reports/intermediate/{token}/{status}', [ReportIntermediateController::class, 'finish'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.intermediate.finish');

Route::post('/reports/final/{token}/{status}', [ReportFinalController::class, 'finish'])
    ->middleware(['auth', 'verified', 'setup'])
    ->name('reports.final.finish');

Route::post('/delete/student/{id}', [DashboardStudentController::class, 'delete'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.students.delete');

Route::post('/dashboard/school/delivery/status', [DashboardSchoolController::class, 'updateDeliveryStatus'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.school.delivery.status');

Route::post('/dashboard/school/protocole', [DashboardSchoolController::class, 'updateProtocole'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.school.protocole');

Route::patch('/dashboard/kit', [DashboardKitController::class, 'patch'])->name('dashboard.kit.patch')->middleware(['auth', 'verified']);

Route::post('/dashboard/kit/image', [DashboardKitImageController::class, 'store'])->name('dashboard.kit.image.store')->middleware(['auth', 'verified']);

Route::delete('kit/image/{id}', [DashboardKitImageController::class, 'destroy'])
    ->name('dashboard.kit.image.destroy');

require __DIR__ . '/auth.php';
