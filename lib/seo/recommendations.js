import { SITE_URL } from '../site.js';

/**
 * Maps search terms to existing site pages for actionable SEO recommendations.
 */
const QUERY_PAGE_MAP = [
  { patterns: [/decal/i], page: '/blog/trade-show-banners-decals-ireland', action: 'optimize' },
  { patterns: [/trade show banner/i, /exhibition banner/i, /pull up banner/i, /roll up banner/i, /rollup banner/i], page: '/roll-up-banners', action: 'optimize' },
  { patterns: [/banner printing/i, /banners ireland/i, /outdoor banner/i], page: '/banners-ireland', action: 'optimize' },
  { patterns: [/pvc banner/i, /printed banner/i, /vinyl banner/i, /mesh banner/i], page: '/vinyl-banners', action: 'optimize' },
  { patterns: [/banner size/i, /3x6|3\s*x\s*6|4x8|4\s*x\s*8/i], page: '/blog/banner-sizes-ireland', action: 'optimize' },
  { patterns: [/banner.*ashbourne/i, /banner.*meath/i], page: '/banner-printing-ashbourne', action: 'optimize' },
  { patterns: [/banner.*dublin/i], page: '/banner-printing-dublin', action: 'optimize' },
  { patterns: [/vinyl sticker/i, /stickers ireland/i], page: '/vinyl-stickers', action: 'optimize' },
  { patterns: [/custom vinyl/i], page: '/blog/custom-vinyl-stickers-ireland', action: 'optimize' },
  { patterns: [/pizza box.*wholesale/i, /wholesale pizza/i, /bulk pizza box/i], page: '/pizza-boxes-wholesale-ireland', action: 'optimize' },
  { patterns: [/plain pizza/i, /100 pack pizza/i, /kraft pizza/i, /brown pizza box/i], page: '/plain-pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/pizza box.*logo/i, /pizza boxes with logo/i, /personalised pizza/i, /branded pizza box/i, /custom printed pizza/i], page: '/custom-pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/pizza box.*cost/i, /pizza box.*price/i, /how much.*pizza box/i], page: '/blog/custom-pizza-box-cost-ireland', action: 'optimize' },
  { patterns: [/pizza box/i], page: '/pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/leaflet/i, /flat leaflet/i], page: '/services/leaflets', action: 'optimize' },
  { patterns: [/leaflet.*ireland/i], page: '/blog/leaflet-printing-ireland-guide', action: 'optimize' },
  { patterns: [/poster/i, /custom poster/i, /customisable poster/i, /a4 poster/i], page: '/posters', action: 'optimize' },
  { patterns: [/print poster.*ireland/i], page: '/services/posters', action: 'optimize' },
  { patterns: [/rubber stamp/i, /custom stamp/i, /business stamp/i, /company stamp/i, /signature stamp/i, /personalised stamp/i, /personalized stamp/i], page: '/rubber-stamps', action: 'optimize' },
  { patterns: [/stamp printing/i, /logo stamp/i], page: '/rubber-stamps-ireland', action: 'optimize' },
  { patterns: [/stamp.*ashbourne/i, /stamp.*near me/i], page: '/rubber-stamp-printing-ashbourne', action: 'optimize' },
  { patterns: [/stamp.*dublin/i, /dublin stamp/i], page: '/rubber-stamp-printing-dublin', action: 'optimize' },
  { patterns: [/flat handle.*bag/i, /printed flat handle/i], page: '/printed-flat-handle-bags-ireland', action: 'optimize' },
  { patterns: [/paper bag/i], page: '/printed-flat-handle-bags-ireland', action: 'optimize' },
  { patterns: [/print\s*n?\s*pack|print and pack/i], page: '/', action: 'optimize' },
  { patterns: [/printed box/i, /packaging/i], page: '/plain-packaging', action: 'optimize' },
  { patterns: [/correx/i, /corriboard/i], page: '/correx-boards', action: 'optimize' },
  { patterns: [/foamex/i], page: '/foamex-boards', action: 'optimize' },
  { patterns: [/napkin/i], page: '/products/printed-napkins', action: 'optimize' },
  { patterns: [/printing.*ashbourne/i, /print shop.*ashbourne/i], page: '/printing-ashbourne', action: 'optimize' },
  { patterns: [/printing.*dublin/i, /print shop.*dublin/i], page: '/printing-dublin', action: 'optimize' },
  { patterns: [/printing.*ireland/i, /printing.*near me/i, /printing shop/i], page: '/printing-ireland', action: 'optimize' },
  { patterns: [/business card/i], page: '/services', action: 'optimize' },
  { patterns: [/menu/i], page: '/services/menus', action: 'optimize' },
  { patterns: [/t shirt|t-shirt|clothing/i], page: '/clothing', action: 'optimize' },
];

function findMatchingPage(query) {
  for (const entry of QUERY_PAGE_MAP) {
    if (entry.patterns.some((p) => p.test(query))) {
      return entry;
    }
  }
  return null;
}

function priorityFromMetrics(row) {
  if (row.impressions >= 80 && row.clicks === 0) return 'critical';
  if (row.impressions >= 50 && row.ctr < 2) return 'high';
  if (row.position >= 4 && row.position <= 15 && row.impressions >= 20) return 'medium';
  return 'low';
}

function buildRecommendation(row) {
  const match = findMatchingPage(row.name);
  const priority = priorityFromMetrics(row);

  if (match) {
    const actions = [];
    if (row.position > 20) {
      actions.push(`Improve on-page SEO for "${row.name}" — currently position ${row.position.toFixed(1)}`);
      actions.push('Add query to title tag, H1, and meta description');
      actions.push('Add internal links from homepage and related product pages');
    } else if (row.position > 10) {
      actions.push(`Push from page 2 to page 1 — position ${row.position.toFixed(1)} with ${row.impressions} impressions`);
      actions.push('Strengthen content depth and add FAQ schema');
    } else if (row.ctr < 3 && row.impressions >= 30) {
      actions.push(`Improve CTR — ${row.ctr}% CTR on ${row.impressions} impressions`);
      actions.push('Rewrite meta title/description to be more compelling');
    } else {
      actions.push('Maintain ranking and monitor weekly');
    }

    return {
      query: row.name,
      priority,
      type: 'optimize_existing',
      targetPage: match.page,
      targetUrl: `${SITE_URL}${match.page}`,
      impressions: row.impressions,
      clicks: row.clicks,
      ctr: row.ctr,
      position: row.position,
      actions,
    };
  }

  return {
    query: row.name,
    priority,
    type: 'content_gap',
    targetPage: null,
    targetUrl: null,
    impressions: row.impressions,
    clicks: row.clicks,
    ctr: row.ctr,
    position: row.position,
    actions: [
      `High search demand (${row.impressions} impressions) with no dedicated page`,
      'Consider creating a landing page or blog post targeting this query',
      'Add to content calendar for Irish printing/packaging keywords',
    ],
  };
}

export function generateRecommendations(analysis) {
  const sourceRows = [
    ...analysis.highDemandZeroClicks,
    ...analysis.quickWins,
    ...analysis.opportunities.filter((o) => o.impressions >= 40),
  ];

  const seen = new Set();
  const recommendations = [];

  for (const row of sourceRows) {
    const key = row.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    recommendations.push(buildRecommendation(row));
  }

  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  return recommendations.sort(
    (a, b) =>
      priorityOrder[a.priority] - priorityOrder[b.priority] ||
      b.impressions - a.impressions
  );
}

export function summarizeRecommendations(recommendations) {
  return {
    total: recommendations.length,
    critical: recommendations.filter((r) => r.priority === 'critical').length,
    high: recommendations.filter((r) => r.priority === 'high').length,
    contentGaps: recommendations.filter((r) => r.type === 'content_gap').length,
    optimizeExisting: recommendations.filter((r) => r.type === 'optimize_existing').length,
  };
}
