export const industryOptions = [
  { value: 'software-saas', label: 'Software / SaaS' },
  { value: 'fintech', label: 'FinTech' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'healthcare', label: 'Healthcare Technology' },
  { value: 'edtech', label: 'Education Technology' },
  { value: 'ai', label: 'Artificial Intelligence' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'other', label: 'Other' },
];

export const marketingChannelOptions = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'google_ads', label: 'Google Ads' },
  { value: 'email', label: 'Email Marketing' },
  { value: 'website_seo', label: 'Website/SEO' },
  { value: 'none', label: 'None currently' },
];

export const channelToBudgetBucket = {
  facebook: 'Social Media Ads',
  instagram: 'Social Media Ads',
  linkedin: 'Social Media Ads',
  tiktok: 'Social Media Ads',
  youtube: 'Content & SEO',
  google_ads: 'Social Media Ads',
  email: 'Email & Retention',
  website_seo: 'Content & SEO',
};

export const budgetRationales = {
  'Social Media Ads': 'Highest reach for Sri Lankan audiences on social platforms',
  'Content & SEO': 'Build long-term organic discovery and thought leadership',
  'Influencer / Community': 'Trust-building in local networks and communities',
  'Email & Retention': 'Re-engage existing users cost-effectively',
  'Events & Partnerships': 'Offline credibility and B2B relationship building',
};

export const baselineWeights = {
  nonTechnical: {
    'Social Media Ads': 40,
    'Content & SEO': 20,
    'Influencer / Community': 25,
    'Email & Retention': 10,
    'Events & Partnerships': 5,
  },
  semiTechnical: {
    'Social Media Ads': 35,
    'Content & SEO': 25,
    'Influencer / Community': 20,
    'Email & Retention': 10,
    'Events & Partnerships': 10,
  },
  highlyTechnical: {
    'Social Media Ads': 25,
    'Content & SEO': 35,
    'Influencer / Community': 10,
    'Email & Retention': 15,
    'Events & Partnerships': 15,
  },
};

export const literacyScoreMaps = {
  q12: {
    very_low: 0,
    low: 1,
    medium: 2,
    high: 3,
    very_high: 4,
  },
  q13: {
    not_familiar: 0,
    slightly_familiar: 1,
    moderately_familiar: 2,
    very_familiar: 3,
    highly_familiar: 4,
  },
  q14: {
    very_simple: 0,
    mostly_simple: 1,
    balanced: 2,
    detailed: 3,
    highly_technical: 4,
  },
};

export const classifications = {
  nonTechnical: {
    label: 'Non-Technical',
    variant: 'ochre',
    description:
      'Your audience needs simple, benefit-led messaging. Focus on clear outcomes, visual demos, and channels where non-technical users already spend time.',
  },
  semiTechnical: {
    label: 'Semi-Technical',
    variant: 'navy',
    description:
      'Your audience understands common digital tools but appreciates balanced explanations. Mix benefit-led copy with light feature detail across proven channels.',
  },
  highlyTechnical: {
    label: 'Highly Technical',
    variant: 'orange',
    description:
      'Your audience is comfortable with technical depth. Lead with specifications, ROI data, and professional channels like LinkedIn and long-form content.',
  },
};

export const messagingGuidance = {
  simple_benefits: {
    label: 'Simple benefits and outcomes',
    guidance: 'Lead with what changes for the customer — not how it works.',
    example: '"Accept payments in 2 minutes — no technical setup required."',
  },
  step_by_step: {
    label: 'Step-by-step explanations',
    guidance: 'Walk customers through the process in plain, numbered steps.',
    example: '"Step 1: Sign up. Step 2: Connect your bank. Step 3: Start collecting payments."',
  },
  technical_features: {
    label: 'Technical features and specifications',
    guidance: 'Highlight specific capabilities, integrations, and performance metrics.',
    example: '"REST API with 99.9% uptime, PCI-DSS compliant, sub-200ms response times."',
  },
  business_roi: {
    label: 'Business performance and ROI',
    guidance: 'Frame every message around measurable business impact.',
    example: '"Merchants save 40% on transaction fees and recover 3x more abandoned carts."',
  },
  real_life_examples: {
    label: 'Real-life examples and use cases',
    guidance: 'Use customer stories and concrete scenarios your audience relates to.',
    example: '"How a Kandy bakery doubled online orders using our payment link in WhatsApp."',
  },
};

export const planForItems = [
  'Define a clear value proposition for non-tech-savvy users in Sinhala and Tamil.',
  'Start with one high-intent channel (Facebook or Instagram) before diversifying.',
  'Set up basic analytics: track sign-ups, cost per acquisition, and retention.',
  'Run a 4-week competitor content audit to identify messaging gaps.',
  'Allocate 60% of budget to proven channels, 40% to experimentation.',
];

export const mockCompetitors = [
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

export const timeSlots = [
  'Mon 10:00 AM',
  'Mon 2:00 PM',
  'Tue 11:00 AM',
  'Wed 3:00 PM',
  'Thu 10:00 AM',
  'Fri 9:00 AM',
];

export const questionGroups = [
  {
    id: 'groupA',
    title: 'About the product',
    questionIds: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'],
  },
  {
    id: 'groupB',
    title: 'Target customer',
    questionIds: ['q7', 'q8', 'q9', 'q10', 'q11'],
  },
  {
    id: 'groupC',
    title: 'Technical comfort',
    questionIds: ['q12', 'q13', 'q14', 'q15'],
  },
  {
    id: 'groupD',
    title: 'Messaging & goals',
    questionIds: ['q16', 'q17', 'q18'],
  },
  {
    id: 'groupE',
    title: 'Channels',
    questionIds: ['q19', 'q20', 'q21', 'q22'],
  },
  {
    id: 'groupF',
    title: 'Budget & campaign',
    questionIds: ['q23', 'q24', 'q25', 'q26'],
  },
];

export const questions = {
  q1: { id: 'q1', label: 'What is the name of your product or service?', type: 'text', required: true },
  q2: {
    id: 'q2',
    label: 'Briefly describe your product or service.',
    type: 'textarea',
    hint: 'What it does, its main features, and the technologies used.',
    required: true,
  },
  q3: { id: 'q3', label: 'What problem does your product solve for customers?', type: 'textarea', required: true },
  q4: {
    id: 'q4',
    label: 'What are the main features of your product?',
    type: 'tags',
    placeholder: 'e.g. QR payments — press Enter to add',
    required: true,
  },
  q5: { id: 'q5', label: 'What industry does your product belong to?', type: 'select', options: industryOptions, required: true },
  q6: {
    id: 'q6',
    label: 'Who are your main competitors or similar alternatives?',
    type: 'text',
    placeholder: 'e.g. PayHere, FriMi, Direct bank transfers',
    required: false,
    hint: 'Optional — comma-separated names. Used in your report if provided.',
  },
  q7: { id: 'q7', label: 'Who is your primary target customer?', type: 'text', required: true },
  q8: {
    id: 'q8',
    label: 'Is your target market B2B, B2C, or both?',
    type: 'radio',
    options: [
      { value: 'b2b', label: 'B2B' },
      { value: 'b2c', label: 'B2C' },
      { value: 'both', label: 'Both' },
    ],
    required: true,
  },
  q9: {
    id: 'q9',
    label: 'What age group best represents your target customer?',
    type: 'radio',
    options: [
      { value: '18-24', label: '18–24' },
      { value: '25-34', label: '25–34' },
      { value: '35-44', label: '35–44' },
      { value: '45-54', label: '45–54' },
      { value: '55+', label: '55+' },
      { value: 'multiple', label: 'Multiple age groups' },
    ],
    required: true,
  },
  q10: {
    id: 'q10',
    label: 'What is the typical occupation or role of your target customer?',
    type: 'checkbox',
    options: [
      { value: 'business_owner', label: 'Business owner' },
      { value: 'it_professional', label: 'IT professional' },
      { value: 'student', label: 'Student' },
      { value: 'manager', label: 'Manager' },
      { value: 'accountant', label: 'Accountant' },
      { value: 'general_consumer', label: 'General consumer' },
    ],
    required: true,
  },
  q11: {
    id: 'q11',
    label: 'Where is your target audience located?',
    type: 'radio',
    options: [
      { value: 'colombo', label: 'Colombo' },
      { value: 'western', label: 'Western Province' },
      { value: 'other_provinces', label: 'Other provinces' },
      { value: 'all_sl', label: 'All Sri Lanka' },
      { value: 'specific', label: 'Specific cities/regions' },
    ],
    required: true,
  },
  q12: {
    id: 'q12',
    label: "How would you describe your target customer's comfort with technology?",
    type: 'radio',
    options: [
      { value: 'very_low', label: 'Very low' },
      { value: 'low', label: 'Low' },
      { value: 'medium', label: 'Medium' },
      { value: 'high', label: 'High' },
      { value: 'very_high', label: 'Very high' },
    ],
    required: true,
  },
  q13: {
    id: 'q13',
    label: 'How familiar is your target customer with technical terms related to your product?',
    type: 'radio',
    options: [
      { value: 'not_familiar', label: 'Not familiar at all' },
      { value: 'slightly_familiar', label: 'Slightly familiar' },
      { value: 'moderately_familiar', label: 'Moderately familiar' },
      { value: 'very_familiar', label: 'Very familiar' },
      { value: 'highly_familiar', label: 'Highly familiar' },
    ],
    required: true,
  },
  q14: {
    id: 'q14',
    label: 'How detailed should your marketing communication be for your target audience?',
    type: 'radio',
    options: [
      { value: 'very_simple', label: 'Very simple/non-technical' },
      { value: 'mostly_simple', label: 'Mostly simple' },
      { value: 'balanced', label: 'Balanced technical and simple' },
      { value: 'detailed', label: 'Detailed and technical' },
      { value: 'highly_technical', label: 'Highly technical and professional' },
    ],
    required: true,
  },
  q15: {
    id: 'q15',
    label: 'Which type of message do you think your customers understand best?',
    type: 'radio',
    options: [
      { value: 'simple_benefits', label: 'Simple benefits and outcomes' },
      { value: 'step_by_step', label: 'Step-by-step explanations' },
      { value: 'technical_features', label: 'Technical features and specifications' },
      { value: 'business_roi', label: 'Business performance and ROI' },
      { value: 'real_life_examples', label: 'Real-life examples and use cases' },
    ],
    required: true,
  },
  q16: {
    id: 'q16',
    label: 'What is the main benefit you want customers to understand about your product?',
    type: 'textarea',
    required: true,
  },
  q17: {
    id: 'q17',
    label: 'What are the main customer pain points your product solves?',
    type: 'tags',
    placeholder: 'e.g. High fees — press Enter to add',
    required: true,
  },
  q18: {
    id: 'q18',
    label: 'What action do you want customers to take after seeing your marketing message?',
    type: 'radio',
    options: [
      { value: 'visit_website', label: 'Visit our website' },
      { value: 'request_demo', label: 'Request a demo' },
      { value: 'contact_us', label: 'Contact us' },
      { value: 'sign_up', label: 'Sign up' },
      { value: 'purchase', label: 'Make a purchase' },
      { value: 'download_app', label: 'Download an app' },
      { value: 'book_consultation', label: 'Book a consultation' },
    ],
    required: true,
  },
  q19: {
    id: 'q19',
    label: 'Which marketing channels are you currently using?',
    type: 'checkbox',
    options: marketingChannelOptions,
    required: true,
  },
  q20: {
    id: 'q20',
    label: 'Which marketing channels have worked best for you so far?',
    type: 'checkbox',
    options: marketingChannelOptions.filter((o) => o.value !== 'none'),
    required: true,
  },
  q21: {
    id: 'q21',
    label: 'Which channels have not performed well for you?',
    type: 'checkbox',
    options: marketingChannelOptions.filter((o) => o.value !== 'none'),
    required: false,
  },
  q22: {
    id: 'q22',
    label: 'What type of content does your target audience engage with most?',
    type: 'radio',
    options: [
      { value: 'short_videos', label: 'Short videos' },
      { value: 'educational_videos', label: 'Educational videos' },
      { value: 'images', label: 'Images/graphics' },
      { value: 'articles', label: 'Articles/blogs' },
      { value: 'case_studies', label: 'Case studies' },
      { value: 'demos', label: 'Product demonstrations' },
      { value: 'testimonials', label: 'Customer testimonials' },
    ],
    required: true,
  },
  q23: { id: 'q23', label: 'What is your monthly marketing budget?', type: 'number', suffix: 'LKR', required: true },
  q24: {
    id: 'q24',
    label: 'How flexible is your marketing budget?',
    type: 'radio',
    options: [
      { value: 'fixed', label: 'Fixed budget' },
      { value: 'slightly', label: 'Slightly flexible' },
      { value: 'moderately', label: 'Moderately flexible' },
      { value: 'highly', label: 'Highly flexible' },
    ],
    required: true,
  },
  q25: {
    id: 'q25',
    label: 'What is your expected campaign duration?',
    type: 'radio',
    options: [
      { value: '1_month', label: '1 month' },
      { value: '3_months', label: '3 months' },
      { value: '6_months', label: '6 months' },
      { value: 'over_6', label: 'More than 6 months' },
    ],
    required: true,
  },
  q26: {
    id: 'q26',
    label: 'What would define a successful campaign for your business?',
    type: 'checkbox',
    options: [
      { value: 'website_visitors', label: 'More website visitors' },
      { value: 'leads', label: 'More leads' },
      { value: 'sales', label: 'More sales' },
      { value: 'app_downloads', label: 'More app downloads' },
      { value: 'social_engagement', label: 'More social media engagement' },
      { value: 'brand_awareness', label: 'More brand awareness' },
      { value: 'demo_requests', label: 'More demo requests' },
    ],
    required: true,
  },
};

export const actionLabels = {
  visit_website: 'Visit website',
  request_demo: 'Request a demo',
  contact_us: 'Contact us',
  sign_up: 'Sign up',
  purchase: 'Make a purchase',
  download_app: 'Download app',
  book_consultation: 'Book a consultation',
};

export const successMetricLabels = {
  website_visitors: 'Website visitors',
  leads: 'Leads',
  sales: 'Sales',
  app_downloads: 'App downloads',
  social_engagement: 'Social engagement',
  brand_awareness: 'Brand awareness',
  demo_requests: 'Demo requests',
};

export const budgetFlexLabels = {
  fixed: 'Fixed budget',
  slightly: 'Slightly flexible',
  moderately: 'Moderately flexible',
  highly: 'Highly flexible',
};

export const campaignDurationLabels = {
  '1_month': '1 month',
  '3_months': '3 months',
  '6_months': '6 months',
  over_6: '6+ months',
};

export const occupationLabels = {
  business_owner: 'Business owner',
  it_professional: 'IT professional',
  student: 'Student',
  manager: 'Manager',
  accountant: 'Accountant',
  general_consumer: 'General consumer',
};

export const locationLabels = {
  colombo: 'Colombo',
  western: 'Western Province',
  other_provinces: 'Other provinces',
  all_sl: 'All Sri Lanka',
  specific: 'Specific cities/regions',
};

export function getLiteracyScore(answers) {
  const q12 = literacyScoreMaps.q12[answers.q12] ?? 0;
  const q13 = literacyScoreMaps.q13[answers.q13] ?? 0;
  const q14 = literacyScoreMaps.q14[answers.q14] ?? 0;
  return { q12, q13, q14, total: q12 + q13 + q14 };
}

export function getClassificationKey(answers) {
  const { total } = getLiteracyScore(answers);
  if (total <= 4) return 'nonTechnical';
  if (total <= 8) return 'semiTechnical';
  return 'highlyTechnical';
}

export function getClassification(answers) {
  return classifications[getClassificationKey(answers)];
}

export function getCompetitors(answers) {
  const raw = (answers.q6 || '').trim();
  if (!raw) return mockCompetitors;
  const custom = raw
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({
      name,
      note: 'Competitor identified during your assessment.',
      gap: 'Differentiate through local trust, pricing, and customer experience.',
    }));
  return custom.length > 0 ? custom : mockCompetitors;
}

export function computeBudgetPlan(answers, budgetAmount) {
  const key = getClassificationKey(answers);
  const weights = { ...baselineWeights[key] };
  const floor = 3;
  const boost = 5;
  const penalty = 4;

  const workedBest = answers.q20 || [];
  const underperformed = answers.q21 || [];

  workedBest.forEach((ch) => {
    const bucket = channelToBudgetBucket[ch];
    if (bucket) weights[bucket] = (weights[bucket] || 0) + boost;
  });

  underperformed.forEach((ch) => {
    const bucket = channelToBudgetBucket[ch];
    if (bucket) weights[bucket] = Math.max(floor, (weights[bucket] || 0) - penalty);
  });

  const total = Object.values(weights).reduce((s, w) => s + w, 0);
  const entries = Object.entries(weights).map(([channel, w]) => ({
    channel,
    raw: (w / total) * 100,
    rationale: budgetRationales[channel],
  }));
  const rounded = entries.map((e) => ({ ...e, pct: Math.round(e.raw) }));
  const pctSum = rounded.reduce((s, e) => s + e.pct, 0);
  if (pctSum !== 100 && rounded.length > 0) {
    rounded[0].pct += 100 - pctSum;
  }
  return rounded.map((e) => ({
    channel: e.channel,
    pct: e.pct,
    amount_lkr: Math.round((e.pct / 100) * budgetAmount),
    rationale: e.rationale,
  }));
}

export function getIndustryLabel(value) {
  return industryOptions.find((o) => o.value === value)?.label || value;
}

export function buildInitialAnswers(intake) {
  return {
    q1: intake.productName || '',
    q5: intake.category || 'software-saas',
    q23: intake.monthlyBudget || '100000',
  };
}

export function isGroupValid(groupId, answers) {
  const group = questionGroups.find((g) => g.id === groupId);
  if (!group) return false;
  return group.questionIds.every((qid) => {
    const q = questions[qid];
    if (!q.required) return true;
    const val = answers[qid];
    if (q.type === 'tags' || q.type === 'checkbox') return Array.isArray(val) && val.length > 0;
    if (q.type === 'number') return val !== undefined && val !== '' && !Number.isNaN(Number(val));
    return val !== undefined && String(val).trim() !== '';
  });
}
