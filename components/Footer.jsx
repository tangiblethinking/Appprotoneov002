import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12
                      flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left */}
        <div>
          <p className="font-display text-2xl text-white mb-1">Christopher Kenreigh</p>
          <p className="text-xs text-mist uppercase tracking-widest">Director of UX & Product Design</p>
        </div>

        {/* Center links */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          {[
            ['Work',      '/work'],
            ['About',     '/about'],
            ['Resume',    '/resume'],
            ['LinkedIn',  'https://www.linkedin.com/in/kenreigh/'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs uppercase tracking-widest text-mist hover:text-accent transition-colors hover-underline"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="text-right">
          <a
            href="mailto:c.kenreigh@gmail.com"
            className="text-sm text-white/60 hover:text-accent transition-colors block mb-1"
          >
            c.kenreigh@gmail.com
          </a>
          <p className="text-2xs text-mist/50 uppercase tracking-wider">
            Phoenix, AZ · © {year}
          </p>
        </div>

      </div>
    </footer>
  )
}
