import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
    if (!supabaseUrl) {
        throw new Error("Falta NEXT_PUBLIC_SUPABASE_URL en el entorno.")
    }

    if (!supabaseKey) {
        throw new Error("Falta NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY en el entorno.")
    }

    return createServerClient(supabaseUrl, supabaseKey, {
        cookies: {
            getAll: async () => {
                return (await cookieStore).getAll()
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(async ({ name, value, options }) =>
                        (await cookieStore).set(name, value, options)
                    )
                } catch {
                    // Ignorar si se llama desde Server Component.
                }
            },
        },
    })
}
