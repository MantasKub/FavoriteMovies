<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function index()
    {
    }

    public function login(Request $request)
    {
        try {
            $data = [
                'name' => $request->name,
                'password' => $request->password
            ];

            if (!auth()->attempt($data))
                return response('Invalid login data', 401);

            return [
                'message' => 'Login successfull',
                'token' => auth()->user()->createToken('ReactToken')->plainTextToken
            ];
        } catch (\Exception $e) {
            return response('Server error', 500);
        }
    }

    public function register(Request $request)
    {
        try {
            $data = new User;

            $data->name = $request->name;
            $data->password = bcrypt($request->password);

            $data->save();

            return [
                'message' => 'User created successfully',
                'token' => $data->createToken('ReactToken')->plainTextToken
            ];
        } catch (\Exception $e) {
            return response('Server error', 500);
        }
    }

    public function logout()
    {
        try {
            auth()->user()->tokens->each(function ($token) {
                $token->delete();
            });

            return 'You have successfully logged out';
        } catch (\Exception $e) {
            return response('Server error', 500);
        }
    }
}
