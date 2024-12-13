<?php

namespace App\Http\Controllers\Application\Setup\Association;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Setup\Association\StoreAssociationRequest;
use App\Models\Association\Association;
use App\Models\Association\AssociationType;
use Illuminate\Http\Request;

class SetupAssociationController extends Controller
{

    /**
     * Store the association setup.
     * @param StoreAssociationRequest $request - The incoming request.
     * @return void
     */
    public function store(StoreAssociationRequest $request)
    {
        $associationType = AssociationType::where('name', $request->association_type)->first()->id;
        $association = Association::create([
            'name' => $request->association_name,
            'number_of_members' => $request->association_number_of_members,
            'number_of_members_girls' => $request->association_number_of_members_girls,
            'user_id' => auth()->id(),
            'association_type_id' => $associationType
        ]);
        $user = auth()->user();
        $user->update([
            'user_type_id' => 3
        ]);
    }

}
