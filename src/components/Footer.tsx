import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useLang, useT } from '../context/LangContext'

export function Footer() {
  const t = useT()
  const { lang, setLang } = useLang()

  const footerLinks = [
    {
      title: t('Company', 'Компания'),
      links: [{ label: t('About', 'О нас'), href: '/about' }],
    },
    {
      title: t('Resources', 'Ресурсы'),
      links: [
        { label: t('Documentation', 'Документация'), href: '/docs' },
        { label: t('Blog', 'Блог'), href: '/blog' },
        { label: t('Events', 'Ивенты'), href: '/events' },
      ],
    },
    {
      title: t('Products', 'Продукты'),
      links: [{ label: 'Opus', href: '/opus' }],
    },
    {
      title: t('Terms and policies', 'Условия'),
      links: [
        { label: t('User Agreement', 'Соглашение'), href: '/agreement' },
        { label: t('Contacts', 'Контакты'), href: '/contacts' },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-inner" data-reveal>
        <Logo textClassName="footer-logo-text" />

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a href={link.href}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-lang" role="group" aria-label="Language">
          <button
            type="button"
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === 'ru' ? 'active' : ''}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
        </div>
      </div>
    </footer>
  )
}
