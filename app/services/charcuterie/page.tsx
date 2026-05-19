import ServicePageLayout from '@/components/ServicePageLayout'

export default function CharcuteriePage() {
  return (
    <ServicePageLayout
      name="Charcuterie Stations"
      tagline="Artfully curated boards that turn grazing into a genuine moment of connection."
      desc="Our charcuterie stations are edible art, thoughtfully composed with cured meats, artisan cheeses, seasonal fruits, accompaniments, and elegant garnishes."
      heroBg="url('https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=1600&q=80')"
      menuTitle="Board & Station Options"
      menuItems={[
        { name: 'Classic Charcuterie', items: ['Prosciutto & Salami', 'Manchego & Brie', 'Olives', 'Artisan Crackers', 'Honeycomb'] },
        { name: 'Artisan Cheese Board', items: ['Aged Gouda', 'Camembert', 'Sharp Cheddar', 'Gorgonzola', 'Seasonal Soft Cheeses'] },
        { name: 'Grazing Table', items: ['Full Station Spread', 'Fresh Fruits', 'Antipasto', 'Crudites & Dips', 'Bread & Flatbreads'] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=900&q=80')", "url('https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80')", "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
