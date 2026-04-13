import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { Cursor } from '../../components/Cursor'
import { FadeUp } from '../../components/Motion'

export const metadata = {
  title: 'Resume — Christopher Kenreigh',
  description: 'Resume of Christopher Kenreigh — Director of UX & Product Design.',
}

const experience = [
  {
    title:   'Principal Product Designer (Acting Design Lead)',
    company: 'Plexus Worldwide',
    url:     'https://www.plexusworldwide.com',
    period:  '05/2024 – Present',
    location:'Phoenix, AZ · Office',
    bullets: [
      'Directed a 5-person cross-disciplinary design org (UX, content, interaction) across US and 3 international e-commerce markets — owning team structure, project allocation, design quality standards, and direct 1:1 mentorship of each designer.',
      'Spearheaded e-commerce modernization with PMs, developers, and BI — identified user behavior insights via Power BI; redesigned website, portals, mobile-first PDPs/PLPs, and cart flows; reduced checkout abandonment by 43%.',
      'Facilitated customer, stakeholder, and collaborative team workshops for iterative features and A/B tested prototypes for complex product interfaces across international markets.',
      'Consolidated 6 fragmented design tools into a unified platform, cutting team inefficiencies by 60% and implementing a branded token-based design system for CMS consistency.',
      'Led organization-wide adoption of LLM-driven design tools and workflows, increasing sprint delivery velocity by 35% across product and engineering teams.',
    ],
  },
  {
    title:   'Freelance UX Consultant',
    company: 'Independent Practice',
    url:     null,
    period:  '10/2023 – 05/2024',
    location:'Remote',
    bullets: [
      'Delivered UX strategy and design systems consulting for e-commerce clients during intentional transition between full-time leadership roles.',
      'Deepened expertise in AI-augmented prototyping workflows and LLM-assisted design research synthesis.',
    ],
  },
  {
    title:   'Senior Product Designer',
    company: 'Freeport-McMoRan',
    url:     'https://www.freeportmcmoran.com',
    period:  '08/2022 – 10/2023',
    location:'Phoenix, AZ · Hybrid',
    bullets: [
      'Led end-to-end design for mining operation digital tools across responsive web, iOS, and Android — improving worker task completion efficiency by 30%.',
      'Facilitated 10 stakeholder workshops to define user needs and translated insights into actionable product requirements.',
      'Presented product roadmaps and Agile strategies to C-suite executives, securing approval for 5 major product releases.',
      'Implemented a scalable token-based UI design system adopted across web, iOS, and Android platforms.',
    ],
  },
  {
    title:   'Senior Product Designer',
    company: 'OpenTech Alliance',
    url:     'https://www.opentechalliance.com',
    period:  '05/2021 – 08/2022',
    location:'Phoenix, AZ · Hybrid',
    bullets: [
      'Secured budget for 3 new UX initiatives by delivering C-suite presentations that connected design investment to measurable business outcomes.',
      'Redesigned Point of Sale kiosk UI for self-storage facilities nationwide, boosting transaction completion rates by 75%.',
      'Designed compliant user data capture processes, eliminating legal exposure.',
      'Improved e-commerce fulfillment experience by 25% through data-driven UX optimizations.',
    ],
  },
  {
    title:   'UX Design Operator',
    company: 'Siemens',
    url:     'https://www.siemens.com',
    period:  '07/2020 – 05/2021',
    location:'Phoenix, AZ · Remote',
    bullets: [
      'Led cross-departmental collaboration to unify design systems across 4 concurrent industrial projects.',
      'Reduced internal data dissemination needs by 50% through structured documentation and design standards.',
      'Designed 3D and AutoCAD-integrated UI layouts for industrial control applications.',
    ],
  },
  {
    title:   'Senior UX Designer',
    company: 'Glynlyon Inc',
    url:     'https://www.glynlyon.com',
    period:  '02/2014 – 04/2019',
    location:'Phoenix, AZ · Office',
    bullets: [
      'Enhanced the K-12 e-learning platform through inclusive design research that established WCAG and ADA compliance across all platforms.',
      'Drove data-informed design decisions that increased product ease of use by 65%.',
      'Led cross-functional Design Thinking workshops to define user needs and align product roadmap.',
    ],
  },
]

const skills = {
  'Leadership':       ['Design org direction', 'Team building & hiring', 'Mentorship & 1:1s', 'Cross-functional alignment', 'C-suite communication'],
  'Strategy':         ['UX strategy & roadmapping', 'Design operations', 'OKR & business planning', 'Workshop facilitation', 'Design maturity assessment'],
  'Design Practice':  ['Design systems architecture', 'Design tokens', 'Mobile-first UX', 'Interaction design', 'Coded prototypes'],
  'Research':         ['User research', 'Usability testing', 'A/B testing', 'Power BI & analytics', 'Journey mapping'],
  'Tooling':          ['Figma', 'MUI / React', 'Google MD3', 'LLM-augmented workflows', 'Agile / Scrum'],
}

export default function ResumePage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="bg-paper min-h-screen">

        {/* Page header */}
        <div className="bg-ink">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-16">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-2xs uppercase tracking-widest text-white/30 font-medium mb-3">
                    Resume
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl text-white font-medium
                                 leading-[0.92] tracking-tight">
                    Christopher Kenreigh
                  </h1>
                  <p className="text-base text-white/45 mt-3">
                    Director of UX & Product Design · Phoenix, AZ
                  </p>
                </div>
                {/* NOTE: Replace /resume.pdf with your actual PDF file in /public/ */}
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest
                             font-medium text-ink bg-accent rounded-full px-6 py-3
                             hover:bg-white transition-colors duration-300 self-start md:self-auto"
                >
                  Download PDF ↓
                </a>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Resume content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-section">

          {/* Summary */}
          <FadeUp>
            <div className="grid md:grid-cols-editorial gap-12 md:gap-20 mb-16
                            pb-16 border-b border-ink/10">
              <div>
                <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium">
                  Summary
                </p>
              </div>
              <div>
                <p className="text-lg text-ink/75 leading-relaxed max-w-prose">
                  Design executive with 11+ years leading end-to-end digital product
                  experiences across e-commerce, industrial, and enterprise environments.
                  Built and directed 5-person design teams, architected multi-platform
                  design systems, and delivered measurable business outcomes: 43% reduction
                  in checkout abandonment, 60% efficiency gain through tool consolidation,
                  35% increase in sprint velocity via AI-augmented workflows. Fluent in
                  executive strategy, design operations, and cross-functional leadership —
                  from product vision to shipped product.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Director of UX', 'Design Operations', 'Team Leadership', 'e-Commerce UX', 'AI-Augmented Workflows'].map(tag => (
                    <span key={tag} className="tag tag-dark">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Experience */}
          <FadeUp>
            <div className="grid md:grid-cols-editorial gap-12 md:gap-20 mb-4">
              <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium">
                Experience
              </p>
              <div />
            </div>
          </FadeUp>

          <div className="space-y-0 divide-y divide-ink/8 mb-16">
            {experience.map((job, i) => (
              <FadeUp key={job.company + job.period} delay={i * 0.07}>
                <div className="grid md:grid-cols-editorial gap-6 md:gap-20 py-10">

                  {/* Left */}
                  <div>
                    <p className="text-xs text-ink/40 font-medium uppercase tracking-wider mb-1">
                      {job.period}
                    </p>
                    <p className="text-xs text-ink/25 uppercase tracking-wide">
                      {job.location}
                    </p>
                  </div>

                  {/* Right */}
                  <div>
                    <h3 className="font-display text-2xl text-ink font-medium mb-1">
                      {job.title}
                    </h3>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-warm hover:text-ink transition-colors
                                   hover-underline inline-block mb-5"
                      >
                        {job.company} ↗
                      </a>
                    ) : (
                      <p className="text-sm text-ink/40 mb-5">{job.company}</p>
                    )}
                    <ul className="space-y-3">
                      {job.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-ink/25 flex-shrink-0" />
                          <span className="text-sm text-ink/65 leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Skills */}
          <FadeUp>
            <div className="grid md:grid-cols-editorial gap-12 md:gap-20 pt-16 border-t border-ink/10 mb-16">
              <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium">
                Skills
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium mb-3">
                      {category}
                    </p>
                    <ul className="space-y-1.5">
                      {items.map(skill => (
                        <li key={skill} className="text-sm text-ink/60">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Education */}
          <FadeUp>
            <div className="grid md:grid-cols-editorial gap-12 md:gap-20 pt-16 border-t border-ink/10">
              <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium">
                Education
              </p>
              <div>
                <h3 className="font-display text-2xl text-ink font-medium mb-1">
                  Bachelor of Art
                </h3>
                <p className="text-base text-ink/60">The Art Institute of Phoenix</p>
                <p className="text-sm text-ink/35 mt-1">2002 – 2005 · Phoenix, AZ</p>
              </div>
            </div>
          </FadeUp>

        </div>
      </main>
      <Footer />
    </>
  )
}
