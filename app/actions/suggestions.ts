"use server"

import { createClient } from "@/lib/supabase/server"
import { suggestSongSchema, type SuggestSongFormValues } from "@/lib/validators/suggest-song"
import { cookies } from "next/headers"

interface SuggestionResultSuccess {
    ok: true
}

interface SuggestionResultError {
    ok: false
    error: string
}

type SuggestionResult = SuggestionResultSuccess | SuggestionResultError

export async function createSuggestion(values: SuggestSongFormValues): Promise<SuggestionResult> {
    const parsed = suggestSongSchema.safeParse(values)

    if (!parsed.success) {
        return { ok: false, error: "Datos inválidos. Revisá los campos." }
    }

    const { songName, artist, comment } = parsed.data
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { error } = await supabase.from("suggestions").insert({
        song_name: songName,
        artist,
        comment: comment || null,
    })

    if (error) {
        console.error("Error al guardar sugerencia", error)
        return { ok: false, error: "No se pudo guardar la sugerencia." }
    }

    return { ok: true }
}
