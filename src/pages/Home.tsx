import { Hero } from '../components/Hero'
import { PhoneShowcase } from '../components/PhoneShowcase'
import { ProductGallery } from '../components/ProductGallery'
import { Plans } from '../components/Plans'

export function Home() {
  return (
    <main>
      <Hero />
      <PhoneShowcase />
      <ProductGallery />
      <Plans />
    </main>
  )
}
