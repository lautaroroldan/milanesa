"use client"

import Title from "@/components/title";
import SongsList from "@/components/song-list";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-full w-full pb-16">
      <motion.div 
        className="my-20 md:my-28 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Title title="Milanesa" />
        
        <motion.p 
          className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          ¿Por qué se llama Milanesa? Mi cerebro mezcló música y comida. El resto te lo cuento{" "}
          <Link 
            href="/about" 
            className="text-primary font-semibold underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors duration-200"
          >
            acá
          </Link>
        </motion.p>

        <motion.div 
          className="flex items-center gap-3 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="h-px w-12 bg-linear-to-r from-primary/50 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <SongsList />
      </motion.section>

      <Footer />
    </div>
  );
}
