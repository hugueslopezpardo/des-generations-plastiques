<?php

use App\Http\Controllers\Application\Dashboard\Common\Pictures\DashboardPictureController;
use App\Http\Controllers\Application\Dashboard\Core\Association\DashboardAssociationController;
use App\Http\Controllers\Application\Dashboard\Core\School\DashboardStudentController;
use App\Http\Controllers\Application\Dashboard\DashboardController;
use App\Http\Controllers\Application\Delivery\DeliveryDomeController;
use App\Http\Controllers\Application\Delivery\DeliveryPosteController;
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

Route::get('/media', function () {

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

Route::post('/setup/delivery/poste', [DeliveryPosteController::class, 'store'])->name('setup.delivery.poste.store')->middleware(['auth', 'verified']);
Route::post('/setup/delivery/dome', [DeliveryDomeController::class, 'store'])->name('setup.delivery.dome.store')->middleware(['auth', 'verified']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified', 'setup'])->name('dashboard');

Route::post('/dashboard/students', [DashboardStudentController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.students.store');

Route::post('/dashboard/members', [DashboardAssociationController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.association.store');

Route::post('/dashboard/images', [DashboardPictureController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard.pictures.store');

Route::delete('dashboard/images/{id}', [DashboardPictureController::class, 'destroy'])
    ->name('dashboard.images.destroy');


require __DIR__ . '/auth.php';
