# Story-Driven Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Williams Colmenares' portfolio into a human-first, bilingual story-driven career casebook with rich interactive case study modals, authentic personal narrative, curated toolkit, security headers, dependency hardening, and AI-agent discoverability via JSON-LD.

**Architecture:** Single Page Application (React 18 + TypeScript + Tailwind CSS + Radix UI). Theme is a single unified "Warm Editorial Paper & Terracotta" palette (`#F4EFEA` canvas, `#19191C` ink text, `#C25E3E` terracotta accent). Content is bilingual (EN / ES) and managed through a single source of truth (`src/context/data.ts` and `src/context/portfolio.tsx`). Layout mounts sequentially: Hero/Prologue with compact avatar, Narrative Story Chapters with inline quotes & case study triggers, Case Study Modal with optional selective media & live links, Human Side & AI Craft, Curated Toolkit, and Direct Connect with JSON-LD Schema markup and Vercel security headers.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Radix UI Dialog, Vite.

**Spec:** [`docs/superpowers/specs/2026-08-19-story-driven-portfolio-redesign.md`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/docs/superpowers/specs/2026-08-19-story-driven-portfolio-redesign.md)  
**UI Design Guide:** [`docs/superpowers/specs/ui-design-guide.md`](file:///Users/williamscolmenares/Desktop/Repos/williams_portfolio/docs/superpowers/specs/ui-design-guide.md)

## Global Constraints

- **Theme:** Single unified "Warm Editorial Paper" theme (Canvas: `#F4EFEA`, Cards: `#FAF7F2`, Ink: `#19191C`, Accent: `#C25E3E`). No dark/light switch.
- **Language:** Bilingual EN & ES with instant non-reloading header switch.
- **Title & Timeline:** Senior Software Engineer (promoted 2026), ~3.5 years verified professional experience starting Jan 2023.
- **Data Integrity:** No mentions of unverified Express.js / MERN stacks (per Corrections Log #4).
- **Pruned Content:** Educational/bootcamp-era toy projects completely removed.
- **Media & Avatar:** Modest circular avatar (no giant hero photos). Strictly 0 to 1 public visual per case study when available; no internal admin screenshot dumps.
- **Security:** Zero external CDN/raw GitHub hotlinks, strict `rel="noopener noreferrer"` on external links, and production security headers in `vercel.json`.
- **Quality Gates:** Strict TypeScript typing (`@/*` alias) and zero lint/typecheck errors on `npm run lint` and `npm run build`.

---

### Task 0: Security Hardening, Dependency Remediation & Performance Optimization

**Files:**
- Create: `vercel.json`
- Modify: `package.json`
- Modify: `index.html`
- Modify: `vite.config.ts`

**Interfaces:**
- Produces: 0 audit vulnerabilities, optimized bundle chunking, preconnected fonts, and production security headers.

- [x] **Step 1: Prune unused packages and fix dependency vulnerabilities**

Run:
```bash
npm uninstall embla-carousel-react embla-carousel-autoplay @radix-ui/react-accordion
npm audit fix
```

- [x] **Step 2: Create `vercel.json` for security headers**

Create `vercel.json` at project root with `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and CSP.

- [x] **Step 3: Optimize `index.html` font preconnect & SEO meta**

Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` with `display=swap`, and update OpenGraph / Twitter meta titles and descriptions.

- [x] **Step 4: Configure Rollup vendor chunking in `vite.config.ts`**

Split `vendor-react` (`react`, `react-dom`) and `vendor-ui` (`@radix-ui/*`, `lucide-react`) in `build.rollupOptions.output.manualChunks`.

- [x] **Step 5: Verify build passes**

Run: `npm run build`

- [x] **Step 6: Commit**

```bash
git add vercel.json package.json package-lock.json index.html vite.config.ts
git commit -m "chore: security hardening, dependency pruning, and performance optimization"
```

---

### Task 1: Update Data Model & Single Source of Truth (`src/context/data.ts`)

**Files:**
- Modify: `src/context/data.ts`

**Interfaces:**
- Produces: `Language` (`'en' | 'es'`), `PortfolioContent`, `StoryChapter`, `CaseStudy`, `TestimonialQuote`, `ToolkitGroup`, and `contentByLocale` dictionary.

- [x] **Step 1: Replace `src/context/data.ts` with the bilingual story-driven data model and verified history**

Define the new TypeScript interfaces and populate `contentByLocale` for both `'en'` and `'es'` with:
1. Hero copy (authentic prologue, LATAM to global, senior engineer, compact avatar config).
2. 3 Story Chapters:
   - Chapter 1: *The Fast Lane & The ApeFest Trilogy* (Hong Kong 2023, Lisbon 2024 load testing & live launch support, Las Vegas 2025 re-hire) + Fonz Olvera quote.
   - Chapter 2: *Building Platforms & Eliminating Repetition* (MadeByApes Bodega with Next.js/Payload/Meilisearch + TGA automation for Forbes/F1/BMW).
   - Chapter 3: *Stepping into Leadership & Enterprise at Apply* (Uniserve Payload architecture, Alltech solo pre-launch delivery, Momentum loan calculator) + Jesus Cocaño & Luis Lara quotes.
3. Case studies record keyed by ID (`apefest-lisbon`, `apefest-merch`, `bodega`, `tga-automation`, `uniserve-architecture`, `alltech-solo`, `momentum-calculator`) with optional single public media and optional live URL.
4. Human Side data (passions, mentoring coachees at Apply & tokenproof, Claude/Anthropic AI certifications).
5. Curated 3-group Toolkit (Core Engineering, AI & Modern Tooling, Cloud & Infrastructure).
6. Connect info (verified links, email, location).

- [x] **Step 2: Verify TypeScript compiles for data.ts**

Run: `npm run build`

- [x] **Step 3: Commit**

```bash
git add src/context/data.ts
git commit -m "feat(data): implement bilingual story-driven portfolio data model"
```

---

### Task 2: Update Portfolio Context with Language State (`src/context/portfolio.tsx`)

**Files:**
- Modify: `src/context/portfolio.tsx`

**Interfaces:**
- Consumes: `contentByLocale`, `Language`, `CaseStudy` from `src/context/data.ts`
- Produces: `usePortfolioContext()` hook providing `locale`, `setLocale(lang)`, `data` (active locale content), `activeCaseStudy`, `openCaseStudy(id: string)`, `closeCaseStudy()`.

- [x] **Step 1: Refactor `src/context/portfolio.tsx` to provide bilingual and modal state management**

Update the context to supply:
- `locale: Language` ('en' | 'es', defaulting to 'en' or browser language)
- `setLocale: (lang: Language) => void`
- `data: PortfolioContent` (current localized content)
- `activeCaseStudy: CaseStudy | null`
- `openCaseStudy: (caseStudyId: string) => void`
- `closeCaseStudy: () => void`

- [x] **Step 2: Verify context compiles**

Run: `npm run build`

- [x] **Step 3: Commit**

```bash
git add src/context/portfolio.tsx
git commit -m "feat(context): add bilingual locale and case study dialog state management"
```

---

### Task 3: Build Interactive Case Study Modal (`src/components/CaseStudyModal.tsx`)

**Files:**
- Create: `src/components/CaseStudyModal.tsx`

**Interfaces:**
- Consumes: `usePortfolioContext()`
- Produces: Radix Dialog modal displaying case study title, tagline, role, timeframe, challenge, what was built, impact/outcome, tech badges, optional single hero image, and optional external live links.

- [ ] **Step 1: Create `src/components/CaseStudyModal.tsx`**

Implement a clean, accessible dialog using `@/ui/dialog` (Radix Dialog) on `#FAF7F2` ivory surface with:
- Header with client/company badge, role, timeframe, and close button.
- Rich prose sections: The Challenge, The Architecture & Build, The Impact & Metrics.
- Technology tag pills.
- Optional external live URL link button (rendered only when available with `rel="noopener noreferrer"`).
- Optional single public hero image (strictly when available and relevant; no internal admin dumps).

- [ ] **Step 2: Verify component builds**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/CaseStudyModal.tsx
git commit -m "feat(components): implement rich CaseStudyModal dialog"
```

---

### Task 4: Build Hero / Prologue Component (`src/components/Hero.tsx`)

**Files:**
- Create: `src/components/Hero.tsx`

**Interfaces:**
- Consumes: `data.hero` from `usePortfolioContext()`
- Produces: Hero / Prologue section with id="hero".

- [ ] **Step 1: Implement `src/components/Hero.tsx`**

Build the prologue section:
- Warm, personal greeting ("Hey, I'm Williams") with a compact, tasteful avatar badge (no massive full-height headshots).
- Headline & Subheadline highlighting senior engineering craft, international team collaboration, and AI workflows.
- Casual bullet points highlighting key philosophies (shipping under pressure, clear communication, leaving systems better than found).
- Smooth scroll action buttons: "Explore the Journey" (scrolls to `#story`), "View Case Studies" (scrolls to `#story`), and "Get in Touch" (scrolls to `#connect`).

- [ ] **Step 2: Verify component builds**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(components): implement conversational narrative Hero component"
```

---

### Task 5: Build Story Chapters Component (`src/components/StoryChapters.tsx`)

**Files:**
- Create: `src/components/StoryChapters.tsx`

**Interfaces:**
- Consumes: `data.chapters`, `data.caseStudies`, `openCaseStudy` from `usePortfolioContext()`
- Produces: Story section with id="story" displaying the 3 sequential chapters with inline quotes and case study trigger cards.

- [ ] **Step 1: Implement `src/components/StoryChapters.tsx`**

Build the chapter timeline containing:
- Chapter header with chapter number badge (`01 / 03`), title, subtitle, and timeframe.
- Narrative prose formatted with high-legibility typographic styling (`max-w-2xl`, relaxed leading, `#4A4A52` text).
- Pull-quote card for contextual testimonials (Fonz Olvera, Jesus Cocaño, Luis Lara) styled with terracotta left border (`border-[#C25E3E]`) and soft ivory highlight.
- Embedded Case Study preview cards:
  - Displays project title, client, quick summary, and tech tags.
  - "Read Case Study →" button that triggers `openCaseStudy(caseStudyId)`.

- [ ] **Step 2: Verify component builds**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/StoryChapters.tsx
git commit -m "feat(components): implement narrative StoryChapters component with inline case studies"
```

---

### Task 6: Build Human Side & AI Craft Component (`src/components/HumanSide.tsx`)

**Files:**
- Create: `src/components/HumanSide.tsx`

**Interfaces:**
- Consumes: `data.humanSide` from `usePortfolioContext()`
- Produces: Section with id="beyond-code" highlighting the person, mentorship, and Anthropic/Claude AI certifications.

- [ ] **Step 1: Implement `src/components/HumanSide.tsx`**

Build the personal dimension section:
- The Person Behind the Terminal: life in Colombia/Venezuela, bilingual collaboration (C1 Advanced English), working across global timezones.
- AI-Augmented Workflow: Claude & Anthropic certifications breakdown, how Williams integrates AI into daily engineering.
- Mentorship & Coaching: Story of coaching engineers at Apply and tokenproof.

- [ ] **Step 2: Verify component builds**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/HumanSide.tsx
git commit -m "feat(components): implement HumanSide and AI craft component"
```

---

### Task 7: Build Curated Toolkit Component (`src/components/Toolkit.tsx`)

**Files:**
- Create: `src/components/Toolkit.tsx`

**Interfaces:**
- Consumes: `data.toolkit` from `usePortfolioContext()`
- Produces: Section with id="toolkit" displaying 3 organized groups (Core Engineering, AI & Modern Workflow, Cloud & Infrastructure).

- [ ] **Step 1: Implement `src/components/Toolkit.tsx`**

Build the senior toolkit section:
- 3 clean, card-based category blocks on `#FAF7F2` surface:
  1. *Core Engineering & Frontend Mastery:* React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Payload CMS, Web3/Ethers.js.
  2. *AI & Modern Engineering:* Anthropic Claude Code, Prompt Engineering, AI-Assisted Workflows.
  3. *Cloud, Testing & Systems:* AWS S3, Firebase, Vercel, Playwright, Jest, Git & GitHub.
- Powered exclusively by `lucide-react` and local SVGs (zero external CDNs).

- [ ] **Step 2: Verify component builds**

Run: `npm run build`

- [ ] **Step 3: Commit**

```bash
git add src/components/Toolkit.tsx
git commit -m "feat(components): implement curated 3-category Toolkit component"
```

---

### Task 8: Build Direct Connect, Footer & Structured Data (`src/components/Contact.tsx`, `Footer.tsx`, `StructuredData.tsx`)

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `src/components/StructuredData.tsx`

**Interfaces:**
- Consumes: `data.connect` from `usePortfolioContext()`
- Produces: Section id="connect", updated footer, and JSON-LD Schema.org metadata for AI search crawlers.

- [ ] **Step 1: Update `src/components/Contact.tsx`**

Clean, casual CTA:
- Direct email link with pre-filled subject/body.
- Social profile buttons (LinkedIn, GitHub, Upwork) with `rel="noopener noreferrer"`.
- Timezone and working availability note.

- [ ] **Step 2: Update `src/components/Footer.tsx`**

Streamlined footer with copyright, quick social links, and smooth "Back to top" button.

- [ ] **Step 3: Create `src/components/StructuredData.tsx`**

Inject JSON-LD script tag containing `schema.org/Person` with verified name, job title ("Senior Software Engineer"), location, verified skills, and work history for AI agents.

- [ ] **Step 4: Verify components build**

Run: `npm run build`

- [ ] **Step 5: Commit**

```bash
git add src/components/Contact.tsx src/components/Footer.tsx src/components/StructuredData.tsx
git commit -m "feat(components): update Contact, Footer, and add JSON-LD StructuredData"
```

---

### Task 9: Update Layout & Main App Orchestrator (`src/components/Layout.tsx`, `src/App.tsx`)

**Files:**
- Modify: `src/components/Layout.tsx`
- Modify: `src/App.tsx`
- Clean up unused legacy components.

**Interfaces:**
- Produces: Refactored navigation bar with bilingual `EN | ES` switch, new story-based sections, mounted CaseStudyModal, and full page flow.

- [ ] **Step 1: Update `src/components/Layout.tsx`**

Update header navigation:
- `Story` (`#story`)
- `Beyond Code` (`#beyond-code`)
- `Toolkit` (`#toolkit`)
- `Connect` (`#connect`)
- Add bilingual `EN | ES` toggle button in header and mobile sheet.

- [ ] **Step 2: Update `src/App.tsx`**

Mount the new narrative components in order:
```tsx
<PortfolioProvider>
  <StructuredData />
  <Layout options={navOptions}>
    <Hero />
    <StoryChapters />
    <HumanSide />
    <Toolkit />
    <Contact />
    <Footer />
  </Layout>
  <CaseStudyModal />
</PortfolioProvider>
```

- [ ] **Step 3: Remove deprecated unused component files**

Delete `Services.tsx`, `Me.tsx`, `About.tsx`, `Skills.tsx`, `Portfolio.tsx`, `ProjectCard.tsx`, `ProjectModal.tsx`, `Testimonials.tsx`.

- [ ] **Step 4: Run full verification**

Run: `npm run lint` and `npm run build`
Verify zero TypeScript errors, zero lint warnings, and clean bundle creation.

- [ ] **Step 5: Commit**

```bash
git add src/
git commit -m "feat: complete story-driven portfolio redesign assembly"
```
