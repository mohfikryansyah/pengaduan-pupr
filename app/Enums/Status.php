<?php

namespace App\Enums;

enum Status: string
{
    case BELUM = 'Belum diproses';
    case SEDANG = 'Sedang diproses';
    case SELESAI = 'Selesai';
    case TOLAK = 'Pengaduan ditolak';

    public static function values(): array
    {
        return array_map(fn($enum) => $enum->value, self::cases());
    }
}