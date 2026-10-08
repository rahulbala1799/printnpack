/**
 * An Post Standard Post prices for sending from Ireland, in euro.
 * Source: An Post rate guide (anpost.com), checked October 2026.
 * Update here and the UK and Europe wedding pages follow.
 */
export const SHIPPING_RATES_CHECKED = 'October 2026';

/** Parcel rates by packed weight. */
export const PARCEL_RATES = [
  { weight: 'Up to 2 kg', ie: '€9', gb: '€21', z2: '€21', z3: '€30' },
  { weight: 'Over 2–5 kg', ie: '€11', gb: '€23', z2: '€23', z3: '€45' },
  { weight: 'Over 5–10 kg', ie: '€13', gb: '€25', z2: '€25', z3: '€60' },
  { weight: 'Over 10–15 kg', ie: '€13', gb: '€27', z2: '€27', z3: '€60 + €3 per kg above 10 kg' },
  { weight: 'Over 15–20 kg', ie: '€16', gb: '€30', z2: '€30', z3: '€60 + €3 per kg above 10 kg' },
];

/** Cheaper packet rate for small orders up to 2 kg. */
export const PACKET_RATES = [
  { weight: 'Up to 100 g', ie: '€4.40', gbz2: '€8', z3: '€9' },
  { weight: 'Up to 250 g', ie: '€5.50', gbz2: '€9', z3: '€10' },
  { weight: 'Up to 500 g', ie: '€7', gbz2: '€10', z3: '€12' },
  { weight: 'Up to 1 kg', ie: '€9', gbz2: '€13', z3: '€15' },
  { weight: 'Up to 1.5 kg', ie: '€9', gbz2: '€16', z3: '€19' },
  { weight: 'Up to 2 kg', ie: '€9', gbz2: '€16', z3: '€19' },
];

export const ZONE_2_COUNTRIES = ['France', 'Germany', 'Belgium', 'Netherlands', 'Luxembourg'];
export const ZONE_3_COUNTRIES = [
  'Spain', 'Portugal', 'Italy', 'Austria', 'Poland', 'Denmark', 'Sweden', 'Finland', 'Greece', 'Norway', 'Switzerland',
];
