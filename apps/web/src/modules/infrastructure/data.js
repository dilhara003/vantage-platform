export const hostingOptions = [
  {
    value: 'none',
    label: 'No hosting yet',
    description: 'Still in development or running locally only.',
  },
  {
    value: 'shared',
    label: 'Shared hosting',
    description: 'cPanel, basic VPS, or single-server deployment.',
  },
  {
    value: 'cloud',
    label: 'Cloud infrastructure',
    description: 'AWS, GCP, Azure, or managed PaaS (Railway, Render, etc.).',
  },
];

export const userCountOptions = [
  { value: 'under1k', label: 'Under 1,000 users', score: 90 },
  { value: '1kto10k', label: '1,000 – 10,000 users', score: 65 },
  { value: '10kto100k', label: '10,000 – 100,000 users', score: 40 },
  { value: 'over100k', label: 'Over 100,000 users', score: 20 },
];

export const budgetOptions = [
  { value: 'under25k', label: 'Under LKR 25,000/month' },
  { value: '25to100k', label: 'LKR 25,000 – 100,000/month' },
  { value: 'over100k', label: 'Over LKR 100,000/month' },
];

export const gapsByProfile = {
  none: [
    'No production hosting environment configured',
    'No CI/CD pipeline for automated deployments',
    'No monitoring or alerting in place',
    'No backup or disaster recovery strategy',
    'No SSL/TLS certificate management',
  ],
  shared: [
    'Single point of failure — no redundancy',
    'No autoscaling for traffic spikes',
    'Limited observability (logs, metrics, traces)',
    'No automated backup verification',
    'Database not separated from application tier',
  ],
  cloud: [
    'Autoscaling policies not configured',
    'No load testing performed for peak traffic',
    'Cost optimization and budget alerts missing',
    'Multi-region failover not implemented',
    'Secrets management could be improved',
  ],
};

export const scalabilityPlans = {
  none: [
    { step: 1, title: 'Deploy to managed cloud', detail: 'Start with a PaaS (Railway, Render, or AWS Lightsail) for zero-ops deployment. Target: production live within 2 weeks.' },
    { step: 2, title: 'Add monitoring stack', detail: 'Set up uptime monitoring (UptimeRobot), error tracking (Sentry), and basic CloudWatch or Grafana dashboards.' },
    { step: 3, title: 'Implement CI/CD', detail: 'GitHub Actions pipeline for automated testing and deployment on every merge to main.' },
  ],
  shared: [
    { step: 1, title: 'Migrate to containerized cloud', detail: 'Move from shared hosting to AWS ECS or DigitalOcean App Platform for better isolation and scaling.' },
    { step: 2, title: 'Separate database tier', detail: 'Use managed Postgres (RDS or Supabase) with automated daily backups and point-in-time recovery.' },
    { step: 3, title: 'Add CDN and caching', detail: 'CloudFront or Cloudflare in front of static assets; Redis for session and API caching.' },
  ],
  cloud: [
    { step: 1, title: 'Configure autoscaling', detail: 'Set CPU/memory thresholds for horizontal pod autoscaling. Load test to validate 3x traffic headroom.' },
    { step: 2, title: 'Multi-AZ deployment', detail: 'Deploy across at least 2 availability zones in ap-south-1 (Mumbai) for Sri Lankan latency and failover.' },
    { step: 3, title: 'Cost governance', detail: 'Implement AWS Budgets alerts, right-size instances, and reserved capacity for predictable workloads.' },
  ],
};

export function calculateReadinessScore(hosting, userCount) {
  const hostingScores = { none: 25, shared: 50, cloud: 75 };
  const userEntry = userCountOptions.find((u) => u.value === userCount);
  const userScore = userEntry ? userEntry.score : 50;
  const hostingScore = hostingScores[hosting] || 25;
  return Math.round((hostingScore + userScore) / 2);
}

export function getScoreLabel(score) {
  if (score >= 70) return { label: 'Ready', color: '#3D6B4F' };
  if (score >= 45) return { label: 'Developing', color: '#B8862E' };
  return { label: 'At Risk', color: '#B33F1F' };
}
