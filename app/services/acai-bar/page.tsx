import ServicePageLayout from '@/components/ServicePageLayout'

export default function AcaiBarPage() {
  return (
    <ServicePageLayout
      name="Acai Bar Experience"
      tagline="Fresh, nourishing bowls made with real ingredients — wellness meets luxury."
      desc="Our acai bar brings a vibrant, health-forward experience to your event without sacrificing elegance."
      heroBg="url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1600&q=80')"
      menuTitle="Acai Bowl Menu"
      menuItems={[
        { name: 'Signature Bases', items: ['Classic Acai', 'Pitaya Bowl', 'Green Mango', 'Mixed Berry', 'Coconut Cream'] },
        { name: 'Fresh Toppings', items: ['Seasonal Fruit', 'Organic Granola', 'Chia', 'Cacao Nibs', 'Coconut'] },
        { name: 'Premium Drizzles', items: ['Raw Honey', 'Almond Butter', 'Dark Chocolate', 'Agave', 'Coconut Cream'] },
      ]}
      galleryImages={["url('https://images.unsplash.com/photo-1590301157890-4810ed352733?w=900&q=80')", "url('https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=600&q=80')", "url('https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=600&q=80')", "url('/images/velvet-cart.jpg')", "url('/images/velvet-team.jpg')"]}
    />
  )
}
