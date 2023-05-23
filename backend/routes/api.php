<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MoviesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'movies'], function () {
  Route::get('/', [MoviesController::class, 'index']);
  Route::get('/s/{keyword}', [MoviesController::class, 'search']);
  Route::post('/', [MoviesController::class, 'create']);
  Route::delete('/{id}', [MoviesController::class, 'delete'])->where('id', '[0-9]+');
});
