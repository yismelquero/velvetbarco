import ServicePageLayout from '@/components/ServicePageLayout'

export default function AcaiBarPage() {
  return (
    <ServicePageLayout
      name="Açaí Bar Experience"
      tagline="Fresh, nourishing bowls made with real ingredients — wellness meets luxury."
      desc="Fresh and refreshing açaí bowls made to order with your choice of toppings, drizzles, and fresh fruit."
      heroBg="url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1600&q=80')"
      menuTitle="Açaí Bowl Menu"
      menuItems={[
        { name: 'Choose Your Drizzles', items: ['Nutella', 'Condensed Milk', 'Dulce de Leche', 'Peanut Butter', 'Honey'] },
        { name: 'Choose Your Toppings', items: ['Granola', 'Chocolate Chips', 'Shredded Coconut'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Banana', 'Blueberries', 'Mango'] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=900&q=80')", "url('https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&q=80')", "url('https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
