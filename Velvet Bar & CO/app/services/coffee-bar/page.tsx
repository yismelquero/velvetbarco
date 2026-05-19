import ServicePageLayout from '@/components/ServicePageLayout'

export default function CoffeeBarPage() {
  return (
    <ServicePageLayout
      name="Coffee Bar Experience"
      tagline="Crafted espresso drinks and warm hospitality — your signature bar, anywhere."
      desc="Our coffee bar is more than a caffeine fix. From silky lattes to custom signature drinks, we bring barista-level craft to your event with the elegance and warmth your guests deserve."
      heroBg="url('/images/velvet-cart.jpg')"
      menuTitle="Espresso & Beverage Menu"
      menuItems={[
        { name: 'Espresso Classics', items: ['Espresso Shot', 'Americano', 'Cappuccino', 'Flat White', 'Macchiato'] },
        { name: 'Signature Lattes', items: ['Vanilla Brown Sugar', 'Lavender Honey', 'Salted Caramel', 'Pistachio Cream', 'Velvet Signature'] },
        { name: 'Cold & Seasonal', items: ['Cold Brew', 'Iced Matcha', 'Iced Chai', 'Seasonal Specials', 'Decaf Options'] },
      ]}
      galleryImages={["url('/images/velvet-cart.jpg')", "url('/images/velvet-badge-gold.jpg')", "url('/images/velvet-team.jpg')", "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80')", "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80')"]}
    />
  )
}
