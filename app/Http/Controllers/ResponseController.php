<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Response;
use App\Models\Question;
use App\Models\Answer;
class ResponseController extends Controller
{
    function index($idSur){
        $responses = Response::where('survey_id',$idSur)->get();
        return $responses;
    }
    
    function view($idSur, $id){
       $rs = Question::join('answer', 'question.id', '=', 'answer.question_id')
                ->where('answer.response_id',$id)
                ->get();
        return $rs;
    }

    function delete($idSur, $id){
        $response = Response::find($id);
        $rs = $response->delete()?"Delete success":"Delete fail";
        return \response()->json($rs);
    }
}
