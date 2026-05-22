'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  { title: 'Precision', desc: 'Attention to detail in every element.' },
  { title: 'Hospitality', desc: 'Warm service that makes your guests feel at home.' },
  { title: 'Creativity', desc: 'Thoughtful, unique stations & flavors.' },
  { title: 'Reliability', desc: 'Dependable, professional, and always prepared.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="bg-[#F5F5F0] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <motion.div ref={ref} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }} className="relative">
            <div className="img-zoom-container relative aspect-[0.82] overflow-hidden rounded-sm">
              <div className="editorial-image absolute inset-0" style={{ backgroundImage: "url('/images/velvet-team.jpg')" }} />
              <div className="absolute inset-0 bg-[#1B4332]/10" />
            </div>
            <div className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-[#C9A84C]/70" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-optima text-[10px] uppercase tracking-[4px] text-[#C9A84C]">About Us</span>
              <div className="h-px w-10 bg-[#C9A84C]/70" />
            </div>
            <h2 className="mb-5 font-playfair text-3xl font-normal leading-[1.02] text-[#1A1A1A] lg:text-[42px]">
              Warm Hospitality Meets Creative Execution
            </h2>
            <div className="mb-8 space-y-4 font-optima text-[15px] leading-relaxed text-[#1A1A1A]/75">
              <p>At Velvet Bar & Co., we believe catering should feel intentional, elegant, and unforgettable.</p>
              <p>We create elevated food and beverage station experiences designed to bring warmth, beauty, and connection to every event.</p>
              <p>From intimate celebrations to large-scale gatherings, our team blends creativity, hospitality, and refined presentation to deliver experiences your guests will remember long after the event ends.</p>
            </div>
            <div className="grid grid-cols-2 gap-0 border-t border-[#C9A84C]/20 md:grid-cols-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col items-center gap-2 border-[#C9A84C]/20 px-4 pt-6 text-center md:border-r last:border-r-0">
                  <div className="text-2xl text-[#C9A84C]">✦</div>
                  <p className="font-optima text-[10px] font-semibold uppercase tracking-[2px] text-[#C9A84C]">{p.title}</p>
                  <p className="font-optima text-xs leading-snug text-[#1A1A1A]/65">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
