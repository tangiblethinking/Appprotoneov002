import { useEffect, useRef } from 'react'

export function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }
    const grow   = () => el.classList.add('large')
    const shrink = () => el.classList.remove('large')

    window.addEventListener('mousemove', move)

    const targets = document.querySelectorAll('a, button')
    targets.forEach(t => {
      t.addEventListener('mouseenter', grow)
      t.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach(t => {
        t.removeEventListener('mouseenter', grow)
        t.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
