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
        { name: 'Cheese Selection', items: ['Brie', 'Gouda', 'Aged White Cheddar', 'Havarti', 'Parmesan Cubes'] },
        { name: 'Cured Meats', items: ['Salami', 'Prosciutto', 'Pepperoni'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Grapes', 'Blueberries', 'Blackberries'] },
        { name: 'Accompaniments', items: ['Crackers', 'Breadsticks', 'Mixed Nuts', 'Honey', 'Fig Jam', 'Olives', 'Pickles', 'Chocolate Pieces'] },
        { name: 'Optional Premium Add-Ons', items: ['Burrata', 'Smoked Salmon', 'Chocolate Covered Strawberries'] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=900&q=80')", "url('https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80')", "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
