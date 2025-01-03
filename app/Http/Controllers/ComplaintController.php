<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Complaint;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\ComplaintFile;
use Illuminate\Support\Facades\DB;

class ComplaintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Pengaduan/Index', [
            'complaints' => Complaint::latest()->get(),
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'message' => 'required|string',
            'number' => 'required|string',
            'latitude' => 'required',
            'longitude' => 'required',
            'audio' => 'nullable|file',
            'files.*' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:2048',
        ]);

        DB::beginTransaction();

        try {
            $complaint = Complaint::create([
                'name' => $validatedData['name'],
                'message' => $validatedData['message'],
                'number' => $validatedData['number'],
                'latitude' => $validatedData['latitude'] = (double) $request['longitude'],
                'longitude' => $validatedData['longitude'] = (double) $request['latitude'],
                'code' => $validatedData['code'] = 'LAPOR-' . Str::random(6),
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
        $request->validate([
            'new_status' => 'required',
        ]);

        $complaint->statuses()->create($request->only('new_status'));

        return redirect()->back()->with('sucess', 'Berhasil mengirimkan penguduan!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Complaint $complaint)
    {
        //
    }

    public function search(Request $request)
    {   
        $query = $request->get('query');

        $complaints = Complaint::where('number', 'like', $query)->get();

        dd($complaints);

        return Inertia::render('Admin/Pengaduan/Index', [
            'complaints' => $complaints,
        ]);
    }
}
