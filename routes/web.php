<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Welcome')->name('home');

// Landing page routes
Route::inertia('/features', 'Features')->name('features');
Route::inertia('/how-it-works', 'HowItWorks')->name('how-it-works');
Route::inertia('/pricing', 'Pricing')->name('pricing');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/demo', 'Demo')->name('demo');
Route::inertia('/integrations', 'Integrations')->name('integrations');
Route::inertia('/api', 'ApiDocs')->name('api');
Route::inertia('/changelog', 'Changelog')->name('changelog');
Route::inertia('/blog', 'Blog')->name('blog');
Route::inertia('/careers', 'Careers')->name('careers');
Route::inertia('/press', 'Press')->name('press');
Route::inertia('/contact', 'Contact')->name('contact');
Route::inertia('/help', 'Help')->name('help');
Route::inertia('/community', 'Community')->name('community');
Route::inertia('/templates', 'Templates')->name('templates');
Route::inertia('/shortcuts', 'Shortcuts')->name('shortcuts');
Route::inertia('/status', 'Status')->name('status');
Route::inertia('/privacy', 'Privacy')->name('privacy');
Route::inertia('/terms', 'Terms')->name('terms');
Route::inertia('/cookies', 'Cookies')->name('cookies');
Route::inertia('/security', 'Security')->name('security');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $tasks = auth()->user()->tasks()->latest()->get();

        return Inertia::render('Dashboard', ['tasks' => $tasks]);
    })->name('dashboard');
    Route::get('/tasks', [TaskController::class, 'index'])->name('tasks.index');
    Route::post('/tasks', [TaskController::class, 'store'])->name('tasks.store');
    Route::put('/tasks/{task}', [TaskController::class, 'update'])->name('tasks.update');
    Route::patch('/tasks/{task}', [TaskController::class, 'toggle'])->name('tasks.toggle');
    Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->name('tasks.destroy');
});

require __DIR__.'/settings.php';
