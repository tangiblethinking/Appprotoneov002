import { FadeUp, Stagger, StaggerItem } from './Motion'

const capabilities = [
  {
    verb:   'Lead',
    accent: '#C8FF00',
    headline: 'I grow design organizations.',
    body: `I build the team infrastructure that makes great design scalable — recruiting, mentoring, structuring critique, and creating a culture where designers do their best work. At Plexus, I led 5 designers across UX, content, and interaction with direct ownership of their growth, allocation, and output quality.`,
    items: ['Team structure & hiring', 'Design critique systems', '1:1 development & coaching', 'Cross-functional alignment', 'Design maturity roadmaps'],
  },
  {
    verb:   'Build',
    accent: '#FF6B35',
    headline: 'I architect systems, not screens.',
    body: `Design systems, tooling ecosystems, process frameworks, research repositories — I build the infrastructure that lets teams move fast without fragmenting. I consolidated 6 tools into one unified platform, established a token-based design system across web and mobile, and introduced AI-augmented workflows that increased delivery velocity by 35%.`,
    items: ['Design systems architecture', 'Design operations frameworks', 'AI-augmented workflows', 'Coded prototypes & tokens', 'Component library governance'],
  },
  {
    verb:   'Ship',
    accent: '#8B5CF6',
    headline: 'I translate strategy into outcomes.',
    body: `From product vision to production code, I own the full end-to-end — user research, journey mapping, stakeholder alignment, A/B testing, and post-launch optimization. I speak in the language of business: retention, conversion, abandonment, and revenue — and I build UX roadmaps that executives actually approve.`,
    items: ['UX strategy & roadmapping', 'e-Commerce optimization', 'Stakeholder presentations', 'Usability & A/B testing', 'Multi-region product launches'],
  },
]

export function CapabilitiesSection() {
  return (
    <section className="bg-paper py-section border-t border-ink/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        <FadeUp>
          <div className="flex items-center justify-between mb-14">
            <div>
              <p className="text-2xs uppercase tracking-widest text-ink/35 font-medium mb-3">
                Capabilities
              </p>
              <h2 className="font-display text-fluid-xl text-ink font-medium">
                What I do for companies
              </h2>
            </div>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-thirds gap-0 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {capabilities.map((cap, i) => (
            <FadeUp key={cap.verb} delay={i * 0.1} className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0">

              {/* Verb */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-display text-5xl font-medium leading-none"
                  style={{ color: cap.accent }}
                >
                  {cap.verb}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-xl text-ink font-medium leading-snug mb-4">
                {cap.headline}
              </h3>

              {/* Body */}
              <p className="text-sm text-ink/60 leading-relaxed mb-8">
                {cap.body}
              </p>

              {/* Item list */}
              <ul className="space-y-2.5">
                {cap.items.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cap.accent }}
                    />
                    <span className="text-xs text-ink/55 font-medium uppercase tracking-wide">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
