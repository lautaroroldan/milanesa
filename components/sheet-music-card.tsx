"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VexFlowRenderer } from 'accidentaljs'
import type { Measure, TimeSignature } from 'accidentaljs'
import { FileMusic } from 'lucide-react'

interface SheetMusicCardProps {
    measures: Measure[]
    timeSignature?: TimeSignature
}

export function SheetMusicCard({ measures, timeSignature }: SheetMusicCardProps) {
    return (
        <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border-border/60">
            <CardHeader className="pb-4 pt-6 px-5 md:px-8">
                <CardTitle className="text-lg md:text-xl font-semibold flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                        <FileMusic className="h-5 w-5 text-primary" />
                    </div>
                    <span>Partitura</span>
                    <div className="ml-auto h-8 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 rounded-full" />
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-8 pb-6 md:pb-8">
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none md:hidden" />
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none md:hidden" />
                    
                    <div className="overflow-x-auto -mx-2 px-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        <div className="min-w-[600px] md:min-w-0">
                            <VexFlowRenderer measures={measures} timeSignature={timeSignature} />
                        </div>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground/60 mt-3 text-center md:hidden">
                    Deslizá para ver más
                </p>
            </CardContent>
        </Card>
    )
}
