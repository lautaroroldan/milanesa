"use client"

import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

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
        <div className="relative inline-block">
            {/* Decorative accent bar */}
            <motion.div
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-8 md:h-10 bg-gradient-to-b from-primary via-primary/80 to-primary/40 rounded-full"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            />
            
            <motion.h1
                className={cn(
                    `text-4xl md:text-6xl font-bold capitalize tracking-tight ${poppins.className}`,
                    "bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text",
                    "relative",
                    className
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
                    {title}
                </span>
                
                {/* Subtle underline accent */}
                <motion.span
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                />
            </motion.h1>
        </div>
    )
}

export default Title