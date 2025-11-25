import { useState } from 'react';

const links = [
  { href: '#projects', label: 'Проекты' },
  { href: '#skills', label: 'Навыки' },
  { href: '#contact', label: 'Контакты' }
];

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleLinkClick = () => {
    setMenuOpened(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="brand-mark">GA</span>
        <span className="brand-text">Gray Advantage</span>
      </a>

      <nav className={`main-nav ${menuOpened ? 'open' : ''}`}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="cta" href="#contact" onClick={handleLinkClick}>
          Связаться
        </a>
      </nav>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Переключить меню"
        aria-expanded={menuOpened}
        onClick={() => setMenuOpened((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;

