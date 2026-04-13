import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]
const BLUE = '#3B82F6'

/* ── Modal ── */
function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: expo }}
      >
        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Content */}
        <div style={{ padding: '2rem', paddingTop: '1rem' }}>
          {/* Label row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, marginTop: '0.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: study.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
              {study.company} · {study.year}
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 500, lineHeight: 1.15,
            color: 'white', marginBottom: '1.25rem',
          }}>
            {study.title}
          </h2>

          {/* Outcome */}
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {study.outcome}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '2rem' }}>
            {study.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>

          {/* Divider */}
          <hr className="divider-dark" style={{ marginBottom: '1.5rem' }} />

          {/* CTA */}
          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 500,
              color: '#080808', background: BLUE,
              borderRadius: 9999, padding: '0.8rem 1.75rem', textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#2563EB'}
            onMouseLeave={e => e.currentTarget.style.background = BLUE}
          >
            Open Full Case Study ↗
          </a>
        </div>
      </motion.div>
    </div>
  )
}

/* ── Card ── */
export function CaseStudyCard({ study, index = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, delay: index * 0.12, ease: expo }}
        style={{ display: 'flex', height: '100%' }}
      >
        {/* Card is a button — opens modal, not external link */}
        <button
          onClick={() => setOpen(true)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 16,
            overflow: 'hidden',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'border-color 0.3s, transform 0.3s',
            position: 'relative',
            textAlign: 'left',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.45)'
            e.currentTarget.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {/* Top bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '1.25rem 1.5rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
              {study.index}
            </span>
            <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>
              ↗ View Case Study
            </span>
          </div>

          {/* Body — flex:1 so all cards stretch to same height */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: study.color, flexShrink: 0 }} />
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                {study.company} · {study.year}
              </span>
            </div>

            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 500, lineHeight: 1.2,
              color: 'white', margin: '0 0 0.875rem',
            }}>
              {study.title}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.65)',  /* AA: 5.4:1 on #1A1A1A */
              lineHeight: 1.65,
              margin: '0 0 1.25rem',
              flex: 1,                           /* pushes tags to bottom */
            }}>
              {study.outcome}
            </p>

            {/* Tags pinned to bottom */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {study.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>

          {/* Color accent bottom bar */}
          <div style={{
            height: 2,
            background: study.color,
            flexShrink: 0,
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
          ref={el => {
            if (!el) return
            const card = el.closest('button')
            card.addEventListener('mouseenter', () => el.style.transform = 'scaleX(1)')
            card.addEventListener('mouseleave', () => el.style.transform = 'scaleX(0)')
          }}
          />
        </button>
      </motion.div>

      {open && <CaseStudyModal study={study} onClose={() => setOpen(false)} />}
    </>
  )
}
