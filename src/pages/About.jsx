import { FadeUp, SlideIn } from '../components/Motion'

const philosophy = [
  { n: '01', title: 'Design is a business function.', body: "Every design decision must be defensible in business terms. I measure my work in retention, conversion, and revenue — not pixels or deliverables. If I can't connect my design choices to a business outcome, I haven't finished thinking." },
  { n: '02', title: 'Systems before screens.', body: "The most leveraged thing a design leader can build is the infrastructure that makes great design repeatable. Design systems, critique culture, research processes, and handoff standards compound over time. Screens don't." },
  { n: '03', title: 'Lead by teaching.', body: "I give feedback that builds judgment, not just corrects work. My goal for every designer I manage is that they graduate from needing my approval to making the call themselves. That's when a team scales." },
  { n: '04', title: 'Ambiguity is the job.', body: "The most important skill in a Director role is converting strategic fog into a concrete design direction a team can execute. Requirements will always be incomplete. Stakeholders will always disagree. The answer is structure, not certainty." },
]

const timeline = [
  { period: '2024 – Present', role: 'Principal Product Designer (Acting Design Lead)', company: 'Plexus Worldwide', location: 'Phoenix, AZ · Office', color: '#C8FF00', wins: ['43% reduction in checkout abandonment', 'Launched 3 international e-commerce regions', 'Consolidated 6 tools → 1 unified design system', '35% sprint velocity increase via LLM tooling'] },
  { period: '2023 – 2024',    role: 'Freelance UX Consultant', company: 'Independent Practice', location: 'Remote', color: '#8B5CF6', wins: ['UX strategy & design systems consulting', 'Deepened AI-augmented design workflow expertise'] },
  { period: '2022 – 2023',    role: 'Senior Product Designer', company: 'Freeport-McMoRan', location: 'Phoenix, AZ · Hybrid', color: '#FF6B35', wins: ['30% improvement in mining worker efficiency', 'Scalable UI design system across 3 platforms', '5 major releases approved through C-suite roadmaps'] },
  { period: '2021 – 2022',    role: 'Senior Product Designer', company: 'OpenTech Alliance', location: 'Phoenix, AZ · Hybrid', color: '#FF6B35', wins: ['75% increase in POS completion rates', '25% e-commerce fulfillment improvement'] },
  { period: '2020 – 2021',    role: 'UX Design Operator', company: 'Siemens', location: 'Phoenix, AZ · Remote', color: '#8A8880', wins: ['50% reduction in internal data dissemination', 'Unified design systems across 4 industrial projects'] },
  { period: '2014 – 2019',    role: 'Senior UX Designer', company: 'Glynlyon Inc', location: 'Phoenix, AZ · Office', color: '#8A8880', wins: ['65% increase in product ease of use', 'WCAG and ADA compliance across all platforms'] },
]

export default function About() {
  return (
    <main>

      {/* Hero */}
      <div style={{ background: '#080808', padding: 'clamp(1.5rem,5vw,5rem)', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', marginBottom: 12 }}>About</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(3rem,8vw,7rem)', color: 'white', fontWeight: 500, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              Christopher<br />Kenreigh
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.45)', maxWidth: 560, lineHeight: 1.65, fontWeight: 300 }}>
              Director of UX & Product Design. I build design organizations that turn complex product problems into measurable revenue and retention.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ background: '#F4F1EA', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.3)' }}>Design Philosophy</p>
              <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.4rem,2.5vw,2.2rem)', color: '#080808', fontWeight: 500 }}>How I think about leading design</h2>
            </div>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', borderTop: '1px solid rgba(8,8,8,0.1)' }}>
            {philosophy.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.08}>
                <div style={{ padding: '2.5rem 2rem', borderRight: i % 2 === 0 ? '1px solid rgba(8,8,8,0.1)' : 'none', borderBottom: i < 2 ? '1px solid rgba(8,8,8,0.1)' : 'none' }}>
                  <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(8,8,8,0.2)', display: 'block', marginBottom: 12 }}>{p.n}</span>
                  <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.3rem', color: '#080808', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.25 }}>{p.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(8,8,8,0.55)', lineHeight: 1.7 }}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: '#080808', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <FadeUp>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(1.6rem,3vw,2.5rem)', color: 'white', fontWeight: 500, marginBottom: '3rem' }}>11+ years across e-commerce, enterprise & industrial</h2>
          </FadeUp>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {timeline.map((t, i) => (
              <FadeUp key={t.company + i} delay={i * 0.07}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1.5rem', padding: '2.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{t.period}</p>
                    <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.location}</p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                      <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', margin: 0 }}>{t.company}</p>
                    </div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.35rem', color: 'white', fontWeight: 500, marginBottom: '0.75rem' }}>{t.role}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {t.wins.map(w => (
                        <li key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6, fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: t.color, flexShrink: 0, marginTop: 6 }} />
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
      </div>

      {/* Education + Contact */}
      <div style={{ background: '#F4F1EA', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '4rem', borderTop: '1px solid rgba(8,8,8,0.08)', paddingTop: '4rem' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.3)', marginBottom: 20 }}>Education</p>
            <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', color: '#080808', fontWeight: 500, marginBottom: 4 }}>Bachelor of Art</h3>
            <p style={{ color: 'rgba(8,8,8,0.55)', marginBottom: 4 }}>The Art Institute of Phoenix</p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(8,8,8,0.3)' }}>2002 – 2005 · Phoenix, AZ</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.3)', marginBottom: 20 }}>Contact</p>
            <a href="mailto:c.kenreigh@gmail.com" style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.5rem', color: '#080808', display: 'block', marginBottom: 6, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color='#FF6B35'}
              onMouseLeave={e => e.target.style.color='#080808'}
            >c.kenreigh@gmail.com</a>
            <p style={{ fontSize: '0.82rem', color: 'rgba(8,8,8,0.35)', marginBottom: 12 }}>480-206-2145 · Phoenix, AZ</p>
            <a href="https://www.linkedin.com/in/kenreigh/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(8,8,8,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color='#080808'}
              onMouseLeave={e => e.target.style.color='rgba(8,8,8,0.35)'}
            >LinkedIn ↗</a>
          </FadeUp>
        </div>
      </div>
    </main>
  )
}
