"use client"

import { useState } from "react"
import { Calendar, Music } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

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
        <motion.div
            className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "shadow-md hover:shadow-2xl hover:shadow-primary/30",
                "ring-1 ring-border/50 hover:ring-primary/40",
                className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            <Link href={`/songs/${song.slug}`} className="block h-full">
                {/* Album art background with zoom effect */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${song.albumArt})` }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Improved gradient overlay for text legibility */}
                <div className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    "bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/10",
                    isHovered && "from-foreground/98 via-foreground/70"
                )} />
                
                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

                {/* Content container */}
                <motion.div 
                    className="relative h-full p-4 md:p-5 flex flex-col justify-end"
                    animate={{ y: isHovered ? -4 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <div className="space-y-1.5">
                        {/* Song title */}
                        <h3
                            className={cn(
                                "font-bold leading-tight text-balance transition-colors duration-300",
                                "text-background drop-shadow-sm",
                                isHovered && "text-primary-foreground",
                                song.size === "large" ? "text-xl md:text-2xl" : "text-sm md:text-base",
                            )}
                        >
                            {song.title}
                        </h3>

                        {/* Artist info */}
                        <div className="flex items-center gap-1.5 text-background/80">
                            <Music className={cn(
                                "transition-colors duration-300",
                                song.size === "large" ? "w-3.5 h-3.5" : "w-3 h-3"
                            )} />
                            <span className={cn(
                                "font-medium",
                                song.size === "large" ? "text-sm" : "text-xs"
                            )}>
                                {song.artist}
                            </span>
                        </div>

                        {/* Date info */}
                        <motion.div 
                            className="flex items-center gap-1.5 text-background/60"
                            initial={{ opacity: 0.7 }}
                            animate={{ opacity: isHovered ? 1 : 0.7 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs font-medium">
                                Aprendida el {formatDate(song.learnedDate)}
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Hover border glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: isHovered ? 1 : 0,
                        boxShadow: isHovered 
                            ? "inset 0 0 0 2px oklch(0.7356 0.1556 61.6313 / 0.5), inset 0 0 20px oklch(0.7356 0.1556 61.6313 / 0.1)"
                            : "inset 0 0 0 1px transparent"
                    }}
                    transition={{ duration: 0.3 }}
                />
                
                {/* Corner accent on hover */}
                <motion.div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: isHovered ? 1 : 0, 
                        opacity: isHovered ? 1 : 0 
                    }}
                    transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
                />
            </Link>
        </motion.div>
    )
}
