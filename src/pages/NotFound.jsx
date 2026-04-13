import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ background: '#080808', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(6rem,20vw,14rem)', color: 'rgba(255,255,255,0.04)', lineHeight: 1, margin: 0, userSelect: 'none' }}>404</p>
      <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '2.5rem', color: 'white', fontWeight: 500, marginTop: '-2rem', marginBottom: '1rem' }}>Page not found</h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem', maxWidth: 320 }}>That page doesn't exist. Head back home or view the work.</p>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <Link to="/" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, color: '#080808', background: '#C8FF00', borderRadius: 9999, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>Home</Link>
        <Link to="/work" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 9999, padding: '0.75rem 1.5rem', textDecoration: 'none' }}>View Work</Link>
      </div>
    </main>
  )
}
