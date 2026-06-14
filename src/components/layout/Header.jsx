import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact Us' },
]

export default function Header({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    if (onNavigate) {
      onNavigate(`#${id}`)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
      <nav className="header__nav" aria-label="Main navigation">
        <button
          className="header__logo"
          onClick={() => handleNavClick('home')}
          aria-label="Commexus Club home"
        >
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="36" height="36" rx="8" stroke="url(#logo-grad)" strokeWidth="2" fill="rgba(0,229,255,0.05)" />
              <path d="M12 14h6v2h-4v8h4v2h-6V14z" fill="url(#logo-grad)" />
              <path d="M22 14h6v12h-6v-2h4v-8h-4v-2z" fill="url(#logo-grad)" />
              <circle cx="20" cy="20" r="2" fill="#00e5ff" />
              <line x1="14" y1="20" x2="18" y2="20" stroke="#00e5ff" strokeWidth="1" />
              <line x1="22" y1="20" x2="26" y2="20" stroke="#00e5ff" strokeWidth="1" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#0066ff" />
                  <stop offset="100%" stopColor="#00e5ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="header__logo-text">
            <span className="header__logo-name">Commexus</span>
            <span className="header__logo-tagline">Club</span>
          </span>
        </button>

        <ul className={`header__links ${menuOpen ? 'header__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`header__link ${activeSection === link.id ? 'header__link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
                <span className="header__link-indicator" />
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {menuOpen && <div className="header__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
