import { Metadata } from 'next'
import AboutClient from './about-client'

export const metadata: Metadata = {
  title: "¿Por qué Milanesa?",
  description: "Descubre la historia detrás del nombre Milanesa: un truco mnemotécnico que nació mientras memorizaba las cuerdas del bajo (Mi, La, Re, Sol).",
  openGraph: {
    title: "¿Por qué Milanesa? | Milanesa",
    description: "Descubre la historia detrás del nombre Milanesa: un truco mnemotécnico que nació mientras memorizaba las cuerdas del bajo (Mi, La, Re, Sol).",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "¿Por qué Milanesa?",
    description: "Descubre la historia detrás del nombre Milanesa: un truco mnemotécnico que nació mientras memorizaba las cuerdas del bajo.",
  },
}

export default function About() {
  return <AboutClient />
}
