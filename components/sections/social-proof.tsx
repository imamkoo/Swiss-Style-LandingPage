"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const demos = [
  {
    number: "01",
    label: "DEMO WEB FASHION",
    description: "Katalog pakaian modern dengan keranjang pintar dan auto-order WhatsApp.",
    colors: { bg: "#F2F2F2", accent: "#000000" },
  },
  {
    number: "02",
    label: "DEMO WEB HAMPERS",
    description: "Toko hampers & makanan premium dengan hitung ongkir otomatis.",
    colors: { bg: "#F2F2F2", accent: "#FF3000" },
  },
]

export function SocialProof() {
  return (
    <section id="web-demo" className="swiss-grid-pattern border-t-4 border-swiss-black">
      {/* Demo Cards Grid */}
      <div className="border-b-2 border-swiss-black px-6 py-3 md:px-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-swiss-red">
            * THE PROOF
          </span>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {demos.map((demo, index) => (
          <motion.div
            key={index}
            className={`flex flex-col border-b-2 border-swiss-black p-6 md:p-10 ${
              index === 0 ? "md:border-r-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
          >
            {/* Card Header */}
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-5xl font-black text-swiss-red md:text-6xl">
                {demo.number}
              </span>
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-swiss-black">
                / {demo.label}
              </span>
            </div>

            {/* Placeholder Rectangle */}
            <div className="mt-8 flex aspect-[4/3] items-center justify-center border-2 border-swiss-black bg-swiss-gray">
              <div className="flex flex-col items-center gap-4 p-8">
                {/* Mini wireframe layout */}
                <div className="grid w-full max-w-[200px] grid-cols-3 gap-2">
                  <div
                    className="aspect-square"
                    style={{ backgroundColor: demo.colors.accent }}
                  />
                  <div className="aspect-square bg-swiss-black/10" />
                  <div className="aspect-square bg-swiss-black/10" />
                  <div className="aspect-square bg-swiss-black/10" />
                  <div
                    className="aspect-square"
                    style={{ backgroundColor: demo.colors.accent }}
                  />
                  <div className="aspect-square bg-swiss-black/10" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-swiss-black/40">
                  {demo.label}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-swiss-black/70">
              {demo.description}
            </p>

            {/* CTA Button */}
            <motion.a
              href="#"
              className="group/btn mt-8 inline-flex items-center gap-3 border-2 border-swiss-black bg-swiss-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-swiss-white transition-colors duration-150 hover:border-swiss-red hover:bg-swiss-red"
              whileTap={{ scale: 0.97 }}
            >
              COBA DEMO
              <ArrowUpRight className="h-4 w-4 transition-transform duration-150 group-hover/btn:-rotate-45" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
