import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    message: z.string().nonempty({ message: "Tidak boleh kosong" }),
    audio: z.instanceof(File).optional(),
    latitude: z
        .string()
        .refine((val) => /^-?\d+(\.\d+)?$/.test(val), {
            message: "Harus berupa angka desimal valid!",
        })
        .transform((val) => parseFloat(val)),
    longitude: z
        .string()
        .refine((val) => /^-?\d+(\.\d+)?$/.test(val), {
            message: "Harus berupa angka desimal valid!",
        })
        .transform((val) => parseFloat(val)),
    files: z.array(z.instanceof(File)).optional(),
});