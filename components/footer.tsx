"use client"

import { Github, Linkedin, Music } from "lucide-react"
import { motion } from "framer-motion"

interface FooterLink {
  href: string
  icon: React.ReactNode
  label: string
}

const links: FooterLink[] = [
  {
    href: "https://github.com/lautaroroldan",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/lautaroroldan",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn"
  },
  {
    href: "https://www.npmjs.com/package/accidentaljs",
    icon: <Music className="w-5 h-5" />,
    label: "accidentaljs"
  }
]

export function Footer() {
  return (
    <motion.footer 
      className="mt-24 pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-linear-to-l from-primary/50 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="h-px w-12 bg-linear-to-r from-primary/50 to-transparent" />
      </div>

      <div className="flex flex-col items-center gap-6">
        <nav className="flex items-center gap-6" aria-label="Redes sociales">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={link.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </nav>

        <motion.p 
          className="text-xs text-muted-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          Hecho con <span className="inline-block">🎸</span> por @lauta.dev
        </motion.p>
      </div>
    </motion.footer>
  )
}
