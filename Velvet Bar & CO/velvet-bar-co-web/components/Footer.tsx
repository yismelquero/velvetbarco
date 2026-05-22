'use client'

import { OvalLogo, SocialIcon, socialLinks } from './Brand'

const navLinks = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Services', '#services'],
  ['Get a Quote', '#quote'],
  ['FAQs', '#faqs'],
]

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
        <div className="grid items-start gap-10 text-center lg:grid-cols-3 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="mb-5">
              <OvalLogo dark />
            </div>
            <p className="max-w-[220px] font-optima text-sm leading-relaxed text-white/75">
              Crafted With Care. Delivered With Excellence.
            </p>
          </div>
          <div>
            <p className="mb-6 font-optima text-[10px] uppercase tracking-[3px] text-[#C9A84C]">Quick Links</p>
            <ul className="space-y-2">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <button onClick={() => scrollTo(href)} className="font-optima text-sm text-white/65 transition-colors hover:text-[#C9A84C]">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-6 font-optima text-[10px] uppercase tracking-[3px] text-[#C9A84C]">Follow Us</p>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A84C] text-white transition-all hover:bg-[#C9A84C] hover:text-[#1B4332]">
                  <SocialIcon path={s.path} size={s.size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center font-optima text-[11px] text-white/45">
        © 2026 Velvet Bar & Co. All Rights Reserved.
      </div>
    </footer>
  )
}
