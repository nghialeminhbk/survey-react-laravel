<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $table="question";

    protected $casts = [
        'offer_answer' => 'array'
    ];

    public $timestamps = false;


    public function survey(){
        return $this->belongsTo(Survey::class, 'survey_id', 'id');
    }
}
