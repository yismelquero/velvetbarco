'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.8, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative flex min-h-[640px] items-center overflow-hidden bg-[#1A1A1A] lg:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/velvet-cart.jpg')", backgroundPosition: 'center 34%' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,6,0.88)_0%,rgba(8,20,13,0.75)_38%,rgba(9,19,12,0.24)_66%,rgba(3,9,5,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_47%,rgba(201,168,76,0.18),transparent_31%),linear-gradient(180deg,rgba(0,0,0,0.20),transparent_45%,rgba(0,0,0,0.28))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-10">
        <div className="grid min-h-[520px] items-center lg:min-h-[76vh] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="max-w-[560px]">
            <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="mb-7 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Lake Charles, USA</span>
            </motion.div>

            <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp} className="mb-4 font-playfair text-5xl font-normal leading-[0.96] text-white lg:text-6xl xl:text-[76px]">
              Crafted Experiences, <em className="italic text-[#C9A84C]">Beautifully</em> Served
            </motion.h1>

            <motion.div custom={2} initial="hidden" animate="show" variants={fadeUp}>
              <div className="my-5 h-px w-20 bg-[#C9A84C]/70" />
            </motion.div>

            <motion.p custom={3} initial="hidden" animate="show" variants={fadeUp} className="mb-10 max-w-md font-optima text-base leading-relaxed text-white/90">
              Luxury catering stations designed to elevate weddings, celebrations, and unforgettable gatherings in Lake Charles.
            </motion.p>

            <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('#services')} className="gold-button min-w-[220px] bg-[#1B4332]/90 text-white hover:border-[#C9A84C] hover:bg-[#C9A84C]">
                Explore Services
              </button>
              <button onClick={() => scrollTo('#quote')} className="gold-button min-w-[220px] bg-white text-[#1B4332] hover:bg-[#C9A84C] hover:text-white">
                Get a Quote
              </button>
            </motion.div>
          </div>
          <div />
        </div>
      </div>
    </section>
  )
}
