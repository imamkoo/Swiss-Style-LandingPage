"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Pricing() {
  return (
    <section
      id="pricing"
      className="swiss-diagonal border-t-4 border-swiss-black"
    >
      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[8fr_4fr]">
        {/* Left - Main Offer */}
        <div className="border-b-2 border-swiss-black px-6 py-16 md:px-12 md:py-24 lg:border-r-2 lg:border-b-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            {/* Headline */}
            <h2 className="font-mono text-5xl font-black uppercase tracking-tighter text-swiss-black md:text-7xl">
              KASIR DIGITAL
              <br />
              EXPRESS
            </h2>

            {/* Badge */}
            <div className="mt-8 inline-block border-2 border-swiss-black bg-swiss-black px-6 py-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-swiss-white md:text-sm">
                SISA 3 SLOT PROMO LEBARAN
              </span>
            </div>

            {/* Pricing */}
            <div className="mt-12">
              <del className="font-mono text-2xl font-bold text-swiss-black/30 md:text-3xl">
                Rp 750.000
              </del>
              <div className="mt-2">
                <span className="font-mono text-7xl font-black tracking-tighter text-swiss-red md:text-8xl lg:text-9xl">
                  Rp 247.000
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/6281808000575?text=Halo%20Imam.ko,%20saya%20mau%20AMANKAN%20SLOT%20PROMO%20Kasir%20Digital%20Express!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex w-full items-center justify-center gap-3 border-2 border-swiss-black bg-swiss-red px-8 py-6 font-mono text-sm font-bold uppercase tracking-widest text-swiss-white transition-colors duration-150 hover:bg-swiss-black md:text-base"
              whileTap={{ scale: 0.98 }}
            >
              AMANKAN SLOT PROMO VIA WHATSAPP
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right - Includes */}
        <div className="bg-swiss-gray px-6 py-16 md:px-12 md:py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-swiss-black/50">
              TERMASUK
            </span>

            <ul className="mt-8 space-y-0">
              {[
                "Landing Page Profesional",
                "Katalog + Keranjang Pintar",
                "Auto-Order ke WhatsApp",
                "Google Sheets Dashboard",
                "PWA (Install di HP)",
                "Domain .biz.id / .my.id",
                "SSL Certificate",
                "Premium Bio-Link",
                "Cloud Hosting Gratis",
                "Support via WhatsApp",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 border-b border-swiss-black/10 py-3"
                >
                  <span className="font-mono text-xs font-bold text-swiss-red">
                    +
                  </span>
                  <span className="text-sm font-medium text-swiss-black">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
