import ServicePageLayout from '@/components/ServicePageLayout'

export default function CrepesPage() {
  return (
    <ServicePageLayout
      name={"Crepes & Mini Pancakes Station"}
      tagline="Sweet, savory, and made to order — a warm brunch experience for every celebration."
      desc="Freshly made mini pancakes served warm with your choice of toppings, drizzles, fruits, and premium add-ons."
      heroBg="url('/images/crepes-portada.jpg')"
      menuTitle="Crepe & Pancake Menu"
      menuItems={[
        { name: 'Choose Your Cart Experience', items: ['Mini Pancakes', 'Crepes'] },
        { name: 'Choose Your Drizzles', items: ['Nutella', 'Biscoff Butter', 'Dulce de Leche', 'Kinder Bueno Spread', 'Pistachio Cream', 'Peanut Butter', 'Condensed Milk'] },
        { name: 'Choose Your Toppings', items: ['Oreo Crumbs', 'Biscoff Cookies', 'Mini Marshmallows', 'Chocolate Chips', 'Rainbow Sprinkles', 'Peanuts Praline Crunch', 'Crushed Pistachios', 'Coconut Flakes'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Bananas'] },
      ]}
      galleryImages={[
        "url('/images/crepes-portada.jpg')",
        "url('/images/crepes-1.jpg')",
        "url('/images/crepes-2.jpg')",
        "url('/images/crepes-3.jpg')",
        "url('/images/crepes-4.jpg')",
        "url('/images/crepes-5.jpg')",
      ]}
    />
  )
}
