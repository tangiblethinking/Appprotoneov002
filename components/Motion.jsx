'use client'
import { motion } from 'framer-motion'

/* ── Shared easing ── */
const expo = [0.16, 1, 0.3, 1]

/* ── Fade + slide up on scroll ── */
export function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: expo }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Fade in on scroll ── */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Slide in from left ── */
export function SlideIn({
  children,
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: expo }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger children ── */
export function Stagger({ children, className = '', staggerDelay = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden:  {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Stagger child item ── */
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Counter number animation ── */
export function CountUp({ value, suffix = '', duration = 1.5 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration }}
      >
        {value}{suffix}
      </motion.span>
    </motion.span>
  )
}
