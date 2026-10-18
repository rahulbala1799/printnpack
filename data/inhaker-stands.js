/**
 * Inhaker exhibition stand quote.
 * Print costs are Print.com sales prices for sku inhaker-stand, sampled 18 Oct 2026.
 * salesPrice already includes the membership discount. Copies scale linearly.
 * Customer price = print cost × INHAKER_MARKUP, plus one Ireland delivery.
 * Prices are ex VAT. Delivery is €39.95 per shipment (DHG to IE A84 KV57).
 * That rate is confirmed for the 195 cm panel, including 2 and 5 copies.
 * The 247.5 cm and 300 cm panels returned no Ireland shipping quote, so they use the same rate.
 *
 * The price is the printed panel. Posts and foot plates are not included.
 * Photos are example prints. The customer's own artwork goes on the panel.
 */

export const INHAKER_ID = 'inhaker-stands-ireland';
export const INHAKER_PATH = '/inhaker-stands-ireland';
export const INHAKER_MARKUP = 1.45;
export const INHAKER_DELIVERY = 39.95;
export const INHAKER_EXAMPLE_CAPTION = 'Example print. Your own artwork goes on the panel.';

const photo = (file, alt) => ({ src: `/images/banners/inhaker/${file}`, alt });

export const INHAKER_PHOTOS = {
  '195': photo('inhaker-195.jpg', 'Inhaker exhibition panel, 88 × 195 cm, hooked between two posts. Example print.'),
  '247': photo('inhaker-247.jpg', 'Inhaker exhibition panel, 88 × 247.5 cm, hooked between two posts. Example print.'),
  '300': photo('inhaker-300.jpg', 'Inhaker exhibition panel, 88 × 300 cm, hooked between two posts. Example print.'),
  reboard: photo('inhaker-reboard.jpg', '10 mm Re-board inhaker panel, with the honeycomb core visible. Example print.'),
  forex: photo('inhaker-forex.jpg', '10 mm Forex inhaker panel, with the foam core visible. Example print.'),
  front: photo('inhaker-front.jpg', 'Inhaker panel printed on the front only, plain on the back. Example print.'),
  both: photo('inhaker-both.jpg', 'Inhaker panel printed on both sides. Example print.'),
  hero: photo('inhaker-hero.jpg', 'Three inhaker exhibition panels hooked into a run of posts. Example print.'),
  five: photo('inhaker-five.jpg', 'Five inhaker exhibition panels hooked into one stand. Example print.'),
};

export const INHAKER_GALLERY = [
  INHAKER_PHOTOS.hero,
  INHAKER_PHOTOS['195'],
  INHAKER_PHOTOS['247'],
  INHAKER_PHOTOS['300'],
  INHAKER_PHOTOS.reboard,
  INHAKER_PHOTOS.forex,
  INHAKER_PHOTOS.front,
  INHAKER_PHOTOS.both,
  INHAKER_PHOTOS.five,
];

export const INHAKER_SIZES = [
  { id: '195', label: '88 × 195 cm', photo: '195' },
  { id: '247', label: '88 × 247.5 cm', photo: '247' },
  { id: '300', label: '88 × 300 cm', photo: '300' },
];

export const INHAKER_MATERIALS = [
  { id: 'reboard', label: '10 mm Re-board', photo: 'reboard' },
  { id: 'forex', label: '10 mm Forex', photo: 'forex' },
];

export const INHAKER_PRINTS = [
  { id: 'front', label: 'Front only', photo: 'front' },
  { id: 'both', label: 'Both sides', photo: 'both' },
];

/** Print.com salesPrice for one panel. Key: size|material|print */
const PRINT_COST = {
  '195|reboard|front': 39.65,
  '195|reboard|both': 45.37,
  '195|forex|front': 83.09,
  '195|forex|both': 88.81,
  '247|reboard|front': 50.33,
  '247|reboard|both': 57.59,
  '247|forex|front': 105.44,
  '247|forex|both': 112.7,
  '300|reboard|front': 61,
  '300|reboard|both': 69.81,
  '300|forex|front': 127.79,
  '300|forex|both': 136.6,
};

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

function allowed(list, id, fallback) {
  return list.some((item) => item.id === id) ? id : fallback;
}

export function normalizeInhaker(input = {}) {
  const qty = Math.round(Number(input.qty) || 1);
  return {
    sizeId: allowed(INHAKER_SIZES, input.sizeId, '195'),
    material: allowed(INHAKER_MATERIALS, input.material, 'reboard'),
    print: allowed(INHAKER_PRINTS, input.print, 'front'),
    qty: Math.min(10, Math.max(1, qty)),
  };
}

export function priceInhaker(input) {
  const selection = normalizeInhaker(input);
  const size = INHAKER_SIZES.find((item) => item.id === selection.sizeId);
  const unitCost = PRINT_COST[`${selection.sizeId}|${selection.material}|${selection.print}`];
  if (unitCost == null || !size) return null;
  const lineTotal = money(unitCost * selection.qty * INHAKER_MARKUP + INHAKER_DELIVERY);
  const unitPrice = money(lineTotal / selection.qty);
  return {
    ...selection,
    size,
    unitCost,
    delivery: INHAKER_DELIVERY,
    panelPrice: money(unitCost * INHAKER_MARKUP),
    unitPrice,
    lineTotal,
    summary: inhakerSummary(selection, size),
  };
}

const MATERIAL_LABEL = { reboard: '10 mm Re-board', forex: '10 mm Forex' };
const PRINT_LABEL = { front: 'Front only', both: 'Both sides' };

export function inhakerSummary(selection, size) {
  const panels = selection.qty === 1 ? '1 panel' : `${selection.qty} panels`;
  return [size.label, MATERIAL_LABEL[selection.material], PRINT_LABEL[selection.print], panels].join(' · ');
}

export function inhakerPreview(input = {}) {
  const selection = normalizeInhaker(input);
  const sizePhoto = INHAKER_PHOTOS[selection.sizeId];
  const materialPhoto = INHAKER_PHOTOS[selection.material];
  const printPhoto = INHAKER_PHOTOS[selection.print];
  if (input.focus === 'print') return printPhoto;
  if (input.focus === 'material') return materialPhoto;
  if (input.focus === 'size') return sizePhoto;
  if (selection.qty >= 5) return INHAKER_PHOTOS.five;
  if (selection.qty >= 3) return INHAKER_PHOTOS.hero;
  return sizePhoto;
}

export function inhakerFromPrice() {
  return priceInhaker({}).lineTotal;
}

const SIZE_FACTS = {
  '195': { visibleWidthCm: 88, visibleHeightCm: 195, cutWidthCm: 95.8, cutHeightCm: 195 },
  '247': { visibleWidthCm: 88, visibleHeightCm: 247.5, cutWidthCm: 95.8, cutHeightCm: 247.5 },
  '300': { visibleWidthCm: 88, visibleHeightCm: 300, cutWidthCm: 95.8, cutHeightCm: 300 },
};

/** Complete product record for answer engines. Customer sell prices only. */
export function inhakerMachineRecord(siteUrl = 'https://www.printnpack.ie') {
  const pageUrl = `${siteUrl}${INHAKER_PATH}`;
  const variants = [];
  INHAKER_SIZES.forEach((size) => {
    INHAKER_MATERIALS.forEach((material) => {
      INHAKER_PRINTS.forEach((print) => {
        const pricesExVatDeliveryIncludedEur = {};
        for (let qty = 1; qty <= 10; qty += 1) {
          const priced = priceInhaker({
            sizeId: size.id,
            material: material.id,
            print: print.id,
            qty,
          });
          pricesExVatDeliveryIncludedEur[String(qty)] = priced.lineTotal;
        }
        variants.push({
          visibleSize: size.label,
          ...SIZE_FACTS[size.id],
          material: material.label,
          materialId: material.id,
          print: print.label,
          printId: print.id,
          pricesExVatDeliveryIncludedEur,
        });
      });
    });
  });

  return {
    product: 'Printed exhibition wall',
    tradeName: 'Inhaker stand',
    pageUrl,
    specificationUrl: `${siteUrl}/llms/exhibition-walls.txt`,
    specificationJsonUrl: `${siteUrl}/llms/exhibition-walls.json`,
    seller: {
      name: 'PrintNPack',
      address: 'Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath, A84 KV57, Ireland',
      phone: '+353 89 415 7369',
      email: 'info@printnpack.ie',
    },
    alsoCalled: [
      'exhibition wall',
      'printed exhibition wall',
      'rigid exhibition wall',
      'display wall',
      'trade show wall',
      'booth wall',
      'modular panel wall',
      'printed display panel',
      'exhibition panel',
      'inhaker stand',
      'inhaker exhibition stand',
      'inhaker panel',
      'hook-in display panel',
      'hook-in exhibition panel',
      'Re-board display panel',
      'Forex display panel',
      'freestanding exhibition panel',
    ],
    whatItIs: 'A rigid printed panel that hooks into upright posts. Panels can be added side by side to make a longer wall, and the graphic can be reprinted later. The visible face is 88 cm wide. The panel is cut at 95.8 cm wide so the edges hook into the posts.',
    whatItIsNot: [
      'Not a folding pop-up display stand or pop-up wall',
      'Not a stretch fabric banner stand or media wall',
      'Not a freestanding LED frame or lightbox',
      'Not a roll-up banner',
      'Not an unprinted board',
    ],
    included: [
      'The printed panel, contour-cut to hook into a post',
      'Full-colour print, either the front only or both sides',
      'One delivery to Ireland, included once per order line',
    ],
    notIncluded: [
      'Upright posts',
      'Foot plates',
      'Wheels',
      'A choice of post colour',
    ],
    materials: [
      { id: 'reboard', name: '10 mm Re-board', description: 'Light honeycomb board, 10 mm thick, easier to carry to the next show.' },
      { id: 'forex', name: '10 mm Forex', description: 'Solid foam board, 10 mm thick, heavier and stiffer than Re-board.' },
    ],
    printOptions: [
      { id: 'front', name: 'Front only', description: 'Full colour on the face (4/0). The back is plain.' },
      { id: 'both', name: 'Both sides', description: 'Full colour on both faces (4/4).' },
    ],
    artwork: 'The customer supplies the artwork. Photographs on the page are examples, including a sample food-brand graphic, and are not the print the customer receives.',
    quantity: { min: 1, max: 10, unit: 'panels in one order line' },
    priceRules: {
      currency: 'EUR',
      vat: 'Prices are ex VAT. An Irish VAT invoice adds 23% VAT.',
      delivery: 'Ireland delivery of €39.95 is included once per order line, not once per panel. The same amount is used for every height. It is the confirmed Ireland rate for the 195 cm panel at 1, 2 and 5 copies. The 247.5 cm and 300 cm panels are quoted with that same delivery amount.',
      howToRead: 'pricesExVatDeliveryIncludedEur is the full line total for that many panels, delivery included, ex VAT. Do not multiply the 1-panel price by the quantity.',
    },
    variants,
    images: INHAKER_GALLERY.map((item) => ({ url: `${siteUrl}${item.src}`, alt: item.alt })),
    ordering: 'The customer builds the wall on the product page and adds it to a quote. PrintNPack replies to quote requests. This page does not take an instant card payment.',
  };
}

export function inhakerMachineText(siteUrl) {
  const record = inhakerMachineRecord(siteUrl);
  const lines = [
    `# ${record.product}`,
    '',
    `Trade name: ${record.tradeName}.`,
    `Page: ${record.pageUrl}`,
    `Seller: ${record.seller.name}, ${record.seller.address}. Phone ${record.seller.phone}. Email ${record.seller.email}.`,
    '',
    record.whatItIs,
    '',
    `Also called: ${record.alsoCalled.join(', ')}.`,
    '',
    'This product is not:',
    ...record.whatItIsNot.map((item) => `- ${item}`),
    '',
    'Included:',
    ...record.included.map((item) => `- ${item}`),
    '',
    'Not included:',
    ...record.notIncluded.map((item) => `- ${item}`),
    '',
    'Materials:',
    ...record.materials.map((item) => `- ${item.name}. ${item.description}`),
    '',
    'Print:',
    ...record.printOptions.map((item) => `- ${item.name}. ${item.description}`),
    '',
    record.artwork,
    '',
    `Quantity: ${record.quantity.min} to ${record.quantity.max} ${record.quantity.unit}.`,
    record.priceRules.vat,
    record.priceRules.delivery,
    record.priceRules.howToRead,
    record.ordering,
    '',
    'Prices are EUR, ex VAT, one Ireland delivery included.',
    '',
  ];
  record.variants.forEach((variant) => {
    lines.push(`${variant.visibleSize} visible (${variant.cutWidthCm} × ${variant.cutHeightCm} cm cut) · ${variant.material} · ${variant.print}`);
    const cells = Object.entries(variant.pricesExVatDeliveryIncludedEur)
      .map(([qty, price]) => `${qty}=${price.toFixed(2)}`)
      .join(' ');
    lines.push(cells);
    lines.push('');
  });
  lines.push('Images:');
  record.images.forEach((image) => {
    lines.push(`- ${image.url} — ${image.alt}`);
  });
  return `${lines.join('\n')}\n`;
}

export function buildInhakerQuoteLine(catalogItem, raw) {
  const priced = priceInhaker(raw);
  if (!priced) return null;
  const preview = inhakerPreview({ ...priced, focus: raw?.focus });
  const images = INHAKER_GALLERY.map((item) => item.src);
  return {
    moduleId: 'inhaker-stands',
    productId: catalogItem?.id || INHAKER_ID,
    name: catalogItem?.name || 'Inhaker Stand',
    href: catalogItem?.href || INHAKER_PATH,
    image: preview?.src || images[0] || null,
    images,
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      sizeId: priced.sizeId,
      material: priced.material,
      print: priced.print,
      focus: raw?.focus || null,
      qty: priced.qty,
    },
    fingerprint: ['inhaker-stands', priced.sizeId, priced.material, priced.print].join('|'),
  };
}
