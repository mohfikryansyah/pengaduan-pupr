<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;
use App\Models\ComplaintFile;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $statuses = [
            ['value' => 'belum diproses', 'label' => 'Belum diproses', 'color' => 'text-orange-500', 'icon' => ''],
            ['value' => 'sedang diproses', 'label' => 'Sedang diproses', 'color' => 'text-blue-500'],
            ['value' => 'selesai diproses', 'label' => 'Selesai', 'color' => 'text-green-500'],
            ['value' => 'pengaduan ditolak', 'label' => 'Pengaduan ditolak', 'color' => 'text-red-500'],
        ];

        return Inertia::render('Admin/Pengaduan/Index', [
            'complaints' => Complaint::with(['files', 'statuses'])->latest()->get(),
            'status' => $statuses,
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
        // dd($request->all());

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'message' => 'required|string',
            'latitude' => 'required',
            'longitude' => 'required',
            'audio' => 'nullable|file',
            'files.*' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        $validatedData['longitude'] = (float) $request['longitude'];
        $validatedData['latitude'] = (float) $request['latitude'];

        DB::beginTransaction();

        try {
            $complaint = Complaint::create([
                'name' => $validatedData['name'],
                'message' => $validatedData['message'],
                'latitude' => $validatedData['latitude'],
                'longitude' => $validatedData['longitude'],
            ]);

            $complaint->statuses()->create([
                'complaint_id' => $complaint->id,
            ]);

            if ($request->hasFile('audio')) {
                $audioPath = $request->file('audio')->store('complaints/audio');
                $complaint->update(['audio' => $audioPath]);
            }

            if ($request->hasFile('files')) {
                foreach ($request->file('files') as $file) {
                    $filePath = $file->store('complaints/files');
                    ComplaintFile::create([
                        'complaint_id' => $complaint->id,
                        'file_path' => $filePath,
                    ]);
                }
            }

            DB::commit();

        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->with('error', $th->getMessage());
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
        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'message' => 'sometimes|string',
            'latitude' => 'sometimes|numeric',
            'longitude' => 'sometimes|numeric',
            'audio' => 'nullable|file|mimes:audio/*',
            'files.*' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
            'new_status' => 'sometimes'
        ]);
        
        $complaint->statuses()->create($request->only('new_status'));

        // DB::beginTransaction();

        // try {
        //     $complaint->statuses()->create($request->only('new_status'));

        //     if ($request->hasFile('audio')) {
        //         $audioPath = $request->file('audio')->store('complaints/audio');
        //         $complaint->update(['audio' => $audioPath]);
        //     }

        //     if ($request->hasFile('files')) {
        //         foreach ($request->file('files') as $file) {
        //             $filePath = $file->store('complaints/files');
        //             ComplaintFile::create([
        //                 'complaint_id' => $complaint->id,
        //                 'file_path' => $filePath,
        //             ]);
        //         }
        //     }

        //     if ($request->has('status')) {
        //         $complaint->statuses()->create([
        //             'complaint_id' => $complaint->id,
        //             'status' => $validatedData['status'],
        //         ]);
        //     }

        //     DB::commit();

        // } catch (\Throwable $th) {
        //     DB::rollBack();
        //     return redirect()->back()->with('error', $th->getMessage());
        // }

        // $complaint->update($validatedData);

        // if ($request->hasFile('audio')) {
        //     $audioPath = $request->file('audio')->store('complaints/audio');
        //     $complaint->update(['audio' => $audioPath]);
        // }

        // if ($request->hasFile('files')) {
        //     foreach ($request->file('files') as $file) {
        //         $filePath = $file->store('complaints/files');
        //         ComplaintFile::create([
        //             'complaint_id' => $complaint->id,
        //             'file_path' => $filePath,
        //         ]);
        //     }
        // }

        return redirect()->back()->with('sucess', 'Berhasil mengirimkan penguduan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }
}
