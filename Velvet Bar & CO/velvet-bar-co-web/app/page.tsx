import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Quote from '@/components/Quote'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Quote />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
