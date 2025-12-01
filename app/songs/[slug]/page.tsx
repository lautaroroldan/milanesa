
import Title from '@/components/title'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { YouTubeEmbed } from '@next/third-parties/google';
import { VexFlowRenderer } from 'accidentaljs';
import { Calendar, Music } from 'lucide-react';

async function SongDetails(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://milanesa.vercel.app'
    const url = new URL(`/api?slug=${params.slug}`, baseUrl)
    const song = await fetch(url).then(res => res.json())

    if (!song) return <div>Song not found</div>;
    return (
        <div className="space-y-3 mt-12">
            <div className="space-y-2">
                <Title title={song.title} />
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Music className="h-5 w-5" />
                    <p className="text-xl">{song.author}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Aprendida el {song.date}</span>
            </div>
            <Card>
                <CardHeader className='py-0 px-6 pt-6'>
                    <CardTitle className='text-xl flex items-center gap-2'>
                        <div className="h-8 w-1 bg-primary rounded-full" />
                        Partitura
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <VexFlowRenderer measures={song.measures} timeSignature={song.timeSignature} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className='text-xl flex items-center gap-2'>
                        <div className="h-8 w-1 bg-primary rounded-full" />
                        Video
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <YouTubeEmbed videoid={song.videoId} height={400} />
                </CardContent>
            </Card>
        </div>
    )
}

export default SongDetails