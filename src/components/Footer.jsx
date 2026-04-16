const BLUE = '#3B82F6'

export function Footer({ setPage }) {
  const go = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
            { label: 'Work',   p: 'work' },
            { label: 'About',  p: 'about' },
            { label: 'Resume', p: 'resume' },
          ].map(({ label, p }) => (
            <button key={p} onClick={() => go(p)} style={{
              fontSize: '0.65rem', textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)',
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = BLUE}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >{label}</button>
          ))}
          <a href="https://www.linkedin.com/in/kenreigh/" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.65rem', textTransform: 'uppercase',
            letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)',
            textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = BLUE}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >LinkedIn ↗</a>
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
            USA Based · © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
