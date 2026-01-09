import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { YouTubeEmbed } from '@next/third-parties/google'
import { Play } from 'lucide-react'

interface VideoCardProps {
    videoId: string
}

export function VideoCard({ videoId }: VideoCardProps) {
    return (
        <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
            <CardHeader className="pb-4 pt-6 px-5 md:px-8">
                <CardTitle className="text-lg md:text-xl font-semibold flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <Play className="h-5 w-5 text-primary" />
                    </div>
                    <span>Video</span>
                    <div className="ml-auto h-8 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-full" />
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-8 pb-6 md:pb-8">
                <div className="relative w-full rounded-xl overflow-hidden bg-muted/30">
                    <div className="aspect-video">
                        <YouTubeEmbed 
                            videoid={videoId} 
                            style="width: 100%; height: 100%;"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
