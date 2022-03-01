<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    function index($idSur){
        $questions = Question::where('survey_id', $idSur)->select('id')->get();
        return $questions;
    }

    function view($id){
        return Question::findOrFail($id);
    }

    function store($idSur, Request $request){
        $validator = Validator::make($request->all() , [
            'questionContent' => ['bail','required', 'max:1000'],
            'offerAnswer' => ['required'] // Ko validate dc cai nay
        ]);

        if($validator->fails()){
            return response()->json($validator->messages());
        }

        $question = new Question;
        $question->survey_id = $idSur;
        $question->q_content = request('questionContent');
        $offerAnswers = request('offerAnswer');

        $len = count($offerAnswers);

        $c = 'A';
        while($len--){
            $chars[] = $c++;
        }
        $question->offer_answer = array_combine($chars, $offerAnswers);
        
        return $question->save()?\response()->json("success"):\response()->json("fail");
    }

    function update($id, Request $request){
        $validator = Validator::make($request->all() , [
            'questionContent' => ['bail','required', 'max:1000'],
            'offerAnswer' => ['required'] // Ko validate dc cai nay
        ]);

        if($validator->fails()){
            return response()->json($validator->messages());
        }

        $question = Question::find($id);
        $question->q_content = request('questionContent');
        $offerAnswers = request('offerAnswer');

        $len = count($offerAnswers);

        $c = 'A';
        while($len--){
            $chars[] = $c++;
        }
        $question->offer_answer = array_combine($chars, $offerAnswers);
        
        return $question->save()?\response()->json("success"):\response()->json("fail");
    }

    function delete($id){
        $question = Question::find($id);
        return $question->delete()?\response()->json("success"):\response()->json("fail");
    }
}
