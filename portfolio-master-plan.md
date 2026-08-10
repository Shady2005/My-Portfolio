# Portfolio Website — Master Plan
**Owner:** Shady Hawwary
**Role:** Backend Developer
**Objective:** Showcase backend expertise through a clean, modern, secure frontend — featuring projects, certifications, and a contact form.

---

## Tech Stack (Finalized)
- **Framework:** React (Vite)
- **Styling:** Bootstrap 5 via `react-bootstrap` (npm install, not CDN — avoids jQuery/DOM conflicts with React's virtual DOM)
- **Contact form backend:** EmailJS integration (structure built to accept Service ID / Template ID / Public Key)
- **Dark mode:** Included — toggle in navbar, React state-managed (localStorage persistence flagged as optional in Phase 3)

---

## Key Sections & Specifications

### 1. Hero / About Me
- Modern bio and summary as a Backend Developer
- Styled placeholder for professional photo
- Social icons (LinkedIn, GitHub, WhatsApp) — all `target="_blank" rel="noopener noreferrer"`

### 2. Projects Section
- Responsive project cards
- Two action buttons per card: **Live Demo** and **View Code** (GitHub repo link)

### 3. Certifications & Internships
- Card or timeline layout for certificates, courses, internship experience

### 4. Contact Me
- Functional contact form: Name, Email, Subject, Message
- Frontend validation (required fields, email format, message length)

### 5. Responsiveness
- Fully adaptable across mobile, tablet, laptop, desktop

---

## Execution Rule (Strict)
Development proceeds **phase by phase**. No phase's code is written until explicit confirmation ("Proceed to Phase X") is given.

---

## Phase Breakdown

### Phase 1 — Architecture & Setup
- Vite + React scaffolding
- Folder structure: `components/`, `sections/`, `assets/`, `data/`, `utils/`
- Install Bootstrap + `react-bootstrap`
- Base layout shell (single-page scroll with section nav)
- Global design tokens: color palette, typography, spacing (technical/clean aesthetic)

### Phase 2 — Core Components & Sections
- Navbar (sticky, responsive, smooth-scroll links, dark mode toggle)
- Hero/About Me (bio, photo placeholder, social icons)
- Projects section (card component, data-driven from `projects.js`)
- Certifications & Internships (timeline or card layout)
- Contact Form (structure only, no validation/logic yet)
- Footer

### Phase 3 — Styling & Responsiveness
- Full visual polish across all sections
- Breakpoint testing: mobile (<640px), tablet (640–1024px), laptop (1024–1440px), desktop (1440px+)
- Hover/focus states, transitions, micro-interactions
- Dark mode styling + persistence decision (localStorage)

### Phase 4 — Functionality Layer
- Contact form client-side validation (required fields, email format, message length)
- EmailJS integration for form submission
- Smooth-scroll navigation logic, active-link highlighting

### Phase 5 — Security & Performance Audit
- Input sanitization on contact form (XSS prevention, no unescaped rendering)
- Audit all external links for `target="_blank" rel="noopener noreferrer"`
- Lazy loading for images (`loading="lazy"` / React lazy+Suspense where relevant)
- Re-render optimization (memoization, avoiding unnecessary state lifts)
- Cross-browser sanity check (Flexbox/Grid fallbacks, Safari quirks)
- Accessibility pass (semantic HTML, alt text, keyboard nav, ARIA)

### Phase 6 — Final Review & Handoff
- Full code walkthrough
- Deployment notes (Vercel/Netlify recommendations, build config)
- Summary of security/performance decisions made

---

## Status
- [x] Master Plan approved
- [x] Phase 1: Architecture & Setup
- [x] Phase 2: Core Components & Sections
- [x] Phase 3: Styling & Responsiveness
- [x] Phase 4: Functionality Layer
- [x] Phase 5: Security & Performance Audit
- [x] Phase 6: Final Review & Handoff
