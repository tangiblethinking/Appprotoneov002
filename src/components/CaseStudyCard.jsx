import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]

export function CaseStudyCard({ study, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: expo }}
    >
      <a
        href={study.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          background: '#1A1A1A',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          overflow: 'hidden',
          textDecoration: 'none',
          transition: 'border-color 0.3s, transform 0.3s',
          position: 'relative',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Top bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          padding: '1.5rem 2rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
            {study.index}
          </span>
          <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)' }}>
            ↗ View Case Study
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: study.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
              {study.company} · {study.year}
            </span>
          </div>

          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 500, lineHeight: 1.2,
            color: 'white', margin: '0 0 1rem',
          }}>
            {study.title}
          </h3>

          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 1.5rem' }}>
            {study.outcome}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {study.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Color accent bottom bar */}
        <div style={{
          height: 2, width: '0%', background: study.color,
          transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)',
        }}
        ref={el => {
          if (!el) return
          const card = el.closest('a')
          card.addEventListener('mouseenter', () => el.style.width = '100%')
          card.addEventListener('mouseleave', () => el.style.width = '0%')
        }}
        />
      </a>
    </motion.div>
  )
}
