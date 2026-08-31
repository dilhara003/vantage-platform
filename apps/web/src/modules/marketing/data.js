export const literacyQuestions = [
  {
    id: 'q1',
    question: 'How would you describe your target customer\'s comfort with technology?',
    options: [
      { value: 'low', label: 'Low — needs hand-holding and simple interfaces', score: 1 },
      { value: 'medium', label: 'Medium — uses smartphones and common apps daily', score: 2 },
      { value: 'high', label: 'High — early adopters, comfortable with new tools', score: 3 },
    ],
  },
  {
    id: 'q2',
    question: 'What is your primary customer acquisition channel today?',
    options: [
      { value: 'word', label: 'Word of mouth / referrals only', score: 1 },
      { value: 'social', label: 'Social media (Facebook, Instagram, TikTok)', score: 2 },
      { value: 'paid', label: 'Paid digital ads + content marketing', score: 3 },
    ],
  },
  {
    id: 'q3',
    question: 'How well do you understand your competitor landscape?',
    options: [
      { value: 'none', label: 'Haven\'t mapped competitors yet', score: 1 },
      { value: 'some', label: 'Know 2–3 direct competitors informally', score: 2 },
      { value: 'deep', label: 'Tracked pricing, features, and positioning', score: 3 },
    ],
  },
  {
    id: 'q4',
    question: 'How do you currently measure marketing effectiveness?',
    options: [
      { value: 'none', label: 'No formal measurement', score: 1 },
      { value: 'basic', label: 'Track followers and basic engagement', score: 2 },
      { value: 'advanced', label: 'CAC, conversion rates, and channel ROI', score: 3 },
    ],
  },
  {
    id: 'q5',
    question: 'What is your monthly marketing budget range (LKR)?',
    options: [
      { value: 'under50k', label: 'Under 50,000', score: 1 },
      { value: '50to200k', label: '50,000 – 200,000', score: 2 },
      { value: 'over200k', label: 'Over 200,000', score: 3 },
    ],
  },
];

export const classifications = {
  foundational: {
    label: 'Foundational',
    variant: 'ochre',
    description:
      'Your marketing readiness is at an early stage. Focus on understanding your audience and establishing baseline channels before scaling spend.',
  },
  developing: {
    label: 'Developing',
    variant: 'navy',
    description:
      'You have foundational awareness but gaps in measurement and competitive positioning. Structured channel planning will accelerate growth.',
  },
  advanced: {
    label: 'Advanced',
    variant: 'orange',
    description:
      'Strong marketing fundamentals. Optimize budget allocation across channels and invest in data-driven iteration.',
  },
};

export const competitors = [
  {
    name: 'PickMe / Uber Eats',
    note: 'Dominant delivery platforms with established user bases in Colombo and suburbs.',
    gap: 'Hyper-local niche targeting and community-driven onboarding.',
  },
  {
    name: 'Kapruka',
    note: 'Long-standing e-commerce brand with nationwide delivery infrastructure.',
    gap: 'Modern UX, mobile-first experience, and social commerce integration.',
  },
  {
    name: 'Direct WhatsApp sellers',
    note: 'Informal competitors using personal networks and group chats.',
    gap: 'Trust signals, payment integration, and professional brand presence.',
  },
];

export const planForItems = [
  'Define a clear value proposition for non-tech-savvy users in Sinhala and Tamil.',
  'Start with one high-intent channel (Facebook or Instagram) before diversifying.',
  'Set up basic analytics: track sign-ups, cost per acquisition, and retention.',
  'Run a 4-week competitor content audit to identify messaging gaps.',
  'Allocate 60% of budget to proven channels, 40% to experimentation.',
];

export const budgetPlans = [
  { channel: 'Social Media Ads', pct: 35, amount_lkr: 70000, rationale: 'Highest reach for Sri Lankan SME audiences' },
  { channel: 'Content & SEO', pct: 25, amount_lkr: 50000, rationale: 'Build long-term organic discovery' },
  { channel: 'Influencer / Community', pct: 20, amount_lkr: 40000, rationale: 'Trust-building in local networks' },
  { channel: 'Email & Retention', pct: 10, amount_lkr: 20000, rationale: 'Re-engage existing users cost-effectively' },
  { channel: 'Events & Partnerships', pct: 10, amount_lkr: 20000, rationale: 'Offline credibility and B2B leads' },
];

export const timeSlots = [
  'Mon 10:00 AM',
  'Mon 2:00 PM',
  'Tue 11:00 AM',
  'Wed 3:00 PM',
  'Thu 10:00 AM',
  'Fri 9:00 AM',
];

export function getClassification(answers) {
  const total = Object.values(answers).reduce((sum, score) => sum + (score || 0), 0);
  if (total <= 7) return classifications.foundational;
  if (total <= 11) return classifications.developing;
  return classifications.advanced;
}

export function getClassificationKey(answers) {
  const total = Object.values(answers).reduce((sum, score) => sum + (score || 0), 0);
  if (total <= 7) return 'foundational';
  if (total <= 11) return 'developing';
  return 'advanced';
}
