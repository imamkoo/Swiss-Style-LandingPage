"use client"

import { motion } from "framer-motion"
import { MessageSquareX, Clock, Calculator, TrendingDown } from "lucide-react"

const pains = [
  {
    icon: MessageSquareX,
    text: 'Capek menjawab chat "Ready kak?" puluhan kali, tapi ujungnya pembeli PHP.',
  },
  {
    icon: Clock,
    text: "Kehilangan omset gara-gara admin telat membalas chat saat jam istirahat.",
  },
  {
    icon: Calculator,
    text: "Pusing merekap totalan harga secara manual, berujung salah hitung.",
  },
  {
    icon: TrendingDown,
    text: "Ragu menjual dengan harga normal karena toko sebelah banting harga.",
  },
]

export function PainPoints() {
  return (
    <section className="border-t-4 border-swiss-black">
      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {pains.map((pain, index) => (
          <motion.div
            key={index}
            className="group border-b-2 border-swiss-black p-8 transition-colors duration-150 hover:bg-swiss-black md:p-12 [&:nth-child(odd)]:md:border-r-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {/* Number */}
            <span className="font-mono text-6xl font-black text-swiss-black/10 transition-colors duration-150 group-hover:text-swiss-red md:text-7xl">
              0{index + 1}
            </span>

            {/* Icon */}
            <pain.icon className="mt-4 h-8 w-8 text-swiss-black transition-colors duration-150 group-hover:text-swiss-red" />

            {/* Text */}
            <p className="mt-6 text-lg font-medium leading-relaxed text-swiss-black transition-colors duration-150 group-hover:text-swiss-white md:text-xl">
              {pain.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
