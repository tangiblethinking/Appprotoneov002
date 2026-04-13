import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Work',   to: '/work' },
  { label: 'About',  to: '/about' },
  { label: 'Resume', to: '/resume' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '0 2rem',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link
            to="/"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.25rem', fontWeight: 500,
              color: 'white', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#C8FF00'}
            onMouseLeave={e => e.target.style.color = 'white'}
          >
            CK
          </Link>

          {/* Desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
               className="hidden-mobile">
            {links.map(({ label, to }) => (
              <Link
                key={to} to={to}
                style={{
                  fontSize: '0.7rem', textTransform: 'uppercase',
                  letterSpacing: '0.15em', fontWeight: 500,
                  textDecoration: 'none',
                  color: pathname === to ? '#C8FF00' : 'rgba(255,255,255,0.45)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (pathname !== to) e.target.style.color = 'white' }}
                onMouseLeave={e => { if (pathname !== to) e.target.style.color = 'rgba(255,255,255,0.45)' }}
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:c.kenreigh@gmail.com"
              style={{
                fontSize: '0.7rem', textTransform: 'uppercase',
                letterSpacing: '0.15em', fontWeight: 500,
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '9999px',
                padding: '0.5rem 1.25rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#C8FF00'
                e.target.style.borderColor = '#C8FF00'
              }}
              onMouseLeave={e => {
                e.target.style.color = 'rgba(255,255,255,0.6)'
                e.target.style.borderColor = 'rgba(255,255,255,0.2)'
              }}
            >
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: 'none', border: 'none', cursor: 'none',
              display: 'none', flexDirection: 'column', gap: '5px', padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 1, background: 'white',
                transition: 'all 0.3s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(4px,4px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px,-4px)'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 40,
        background: '#080808',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '2rem',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
      }}>
        {[...links, { label: 'Contact', to: null, href: 'mailto:c.kenreigh@gmail.com' }].map(({ label, to, href }) =>
          to ? (
            <Link key={to} to={to} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem,8vw,4rem)',
              color: 'white', textDecoration: 'none',
              marginBottom: '0.5rem',
              transition: 'color 0.2s',
            }}>
              {label}
            </Link>
          ) : (
            <a key={label} href={href} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem,8vw,4rem)',
              color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
            }}>
              {label}
            </a>
          )
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
