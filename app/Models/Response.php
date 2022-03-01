<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;
    protected $table="response";
    public $timestamps = false;
    protected $fillable = [''];
    public function survey(){
        return $this->belongsTo(Survey::class, 'survey_id', 'id');
    }

    public function answer(){
        return $this->hasMany(Answer::class, 'response_id', 'id');
    }
}
