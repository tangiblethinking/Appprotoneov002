import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FadeUp, SlideIn } from '../components/Motion'
import { CaseStudyCard } from '../components/CaseStudyCard'
import { caseStudies } from '../lib/caseStudies'

const expo  = [0.16, 1, 0.3, 1]
const BLUE  = '#3B82F6'
const BLUE2 = '#2563EB'

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const dur = 1600, t0 = Date.now()
        const tick = () => {
          const p = Math.min((Date.now() - t0) / dur, 1)
          const e = 1 - Math.pow(1 - p, 4)
          setVal(Math.round(e * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{val}{suffix}</span>
}

const metrics = [
  { value: 43, suffix: '%', label: 'Checkout abandonment reduced', sub: 'Plexus Worldwide' },
  { value: 60, suffix: '%', label: 'Tool consolidation efficiency', sub: 'Design Ops · 6→1' },
  { value: 35, suffix: '%', label: 'Sprint velocity increase',      sub: 'AI-augmented workflows' },
  { value: 11, suffix: '+', label: 'Years in product design',       sub: 'e-Com · Enterprise · Industrial' },
  { value: 5,  suffix: '',  label: 'Designers led',                 sub: 'Direct reports · Plexus' },
]

const capabilities = [
  {
    verb: 'Lead', color: BLUE,
    headline: 'I grow design organizations.',
    body: 'I build the team infrastructure that makes great design scalable — recruiting, mentoring, structuring critique, and creating a culture where designers do their best work. At Plexus, I led 5 designers across UX, content, and interaction with direct ownership of their growth, allocation, and quality.',
    items: ['Team structure & hiring', 'Design critique systems', '1:1 development & coaching', 'Cross-functional alignment', 'Design maturity roadmaps'],
  },
  {
    verb: 'Build', color: '#FF6B35',
    headline: 'I architect systems, not screens.',
    body: 'Design systems, tooling ecosystems, process frameworks, research repositories — I build the infrastructure that lets teams move fast without fragmenting. I consolidated 6 tools into one unified platform and introduced AI-augmented workflows that increased delivery velocity by 35%.',
    items: ['Design systems architecture', 'Design operations frameworks', 'AI-augmented workflows', 'Coded prototypes & tokens', 'Component library governance'],
  },
  {
    verb: 'Ship', color: '#8B5CF6',
    headline: 'I translate strategy into outcomes.',
    body: 'From product vision to shipped product, I own the full end-to-end — user research, journey mapping, stakeholder alignment, A/B testing, and post-launch optimization. I speak business: retention, conversion, abandonment, and revenue.',
    items: ['UX strategy & roadmapping', 'e-Commerce optimization', 'Stakeholder presentations', 'Usability & A/B testing', 'Multi-region product launches'],
  },
]

const go = (setPage, p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }) }
const SP = 'clamp(3.5rem,7vw,6.5rem) clamp(1rem,4vw,2.5rem)'
const MAX = { maxWidth: 1400, margin: '0 auto' }

export default function Home({ setPage }) {
  return (
    <main>

      {/* HERO */}
      <section style={{
        minHeight: '100svh', background: '#080808',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(1rem,4vw,5rem)',
        paddingTop: '7rem', paddingBottom: 'clamp(3rem,6vw,5rem)',
        position: 'relative', overflow: 'hidden',
      }} className="grid-bg">

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'absolute', top: '4.8rem', left: 'clamp(1rem,4vw,5rem)', display: 'flex', alignItems: 'center', gap: 12 }}
        >
          <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.40)' }}>Portfolio · 2026</span>
          <span style={{ display: 'block', width: 28, height: 1, background: 'rgba(255,255,255,0.18)' }} />
          <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(59,130,246,0.75)' }}>Available for Director Roles</span>
        </motion.div>

        <div style={{ ...MAX, width: '100%' }}>
          <motion.p
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: expo }}
            style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}
          >Christopher Kenreigh</motion.p>

          {[
            { text: 'I build design',       color: 'white',                   delay: 0.45 },
            { text: 'organizations',         color: BLUE,                      delay: 0.55, italic: true },
            { text: 'that turn complexity',  color: 'rgba(255,255,255,0.38)',  delay: 0.63 },
            { text: 'into clarity.',         color: 'rgba(255,255,255,0.38)',  delay: 0.70 },
          ].map(({ text, color, delay, italic }) => (
            <div key={text} style={{ overflow: 'visible', paddingBottom: '0.12em' }}>
              <motion.div
                initial={{ y: '110%' }} animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay, ease: expo }}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(2.4rem, 7vw, 8rem)',
                  lineHeight: 1.0, letterSpacing: '-0.03em',
                  color, fontStyle: italic ? 'italic' : 'normal', fontWeight: 500,
                }}
              >{text}</motion.div>
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: expo }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: 'clamp(1.5rem,4vw,3rem)' }}
          >
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', maxWidth: 380, lineHeight: 1.65, margin: 0 }}>
              Director of UX & Product Design · 11+ years across e-commerce, enterprise, and industrial.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={() => go(setPage, 'work')} style={{
                fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                fontWeight: 500, color: 'white', border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 9999, padding: '0.75rem 1.5rem', background: 'transparent',
                cursor: 'pointer', transition: 'all 0.25s', display: 'inline-flex', alignItems: 'center', minHeight: 44,
              }}
              onMouseEnter={e => { e.currentTarget.style.color=BLUE; e.currentTarget.style.borderColor=BLUE }}
              onMouseLeave={e => { e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)' }}
              >View Work →</button>
              <a href="mailto:c.kenreigh@gmail.com" style={{
                fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                fontWeight: 500, color: 'white', background: BLUE,
                borderRadius: 9999, padding: '0.75rem 1.5rem', textDecoration: 'none',
                transition: 'background 0.25s', display: 'inline-flex', alignItems: 'center', minHeight: 44,
              }}
              onMouseEnter={e => e.currentTarget.style.background=BLUE2}
              onMouseLeave={e => e.currentTarget.style.background=BLUE}
              >Contact</a>
            </div>
          </motion.div>

        {/* Scroll indicator — in flow, 16px below CTA, centered */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginTop: '16px' }}
        >
          <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.40)' }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.12)', position: 'relative', overflow: 'hidden' }}>
            <div className="scroll-dot" style={{ position: 'absolute', top: 0, width: '100%', height: '33%', background: BLUE, opacity: 0.7 }} />
          </div>
        </motion.div>
        </div>

      </section>

      {/* METRICS */}
      <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.09)', borderBottom: '1px solid rgba(255,255,255,0.09)' }}>
        <div style={{ ...MAX, padding: '0 clamp(1rem,4vw,2.5rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))' }}>
            {metrics.map((m, i) => (
              <motion.div key={m.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08, ease: expo }}
                style={{ padding: 'clamp(1.25rem,3vw,2rem) clamp(0.75rem,2vw,1.5rem)', borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.09)' : 'none' }}
              >
                <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.6rem,3vw,2.5rem)', color: BLUE, margin: '0 0 6px', lineHeight: 1 }}>
                  <Counter target={m.value} suffix={m.suffix} />
                </p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.68)', margin: '0 0 3px', lineHeight: 1.4 }}>{m.label}</p>
                <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.38)', margin: 0 }}>{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ background: '#F4F1EA', padding: SP }}>
        <div style={{ ...MAX, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'start' }}>
          <SlideIn>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.38)', marginBottom: 12 }}>About</p>
            <hr className="divider-light" style={{ marginBottom: 20 }} />
            <p style={{ fontSize: '0.75rem', color: 'rgba(8,8,8,0.48)', lineHeight: 1.6 }}>USA Based · Remote / Hybrid / Relocation</p>
          </SlideIn>
          <div>
            <FadeUp>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.5rem,3.5vw,3rem)', color: '#080808', lineHeight: 1.08, marginBottom: '1.75rem', fontWeight: 500 }}>
                A design executive who measures success in{' '}
                <em style={{ color: '#FF6B35', fontStyle: 'normal' }}>business outcomes</em>, not deliverables.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p style={{ fontSize: '0.95rem', color: 'rgba(8,8,8,0.65)', lineHeight: 1.75, marginBottom: '1rem' }}>
                I've spent 11+ years translating complex problems into intuitive digital experiences — across e-commerce platforms, enterprise tools, and industrial applications. At Plexus Worldwide, I lead a 5-person design org responsible for US and 3 international markets, cutting checkout abandonment by 43% and restructuring our entire workflow around AI-augmented tooling.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p style={{ fontSize: '0.95rem', color: 'rgba(8,8,8,0.65)', lineHeight: 1.75, marginBottom: '2rem' }}>
                I'm drawn to companies where UX maturity is still an aspiration, not a given. That's where I do my best work.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              <button onClick={() => go(setPage, 'about')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44,
                fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500,
                color: '#080808', border: '1px solid rgba(8,8,8,0.22)', borderRadius: 9999,
                padding: '0.75rem 1.5rem', background: 'transparent', cursor: 'pointer', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='#080808'; e.currentTarget.style.color='white' }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#080808' }}
              >Full Profile →</button>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section style={{ background: '#080808', padding: SP }}>
        <div style={MAX}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem,4vw,3.5rem)', flexWrap: 'wrap', gap: '1rem' }}>
            <FadeUp>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.38)', marginBottom: 8 }}>Selected Work</p>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.5rem,3.5vw,3rem)', color: 'white', fontWeight: 500, margin: 0 }}>Case Studies</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <button onClick={() => go(setPage, 'work')} style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.50)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color=BLUE}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.50)'}
              >All Work →</button>
            </FadeUp>
          </div>
          <div className="card-grid">
            {caseStudies.map((s, i) => <CaseStudyCard key={s.id} study={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ background: '#F4F1EA', padding: SP, borderTop: '1px solid rgba(8,8,8,0.08)' }}>
        <div style={MAX}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.38)', marginBottom: 8 }}>Capabilities</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.5rem,3.5vw,3rem)', color: '#080808', fontWeight: 500, marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>What I do for companies</h2>
          </FadeUp>
          <hr className="divider-light" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            {capabilities.map((cap, i) => (
              <FadeUp key={cap.verb} delay={i * 0.1}>
                <div style={{ padding: 'clamp(1.5rem,3vw,2.5rem) clamp(1rem,2vw,2rem)', borderRight: i < capabilities.length - 1 ? '1px solid rgba(8,8,8,0.10)' : 'none' }}>
                  <span style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(2.2rem,5vw,4rem)', color: cap.color, display: 'block', marginBottom: '0.6rem', fontWeight: 500 }}>{cap.verb}</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.2rem', color: '#080808', fontWeight: 500, lineHeight: 1.3, marginBottom: '0.7rem' }}>{cap.headline}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(8,8,8,0.62)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{cap.body}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {cap.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 7 }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: cap.color, flexShrink: 0, marginTop: 7 }} />
                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(8,8,8,0.55)', fontWeight: 500 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#080808', padding: SP, borderTop: '1px solid rgba(255,255,255,0.09)' }}>
        <div style={{ ...MAX, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 'clamp(2rem,5vw,5rem)', alignItems: 'center' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)' }}>Let's talk</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.5rem,3.5vw,3rem)', color: 'white', fontWeight: 500, lineHeight: 1.08, marginBottom: '2rem' }}>
              If your company needs design to{' '}
              <em style={{ color: BLUE, fontStyle: 'normal' }}>grow up</em>,
              let's find out if I'm the right person to lead that.
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="mailto:c.kenreigh@gmail.com" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: 48,
                fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
                color: 'white', background: BLUE, borderRadius: 9999,
                padding: '0.875rem 2rem', textDecoration: 'none', transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background=BLUE2}
              onMouseLeave={e => e.currentTarget.style.background=BLUE}
              >c.kenreigh@gmail.com →</a>
              <a href="https://www.linkedin.com/in/kenreigh/" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 48,
                fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
                color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.22)',
                borderRadius: 9999, padding: '0.875rem 2rem', textDecoration: 'none', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='rgba(255,255,255,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.65)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.22)' }}
              >LinkedIn ↗</a>
            </div>
            <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginTop: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              480-206-2145 · USA Based · Remote / Hybrid / Relocation
            </p>
          </FadeUp>
        </div>
      </section>

    </main>
  )
}
