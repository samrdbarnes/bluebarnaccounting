import { useEffect, useState } from 'react'
import { navLinks } from '../data/content.js'
import { useDrawer } from '../context/DrawerContext.jsx'
import Brand from './Brand.jsx'
import Button from './Button.jsx'
import Icon from './Icon.jsx'
import StarMark from './StarMark.jsx'

export default function Header() {
  const { open } = useDrawer()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const openDrawerFromMenu = (event) => {
    setMenuOpen(false)
    open(event)
  }

  return (
    <header className="site-header">
      <div className="nav">
        <Brand />

        <nav className="primary-nav" aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta-group">
          <Button href="#contact" className="nav-cta" onClick={open}>
            Get in Touch
          </Button>
          <StarMark className="nav-star" />
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="#contact" onClick={openDrawerFromMenu}>
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  )
}
