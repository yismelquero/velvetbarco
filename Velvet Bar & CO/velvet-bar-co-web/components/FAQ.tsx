'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  ['What types of events do you cater?', 'Weddings, corporate gatherings, birthdays, showers, graduations, private dinners, and special celebrations.'],
  ['How far in advance should I book?', 'We recommend 4-6 weeks for smaller events and 3-6 months for peak dates or larger celebrations.'],
  ['Do you travel outside Lake Charles?', 'Yes. We are based in Lake Charles and available for regional travel. Travel fees may apply.'],
  ['Do you provide staff?', 'Yes. Professional station staff are included with every booking.'],
  ['Can services be customized?', 'Absolutely. Menus, styling, signage, and service flow can be tailored to your event.'],
  ['What is included in setup?', 'Equipment, station styling, serving essentials, setup, service, and breakdown.'],
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#C9A84C]/20">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-6 py-4 text-left">
        <span className="font-optima text-sm text-[#1A1A1A]">{q}</span>
        <span className={`text-xl text-[#1A1A1A] transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 pr-8 font-optima text-sm leading-relaxed text-[#1A1A1A]/65">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const half = Math.ceil(faqs.length / 2)
  return (
    <section id="faqs" className="bg-[#F5F5F0] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">FAQs</span>
            <div className="h-px w-10 bg-[#C9A84C]/70" />
          </div>
          <h2 className="font-playfair text-3xl font-normal text-[#1A1A1A] lg:text-[42px]">Frequently Asked Questions</h2>
        </div>
        <div className="grid gap-x-16 lg:grid-cols-2">
          <div>{faqs.slice(0, half).map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}</div>
          <div>{faqs.slice(half).map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}</div>
        </div>
      </div>
    </section>
  )
}
