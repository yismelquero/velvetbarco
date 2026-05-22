import ServicePageLayout from '@/components/ServicePageLayout'

export default function CrepesPage() {
  return (
    <ServicePageLayout
      name="Crepes & Mini Pancakes Station"
      tagline="Sweet, savory, and made to order — a warm brunch experience for every celebration."
      desc="Freshly made mini pancakes served warm with your choice of toppings, drizzles, fruits, and premium add-ons."
      heroBg="url(‘https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1600&q=80’)"
      menuTitle="Crepe & Pancake Menu"
      menuItems={[
        { name: ‘Choose Your Drizzles’, items: [‘Nutella’, ‘Biscoff Butter’, ‘Dulce de Leche’, ‘Kinder Bueno Spread’, ‘Pistachio Cream’, ‘Peanut Butter’, ‘Condensed Milk’] },
        { name: ‘Choose Your Toppings’, items: [‘Oreo Crumbs’, ‘Biscoff Cookies’, ‘Mini Marshmallows’, ‘Chocolate Chips’, ‘Rainbow Sprinkles’, ‘Peanuts Praline Crunch’, ‘Crushed Pistachios’, ‘Coconut Flakes’] },
        { name: ‘Fresh Fruit Options’, items: [‘Strawberries’, ‘Bananas’] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1519676867240-f03562e64548?w=900&q=80')", "url('https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80')", "url('https://images.unsplash.com/photo-1484723091739-30990009cd3d?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
