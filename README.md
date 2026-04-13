# Christopher Kenreigh — Portfolio Site
**uxapex.com** · Director of UX & Product Design

Built with Next.js 14 (App Router) · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open http://localhost:3000
```

---

## Deploy to Vercel (Recommended)

```bash
# Option A — Vercel CLI
npm install -g vercel
vercel

# Option B — GitHub integration
# Push this repo to GitHub, then connect at vercel.com/new
# Vercel auto-detects Next.js — no config needed
```

**Point your domain:** In Vercel Dashboard → Project → Settings → Domains → Add `uxapex.com`

---

## Project Structure

```
uxapex/
├── app/
│   ├── layout.jsx          ← Root layout, fonts, metadata
│   ├── globals.css         ← Global styles, CSS custom properties
│   ├── page.jsx            ← Homepage (imports all sections)
│   ├── not-found.jsx       ← 404 page
│   ├── about/
│   │   └── page.jsx        ← Full about / leadership narrative
│   ├── work/
│   │   └── page.jsx        ← Case studies index
│   └── resume/
│       └── page.jsx        ← Inline resume + PDF download
├── components/
│   ├── Nav.jsx             ← Fixed navigation, mobile menu
│   ├── Footer.jsx          ← Footer with links
│   ├── Cursor.jsx          ← Custom accent cursor
│   ├── Motion.jsx          ← Framer Motion animation wrappers
│   ├── HeroSection.jsx     ← Homepage hero with staggered headline
│   ├── MetricsBar.jsx      ← Animated impact numbers strip
│   ├── AboutTeaser.jsx     ← Editorial two-column about section
│   ├── WorkPreview.jsx     ← 3 case study cards on homepage
│   ├── CaseStudyCard.jsx   ← Reusable case study card component
│   ├── CapabilitiesSection.jsx ← Lead/Build/Ship three-column section
│   ├── CTASection.jsx      ← Final homepage CTA
│   └── (more to add)
├── lib/
│   └── caseStudies.js      ← ★ EDIT THIS — all case study data lives here
├── public/
│   └── resume.pdf          ← ★ ADD THIS — your actual PDF resume
├── tailwind.config.js      ← Design tokens, color system, typography scale
├── next.config.js          ← Static export config
└── vercel.json             ← Vercel deployment config
```

---

## ★ Things You MUST Customize

### 1. Add your resume PDF
Place your PDF at:
```
public/resume.pdf
```
The Resume page's "Download PDF" button links to `/resume.pdf` automatically.

### 2. Update case study data (`lib/caseStudies.js`)
Each entry in the array controls a case study card:
```js
{
  title:       'Your case study title',
  company:     'Company Name',
  year:        '2024',
  outcome:     'One sentence describing the business result.',
  tags:        ['Tag 1', 'Tag 2'],
  href:        'https://your-case-study.vercel.app/',
  external:    true,   // opens in new tab
}
```

### 3. Add a professional photo (optional)
If you want a photo on the About page, add:
```
public/christopher.jpg
```
Then in `app/about/page.jsx`, add an `<Image>` component in the hero section.

### 4. Update contact info
Search the project for `c.kenreigh@gmail.com` and `480-206-2145` to update if needed.

### 5. Customize colors
In `tailwind.config.js`, the accent color is `#C8FF00` (electric lime).
To change it, find `accent: '#C8FF00'` and replace with your preferred color.

---

## Design System

### Color Palette
| Token     | Hex       | Usage                              |
|-----------|-----------|-------------------------------------|
| `ink`     | `#080808` | Primary dark background             |
| `paper`   | `#F4F1EA` | Light section backgrounds           |
| `chalk`   | `#E8E4DB` | Subtle light backgrounds            |
| `zinc`    | `#1A1A1A` | Cards on dark backgrounds           |
| `mist`    | `#8A8880` | Muted/secondary text                |
| `accent`  | `#C8FF00` | Electric lime — all CTAs & emphasis |
| `warm`    | `#FF6B35` | Secondary accent — links on light   |

### Typography
- **Display font:** Cormorant Garamond (Google Fonts) — all `font-serif` or `font-display` classes
- **Body font:** DM Sans (Google Fonts) — all `font-sans` classes
- **Fluid scale:** Use `.text-fluid-hero`, `.text-fluid-xl`, `.text-fluid-lg` for responsive headlines

### Animation System
Import from `components/Motion.jsx`:
```jsx
import { FadeUp, FadeIn, SlideIn, Stagger, StaggerItem } from '../components/Motion'

// Fade up on scroll (most common)
<FadeUp delay={0.1}>content</FadeUp>

// Stagger a list of items
<Stagger>
  <StaggerItem>item 1</StaggerItem>
  <StaggerItem>item 2</StaggerItem>
</Stagger>
```

---

## Adding New Pages

```jsx
// app/new-page/page.jsx
import { Nav } from '../../components/Nav'
import { Footer } from '../../components/Footer'
import { Cursor } from '../../components/Cursor'

export const metadata = {
  title: 'Page Title — Christopher Kenreigh',
}

export default function NewPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="bg-ink min-h-screen">
        {/* Your content */}
      </main>
      <Footer />
    </>
  )
}
```

---

## Common Customizations

### Change the hero headline
In `components/HeroSection.jsx`, find and edit the three `<motion.h1>` elements.

### Add a new case study card
In `lib/caseStudies.js`, add a new object to the `caseStudies` array.

### Disable the custom cursor
In each page's `page.jsx`, remove `<Cursor />` and delete `body { cursor: none; }` from `globals.css`.

### Change the accent color
1. In `tailwind.config.js`: `accent: '#YOUR_COLOR'`
2. In `globals.css`: `--accent: #YOUR_COLOR`

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.3 | Framework + routing |
| React | 18 | UI library |
| Tailwind CSS | 3.4 | Styling + design tokens |
| Framer Motion | 11 | Scroll animations + transitions |
| Vercel | — | Hosting |
| Google Fonts | — | Cormorant Garamond + DM Sans |

---

## Performance Notes

- Static export (`output: 'export'`) = CDN-cacheable, zero server costs on Vercel
- Google Fonts loaded via `next/font` = no layout shift, self-hosted at build time
- All animations use `whileInView` with `once: true` = no re-triggering on scroll back
- Images should be optimized as WebP before adding to `/public/`

---

*Built for Christopher Kenreigh — Director of UX & Product Design · uxapex.com*
