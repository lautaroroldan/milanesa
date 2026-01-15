import { z } from "zod"

export const suggestSongSchema = z.object({
    songName: z
        .string()
        .trim()
        .min(2, "Ingresá el nombre de la canción.")
        .max(120, "Máximo 120 caracteres."),
    artist: z
        .string()
        .trim()
        .min(2, "Ingresá el artista.")
        .max(120, "Máximo 120 caracteres."),
    comment: z
        .string()
        .trim()
        .max(280, "Máximo 280 caracteres.")
        .optional()
        .or(z.literal("")),
})

export type SuggestSongFormValues = z.infer<typeof suggestSongSchema>
