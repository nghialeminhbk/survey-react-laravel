<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\SurveyDetailController;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\QuestionController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/surveys', [SurveyController::class, "index"])->name('index');
Route::delete('/surveys/{id}', [SurveyController::class, "delete"]);
Route::post('/surveys', [SurveyController::class, 'store']);
Route::get('surveys/{id}', [SurveyController::class, 'find']);

Route::get('/surveys/{id}/insight', [SurveyDetailController::class, "getDataInsight"]);
Route::get('/surveys/{id}/summary', [SurveyDetailController::class, 'getDataSummary']);
Route::get('surveys/{id}/search/{key}', [SurveyDetailController::class, 'search']);

Route::get('/surveys/{idSur}/responses', [ResponseController::class, 'index']);
Route::get('/surveys/{idSur}/responses/{id}', [ResponseController::class, 'view']);
Route::delete('/surveys/{idSur}/responses/{id}', [ResponseController::class, 'delete']);


Route::get('/surveys/{idSur}/questions', [QuestionController::class, 'index']);
Route::post('/surveys/{idSur}/questions', [QuestionController::class, 'store']);
Route::get('/questions/{id}', [QuestionController::class, 'view']);
Route::delete('/questions/{id}', [QuestionController::class, 'delete']);
Route::put('/questions/{id}', [QuestionController::class, 'update']);