/**
 * DESIGN TOKENS — Christopher Kenreigh Portfolio
 * uxapex.com/director | github: tangiblethinking/Appprotoneov002
 *
 * HOW TO USE:
 *   This is the single source of truth for all visual styling.
 *   Change a value here → find every usage location in STYLE_GUIDE.pdf
 *   → go to that file/line in GitHub and update the matching value.
 *
 * All values below correspond directly to hardcoded values in the source files.
 */

const tokens = {

  // ─────────────────────────────────────────────
  // COLORS
  // ─────────────────────────────────────────────
  color: {

    // Brand / Accent
    accent:       '#3B82F6',   // Blue — primary CTA, active nav, metrics, hero accent word
    accentHover:  '#2563EB',   // Blue hover — darker shade on button/link hover
    accentMuted:  'rgba(59,130,246,0.75)', // Blue muted — status pill in hero

    // Backgrounds
    bgDark:       '#080808',   // Near-black — hero, nav overlay, CTA section, timeline
    bgCard:       '#1A1A1A',   // Card background — case study cards
    bgMetrics:    '#111111',   // Metrics bar background
    bgLight:      '#F4F1EA',   // Warm off-white — about teaser, capabilities, resume body
    bgChalk:      '#E8E4DB',   // Subtle light — (reserved, not currently active)

    // Text — on dark backgrounds
    textWhite:    '#FFFFFF',   // Pure white — primary headings on dark
    textBody:     'rgba(255,255,255,0.72)', // Nav links default
    textMuted:    'rgba(255,255,255,0.62)', // Body paragraphs on dark
    textSubtle:   'rgba(255,255,255,0.55)', // Secondary body, card outcomes
    textDim:      'rgba(255,255,255,0.45)', // Tertiary — hero sub-copy
    textLabel:    'rgba(255,255,255,0.40)', // Section labels on dark (ABOUT, SELECTED WORK)
    textFaint:    'rgba(255,255,255,0.38)', // Metric sub-labels
    textGhost:    'rgba(255,255,255,0.35)', // Footer links, footer email default
    textHint:     'rgba(255,255,255,0.28)', // Decorative only — not body copy

    // Text — on light (paper) backgrounds
    textDark:     '#080808',   // Primary text on light
    textDarkBody: 'rgba(8,8,8,0.72)',  // Body paragraphs on light (resume)
    textDarkMid:  'rgba(8,8,8,0.65)',  // Body paragraphs on light (home/about)
    textDarkSub:  'rgba(8,8,8,0.62)',  // Secondary body on light
    textDarkMuted:'rgba(8,8,8,0.55)',  // Muted on light — skills, bullets
    textDarkFaint:'rgba(8,8,8,0.48)',  // Faint on light — About teaser location
    textDarkLabel:'rgba(8,8,8,0.40)',  // Section labels on light (SUMMARY, EXPERIENCE)
    textDarkGhost:'rgba(8,8,8,0.38)',  // Lightest labels on light (CAPABILITIES label)

    // Secondary accents
    warm:         '#FF6B35',   // Orange — company links (resume), Full Profile hover, capabilities Build
    purple:       '#8B5CF6',   // Purple — case study 3 color, freelance timeline dot

    // Dividers / Borders
    dividerDark:  'rgba(255,255,255,0.09)',  // Horizontal rules on dark sections
    dividerLight: 'rgba(8,8,8,0.10)',        // Horizontal rules on light sections
    borderCard:   'rgba(255,255,255,0.09)',  // Case study card border default
    borderCardHover: 'rgba(59,130,246,0.45)', // Case study card border on hover
    borderNav:    'rgba(255,255,255,0.08)',   // Nav bottom border when scrolled
    borderButton: 'rgba(255,255,255,0.25)',   // Outline button border default
    borderModal:  'rgba(255,255,255,0.1)',    // Modal box border
    borderModalToolbar: 'rgba(255,255,255,0.08)', // Modal toolbar bottom border
  },

  // ─────────────────────────────────────────────
  // TYPOGRAPHY
  // ─────────────────────────────────────────────
  font: {

    // Font families
    display: '"Cormorant Garamond", Georgia, serif',  // All display/hero/section headings
    body:    '"DM Sans", Helvetica Neue, sans-serif', // All body copy, nav, labels, UI

    // Font sizes — fluid (clamp) for responsive
    sizeHero:       'clamp(2.4rem, 7vw, 8rem)',    // Hero headline
    sizeHeroAbout:  'clamp(2.8rem, 8vw, 7rem)',    // About page h1
    sizeDisplay:    'clamp(1.5rem, 4vw, 3.5rem)',  // Section h2 headlines
    sizeDisplayMd:  'clamp(1.4rem, 3vw, 2.5rem)',  // Timeline h2, resume h2
    sizeDisplaySm:  'clamp(1.3rem, 2.5vw, 2.2rem)',// Philosophy heading
    sizeMetric:     'clamp(1.6rem, 3vw, 2.5rem)',  // Metric counter numbers
    sizeCapVerb:    'clamp(2.2rem, 5vw, 4rem)',    // Lead/Build/Ship verbs
    sizeCardTitle:  'clamp(1.1rem, 2vw, 1.4rem)',  // Case study card titles
    sizeJobTitle:   'clamp(1.1rem, 2vw, 1.35rem)', // Resume/timeline job titles
    sizeBody:       '0.95rem',  // Standard body paragraph
    sizeBodyLg:     '1rem',     // Resume summary paragraph
    sizeBodySm:     '0.875rem', // Secondary body, bullets
    sizeLabel:      '0.7rem',   // Nav links, button text
    sizeLabelSm:    '0.65rem',  // Section labels, tags, small buttons
    sizeLabelXs:    '0.6rem',   // Micro labels (ABOUT, SUMMARY, EXPERIENCE)
    sizeTag:        '0.65rem',  // Case study tags
    sizeMicro:      '0.55rem',  // Scroll label

    // Font weights
    weightLight:    300,   // Hero sub-copy (about page intro)
    weightRegular:  400,   // Body text
    weightMedium:   500,   // All display/heading fonts, nav, labels, buttons

    // Line heights
    lineHero:       1.0,   // Hero headline (was 0.93, raised to prevent clipping)
    lineHeroAbout:  1.15,  // About h1 (raised to prevent name collision)
    lineDisplay:    1.05,  // Section headlines
    lineDisplayTight: 1.08,// CTA headline
    lineBody:       1.65,  // Standard body
    lineBodyRelaxed: 1.75, // About/resume body
    lineBodyLg:     1.7,   // Philosophy body
    lineMetric:     1.4,   // Metric labels
    lineTight:      1.2,   // Card titles, capability headlines
    lineTightest:   0.92,  // Hero line (was tighter)

    // Letter spacing
    trackingHero:   '-0.03em', // Hero headline
    trackingDisplay:'-0.025em',// Section headlines
    trackingTight:  '-0.02em', // Medium headlines
    trackingNormal: 'normal',  // Body
    trackingWide:   '0.08em',  // Tags, capability items
    trackingWider:  '0.12em',  // Footer links, small labels
    trackingWidest: '0.15em',  // Nav links, section labels
    trackingMax:    '0.2em',   // Hero name label
  },

  // ─────────────────────────────────────────────
  // SPACING
  // ─────────────────────────────────────────────
  spacing: {
    sectionPadding: 'clamp(3.5rem, 7vw, 6.5rem) clamp(1rem, 4vw, 2.5rem)',
    navHeight:      '64px',
    maxWidth:       '1400px',
  },

  // ─────────────────────────────────────────────
  // BORDERS & RADIUS
  // ─────────────────────────────────────────────
  border: {
    radiusCard:   '16px',    // Case study cards, modal
    radiusPill:   '9999px',  // All buttons, tags
    radiusModal:  '16px',    // Modal box
    radiusClose:  '50%',     // Modal close button
  },

  // ─────────────────────────────────────────────
  // MOTION
  // ─────────────────────────────────────────────
  motion: {
    easeExpo:     [0.16, 1, 0.3, 1],  // Primary ease — all hero and card animations
    durationFast: '0.2s',   // Color transitions (hover)
    durationMid:  '0.25s',  // Button hover transitions
    durationSlow: '0.4s',   // Nav background transition
    delayScroll:  1.4,      // Scroll indicator fade-in delay
  },

}

export default tokens
