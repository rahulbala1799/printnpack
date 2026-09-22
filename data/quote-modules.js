import { clothingProducts } from './clothing-products';
import products from './products';
import {
  GARMENT_PRICING,
  MIN_QTY,
  PRINT_COMBOS,
  colourRangesForGarment,
  pricePerPiece,
} from './clothing-pricing';

function productMedia(id, href, fallbackImage) {
  const match = products.find((item) => item.id === id || item.url === href);
  const images = [];
  if (Array.isArray(match?.images)) images.push(...match.images.filter(Boolean));
  if (match?.imageSrc && !images.includes(match.imageSrc)) images.unshift(match.imageSrc);
  if (fallbackImage && !images.includes(fallbackImage)) images.unshift(fallbackImage);
  return { image: images[0] || null, images };
}

function withMedia(entry) {
  return { ...entry, ...productMedia(entry.id, entry.href, entry.image) };
}

/** Every catalog item that already has a quote builder on its page. */
export const QUOTE_CATALOG = [
  ...clothingProducts.map((product) =>
    withMedia({
      id: product.id,
      name: product.name,
      href: product.url || `/clothing/${product.id}`,
      image: product.imageSrc,
      images: product.images,
      price: product.price,
      moduleId: 'clothing',
      configurable: true,
      group: 'Clothing',
    })
  ),
  withMedia({ id: 'custom-pizza-boxes-ireland', name: 'Custom Pizza Boxes', href: '/custom-pizza-boxes-ireland', moduleId: 'pizza-boxes', configurable: false, group: 'Packaging', price: 'From 500 units' }),
  withMedia({ id: 'eco-bagasse-burger-boxes', name: 'Bagasse Burger Boxes', href: '/eco-bagasse-burger-boxes', moduleId: 'bagasse', configurable: false, group: 'Packaging' }),
  withMedia({ id: 'greaseproof-sheets-ireland', name: 'Greaseproof Sheets', href: '/greaseproof-sheets-ireland', moduleId: 'greaseproof', configurable: false, group: 'Packaging' }),
  withMedia({ id: 'labels-on-a-roll', name: 'Labels on a Roll', href: '/labels-on-a-roll', moduleId: 'labels', configurable: false, group: 'Stickers & Labels' }),
  withMedia({ id: 'vinyl-stickers', name: 'Vinyl Stickers', href: '/vinyl-stickers', moduleId: 'vinyl-stickers', configurable: false, group: 'Stickers & Labels' }),
  withMedia({ id: 'roll-up-banners-ireland', name: 'Roll-Up Banners', href: '/roll-up-banners-ireland', moduleId: 'roll-up-banners', configurable: false, group: 'Banners, Stands and Frames' }),
  withMedia({ id: 'extra-wide-roll-up-banners-ireland', name: 'Extra-Wide Roll-Ups', href: '/extra-wide-roll-up-banners-ireland', moduleId: 'extra-wide-roll-ups', configurable: false, group: 'Banners, Stands and Frames' }),
  withMedia({ id: 'fabric-banner-stands-ireland', name: 'Fabric Banner Stands', href: '/fabric-banner-stands-ireland', moduleId: 'fabric-banner-stands', configurable: true, group: 'Banners, Stands and Frames', price: 'Contact for quote' }),
  withMedia({ id: 'curved-banner-stands-ireland', name: 'Curved Banner Stands', href: '/curved-banner-stands-ireland', moduleId: 'curved-banner-stands', configurable: true, group: 'Banners, Stands and Frames', price: 'Contact for quote' }),
  withMedia({ id: 'stage-backdrop-banners-ireland', name: 'Stage Backdrop Banners', href: '/stage-backdrop-banners-ireland', moduleId: 'stage-backdrops', configurable: false, group: 'Banners, Stands and Frames' }),
  withMedia({ id: 'vinyl-banners', name: 'Vinyl Banners', href: '/vinyl-banners', moduleId: 'vinyl-banners', configurable: false, group: 'Banners, Stands and Frames' }),
  withMedia({ id: 'custom-printed-flags-ireland', name: 'Custom Printed Flags', href: '/custom-printed-flags-ireland', moduleId: 'flags', configurable: false, group: 'Wide Format' }),
  withMedia({ id: 'posters', name: 'Posters', href: '/posters', moduleId: 'posters', configurable: false, group: 'Wide Format' }),
  withMedia({ id: 'foamex-boards', name: 'Foamex Boards', href: '/foamex-boards', moduleId: 'foamex', configurable: false, group: 'Boards' }),
  withMedia({ id: 'correx-boards', name: 'Correx Boards', href: '/correx-boards', moduleId: 'correx', configurable: false, group: 'Boards' }),
  withMedia({ id: 'premium-leaflets-ireland', name: 'Premium Leaflets', href: '/premium-leaflets-ireland', moduleId: 'leaflets', configurable: false, group: 'Print' }),
  withMedia({ id: 'rubber-stamps-ireland', name: 'Rubber Stamps', href: '/rubber-stamps', moduleId: 'rubber-stamps', configurable: false, group: 'Stamps' }),
];

export function resolveQuoteImage(item) {
  if (item?.image) return item.image;
  return getQuoteCatalogItem(item?.productId)?.image || null;
}

export const QUOTE_GROUPS = [...new Set(QUOTE_CATALOG.map((item) => item.group))];

export function getQuoteCategories() {
  const groups = QUOTE_GROUPS.map((name) => {
    const items = QUOTE_CATALOG.filter((item) => item.group === name);
    return {
      id: name,
      name,
      count: items.length,
      image: items[0]?.image || null,
      thumbs: items.map((item) => item.image).filter(Boolean).slice(0, 4),
    };
  });

  return [
    {
      id: 'All',
      name: 'All products',
      count: QUOTE_CATALOG.length,
      image: QUOTE_CATALOG[0]?.image || null,
      thumbs: groups.map((group) => group.image).filter(Boolean).slice(0, 4),
    },
    ...groups,
  ];
}

export function getQuoteCatalogItem(id) {
  return QUOTE_CATALOG.find((item) => item.id === id);
}

const DIMENSIONS_MM = { key: 'size', label: 'Size', type: 'dimensions', unit: 'mm' };
const DIMENSIONS_CM = { key: 'size', label: 'Size', type: 'dimensions', unit: 'cm' };

export const GENERIC_MODULE_FIELDS = {
  'pizza-boxes': [
    { key: 'sizePreset', label: 'Box size', type: 'chips', options: ['10 inch', '12 inch', '14 inch', 'Custom'] },
    { key: 'print', label: 'Print', type: 'chips', options: ['1 colour', '2 colour', 'Full colour'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 500 },
  ],
  bagasse: [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['Small', 'Regular', 'Large', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 250 },
  ],
  greaseproof: [
    { key: 'sizePreset', label: 'Sheet size', type: 'chips', options: ['A4', '300×300 mm', 'Custom'] },
    { key: 'print', label: 'Print', type: 'chips', options: ['1 colour', 'Full colour'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 500 },
  ],
  labels: [
    { key: 'shape', label: 'Shape', type: 'chips', options: ['Circle', 'Rectangle', 'Oval', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 250 },
  ],
  'vinyl-stickers': [
    { key: 'finish', label: 'Finish', type: 'chips', options: ['Gloss', 'Matt', 'Transparent'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 50 },
  ],
  'vinyl-banners': [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['2×4 ft', '3×6 ft', '4×8 ft', '5×10 ft', 'Custom'] },
    DIMENSIONS_CM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  'roll-up-banners': [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['850×2000 mm', '1000×2000 mm', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  'extra-wide-roll-ups': [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['1200 mm', '1500 mm', '2000 mm', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  'fabric-banner-stands': [
    { key: 'kit', label: 'Kit', type: 'chips', options: ['Complete set (frame + graphic)', 'Graphic only'] },
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['250 × 228 cm', '300 × 230 cm', '400 × 230 cm', '500 × 230 cm', '600 × 230 cm', 'Custom'] },
    { key: 'print', label: 'Print', type: 'chips', options: ['Single-sided', 'Double-sided'] },
    DIMENSIONS_CM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  'curved-banner-stands': [
    { key: 'kit', label: 'Kit', type: 'chips', options: ['Complete set (frame + graphic)', 'Print only'] },
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['300 × 230 cm', '400 × 230 cm', '500 × 230 cm', 'Custom'] },
    { key: 'print', label: 'Print', type: 'chips', options: ['Single-sided', 'Double-sided'] },
    DIMENSIONS_CM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  'stage-backdrops': [
    DIMENSIONS_CM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  flags: [
    { key: 'sizePreset', label: 'Flag size', type: 'chips', options: ['Small', 'Medium', 'Large', 'Custom'] },
    DIMENSIONS_CM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  posters: [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['A3', 'A2', 'A1', 'A0', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  foamex: [
    { key: 'thickness', label: 'Thickness', type: 'chips', options: ['3 mm', '5 mm', '10 mm'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  correx: [
    { key: 'thickness', label: 'Thickness', type: 'chips', options: ['3 mm', '4 mm', '5 mm'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
  leaflets: [
    { key: 'sizePreset', label: 'Size', type: 'chips', options: ['A6', 'A5', 'A4', 'Custom'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 250 },
  ],
  'rubber-stamps': [
    { key: 'type', label: 'Stamp type', type: 'chips', options: ['Self-inking', 'Traditional', 'Date stamp'] },
    DIMENSIONS_MM,
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ],
};

export function getModuleFields(moduleId) {
  return GENERIC_MODULE_FIELDS[moduleId] || [
    { key: 'size', label: 'Size', type: 'dimensions', unit: 'mm' },
    { key: 'qty', label: 'Quantity', type: 'qty', min: 1 },
  ];
}

function fieldSummary(field, options) {
  if (field.type === 'qty') return null;
  if (field.type === 'dimensions') {
    const width = String(options.width || '').trim();
    const length = String(options.length || '').trim();
    if (!width && !length) return null;
    const unit = field.unit || 'mm';
    if (width && length) return `${width} × ${length} ${unit}`;
    return `${width || length} ${unit}`;
  }
  return options[field.key] || null;
}

export function buildCatalogQuoteLine(catalogItem, options = {}) {
  const fields = getModuleFields(catalogItem.moduleId);
  const qtyField = fields.find((field) => field.type === 'qty');
  const qty = Number(options.qty) || qtyField?.min || 1;
  const summary = fields
    .map((field) => fieldSummary(field, options))
    .filter(Boolean)
    .join(' · ');

  return {
    moduleId: catalogItem.moduleId,
    productId: catalogItem.id,
    name: catalogItem.name,
    href: catalogItem.href,
    image: catalogItem.image || null,
    images: catalogItem.images || (catalogItem.image ? [catalogItem.image] : []),
    qty,
    unitPrice: null,
    lineTotal: null,
    summary,
    options,
    fingerprint: `${catalogItem.moduleId}|${catalogItem.id}`,
  };
}

export function clothingDefaults(product) {
  const colour = colourRangesForGarment(product.pricingKey)[0]?.colours[0] || null;
  return {
    colour,
    size: 'M',
    qty: MIN_QTY,
    combo: PRINT_COMBOS[0],
  };
}

export function buildClothingQuoteLine(product, overrides = {}) {
  const defaults = clothingDefaults(product);
  const colour = overrides.colour || defaults.colour;
  const size = overrides.size || defaults.size;
  const qty = Number(overrides.qty) || defaults.qty;
  const combo = overrides.combo || defaults.combo;
  const pricing = GARMENT_PRICING[product.pricingKey];
  const unit = pricing ? pricePerPiece(pricing.base, combo.areas, qty) : null;

  return {
    moduleId: 'clothing',
    productId: product.id,
    name: product.name,
    href: product.url || `/clothing/${product.id}`,
    image: product.imageSrc || product.image || null,
    images: product.images || (product.imageSrc ? [product.imageSrc] : []),
    qty,
    unitPrice: unit,
    lineTotal: unit != null ? Math.round(unit * qty * 100) / 100 : null,
    summary: [colour?.name, size, combo.label].filter(Boolean).join(' · '),
    options: {
      colour: colour?.name || null,
      colourId: colour?.id || null,
      size,
      print: combo.label,
      printId: combo.id,
      areas: combo.areas,
    },
    fingerprint: `clothing|${product.id}|${colour?.id || 'none'}|${size}|${combo.id}`,
  };
}

export function repriceClothingLine(line, qty) {
  const product = clothingProducts.find((item) => item.id === line.productId);
  if (!product) return { ...line, qty };
  const combo = PRINT_COMBOS.find((item) => item.id === line.options?.printId) || PRINT_COMBOS[0];
  return buildClothingQuoteLine(product, {
    colour: line.options?.colourId
      ? { id: line.options.colourId, name: line.options.colour }
      : undefined,
    size: line.options?.size,
    qty,
    combo,
  });
}

export function repriceQuoteLine(line, qty) {
  if (line.moduleId === 'clothing') {
    return { ...repriceClothingLine(line, qty), id: line.id };
  }
  const safeQty = Math.max(1, Number(qty) || 1);
  const unit = line.unitPrice;
  return {
    ...line,
    qty: safeQty,
    lineTotal: unit != null ? Math.round(unit * safeQty * 100) / 100 : line.lineTotal,
  };
}

export function formatQuoteMessage(items, notes) {
  const lines = items.map((item, index) => {
    const price = item.lineTotal != null ? `€${Number(item.lineTotal).toFixed(2)}` : 'Quote';
    const unit = item.unitPrice != null ? `€${Number(item.unitPrice).toFixed(2)}` : '—';
    return `${index + 1}. ${item.name}
   ${item.summary || ''}
   Qty: ${item.qty} · Unit: ${unit} · Line: ${price}`;
  });

  const subtotal = items.reduce((sum, item) => sum + (Number(item.lineTotal) || 0), 0);

  return `Quote basket (${items.length} line${items.length === 1 ? '' : 's'}):

${lines.join('\n\n')}

Indicative subtotal (ex VAT): €${subtotal.toFixed(2)}

Notes:
${notes || 'None'}`;
}
