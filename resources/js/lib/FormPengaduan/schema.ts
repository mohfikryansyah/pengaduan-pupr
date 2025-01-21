import { z } from 'zod';

export const FormPengaduan = z.object({
    name: z.string().min(2, "Harus lebih dari 2 karakter").max(80, 'Tidak boleh lebih dari 80 karakter'),
    telp: z
    .string()
    .min(9, "Nomor telepon harus memiliki minimal 9 karakter")
    .max(15, "Nomor telepon tidak boleh lebih dari 15 karakter")
    .regex(/^\d+$/, "Nomor telepon hanya boleh mengandung angka"),
    message: z.string().nonempty({ message: "Tidak boleh kosong" }),
    audio: z.instanceof(File).optional(),
    latitude: z.union([z.number(), z.string().regex(/^\d+(\.\d+)?$/, {
              message: "Hanya angka atau angka dengan titik yang diperbolehkan.",
                }).nonempty()]),
    longitude: z.union([z.number(), z.string().regex(/^\d+(\.\d+)?$/, {
              message: "Hanya angka atau angka dengan titik yang diperbolehkan.",
                }).nonempty()]),
    files: z.array(z.instanceof(File)).optional(),
});

export const FormRepair = z.object({
    item_id: z.union([z.number(), z.string().nonempty(),]),
    complaint_id: z.union([z.number(), z.string().nonempty(),]),
    latitude: z.union([z.number(), z.string().regex(/^\d+(\.\d+)?$/, {
              message: "Hanya angka atau angka dengan titik yang diperbolehkan.",
                }).nonempty()]),
    longitude: z.union([z.number(), z.string().regex(/^\d+(\.\d+)?$/, {
              message: "Hanya angka atau angka dengan titik yang diperbolehkan.",
                }).nonempty()]),
    note: z.string(),
})