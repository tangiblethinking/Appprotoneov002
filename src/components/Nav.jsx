import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const BLUE = '#3B82F6'

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
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2.5rem)',
          height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link to="/" style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.25rem', fontWeight: 500,
            color: 'white', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = BLUE}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
          >CK</Link>

          {/* Desktop links */}
          <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map(({ label, to }) => (
              <Link key={to} to={to} style={{
                fontSize: '0.7rem', textTransform: 'uppercase',
                letterSpacing: '0.15em', fontWeight: 500,
                textDecoration: 'none',
                color: pathname === to ? BLUE : 'rgba(255,255,255,0.72)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (pathname !== to) e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { if (pathname !== to) e.currentTarget.style.color = 'rgba(255,255,255,0.72)' }}
              >{label}</Link>
            ))}
            <a href="mailto:c.kenreigh@gmail.com" style={{
              fontSize: '0.7rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontWeight: 500,
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.82)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 9999,
              padding: '0.5rem 1.25rem',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = BLUE; e.currentTarget.style.borderColor = BLUE }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
            >Contact</a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="show-mobile"
            onClick={() => setOpen(!open)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'none', flexDirection: 'column', gap: '5px', padding: '8px',
              minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center',
            }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 1.5, background: 'white',
                borderRadius: 2,
                transition: 'all 0.3s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4.5px,-4.5px)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 90,
        background: '#080808',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(1.5rem, 6vw, 3rem)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {[...links, { label: 'Contact', to: null, href: 'mailto:c.kenreigh@gmail.com' }].map(({ label, to, href }) =>
          to ? (
            <Link key={to} to={to} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
              color: 'white', textDecoration: 'none',
              marginBottom: '0.25rem',
              transition: 'color 0.2s',
              lineHeight: 1.15,
            }}
            onMouseEnter={e => e.currentTarget.style.color = BLUE}
            onMouseLeave={e => e.currentTarget.style.color = 'white'}
            >{label}</Link>
          ) : (
            <a key={label} href={href} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
              color: 'rgba(255,255,255,0.40)', textDecoration: 'none',
              lineHeight: 1.15,
            }}>{label}</a>
          )
        )}
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.40)', marginTop: '3rem', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          c.kenreigh@gmail.com · 480-206-2145
        </p>
      </div>
    </>
  )
}
