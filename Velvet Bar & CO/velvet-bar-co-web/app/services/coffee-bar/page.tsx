import ServicePageLayout from '@/components/ServicePageLayout'

export default function CoffeeBarPage() {
  return (
    <ServicePageLayout
      name="Coffee Bar Experience"
      tagline="Crafted espresso drinks and warm hospitality — your signature bar, anywhere."
      desc="A specialty coffee experience featuring handcrafted hot and iced espresso drinks made fresh for your guests."
      heroBg="url('/images/coffee-portada.jpg')"
      menuTitle="Espresso & Beverage Menu"
      menuItems={[
        { name: '16 oz Iced Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Spanish Latte', 'Matcha Latte', 'Strawberry Matcha Latte'] },
        { name: 'Hot Latte Options', items: ['Dulce de Leche Latte', 'Biscoff Latte', 'Cappuccino'] },
        { name: 'Signature "Bite & Sip" Edible Cookie Cup', items: ['An edible cookie cup filled with your choice of specialty latte.'] },
        { name: 'Choose Your Flavor', items: ['Nutella', 'Dulce de Leche'] },
      ]}
      galleryImages={["url('/images/coffee-portada.jpg')", "url('/images/coffee-1.jpg')", "url('/images/coffee-2.jpg')", "url('/images/coffee-3.jpg')", "url('/images/coffee-4.jpg')", "url('/images/coffee-5.jpg')", "url('/images/coffee-6.jpg')"]}
    />
  )
}
