<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Marcaciones extends Model
{
    use HasFactory;
    protected $fillable = ['dni','tipo_evento','tiempo','ip_publica','coordenadas'];
}
