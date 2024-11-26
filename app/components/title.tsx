import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import React from 'react'

interface TitleProps {
    title: string;
    className?: string;
}

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

function Title({ title, className }: TitleProps) {
    return (
        <h1 className={cn(`text-4xl font-bold text-white ${poppins.className} capitalize`, className)}>{title}</h1>
    )
}

export default Title