<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $table="answer";
    protected $fillable = ['question_id', 'response_id', 'a_content'];
    public $timestamps = false;
    public function response(){
        return $this->belongsTo(Response::class, 'response_id', 'id');
    }

    public function question(){
        return $this->belongsTo(Question::class, 'question_id', 'id');
    }

}
