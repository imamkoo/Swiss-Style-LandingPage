"use client"

import { motion } from "framer-motion"

export function Story() {
  return (
    <section className="swiss-dots border-t-4 border-swiss-black bg-swiss-gray">
      {/* Content */}
      <div className="px-6 py-16 md:px-12 md:py-24">
        <motion.div
          className="max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
        >
          {/* Large quotation mark */}
          <span className="font-mono text-8xl font-black leading-none text-swiss-red md:text-9xl">
            {'"'}
          </span>

          <p className="-mt-8 font-sans text-2xl font-medium leading-relaxed text-swiss-black md:text-3xl lg:text-4xl">
            Saya melihat banyak{" "}
            <span className="font-bold text-swiss-red">UMKM lokal</span> punya
            produk luar biasa. Tapi sayang, banyak yang sulit berkembang karena
            kelelahan melayani pesanan manual via WhatsApp, atau terjebak{" "}
            <span className="font-bold text-swiss-red">
              {'"'}perang harga{'"'}
            </span>
            . Saya ingin UMKM memiliki{" "}
            <span className="font-bold">{'"'}Rumah Digital{'"'}</span> sendiri
            yang elegan, mandiri, dan bekerja layaknya kasir profesional yang tak
            pernah tidur.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 max-w-16 bg-swiss-black" />
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-swiss-black">
              IMAM.KO, Founder
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
