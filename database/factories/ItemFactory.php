<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    private static array $names = [
        "Lampu Jalan",
        "Tiang PJU",
        "Kabel Listrik",
        "Kursi Taman",
        "Tempat Sampah",
        "Alat Pemotong Rumput",
        "Pompa Air",
        "Pipa Saluran Air",
        "Cat Tembok",
        "Keramik Lantai",
        "Bak Sampah",
        "Batu Bata",
        "Pasir",
        "Semen",
        "Tangki Air",
    ];

    private static int $index = 0;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = self::$names[self::$index] ?? null;

        if ($name === null) {
            throw new \Exception('Tidak ada nama yang tersisa untuk digunakan.');
        }

        self::$index++;

        return [
            'name' => $name,
            'description' => fake()->sentence,
            'stock' => fake()->numberBetween(1, 100),
        ];
    }
}
