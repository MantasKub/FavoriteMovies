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

    public function create(Request $request)
    {
        try {
            $data = new Movies;

            $data->name = $request->name;
            $data->year = $request->year;
            $data->photo = $request->photo;

            $data->save();

            return 'Movie added successfully';
        } catch (\Exception $e) {
            return response('Can not save movie', 500);
        }
    }

    public function delete($id)
    {
        try {
            Movies::find($id)->delete();
            return 'Movie successfully deleted';
        } catch (\Exception $e) {
            return response('Can not delete movie', 500);
        }
    }
}
