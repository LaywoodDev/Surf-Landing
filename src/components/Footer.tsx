import { Logo } from './Logo'

const footerLinks = [
  {
    title: 'Company',
    links: [{ label: 'About', href: '#about' }],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Events', href: '#events' },
    ],
  },
  {
    title: 'Products',
    links: [{ label: 'Opus', href: '#opus' }],
  },
  {
    title: 'Terms and policies',
    links: [
      { label: 'User Agreement', href: '#agreement' },
      { label: 'Contacts and Requisites', href: '#contacts' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo textClassName="footer-logo-text" />

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  )
}
