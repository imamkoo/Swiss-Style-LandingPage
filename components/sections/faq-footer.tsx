"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FaqFooter() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="border-t-4 border-swiss-black bg-swiss-white px-6 py-20 md:px-12 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-start"
        >
          <h2 className="font-mono text-4xl font-black uppercase tracking-tighter text-swiss-black md:text-6xl lg:text-8xl">
            SIAP MENGUBAH
            <br />
            <span className="text-swiss-red">BISNIS ANDA?</span>
          </h2>

          <motion.a
            href="https://wa.me/6281808000575?text=Halo%20Imam.ko,%20saya%20mau%20AMANKAN%20SLOT%20PROMO%20Kasir%20Digital%20Express!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 border-2 border-swiss-black bg-swiss-red px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-swiss-white transition-colors duration-150 hover:bg-swiss-black hover:border-swiss-black md:mt-12 md:px-10 md:py-6 md:text-base"
            whileTap={{ scale: 0.97 }}
          >
            HUBUNGI KAMI VIA WHATSAPP
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-swiss-black bg-swiss-black px-6 py-8 md:px-12">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          {/* Logo */}
          <div className="flex items-baseline">
            <span className="font-mono text-lg font-black uppercase tracking-tighter text-swiss-white">
              IMAM
            </span>
            <span className="font-mono text-lg font-black uppercase tracking-tighter text-swiss-red">
              .
            </span>
            <span className="font-mono text-lg font-black uppercase tracking-tighter text-swiss-white">
              KO
            </span>
          </div>

          {/* Copyright */}
          <span className="font-mono text-xs tracking-widest text-swiss-white/50">
            &copy; {new Date().getFullYear()} IMAM.KO. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </>
  )
}
