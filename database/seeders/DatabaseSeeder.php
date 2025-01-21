<?php

namespace Database\Seeders;

use App\Models\Complaint;
use App\Models\ComplaintStatus;
use App\Models\Item;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Item::factory(10)->create();
        // Complaint::factory(18)->create();
        ComplaintStatus::factory(1000)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        User::factory()->create([
            'name' => 'Mohamad Fiqriansyah Panu',
            'email' => 'moh.fikryansyah@gmail.com',
        ]);
    }
}
