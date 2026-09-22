import { getPlainProductPathById } from '../../data/plain-products';
import { SITE_URL } from '../site.js';

/**
 * Maps search terms to existing site pages for actionable SEO recommendations.
 */
const QUERY_PAGE_MAP = [
  { patterns: [/kerala cafe/i], page: null, action: 'navigational' },
  { patterns: [/decal/i], page: '/vinyl-stickers', action: 'optimize' },
  { patterns: [/extra wide roll/i, /xl roll up/i, /xl roller banner/i, /2m roll up/i, /200cm roll up/i, /wide format roll up/i, /large pull up banner/i, /xxxl roll/i, /2 metre roll/i, /roll up banner belfast/i, /roller banner uk/i], page: '/extra-wide-roll-up-banners-ireland', action: 'optimize' },
  { patterns: [/roll up banner printing/i, /pull up banner printing/i, /roller banner print/i, /how much.*roll up/i, /roll up banner.*cost/i, /roll up banner.*price/i], page: '/blog/roll-up-banner-printing-ireland', action: 'optimize' },
  { patterns: [/trade show banner/i, /exhibition banner/i, /pull up banner/i, /roll up banner/i, /rollup banner/i, /roller banner/i], page: '/roll-up-banners-ireland', action: 'optimize' },
  { patterns: [/pull up banner.*meath/i, /roll up banner.*meath/i], page: '/pull-up-banners-meath', action: 'optimize' },
  { patterns: [/banner printing dublin/i, /banners dublin/i, /banner.*dublin/i], page: '/banner-printing-dublin', action: 'optimize' },
  { patterns: [/banner printing/i, /banners ireland/i, /outdoor banner/i, /banners printing near me/i], page: '/banners-ireland', action: 'optimize' },
  { patterns: [/pvc banner/i, /printed banner/i, /vinyl banner/i, /mesh banner/i], page: '/vinyl-banners', action: 'optimize' },
  { patterns: [/banner size/i, /3x6|3\s*x\s*6|4x8|4\s*x\s*8/i], page: '/blog/banner-sizes-ireland', action: 'optimize' },
  { patterns: [/banner.*ashbourne/i, /banner.*meath/i], page: '/banner-printing-ashbourne', action: 'optimize' },
  { patterns: [/vinyl sticker/i, /stickers ireland/i], page: '/vinyl-stickers', action: 'optimize' },
  { patterns: [/custom vinyl/i], page: '/blog/custom-vinyl-stickers-ireland', action: 'optimize' },
  { patterns: [/pizza box.*wholesale/i, /wholesale pizza/i, /bulk pizza box/i], page: '/pizza-boxes-wholesale-ireland', action: 'optimize' },
  { patterns: [/plain pizza/i, /100 pack pizza/i, /kraft pizza/i, /brown pizza box/i], page: '/plain-pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/pizza box.*logo/i, /pizza boxes with logo/i, /personalised pizza/i, /branded pizza box/i, /custom printed pizza/i, /custom pizza box/i], page: '/custom-pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/pizza box.*cost/i, /pizza box.*price/i, /how much.*pizza box/i], page: '/blog/custom-pizza-box-cost-ireland', action: 'optimize' },
  { patterns: [/pizza box.*ashbourne/i, /pizza box.*meath/i], page: '/pizza-box-printing-ashbourne', action: 'optimize' },
  { patterns: [/pizza box.*dublin/i], page: '/pizza-box-printing-dublin', action: 'optimize' },
  { patterns: [/pizza box/i], page: '/pizza-boxes-ireland', action: 'optimize' },
  { patterns: [/premium leaflet/i, /special material flyer/i, /metallic flyer/i, /pearl marble.*leaflet/i, /synthetic paper flyer/i, /waterproof flyer/i], page: '/premium-leaflets-ireland', action: 'optimize' },
  { patterns: [/greaseproof sheet/i, /printed greaseproof/i, /custom greaseproof/i, /greaseproof paper.*print/i, /branded greaseproof/i, /burger wrap paper/i, /sandwich wrapping paper/i, /food wrapping paper.*print/i], page: '/greaseproof-sheets-ireland', action: 'optimize' },
  { patterns: [/stage backdrop/i, /stage banner/i, /large backdrop/i, /conference backdrop/i, /theatre backdrop/i, /polyester backdrop/i, /3m\s*[x×]\s*3m/i, /3 metre banner/i, /huge banner/i, /custom large banner/i, /oversized banner/i, /extra large banner/i, /large banners ireland/i, /50m banner/i, /50 metre banner/i], page: '/stage-backdrop-banners-ireland', action: 'optimize' },
  { patterns: [/leaflet/i, /flat leaflet/i], page: '/services/leaflets', action: 'optimize' },
  { patterns: [/leaflet.*ireland/i], page: '/blog/leaflet-printing-ireland-guide', action: 'optimize' },
  { patterns: [/poster/i, /custom poster/i, /customisable poster/i, /a4 poster/i], page: '/posters', action: 'optimize' },
  { patterns: [/print poster.*ireland/i], page: '/services/posters', action: 'optimize' },
  { patterns: [/photo printing.*ashbourne/i, /print shop near me/i], page: '/printing-ashbourne', action: 'optimize' },
  { patterns: [/printing services near me/i, /printing services/i], page: '/printing-ireland', action: 'optimize' },
  { patterns: [/self-inking|self inking/i], page: '/self-inking-stamps-ireland', action: 'optimize' },
  { patterns: [/loyalty stamp|reward stamp|coffee stamp|loyalty card/i], page: '/loyalty-card-stamps-ireland', action: 'optimize' },
  { patterns: [/rocker stamp|packaging stamp|bag stamp/i], page: '/rocker-stamps-ireland', action: 'optimize' },
  { patterns: [/company seal|solicitor stamp|notary stamp|certified copy stamp|accountant stamp/i], page: '/company-seal-stamps-ireland', action: 'optimize' },
  { patterns: [/clothing name stamp|uniform stamp|school name stamp|name stamp/i], page: '/clothing-name-stamps-ireland', action: 'optimize' },
  { patterns: [/logo stamp|company stamp/i], page: '/company-logo-stamps-ireland', action: 'optimize' },
  { patterns: [/custom rubber stamp|rubber stamps ireland|business stamp|rubber stamp|custom stamp|signature stamp|personalised stamp|personalized stamp/i], page: '/rubber-stamps', action: 'optimize' },
  { patterns: [/sealer bar/i, /heat sealer/i], page: getPlainProductPathById('220021'), action: 'optimize' },
  { patterns: [/stamp printing/i], page: '/rubber-stamps-ireland', action: 'optimize' },
  { patterns: [/stamp.*ashbourne/i, /stamp.*near me/i], page: '/rubber-stamp-printing-ashbourne', action: 'optimize' },
  { patterns: [/stamp.*dublin/i, /dublin stamp/i], page: '/rubber-stamp-printing-dublin', action: 'optimize' },
  { patterns: [/wholesale paper bag/i, /paper bag.*wholesale/i, /bulk paper bag/i, /3000.*paper bag/i], page: '/wholesale-paper-bags-ireland', action: 'optimize' },
  { patterns: [/plain paper bag/i, /brown paper bag/i, /kraft paper bag/i, /sos.*bag/i], page: '/plain-paper-bags-ireland', action: 'optimize' },
  { patterns: [/twisted handle.*bag/i, /paper carrier bag/i, /retail paper bag/i], page: '/twisted-handle-paper-bags-ireland', action: 'optimize' },
  { patterns: [/paper bag.*cost/i, /paper bag.*price/i, /how much.*paper bag/i], page: '/blog/printed-paper-bag-cost-ireland', action: 'optimize' },
  { patterns: [/flat handle.*bag/i, /printed flat handle/i, /takeaway paper bag/i], page: '/printed-flat-handle-bags-ireland', action: 'optimize' },
  { patterns: [/paper bag/i], page: '/paper-bags-ireland', action: 'optimize' },
  { patterns: [/print\s*n?\s*pack|print and pack/i], page: '/', action: 'optimize' },
  { patterns: [/printed box/i, /packaging/i], page: '/plain-packaging', action: 'optimize' },
  { patterns: [/correx/i, /corriboard/i], page: '/correx-boards', action: 'optimize' },
  { patterns: [/foamex printing/i, /foam board printing/i, /foamex board ireland/i, /pvc foamex/i], page: '/foamex-ireland', action: 'optimize' },
  { patterns: [/5mm foamex/i, /foamex sign/i, /foamex panel/i, /foamex board printing/i], page: '/foamex-boards', action: 'optimize' },
  { patterns: [/foamex.*ashbourne/i, /foamex.*near me/i], page: '/foamex-printing-ashbourne', action: 'optimize' },
  { patterns: [/foamex.*dublin/i], page: '/foamex-printing-dublin', action: 'optimize' },
  { patterns: [/foamex/i, /foam board/i], page: '/foamex-boards', action: 'optimize' },
  { patterns: [/linen feel napkin/i, /linen-feel napkin/i, /premium napkin/i], page: '/products/premium-linen-feel-napkins', action: 'optimize' },
  { patterns: [/personalised napkin/i, /personalized napkin/i], page: '/blog/personalised-napkins-ireland-guide', action: 'optimize' },
  { patterns: [/wedding napkin/i, /branded napkin/i], page: '/napkins-ireland', action: 'optimize' },
  { patterns: [/napkin printing/i, /printed napkin/i, /cocktail napkin/i, /paper napkin/i], page: '/products/printed-napkins', action: 'optimize' },
  { patterns: [/napkin.*ashbourne/i, /napkin.*near me/i], page: '/napkin-printing-ashbourne', action: 'optimize' },
  { patterns: [/napkin.*dublin/i, /dublin napkin/i], page: '/napkin-printing-dublin', action: 'optimize' },
  { patterns: [/napkin/i], page: '/napkins-ireland', action: 'optimize' },
  { patterns: [/custom flags/i, /custom flag\b/i, /printed flags/i, /flag printing/i, /custom printed flag/i, /personalised flag/i, /personalized flag/i, /gaa flag/i, /sports flag.*ireland/i], page: '/custom-printed-flags-ireland', action: 'optimize' },
  { patterns: [/custom printed tissue/i, /branded tissue paper/i, /personalised tissue/i, /logo tissue paper/i, /luxury tissue paper/i], page: '/custom-printed-tissue-paper-ireland', action: 'optimize' },
  { patterns: [/custom cake box/i, /cake box.*ireland/i, /branded cake box/i, /cupcake box.*ireland/i, /bakery packaging.*ireland/i, /luxury cake box/i, /wedding cake box/i, /patisserie box/i], page: '/custom-cake-boxes-ireland', action: 'optimize' },
  { patterns: [/magnetic closure box/i, /magnetic gift box/i, /luxury gift box/i, /rigid gift box/i, /magnetic box.*ireland/i], page: '/luxury-magnetic-closure-boxes-ireland', action: 'optimize' },
  { patterns: [/branded coffee cup/i, /custom printed coffee cup/i, /printed coffee cup.*dublin/i, /coffee cup printing/i, /personalised coffee cup/i, /logo coffee cup/i], page: '/custom-printed-coffee-cups-ireland', action: 'optimize' },
  { patterns: [/plain (white )?coffee cup/i, /plain hot cup/i, /white disposable cup/i, /unprinted coffee cup/i], page: '/plain-hot-cups-ireland', action: 'optimize' },
  { patterns: [/disposable coffee cup/i, /takeaway coffee cup/i, /paper cup.*wholesale/i, /wholesale.*coffee cup/i, /coffee cup supplier/i, /hot cup lid/i, /8oz coffee cup/i, /12oz coffee cup/i, /16oz coffee cup/i, /compostable coffee cup/i], page: '/hot-cups-ireland', action: 'optimize' },
  { patterns: [/hot cup/i, /paper cup/i, /disposable cup/i, /takeaway cup/i], page: '/hot-cups-ireland', action: 'optimize' },
  { patterns: [/nitrile glove/i, /blue nitrile/i, /black nitrile/i, /powder free nitrile/i], page: '/nitrile-gloves-ireland', action: 'optimize' },
  { patterns: [/vinyl glove/i, /clear vinyl glove/i, /blue vinyl glove/i, /powder free vinyl glove/i], page: '/vinyl-gloves-ireland', action: 'optimize' },
  { patterns: [/disposable glove/i, /catering glove/i, /food handling glove/i, /kitchen glove/i, /glove supplier/i, /gloves wholesale/i], page: '/gloves-ireland', action: 'optimize' },
  { patterns: [/glove/i], page: '/gloves-ireland', action: 'optimize' },
  { patterns: [/plain burger/i, /wholesale burger/i, /bulk burger box/i], page: '/plain-burger-boxes-ireland', action: 'optimize' },
  { patterns: [/burger box.*logo/i, /printed burger/i, /branded burger/i, /custom burger box/i], page: '/custom-burger-boxes-ireland', action: 'optimize' },
  { patterns: [/bagasse burger/i, /biodegradable burger/i, /compostable burger/i], page: '/eco-bagasse-burger-boxes', action: 'optimize' },
  { patterns: [/burger box.*ashbourne/i, /burger box.*meath/i], page: '/burger-box-printing-ashbourne', action: 'optimize' },
  { patterns: [/burger box.*dublin/i], page: '/burger-box-printing-dublin', action: 'optimize' },
  { patterns: [/burger box/i], page: '/burger-boxes-ireland', action: 'optimize' },
  { patterns: [/printing.*ashbourne/i, /print shop.*ashbourne/i], page: '/printing-ashbourne', action: 'optimize' },
  { patterns: [/printing.*dublin/i, /print shop.*dublin/i], page: '/printing-dublin', action: 'optimize' },
  { patterns: [/printing.*ireland/i, /printing.*near me/i, /printing shop/i], page: '/printing-ireland', action: 'optimize' },
  { patterns: [/business card/i], page: '/services', action: 'optimize' },
  { patterns: [/menu/i], page: '/services/menus', action: 'optimize' },
  { patterns: [/t shirt|t-shirt|clothing/i], page: '/clothing', action: 'optimize' },
];

/**
 * Copy already published on these URLs. Recommendations must not tell us to
 * add a query or an FAQ block when that copy is already on the page.
 */
const PAGE_ONPAGE = {
  '/paper-bags-ireland': {
    title: 'Paper Bags Ireland | Branded, Brown Kraft, Retail & Wholesale',
    h1: 'Paper Bags Ireland — Printed, Plain & Wholesale Bags for Irish Businesses',
    description: 'Paper bags Ireland — branded bags with logo, brown kraft and SOS takeaway bags, retail carrier bags and wholesale cases.',
    hasFaq: true,
  },
  '/banners-ireland': {
    title: 'Banner Printing Ireland | Custom PVC & Roll-Up Banners | Print n Pack',
    h1: 'Banner Printing Ireland',
    description: 'Banner printing Ireland — custom PVC banners, roll-up banners, fabric banner stands, extra wide roller banners and trade show displays.',
    hasFaq: true,
  },
  '/banner-printing-dublin': {
    title: 'Banner Printing Dublin | Banners Dublin & Custom PVC Banners',
    h1: 'Banner Printing Dublin — Banners Dublin & PVC Roll-Ups',
    description: 'Banner printing Dublin — custom PVC banners, roll-up banners and printed banners for shops, events and exhibitions.',
    hasFaq: true,
  },
  '/foamex-boards': {
    title: 'Foamex Boards Ireland | Custom PVC Foam Signage & Printing | Print n Pack',
    h1: 'Foamex Boards Ireland',
    description: 'Custom foamex board printing in Ireland — 3mm, 5mm and 10mm PVC foam signage.',
    hasFaq: true,
  },
  '/napkins-ireland': {
    title: 'Napkins Ireland | Printed, Branded & Linen-Feel Napkins | Print n Pack',
    h1: 'Napkins Ireland',
    description: 'Custom printed napkins in Ireland — branded restaurant napkins, premium linen-feel napkins, cocktail and wedding napkins.',
    hasFaq: true,
  },
  '/blog/personalised-napkins-ireland-guide': {
    title: 'Personalised Napkins Ireland | Printed Napkins from €0.05',
    h1: 'Personalised Napkins Ireland | Printed Napkins from €0.05',
    description: 'Personalised napkins Ireland for restaurants, pubs and weddings. Branded printed napkins from €0.05, linen-feel options, cocktail vs dinner sizes.',
    hasFaq: true,
  },
  '/pizza-boxes-ireland': {
    title: 'Pizza Box Ireland | Custom Pizza Boxes & Wholesale Supply',
    h1: 'Pizza Box Ireland — Custom Pizza Boxes & Wholesale Supply',
    description: 'Buy pizza boxes in Ireland — custom pizza boxes with logo from 500 units, plain kraft wholesale in 100-pack cases.',
    hasFaq: true,
  },
  '/custom-printed-flags-ireland': {
    title: 'Custom Flags Ireland | Personalised Flags for Clubs & Businesses',
    h1: 'Custom Flags Ireland — Custom Printed Flags for Clubs, Businesses & Events',
    description: 'Custom flags Ireland — custom printed and personalised flags for GAA clubs, businesses, schools and events.',
    hasFaq: true,
  },
  '/vinyl-banners': {
    title: 'Printed Banners Ireland | PVC Outdoor Banners from €25 | PrintNPack',
    h1: 'Printed Banners Ireland — PVC & Outdoor Advertising',
    description: 'Printed banners Ireland from €25 — custom PVC outdoor banners for shop fronts, events and advertising.',
    hasFaq: true,
  },
};

function findMatchingPage(query) {
  for (const entry of QUERY_PAGE_MAP) {
    if (entry.patterns.some((p) => p.test(query))) {
      return entry;
    }
  }
  return null;
}

function queryWords(query) {
  return String(query || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2);
}

function textHasQueryWords(text, words) {
  const haystack = String(text || '').toLowerCase();
  return words.every((word) => haystack.includes(word));
}

function onPageCoverage(page, query) {
  const signals = PAGE_ONPAGE[page];
  if (!signals) return null;
  const words = queryWords(query);
  const title = textHasQueryWords(signals.title, words);
  const h1 = textHasQueryWords(signals.h1, words);
  const description = textHasQueryWords(signals.description, words);
  return {
    title,
    h1,
    description,
    hasFaq: Boolean(signals.hasFaq),
    aligned: title || h1 || description,
  };
}

function priorityFromMetrics(row, thresholds) {
  if (row.impressions >= thresholds.criticalImp && row.clicks === 0) return 'critical';
  if (row.impressions >= thresholds.highImp && row.ctr < 2) return 'high';
  if (row.position >= 4 && row.position <= 15 && row.impressions >= thresholds.mediumImp) return 'medium';
  return 'low';
}

function coveredActions(row, coverage) {
  const actions = [];
  const phrase = `"${row.name}"`;

  if (row.position > 20) {
    if (coverage.aligned) {
      actions.push(`${phrase} is already in the title, H1, or meta description — position ${row.position.toFixed(1)}`);
      actions.push('This is a competition and overlap issue. Do not rewrite the page for this query');
      return actions;
    }
    const missing = [];
    if (!coverage.title) missing.push('title tag');
    if (!coverage.h1) missing.push('H1');
    if (!coverage.description) missing.push('meta description');
    actions.push(`Improve on-page SEO for ${phrase} — currently position ${row.position.toFixed(1)}`);
    actions.push(`Add query to ${missing.join(', ')}`);
    return actions;
  }

  if (row.position > 10) {
    if (coverage.hasFaq) {
      actions.push(`FAQ schema is already on this page — position ${row.position.toFixed(1)}`);
      actions.push('Do not add another FAQ block. Monitor this query');
      return actions;
    }
    actions.push(`Push from page 2 to page 1 — position ${row.position.toFixed(1)} with ${row.impressions} impressions`);
    actions.push('Strengthen content depth and add FAQ schema');
    return actions;
  }

  if (coverage.aligned) {
    actions.push('Maintain ranking and monitor weekly');
    return actions;
  }

  return null;
}

function buildRecommendation(row, thresholds) {
  const match = findMatchingPage(row.name);
  const priority = priorityFromMetrics(row, thresholds);

  if (match?.action === 'navigational') {
    return {
      query: row.name,
      priority: 'low',
      type: 'navigational',
      targetPage: null,
      targetUrl: null,
      impressions: row.impressions,
      clicks: row.clicks,
      ctr: row.ctr,
      position: row.position,
      actions: [
        'This is the café’s own name, not a print keyword',
        'Do not create a landing page for this query',
      ],
    };
  }

  if (match) {
    const coverage = onPageCoverage(match.page, row.name);
    const actions = coverage ? coveredActions(row, coverage) : null;
    const resolved = actions || [];

    if (!actions) {
      if (row.position > 20) {
        resolved.push(`Improve on-page SEO for "${row.name}" — currently position ${row.position.toFixed(1)}`);
        resolved.push('Add query to title tag, H1, and meta description');
        resolved.push('Add internal links from homepage and related product pages');
      } else if (row.position > 10) {
        resolved.push(`Push from page 2 to page 1 — position ${row.position.toFixed(1)} with ${row.impressions} impressions`);
        resolved.push('Strengthen content depth and add FAQ schema');
      } else if (row.ctr < 3 && row.impressions >= thresholds.ctrImp) {
        resolved.push(`Improve CTR — ${row.ctr}% CTR on ${row.impressions} impressions`);
        resolved.push('Rewrite meta title/description to be more compelling');
      } else {
        resolved.push('Maintain ranking and monitor weekly');
      }
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
      actions: resolved,
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
  const thresholds = analysis.thresholds || {
    recOpportunity: 40,
    criticalImp: 80,
    highImp: 50,
    ctrImp: 30,
    mediumImp: 20,
  };
  const sourceRows = [
    ...analysis.highDemandZeroClicks,
    ...analysis.quickWins,
    ...analysis.opportunities.filter((o) => o.impressions >= thresholds.recOpportunity),
  ];

  const seen = new Set();
  const recommendations = [];

  for (const row of sourceRows) {
    const key = row.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    recommendations.push(buildRecommendation(row, thresholds));
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
