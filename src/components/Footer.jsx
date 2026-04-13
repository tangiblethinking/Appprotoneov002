import { Link } from 'react-router-dom'

const BLUE = '#3B82F6'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.09)', background: '#080808' }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: 'clamp(2rem,5vw,3rem) clamp(1rem,4vw,2.5rem)',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '2rem',
      }}>
        <div>
          <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', color: 'white', marginBottom: 4 }}>
            Christopher Kenreigh
          </p>
          <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)' }}>
            Director of UX & Product Design
          </p>
        </div>

        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
          {[
            { label: 'Work',     to: '/work',    internal: true },
            { label: 'About',    to: '/about',   internal: true },
            { label: 'Resume',   to: '/resume',  internal: true },
            { label: 'LinkedIn', to: 'https://www.linkedin.com/in/kenreigh/', internal: false },
          ].map(({ label, to, internal }) =>
            internal ? (
              <Link key={label} to={to} style={{
                fontSize: '0.65rem', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = BLUE}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >{label}</Link>
            ) : (
              <a key={label} href={to} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.65rem', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = BLUE}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >{label} ↗</a>
            )
          )}
        </nav>

        <div style={{ textAlign: 'right' }}>
          <a href="mailto:c.kenreigh@gmail.com" style={{
            fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)',
            textDecoration: 'none', display: 'block', marginBottom: 4,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = BLUE}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
          >c.kenreigh@gmail.com</a>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Phoenix, AZ · © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
