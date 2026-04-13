import { FadeUp } from './Motion'

export function CTASection() {
  return (
    <section className="bg-ink py-section border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-editorial gap-12 md:gap-20 items-center">

          {/* Left label */}
          <FadeUp>
            <div>
              <p className="text-2xs uppercase tracking-widest text-white/25 font-medium mb-4">
                Let's talk
              </p>
              <div className="w-8 h-px bg-white/15" />
            </div>
          </FadeUp>

          {/* Right — big CTA */}
          <FadeUp delay={0.1}>
            <div>
              <h2 className="font-display text-fluid-xl text-white font-medium leading-[1.08] mb-8">
                If your company needs design to{' '}
                <em className="text-accent not-italic">grow up</em>,
                let's find out if I'm the right person to lead that.
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:c.kenreigh@gmail.com"
                  className="group inline-flex items-center gap-3 bg-accent text-ink
                             text-xs uppercase tracking-widest font-medium
                             px-8 py-4 rounded-full
                             hover:bg-white transition-colors duration-300"
                >
                  c.kenreigh@gmail.com
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kenreigh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest
                             font-medium text-white/50 border border-white/15 rounded-full
                             px-8 py-4 hover:border-white/40 hover:text-white
                             transition-all duration-300"
                >
                  LinkedIn ↗
                </a>
              </div>

              <p className="text-xs text-white/25 mt-6 font-medium uppercase tracking-wider">
                480-206-2145 · Phoenix, AZ · Open to Remote, Hybrid, or Relocation
              </p>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
