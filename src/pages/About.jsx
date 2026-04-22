import { FadeUp, SlideIn } from '../components/Motion'

const BLUE = '#3B82F6'
const SP   = 'clamp(3.5rem,7vw,6.5rem) clamp(1rem,4vw,2.5rem)'
const MAX  = { maxWidth: 1400, margin: '0 auto' }

const philosophy = [
  { n: '01', title: 'Design is a business function.', body: "Every design decision must be defensible in business terms. I measure my work in retention, conversion, and revenue — not pixels or deliverables. If I can't connect my design choices to a business outcome, I haven't finished thinking." },
  { n: '02', title: 'Systems before screens.',        body: "The most leveraged thing a design leader can build is the infrastructure that makes great design repeatable. Design systems, critique culture, research processes, and handoff standards compound over time. Screens don't." },
  { n: '03', title: 'Lead by teaching.',              body: "I give feedback that builds judgment, not just corrects work. My goal for every designer I manage is that they graduate from needing my approval to making the call themselves. That's when a team scales." },
  { n: '04', title: 'Ambiguity is the job.',          body: "The most important skill in a Director role is converting strategic fog into a concrete design direction a team can execute. Requirements will always be incomplete. Stakeholders will always disagree. The answer is structure, not certainty." },
]

const timeline = [
  { period: '2024 – Present', role: 'UX Design Director', company: 'Plexus Worldwide',     location: 'Phoenix, AZ · Office', color: BLUE,      wins: ['43% reduction in checkout abandonment', 'Launched 3 international e-commerce regions', 'Consolidated 6 tools → 1 unified design system', '35% sprint velocity increase via LLM tooling'] },
  { period: '2026 – 2026',    role: 'Freelance UX Consultant',                         company: 'Independent Practice', location: 'Remote',               color: '#8B5CF6', wins: ['UX strategy & design systems consulting', 'Deepened AI-augmented design workflow expertise'] },
  { period: '2022 – 2023',    role: 'Senior Product Designer',                         company: 'Freeport-McMoRan',     location: 'Phoenix, AZ · Hybrid', color: '#FF6B35', wins: ['30% improvement in mining worker efficiency', 'Scalable UI design system across 3 platforms', '5 major releases approved through C-suite roadmaps'] },
  { period: '2021 – 2022',    role: 'Senior Product Designer',                         company: 'OpenTech Alliance',    location: 'Phoenix, AZ · Hybrid', color: '#FF6B35', wins: ['75% increase in POS completion rates', '25% e-commerce fulfillment improvement'] },
  { period: '2020 – 2021',    role: 'UX Design Operator',                              company: 'Siemens',              location: 'Phoenix, AZ · Remote', color: '#8A8880', wins: ['50% reduction in internal data dissemination', 'Unified design systems across 4 industrial projects'] },
  { period: '2014 – 2019',    role: 'Senior UX Designer',                              company: 'Glynlyon Inc',         location: 'Phoenix, AZ · Office', color: '#8A8880', wins: ['65% increase in product ease of use', 'WCAG and ADA compliance across all platforms'] },
]

export default function About({ setPage }) {
  return (
    <main>

      {/* Hero */}
      <div style={{ background: '#080808', padding: 'clamp(1rem,4vw,2.5rem)', paddingTop: 'clamp(5rem,10vw,8rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)' }}>
        <div style={MAX}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#3B82F6', marginBottom: 12 }}>About</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(2.8rem,8vw,7rem)', color: '#ffffff', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Christopher<br />Kenreigh
            </h1>
            <p style={{ fontSize: 'clamp(0.95rem,2vw,1.1rem)', color: 'rgba(255,255,255,0.62)', maxWidth: 560, lineHeight: 1.65, fontWeight: 300 }}>
              Director of UX & Product Design. I build design organizations that turn complex product problems into measurable revenue and retention.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ background: '#F4F1EA', padding: SP }}>
        <div style={MAX}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.38)' }}>Design Philosophy</p>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.3rem,2.5vw,2.2rem)', color: '#080808', fontWeight: 500 }}>How I think about leading design</h2>
            </div>
          </FadeUp>
          <hr className="divider-light" />
          {/* Philosophy grid — equal height cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
            {philosophy.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.08}>
                <div style={{
                  padding: 'clamp(1.5rem,3vw,2.5rem) clamp(1rem,2vw,2rem)',
                  borderRight: (i % 2 === 0) ? '1px solid rgba(8,8,8,0.10)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(8,8,8,0.10)' : 'none',
                  height: '100%',
                }}>
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(8,8,8,0.30)', display: 'block', marginBottom: 12 }}>{p.n}</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: '#080808', fontWeight: 500, marginBottom: '0.65rem', lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(8,8,8,0.62)', lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: '#080808', padding: SP }}>
        <div style={MAX}>
          <FadeUp>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.4rem,3vw,2.5rem)', color: 'white', fontWeight: 500, marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              11+ years across e-commerce, enterprise & industrial
            </h2>
          </FadeUp>
          <hr className="divider-dark" />
          {timeline.map((t, i) => (
            <FadeUp key={t.company + i} delay={i * 0.07}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
                gap: 'clamp(1rem,3vw,1.5rem)',
                padding: 'clamp(1.5rem,3vw,2.5rem) 0',
                borderBottom: '1px solid rgba(255,255,255,0.09)',
              }}>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t.period}</p>
                  <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.location}</p>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                    <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{t.company}</p>
                  </div>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.1rem,2vw,1.35rem)', color: 'white', fontWeight: 500, marginBottom: '0.65rem' }}>{t.role}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {t.wins.map(w => (
                      <li key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6, fontSize: '0.85rem', color: 'rgba(255,255,255,0.60)' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: t.color, flexShrink: 0, marginTop: 7 }} />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Education + Contact */}
      <div style={{ background: '#F4F1EA', padding: SP }}>
        <div style={{ ...MAX, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(2rem,5vw,4rem)' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.38)', marginBottom: 18 }}>Education</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.4rem', color: '#080808', fontWeight: 500, marginBottom: 4 }}>Bachelor of Art</h3>
            <p style={{ color: 'rgba(8,8,8,0.62)', marginBottom: 4 }}>The Art Institute of Phoenix</p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(8,8,8,0.42)' }}>2002 – 2005 · Phoenix, AZ</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.38)', marginBottom: 18 }}>Contact</p>
            <a href="mailto:c.kenreigh@gmail.com" style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.4rem', color: '#080808', display: 'block', marginBottom: 6, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color='#FF6B35'}
              onMouseLeave={e => e.currentTarget.style.color='#080808'}
            >c.kenreigh@gmail.com</a>
              <p style={{ fontSize: '0.85rem', color: 'rgba(8,8,8,0.52)', marginBottom: 12 }}>480-206-2145 · USA / Remote / Office</p>
            <a href="https://www.linkedin.com/in/kenreigh/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(8,8,8,0.48)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color='#080808'}
              onMouseLeave={e => e.currentTarget.style.color='rgba(8,8,8,0.48)'}
            >LinkedIn ↗</a>
          </FadeUp>
        </div>
      </div>
    </main>
  )
}
