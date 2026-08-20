# Portfolio v2.2 Cleanup Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Remove all unused dependencies, assets, components, and dead code. Sync career-master.md with missing feedback.md data. Update AGENTS.md and README.md to reflect current state.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI primitives, react-scroll, lucide-react

---

## Task 1: Delete Unused Assets

**Files:**
- Delete: `src/assets/projects-ss/` (entire directory — 65 screenshots, 0 references in code, 20MB)
- Delete: `src/assets/IMG_3406.jpg` (4.1MB — replaced by `thumbnail.jpg`)
- Delete: `src/assets/me_close.jpg` (3.7MB — not imported)
- Delete: `src/assets/me.png` (12MB — not imported)

**Keep:**
- `src/assets/thumbnail.jpg` — used by Hero.tsx
- `src/assets/IconGithub.tsx`, `IconLinkedin.tsx`, `IconUpwork.tsx` — used by data.ts

- [x] **Step 1: Delete unused image assets**
```bash
rm -rf src/assets/projects-ss/
rm src/assets/IMG_3406.jpg
rm src/assets/me_close.jpg
rm src/assets/me.png
```

- [x] **Step 2: Verify build**
Run: `npm run build`
Expected: PASS

- [x] **Step 3: Verify lint**
Run: `npm run lint`
Expected: PASS

- [x] **Step 4: Commit**
```bash
git add -A src/assets/
git commit -m "chore: delete unused image assets (~36MB freed)"
```

---

## Task 2: Delete Unused UI Components

**Files:**
- Delete: `src/ui/accordion.tsx` — zero imports
- Delete: `src/ui/badge.tsx` — zero imports
- Delete: `src/ui/card.tsx` — zero imports
- Delete: `src/ui/carousel.tsx` — zero imports
- Delete: `src/ui/sheet.tsx` — zero imports

**Keep:**
- `button.tsx` — used by Contact.tsx
- `dialog.tsx` — used by CaseStudyModal.tsx
- `input.tsx` — used by Contact.tsx
- `textarea.tsx` — used by Contact.tsx

- [x] **Step 1: Delete unused UI components**
```bash
rm src/ui/accordion.tsx src/ui/badge.tsx src/ui/card.tsx src/ui/carousel.tsx src/ui/sheet.tsx
```

- [x] **Step 2: Verify build**
Run: `npm run build`
Expected: PASS

- [x] **Step 3: Verify lint**
Run: `npm run lint`
Expected: PASS

- [x] **Step 4: Commit**
```bash
git add -A src/ui/
git commit -m "chore: delete unused UI components (accordion, badge, card, carousel, sheet)"
```

---

## Task 3: Remove Legacy State Shim from data.ts and portfolio.tsx

The `PortfolioState` interface and `state` export in `data.ts` were shims for deleted components (About, Me, Services, Skills, Testimonials, Portfolio, ProjectCard). These components no longer exist. The same legacy properties exist in `portfolio.tsx` context.

**Files:**
- Modify: `src/context/data.ts` — remove `PortfolioState` interface and `state` export (lines 578–628)
- Modify: `src/context/portfolio.tsx` — remove 6 deprecated legacy shim properties from context value and interface

- [x] **Step 1: Remove legacy state shim from data.ts**

Delete everything from the `@deprecated` comment block through the end of the file (the `PortfolioState` interface and the empty `state` export). Keep the closing `};` of the main `contentByLocale` object.

- [x] **Step 2: Remove legacy shims from portfolio.tsx**

In the `PortfolioContextValue` interface, remove these 6 deprecated properties:
```ts
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
skills: typeof legacyState.skills;
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
services: typeof legacyState.services;
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
about: typeof legacyState.about;
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
projects: typeof legacyState.projects;
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
connect: typeof legacyState.connect;
/** @deprecated Legacy shim for old components — will be removed in Task 9. */
testimonials: typeof legacyState.testimonials;
```

In the `value` useMemo, remove:
```ts
skills: legacyState.skills,
services: legacyState.services,
about: legacyState.about,
projects: legacyState.projects,
connect: legacyState.connect,
testimonials: legacyState.testimonials,
```

Remove the `state as legacyState` import from the data import line.

- [x] **Step 3: Verify build**
Run: `npm run build`
Expected: PASS

- [x] **Step 4: Verify lint**
Run: `npm run lint`
Expected: PASS

- [x] **Step 5: Commit**
```bash
git add src/context/data.ts src/context/portfolio.tsx
git commit -m "chore: remove legacy PortfolioState shim and deprecated context properties"
```

---

## Task 4: Sync feedback.md Data into career-master.md

Read `context/feedback.md` and cross-reference against `context/career-master.md`. Add any missing feedback data that is not already present. Clean and condense to keep career-master as the single source of truth.

**Missing items to add:**

1. **Juanma's full Alltech quote** (shoutout): Add to Apply > Alltech section:
   > "Williams has been a key driver in supporting them, serving as the single point of reference for their technical questions. He tackled the most complex tickets, always taking the time to clearly explain his approach and listen to their needs. He also confidently managed large client meetings, addressing their questions while navigating deployments and emerging risks."

2. **Juanma's Alltech turnaround context** (team shoutout): Add to Apply > Alltech section:
   > "12 pages delivered on time, a healthy backlog, and a client that fully trusts us."

3. **Mario Mejia's formal talent assessment ratings**: Add to Uniserve section under a "Talent Assessment (Jan 2026)" sub-heading:
   - Domain Expertise: Excelling
   - Consulting: Excelling
   - Leadership: Doing/Excelling
   - Practice Development: Excelling
   - "Williams is a standout performer. His openness to feedback and his drive to help the team succeed make him a pleasure to work with. I highly recommend that management continues to challenge him with high-impact roles, as he has proven he has the technical and emotional intelligence to handle increased responsibility."

4. **Carlos Rosales' formal talent assessment ratings**: Add to Alltech section under a "Talent Assessment (Jan 2026)" sub-heading:
   - Domain Expertise: Excelling
   - Consulting: Excelling
   - Leadership: Developing
   - Practice Development: Excelling
   - "Williams no es sólo un gran profesional, si no también una gran persona. Es un alivio tenerlo en el equipo, es alguien en quién puedes confiar que llevará al equipo a la linea de meta de manera exitosa."

5. **Mariana's development feedback** (constructive): Add to Momentum section:
   > "Williams tiene mucho que aportar ya que tiene una buena base de conocimientos, sin embargo, he notado que no es tan proactivo cuando se trata de compartir sus conocimientos o proveer revisiones mas detalladas a nivel de código. Creo que se podría aprovechar mas ese conocimiento y así retroalimentarse a nivel de equipo."
   Also add the development suggestion:
   > "Me gustaría verlo más activo compartiendo ese conocimiento con el equipo, especialmente en code reviews. Explicar el porqué de las decisiones, proponer alternativas y hacer preguntas ayudaría a que otros aprendan y ganen más autonomía."

6. **White Stuff feedback from Hans Piña**: Add to White Stuff section:
   > "Te adaptaste super bien, absorbiste bien el onboarding. Fuiste capaz de comunicarte exitosamente con el cliente cuando fue necesario. No necesitaste supervisión fuera de lo normal, fuiste altamente autónomo. Proactividad tomando tickets."

7. **Agustin Musa's Uniserve framing**: Add to Uniserve section alongside existing "clean components, steady velocity, zero drama":
   > "The dev trio turning ambiguous into shippable."

**Important:** Do NOT duplicate quotes that are already present. Only add genuinely missing information. Condense where possible — career-master should remain readable, not a transcript of every Slack message.

- [x] **Step 1: Read feedback.md and career-master.md**
Read both files fully to identify exact gaps.

- [x] **Step 2: Add missing feedback to career-master.md**
Insert the missing items listed above into the appropriate sections. Use clean, condensed language. Keep the document's existing tone and structure.

- [x] **Step 3: Verify career-master.md is coherent**
Re-read the modified sections to ensure nothing reads as duplicated or out of place.

- [x] **Step 4: Commit**
```bash
git add context/career-master.md
git commit -m "docs: sync feedback.md data into career-master.md (talent assessments, missing quotes)"
```

---

## Task 5: Update AGENTS.md

**File:** `AGENTS.md`

Current issues:
- References deleted components: About.tsx, Me.tsx, Portfolio.tsx, ProjectCard.tsx, Services.tsx, Skills.tsx, Testimonials.tsx
- Component list in repo map doesn't match current `src/components/`
- Missing info about bilingual testimonials (`messageEs`), bottom tab bar, Formspree contact form
- "Task 9" references are stale (legacy shim removal happened in Task 3 above)

- [x] **Step 1: Update component list**
Replace the old component list with the current one:
```
├─ components/
│  ├─ CaseStudyModal.tsx   # Narrative case study modal with bilingual testimonials
│  ├─ Contact.tsx          # Formspree contact form + direct links
│  ├─ Footer.tsx           # Page footer with social links & copyright
│  ├─ Hero.tsx             # Hero section with profile photo
│  ├─ HumanSide.tsx        # Personal section (Beyond Code)
│  ├─ Layout.tsx           # Main layout, desktop header, mobile bottom tab bar
│  ├─ StoryChapters.tsx    # Career story timeline with case study cards
│  ├─ StructuredData.tsx   # JSON-LD structured data for SEO
│  └─ Toolkit.tsx          # Tech stack & skills categorization
```

- [x] **Step 2: Update content management section**
Add info about bilingual testimonials: `TestimonialQuote` supports `messageEs` for Spanish translations. Case study modals render based on `locale` context.

- [x] **Step 3: Update navigation section**
Document that mobile uses a fixed bottom tab bar (`sm:hidden`), not a side sheet. Desktop uses sticky header.

- [x] **Step 4: Update the Key Conventions section**
Remove references to deleted components. Add note about Formspree contact form (endpoint: `xlezzzro`).

- [x] **Step 5: Commit**
```bash
git add AGENTS.md
git commit -m "docs: update AGENTS.md to reflect current component structure"
```

---

## Task 6: Update README.md

**File:** `README.md`

Current issues:
- Mentions "Antigravity agents" workflow (not relevant)
- Project structure lists deleted components (About, Me, Portfolio, …)
- No mention of bilingual support (EN/ES)
- No mention of Formspree contact form

- [x] **Step 1: Update project structure**
Replace the old structure with current:
```
src/
├─ assets/           # Brand SVGs, profile photo, icon components
├─ components/       # Page sections (Hero, StoryChapters, HumanSide, Toolkit, Contact, Footer, CaseStudyModal, Layout, StructuredData)
├─ context/          # data.ts (single source of truth) & portfolio.tsx (React Context)
├─ ui/               # Reusable UI primitives (Button, Dialog, Input, Textarea)
├─ utils/            # Helper functions (cn.ts)
└─ App.tsx, main.tsx
```

- [x] **Step 2: Update Agent-Enabled Workflow section**
Remove mention of Antigravity agents. Simplify to: "Run `npm run build` + `npm run lint` to verify changes." Keep reference to AGENTS.md.

- [x] **Step 3: Add bilingual support note**
Add a line: "Content supports EN/ES via locale context. Testimonials include `messageEs` for bilingual rendering in case study modals."

- [x] **Step 4: Commit**
```bash
git add README.md
git commit -m "docs: update README.md to reflect current project state"
```

---

## Task 7: Final Verification

- [x] **Step 1: Run `npm run build`** — must pass
- [x] **Step 2: Run `npm run lint`** — must pass
- [x] **Step 3: Visual check** — confirm no broken images, no missing imports, nothing visually broken
- [x] **Step 4: Push to develop**
```bash
git push origin develop
```
