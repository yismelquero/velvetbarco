import ServicePageLayout from '@/components/ServicePageLayout'

export default function MiniPancakesPage() {
  return (
    <ServicePageLayout
      name="Mini Pancakes"
      tagline="Fluffy, bite-sized pancakes crafted fresh at your event — a crowd favorite every time."
      desc="Freshly made mini pancakes served warm with your choice of toppings, drizzles, fruits, and premium add-ons."
      heroBg="url('/images/mini-pancakes-portada.jpg')"
      menuTitle="Mini Pancakes Menu"
      menuItems={[
        { name: 'Choose Your Drizzles', items: ['Nutella', 'Biscoff Butter', 'Dulce de Leche', 'Kinder Bueno Spread', 'Pistachio Cream', 'Peanut Butter', 'Condensed Milk'] },
        { name: 'Choose Your Toppings', items: ['Oreo Crumbs', 'Biscoff Cookies', 'Mini Marshmallows', 'Chocolate Chips', 'Rainbow Sprinkles', 'Peanuts Praline Crunch', 'Crushed Pistachios', 'Coconut Flakes'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Bananas'] },
      ]}
      galleryImages={[
        "url('/images/mini-pancakes-portada.jpg')",
        "url('/images/mini-pancakes-1.jpg')",
        "url('/images/mini-pancakes-2.jpg')",
        "url('/images/mini-pancakes-3.jpg')",
      ]}
    />
  )
}
