# Portfolio v2.1 Design Spec

**Date:** 2026-08-20
**Status:** Approved — ready for implementation planning

---

## Summary

Eight independent improvements to the existing portfolio SPA: design system foundation, hero profile photo, mobile bottom tab bar, contact form restoration, case study modal redesign, color palette evolution, data/content updates, and favicon + tab title.

---

## 1. Design System Foundation

### Problem
Every component uses hardcoded hex values (`bg-[#F4EFEA]`, `text-[#C25E3E]`, `text-[#19191C]`). The Tailwind config has standard shadcn semantic tokens but they point to the default blue palette in `index.css`. No single source of truth for brand colors.

### Approach
- Rewrite CSS variables in `src/index.css` to define the actual brand palette with custom semantic tokens:
  - `--brand-warm` — main beige background
  - `--brand-cream` — card/surface background
  - `--brand-terra` — terracotta accent (buttons, highlights, links)
  - `--brand-ink` — near-black for headings
  - `--brand-muted` — warm gray for body text
  - `--brand-border` — subtle warm border
- Register these as Tailwind custom colors in `tailwind.config.js` under `brand.*`
- Replace ALL hardcoded hex values across every component with token classes (`bg-brand-warm`, `text-brand-terra`, `text-brand-ink`, etc.)
- Keep `.dark` class variables in sync (dark mode tokens)

### Palette Evolution
Push the warm palette slightly deeper — keep the warmth but add more contrast:
- Base background: slightly warmer/darker than current `#F4EFEA`
- Card/surface: more visually distinct from background
- Accent terracotta: slightly richer/more saturated
- Headings: true near-black
- Body text: warmer gray, not cold

### Files
- `src/index.css` — CSS variable rewrites
- `tailwind.config.js` — add `brand` color tokens
- All files in `src/components/` — replace hardcoded hex with tokens

---

## 2. Hero Profile Photo

### Current
"WC" initials in an 80x80 circle with terracotta accent (`Hero.tsx:16`).

### Approach
- Replace the initials `<div>` with an `<img>` tag importing `src/assets/IMG_3406.jpg`
- Keep the 80x80 circle layout with `object-cover rounded-full`
- Add brand accent ring or shadow for visual pop
- Remove the text initials completely

### Files
- `src/components/Hero.tsx`

---

## 3. Mobile Bottom Tab Bar

### Current
`PanelLeft` hamburger icon → `Sheet` slide-out navigation from left side (`Layout.tsx:43-70`). Uses Radix Sheet primitive.

### Approach
- Remove the `Sheet` / `PanelLeft` hamburger on mobile entirely
- Add a fixed bottom tab bar visible only on mobile (`sm:hidden`) with 3-4 key sections:
  - Story, Toolkit, Connect + locale toggle (EN/ES)
- Use `react-scroll` `Link` components (same as desktop nav)
- Style with brand colors: fixed bottom, semi-transparent or solid brand background, active state highlighted with brand accent
- Keep desktop centered horizontal nav as-is
- Tab bar should have safe-area-inset padding for iPhone notch

### Files
- `src/components/Layout.tsx`
- `src/index.css` — safe-area padding if needed

---

## 4. Contact Form Restoration

### Current
Email link, location pin, social links only. No form (`Contact.tsx`).

### Historical Reference
Old form used Formspree (`xlezzzro`) with fields: first name, last name, email, message, submit button.

### Approach
- Restore the Formspree form with the same endpoint
- Fields: name, email, message + submit button
- Style with brand design system tokens
- Keep email/location/social links below as secondary options
- Add basic validation (required fields, email format)

### Files
- `src/components/Contact.tsx`

---

## 5. Case Study Modal Redesign

### Current
Generic dialog with flat stacked text blocks (Challenge, Architecture, Impact). User feedback: "ugly scroll, seems generic, form-like, not storytelling."

### Approach — Narrative-Driven Design
- **Hero image** at top (full-width, rounded top corners, no border) — provides visual anchor
- **Client tagline** as a subtle mono label (not clinical headers)
- **Flowing prose sections** instead of labeled blocks:
  - Challenge, Architecture, Impact rendered as paragraphs with subtle alternating background treatments
  - Remove the repetitive "THE CHALLENGE" / "ARCHITECTURE & BUILD" / "IMPACT & OUTCOME" mono headers — use a more editorial style
- **Tech stack** as compact inline list (not badge soup) — max 4 shown, expandable
- **Testimonial quote** at bottom if the case study has associated feedback
- **Scroll fix**: remove `max-h-[85vh]` hard cutoff, use proper scroll container with `scroll-smooth`
- **Close button**: more prominent, top-right corner
- Overall feel: reading a mini case study story, not reviewing a form

### Files
- `src/components/CaseStudyModal.tsx`

---

## 6. Data & Content Updates

### Changes to `src/context/data.ts`

- **Location**: Update contact section to mention Colombia specifically (not just "LATAM-based")
- **Tyler Cobb quote**: Enrich with fuller feedback:
  > "Ty, gave incredible public feedback. He specifically mentioned how valuable Williams' documentation was and said he doesn't see this as a goodbye, but a 'see you soon,' as he hopes to work with Williams and this team on future opportunities."
- **Per-case-study testimonials**: Add testimonial quotes below relevant case studies where impact is strong (not just at chapter level)
- **Luis Lara**: Move testimonial to chapter 3 (last chapter)
- **Verify**: All new case studies (Liverpool, White Stuff, Crunchyroll) render correctly in the UI

### Files
- `src/context/data.ts`

---

## 7. Favicon + Tab Title

### Favicon
- Replace `public/favicon.svg` (blue square with white "W") with custom icon/symbol using brand colors
- User will describe or provide the custom design

### Tab Title
- Change `index.html` title from "Williams Colmenares | Senior Software Engineer" to "Williams | Senior Software Engineer"
- Update og:title and twitter:title meta tags accordingly

### Files
- `public/favicon.svg`
- `index.html`

---

## Implementation Order

1. **Design system** (#1 + palette evolution) — foundation
2. **Favicon + tab title** (#7) — quick wins
3. **Hero photo** (#2) — quick win
4. **Mobile nav** (#3) — structural change
5. **Contact form** (#4) — restore + restyle
6. **Case study modal** (#5) — biggest design effort
7. **Data/content** (#6) — content updates

## Verification

After each task:
- `npm run build` — no TypeScript or Vite errors
- `npm run lint` — no ESLint warnings
- Visual check in browser for responsive design
