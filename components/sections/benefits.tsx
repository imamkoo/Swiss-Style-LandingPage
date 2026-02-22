"use client"

import { motion } from "framer-motion"

const features = [
  {
    number: "01",
    title: "KERANJANG PINTAR",
    desc: "Pembeli pilih banyak barang, sistem hitung total otomatis ke WA.",
  },
  {
    number: "02",
    title: "GOOGLE SHEETS SYNC",
    desc: "Ganti harga & stok semudah ngetik di tabel HP.",
  },
  {
    number: "03",
    title: "PWA APP READY",
    desc: "Web nempel di layar HP pelanggan tanpa perlu download.",
  },
]

export function Benefits() {
  return (
    <section className="border-t-4 border-swiss-black">
      {/* Feature List */}
      <div>
        <div className="border-b-2 border-swiss-black px-6 py-3 md:px-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-swiss-red">
            * THE SYSTEM
          </span>
        </div>
        {features.map((feature, index) => (
        <motion.div
          key={feature.number}
          className="grid grid-cols-1 border-b-2 border-swiss-black md:grid-cols-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          {/* kiri: nomor + title, ada border kanan di md → garis tengah */}
          <div className="flex items-baseline gap-4 border-b-2 border-swiss-black px-6 py-6 md:border-b-0 md:border-r-2 md:px-8 md:py-10">
            <span className="font-mono text-4xl font-black text-swiss-red md:text-5xl">
              {feature.number}
            </span>
            <h3 className="font-mono text-2xl font-black uppercase tracking-tight text-swiss-black md:text-3xl">
              {feature.title}
            </h3>
          </div>

          {/* kanan: deskripsi */}
          <div className="px-6 py-6 md:px-8 md:py-10">
            <p className="text-lg leading-relaxed text-swiss-black/80">
              {feature.desc}
            </p>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  )
}

