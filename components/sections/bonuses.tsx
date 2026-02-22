"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"

const bonuses = [
  "DOMAIN PROFESIONAL 1 TAHUN (.biz.id / .my.id)",
  "SERTIFIKAT KEAMANAN SSL TINGKAT BANK",
  "FITUR PREMIUM BIO-LINK (PENGGANTI LINKTREE)",
]

export function Bonuses() {
  return (
    <section className="border-t-4 border-swiss-black bg-swiss-red">
      {/* Content */}
      <div className="px-6 py-16 md:px-12 md:py-24">
        <motion.h2
          className="font-mono text-5xl font-black uppercase tracking-tighter text-swiss-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          BONUS
          <br />
          EKSKLUSIF.
        </motion.h2>

        {/* Bonus List */}
        <div className="mt-12 space-y-0">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 border-t-2 border-swiss-black py-6 md:items-center md:gap-6 md:py-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-swiss-black bg-swiss-black">
                <Plus className="h-5 w-5 text-swiss-red" />
              </div>
              <span className="font-mono text-lg font-bold uppercase tracking-wide text-swiss-white md:text-2xl">
                {bonus}
              </span>
            </motion.div>
          ))}
          {/* Final bottom border */}
          <div className="border-t-2 border-swiss-black" />
        </div>
      </div>
    </section>
  )
}
