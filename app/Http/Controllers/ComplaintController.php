<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;
use App\Models\ComplaintFile;
use Inertia\Inertia;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Pengaduan/Index', [
            'complaints' => Complaint::with('files')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'message' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
            'audio' => 'nullable|file|mimes:audio/*',
            'files.*' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);
    
        // Simpan data pengmessage
        $complaint = Complaint::create($request->only(['name', 'message', 'latitude', 'longitude']));
    
        // Simpan audio jika ada
        if ($request->hasFile('audio')) {
            $audioPath = $request->file('audio')->store('complaints/audio');
            $complaint->update(['audio' => $audioPath]);
        }
    
        // Simpan file bukti
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $filePath = $file->store('complaints/files');
                ComplaintFile::create([
                    'complaint_id' => $complaint->id,
                    'file_path' => $filePath,
                ]);
            }
        }
    
        return redirect()->back()->with('sucess', 'Berhasil mengirimkan penguduan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Complaint $complaint)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Complaint $complaint)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Complaint $complaint)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
