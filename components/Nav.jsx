'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Work',   href: '/work' },
  { label: 'About',  href: '/about' },
  { label: 'Resume', href: '/resume' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isLight = pathname === '/about' || pathname === '/resume'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? 'bg-ink/90 backdrop-blur-lg border-b border-white/5'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-medium tracking-tight text-white hover:text-accent transition-colors duration-200"
          >
            CK
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors duration-200
                  hover-underline
                  ${pathname === href ? 'text-accent' : 'text-white/50 hover:text-white'}`}
              >
                {label}
              </Link>
            ))}

            <a
              href="mailto:c.kenreigh@gmail.com"
              className="text-xs uppercase tracking-widest font-medium px-5 py-2.5
                         border border-white/20 rounded-full
                         text-white/70 hover:text-accent hover:border-accent
                         transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-center px-8 transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              className={`font-display text-fluid-xl text-white hover:text-accent transition-colors
                          ${menuOpen ? 'animate-fade-up' : ''}`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:c.kenreigh@gmail.com"
            className="font-display text-fluid-xl text-mist hover:text-accent transition-colors"
            style={{ animationDelay: '280ms', animationFillMode: 'both' }}
          >
            Contact
          </a>
        </div>

        <div className="absolute bottom-12 left-8 text-xs text-white/20 uppercase tracking-widest">
          Christopher Kenreigh © 2025
        </div>
      </div>
    </>
  )
}
