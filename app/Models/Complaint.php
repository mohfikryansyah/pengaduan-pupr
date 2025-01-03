<?php

namespace App\Models;

use App\Models\ComplaintFile;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Complaint extends Model
{
    /** @use HasFactory<\Database\Factories\ComplaintFactory> */
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['files', 'statuses'];
    // protected $casts = [
    //     'created_at' => 'datetime:Y-m-d H:i:s',
    // ];
    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => \Carbon\Carbon::parse($value)->diffForHumans()
        );
    }
    

    public function files(): HasMany
    {
        return $this->hasMany(ComplaintFile::class);
    }

    public function statuses(): HasOne
    {
        return $this->hasOne(ComplaintStatus::class, 'complaint_id')->latestOfMany();
    }
}
