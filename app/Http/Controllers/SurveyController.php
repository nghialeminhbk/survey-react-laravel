<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    public function index(){
        $surveys = Survey::selectRaw('survey.id, survey.name, survey.description, COUNT(response.id) as responses')
                         ->leftJoin('response', 'survey.id', '=', 'response.survey_id')
                         ->groupBy('survey.id','survey.name','survey.description')
                         ->paginate(4);
        return $surveys;
    }
    
    public function store(Request $request){
        $validator = Validator::make($request->all() , [
            'surveyName' => 'bail|required|min:5|max:100',
            'description' => 'bail|required'
        ]);

        if($validator->fails()){
            return response()->json($validator->messages());
        }

        $survey = new Survey;
        $survey->name = $request->input('surveyName');
        $survey->description = $request->input('description');
        return $survey->save()?\response()->json('success'):\response()->json('fail');
    }

    public function delete($id){
        $survey = Survey::find($id);
        $survey->delete();
    }

    public function find($id){
        $survey = Survey::selectRaw('survey.id, survey.name, survey.description, COUNT(response.id) as responses')
                        ->leftJoin('response', 'survey.id', '=', 'response.survey_id')
                        ->groupBy('survey.id','survey.name','survey.description')
                        ->where('survey.id',$id)
                        ->first();
        return $survey;
    }

}
