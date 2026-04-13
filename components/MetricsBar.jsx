'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const expo = [0.16, 1, 0.3, 1]

function AnimatedNumber({ target, suffix = '', duration = 1800 }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const isFloat = String(target).includes('.')
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = eased * target
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return <span ref={ref}>{display}{suffix}</span>
}

const metrics = [
  { value: 43,  suffix: '%', label: 'Checkout abandonment reduced',   context: 'Plexus Worldwide' },
  { value: 60,  suffix: '%', label: 'Tool consolidation efficiency',   context: 'Design Ops · 6→1' },
  { value: 35,  suffix: '%', label: 'Sprint velocity increase',        context: 'AI-augmented workflows' },
  { value: 11,  suffix: '+', label: 'Years in product design',         context: 'e-Com · Enterprise · Industrial' },
  { value: 5,   suffix: '',  label: 'Designers led',                   context: 'Direct reports · Plexus' },
]

export function MetricsBar() {
  return (
    <section className="bg-zinc border-y border-white/8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-0">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: expo }}
              className={`px-6 py-8 ${i < 2 && 'border-b border-white/8 md:border-b-0'}`}
            >
              <p className="font-display font-medium text-4xl text-accent mb-2 leading-none">
                <AnimatedNumber target={m.value} suffix={m.suffix} />
              </p>
              <p className="text-xs text-white/50 leading-snug mb-1">{m.label}</p>
              <p className="text-2xs text-white/25 uppercase tracking-wider">{m.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
