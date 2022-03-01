<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Response;
use App\Models\Question;
use App\Models\Answer;
class SurveyDetailController extends Controller
{   
    function convertTime($second){
        $hour = intdiv($second , 3600);
        $min = intdiv(($second - $hour * 3600) , 60);
        $sec = $second - $hour * 3600 - $min *  60;
        return $hour.":".$min.":".$sec;
    }

    function getDataInsight($id){
        $survey = Survey::findOrFail($id);
        $surName = $survey->name;
        $responses = Response::where('survey_id', $id)->get();
        $resCount = count($responses);
        $totalTime = 0;
        foreach($responses as $response){
            $totalTime += $response->time_response;
        }

        $timeAvg = $resCount!=0?ceil($totalTime/$resCount):0;
        $complete = $resCount!=0?100:0;
        // echo "<pre>";
        // \var_dump($responses);
        // echo "</pre>";

       return ['surId' => $id,
                'surName' => $surName,
                'views' => $resCount,
                'starts' => $resCount,
                'responses' => $resCount,
                'complete' => $complete,
                'timeAvg' => $this->convertTime($timeAvg) 
                ];
    }

    public function getDataSummary($id){
        $survey = Survey::findOrFail($id);
        $surName = $survey->name;

        $responses = Response::where('survey_id',$id)->get();
        $resCount = count($responses);

        if($resCount == 0){
            return [['totalResponse' => 0]];
        }

        $questions = Question::where('survey_id', $id)->get(); 
        // return $questions;
        $result = [];
        foreach($questions as $offset => $question){
            $id_quest = $question->id;
            $answers = Answer::where([['question_id', $id_quest], ['a_content', '<>', '']])->get();
            $responsed = count($answers);
            
            $answers = Answer::selectRaw('a_content, count(id) as quantity, round(count(id)*100 / ?, 2) as percent')
                        ->setBindings([$resCount])
                        ->where([['question_id', $id_quest], ['a_content', '<>', '']])
                        ->groupBy('a_content')
                        ->get();

            $tmp = [];
            foreach($answers as $answer){
                $tmp[$answer['a_content']] = ['quantity'=> $answer['quantity'], 'percent' => $answer['percent']];
            }
            $offerAnswers = array_keys($question->offer_answer);
            foreach($offerAnswers as $offerAnswer){
                if(!array_key_exists($offerAnswer, $tmp)){
                    $tmp[$offerAnswer] = ['quantity'=> 0, 'percent' => 0.00];
                }
            }
            ksort($tmp);

            $temp = ['offset' => $offset + 1,
                    'question' => $question->q_content,
                    'numberAnswered' => $responsed,
                    'totalResponse' => $resCount,
                    'answer' => $tmp];

            array_push($result, $temp);
        }
        
        return count($result)!=0?$count:[['totalResponse' => 0]];
                                
    }


    public function search($id, $qr){
        $result = [];
        if($qr==="..."){
            return \response()->json("No result");
        }
        $answers = Answer::where('a_content', 'like', $qr.'%')
                     ->selectRaw('response_id, count(id) as quantity')
                     ->groupBy('response_id')                    
                     ->get();
        //  return $answers;
         foreach($answers as $answer){
             $data = Answer::where('response_id', $answer['response_id'])
                             ->where('a_content', 'like', $qr.'%')
                             ->with('question')
                             ->get();
             $temp = [];
             foreach($data as $value){
                 array_push($temp, [
                     'question' => $value['question']['q_content'],
                     'answer' => $value['a_content']
                 ]);
             }
             array_push($result, [
                 'name' => $answer['response']['name'],
                 'email'=> $answer['response']['email'],
                 'total'=> $answer['quantity'],
                 'listAnswer'=> $temp
             ]);
         }
        return empty($result)?response()->json("No result"):$result;
    }
}
