import './App.css'
import './components/Header.css'
import './components/Hero.css'
import './components/PhoneShowcase.css'
import './components/ProductGallery.css'
import './components/Plans.css'
import './components/Footer.css'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PhoneShowcase } from './components/PhoneShowcase'
import { ProductGallery } from './components/ProductGallery'
import { Plans } from './components/Plans'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PhoneShowcase />
        <ProductGallery />
        <Plans />
      </main>
      <Footer />
    </>
  )
}

export default App
