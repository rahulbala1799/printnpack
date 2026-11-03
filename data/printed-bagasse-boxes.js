/**
 * Printed bagasse burger and meal boxes.
 * Prices are ex VAT for a CMYK logo.
 * The 6" burger box is the benchmark: €0.80 at 100, €0.30 at 5,000.
 * Every other box uses that ladder, shifted by the difference in blank-box cost.
 */

export const PRINTED_BAGASSE_ID = 'custom-burger-boxes-ireland';
export const PRINTED_BAGASSE_PATH = '/custom-burger-boxes-ireland';
export const PRINTED_BAGASSE_QTYS = [100, 200, 500, 1000, 2000, 3000, 4000, 5000];
export const PRINTED_BAGASSE_PRINT = 'CMYK logo';

const photo = (file) => `/images/products/bagasse-burger-box/${file}`;

export const PRINTED_BAGASSE_GALLERY = [
  { src: photo('ember-burger.jpg'), alt: 'Open printed bagasse burger box with an Ember Burger logo beside a closed box' },
  { src: photo('happy-patty.jpg'), alt: 'Stacked printed bagasse boxes with a Happy Patty logo' },
  { src: photo('three-brands.jpg'), alt: 'Three printed bagasse boxes with Stack House, Burger Social and Green Bun logos' },
];

export const PRINTED_BAGASSE_BOXES = [
  {
    id: '6-inch',
    slug: '6-inch-bagasse-burger-box',
    catalogId: 'printed-bagasse-6-inch',
    label: '6" burger',
    short: '6" burger box',
    name: '6 inch printed bagasse burger box',
    size: '15 × 15 cm',
    pack: '8 × 50',
    image: photo('ember-burger.jpg'),
    use: 'Classic burgers and chicken burgers',
    prices: [0.8, 0.7, 0.6, 0.53, 0.46, 0.4, 0.35, 0.3],
    h1: '6 Inch Printed Bagasse Burger Boxes',
    title: '6 Inch Printed Bagasse Burger Boxes Ireland | CMYK Logo',
    description:
      'Printed 6 inch bagasse burger boxes in Ireland, 15 × 15 cm. Compostable sugarcane fibre, CMYK logo, from €0.80 ex VAT at 100 boxes down to €0.30 at 5,000. Delivery nationwide.',
    lead:
      'The 15 × 15 cm clamshell is the standard printed burger box. It holds a classic burger or a chicken burger, and the lid takes a CMYK logo.',
    paragraphs: [
      'This is the price benchmark for the printed bagasse range. One hundred boxes are €0.80 each, ex VAT. Five thousand boxes are €0.30 each. The steps in between are 200, 500, 1,000, 2,000, 3,000 and 4,000.',
      'The board is sugarcane fibre. It is compostable, oil-resistant and suitable for hot takeaway. Print is a CMYK logo on the lid. Plain unprinted 6 inch boxes are still sold by the case if you do not need a logo.',
    ],
  },
  {
    id: '7-inch',
    slug: '7-inch-bagasse-meal-box',
    catalogId: 'printed-bagasse-7-inch',
    label: '7" rectangle',
    short: '7" rectangle',
    name: '7 inch printed bagasse meal box',
    size: '7 inch rectangle',
    pack: '12 × 50',
    image: photo('7in-food.jpg'),
    gallery: [
      { src: photo('7in-food.jpg'), alt: 'Printed 7 inch bagasse box, Bun and Leaf, open with wraps and salad' },
      { src: photo('7in-studio.jpg'), alt: 'Printed 7 inch bagasse box with a Bun and Leaf logo, one open on white' },
    ],
    use: 'Smaller burgers, sandwiches and wraps',
    prices: [0.79, 0.69, 0.59, 0.52, 0.45, 0.39, 0.34, 0.29],
    h1: '7 Inch Printed Bagasse Meal Boxes',
    title: '7 Inch Printed Bagasse Meal Boxes Ireland | CMYK Logo',
    description:
      'Printed 7 inch rectangular bagasse meal boxes in Ireland. Compostable sugarcane fibre with a CMYK logo, from €0.79 ex VAT at 100 boxes down to €0.29 at 5,000.',
    lead:
      'A smaller rectangular clamshell for sandwiches, wraps and burgers that do not need the square 6 inch box.',
    paragraphs: [
      'The blank box costs slightly less than the 6 inch burger box, so the printed price sits one cent under that benchmark at every quantity. One hundred boxes are €0.79 each, ex VAT. Five thousand are €0.29 each.',
      'Use it for deli sandwiches, wraps and compact burgers. The lid is printed in CMYK only. The same shape is available unprinted by the case from plain packaging.',
    ],
  },
  {
    id: '6x4',
    slug: '6x4-bagasse-lunch-box',
    catalogId: 'printed-bagasse-6x4',
    label: '6×4" lunch',
    short: '6×4" lunch box',
    name: '6×4 inch printed bagasse lunch box',
    size: '6 × 4 inch',
    pack: '20 × 50',
    image: photo('6x4-food.jpg'),
    gallery: [
      { src: photo('6x4-food.jpg'), alt: 'Printed 6×4 inch bagasse lunch box, Little Lunch, open with a sandwich and salad' },
      { src: photo('6x4-studio.jpg'), alt: 'Printed 6×4 inch bagasse lunch box with a Little Lunch logo, one open on white' },
    ],
    use: 'Sliders, kids meals and small sandwiches',
    prices: [0.79, 0.69, 0.59, 0.52, 0.45, 0.39, 0.34, 0.29],
    h1: '6×4 Inch Printed Bagasse Lunch Boxes',
    title: '6×4 Printed Bagasse Lunch Boxes Ireland | CMYK Logo',
    description:
      'Printed 6×4 inch bagasse lunch boxes in Ireland for sliders and kids meals. Compostable, CMYK logo, from €0.79 ex VAT at 100 boxes down to €0.29 at 5,000.',
    lead:
      'The small lunch box is for sliders, kids meals and sandwiches that would rattle in a full burger clamshell.',
    paragraphs: [
      'Printed prices match the 7 inch rectangle: €0.79 each at 100 boxes and €0.29 each at 5,000, ex VAT. Print is a CMYK logo.',
      'Cafés use this size for a single sandwich or a kids burger. It is compostable bagasse, the same material as the larger meal boxes, in a shallower pack.',
    ],
  },
  {
    id: '8x8',
    slug: '8x8-bagasse-meal-box',
    catalogId: 'printed-bagasse-8x8',
    label: '8×8"',
    short: '8×8" meal box',
    name: '8×8 inch printed bagasse meal box',
    size: '8 × 8 inch',
    pack: '5 × 50',
    image: photo('8x8-food.jpg'),
    gallery: [
      { src: photo('8x8-food.jpg'), alt: 'Printed 8×8 inch bagasse meal box, Ember Kitchen, open with chicken and rice' },
      { src: photo('8x8-studio.jpg'), alt: 'Printed 8×8 inch bagasse meal box with an Ember Kitchen logo, one open on white' },
    ],
    use: 'Gourmet burgers and single-compartment meals',
    prices: [0.91, 0.81, 0.71, 0.64, 0.57, 0.51, 0.46, 0.41],
    h1: '8×8 Inch Printed Bagasse Meal Boxes',
    title: '8×8 Printed Bagasse Meal Boxes Ireland | HP4, CMYK Logo',
    description:
      'Printed 8×8 inch HP4 bagasse meal boxes in Ireland. One compartment, compostable, CMYK logo from €0.91 ex VAT at 100 boxes down to €0.41 at 5,000.',
    lead:
      'The 8×8 inch HP4 box is the single-compartment meal box for a gourmet burger or a larger hot meal.',
    paragraphs: [
      'It costs more to buy blank than the 6 inch burger box, so the printed price is higher by that difference. One hundred boxes are €0.91 each, ex VAT. Five thousand are €0.41 each.',
      'Choose this when the 6 inch clamshell is too tight. The lid takes a CMYK logo. A three-compartment version of the same footprint is listed separately.',
    ],
  },
  {
    id: '8x8-3',
    slug: '8x8-bagasse-3-compartment-box',
    catalogId: 'printed-bagasse-8x8-3',
    label: '8×8" 3-comp',
    short: '8×8" 3 compartments',
    name: '8×8 inch printed bagasse 3-compartment box',
    size: '8 × 8 inch, 3 compartments',
    pack: '5 × 50',
    image: photo('8x8-3-food.jpg'),
    gallery: [
      { src: photo('8x8-3-food.jpg'), alt: 'Printed 8×8 inch 3-compartment bagasse box, Green Table, open with rice, curry and vegetables' },
      { src: photo('8x8-3-studio.jpg'), alt: 'Printed 8×8 inch 3-compartment bagasse box with a Green Table logo, one open on white' },
    ],
    use: 'Burger with sides kept apart',
    prices: [0.93, 0.83, 0.73, 0.66, 0.59, 0.53, 0.48, 0.43],
    h1: '8×8 Inch 3-Compartment Printed Bagasse Boxes',
    title: 'Printed 3-Compartment Bagasse Boxes Ireland | 8×8 CMYK',
    description:
      'Printed 8×8 inch 3-compartment bagasse boxes in Ireland. Burger and sides in one compostable box, CMYK logo, from €0.93 ex VAT at 100 down to €0.43 at 5,000.',
    lead:
      'Same 8×8 inch footprint as the HP4 meal box, with three compartments so a burger and two sides stay separate.',
    paragraphs: [
      'The extra dividers make the blank box dearer than the single 8×8, so print follows that. One hundred boxes are €0.93 each, ex VAT. Five thousand are €0.43 each.',
      'Restaurants use it for a burger meal that should not sit in one pool of sauce. The lid is printed with a CMYK logo. The board is compostable bagasse.',
    ],
  },
  {
    id: '9x9',
    slug: '9x9-bagasse-meal-box',
    catalogId: 'printed-bagasse-9x9',
    label: '9×9"',
    short: '9×9" meal box',
    name: '9×9 inch printed bagasse meal box',
    size: '9 × 9 inch',
    pack: '2 × 100',
    image: photo('9x9-flame-and-fork.jpg'),
    gallery: [
      { src: photo('9x9-flame-and-fork.jpg'), alt: 'Printed 9×9 bagasse meal box, Flame and Fork, open with a chicken meal' },
      { src: photo('9x9-masala-street.jpg'), alt: 'Stacked printed 9×9 bagasse meal boxes with a Masala Street logo' },
      { src: photo('9x9-harvest-kitchen.jpg'), alt: 'Printed 9×9 bagasse meal box with a Harvest Kitchen carrot logo, one open' },
      { src: photo('9x9-three-brands.jpg'), alt: 'Three printed 9×9 bagasse meal boxes: Green Table, Fork Yeah and The Lunch Club' },
    ],
    use: 'Large burgers, stacked meals and sharing boxes',
    prices: [1.08, 0.98, 0.88, 0.81, 0.74, 0.68, 0.63, 0.58],
    h1: '9×9 Inch Printed Bagasse Meal Boxes',
    title: '9×9 Printed Bagasse Meal Boxes Ireland | CMYK Logo',
    description:
      'Printed 9×9 inch bagasse meal boxes in Ireland for large burgers and sharing meals. Compostable, CMYK logo, from €1.08 ex VAT at 100 boxes down to €0.58 at 5,000.',
    lead:
      'The largest square in this range. It is for stacked burgers, loaded meals and anything that will not close in an 8×8.',
    paragraphs: [
      'The blank 9×9 costs the most of these eight boxes, so the printed price starts at €1.08 each for 100 boxes, ex VAT, and is €0.58 each at 5,000. That keeps the same amount after the box as the 6 inch burger box.',
      'The lid takes a CMYK logo. If you only need a standard burger, the 6 inch box is the lower price. Use the 9×9 when the portion needs the extra room.',
    ],
  },
  {
    id: '1-comp',
    slug: '9x6-bagasse-1-compartment-box',
    catalogId: 'printed-bagasse-1-comp',
    label: '1 compartment',
    short: '9×6" 1 compartment',
    name: '9×6 inch printed bagasse 1-compartment box',
    size: '9 × 6 × 2 inch, 1000 ml',
    pack: '5 × 50',
    image: photo('1comp-food.jpg'),
    gallery: [
      { src: photo('1comp-food.jpg'), alt: 'Printed 9×6 inch 1-compartment bagasse box, Masala Street, open with biryani' },
      { src: photo('1comp-studio.jpg'), alt: 'Printed 9×6 inch 1-compartment bagasse box with a Masala Street logo, one open on white' },
    ],
    use: 'Long burgers, baguettes and single hot meals',
    prices: [0.85, 0.75, 0.65, 0.58, 0.51, 0.45, 0.4, 0.35],
    h1: '9×6 Inch Printed Bagasse Boxes, 1 Compartment',
    title: 'Printed 1000ml Bagasse Meal Boxes Ireland | 1 Compartment',
    description:
      'Printed 9×6×2 inch bagasse boxes, one compartment, 1000 ml. Compostable, CMYK logo, from €0.85 ex VAT at 100 boxes down to €0.35 at 5,000. Ireland delivery.',
    lead:
      'A long 1000 ml box with one compartment. It suits a baguette, a long burger, or a single hot meal that is not square.',
    paragraphs: [
      'Printed prices start at €0.85 each for 100 boxes and fall to €0.35 each at 5,000, ex VAT. The shift off the 6 inch benchmark is the extra cost of this blank box.',
      'Print is a CMYK logo on the lid. A two-compartment version of the same outside size is on its own page if the meal needs a divider.',
    ],
  },
  {
    id: '2-comp',
    slug: '9x6-bagasse-2-compartment-box',
    catalogId: 'printed-bagasse-2-comp',
    label: '2 compartments',
    short: '9×6" 2 compartments',
    name: '9×6 inch printed bagasse 2-compartment box',
    size: '9 × 6 × 2 inch, 1000 ml, 2 compartments',
    pack: '5 × 50',
    image: photo('2comp-food.jpg'),
    gallery: [
      { src: photo('2comp-food.jpg'), alt: 'Printed 9×6 inch 2-compartment bagasse box, Fork Yeah, open with rice and curry' },
      { src: photo('2comp-studio.jpg'), alt: 'Printed 9×6 inch 2-compartment bagasse box with a Fork Yeah logo, one open on white' },
    ],
    use: 'A main and a side in one box',
    prices: [0.87, 0.77, 0.67, 0.6, 0.53, 0.47, 0.42, 0.37],
    h1: '9×6 Inch Printed Bagasse Boxes, 2 Compartments',
    title: 'Printed 2-Compartment Bagasse Boxes Ireland | 1000ml',
    description:
      'Printed 9×6×2 inch bagasse boxes with 2 compartments, 1000 ml. Compostable, CMYK logo, from €0.87 ex VAT at 100 boxes down to €0.37 at 5,000.',
    lead:
      'The same 1000 ml rectangle as the one-compartment box, split in two so a main and a side travel together.',
    paragraphs: [
      'One hundred boxes are €0.87 each, ex VAT. Five thousand are €0.37 each. The two-compartment blank costs a little more than the open 1000 ml box, and the printed price follows that.',
      'Takeaways use it when chips or a salad should not sit under the burger. The lid is printed in CMYK. Both compartments are bagasse.',
    ],
  },
];

function money(value) {
  return Math.round(Number(value) * 100) / 100;
}

export function getPrintedBagasseBox(id) {
  return PRINTED_BAGASSE_BOXES.find((box) => box.id === id || box.slug === id || box.catalogId === id) || null;
}

export function snapPrintedBagasseQty(qty) {
  const n = Math.round(Number(qty) || 0);
  let best = PRINTED_BAGASSE_QTYS[0];
  let bestDist = Infinity;
  PRINTED_BAGASSE_QTYS.forEach((tier) => {
    const dist = Math.abs(tier - n);
    if (dist < bestDist || (dist === bestDist && tier > best)) {
      best = tier;
      bestDist = dist;
    }
  });
  return best;
}

export function printedBagasseUnitPrice(box, qty) {
  const index = PRINTED_BAGASSE_QTYS.indexOf(snapPrintedBagasseQty(qty));
  return box.prices[index];
}

export function printedBagassePath(box) {
  return `/custom-burger-boxes/${box.slug}`;
}

export function normalizePrintedBagasse(input = {}) {
  const box = getPrintedBagasseBox(input.sizeId) || PRINTED_BAGASSE_BOXES[0];
  return {
    sizeId: box.id,
    qty: snapPrintedBagasseQty(input.qty || PRINTED_BAGASSE_QTYS[0]),
  };
}

export function pricePrintedBagasse(input) {
  const selection = normalizePrintedBagasse(input);
  const box = getPrintedBagasseBox(selection.sizeId);
  const unitPrice = printedBagasseUnitPrice(box, selection.qty);
  const lineTotal = money(unitPrice * selection.qty);
  return {
    ...selection,
    box,
    unitPrice,
    lineTotal,
    summary: `${box.short} · ${box.size} · ${PRINTED_BAGASSE_PRINT}`,
  };
}

export function printedBagasseStartPrice() {
  return PRINTED_BAGASSE_BOXES[0].prices[0];
}

export function printedBagasseFloorPrice() {
  return Math.min(...PRINTED_BAGASSE_BOXES.flatMap((box) => box.prices));
}

export function buildPrintedBagasseQuoteLine(catalogItem, raw) {
  const priced = pricePrintedBagasse(raw);
  const box = priced.box;
  return {
    moduleId: 'printed-bagasse',
    productId: box.catalogId,
    name: box.name,
    href: printedBagassePath(box),
    image: box.image,
    images: (box.gallery || PRINTED_BAGASSE_GALLERY).map((item) => item.src),
    qty: priced.qty,
    unitPrice: priced.unitPrice,
    lineTotal: priced.lineTotal,
    summary: priced.summary,
    options: {
      sizeId: priced.sizeId,
      print: PRINTED_BAGASSE_PRINT,
      qty: priced.qty,
    },
    fingerprint: `printed-bagasse|${priced.sizeId}`,
  };
}

export function printedBagasseMachineText(siteUrl) {
  const lines = [
    'Printed bagasse burger and meal boxes',
    'PrintNPack, Ashbourne, Co. Meath, Ireland',
    'Material: compostable sugarcane fibre (bagasse). Print: CMYK logo only.',
    'Prices are ex VAT. Delivery across Ireland is confirmed on the quote.',
    'Minimum 100 boxes. Quantities: 100, 200, 500, 1000, 2000, 3000, 4000, 5000.',
    `Page: ${siteUrl}${PRINTED_BAGASSE_PATH}`,
    '',
  ];
  PRINTED_BAGASSE_BOXES.forEach((box) => {
    lines.push(`${box.name} — ${box.size}`);
    lines.push(`Page: ${siteUrl}${printedBagassePath(box)}`);
    lines.push(`Use: ${box.use}`);
    PRINTED_BAGASSE_QTYS.forEach((qty, index) => {
      const each = box.prices[index].toFixed(2);
      const batch = money(box.prices[index] * qty).toFixed(2);
      lines.push(`${qty} boxes: €${each} each, €${batch} ex VAT`);
    });
    lines.push('');
  });
  return lines.join('\n');
}

export function printedBagasseMachineRecord(siteUrl) {
  return {
    product: 'Printed bagasse burger and meal boxes',
    supplier: 'PrintNPack',
    location: 'Ashbourne, Co. Meath, Ireland',
    material: 'Compostable sugarcane fibre (bagasse)',
    print: PRINTED_BAGASSE_PRINT,
    currency: 'EUR',
    vat: 'excluded',
    minQty: 100,
    quantities: PRINTED_BAGASSE_QTYS,
    page: `${siteUrl}${PRINTED_BAGASSE_PATH}`,
    boxes: PRINTED_BAGASSE_BOXES.map((box) => ({
      name: box.name,
      size: box.size,
      use: box.use,
      page: `${siteUrl}${printedBagassePath(box)}`,
      pricesExVat: Object.fromEntries(
        PRINTED_BAGASSE_QTYS.map((qty, index) => [String(qty), box.prices[index]])
      ),
    })),
  };
}
