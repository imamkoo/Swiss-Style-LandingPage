"use client"

import { motion } from "framer-motion"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b-4 border-swiss-black bg-swiss-white">
      <div className="grid grid-cols-[1fr_auto] items-center px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="flex items-baseline">
          <span className="font-mono text-2xl font-black uppercase tracking-tighter text-swiss-black md:text-3xl">
            IMAM
          </span>
          <span className="font-mono text-2xl font-black uppercase tracking-tighter text-swiss-red md:text-3xl">
            .
          </span>
          <span className="font-mono text-2xl font-black uppercase tracking-tighter text-swiss-black md:text-3xl">
            KO
          </span>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center border-2 border-swiss-black bg-swiss-black px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-swiss-white transition-colors duration-150 hover:bg-swiss-red hover:border-swiss-red md:px-8 md:text-sm"
          whileTap={{ scale: 0.97 }}
        >
          KONSULTASI GRATIS
        </motion.a>
      </div>
    </nav>
  )
}
