"use client"

import Title from '@/components/title'
import { ForkKnife, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
    return (
        <article>
            <motion.header 
                className="my-16 md:my-24 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Title title="¿Por qué Milanesa?" />
            </motion.header>

            <div className="space-y-12 md:space-y-16">
                <motion.section
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                            <Lightbulb className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                            El Momento Mnemotécnico
                        </h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed pl-[52px]">
                        Todo empezó mientras trataba de memorizar el orden de las cuerdas del bajo. Las repetía una y otra vez:
                    </p>
                    
                    <motion.div 
                        className="bg-muted/30 border-l-4 border-primary/60 p-5 rounded-r-xl ml-[52px]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <p className="font-mono text-base md:text-lg text-foreground/80">
                            «Mi... La... Re... Sol...»
                        </p>
                        <p className="font-mono text-base md:text-lg text-foreground/80">
                            «Mi... La... Re... Sol...»
                        </p>
                        <p className="font-mono text-base md:text-lg text-foreground/80 mt-2">
                            «Mi... La... Re...»
                        </p>
                        <motion.p 
                            className="font-mono text-xl md:text-2xl font-bold text-primary mt-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                        >
                            «¡Milanesa!»
                        </motion.p>
                    </motion.div>
                    
                    <p className="text-muted-foreground italic leading-relaxed pl-[52px]">
                        Y desde ese momento, «Milanesa» se volvió mi truco infalible para recordar las cuerdas.
                    </p>
                </motion.section>

                <motion.section
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
                            <ForkKnife className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                            La Teoría Alternativa
                        </h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed pl-[52px]">
                        Aunque… también existe la posibilidad de que simplemente tenía hambre 🤣
                    </p>
                </motion.section>
            </div>
        </article>
    )
}

export default About
