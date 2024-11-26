import { cn } from '@/lib/utils';
import React from 'react'

interface TitleProps {
    title: string;
    className?: string;
}

function Title({ title, className }: TitleProps) {
    return (
        <h1 className={cn('text-4xl font-bold text-white', className)}>{title}</h1>
    )
}

export default Title