<?php

namespace App\Http\Controllers\Application\Dashboard\Common\Pictures;

use App\Http\Controllers\Controller;
use App\Models\Image\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DashboardPictureController extends Controller
{
    /**
     * Store the images send by the user.
     * @return void - No return needed.
     */
    public function store(Request $request)
    {
        $picture = $request->file('image');

        $request->validate([
            'image' => 'required|image|max:10000',
        ]);

        $path = $picture->store('images', 'public');

        Image::create([
            'path' => asset('storage/' . $path),
            'user_id' => auth()->user()->id,
        ]);
    }

    /**
     * Remove the image from the database.
     * @return void - No return needed.
     */
    public function destroy(Request $request, $id)
    {
        // Set the image path.
        $image = Image::find($id);
        $imagePath = explode('/', $image->path);
        $imagePath = 'public/' . $imagePath[4] . '/' . $imagePath[5];

        // Delete the image from the database.
        Storage::delete($imagePath);

        // Delete the image from the database.
        $image->delete();
    }

}
