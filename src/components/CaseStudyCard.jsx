import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const expo = [0.16, 1, 0.3, 1]

/* ── Modal with iframe loading the actual case study URL ── */
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
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 1.5rem)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: expo }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1200,
          height: '90vh',
          background: '#111',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          style={{
            position: 'absolute', top: 12, right: 12, zIndex: 10,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.7)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white', fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.95)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.7)'}
        >
          ✕
        </button>

        {/* The actual case study loaded in iframe */}
        <iframe
          src={study.href}
          title={study.title}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            borderRadius: 16,
          }}
          allow="fullscreen"
        />
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
        <button
          onClick={() => setOpen(true)}
          style={{
            display: 'flex', flexDirection: 'column',
            width: '100%',
            background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 16,
            overflow: 'hidden',
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
              View Case Study
            </span>
          </div>

          {/* Body */}
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
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65,
              margin: '0 0 1.25rem',
              flex: 1,
            }}>
              {study.outcome}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {study.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Color accent bottom bar */}
          <div
            style={{
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
