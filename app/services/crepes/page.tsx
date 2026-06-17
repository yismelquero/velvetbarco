import ServicePageLayout from '@/components/ServicePageLayout'

export default function CrepesPage() {
  return (
    <ServicePageLayout
      name="Crepes Station"
      tagline="Sweet, savory, and made to order — a warm brunch experience for every celebration."
      desc="Our live crepe station brings artisan energy to any event, with a menu crafted to delight every palate."
      heroBg="url('/images/crepes-portada.jpg')"
      menuTitle="Crepe Menu"
      menuItems={[
        { name: 'Choose Your Drizzles', items: ['Nutella', 'Biscoff Butter', 'Dulce de Leche', 'Kinder Bueno Spread', 'Pistachio Cream', 'Peanut Butter', 'Condensed Milk'] },
        { name: 'Choose Your Toppings', items: ['Oreo Crumbs', 'Biscoff Cookies', 'Mini Marshmallows', 'Chocolate Chips', 'Rainbow Sprinkles', 'Peanuts Praline Crunch', 'Crushed Pistachios', 'Coconut Flakes'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Bananas'] },
      ]}
      galleryImages={[
        "url('/images/crepes-portada.jpg')",
        "url('/images/crepes-1.jpg')",
        "url('/images/crepes-2.jpg')",
      ]}
    />
  )
}
