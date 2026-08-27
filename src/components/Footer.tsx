import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { useLang, useT } from '../context/LangContext'

type FooterColumn = {
  title: string
  social?: boolean
  links: Array<{
    label: string
    href: string
    icon?: string
  }>
}

export function Footer() {
  const t = useT()
  const { lang, setLang } = useLang()

  const footerLinks: FooterColumn[] = [
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
      title: t('Socials', 'Соцсети'),
      social: true,
      links: [
        {
          label: 'TikTok',
          href: 'https://www.tiktok.com/@app.surf',
          icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
        },
        {
          label: 'Discord',
          href: 'https://discord.gg/Tu2uCSG3CR',
          icon: 'M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.618-1.25.077.077 0 0 0-.078-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 12.3 12.3 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.099.246.198.373.292a.077.077 0 0 1-.007.128 12.3 12.3 0 0 1-1.873.89.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.961-.607 3.95-1.522 6.002-3.03a.077.077 0 0 0 .031-.055c.501-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z',
        },
        {
          label: 'Telegram',
          href: 'https://t.me/AppSurf',
          icon: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
        },
      ],
    },
    {
      title: t('Terms and policies', 'Условия'),
      links: [
        { label: t('User Agreement', 'Соглашение'), href: '/agreement' },
        { label: t('Privacy Policy', 'Политика конфиденциальности'), href: '/privacy' },
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
            <div
              key={column.title}
              className={`footer-column${column.social ? ' footer-socials' : ''}`}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href}>{link.label}</Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.icon ? link.label : undefined}
                      >
                        {link.icon ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d={link.icon} />
                          </svg>
                        ) : (
                          link.label
                        )}
                      </a>
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
