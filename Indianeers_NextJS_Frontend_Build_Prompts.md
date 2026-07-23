# INDIANEERS MEDIA PRIVATE LIMITED
## Next.js Frontend — Phase-Wise Agentic Build Prompts

**Purpose of this document:** A ready-to-paste prompt set for an agentic coding AI (Claude Code, Cursor, etc.) to build the Indianeers Media website **frontend only**, in the correct sequence, without scope collapse or context overload. Each phase is a complete, standalone prompt — run them one at a time, review the output, then move to the next.

**Scope of this phase:** Frontend only (Next.js). Backend (Node.js + MySQL) is out of scope for now — every dynamic section is built against a typed mock-data contract that mirrors the eventual API/DB shape, so backend integration later is a data-source swap, not a rebuild.

---

## 0. MASTER CONTEXT PROMPT
*(Paste this once, at the start of the session, before Phase 1. It sets shared rules the agent should hold for every subsequent phase.)*

```
You are building the marketing website for INDIANEERS MEDIA PRIVATE LIMITED (IMPL),
a Government of India-affiliated vocational skill development company (NSDC project
implementation agency, active since 2012). Visitors include job-seeking youth,
corporate CSR partners, government officials, and journalists — so the site must
feel credible, official, and warm at the same time, not like a generic startup site.

STACK
- Framework: Next.js 14+ (App Router), TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion (scroll-triggered reveals, counters, sliders)
- Icons: lucide-react
- Maps: react-simple-maps or a static SVG India map (NOT Leaflet/3D — must stay lightweight on mobile)
- Forms: React Hook Form + Zod validation (client-side only for now — submit handlers
  should log/mock the payload and show success UI; wire to real API endpoints in the
  backend phase)
- Images: next/image everywhere, WebP source assets, lazy-loaded by default
- Data: all dynamic content (projects, testimonials, jobs, blog posts, affiliations,
  gallery, states) lives in typed mock files under /lib/data/*.ts or /content/*.json —
  shaped exactly like the future MySQL tables so the backend team can swap fetch
  functions later without touching components.

BRAND & DESIGN SYSTEM
- Logo: provided separately (tricolor hourglass/piston mark — saffron top, white
  center with navy Ashoka Chakra, green base — with wordmark "INDIANEERS MEDIA
  PRIVATE LIMITED" and tagline "Skilling India's Future"). Place logo in
  /public/logo.png (transparent) and /public/logo-mark.png (icon only, for favicon/mobile).
- Typography: Bricolage Grotesque for ALL text (headings AND body). Load via
  next/font/google (`Bricolage_Grotesque`). Use variable font weights:
  - Headings (h1–h3): weight 700–800, tight tracking, large scale contrast
    (e.g. hero h1 at 56–72px desktop / 34–40px mobile)
  - Subheadings/section labels: weight 600, uppercase, wide letter-spacing, small size
  - Body: weight 400–500, 16–18px, generous line-height (1.6–1.7)
- Color palette (derived from the logo, not generic corporate blue):
  - Saffron/Orange (primary accent): #F37020 — CTAs, highlights, active states
  - India Green (secondary accent): #1E9E4E — success states, secondary CTAs, tags
  - Navy/Chakra Blue (anchor/authority color): #1B2A5B — headings on light bg, footer bg, nav text
  - Off-white background: #FBFAF7 (not pure white — softer, warmer)
  - Card surface: #FFFFFF with a very soft shadow, or #F5F3EE for muted cards
  - Ink/body text: #23262F (not pure black)
  - Use saffron→green as a signature gradient ONLY sparingly (e.g. underline accents,
    progress bars, one hero element) — never as a full-bleed background, it must stay
    minimalist, not carnival-colored.
- Visual style: minimalist, generous white space, confident large typography,
  restrained color (mostly off-white/navy/ink with saffron or green used as single
  accent per section, not both at once), soft rounded corners (12–20px), subtle
  shadows, no glassmorphism/heavy gradients, no stock-photo clichés — this is a
  government-adjacent institution, so credibility > trendiness.
- Motion: purposeful, not decorative. Scroll-fade-up on section entry, animated
  count-up on stat numbers, smooth auto-scrolling logo/testimonial strips, subtle
  hover-lift on cards. Respect prefers-reduced-motion.

LAYOUT RULES
- Sticky header: hides on scroll-down, reappears on scroll-up, logo top-left always
  links to Homepage, nav order: About Us | What We Do | Projects | Gallery | Blog &
  News | Careers | Contact Us (Home is the logo, not a separate label).
- Footer on every page: 4 columns (About | What We Do | Projects | Reach Us) +
  newsletter bar above it + social icons (Instagram, LinkedIn, YouTube, Facebook,
  X/Twitter) + office addresses + copyright + Privacy Policy / Terms links.
- Support chat bubble fixed bottom-right on all pages (placeholder UI is fine for now).
- Mobile-first. Assume majority of visitors are on Android phones on modest
  connections — keep JS bundle lean, defer non-critical scripts, no heavy 3D.

ACCESSIBILITY & SEO (build in from the start, don't retrofit)
- Every page: one semantic H1, logical H2/H3 nesting, descriptive alt text on all
  images, meta title + description per page (use Next.js Metadata API).
- Color contrast must pass WCAG 2.1 AA (check navy-on-off-white and white-on-saffron
  combinations specifically).
- All interactive elements keyboard-navigable, visible focus states.

FILE/FOLDER CONVENTIONS
- App Router structure: /app/(site)/about-us/page.tsx, /app/(site)/what-we-do/page.tsx, etc.
- Shared UI in /components/ui (Button, Card, SectionHeading, StatCounter, Tabs, Slider,
  Accordion, Modal, Badge)
- Section-level components in /components/sections/[page-name]/
- Mock data in /lib/data/ (projects.ts, testimonials.ts, jobs.ts, blogPosts.ts,
  affiliations.ts, states.ts, gallery.ts, faculty.ts)
- Keep components small and composable — a page.tsx should mostly just compose
  <Section/> components in order, not contain raw markup.

Confirm you understand this system, then wait for Phase 1.
```

---

## PHASE 1 — Project Scaffolding & Design System

```
PHASE 1: Scaffold the Next.js project and build the reusable design system.

1. Initialize Next.js 14 (App Router, TypeScript, Tailwind, ESLint).
2. Configure Bricolage Grotesque via next/font/google as the global font (set as
   Tailwind's fontFamily.sans so it applies everywhere by default).
3. Extend tailwind.config with the brand palette as named tokens: saffron, indiaGreen,
   navy, offwhite, ink (use the hex values from the master context).
4. Build the base UI kit in /components/ui:
   - Button (variants: primary [saffron fill], secondary [navy outline], ghost)
   - Container (max-width wrapper with responsive padding)
   - SectionHeading (eyebrow label + H2 + optional subtext, centered or left-aligned prop)
   - Card (base card with hover-lift shadow)
   - StatCounter (animates 0 → target number on scroll-into-view, supports "+"/"%" suffix)
   - Badge/Tag (small pill, used for programme names, categories)
   - Tabs (accessible, keyboard-navigable, used later on What We Do / Careers)
   - AutoScrollMarquee (two-direction infinite scroll strip — for logos and press clippings)
   - Modal/Dialog (for apply/volunteer forms and lightbox)
5. Build the global Header: sticky, hide-on-scroll-down/show-on-scroll-up behavior,
   logo left, nav center/right, mobile hamburger → slide-in drawer nav, CTA button
   (e.g. "Explore Programs") right-aligned on desktop.
6. Build the global Footer: 4-column layout (About | What We Do | Projects | Reach Us),
   newsletter email-capture bar above it, social icon row, both office addresses
   (Registered + Head Office), phone/email, copyright line + Privacy Policy + Terms
   links (link targets can be placeholder routes for now).
7. Build a fixed bottom-right chat bubble placeholder component.
8. Set up /app/(site)/layout.tsx to wrap all pages with Header + children + Footer +
   chat bubble.
9. Create placeholder routes (empty page.tsx with just an H1) for all top-level pages
   so navigation is fully clickable end to end: /, /about-us, /what-we-do, /projects,
   /gallery, /blog-news, /careers, /contact-us.

Deliverable: a running app where every nav link works, header/footer are correct on
every page, and the UI kit is ready to compose real sections in later phases.
```

---

## PHASE 2 — Homepage

```
PHASE 2: Build the Homepage (/) — the most important page, sets the tone for the
whole site. Build these sections in order, each as its own component in
/components/sections/home/:

1. HeroBanner — full-width, full-viewport-height auto-playing slider (5s/slide,
   pause on hover, swipe on mobile). Each slide: high-impact photo background (use
   /public/placeholder-hero-1.jpg etc. for now) with dark gradient overlay for text
   legibility, large headline (rotate through: "Skilling India's Future" /
   "100,000+ Lives Changed" / "Training that leads to real jobs"), two CTA buttons —
   "Explore Our Programs" (→ /what-we-do) and "Our Impact" (→ /projects).

2. ImpactNumbers — exactly 3 large StatCounters in a horizontal row, animate on
   scroll-into-view: 100,000+ Youth Trained | 25+ States & UTs | 150+ Training Centres.

3. WhoWeAre — two-column: short intro paragraph (use the "Who We Are" copy about IMPL
   being an NSDC project implementation agency since 2012) + "Read More" button
   (→ /about-us). Keep this section SHORT — it's a hook, not the full story.

4. WhatWeDoPreview — 4 icon cards in a row (stack on mobile): For Corporates,
   For Industries, For Institutions, For Individuals. Each: icon, 1-line description,
   "Learn More" → /what-we-do.

5. OurWorksSlider — horizontal auto-scrolling card slider, 3 cards visible on desktop
   (1 on mobile), each card: project photo, project name, 2-line description,
   "Read More" button. "View All Projects" button below → /projects. Pull from
   /lib/data/projects.ts mock data.

6. AffiliationsSlider — two AutoScrollMarquee strips moving in opposite directions,
   logos only, no text: Strip 1 = Sector Skill Councils (BWSSC, AMHSSC, ASCI, CSDCI,
   BFSI, etc.), Strip 2 = Government/Ministry bodies (NSDC, FSSAI, State SDMs,
   NAPS/NATS, etc.). Use placeholder logo boxes for now — grayscale, colorize on hover.

7. MediaCoverageSlider — auto-scrolling strip of newspaper-clipping thumbnails,
   click opens a lightbox modal with the larger image.

8. TestimonialsSlider — 4 auto-sliding testimonial cards (name, 5-star rating,
   2-line quote, programme name as a tag). Seed with: Satyendra Sahu, Biswajit Bora,
   Arjun Chouhan, Rahul Jain (use the quotes/context from the content document).

9. NewsletterBar — thin full-width strip just above the footer: "Stay Updated" heading
   + email input + submit button (client-side validated, mock-submits for now).

Use real copy from the content document for all headline/body text — do not invent
new claims or numbers. Every section must scroll-reveal with Framer Motion and be
fully responsive.
```

---

## PHASE 3 — About Us

```
PHASE 3: Build /about-us. Sections in order:

1. PageHero — smaller than homepage hero, "About Us" H1 + one-line subtitle,
   breadcrumb (Home / About Us).

2. OurStory — the founding narrative (2012, NSDC agency, bottom-of-the-pyramid focus,
   23+ states, 20+ SSC affiliations, 30,000+ trained / 22,000+ placed) as flowing
   copy, paired with a StatCounter infographic strip: Founded 2012 | Youth Trained
   100,000+ | States Covered 25+ | Training Centres 150+ | Goal: 10 Lakh skilled
   youth by 2030.

3. MissionVision — two-column or two-card layout, Vision and Mission text side by
   side, visually distinct (e.g. different accent color per card — saffron for
   Vision, green for Mission).

4. Objectives — 8 objective cards in a 4x2 (desktop) / 1-col (mobile) icon grid:
   Skill Training for Employment, Centres of Excellence, Educational Material
   Development, Comprehensive Development Programmes, Placement and Industry
   Linkages, Outreach and Awareness, Internship Facilitation, Educational Access
   Expansion. Icon + title + 1-sentence description each.

5. CoreFocusAreas — 3-item list/card row: bridging education-employment, empowering
   marginalized communities, pathways to wage employment and self-employment.

6. OurApproach — render as a clean horizontal (desktop) / vertical (mobile) numbered
   flowchart component (new: /components/ui/ProcessFlow), 8 steps: Baseline Study →
   Social Mobilisation → Entry Gating & Selection → Training Delivery → Assessment &
   Certification → Placement → Post-Placement Tracking → Feedback & Impact Assessment.
   Each step: number badge, short label, connecting line/arrow between steps.

7. TrainerFaculty — 5 feature cards (Industry Masters, Real-World Experience,
   Passionate Educators, Lifelong Learners, Tailored Approach) + a certifications
   sub-block with two stat highlights: "232+ TOT Certified Trainers" and
   "65+ NIESBUD Entrepreneurship Certified Faculty."

8. OurTeam — leadership grid: photo (left) + name, title, 3-line bio (right) per
   person. Use 3–4 placeholder leadership entries (clearly marked as placeholder
   content/photo so IMPL can swap in real bios) laid out in a responsive card grid.

All copy should come from the content document. Keep the page long-scroll but with
strong visual rhythm — alternate background tints (offwhite / white) between
sections so it doesn't feel like an undifferentiated wall of text.
```

---

## PHASE 4 — What We Do

```
PHASE 4: Build /what-we-do — the most content-dense page, for candidates, corporates,
and government bodies. Structure:

1. PageHero — "What We Do" H1 + subtitle + breadcrumb.

2. ProgrammeCategoryTabs — 4 accessible tabs across the top: For Individuals
   (Government-Funded Skilling) | For Corporates (CSR & Workplace Training) |
   For Industries (FoSTaC, PMFME, Vocational) | For Institutions (Colleges, ITIs,
   Schools). Tab content swaps below without a page reload.

3. GovernmentSkillTraining — PMKVY 4.0 detail block (10,000+ targets, 24 states,
   30+ job roles, CSCM/CSSM components, active since 2016) + an expandable/
   accordion list of the 17 State Skill Development Mission partners + NULM project
   summary (Jharkhand, Assam, Punjab) + "Other Government Programmes" list (PLSTP,
   ELSTP, DMF, UPSDM-STARTUP-2023, NE special projects).

4. SolarRenewableEnergy — 3-region summary cards (Maharashtra, Uttarakhand & Punjab,
   Northeast & South India COEs) with beneficiary numbers as stat callouts.

5. AgriculturalSkillTraining — 3 programme cards: MAPCET, Meghalaya
   Hydroponics/Aquaponics, PMKVY agri roles — each with participant counts.

6. Apprenticeships — NAPS/NATS TPA status, short explanatory paragraph.

7. FoSTaCFoodSafety — FSSAI empanelment + Eat Right Campus partner status.

8. InstitutionEngagements — 5 case-study cards (ITI Martiganj PPP, UPES, Life
   Sciences Skill Hub w/ 4 pharmacy colleges, Project Concern International CSR
   programme, Multi-College Partnerships) — each: title, collaboration type,
   1–2 line description, list of partner institutions where applicable.

9. Placement section — Placement Commitment ("min. 75% placed") headline stat +
   the 11-step placement process as a compact numbered list or accordion + Industry
   Tie-ups table (use the 13-row placement partner table from the content doc:
   Sr. No, Organization, Placement Capacity, Location, Sector — make it a responsive
   table that collapses to stacked cards on mobile) + Self-Employment Support as an
   8-item checklist/icon grid.

Use /lib/data for any repeatable lists (states, tie-up partners) so the accordion/
table components are data-driven, not hardcoded JSX.
```

---

## PHASE 5 — Projects (Dashboard + Interactive Map)

```
PHASE 5: Build /projects — critical for government tenders and partnership
decisions, so this must feel data-rich and authoritative.

1. PageHero — "Our Projects" H1 + subtitle.

2. ProjectsGrid — filterable grid (Sector: PMKVY | Solar | Agriculture | Hospitality
   | IT | Healthcare | Retail | etc.; State: Assam | MP | UP | Maharashtra |
   Nagaland | etc.) using dropdown or pill filters above the grid. Each card:
   project name, sector badge, state, year, "X trained" stat, "Read More" →
   /projects/[slug] (build the route now, Phase 10 fleshes out the template).
   Source from /lib/data/projects.ts.

3. ImpactDashboard — animated stat grid: Total Candidates Trained 30,000+ |
   Candidates Placed 22,000+ | Operational States 23 | Training Centres 160+ |
   Job Roles Covered 30+ | Avg. Placement Rate 80%+ | PMKVY 4.0 Targets (current FY)
   10,000+. Structure this as a typed array in /lib/data/dashboardStats.ts so it can
   later be swapped for a live Google-Sheet/API-driven fetch without touching the UI.

4. StatewiseMap — build with react-simple-maps (or a static optimized SVG of India)
   showing only operational states highlighted (in saffron or navy). Left: persistent
   map (sticky on scroll on desktop, above content on mobile). Right: detail panel
   that updates on state click — projects conducted, candidates trained, training
   centres, key partners, "Know More" → /projects/state/[slug]. Default to showing
   one state's data (e.g. Madhya Pradesh) on load. Keep the SVG lightweight — no 3D,
   no heavy geo libraries beyond what's needed for click-to-highlight.

5. AffiliationsSection — two blocks: "Government & Regulatory Affiliations" (NSDC,
   FSSAI, NAPS/NATS, IISC Network Member since April 2020, Ni-MSME, 17 State Skill
   Missions) as icon+label cards, and "Sector Skill Council Affiliations" as a
   dense 2-column list (use the full SSC list from the content document —
   Agriculture, Apparel, Automotive, Beauty Wellness, BFSI, Construction,
   Electronics, Food Industry, Furniture, Healthcare, IT-ITES, Leather, Logistics,
   Media & Entertainment, Plumbing, Retailers Association, Rubber, Green Jobs,
   Handicrafts & Carpet, Tourism & Hospitality).

6. TendersSection — clean table at the bottom: Tender Title | Issuing Body |
   Deadline | Download PDF link. Seed with 2–3 placeholder rows (clearly mock data)
   sourced from /lib/data/tenders.ts.

Build /app/(site)/projects/[slug]/page.tsx and /app/(site)/projects/state/[slug]/page.tsx
as functional dynamic routes now (even with a simple layout) — Phase 10 will apply
the full sub-page template to them.
```

---

## PHASE 6 — Gallery

```
PHASE 6: Build /gallery.

1. PageHero — "Gallery" H1 + subtitle.

2. TrainingPhotosGrid — filterable masonry/grid gallery, categories: All | PMKVY |
   FoSTaC | Drone | BSDMA | Sarpanch Samwad | Events. Click opens a full-screen
   lightbox with next/prev navigation and keyboard support (Esc to close, arrows to
   navigate).

3. TrainingCentresGrid — photo grid of physical centres with a location label
   overlay on each (city/state name, bottom-left of image).

4. YouTubeVideosGrid — 3-per-row responsive grid of embedded YouTube videos
   (lazy-loaded via facade/click-to-load pattern to avoid loading YouTube's heavy JS
   until clicked). Seed with the reference video (Agricultural Engagements in NE:
   rOkVrHJRaKM) plus placeholder entries.

5. MediaCoverageStrip — same sliding newspaper-clipping component pattern as
   homepage, reused here, plus a small "Download Press Releases" list of PDF links.

6. CommunityInitiatives — photo grid with short captions (plantation drives,
   marathons, awareness camps, competitions).

7. SocialFollowStrip — closing band: "Follow us on Instagram / YouTube / LinkedIn"
   with icon buttons linking out (do NOT embed live social feeds — link out only,
   per the content doc's explicit guidance).

Reuse the lightbox/modal component from the UI kit rather than building a new one.
```

---

## PHASE 7 — Blog & News

```
PHASE 7: Build /blog-news.

1. PageHero — "Blog & News" H1 + subtitle.

2. ArticlesGrid — filterable grid: All | Skill India | FoSTaC | Drone | PMKVY |
   Community. Each card: category tag, headline, 2-line excerpt, author, date,
   "Read More" → /blog-news/[slug] (build a simple article detail route/template).
   Source from /lib/data/blogPosts.ts (mock 6–8 sample posts with placeholder copy
   clearly marked as sample content).

3. LatestUpdates — reverse-chronological list/timeline of short announcements
   (upcoming batches, new partnerships, launches): date, headline, short
   description, optional CTA link. Visually distinct from the articles grid (e.g.
   a compact timeline/list style vs. the card grid above).

Note in code comments: this page is CMS/admin-managed in the eventual backend —
current implementation is a static data source standing in for that API.
```

---

## PHASE 8 — Careers

```
PHASE 8: Build /careers — needs to serve 4 different visitor intents cleanly.

1. Hero — Headline "Build a career that builds India" + 4 category tabs: Office Jobs
   | Project Roles | Internships | Volunteer (tabs can deep-link to the relevant
   section below via anchor scroll).

2. ActiveJobListings — job cards: title, location, pay range, employment type
   (Full-time/Part-time/Field/Office tags), "Apply Now" → opens a Modal with a
   resume-upload apply form (React Hook Form + Zod: name, email, phone, resume file,
   cover note). Mock-submit with a success state UI.

3. Internships — listing cards (department, duration, stipend) + an apply form:
   Name, Email, College, Year, Interest Area, Resume upload.

4. VolunteerWithUs — short "Be part of something bigger" intro + sign-up form:
   Name, Email, Phone, City, Skills, Availability, Message.

5. JoinAsTrainer — registration form for trainers wanting to deliver IMPL
   programmes (name, email, phone, expertise area, certifications, experience
   summary, resume upload).

6. TendersRFP — reuse the same table component pattern from Projects: Tender Title |
   Issuing Body | Deadline | Download PDF.

All forms: client-side validated, accessible labels/error states, and a clear
success confirmation — but submission just logs the payload / shows a toast for now
(no real endpoint yet). Structure the form components so swapping in a real POST to
a Node API later is a one-line change per form.
```

---

## PHASE 9 — Contact Us + Final Polish Pass

```
PHASE 9A: Build /contact-us.

1. SendMessage — Name | Email | Message | Send button, client-validated, mock
   submit with success state (note: real flow will trigger an auto-acknowledgement
   email from the backend later).

2. OfficeDetails — two-column: Registered Office (A-494, Shahpura, Bhopal, MP
   462012) and Corporate/Head Office (E-4/230, Arera Colony, Bhopal, MP 462016),
   plus phone, landline/fax, email(s), HR email placeholder.

3. GoogleMapEmbed — embedded map pinned to the Head Office address (use a static
   iframe embed for now; no API key wiring required yet — placeholder embed is fine).

4. SocialMediaLinks — icon row (Instagram, LinkedIn, YouTube, Facebook, X/Twitter,
   Website) linking to the URLs in the content document (mark any "[to be
   provided]" ones as placeholder hrefs).

5. ExploreCareersCTA — closing banner: "Looking for opportunities? We're hiring." +
   "See Open Roles" → /careers.

PHASE 9B: Site-wide polish pass.
- Run through every page and add per-page Metadata (title, description) via the
  Next.js Metadata API — write real, specific descriptions per page, not generic
  boilerplate.
- Add sitemap.ts and robots.ts (Next.js conventions) covering all static + dynamic
  routes.
- Audit color contrast (navy-on-offwhite, white-on-saffron) against WCAG AA.
- Add loading.tsx skeletons for the Projects and Gallery routes (they're the
  heaviest/most dynamic).
- Add a not-found.tsx (404) styled consistently with the brand.
- Verify all images use next/image with explicit width/height or fill + sizes, and
  that below-the-fold images are lazy-loaded.
- Test the full nav flow, mobile drawer, all filters/tabs/accordions, and every
  modal's keyboard/focus trap behavior.
- Run a Lighthouse pass (mobile) and fix anything scoring below ~90 on Performance
  and Accessibility.

Deliverable: a complete, coherent, responsive Next.js frontend covering every page
in the site architecture, ready for backend (Node.js + MySQL) wiring in the next
project phase.
```

---

## PHASE 10 — Sub-Page Templates (Project Pages & State Pages)

```
PHASE 10: Build the two reusable sub-page templates referenced from Projects.

A) Individual Project Page — /app/(site)/projects/[slug]/page.tsx
   Sections, in order, driven by a single project object from /lib/data/projects.ts:
   1. About the Project — programme name, issuing ministry/body, 2-paragraph description
   2. Our Experience — states covered, candidates trained, centres operational, key
      outcomes (as a stat strip)
   3. Methodology — how IMPL delivers this project (RPL / bridge course /
      certification pathway — short explanatory copy)
   4. Gallery — 4–6 photos specific to this project (reuse lightbox component)
   5. Testimonials — 1–2 quotes from candidates of this specific programme
   6. Related Programs — 2–3 cards linking to other project slugs

   Build this as ONE template component that takes a typed `Project` object as
   props, so every project page is generated by filling data fields, never by
   writing new JSX per project.

B) Statewise Experience Page — /app/(site)/projects/state/[slug]/page.tsx
   1. Hero — state name + banner photo from a programme in that state
   2. Summary stat strip — total candidates trained, total projects, active centres
   3. Project list table — project name, year, candidates, outcomes (responsive,
      collapses to cards on mobile)
   4. Gallery — 3–4 photos from programmes in that state
   5. "Partner With Us in [State]" CTA button → /contact-us

   Same rule: one template driven by a typed `StateProfile` object. Seed
   /lib/data/states.ts with 5–7 launch states first (Madhya Pradesh, Bihar,
   Maharashtra, Uttar Pradesh, Rajasthan) — structure the data file so adding a new
   state later is just appending an object, not writing new components.

Both templates should generate their metadata (title/description) dynamically from
the project/state name using generateMetadata().
```

---

## Notes for Whoever Runs This With the Agent

- **Run phases strictly in order.** Phase 2+ assumes the UI kit and layout from Phase 1 exist — skipping ahead will cause the agent to re-invent components inconsistently.
- **Feed the logo file to the agent** at the start of Phase 1 (`/public/logo.png`) so it can sample/confirm the exact brand colors rather than guessing from the hex codes alone.
- **Review after every phase**, especially Phase 2 (Homepage) and Phase 1 (design system) — these set patterns every later phase will copy. Mistakes here compound.
- **Mock data is intentional, not a shortcut** — it's shaped to match the future MySQL schema so your Node/MySQL backend phase becomes "replace the fetch, not the component."
- When you're ready for the backend, the natural next document is a matching **Node.js + MySQL API contract** (routes, schema, auth for the admin/CMS panel) — happy to draft that as a Phase 11+ once the frontend is stable.
