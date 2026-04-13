import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { Cursor } from '../../components/Cursor'
import { FadeUp, SlideIn } from '../../components/Motion'

export const metadata = {
  title: 'About — Christopher Kenreigh',
  description: 'Design executive with 11+ years building digital product organizations across e-commerce, enterprise, and industrial environments.',
}

const timeline = [
  {
    period:  '2024 – Present',
    role:    'Principal Product Designer (Acting Design Lead)',
    company: 'Plexus Worldwide',
    location:'Phoenix, AZ · Office',
    accent:  '#C8FF00',
    summary: 'Leading a 5-person design organization across US and 3 international e-commerce markets. Ownership of team structure, design quality, and org-wide design operations.',
    wins: [
      '43% reduction in checkout abandonment',
      'Launched 3 international e-commerce regions',
      'Consolidated 6 tools → 1 unified design system',
      '35% sprint velocity increase via LLM tooling',
    ],
  },
  {
    period:  '2023 – 2024',
    role:    'Freelance UX Consultant',
    company: 'Independent Practice',
    location:'Remote',
    accent:  '#8B5CF6',
    summary: 'UX strategy and design systems consulting for e-commerce and enterprise clients during intentional transition between full-time leadership roles.',
    wins: [
      'Maintained active design practice across client engagements',
      'Deepened expertise in AI-augmented design workflows',
    ],
  },
  {
    period:  '2022 – 2023',
    role:    'Senior Product Designer',
    company: 'Freeport-McMoRan',
    location:'Phoenix, AZ · Hybrid',
    accent:  '#FF6B35',
    summary: 'End-to-end design for mining operation digital tools across web, iOS, and Android. Secured approval for 5 major product releases through C-suite roadmap presentations.',
    wins: [
      '30% improvement in mining worker efficiency',
      'Scalable UI design system across 3 platforms',
      '10 stakeholder workshops to define product requirements',
    ],
  },
  {
    period:  '2021 – 2022',
    role:    'Senior Product Designer',
    company: 'OpenTech Alliance',
    location:'Phoenix, AZ · Hybrid',
    accent:  '#FF6B35',
    summary: 'Redesigned the Point of Sale kiosk experience for self-storage facilities nationwide. Secured budget for 3 new UX initiatives through executive presentation.',
    wins: [
      '75% increase in POS completion rates',
      '25% e-commerce fulfillment improvement',
      '100% legal risk reduction via compliant data capture',
    ],
  },
  {
    period:  '2020 – 2021',
    role:    'UX Design Operator',
    company: 'Siemens',
    location:'Phoenix, AZ · Remote',
    accent:  '#8A8880',
    summary: 'Cross-departmental design system unification across 4 industrial projects. Designed 3D and AutoCAD-integrated UI layouts for industrial control systems.',
    wins: [
      '50% reduction in internal data dissemination needs',
      'Unified design systems across 4 concurrent projects',
    ],
  },
  {
    period:  '2014 – 2019',
    role:    'Senior UX Designer',
    company: 'Glynlyon Inc',
    location:'Phoenix, AZ · Office',
    accent:  '#8A8880',
    summary: 'Led UX for K-12 e-learning platform. Established inclusive, WCAG/ADA-compliant design standards. Led cross-functional Design Thinking workshops.',
    wins: [
      '65% increase in product ease of use',
      'WCAG and ADA compliance across all platforms',
    ],
  },
]

const philosophy = [
  {
    number: '01',
    title: 'Design is a business function.',
    body: 'Every design decision I make has to be defensible in business terms. I measure my work in retention, conversion, and revenue — not in pixels or deliverables. If I can\'t connect my design choices to a business outcome, I haven\'t finished thinking.',
  },
  {
    number: '02',
    title: 'Systems before screens.',
    body: 'The most leveraged thing a design leader can build is not a beautiful interface — it\'s the infrastructure that makes beautiful interfaces repeatable. Design systems, critique culture, research processes, and handoff standards compound over time. Screens don\'t.',
  },
  {
    number: '03',
    title: 'Lead by teaching.',
    body: 'I give feedback that builds judgment, not just corrects work. My goal for every designer on my team is that they graduate from needing my approval to being able to make the call themselves. That\'s when a team scales.',
  },
  {
    number: '04',
    title: 'Ambiguity is the job.',
    body: 'The most important skill in a Director role is converting strategic fog into a concrete design direction that a team can execute. Requirements will always be incomplete. Stakeholders will always disagree. Users will always surprise you. The answer is structure, not certainty.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="bg-paper min-h-screen">

        {/* Hero */}
        <div className="bg-ink">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-20">
            <FadeUp>
              <p className="text-2xs uppercase tracking-widest text-white/30 font-medium mb-4">
                About
              </p>
              <h1 className="font-display text-fluid-hero text-white font-medium leading-[0.92] mb-10">
                Christopher<br />Kenreigh
              </h1>
              <p className="text-xl text-white/50 max-w-2xl leading-relaxed font-light">
                Director of UX & Product Design. I build design organizations that
                turn complex product problems into measurable revenue and retention.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-section">
          <FadeUp>
            <div className="grid md:grid-cols-editorial gap-12 md:gap-20 mb-16">
              <div>
                <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium">
                  Design Philosophy
                </p>
              </div>
              <h2 className="font-display text-fluid-lg text-ink font-medium leading-[1.15]">
                How I think about leading design
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-ink/10
                          border-t border-ink/10">
            {philosophy.map((item, i) => (
              <FadeUp key={item.number} delay={i * 0.08}>
                <div className={`p-8 md:p-10 border-ink/10
                  ${i % 2 === 0 ? 'md:border-r' : ''}
                  ${i < 2 ? 'md:border-b' : ''}
                `}>
                  <span className="text-2xs text-ink/25 font-medium uppercase tracking-widest
                                   block mb-4">
                    {item.number}
                  </span>
                  <h3 className="font-display text-2xl text-ink font-medium mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Career timeline */}
        <div className="bg-ink py-section">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <FadeUp>
              <div className="grid md:grid-cols-editorial gap-12 md:gap-20 mb-16">
                <div>
                  <p className="text-2xs uppercase tracking-widest text-white/25 font-medium">
                    Experience
                  </p>
                </div>
                <h2 className="font-display text-fluid-lg text-white font-medium leading-[1.15]">
                  11+ years across e-commerce, enterprise & industrial
                </h2>
              </div>
            </FadeUp>

            <div className="space-y-0 divide-y divide-white/8">
              {timeline.map((item, i) => (
                <FadeUp key={item.company + item.period} delay={i * 0.07}>
                  <div className="grid md:grid-cols-editorial gap-6 md:gap-20 py-10">

                    {/* Left — meta */}
                    <div className="md:pt-1">
                      <p className="text-xs text-white/30 font-medium uppercase tracking-wider mb-1">
                        {item.period}
                      </p>
                      <p className="text-xs text-white/20 uppercase tracking-wide">
                        {item.location}
                      </p>
                    </div>

                    {/* Right — content */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.accent }}
                        />
                        <p className="text-xs text-white/35 uppercase tracking-widest font-medium">
                          {item.company}
                        </p>
                      </div>
                      <h3 className="font-display text-2xl text-white font-medium mb-4">
                        {item.role}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed mb-5">
                        {item.summary}
                      </p>
                      <ul className="space-y-1.5">
                        {item.wins.map(win => (
                          <li key={win} className="flex items-start gap-3 text-sm text-white/35">
                            <span
                              className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: item.accent }}
                            />
                            {win}
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-section">
          <div className="grid md:grid-cols-2 gap-12 border-t border-ink/10 pt-section-sm">

            <FadeUp>
              <div>
                <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium mb-6">
                  Education
                </p>
                <h3 className="font-display text-2xl text-ink font-medium mb-2">
                  Bachelor of Art
                </h3>
                <p className="text-base text-ink/60 mb-1">The Art Institute of Phoenix</p>
                <p className="text-sm text-ink/35">2002 – 2005 · Phoenix, AZ</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div>
                <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium mb-6">
                  Contact
                </p>
                <a
                  href="mailto:c.kenreigh@gmail.com"
                  className="font-display text-2xl text-ink hover:text-warm transition-colors
                             block mb-2 hover-underline"
                >
                  c.kenreigh@gmail.com
                </a>
                <p className="text-sm text-ink/35 mb-4">480-206-2145 · Phoenix, AZ</p>
                <a
                  href="https://www.linkedin.com/in/kenreigh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest font-medium text-ink/40
                             hover:text-ink transition-colors hover-underline"
                >
                  LinkedIn ↗
                </a>
              </div>
            </FadeUp>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
