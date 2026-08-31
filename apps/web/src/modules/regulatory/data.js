export const touchOptions = [
  {
    value: 'payments',
    label: 'Payments & financial transactions',
    description: 'Accepting payments, wallets, remittances, or lending.',
  },
  {
    value: 'personal_data',
    label: 'Personal data collection',
    description: 'Names, emails, phone numbers, location, or user profiles.',
  },
  {
    value: 'health_data',
    label: 'Health or medical data',
    description: 'Patient records, health metrics, or telemedicine services.',
  },
  {
    value: 'none',
    label: 'None of these',
    description: 'Pure content, tools, or B2B software with no sensitive data.',
  },
];

export const allRegulations = [
  {
    id: 'pdpa',
    name: 'Personal Data Protection Act (PDPA) No. 9 of 2022',
    touches: ['personal_data', 'health_data'],
    status: 'required',
    explanation: 'Mandatory consent, data minimization, and breach notification for personal data processing.',
  },
  {
    id: 'cbsl',
    name: 'Central Bank of Sri Lanka — Payment & Settlement Systems',
    touches: ['payments'],
    status: 'required',
    explanation: 'Licensing required for payment service providers, e-money issuers, and merchant acquirers.',
  },
  {
    id: 'ird',
    name: 'Inland Revenue Act — Digital Service Tax',
    touches: ['payments', 'personal_data'],
    status: 'required',
    explanation: 'VAT and income tax obligations for digital services; e-invoicing compliance from 2025.',
  },
  {
    id: 'consumer',
    name: 'Consumer Affairs Authority Act',
    touches: ['payments', 'personal_data'],
    status: 'recommended',
    explanation: 'Fair pricing, refund policies, and transparent terms of service for consumer-facing products.',
  },
  {
    id: 'health',
    name: 'Private Medical Institutions (Regulation) Act',
    touches: ['health_data'],
    status: 'required',
    explanation: 'Registration and data handling standards for health-related digital services.',
  },
  {
    id: 'cyber',
    name: 'Computer Crimes Act No. 24 of 2007',
    touches: ['personal_data', 'health_data', 'payments'],
    status: 'recommended',
    explanation: 'Unauthorized access, data theft, and cybercrime reporting obligations.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications Regulatory Commission (TRCSL)',
    touches: ['personal_data'],
    status: 'not_applicable',
    explanation: 'Applies if your product sends bulk SMS or operates as a telecom service provider.',
  },
  {
    id: 'sec',
    name: 'Securities and Exchange Commission Act',
    touches: ['payments'],
    status: 'not_applicable',
    explanation: 'Required only if facilitating securities trading, crowdfunding, or investment products.',
  },
];

export function getRegulationsForTouches(touches) {
  if (touches.length === 0 || touches.includes('none')) {
    return allRegulations.map((r) => ({
      ...r,
      status: r.status === 'required' ? 'not_applicable' : r.status,
    }));
  }

  return allRegulations.map((r) => {
    const relevant = r.touches.some((t) => touches.includes(t));
    if (!relevant) {
      return { ...r, status: 'not_applicable' };
    }
    return r;
  });
}

export const statusLabels = {
  required: { label: 'Required', variant: 'required' },
  recommended: { label: 'Recommended', variant: 'recommended' },
  not_applicable: { label: 'Not applicable', variant: 'notApplicable' },
};
