import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Christopher Kenreigh — Director of UX & Product Design',
  description:
    'Design executive with 11+ years leading end-to-end digital product experiences across e-commerce, industrial, and enterprise environments. Available for Director of UX and Design Director roles.',
  keywords: [
    'Director of UX',
    'Design Director',
    'UX Leadership',
    'Product Design',
    'Design Systems',
    'e-Commerce UX',
    'Christopher Kenreigh',
  ],
  authors: [{ name: 'Christopher Kenreigh' }],
  openGraph: {
    title: 'Christopher Kenreigh — Director of UX & Product Design',
    description:
      'Design executive building organizations that turn complexity into clarity.',
    url: 'https://www.uxapex.com',
    siteName: 'UX Apex',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Kenreigh — Director of UX & Product Design',
    description: 'Design executive building organizations that turn complexity into clarity.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-ink text-white antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  )
}
