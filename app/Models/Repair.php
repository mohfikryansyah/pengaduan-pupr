<?php

namespace App\Models;

use App\Models\Item;
use App\Models\User;
use App\Models\Complaint;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Repair extends Model
{
    /** @use HasFactory<\Database\Factories\RepairFactory> */
    use HasFactory;

    protected $guarded = ['id'];
    protected $fillable = ['complaint_id', 'item_id', 'latitude', 'longitude', 'note'];
    protected $with = ['item', 'complaint'];

    public function complaint(): BelongsTo
    {
        return $this->belongsTo(Complaint::class);
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
