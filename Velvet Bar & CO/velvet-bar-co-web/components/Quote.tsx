'use client'

import { FormEvent, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const inputClass =
  'w-full rounded-sm border border-[#D5D0C8] bg-white/80 px-4 py-3 font-optima text-xs text-[#1A1A1A] placeholder:text-[#1A1A1A]/45 transition-colors duration-200 focus:border-[#C9A84C] focus:outline-none'

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="bg-[#F5F5F0] py-0">
      <div ref={ref} className="mx-auto max-w-[1440px]">
        <div className="grid overflow-hidden border-y border-[#D8D0C1] lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="flex flex-col justify-between bg-[#1B4332] p-10 lg:p-16">
            <div>
              <div className="mb-4 h-px w-10 bg-[#C9A84C]" />
              <h2 className="mb-6 font-playfair text-3xl font-normal leading-[1.04] text-white lg:text-[42px]">
                Let&apos;s Create Something Unforgettable Together
              </h2>
              <p className="mb-10 max-w-sm font-optima text-sm leading-relaxed text-white/80">
                Tell us about your event and we&apos;ll take care of the rest.
              </p>
              <div className="space-y-5 font-optima text-sm text-white/75">
                <p>Lake Charles, Louisiana · Available for travel</p>
                <p>hello@velvetbarco.com</p>
                <p>(337) 123-4567</p>
              </div>
            </div>
            <p className="mt-10 border-t border-[#C9A84C]/20 pt-8 font-playfair text-sm italic text-white/45">
              Crafted With Care. Delivered With Excellence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="bg-[#F9F8F3] p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <h3 className="font-playfair text-2xl text-[#1A1A1A]">Inquiry Received</h3>
                <p className="mt-3 max-w-sm font-optima text-sm text-[#1A1A1A]/60">Thank you for reaching out. We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input required placeholder="Full Name" className={inputClass} />
                  <input type="email" required placeholder="Email Address" className={inputClass} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input type="tel" placeholder="Phone Number" className={inputClass} />
                  <select className={inputClass}>
                    <option>Event Type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Baby Shower</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input type="date" required className={inputClass} />
                  <select className={inputClass}>
                    <option>Guest Count</option>
                    <option>Under 50</option>
                    <option>50 - 100</option>
                    <option>100 - 200</option>
                    <option>200+</option>
                  </select>
                </div>
                <select className={inputClass}>
                  <option>Desired Service</option>
                  <option>Crepes & Mini Pancakes</option>
                  <option>Charcuterie</option>
                  <option>Coffee Bar</option>
                  <option>Acai Bar</option>
                </select>
                <textarea rows={4} placeholder="Message" className={inputClass} />
                <button className="w-full rounded-sm bg-[#1B4332] py-4 font-optima text-[11px] uppercase tracking-[4px] text-white transition-all duration-300 hover:bg-[#C9A84C]">
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
