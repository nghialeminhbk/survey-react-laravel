<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;
    protected $table="survey";
    public function response(){
        return $this->hasMany(Response::class, 'survey_id', 'id');
    }
    public function answer(){
        return $this->hasManyThrough(Answer::class, Response::class, 'survey_id', 'response_id', 'id', 'id');

    }
}
