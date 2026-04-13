'use client'
import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]

export function CaseStudyCard({ study, index = 0, variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: expo }}
    >
      <a
        href={study.href}
        target={study.external ? '_blank' : undefined}
        rel={study.external ? 'noopener noreferrer' : undefined}
        className={`group relative block rounded-2xl overflow-hidden
          transition-all duration-500 hover:-translate-y-1
          ${isDark
            ? 'bg-zinc border border-white/8 hover:border-white/20'
            : 'bg-chalk border border-ink/8 hover:border-ink/20'
          }`}
        data-cursor-hover
      >
        {/* Index + external badge */}
        <div className={`flex justify-between items-start px-8 pt-8 pb-6
          border-b ${isDark ? 'border-white/8' : 'border-ink/8'}`}
        >
          <span className={`text-2xs uppercase tracking-widest font-medium
            ${isDark ? 'text-white/25' : 'text-ink/25'}`}>
            {study.index}
          </span>
          {study.external && (
            <span className={`text-2xs uppercase tracking-widest
              ${isDark ? 'text-white/25' : 'text-ink/25'}`}>
              ↗ External
            </span>
          )}
        </div>

        {/* Main content */}
        <div className="px-8 py-8">
          {/* Company + year */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: study.color }}
            />
            <span className={`text-xs uppercase tracking-widest font-medium
              ${isDark ? 'text-white/40' : 'text-ink/40'}`}>
              {study.company} · {study.year}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-display font-medium text-fluid-lg mb-6 leading-[1.15]
            group-hover:text-accent transition-colors duration-300
            ${isDark ? 'text-white' : 'text-ink'}`}>
            {study.title}
          </h3>

          {/* Outcome */}
          <p className={`text-sm leading-relaxed mb-8 max-w-prose
            ${isDark ? 'text-white/55' : 'text-ink/55'}`}>
            {study.outcome}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map(tag => (
              <span
                key={tag}
                className={`text-2xs uppercase tracking-wider font-medium
                  px-3 py-1.5 rounded-full border
                  ${isDark
                    ? 'border-white/12 text-white/40'
                    : 'border-ink/12 text-ink/40'
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar — colored accent on hover */}
        <div
          className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-expo"
          style={{ backgroundColor: study.color }}
        />
      </a>
    </motion.div>
  )
}
