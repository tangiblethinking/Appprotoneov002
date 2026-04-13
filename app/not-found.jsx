import Link from 'next/link'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="bg-ink min-h-screen flex flex-col items-center justify-center
                       px-6 text-center">
        <p className="font-display text-[12rem] font-medium text-white/5 leading-none
                      select-none mb-0">
          404
        </p>
        <h1 className="font-display text-4xl text-white font-medium -mt-8 mb-4">
          Page not found
        </h1>
        <p className="text-sm text-white/40 mb-10 max-w-sm">
          That page doesn't exist. Head back home or view the work.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-widest font-medium text-ink
                       bg-accent rounded-full px-6 py-3 hover:bg-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work"
            className="text-xs uppercase tracking-widest font-medium text-white/50
                       border border-white/20 rounded-full px-6 py-3
                       hover:border-white/50 hover:text-white transition-all"
          >
            View Work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
