import { CaseStudyCard } from '../components/CaseStudyCard'
import { caseStudies } from '../lib/caseStudies'
import { FadeUp } from '../components/Motion'

export default function Work() {
  return (
    <main style={{ background: '#080808', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(1.5rem,5vw,5rem)', paddingTop: '8rem' }}>

        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '3rem', marginBottom: '4rem' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>Selected Work</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(3rem,8vw,7rem)', color: 'white', fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              Case Studies
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.4)', maxWidth: 480, lineHeight: 1.7 }}>
              Three studies in design leadership — each documenting the organizational problem, strategic approach, and measurable business outcome.
            </p>
          </FadeUp>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {caseStudies.map((s, i) => <CaseStudyCard key={s.id} study={s} index={i} />)}
        </div>

        <FadeUp delay={0.3}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '3rem' }}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)' }}>Additional Work</p>
            <div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Additional case studies from Freeport-McMoRan, OpenTech Alliance, Siemens, and Glynlyon are available on request. Most involve NDA-protected interfaces — redacted versions available for Director-level discussions.
              </p>
              <a href="mailto:c.kenreigh@gmail.com?subject=Additional Case Study Request" style={{
                fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
                color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color='#C8FF00'}
              onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.35)'}
              >
                Request Additional Work →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  )
}
