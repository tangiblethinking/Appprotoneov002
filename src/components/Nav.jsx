import { useState, useEffect } from 'react'

const BLUE = '#3B82F6'

const links = [
  { label: 'Work',   page: 'work' },
  { label: 'About',  page: 'about' },
  { label: 'Resume', page: 'resume' },
]

export function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close mobile menu and scroll to top on page change
  const go = (p) => {
    setPage(p)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          {/* Logo — goes home */}
          <button onClick={() => go('home')} style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '1.25rem', fontWeight: 500,
            color: 'white', background: 'none', border: 'none',
            cursor: 'pointer', padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = BLUE}
          onMouseLeave={e => e.currentTarget.style.color = 'white'}
          >CK</button>

          {/* Desktop links */}
          <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map(({ label, page: p }) => (
              <button key={p} onClick={() => go(p)} style={{
                fontSize: '0.7rem', textTransform: 'uppercase',
                letterSpacing: '0.15em', fontWeight: 500,
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: page === p ? BLUE : 'rgba(255,255,255,0.72)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (page !== p) e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { if (page !== p) e.currentTarget.style.color = 'rgba(255,255,255,0.72)' }}
              >{label}</button>
            ))}
            <a href="mailto:c.kenreigh@gmail.com" style={{
              fontSize: '0.7rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', fontWeight: 500,
              textDecoration: 'none',
              color: 'rgba(255,255,255,0.82)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 9999, padding: '0.5rem 1.25rem',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = BLUE; e.currentTarget.style.borderColor = BLUE }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)' }}
            >Contact</a>
          </div>

          {/* Hamburger */}
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
                borderRadius: 2, transition: 'all 0.3s',
                transform: open
                  ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4.5px,-4.5px)'
                  : 'none' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 90,
        background: '#080808',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(1.5rem, 6vw, 3rem)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {[...links, { label: 'Contact', page: null }].map(({ label, page: p }) =>
          p ? (
            <button key={p} onClick={() => go(p)} style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
              color: 'white', background: 'none', border: 'none',
              cursor: 'pointer', textAlign: 'left', padding: 0,
              marginBottom: '0.25rem', lineHeight: 1.15,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = BLUE}
            onMouseLeave={e => e.currentTarget.style.color = 'white'}
            >{label}</button>
          ) : (
            <a key={label} href="mailto:c.kenreigh@gmail.com" style={{
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
