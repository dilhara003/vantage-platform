# AI Marketing Predictor — Web Validation Prompt

Paste the prompt below into Cursor (Agents Window) to validate the prototype after changes.

---

## Full validation prompt (copy from here)

```
Run a full web validation of the AI Marketing Predictor prototype.

## Prerequisites
1. Start the dev server if needed: `cd apps/web && npm run dev`
2. Open http://localhost:5173 — the app should load directly into the intake screen (no landing page, no module picker).
3. Use browser automation (navigate, snapshot, click, type, fill, screenshot).
4. Report PASS/FAIL per step with a screenshot at each major checkpoint.

## Branding checks
- Page title contains "AI Marketing Predictor"
- Header shows "AI MARKETING PREDICTOR"
- Subtitle: "AI-powered marketing strategy for Sri Lankan tech products."
- No references to "Vantage" on the main flow (except scheduling panel if unchanged)

## Step 1 — Intake (direct load)
- Verify stepper shows: Intake → Assessment → Analyzing → Report (Intake active)
- Verify fields: Product name, Product category, Target audience, Monthly marketing budget
- Verify category dropdown has exactly 8 options:
  Software / SaaS, FinTech, E-commerce, Healthcare Technology, Education Technology,
  Artificial Intelligence, Cybersecurity, Other
- Fill intake:
  - Product name: `LankaPay Merchant`
  - Category: `FinTech`
  - Target audience: `Colombo-based small business owners`
  - Budget: `LKR 100,000`
- Click "Start assessment →"
- Screenshot: intake complete

## Step 2 — Assessment (6 groups)

Complete all 6 groups with realistic demo data. Use first valid option where not specified.

### Group 1 — About the product
- Q1 should be pre-filled with `LankaPay Merchant` (editable)
- Description: `Mobile payment platform for Sri Lankan SMEs`
- Problem: `Slow, expensive payment collection for small merchants`
- Features (tags): add `QR payments`, `Merchant dashboard` (Enter to add chips)
- Q5 industry pre-filled as FinTech
- Competitors: `PayHere, FriMi, Direct bank transfers`
- Click Next →

### Group 2 — Target customer
- Primary target: `Small retail shop owners in Colombo`
- B2B/B2C: `Both`
- Age: `25–34`
- Occupation: select `Business owner` and `Manager`
- Location: `Colombo`
- Click Next →

### Group 3 — Technical comfort
- Comfort: `Medium`
- Familiarity: `Moderately familiar`
- Detail level: `Balanced technical and simple`
- Message type: `Simple benefits and outcomes`
- Click Next →

### Group 4 — Messaging & goals
- Main benefit: `Accept payments instantly without a POS machine`
- Pain points (tags): `High fees`, `Slow settlements`
- Primary action: `Sign up`
- Click Next →

### Group 5 — Channels
- Currently using: `Facebook`, `Instagram`
- Worked best: `Facebook`
- Underperformed: `Instagram` (optional)
- Content type: `Short videos`
- Click Next →

### Group 6 — Budget & campaign
- Q23 budget pre-filled (verify matches intake — edit to `100000` if needed)
- Flexibility: `Moderately flexible`
- Duration: `3 months`
- Success metrics: `More leads`, `More sales`
- Click "See report →"
- Screenshot: last assessment group

## Step 3 — Analyzing screen
- Verify stepper shows Analyzing as active step
- Verify spinner/text: "Analyzing your marketing readiness…"
- Wait up to 3 seconds for report to load
- Screenshot: analyzing (if visible)

## Step 4 — Report validation

### Header & audience
- Verify "Marketing Report" heading
- Verify product name and industry shown (LankaPay Merchant · FinTech)
- Verify classification badge: Non-Technical / Semi-Technical / Highly Technical
- Verify audience profile strip with chips (target, B2B/B2C, age, role, location)

### Classification panel
- Verify classification description text
- Verify technical literacy score breakdown (3 segments, total out of 12)
- For Group 3 answers above, expect Semi-Technical (scores 2+2+2=6)

### Messaging guidance
- Verify messaging panel references "simple benefits and outcomes"
- Verify one-line example message is shown

### Competitors
- Verify competitor panel uses user-entered names (PayHere, FriMi, etc.) — NOT the mock PickMe/Kapruka list

### Budget panel
- Verify pie chart renders (not bar chart)
- Verify legend and percentage labels
- Verify table below with channel, %, LKR amount, and rationale
- Verify badges: "Moderately flexible" and "3 months"
- Verify tags: primary action "Sign up" and success metrics "Leads", "Sales"
- Screenshot: full report (scroll if needed)

### Scheduling
- Verify "Schedule a consultation" panel unchanged
- Click a time slot and verify booking confirmation message
- Screenshot: consultation booked

## Step 5 — Navigation regression
- Confirm there is NO landing page, NO "All modules" link, NO other module routes
- Visiting `/modules/product` or `/modules/marketing` should not load old multi-module UI (404 or redirect to `/` is acceptable)

## Output format

Return a table:

| Step | Status (PASS/FAIL) | Notes |
|------|-------------------|-------|

Then:
1. List any bugs or UI issues found
2. Note anything that looks broken on scroll or mobile-width viewport
3. Overall verdict: **READY FOR DEMO** or **NEEDS FIXES**

## Rules
- Do not modify source code unless a test fails due to a clear bug
- If an element is missing, take a snapshot and describe what you see
- Wait up to 3s for analyzing/loading screens before failing
- If localhost:5173 is unreachable, start the dev server and retry once
```

---

## Quick smoke test (3 min)

```
Smoke-test AI Marketing Predictor at http://localhost:5173.
Verify: branding header, intake loads directly, category has 8 options.
Fill product name, start assessment, complete Group 1 only, verify pre-filled Q1 and Q5.
Report PASS/FAIL for each check.
```

## Pre-demo validation (8 min)

```
Pre-demo validation for AI Marketing Predictor at http://localhost:5173.
Run the happy path: intake → all 6 assessment groups → report.
Verify pie chart, audience chips, custom competitors, classification score, and consultation booking.
Flag anything that would look broken on a projector.
```
