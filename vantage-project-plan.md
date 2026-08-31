# Vantage — Project Plan (J26-ISE-313)

A Smart Consulting Platform for Sri Lankan Technology Product Success. Evaluates
Marketing, Product & Service Management, Regulatory Compliance, and Infrastructure
Readiness to identify risks and give customized recommendations before and during
product development.

This document is the build plan for the team repo. Paste the "Cursor Prompts"
section near the bottom directly into Cursor to start scaffolding.

---

## 1. Scope for this sprint (next 2 days)

Goal: a clickable, believable **frontend prototype** for presentation — not a
production system. No real backend calls, no real LLM calls, no live Supabase yet.

| Module | Owner | Status in this sprint |
|---|---|---|
| Marketing (technical literacy, competitors, budget split, scheduling) | Harshana | Fully interactive — already built as reference (`vantage-prototype.jsx`) |
| Product & Service Management (SWOT, market blockers) | Pathirage | UI stub with mock report |
| Regulatory Compliance (pre-build risk checker) | Wijesooriya | UI stub with mock report |
| Infrastructure Readiness (readiness score, scalability plan) | Singappuli | UI stub with mock report |

"UI stub" = real screens, real layout, real interaction, but the report content is
hardcoded/mocked rather than generated. That's enough to demo the full platform
story end to end without four separate backends in two days.

**What comes after this sprint** (do not build yet, but design so it fits):
- Supabase as the shared database (project owner: `hkcars2114@gmail.com` —
  someone on the team needs to create this Supabase project manually; account
  creation isn't something to script or automate)
- FastAPI backend per module, per the architecture diagrams
- Gemini 2.5 Flash + Gemini Embeddings + pgvector RAG pipeline
- AHP engine (AHPy) for channel ranking

---

## 2. Tech stack

**Now (this sprint)**
- React 18 + Vite
- Tailwind CSS (core utility classes)
- React Router for the 4 module routes + shared shell
- `lucide-react` for icons
- `recharts` for charts
- All data mocked in `src/lib/mockData.js` — no network calls

**Later**
- Supabase (Postgres + pgvector) — auth, product records, assessment history
- FastAPI services (one per module, matching the architecture diagrams)
- Google Gemini API (2.5 Flash + embeddings)
- AHPy for the marketing channel-ranking engine

---

## 3. Repo structure

```
vantage/
├── README.md
├── docs/
│   ├── proposal/              <- drop the project proposal PDF/DOCX here
│   └── architecture/          <- Architecture.jpg + any other diagrams
├── apps/
│   └── web/                   <- the only app this sprint
│       ├── index.html
│       ├── package.json
│       ├── vite.config.js
│       ├── tailwind.config.js
│       └── src/
│           ├── main.jsx
│           ├── App.jsx                 <- routes + shared shell (header, stepper)
│           ├── theme.js                <- shared design tokens (colors, fonts)
│           ├── components/             <- shared UI: buttons, panels, Stepper, Field
│           ├── modules/
│           │   ├── marketing/
│           │   │   ├── MarketingFlow.jsx
│           │   │   └── data.js         <- questions, competitors, budget plans
│           │   ├── product/
│           │   │   ├── ProductFlow.jsx
│           │   │   └── data.js
│           │   ├── regulatory/
│           │   │   ├── RegulatoryFlow.jsx
│           │   │   └── data.js
│           │   └── infrastructure/
│           │       ├── InfrastructureFlow.jsx
│           │       └── data.js
│           └── pages/
│               ├── Landing.jsx         <- picks which module to demo
│               └── ModulePage.jsx
└── supabase/                  <- empty for now; migrations added later
```

Keeping all four modules inside one React app (not four separate apps) is the
right call for a 2-day prototype — one build, one deploy, one thing to demo from.

---

## 4. Shared design system

Reuse exactly what's in `vantage-prototype.jsx` so all four modules look like one
product, not four hackathon projects glued together:

- **Background:** `#FAF6ED` (cream) · **Panels:** `#FFFFFF` bordered `#E3D9C6`
- **Text:** ink `#241F1B`, soft ink `#5B554C`, muted `#A69C89`
- **Accent:** orange `#DD5B35` (primary actions, active states), dark orange `#B33F1F`
- **Classification colors** (functional, not decorative): navy `#2E4057`,
  ochre `#B8862E`, orange `#DD5B35`
- **Type:** `Archivo Black` for headlines/hero numbers, `Space Grotesk` for body/UI
- **Shape language:** thin 1px borders, sharp/minimal corners, small square bullet
  glyphs — a "blueprint" feel that echoes the architecture diagrams, not rounded
  SaaS cards with shadows

Put these in `apps/web/src/theme.js` as a single exported object so every module
imports the same tokens instead of redefining colors.

---

## 5. Module UI requirements

### Marketing (reference build — already done)
Intake → 5-question technical literacy assessment → analyzing screen → report
(classification, competitors, "what to plan for", budget split chart, interview
scheduling). Use `vantage-prototype.jsx` as the source and split it into the
`modules/marketing/` structure above.

### Product & Service Management
- Intake: product stage (Proposed / Needs Improvement / Failed) + short description
- 4–5 mock questions about customer validation, pricing signal, retention
- Report: SWOT grid (4 quadrants), 3 bullet "market blockers", 3 bullet
  "market research guidance"

### Regulatory Compliance
- Intake: what the product touches (payments / personal data / health data / none)
- Report: a checklist-style panel — each row is a regulation (PDPA, Inland
  Revenue Act, Central Bank reporting, etc.), status badge (Required / Not
  applicable / Recommended), one-line explanation
- Searchable list view as a bonus if time allows (matches "searchable Sri Lanka
  regulatory database" from the proposal)

### Infrastructure Readiness
- Intake: expected user count, hosting today (none / shared hosting / cloud),
  budget for infra
- Report: a readiness score (0–100) with a gauge or bar, a gap list ("no backup
  strategy", "no autoscaling"), and a simple 3-step scalability plan

Each module's report screen should visually echo the Marketing module's report
(same panel style, same "what to plan for" pattern) so switching between modules
in the demo feels like one platform.

---

## 6. Landing page

A single page listing the four modules as cards (Marketing / Product / Regulatory
/ Infrastructure), each with a one-line description and a "Try it" button that
routes into that module's flow. This is the screen you open the demo on — it's
what sells "this is one integrated platform," even though only Marketing (and
whatever stubs get finished) are fully wired.

---

## 7. Data model draft (for later Supabase work — do not build yet)

```
products
  id, name, category, description, target_audience, monthly_budget_lkr, created_at

assessments
  id, product_id, module ('marketing'|'product'|'regulatory'|'infrastructure')
  answers (jsonb), score, classification, created_at

competitors
  id, product_id, name, note, gap

budget_plans
  id, product_id, channel, pct, amount_lkr, rationale

sessions
  id, product_id, scheduled_at, status
```

This is just so the mock data shapes in `data.js` for each module already look
like what will eventually come from Supabase — makes the later migration
mechanical instead of a rewrite.

---

## 8. Two-day milestone plan

**Day 1**
- Morning: scaffold repo (Cursor Phase 1 prompt below), get Marketing module
  ported in and working end to end
- Afternoon: build Product & Regulatory module stubs
- Evening: build Infrastructure module stub, landing page wired to all four

**Day 2**
- Morning: visual pass — consistent spacing, fix anything that looks unfinished,
  test on the actual presentation laptop/projector
- Midday: add the proposal PDF + architecture diagram into `docs/`, write the
  README
- Afternoon: dry run the demo end to end at least twice, buffer for fixes
- Evening: done, don't touch it again before presenting

---

## 9. Cursor prompts

Use these as two separate messages in Cursor — scaffold first, then implement.
This matches the two-phase approach already used on the other Expace projects.

### Phase 1 — Scaffold

```
Scaffold a new React + Vite + Tailwind project for a project called "Vantage".

Repo layout:
- apps/web as the React app (Vite, Tailwind, React Router)
- docs/proposal and docs/architecture as empty folders with a .gitkeep
- supabase/ as an empty folder with a .gitkeep
- A root README.md with the project description (I'll provide the content)

Inside apps/web/src, create this structure with empty placeholder files:
- theme.js
- App.jsx
- components/ (Stepper.jsx, Field.jsx, Panel.jsx)
- modules/marketing/, modules/product/, modules/regulatory/,
  modules/infrastructure/ — each with a Flow.jsx and data.js
- pages/Landing.jsx, pages/ModulePage.jsx

Install: react-router-dom, lucide-react, recharts.

Set up Tailwind with only core utility classes (no arbitrary value / JIT-only
classes anywhere in the project — I'll be using inline styles for custom brand
colors instead of arbitrary Tailwind classes).

Don't implement any feature logic yet — just get the project running with a
placeholder landing page that says "Vantage" and confirms the dev server works.
```

### Phase 2 — Implement

```
Here is a working single-file React prototype of the Marketing module
(vantage-prototype.jsx, attached/pasted below). Port it into the existing repo
structure:

- Move the design tokens into src/theme.js and import them everywhere instead
  of redefining the color object per file
- Move the Stepper, Field, and panel-style components into src/components/ and
  reuse them across all four modules
- Split the Marketing-specific logic (questions, competitors, budget plans,
  scheduling) into src/modules/marketing/data.js and
  src/modules/marketing/MarketingFlow.jsx
- Wire it up at the route /modules/marketing

Then build three more module flows using the same visual language
(bordered panels, sharp corners, orange accent, Archivo Black headlines):

1. Product & Service Management (/modules/product) — intake asking for product
   stage (Proposed / Needs Improvement / Failed) and a short description, then
   a mocked report with a 4-quadrant SWOT grid and two bullet lists: "market
   blockers" and "market research guidance"

2. Regulatory Compliance (/modules/regulatory) — intake asking what the product
   touches (payments / personal data / health data / none of these), then a
   mocked report showing a checklist of Sri Lankan regulations (PDPA, Inland
   Revenue Act, Central Bank reporting) each with a status badge and one-line
   explanation

3. Infrastructure Readiness (/modules/infrastructure) — intake asking expected
   user count and current hosting setup, then a mocked report with a 0–100
   readiness score, a list of infrastructure gaps, and a 3-step scalability plan

Finally, build pages/Landing.jsx: four cards, one per module, each with a name,
one-line description, and a button that routes into that module's flow. This is
the screen the demo opens on.

Keep every module visually consistent with the Marketing reference — same
panel borders, same spacing scale, same type treatment. Don't introduce new
colors beyond what's in theme.js.
```

---

## 10. Notes

- Supabase project setup (creating the project, inviting `hkcars2114@gmail.com`
  as owner, generating keys) needs to happen manually through the Supabase
  dashboard by whoever owns that account — that's not something to script.
- Drop the uploaded proposal PDF and the Architecture.jpg into `docs/` once the
  repo exists, so Cursor has them as reference context for later phases (real
  backend, real RAG pipeline).
