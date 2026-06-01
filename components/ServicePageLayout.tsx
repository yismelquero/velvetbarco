import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'

type ServicePageProps = {
  name: string
  tagline: string
  desc: string
  heroBg: string
  menuTitle: string
  menuItems: { name: string; items: string[] }[]
  galleryImages: string[]
}

export default function ServicePageLayout({ name, tagline, desc, heroBg, menuTitle, menuItems, galleryImages }: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <div className="editorial-image absolute inset-0" style={{ backgroundImage: heroBg }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1B4332]/55 to-transparent" />
          <Link href="/#services" className="absolute left-6 top-28 z-10 font-optima text-[11px] uppercase tracking-[2px] text-white/75 transition-colors hover:text-[#C9A84C] lg:left-10">
            ← All Services
          </Link>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Velvet Bar Co</span>
            </div>
            <h1 className="mb-4 font-playfair text-5xl font-normal leading-tight text-white lg:text-7xl">{name}</h1>
            <p className="max-w-lg font-optima text-lg text-white/75">{tagline}</p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <div className="mb-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
            <p className="font-playfair text-xl font-light leading-relaxed text-[#1A1A1A] lg:text-2xl">{desc}</p>
            <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
          </div>
        </section>

        <section className="bg-[#F5F5F0] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-12 text-center">
              <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Gallery</span>
              <h2 className="mt-3 font-playfair text-3xl text-[#1A1A1A]">The Experience</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {galleryImages.map((bg, i) => (
                <div key={bg} className={`img-zoom-container overflow-hidden rounded-sm ${i === 0 ? 'col-span-2 aspect-square' : 'aspect-[4/3]'}`}>
                  <div className="editorial-image h-full w-full" style={{ backgroundImage: bg }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 text-center">
              <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Menu</span>
              <h2 className="mt-3 font-playfair text-3xl text-[#1A1A1A]">{menuTitle}</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((section) => (
                <div key={section.name} className="rounded-sm border border-[#C9A84C]/20 p-8">
                  <p className="mb-4 font-playfair text-lg text-[#1A1A1A]">{section.name}</p>
                  <div className="mb-5 h-px w-8 bg-[#C9A84C]" />
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2 font-optima text-sm text-[#1A1A1A]/65">
                        <span className="text-[#C9A84C]">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F0] py-24 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <span className="font-optima text-[10px] uppercase tracking-[5px] text-[#C9A84C]">Book Your Experience</span>
            <h2 className="mb-6 mt-4 font-playfair text-4xl leading-tight text-[#1A1A1A]">Ready to Elevate Your Event?</h2>
            <Link href="/#quote" className="inline-flex bg-[#1B4332] px-10 py-4 font-optima text-[11px] uppercase tracking-[3px] text-white transition-all hover:bg-[#C9A84C]">
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
