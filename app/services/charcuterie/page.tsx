import ServicePageLayout from '@/components/ServicePageLayout'

export default function CharcuteriePage() {
  return (
    <ServicePageLayout
      name="Charcuterie Stations"
      tagline="Artfully curated boards that turn grazing into a genuine moment of connection."
      desc="Our charcuterie stations are edible art, thoughtfully composed with cured meats, artisan cheeses, seasonal fruits, accompaniments, and elegant garnishes."
      heroBg="url('/images/charcuterie-portada.jpg')"
      menuTitle="Board & Station Options"
      menuItems={[
        { name: 'Cheese Selection', items: ['Brie', 'Gouda', 'Aged White Cheddar', 'Havarti', 'Parmesan Cubes'] },
        { name: 'Cured Meats', items: ['Salami', 'Prosciutto', 'Pepperoni'] },
        { name: 'Fresh Fruit Options', items: ['Strawberries', 'Grapes', 'Blueberries', 'Blackberries'] },
        { name: 'Accompaniments', items: ['Crackers', 'Breadsticks', 'Mixed Nuts', 'Honey', 'Fig Jam', 'Olives', 'Pickles', 'Chocolate Pieces'] },
        { name: 'Optional Premium Add-Ons', items: ['Burrata', 'Smoked Salmon', 'Chocolate Covered Strawberries'] },
      ]}
      galleryImages={["url('/images/charcuterie-portada.jpg')", "url('/images/charcuterie-1.jpg')", "url('/images/charcuterie-2.jpg')", "url('/images/charcuterie-3.jpg')"]}
    />
  )
}
