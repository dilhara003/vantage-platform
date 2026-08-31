# Vantage — Smart Consulting Platform

**J26-ISE-313** · A smart consulting platform that assesses Sri Lankan tech products across marketing, product validation, regulatory compliance, and infrastructure readiness — before and after launch.

## What this is

A clickable frontend prototype for presentation. All data is mocked — no backend, no LLM, no live Supabase yet.

| Module | Route | Status |
|---|---|---|
| Marketing | `/modules/marketing` | Fully interactive |
| Product & Service Management | `/modules/product` | UI stub with mock report |
| Regulatory Compliance | `/modules/regulatory` | UI stub with mock report + search |
| Infrastructure Readiness | `/modules/infrastructure` | UI stub with mock report |

## Quick start

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the landing page lists all four modules.

## Repo structure

```
vantage-platform/
├── apps/web/              # React + Vite frontend
├── docs/
│   ├── proposal/          # Project proposal documents
│   └── architecture/      # Architecture diagrams
├── supabase/              # Empty — migrations added later
└── vantage-project-plan.md
```

## Tech stack (this sprint)

- React 18 + Vite
- Tailwind CSS (utility classes only)
- React Router
- lucide-react icons
- recharts charts
- Mock data in per-module `data.js` files

## What comes next

- Supabase (Postgres + pgvector) for auth and assessment history
- FastAPI backend per module
- Gemini 2.5 Flash + embeddings RAG pipeline
- AHPy engine for marketing channel ranking

## Team

| Module | Owner |
|---|---|
| Marketing | Harshana |
| Product & Service Management | Pathirage |
| Regulatory Compliance | Wijesooriya |
| Infrastructure Readiness | Singappuli |
