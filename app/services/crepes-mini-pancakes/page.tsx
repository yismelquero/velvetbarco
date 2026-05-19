import ServicePageLayout from '@/components/ServicePageLayout'

export default function CrepesPage() {
  return (
    <ServicePageLayout
      name="Crepes & Mini Pancakes"
      tagline="Sweet, savory, and made to order — a warm brunch experience for every celebration."
      desc="Our live crepe and mini pancake station brings artisan brunch energy to any event, with a menu crafted to delight every palate."
      heroBg="url('https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1600&q=80')"
      menuTitle="Crepe & Pancake Menu"
      menuItems={[
        { name: 'Sweet Crepes', items: ['Nutella & Banana', 'Strawberries & Cream', 'Caramel Apple', 'Lemon Blueberry', 'S’mores Crepe'] },
        { name: 'Savory Crepes', items: ['Ham & Gruyere', 'Spinach & Feta', 'Smoked Salmon', 'Caprese Style', 'Seasonal Veggie'] },
        { name: 'Mini Pancakes', items: ['Classic Buttermilk', 'Blueberry Lemon', 'Chocolate Chip', 'Mixed Berry', 'Maple & Butter'] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1519676867240-f03562e64548?w=900&q=80')", "url('https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80')", "url('https://images.unsplash.com/photo-1484723091739-30990009cd3d?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
