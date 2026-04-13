import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      background: '#080808',
    }}>
      <div style={{
        maxWidth: 1400, margin: '0 auto',
        padding: '3rem 2rem',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '2rem',
      }}>
        <div>
          <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', margin: '0 0 4px' }}>
            Christopher Kenreigh
          </p>
          <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            Director of UX & Product Design
          </p>
        </div>

        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
          {[
            { label: 'Work',     to: '/work',     internal: true },
            { label: 'About',    to: '/about',    internal: true },
            { label: 'Resume',   to: '/resume',   internal: true },
            { label: 'LinkedIn', to: 'https://www.linkedin.com/in/kenreigh/', internal: false },
          ].map(({ label, to, internal }) =>
            internal ? (
              <Link key={label} to={to} style={{
                fontSize: '0.65rem', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#C8FF00'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {label}
              </Link>
            ) : (
              <a key={label} href={to} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.65rem', textTransform: 'uppercase',
                letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#C8FF00'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}
              >
                {label} ↗
              </a>
            )
          )}
        </nav>

        <div style={{ textAlign: 'right' }}>
          <a href="mailto:c.kenreigh@gmail.com" style={{
            fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none', display: 'block', marginBottom: 4,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#C8FF00'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
          >
            c.kenreigh@gmail.com
          </a>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            Phoenix, AZ · © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
