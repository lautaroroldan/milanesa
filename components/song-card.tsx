"use client"

import { useState } from "react"
import { Calendar, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Song {
    id: number
    slug: string
    title: string
    artist: string
    learnedDate: string
    albumArt: string
    videoId: string
    size: "small" | "medium" | "large"
}

interface SongCardProps {
    song: Song
    className?: string
    index: number
}

export function SongCard({ song, className, index }: SongCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
    }

    return (

        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500",
                "hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02]",
                className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animationDelay: `${index * 100}ms`,
            }}
        >
            <Link href={`/posts/${song.slug}`}>
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${song.albumArt})` }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">

                    <div className="space-y-1">
                        <h3
                            className={cn(
                                "font-bold text-foreground leading-tight text-balance group-hover:text-primary",
                                song.size === "large" ? "text-xl md:text-2xl" : "text-sm md:text-base",
                            )}
                        >
                            {song.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Music className="w-3 h-3" />
                            <span className={cn("font-medium", song.size === "large" ? "text-sm" : "text-xs")}>{song.artist}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-muted-foreground/70">
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs">Aprendida el {formatDate(song.learnedDate)}</span>
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        "absolute inset-0 rounded-2xl border-2 transition-colors duration-300",
                        isHovered ? "border-primary/50" : "border-transparent",
                    )}
                />
            </Link>
        </div>
    )
}
