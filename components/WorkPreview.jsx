import Link from 'next/link'
import { CaseStudyCard } from './CaseStudyCard'
import { caseStudies } from '../lib/caseStudies'
import { FadeUp } from './Motion'

export function WorkPreview() {
  return (
    <section className="bg-ink py-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <FadeUp>
            <div>
              <p className="text-2xs uppercase tracking-widest text-white/30 font-medium mb-3">
                Selected Work
              </p>
              <h2 className="font-display text-fluid-xl text-white font-medium leading-tight">
                Case Studies
              </h2>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase
                         tracking-widest font-medium text-white/40 hover:text-accent
                         transition-colors hover-underline"
            >
              All Work →
            </Link>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} variant="dark" />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/work"
            className="text-xs uppercase tracking-widest font-medium text-white/40
                       hover:text-accent transition-colors"
          >
            View All Work →
          </Link>
        </div>

      </div>
    </section>
  )
}
