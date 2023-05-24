<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function index()
    {
    }

    public function login()
    {
    }

    public function register(Request $request)
    {
        try {
            $data = new User;

            $data->name = $request->name;
            $data->password = $request->password;

            $data->save();

            return 'User created successfully';
        } catch (\Exception $e) {
            return response('Server error', 500);
        }
    }

    public function logout()
    {
    }
}
