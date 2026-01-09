import { SheetMusicCard } from '@/components/sheet-music-card'
import Title from '@/components/title'
import { VideoCard } from '@/components/video-card'
import { Calendar, Music } from 'lucide-react'

async function SongDetails(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://milanesa.vercel.app'
    const url = new URL(`/api?slug=${params.slug}`, baseUrl)
    const song = await fetch(url).then(res => res.json())

    if (!song) {
        return (
            <div className="my-20 md:my-28 text-center">
                <p className="text-muted-foreground text-lg">Canción no encontrada</p>
            </div>
        );
    }

    return (
        <article className="pb-16 md:pb-24">
            <header className="my-16 md:my-24 space-y-6">
                <div className="pl-2">
                    <Title title={song.title} />
                </div>
                
                <div className="space-y-3 pl-2">
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                        <Music className="h-5 w-5 text-primary/70" />
                        <p className="text-lg md:text-xl font-medium">{song.author}</p>
                    </div>
                    
                    <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
                        <Calendar className="h-4 w-4" />
                        <span>Aprendida el {song.date}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 pt-2 pl-2">
                    <div className="h-px w-16 bg-linear-to-r from-primary/50 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                </div>
            </header>

            <div className="space-y-8 md:space-y-10">
                <SheetMusicCard 
                    measures={song.measures} 
                    timeSignature={song.timeSignature} 
                />
                <VideoCard videoId={song.videoId} />
            </div>
        </article>
    )
}

export default SongDetails
