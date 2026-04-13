'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const expo = [0.16, 1, 0.3, 1]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-ink noise overflow-hidden
                        flex flex-col justify-end px-6 md:px-12 lg:px-20
                        pb-20 pt-32">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top label row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-24 left-6 md:left-12 lg:left-20
                   flex items-center gap-4"
      >
        <span className="text-2xs uppercase tracking-widest text-white/30 font-medium">
          Portfolio · 2025
        </span>
        <span className="block w-8 h-px bg-white/20" />
        <span className="text-2xs uppercase tracking-widest text-accent/60 font-medium">
          Available for Director Roles
        </span>
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 max-w-[1400px] w-full">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: expo }}
          className="text-xs uppercase tracking-[0.2em] text-white/35 font-medium mb-6"
        >
          Christopher Kenreigh
        </motion.p>

        {/* Display headline — split for stagger */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, delay: 0.45, ease: expo }}
            className="font-display font-medium text-white text-fluid-hero leading-[0.92]"
          >
            I build design
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, delay: 0.55, ease: expo }}
            className="font-display font-medium text-fluid-hero leading-[0.92]"
          >
            <em className="text-accent not-italic">organizations</em>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, delay: 0.65, ease: expo }}
            className="font-display font-medium text-white/40 text-fluid-hero leading-[0.92]"
          >
            that turn complexity
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.85, delay: 0.72, ease: expo }}
            className="font-display font-medium text-white/40 text-fluid-hero leading-[0.92]"
          >
            into clarity.
          </motion.h1>
        </div>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: expo }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mt-12"
        >
          <p className="text-sm text-white/45 max-w-md leading-relaxed">
            Director of UX & Product Design · 11+ years building
            digital product experiences across e-commerce, enterprise, and industrial environments.
          </p>

          <div className="flex gap-4 sm:ml-auto">
            <Link
              href="/work"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest
                         font-medium text-white border border-white/20 rounded-full
                         px-6 py-3 hover:border-accent hover:text-accent
                         transition-all duration-300"
            >
              View Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <a
              href="mailto:c.kenreigh@gmail.com"
              className="text-xs uppercase tracking-widest font-medium
                         text-ink bg-accent rounded-full px-6 py-3
                         hover:bg-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="text-2xs uppercase tracking-widest text-white/20">Scroll</span>
        <div className="w-px h-10 bg-white/10 relative overflow-hidden">
          <div className="w-full h-1/3 bg-accent/60 scroll-dot absolute top-0" />
        </div>
      </motion.div>

    </section>
  )
}
