<?php

namespace App\Http\Controllers\Application\Dashboard\Shared\Kit\Image;

use App\Http\Controllers\Controller;
use App\Http\Requests\Application\Dashboard\Shared\Kit\Image\StoreKitImageRequest;
use App\Models\Kit\Image\KitImage;
use App\Models\Kit\Kit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class DashboardKitImageController extends Controller
{
    public function store(StoreKitImageRequest $request)
    {
        // Retrieve the uploaded image
        $image = $request->file('image');

        // Define the path for storage
        $path = 'kits/' . Auth::id();



        // Get the kit details
        $kit = Kit::findOrFail($request->kit_id);

        $date = $request->date;

        // Replace the / with - in the date
        $date = str_replace('/', '-', $date);

        // Define the name of the image
        $extension = $image->getClientOriginalExtension(); // Get the original file extension
        $name = sprintf(
            '%s_%d_%d_%d_%d_%d_%d_%s.%s',
            Auth::id(),
            $kit->id,
            $request->index,
            $kit->kit_protocol_id,
            $kit->kit_vegetation_id,
            $kit->kit_dirt_id,
            $kit->kit_light_id,
            $date,
            $extension
        );

        // Store the image
        $storedPath = $image->storeAs($path, $name, 'public');

        $kit = KitImage::create([
            'kit_id' => $kit->id,
            'index' => $request->index,
            'title' => $request->title,
            'description' => $request->description,
            'href' => $storedPath,
            'date' => $request->date,
        ]);


        $kit->href = $kit->getUrlAttribute();
        $kit->save();
    }

    /**
     * Remove the image from the database.
     * @return void - No return needed.
     */
    public function destroy(Request $request, $id)
    {
        // Find the image
        $image = KitImage::findOrFail($id);
        $imagePath = $image->href;

        // Get the last part of the path
        $path = explode('/', $imagePath);
        $path = end($path);

        // Delete the image from the storage.
        Storage::delete('public/kits/' . Auth::id() . '/' . $path);

        // Delete the image from the database.
        $image->delete();
    }

}
