import { FadeUp } from '../components/Motion'

const experience = [
  {
    title: 'Principal Product Designer (Acting Design Lead)', company: 'Plexus Worldwide', url: 'https://www.plexusworldwide.com',
    period: '05/2024 – Present', location: 'Phoenix, AZ · Office',
    bullets: [
      'Directed a 5-person cross-disciplinary design org (UX, content, interaction) across US and 3 international e-commerce markets — owning team structure, project allocation, design quality, and direct 1:1 mentorship.',
      'Reduced checkout abandonment 43% through data-driven UX redesign of mobile-first PDPs, PLPs, and cart flows — informed by Power BI behavioral analytics.',
      'Consolidated 6 fragmented design tools into a unified platform, cutting team inefficiency 60% and implementing a token-based design system for CMS consistency.',
      'Led org-wide adoption of LLM-driven design tools, increasing sprint delivery velocity 35% across product and engineering teams.',
      'Launched e-commerce experiences across 3 international regions through cross-functional collaboration with PMs, developers, and BI.',
    ],
  },
  {
    title: 'Freelance UX Consultant', company: 'Independent Practice', url: null,
    period: '10/2023 – 05/2024', location: 'Remote',
    bullets: [
      'Delivered UX strategy and design systems consulting for e-commerce clients during intentional transition between leadership roles.',
      'Deepened expertise in AI-augmented prototyping and LLM-assisted research synthesis.',
    ],
  },
  {
    title: 'Senior Product Designer', company: 'Freeport-McMoRan', url: 'https://www.freeportmcmoran.com',
    period: '08/2022 – 10/2023', location: 'Phoenix, AZ · Hybrid',
    bullets: [
      'Led end-to-end design for mining operation digital tools across web, iOS, and Android — improving worker efficiency 30%.',
      'Facilitated 10 stakeholder workshops to define user needs and translate insights into actionable product requirements.',
      'Presented product roadmaps and Agile strategies to C-suite executives, securing approval for 5 major releases.',
      'Implemented a scalable token-based UI design system adopted across 3 platforms.',
    ],
  },
  {
    title: 'Senior Product Designer', company: 'OpenTech Alliance', url: 'https://www.opentechalliance.com',
    period: '05/2021 – 08/2022', location: 'Phoenix, AZ · Hybrid',
    bullets: [
      'Secured budget for 3 new UX initiatives through C-suite presentations connecting design investment to business outcomes.',
      'Redesigned Point of Sale kiosk UI, boosting transaction completion rates 75%.',
      'Improved e-commerce fulfillment experience 25% through data-driven UX optimizations.',
    ],
  },
  {
    title: 'UX Design Operator', company: 'Siemens', url: 'https://www.siemens.com',
    period: '07/2020 – 05/2021', location: 'Phoenix, AZ · Remote',
    bullets: [
      'Unified design systems across 4 concurrent industrial projects, reducing data dissemination needs 50%.',
      'Designed 3D and AutoCAD-integrated UI layouts for industrial control applications.',
    ],
  },
  {
    title: 'Senior UX Designer', company: 'Glynlyon Inc', url: 'https://www.glynlyon.com',
    period: '02/2014 – 04/2019', location: 'Phoenix, AZ · Office',
    bullets: [
      'Increased K-12 e-learning platform ease of use 65% through data-informed design decisions.',
      'Established WCAG and ADA compliance across all platforms through inclusive design research.',
      'Led cross-functional Design Thinking workshops to define user needs and align product roadmap.',
    ],
  },
]

const skills = {
  Leadership:        ['Design org direction', 'Team building & hiring', 'Mentorship & 1:1s', 'C-suite communication', 'Cross-functional alignment'],
  Strategy:          ['UX strategy & roadmapping', 'Design operations', 'OKR & business planning', 'Workshop facilitation', 'Design maturity assessment'],
  'Design Practice': ['Design systems architecture', 'Design tokens', 'Mobile-first UX', 'Interaction design', 'Coded prototypes'],
  Research:          ['User research', 'Usability testing', 'A/B testing', 'Power BI & analytics', 'Journey mapping'],
  Tooling:           ['Figma', 'MUI / React', 'Google MD3', 'LLM-augmented workflows', 'Agile / Scrum'],
}

const S = {
  label: { fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(8,8,8,0.3)', marginBottom: 0 },
  rule:  { borderTop: '1px solid rgba(8,8,8,0.1)', paddingTop: '2.5rem', marginTop: '2.5rem' },
  grid:  { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2rem' },
}

export default function Resume() {
  return (
    <main style={{ background: '#F4F1EA', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#080808', padding: 'clamp(1.5rem,5vw,5rem)', paddingTop: '8rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem' }}>
          <FadeUp>
            <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', marginBottom: 8 }}>Resume</p>
            <h1 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 'clamp(2.5rem,6vw,5rem)', color: 'white', fontWeight: 500, lineHeight: 0.95, marginBottom: 10 }}>Christopher Kenreigh</h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>Director of UX & Product Design · Phoenix, AZ</p>
          </FadeUp>
          {/* Place your PDF at /public/resume.pdf */}
          <a href="/director/resume.pdf" download style={{
            fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
            color: '#080808', background: '#C8FF00', borderRadius: 9999, padding: '0.75rem 1.5rem',
            textDecoration: 'none', transition: 'background 0.25s', alignSelf: 'flex-start',
          }}
          onMouseEnter={e => e.target.style.background='white'}
          onMouseLeave={e => e.target.style.background='#C8FF00'}
          >
            Download PDF ↓
          </a>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: 'clamp(3rem,6vw,6rem) clamp(1.5rem,5vw,5rem)' }}>

        {/* Summary */}
        <FadeUp>
          <div style={{ ...S.grid, marginBottom: '1rem' }}>
            <p style={S.label}>Summary</p>
          </div>
          <div style={S.rule}>
            <p style={{ fontSize: '1rem', color: 'rgba(8,8,8,0.7)', lineHeight: 1.75, maxWidth: 800, marginBottom: '1.25rem' }}>
              Design executive with 11+ years leading end-to-end digital product experiences across e-commerce, industrial, and enterprise environments. Built and directed 5-person design teams, architected multi-platform design systems, and delivered measurable outcomes: 43% reduction in checkout abandonment, 60% efficiency gain through tool consolidation, 35% velocity increase via AI-augmented workflows.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Director of UX', 'Design Operations', 'Team Leadership', 'e-Commerce UX', 'AI-Augmented Workflows'].map(t => (
                <span key={t} className="tag tag-dark">{t}</span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Experience */}
        <FadeUp>
          <div style={{ ...S.grid, ...S.rule, marginBottom: '1rem' }}>
            <p style={S.label}>Experience</p>
          </div>
        </FadeUp>

        {experience.map((job, i) => (
          <FadeUp key={job.company + i} delay={i * 0.06}>
            <div style={{ ...S.grid, borderTop: '1px solid rgba(8,8,8,0.08)', paddingTop: '2rem', marginTop: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: 'rgba(8,8,8,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{job.period}</p>
                <p style={{ fontSize: '0.65rem', color: 'rgba(8,8,8,0.2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{job.location}</p>
              </div>
              <div>
                <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.35rem', color: '#080808', fontWeight: 500, marginBottom: 4 }}>{job.title}</h3>
                {job.url
                  ? <a href={job.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: '#FF6B35', textDecoration: 'none', display: 'block', marginBottom: 16 }} onMouseEnter={e=>e.target.style.color='#080808'} onMouseLeave={e=>e.target.style.color='#FF6B35'}>{job.company} ↗</a>
                  : <p style={{ fontSize: '0.85rem', color: 'rgba(8,8,8,0.35)', marginBottom: 16 }}>{job.company}</p>
                }
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(8,8,8,0.2)', flexShrink: 0, marginTop: 8 }} />
                      <span style={{ fontSize: '0.85rem', color: 'rgba(8,8,8,0.6)', lineHeight: 1.65 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}

        {/* Skills */}
        <FadeUp>
          <div style={{ ...S.rule }}>
            <p style={{ ...S.label, marginBottom: '2rem' }}>Skills</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '2rem' }}>
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat}>
                  <p style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(8,8,8,0.3)', marginBottom: 12 }}>{cat}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map(s => <li key={s} style={{ fontSize: '0.82rem', color: 'rgba(8,8,8,0.55)', marginBottom: 6 }}>{s}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Education */}
        <FadeUp>
          <div style={{ ...S.grid, ...S.rule }}>
            <p style={S.label}>Education</p>
            <div>
              <h3 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: '1.35rem', color: '#080808', fontWeight: 500, marginBottom: 4 }}>Bachelor of Art</h3>
              <p style={{ color: 'rgba(8,8,8,0.55)', marginBottom: 4 }}>The Art Institute of Phoenix</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(8,8,8,0.3)' }}>2002 – 2005 · Phoenix, AZ</p>
            </div>
          </div>
        </FadeUp>

      </div>
    </main>
  )
}
