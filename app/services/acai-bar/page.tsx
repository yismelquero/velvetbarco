import ServicePageLayout from '@/components/ServicePageLayout'

export default function AcaiBarPage() {
  return (
    <ServicePageLayout
      name="Açaí Bar Experience"
      tagline="Fresh, nourishing bowls made with real ingredients — wellness meets luxury."
      desc="Fresh and refreshing açaí bowls made to order with your choice of toppings, drizzles, and fresh fruit."
      heroBg="url('/images/acai-portada.jpg')"
      menuTitle="Açaí Bowl Menu"
      menuItems={[
        { name: 'Choose Your Drizzles', items: ['Nutella', 'Condensed Milk', 'Dulce de Leche', 'Peanut Butter', 'Honey'] },
        { name: 'Choose Your Toppings', items: ['Granola', 'Chocolate Chips', 'Shredded Coconut'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Banana', 'Blueberries', 'Mango'] },
      ]}
      galleryImages={["url('/images/acai-portada.jpg')", "url('/images/acai-1.jpg')", "url('/images/acai-2.jpg')", "url('/images/acai-3.jpg')", "url('/images/acai-4.jpg')", "url('/images/acai-5.jpg')"]}
    />
  )
}
