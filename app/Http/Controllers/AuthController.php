<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6',
            ],
            [
                'name.required' => 'Tên không được để trống.',
                'email.required' => 'Email không được để trống.',
                'password.required' => 'Mật khẩu không được để trống.',
                'password.min' => 'Mật khẩu phải có ít nhất 6 ký tự.',
            ]
        );

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json(['message' => 'Đăng ký thành công.'], 200);
    }

    public function login(Request $request)
    {
        $request->validate(
            [
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:6',
            ],
            [
                'email.required' => 'Email không được để trống.',
                'password.required' => 'Mật khẩu không được để trống.',
                'password.min' => 'Mật khẩu phải có ít nhất 6 ký tự.',
            ]
        );

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'Email không tồn tại.'], 403);
        }
        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Mật khẩu không đúng.'], 403);
        }

        $token = $user->createToken('MyApp')->plainTextToken;

        return response()->json(['message' => 'Đăng nhập thành công.', 'token' => $token], 200);
    }
}
