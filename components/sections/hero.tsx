"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="swiss-grid-pattern border-t-4 border-swiss-black">
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr]">
        {/* Left Column */}
        <div className="border-b-2 border-swiss-black px-6 py-12 md:px-12 md:py-20 lg:border-r-2 lg:border-b-0">
          <motion.h1
            className="font-mono text-5xl font-black uppercase leading-[0.9] tracking-tighter text-swiss-black md:text-7xl lg:text-8xl xl:text-9xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            TINGKATKAN
            <br />
            OMSET{" "}
            <span className="text-swiss-red">
              TANPA
              <br />
              PERANG
              <br />
              HARGA.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-swiss-black/80 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="font-black">Sistem Web Auto-Order 24 Jam Non-Stop.</span> Bebaskan bisnis dari
            potongan aplikasi. Bangun kredibilitas instan setara brand nasional.
          </motion.p>

          <motion.a
            href="#web-demo"
            className="mt-12 inline-flex h-16 items-center gap-3 bg-swiss-red px-8 font-mono text-sm font-bold uppercase tracking-widest text-swiss-white transition-colors duration-150 hover:bg-swiss-black"
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            LIHAT DEMO SISTEMNYA
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>

        {/* Right Column - Geometric Composition */}
        <div className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden bg-swiss-black p-8 lg:min-h-0">
          {/* Abstract geometric blocks */}
          <motion.div
            className="absolute right-4 top-8 h-24 w-24 bg-swiss-red md:h-32 md:w-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-12 left-4 h-16 w-40 bg-swiss-red/80 md:h-20 md:w-48"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.45, duration: 0.3 }}
          />
          <motion.div
            className="absolute left-8 top-24 h-40 w-2 bg-swiss-white md:top-32 md:h-48"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          />

          {/* Large text overlay */}
          <div className="relative z-10 text-center">
            <motion.span
              className="block font-mono text-8xl font-black text-swiss-white md:text-9xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              24/7
            </motion.span>
            <motion.span
              className="mt-4 block border-2 border-swiss-white px-6 py-2 font-mono text-sm font-bold uppercase tracking-[0.3em] text-swiss-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
            >
              PWA READY
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
