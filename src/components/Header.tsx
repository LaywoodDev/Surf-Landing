import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { useT } from '../context/LangContext'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useT()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const goToSection = (id: string) => (event: MouseEvent) => {
    event.preventDefault()
    setMenuOpen(false)

    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className={`header${menuOpen ? ' menu-open' : ''}`}>
      <Link to="/" aria-label="Surf home">
        <Logo />
      </Link>

      <nav className="header-nav" aria-label="Main navigation">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              {t('Home', 'Главная')}
            </Link>
          </li>
          <li>
            <a href="/#product" onClick={goToSection('product')}>
              {t('Product', 'Продукт')}
            </a>
          </li>
          <li>
            <a href="/#plans" onClick={goToSection('plans')}>
              {t('Plans', 'Тарифы')}
            </a>
          </li>
        </ul>
      </nav>

      <a href="https://surf-app.xyz" className="header-login">
        {t('Log in', 'Войти')}
      </a>

      <button
        type="button"
        className="header-burger"
        aria-label={menuOpen ? t('Close menu', 'Закрыть меню') : t('Open menu', 'Открыть меню')}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div className="header-mobile-menu" aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {t('Home', 'Главная')}
              </Link>
            </li>
            <li>
              <a href="/#product" onClick={goToSection('product')}>
                {t('Product', 'Продукт')}
              </a>
            </li>
            <li>
              <a href="/#plans" onClick={goToSection('plans')}>
                {t('Plans', 'Тарифы')}
              </a>
            </li>
          </ul>
        </nav>

        <a href="https://surf-app.xyz" className="header-login">
          {t('Log in', 'Войти')}
        </a>
      </div>
    </header>
  )
}
