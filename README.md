# Christopher Kenreigh — Portfolio
**uxapex.com/director** · Director of UX & Product Design

Built with Vite + React + Tailwind CSS + Framer Motion

---

## Setup

```bash
npm install
npm run dev
# Opens at http://localhost:5173/director
```

## Build & Deploy

```bash
npm run build
# Output goes to /dist folder
# Push to GitHub → Vercel auto-deploys
```

## Change the URL handle

Two files, two edits:

1. `vite.config.js` → change `base: '/director'` to `base: '/newhandle'`
2. `src/main.jsx` → change `basename="/director"` to `basename="/newhandle"`

Then update your router repo's `vercel.json` to match.

---

## Key Files to Edit

| File | What to change |
|------|---------------|
| `src/lib/caseStudies.js` | Case study titles, outcomes, URLs, tags |
| `src/pages/Home.jsx` | Hero headline, metrics, about teaser copy |
| `src/pages/About.jsx` | Philosophy text, career timeline |
| `src/pages/Resume.jsx` | Experience bullets, skills |
| `vite.config.js` | URL handle (`base`) |
| `src/main.jsx` | URL handle (`basename`) |
| `public/resume.pdf` | Add your actual PDF here |

## Add your resume PDF

Place your PDF at `public/resume.pdf` — the download button on the Resume page links to it automatically.
