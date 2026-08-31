export const productStages = [
  {
    value: 'proposed',
    label: 'Proposed',
    description: 'Idea stage — validating the concept before building.',
  },
  {
    value: 'needs_improvement',
    label: 'Needs Improvement',
    description: 'Live product with traction gaps or retention issues.',
  },
  {
    value: 'failed',
    label: 'Failed',
    description: 'Launched but did not achieve product-market fit.',
  },
];

export const validationQuestions = [
  {
    id: 'v1',
    question: 'Have you conducted structured customer interviews?',
    options: [
      { value: 'no', label: 'Not yet' },
      { value: 'informal', label: 'Informal conversations only' },
      { value: 'yes', label: '10+ structured interviews completed' },
    ],
  },
  {
    id: 'v2',
    question: 'Do you have a clear pricing signal from the market?',
    options: [
      { value: 'no', label: 'No pricing decided' },
      { value: 'guess', label: 'Based on competitor guesswork' },
      { value: 'validated', label: 'Validated through willingness-to-pay tests' },
    ],
  },
  {
    id: 'v3',
    question: 'What is your 30-day user retention rate?',
    options: [
      { value: 'unknown', label: 'Not tracked' },
      { value: 'low', label: 'Under 20%' },
      { value: 'healthy', label: 'Over 40%' },
    ],
  },
  {
    id: 'v4',
    question: 'How do you prioritize feature development?',
    options: [
      { value: 'gut', label: 'Founder intuition' },
      { value: 'requests', label: 'Customer requests / support tickets' },
      { value: 'data', label: 'Usage data and cohort analysis' },
    ],
  },
  {
    id: 'v5',
    question: 'Have you defined your core value metric?',
    options: [
      { value: 'no', label: 'No single metric defined' },
      { value: 'vanity', label: 'Tracking sign-ups or downloads only' },
      { value: 'northstar', label: 'Clear north-star metric tied to value delivery' },
    ],
  },
];

export const swotByStage = {
  proposed: {
    strengths: ['Fresh market opportunity', 'No legacy technical debt', 'Flexible pivot options'],
    weaknesses: ['Unvalidated assumptions', 'No user data yet', 'Limited team resources'],
    opportunities: ['First-mover in niche segment', 'Growing digital adoption in Sri Lanka', 'Government SME digitization push'],
    threats: ['Established incumbents', 'Long sales cycles for B2B', 'Currency volatility affecting pricing'],
  },
  needs_improvement: {
    strengths: ['Existing user base', 'Product already in market', 'Real usage feedback'],
    weaknesses: ['Retention below benchmark', 'Feature bloat without focus', 'Unclear positioning'],
    opportunities: ['Upsell to existing users', 'Partnership with local distributors', 'Expand to regional markets'],
    threats: ['Competitors copying features', 'Churn to free alternatives', 'Rising customer acquisition costs'],
  },
  failed: {
    strengths: ['Lessons learned from launch', 'Existing brand awareness', 'Technical foundation built'],
    weaknesses: ['Damaged market trust', 'Sunk cost bias', 'Team morale impact'],
    opportunities: ['Pivot to adjacent problem', 'Acquire competitor assets cheaply', 'Open-source core and pivot to services'],
    threats: ['Reputation damage', 'Investor fatigue', 'Key talent departure'],
  },
};

export const marketBlockers = [
  'Low digital payment adoption in target rural segments limits conversion.',
  'Price sensitivity — LKR pricing must account for purchasing power parity vs. global SaaS benchmarks.',
  'Trust deficit for new local tech brands without social proof or local case studies.',
];

export const researchGuidance = [
  'Run 15 customer discovery interviews in Sinhala and Tamil before committing to a feature roadmap.',
  'Benchmark pricing against 3 local and 2 regional competitors using a Van Westendorp price sensitivity survey.',
  'Track weekly cohort retention for 8 weeks to identify the activation moment that predicts long-term usage.',
];
