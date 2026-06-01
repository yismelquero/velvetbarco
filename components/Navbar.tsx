'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { OvalLogo, SocialIcon, socialLinks } from './Brand'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = usePathname() === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    if (!isHome) {
      window.location.href = `/${href}`
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const textColor = scrolled ? 'text-[#1A1A1A]' : 'text-white'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-[#C9A84C]/20 bg-[#F5F5F0]/96 shadow-sm backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" aria-label="Velvet Bar Co home">
            <OvalLogo compact dark={!scrolled} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`relative font-optima text-[11px] uppercase tracking-[2px] transition-colors duration-200 hover:text-[#C9A84C] ${textColor} after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A84C] after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className={`${textColor} transition-colors hover:text-[#C9A84C]`}>
                <SocialIcon path={s.path} size={s.size} />
              </a>
            ))}
          </div>

          <button className={`lg:hidden ${textColor}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-[#C9A84C]/20 bg-[#F5F5F0]/98 px-6 py-8 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => scrollTo(item.href)} className="text-left font-optima text-[11px] uppercase tracking-[3px] text-[#1A1A1A] transition-colors hover:text-[#C9A84C]">
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
