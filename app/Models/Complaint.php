<?php

namespace App\Models;

use App\Models\ComplaintFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Complaint extends Model
{
    /** @use HasFactory<\Database\Factories\ComplaintFactory> */
    use HasFactory;

    protected $guarded = ['id'];
    

    public function files(): HasMany
    {
        return $this->hasMany(ComplaintFile::class);
    }

    public function statuses(): HasOne
    {
        return $this->hasOne(ComplaintStatus::class, 'complaint_id')->latestOfMany();
    }
}
