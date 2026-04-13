import Link from 'next/link'
import { FadeUp, SlideIn } from './Motion'

export function AboutTeaser() {
  return (
    <section className="bg-paper py-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Editorial grid: label left, content right */}
        <div className="grid md:grid-cols-editorial gap-12 md:gap-20 items-start">

          {/* Left — section label */}
          <SlideIn>
            <div className="md:sticky md:top-28">
              <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium mb-4">
                About
              </p>
              <div className="w-8 h-px bg-ink/20 mb-8" />
              <p className="text-xs text-ink/40 leading-relaxed">
                Phoenix, AZ · Available Nationwide (Remote / Hybrid / Relocation)
              </p>
            </div>
          </SlideIn>

          {/* Right — content */}
          <div>
            <FadeUp>
              <h2 className="font-display text-fluid-xl text-ink font-medium leading-[1.1] mb-10">
                A design executive who measures success in{' '}
                <em className="text-warm not-italic">business outcomes</em>,
                not deliverables.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-base text-ink/65 leading-relaxed mb-6 max-w-prose">
                I've spent 11+ years translating complex problems into intuitive digital experiences —
                across e-commerce platforms, enterprise tools, and industrial applications.
                At Plexus Worldwide, I lead a 5-person design org responsible for US and
                3 international markets, where I've cut checkout abandonment by 43%,
                launched a unified design system, and restructured our entire workflow
                around AI-augmented tooling.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="text-base text-ink/65 leading-relaxed mb-6 max-w-prose">
                But my real value isn't the pixels. It's the practice I build around them —
                the design operations, the critique culture, the cross-functional trust,
                and the systems that let teams move with both speed and conviction.
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p className="text-base text-ink/65 leading-relaxed mb-12 max-w-prose">
                I'm drawn to companies that sense they need design to grow up — where
                "UX maturity" is still an aspiration, not a given. That's where I do
                my best work.
              </p>
            </FadeUp>

            <FadeUp delay={0.34}>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest
                             font-medium text-ink border border-ink/20 rounded-full px-6 py-3
                             hover:border-ink hover:bg-ink hover:text-white transition-all duration-300"
                >
                  Full Profile
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
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

      </div>
    </section>
  )
}
