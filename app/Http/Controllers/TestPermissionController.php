<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class TestPermissionController extends Controller
{
    //
    public function createRole()
    {
        $role = Role::create(['name' => 'admin']);
        dd($role);
    }

    public function setRole()
    {
        $user = User::find(1);
        $role = Role::find(1);
        $a = $user->syncRoles($role);
        dd($a);
    }
}
