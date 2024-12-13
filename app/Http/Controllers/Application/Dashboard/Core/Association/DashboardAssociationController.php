<?php

namespace App\Http\Controllers\Application\Dashboard\Core\Association;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Dashboard\Association\StoreAssociationMemberRequest;
use App\Models\Association\Association;
use App\Models\Association\AssociationMember;
use App\Models\Gender\Gender;
use App\Models\School\School;
use Illuminate\Http\Request;

class DashboardAssociationController extends Controller
{
    public function store(StoreAssociationMemberRequest $request)
    {
        $association_id = Association::where('user_id', auth()->id())->first()->id;
        $gender_id = Gender::where('slug', $request->gender)->first()->id;
        AssociationMember::create([
            'first_name' => ucfirst($request->first_name),
            'last_name' => strtoupper($request->last_name),
            'age' => $request->age,
            'gender_id' => $gender_id,
            'association_id' => $association_id,
        ]);
    }
}
