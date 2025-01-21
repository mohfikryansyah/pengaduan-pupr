<?php

use App\Models\Item;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\Guest\HomeController;
use App\Http\Controllers\RepairController;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('homepage');
Route::post('/', [HomeController::class, 'store'])->name('homepage.store');

Route::get('/search', [ComplaintController::class, 'search'])->name('complaint.search');
Route::get('/delete', function () {
    $tes = Item::find(2);
    $tes->delete();
})->name('delete');

Route::get('/deletee', function (Request $request) {
    return response()->json(Item::all());
})->name('deletee');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('/repair', RepairController::class)->middleware('auth');
    Route::resource('/complaint', ComplaintController::class)->middleware('auth');
    Route::resource('/item', ItemController::class)->middleware('auth');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
