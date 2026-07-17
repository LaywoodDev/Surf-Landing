import { Logo } from './Logo'

export function Header() {
  const navItems = ['Home', 'Product', 'Plans']

  return (
    <header className="header">
      <Logo />

      <nav className="header-nav" aria-label="Main navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={item === 'Home' ? 'active' : ''}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="https://surf-app.xyz" className="header-login">
        Log in
      </a>
    </header>
  )
}
