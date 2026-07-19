import './App.css'
import './components/Header.css'
import './components/Hero.css'
import './components/PhoneShowcase.css'
import './components/ProductGallery.css'
import './components/Plans.css'
import './components/About.css'
import './components/Blog.css'
import './components/Events.css'
import './components/Opus.css'
import './components/Legal.css'
import './components/Admin.css'
import './components/Footer.css'

import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Events } from './pages/Events'
import { Opus } from './pages/Opus'
import { UserAgreement } from './pages/UserAgreement'
import { Contacts } from './pages/Contacts'
import { AdminGate } from './pages/admin/AdminGate'
import { Admin } from './pages/admin/Admin'

// Формы тащат за собой TipTap (~700 КБ) — грузим их только при входе в админку
const AdminPostForm = lazy(() =>
  import('./pages/admin/AdminPostForm').then((m) => ({ default: m.AdminPostForm }))
)
const AdminEventForm = lazy(() =>
  import('./pages/admin/AdminEventForm').then((m) => ({ default: m.AdminEventForm }))
)

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
      return () => clearTimeout(timer)
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/events" element={<Events />} />
          <Route path="/opus" element={<Opus />} />
          <Route path="/agreement" element={<UserAgreement />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route element={<AdminGate />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/blog/new" element={<AdminPostForm />} />
            <Route path="/admin/blog/:slug/edit" element={<AdminPostForm />} />
            <Route path="/admin/events/new" element={<AdminEventForm />} />
            <Route path="/admin/events/:id/edit" element={<AdminEventForm />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
