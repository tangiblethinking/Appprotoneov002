import { CaseStudyCard } from '../components/CaseStudyCard'
import { caseStudies } from '../lib/caseStudies'
import { FadeUp } from '../components/Motion'

const BLUE = '#3B82F6'
const SP   = 'clamp(3.5rem,7vw,6.5rem) clamp(1rem,4vw,2.5rem)'
const MAX  = { maxWidth: 1400, margin: '0 auto' }

export default function Work({ setPage }) {
  return (
    <main style={{ background: '#080808', minHeight: '100vh' }}>
      <div style={{ ...MAX, padding: 'clamp(1rem,4vw,2.5rem)', paddingTop: 'clamp(5rem,10vw,8rem)' }}>

        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.09)', paddingBottom: 'clamp(2rem,4vw,3rem)', marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.40)', marginBottom: 12 }}>Selected Work</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(2.8rem,8vw,7rem)', color: 'white', fontWeight: 500, lineHeight: 0.93, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Case Studies
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', maxWidth: 480, lineHeight: 1.7 }}>
              Three studies in design leadership — each documenting the organizational problem, strategic approach, and measurable business outcome.
            </p>
          </FadeUp>
        </div>

        {/* Equal-height card grid */}
        <div className="card-grid" style={{ marginBottom: 'clamp(3rem,6vw,5rem)' }}>
          {caseStudies.map((s, i) => <CaseStudyCard key={s.id} study={s} index={i} />)}
        </div>

        <FadeUp delay={0.3}>
          <hr className="divider-dark" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(1.5rem,3vw,3rem)' }}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)' }}>Additional Work</p>
            <div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Additional case studies from Freeport-McMoRan, OpenTech Alliance, Siemens, and Glynlyon are available on request. Most involve NDA-protected interfaces — redacted versions available for Director-level discussions.
              </p>
              <a href="mailto:c.kenreigh@gmail.com?subject=Additional Case Study Request" style={{
                fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color=BLUE}
              onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
              >Request Additional Work →</a>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  )
}
