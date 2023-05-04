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

    public function delete($id)
    {
        try {
            Movies::find($id)->delete();
            return 'Movie successfully deleted';
        } catch (\Exception $e) {
            return response('Error', 500);
        }
    }
}
