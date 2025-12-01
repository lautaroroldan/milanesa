import Title from '@/components/title'
import { ForkKnife, Lightbulb } from 'lucide-react'

function About() {
    return (
        <div className="space-y-4 mt-24">
            <Title title="¿Por qué Milanesa?" className='mb-8' />
            <h2 className="text-2xl flex items-center gap-2 bg-muted-foreground/10 p-2 rounded-lg">
                <Lightbulb className='text-primary h-5 w-5' />
                <span className="font-semibold">El Momento Mnemotécnico</span>
            </h2>
            <p>Todo empezó mientras trataba de memorizar el orden de las cuerdas del bajo. Las repetía una y otra vez:</p>
            <div className="bg-muted/50 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="font-mono text-lg text-foreground">
                    "Mi... La... Re... Sol..."
                </p>
                <p className="font-mono text-lg text-foreground">
                    "Mi... La... Re... Sol..."
                </p>
                <p className="font-mono text-lg text-foreground mt-2">
                    "Mi... La... Re..."
                </p>
                <p className="font-mono text-2xl font-bold text-primary mt-3">
                    "¡Milanesa!"
                </p>
            </div>
            <p className="text-muted-foreground italic">
                Y desde ese momento, “Milanesa” se volvió mi truco infalible para recordar las cuerdas.
            </p>
            <h2 className="text-2xl font-bold flex items-center gap-2 bg-muted-foreground/10 p-2 rounded-lg">
                <ForkKnife className='text-primary h-5 w-5' />
                <span>La Teoría Alternativa</span>
            </h2>
            <p>Aunque… también existe la posibilidad de que simplemente tenía hambre 🤣</p>
        </div>
    )
}

export default About