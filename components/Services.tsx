'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    slug: 'crepes-mini-pancakes',
    name: 'Crepes & Mini Pancakes',
    desc: 'Freshly made mini pancakes served warm with your choice of toppings, drizzles, fruits, and premium add-ons.',
    bg: "url('https://images.unsplash.com/photo-1519676867240-f03562e64548?w=900&q=80')",
  },
  {
    slug: 'charcuterie',
    name: 'Charcuterie Stations',
    desc: 'Artfully curated boards that bring people together.',
    bg: "url('https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=900&q=80')",
  },
  {
    slug: 'coffee-bar',
    name: 'Coffee Bar Experience',
    desc: 'A specialty coffee experience featuring handcrafted hot and iced espresso drinks made fresh for your guests.',
    bg: "url('/images/velvet-cart.jpg')",
  },
  {
    slug: 'acai-bar',
    name: 'Acai Bar Experience',
    desc: 'Fresh and refreshing açaí bowls made to order with your choice of toppings, drizzles, and fresh fruit.',
    bg: "url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=900&q=80')",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="bg-[#F2F0E9] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-5 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Services</span>
            <div className="h-px w-10 bg-[#C9A84C]/70" />
          </div>
          <h2 className="mb-2 font-playfair text-3xl font-normal text-[#1A1A1A] lg:text-[42px]">Curated Catering Experiences</h2>
          <p className="font-optima text-sm tracking-wide text-[#1A1A1A]/60">Choose your experience and let us bring it to life.</p>
        </motion.div>

        <div className="gold-divider my-7" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }}>
              <div className="group flex h-full flex-col overflow-hidden rounded border border-[#D8D0C1] bg-[#F8F7F1] text-center shadow-[0_12px_30px_rgba(26,26,26,0.06)] transition-all duration-300 hover:border-[#C9A84C]/60">
                <div className="img-zoom-container relative aspect-[4/3]">
                  <div className="editorial-image absolute inset-0" style={{ backgroundImage: s.bg }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/70 to-transparent opacity-60" />
                </div>
                <div className="flex flex-1 flex-col items-center p-5">
                  <h3 className="mb-2 font-playfair text-2xl font-normal leading-[1.02] text-[#1A1A1A]">{s.name}</h3>
                  <p className="mb-5 flex-1 font-optima text-xs leading-relaxed text-[#1A1A1A]/65">{s.desc}</p>
                  <Link href={`/services/${s.slug}`} className="rounded-sm bg-[#1B4332] px-5 py-2.5 font-optima text-[9px] uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#C9A84C]">
                    View Experience
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#quote" className="inline-flex items-center justify-center rounded-sm border border-[#C9A84C] px-10 py-4 font-optima text-[11px] uppercase tracking-[3px] text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-white">
            Get a Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}
