'use client'

import { FormEvent, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const inputClass =
  'w-full rounded-sm border border-[#D5D0C8] bg-white/80 px-4 py-3 font-optima text-xs text-[#1A1A1A] placeholder:text-[#1A1A1A]/45 transition-colors duration-200 focus:border-[#C9A84C] focus:outline-none'

type MenuItem = { name: string; items: string[] }

type ServiceDef = {
  label: string
  menu: MenuItem[]
}

const SERVICE_DEFS: ServiceDef[] = [
  {
    label: 'Crepes Station',
    menu: [
      { name: 'Drizzles', items: ['Nutella', 'Biscoff Butter', 'Dulce de Leche', 'Kinder Bueno Spread', 'Pistachio Cream', 'Peanut Butter', 'Condensed Milk'] },
      { name: 'Toppings', items: ['Oreo Crumbs', 'Biscoff Cookies', 'Mini Marshmallows', 'Chocolate Chips', 'Rainbow Sprinkles', 'Peanuts Praline Crunch', 'Crushed Pistachios', 'Coconut Flakes'] },
      { name: 'Fresh Fruit', items: ['Strawberries', 'Bananas'] },
    ],
  },
  {
    label: 'Mini Pancakes',
    menu: [
      { name: 'Drizzles', items: ['Nutella', 'Biscoff Butter', 'Dulce de Leche', 'Kinder Bueno Spread', 'Pistachio Cream', 'Peanut Butter', 'Condensed Milk'] },
      { name: 'Toppings', items: ['Oreo Crumbs', 'Biscoff Cookies', 'Mini Marshmallows', 'Chocolate Chips', 'Rainbow Sprinkles', 'Peanuts Praline Crunch', 'Crushed Pistachios', 'Coconut Flakes'] },
      { name: 'Fresh Fruit', items: ['Strawberries', 'Bananas'] },
    ],
  },
  {
    label: 'Charcuterie',
    menu: [
      { name: 'Cheese Selection', items: ['Brie', 'Gouda', 'Aged White Cheddar', 'Havarti', 'Parmesan Cubes'] },
      { name: 'Cured Meats', items: ['Salami', 'Prosciutto', 'Pepperoni'] },
      { name: 'Fresh Fruit', items: ['Strawberries', 'Grapes', 'Blueberries', 'Blackberries'] },
      { name: 'Accompaniments', items: ['Crackers', 'Breadsticks', 'Mixed Nuts', 'Honey', 'Fig Jam', 'Olives', 'Pickles', 'Chocolate Pieces'] },
      { name: 'Premium Add-Ons', items: ['Burrata', 'Smoked Salmon', 'Chocolate Covered Strawberries'] },
    ],
  },
  {
    label: 'Coffee Bar',
    menu: [
      { name: '16 oz Iced Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Spanish Latte', 'Matcha Latte', 'Strawberry Matcha Latte'] },
      { name: 'Hot Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Cappuccino'] },
      { name: 'Edible Cookie Cup Flavor', items: ['Nutella', 'Dulce de Leche'] },
    ],
  },
  {
    label: 'Acai Bar',
    menu: [
      { name: 'Drizzles', items: ['Nutella', 'Condensed Milk', 'Dulce de Leche', 'Peanut Butter', 'Honey'] },
      { name: 'Toppings', items: ['Granola', 'Chocolate Chips', 'Shredded Coconut'] },
      { name: 'Fresh Fruit', items: ['Strawberries', 'Banana', 'Blueberries', 'Mango'] },
    ],
  },
]

type FormState = {
  fullName: string
  email: string
  phone: string
  eventType: string
  eventDate: string
  guestCount: string
  services: string[]
  ingredients: Record<string, string[]>
  message: string
}

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  services: [],
  ingredients: {},
  message: '',
}

function IngredientSubmenu({ serviceDef, selected, onToggle }: {
  serviceDef: ServiceDef
  selected: string[]
  onToggle: (item: string) => void
}) {
  return (
    <div className="mt-2 space-y-3 rounded-sm border border-[#C9A84C]/30 bg-[#FDFCF7] px-4 py-4">
      <p className="font-optima text-[10px] uppercase tracking-[2px] text-[#C9A84C]">
        Customize your {serviceDef.label}
      </p>
      {serviceDef.menu.map((group) => (
        <div key={group.name}>
          <p className="mb-1.5 font-optima text-[10px] uppercase tracking-[1.5px] text-[#1A1A1A]/50">{group.name}</p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => {
              const checked = selected.includes(item)
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onToggle(item)}
                  className={`rounded-sm border px-2.5 py-1 font-optima text-[10px] transition-all duration-150 ${
                    checked
                      ? 'border-[#C9A84C] bg-[#C9A84C]/15 text-[#1A1A1A]'
                      : 'border-[#D5D0C8] bg-white text-[#1A1A1A]/55 hover:border-[#C9A84C]/60'
                  }`}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Quote() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(initialForm)
  const [guestError, setGuestError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  const handleGuestCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setForm((prev) => ({ ...prev, guestCount: val }))
    if (val && Number(val) < 40) {
      setGuestError('Minimum guest count is 40.')
    } else {
      setGuestError(null)
    }
    setError(null)
  }

  const handleServiceToggle = (label: string) => {
    setForm((prev) => {
      const active = prev.services.includes(label)
      const services = active
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label]
      const ingredients = { ...prev.ingredients }
      if (active) delete ingredients[label]
      return { ...prev, services, ingredients }
    })
    setError(null)
  }

  const handleIngredientToggle = (serviceLabel: string, item: string) => {
    setForm((prev) => {
      const current = prev.ingredients[serviceLabel] ?? []
      const updated = current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item]
      return { ...prev, ingredients: { ...prev.ingredients, [serviceLabel]: updated } }
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (form.services.length === 0) {
      setError('Please select at least one service.')
      return
    }

    if (!form.guestCount || Number(form.guestCount) < 40) {
      setError('Minimum guest count is 40.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Ocurrió un error. Intenta nuevamente.')
        return
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch {
      setError('Error de conexión. Verifica tu internet e intenta de nuevo.')
    } finally {
      setLoading(false)
    }
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
                <p>info@velvetbarco.com</p>
                <p>+1 (337) 965-4192</p>
              </div>
            </div>
            <p className="mt-10 border-t border-[#C9A84C]/20 pt-8 font-playfair text-sm italic text-white/45">
              Crafted With Care. Delivered With Excellence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} className="bg-[#F9F8F3] p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4332]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-playfair text-2xl text-[#1A1A1A]">Inquiry Received</h3>
                <p className="mt-3 max-w-sm font-optima text-sm text-[#1A1A1A]/60">
                  Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-optima text-xs uppercase tracking-[3px] text-[#C9A84C] underline underline-offset-4 hover:text-[#1B4332]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    name="fullName"
                    required
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Event Type</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Baby Shower</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={form.eventDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <div>
                    <input
                      type="number"
                      name="guestCount"
                      min={40}
                      required
                      placeholder="Guest Count (min. 40)"
                      value={form.guestCount}
                      onChange={handleGuestCount}
                      className={inputClass}
                    />
                    {guestError && (
                      <p className="mt-1 font-optima text-[10px] text-red-500">{guestError}</p>
                    )}
                  </div>
                </div>

                {/* Service selection with ingredient submenus */}
                <div className="rounded-sm border border-[#D5D0C8] bg-white/80 px-4 py-3">
                  <p className="mb-3 font-optima text-xs text-[#1A1A1A]/45">
                    Desired Service(s) — select all that apply
                  </p>
                  <div className="space-y-2">
                    {SERVICE_DEFS.map((def) => {
                      const checked = form.services.includes(def.label)
                      return (
                        <div key={def.label}>
                          <button
                            type="button"
                            onClick={() => handleServiceToggle(def.label)}
                            className={`flex w-full items-center gap-2 rounded-sm border px-3 py-2.5 font-optima text-xs transition-all duration-150 ${
                              checked
                                ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#1A1A1A]'
                                : 'border-[#D5D0C8] bg-white text-[#1A1A1A]/55 hover:border-[#C9A84C]/60'
                            }`}
                          >
                            <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border transition-all ${
                              checked ? 'border-[#C9A84C] bg-[#C9A84C]' : 'border-[#D5D0C8]'
                            }`}>
                              {checked && (
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </span>
                            {def.label}
                          </button>
                          {checked && (
                            <IngredientSubmenu
                              serviceDef={def}
                              selected={form.ingredients[def.label] ?? []}
                              onToggle={(item) => handleIngredientToggle(def.label, item)}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                />

                {error && (
                  <p className="rounded-sm bg-red-50 px-4 py-3 font-optima text-xs text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-sm bg-[#1B4332] py-4 font-optima text-[11px] uppercase tracking-[4px] text-white transition-all duration-300 hover:bg-[#C9A84C] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
