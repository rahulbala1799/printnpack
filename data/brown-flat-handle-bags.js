/**
 * Brown kraft flat-handle printed bags.
 * Indicative ex VAT prices. Ink coverage can change the final quote.
 *
 * Every size starts at €1.00 double-sided and €0.80 single-sided at 25 bags.
 * Each quantity step takes the same percentage off, chosen so 5,000 bags
 * lands on that size's floor. Single-sided stays 80% of double-sided.
 *
 * Medium sits between small (€0.25) and large (€0.30) at €0.27.
 */

export const BROWN_FLAT_HANDLE_ID = 'printed-flat-handle-bags-ireland';
export const BROWN_FLAT_HANDLE_PATH = '/printed-flat-handle-bags-ireland';
export const BROWN_FLAT_HANDLE_WARNING =
  'Price can change depending on ink usage. These are indicative prices only.';

export const BROWN_FLAT_HANDLE_QTYS = [25, 50, 100, 200, 500, 1000, 2000, 3000, 4000, 5000];

const DOUBLE_START = 1;
const SINGLE_START = 0.8;
const STEPS = BROWN_FLAT_HANDLE_QTYS.length - 1;

const bagPhoto = (file, alt) => ({ src: `/images/products/brown-flat-handle/${file}`, alt });

export const BROWN_FLAT_HANDLE_HERO = bagPhoto(
  'hero.jpg',
  'Four sizes of printed brown kraft bags with internal flat handles.'
);

export const BROWN_FLAT_HANDLE_EXAMPLES = [
  bagPhoto('design-ember.jpg', 'Printed kraft bag example for a coffee brand'),
  bagPhoto('design-fork.jpg', 'Printed kraft bag example with a green line illustration'),
  bagPhoto('design-slice.jpg', 'Printed kraft bag example for a food brand'),
];

export const BROWN_FLAT_HANDLE_SIZES = [
  {
    id: 'small',
    label: 'Small',
    sku: '180025',
    widthMm: 190,
    gussetMm: 80,
    heightMm: 250,
    caseQty: 250,
    endDouble: 0.25,
    use: 'Small retail items and pastries',
    ...bagPhoto('small.jpg', 'Small printed kraft bag, 190 × 80 × 250 mm, internal flat handles.'),
    option: '/images/products/brown-flat-handle/option-small.jpg',
  },
  {
    id: 'medium',
    label: 'Medium',
    sku: '180021',
    widthMm: 220,
    gussetMm: 100,
    heightMm: 250,
    caseQty: 250,
    endDouble: 0.27,
    use: 'Café, deli and everyday takeaway',
    ...bagPhoto('medium.jpg', 'Medium printed kraft bag, 220 × 100 × 250 mm, internal flat handles.'),
    option: '/images/products/brown-flat-handle/option-medium.jpg',
  },
  {
    id: 'large',
    label: 'Large',
    sku: '180013',
    widthMm: 260,
    gussetMm: 140,
    heightMm: 290,
    caseQty: 250,
    endDouble: 0.3,
    use: 'Most takeaway and retail orders',
    ...bagPhoto('large.jpg', 'Large printed kraft bag, 260 × 140 × 290 mm, internal flat handles.'),
    option: '/images/products/brown-flat-handle/option-large.jpg',
  },
  {
    id: 'xl',
    label: 'XL',
    sku: '180022',
    widthMm: 320,
    gussetMm: 240,
    heightMm: 320,
    caseQty: 200,
    endDouble: 0.35,
    use: 'Larger orders and multi-item bags',
    ...bagPhoto('xl.jpg', 'Extra-large printed kraft bag, 320 × 240 × 320 mm, internal flat handles.'),
    option: '/images/products/brown-flat-handle/option-xl.jpg',
  },
];

export const BROWN_FLAT_HANDLE_PHOTOS = [
  BROWN_FLAT_HANDLE_HERO,
  ...BROWN_FLAT_HANDLE_SIZES.map((size) => ({ src: size.src, alt: size.alt })),
  ...BROWN_FLAT_HANDLE_EXAMPLES,
  bagPhoto('print-both.jpg', 'Printed kraft bag with a design on the front and a different design on the back.'),
];

export const BROWN_FLAT_HANDLE_SIDES = [
  {
    id: 'single',
    label: 'Single side',
    image: '/images/products/brown-flat-handle/design-ember.jpg',
  },
  {
    id: 'double',
    label: 'Double side',
    image: '/images/products/brown-flat-handle/print-both.jpg',
  },
];

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

function allowed(list, id, fallback) {
  return list.some((item) => item.id === id) ? id : fallback;
}

export function snapBrownFlatHandleQty(qty) {
  const n = Math.round(Number(qty) || 0);
  let best = BROWN_FLAT_HANDLE_QTYS[0];
  let bestDist = Infinity;
  BROWN_FLAT_HANDLE_QTYS.forEach((tier) => {
    const dist = Math.abs(tier - n);
    if (dist < bestDist || (dist === bestDist && tier > best)) {
      best = tier;
      bestDist = dist;
    }
  });
  return best;
}

export function brownFlatHandleDimensions(size) {
  return `${size.widthMm} × ${size.gussetMm} × ${size.heightMm} mm`;
}

function endForSide(size, sides) {
  return sides === 'single' ? money(size.endDouble * SINGLE_START) : size.endDouble;
}

function startForSide(sides) {
  return sides === 'single' ? SINGLE_START : DOUBLE_START;
}

export function brownFlatHandleUnitPrice(size, sides, qty) {
  const index = BROWN_FLAT_HANDLE_QTYS.indexOf(snapBrownFlatHandleQty(qty));
  const start = startForSide(sides);
  const end = endForSide(size, sides);
  if (index <= 0) return start;
  if (index >= STEPS) return end;
  return money(start * Math.pow(end / start, index / STEPS));
}

export function normalizeBrownFlatHandle(input = {}) {
  const sizeId = allowed(BROWN_FLAT_HANDLE_SIZES, input.sizeId, 'large');
  const sides = allowed(BROWN_FLAT_HANDLE_SIDES, input.sides, 'double');
  return {
    sizeId,
    sides,
    qty: snapBrownFlatHandleQty(input.qty || 25),
  };
}

export function priceBrownFlatHandle(input) {
  const selection = normalizeBrownFlatHandle(input);
  const size = BROWN_FLAT_HANDLE_SIZES.find((item) => item.id === selection.sizeId);
  if (!size) return null;
  const unitPrice = brownFlatHandleUnitPrice(size, selection.sides, selection.qty);
  const lineTotal = money(unitPrice * selection.qty);
  return {
    ...selection,
    size,
    unitPrice,
    lineTotal,
    summary: brownFlatHandleSummary(selection, size),
  };
}

const SIDE_LABEL = { single: 'Single side', double: 'Double side' };

export function brownFlatHandleSummary(selection, size) {
  return [
    `${size.label} ${brownFlatHandleDimensions(size)}`,
    SIDE_LABEL[selection.sides],
    'Brown kraft',
  ].join(' · ');
}

export function brownFlatHandlePreview(input = {}) {
  const selection = normalizeBrownFlatHandle(input);
  const size = BROWN_FLAT_HANDLE_SIZES.find((item) => item.id === selection.sizeId);
  if (input.focus === 'sides' && selection.sides === 'double') {
    return BROWN_FLAT_HANDLE_PHOTOS.find((item) => item.src.endsWith('print-both.jpg'));
  }
  if (input.focus === 'sides') {
    return BROWN_FLAT_HANDLE_EXAMPLES[0];
  }
  if (input.focus === 'size' && size) return { src: size.src, alt: size.alt };
  return BROWN_FLAT_HANDLE_HERO;
}

export function brownFlatHandleFromPrice() {
  const small = BROWN_FLAT_HANDLE_SIZES[0];
  return brownFlatHandleUnitPrice(small, 'single', 5000);
}

export function buildBrownFlatHandleQuoteLine(catalogItem, raw) {
  const priced = priceBrownFlatHandle(raw);
  if (!priced) return null;
  const images = BROWN_FLAT_HANDLE_PHOTOS.map((item) => item.src);
  return {
    moduleId: 'brown-flat-handle',
    productId: catalogItem?.id || BROWN_FLAT_HANDLE_ID,
    name: catalogItem?.name || 'Brown Flat Handle Printed Bags',
    href: catalogItem?.href || BROWN_FLAT_HANDLE_PATH,
    image: priced.size.src || images[0] || null,
    images,
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      sizeId: priced.sizeId,
      sides: priced.sides,
      qty: priced.qty,
    },
    fingerprint: ['brown-flat-handle', priced.sizeId, priced.sides].join('|'),
  };
}
