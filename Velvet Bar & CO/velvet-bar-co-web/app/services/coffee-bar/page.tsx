import ServicePageLayout from '@/components/ServicePageLayout'

export default function CoffeeBarPage() {
  return (
    <ServicePageLayout
      name="Coffee Bar Experience"
      tagline="Crafted espresso drinks and warm hospitality — your signature bar, anywhere."
      desc="A specialty coffee experience featuring handcrafted hot and iced espresso drinks made fresh for your guests."
      heroBg="url('/images/velvet-cart.jpg')"
      menuTitle="Espresso & Beverage Menu"
      menuItems={[
        { name: '16 oz Iced Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Spanish Latte', 'Matcha Latte', 'Strawberry Matcha Latte'] },
        { name: 'Hot Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Cappuccino'] },
        { name: 'Signature "Bite & Sip" Edible Cookie Cup', items: ['An edible cookie cup filled with your choice of specialty latte.', 'Nutella', 'Dulce de Leche'] },
      ]}
      galleryImages={["url('/images/velvet-cart.jpg')", "url('/images/velvet-badge-gold.jpg')", "url('/images/velvet-team.jpg')", "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80')", "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80')"]}
    />
  )
}
