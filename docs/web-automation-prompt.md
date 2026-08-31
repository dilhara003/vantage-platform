# Vantage — Web Automation Prompt

Paste the prompt below into Cursor (Agents Window) to run a full end-to-end browser walkthrough of the Vantage prototype.

---

## Prompt (copy from here)

```
Run a full end-to-end browser automation test of the Vantage prototype.

## Prerequisites
1. Confirm the dev server is running at http://localhost:5173
   - If not running: `cd apps/web && npm run dev`
2. Use browser automation tools (navigate, snapshot, click, type, screenshot).
3. Take a screenshot after each major step and report pass/fail.

## Test plan

### 1. Landing page (`/`)
- Navigate to http://localhost:5173
- Verify the page title contains "Vantage"
- Verify headline: "Build Sri Lankan tech products with confidence"
- Verify all four module cards are visible:
  - Marketing
  - Product & Service Management
  - Regulatory Compliance
  - Infrastructure Readiness
- Verify each card has a "Try it →" button
- Screenshot: landing page

### 2. Marketing module (`/modules/marketing`)

**Intake**
- Click "Try it →" on the Marketing card (or navigate to `/modules/marketing`)
- Verify stepper shows: Intake → Assessment → Report (Intake active)
- Fill intake form:
  - Product name: `LankaPay Merchant`
  - Category: `Fintech`
  - Target audience: `Colombo-based small business owners`
  - Monthly budget: `LKR 100,000`
- Click "Start assessment →"
- Screenshot: marketing intake complete

**Assessment (5 questions)**
- For each of the 5 questions, select the first available option and click "Next →"
- On the last question, click "See report"
- Wait for the analyzing screen, then wait until the report loads
- Screenshot: marketing report

**Report assertions**
- Verify "Marketing Report" heading is visible
- Verify classification badge (Foundational / Developing / Advanced)
- Verify sections: Classification, Competitive landscape, What to plan for, Recommended budget split, Schedule a consultation
- Verify budget chart renders (bar chart with channel names)
- Click a consultation time slot and verify confirmation message appears
- Screenshot: marketing report with slot booked

### 3. Product module (`/modules/product`)

- Navigate to `/` then click "Try it →" on Product & Service Management
- Verify stepper: Intake → Validation → Report
- Select product stage: `Needs Improvement`
- Enter description: `A mobile payment app for Sri Lankan SMEs`
- Click "Continue →"
- Answer all 5 validation questions (select first option each, click Next →)
- On last question click "See report"
- Wait for analyzing screen, then report
- Verify: SWOT Analysis grid (Strengths, Weaknesses, Opportunities, Threats)
- Verify: "Market blockers" and "Market research guidance" panels
- Screenshot: product report

### 4. Regulatory module (`/modules/regulatory`)

- Navigate to `/modules/regulatory`
- Verify stepper: Intake → Report
- Check: `Payments & financial transactions`
- Check: `Personal data collection`
- Click "Check compliance →"
- Wait for analyzing screen, then report
- Verify "Compliance Report" heading
- Verify regulation rows with status badges (Required / Recommended / Not applicable)
- Type `PDPA` in the search box and verify the list filters
- Clear search and verify "What to plan for" section is visible
- Screenshot: regulatory report

### 5. Infrastructure module (`/modules/infrastructure`)

- Navigate to `/modules/infrastructure`
- Verify stepper: Intake → Report
- Select user count: `10,000 – 100,000 users`
- Select hosting: `No hosting yet`
- Select budget: `Under LKR 25,000/month`
- Click "Assess readiness →"
- Wait for analyzing screen, then report
- Verify readiness score (0–100 number) and progress bar
- Verify "Infrastructure gaps" bullet list
- Verify "3-step scalability plan" with steps 1, 2, 3
- Screenshot: infrastructure report

### 6. Navigation & shell
- From any module, click "All modules" in the header → should return to landing
- Click the VANTAGE logo in the header → should return to landing
- Screenshot: back on landing page

## Output format

Return a test report with:
1. Summary table: Step | Status (PASS/FAIL) | Notes
2. Any screenshots taken (describe what each shows)
3. List of bugs or UI issues found (if any)
4. Overall verdict: READY FOR DEMO / NEEDS FIXES

## Rules
- Do not modify any source code unless a test fails due to a clear bug
- If an element is not found, take a snapshot and describe what you see
- Wait up to 3 seconds for analyzing/loading screens before failing
- If localhost:5173 is unreachable, start the dev server and retry once
```

---

## Variants

### Quick smoke test (5 min)

```
Smoke-test the Vantage prototype at http://localhost:5173.
Visit `/`, then each module route (`/modules/marketing`, `/modules/product`, `/modules/regulatory`, `/modules/infrastructure`).
On each page, verify the module heading loads and take one screenshot.
Complete only the Marketing intake + first assessment question as a deeper check.
Report PASS/FAIL per route.
```

### Pre-presentation demo run (10 min)

```
Dry-run the Vantage demo at http://localhost:5173 for a presentation.
Follow the happy path through all four modules with realistic demo data:
- Marketing: "LankaPay Merchant", fintech, complete all 5 questions, book a consultation slot
- Product: "Needs Improvement", complete validation, show SWOT
- Regulatory: payments + personal data, search "PDPA"
- Infrastructure: no hosting, 10k users, show low readiness score
Take screenshots at each report screen. Flag anything that looks broken, misaligned, or unfinished for a projector demo.
```

### CI-style regression (after code changes)

```
Regression test Vantage at http://localhost:5173 after recent changes.
Run the full test plan in docs/web-automation-prompt.md.
Compare report sections and navigation against expected behavior.
If any step fails, identify the file likely responsible under apps/web/src/ and suggest a minimal fix.
```
