<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movies;

class MoviesController extends Controller
{
    public function index()
    {
        $data = Movies::all();

        return $data;
    }
}
