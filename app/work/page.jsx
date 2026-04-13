import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { CaseStudyCard } from '../../components/CaseStudyCard'
import { Cursor } from '../../components/Cursor'
import { caseStudies } from '../../lib/caseStudies'
import { FadeUp } from '../../components/Motion'

export const metadata = {
  title: 'Work — Christopher Kenreigh',
  description: 'Case studies in design leadership, e-commerce UX, design operations, and organizational transformation.',
}

export default function WorkPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="bg-ink min-h-screen">

        {/* Page header */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-16
                        border-b border-white/8">
          <FadeUp>
            <p className="text-2xs uppercase tracking-widest text-white/30 font-medium mb-4">
              Selected Work
            </p>
            <h1 className="font-display text-fluid-hero text-white font-medium leading-[0.92] mb-8">
              Case Studies
            </h1>
            <p className="text-base text-white/45 max-w-xl leading-relaxed">
              Three studies in design leadership — each documenting the organizational
              problem, strategic approach, and measurable business outcome.
            </p>
          </FadeUp>
        </div>

        {/* Case studies — full width ruled list on large screens */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16">

          {/* Grid layout for cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} variant="dark" />
            ))}
          </div>

          {/* More work note */}
          <FadeUp delay={0.3}>
            <div className="border-t border-white/8 pt-16 grid md:grid-cols-editorial gap-10">
              <div>
                <p className="text-2xs uppercase tracking-widest text-white/25 font-medium">
                  Additional Work
                </p>
              </div>
              <div>
                <p className="text-sm text-white/45 leading-relaxed mb-6 max-w-prose">
                  Additional case studies from Freeport-McMoRan (mining digital tools), 
                  OpenTech Alliance (self-storage POS redesign), Siemens (industrial UI),
                  and Glynlyon (education platform) are available upon request. 
                  Most involve NDA-protected interfaces — redacted versions available for 
                  qualified Director/Manager-level discussions.
                </p>
                <a
                  href="mailto:c.kenreigh@gmail.com?subject=Additional Case Study Request"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest
                             font-medium text-white/40 hover:text-accent transition-colors
                             hover-underline"
                >
                  Request Additional Work →
                </a>
              </div>
            </div>
          </FadeUp>

        </div>
      </main>
      <Footer />
    </>
  )
}
