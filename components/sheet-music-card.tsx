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
                    <div className="ml-auto h-8 w-1 bg-linear-to-b from-primary via-primary/60 to-primary/20 rounded-full" />
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-8 pb-6 md:pb-8">
                <VexFlowRenderer
                    measures={measures}
                    timeSignature={timeSignature}
                />
            </CardContent>
        </Card>
    )
}
