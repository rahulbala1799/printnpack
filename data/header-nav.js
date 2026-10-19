/**
 * Desktop header categories. Printed products only.
 * Each item is a real product page. Hovering a category lists these links.
 */

export const HEADER_CATEGORIES = [
  {
    id: 'wedding',
    name: 'Wedding',
    href: '/wedding-printing-ireland',
    summary: 'Invitations, menus, napkins, boards and coasters',
    match: ['/wedding-'],
    products: [
      { name: 'Wedding envelopes', href: '/wedding-envelopes-ireland' },
      { name: 'Menus and place cards', href: '/wedding-menus-place-cards-ireland' },
      { name: 'Order of the day and thank-you cards', href: '/wedding-order-thank-you-cards-ireland' },
      { name: 'Wedding napkins', href: '/wedding-napkins-ireland' },
      { name: 'Kraft wedding napkins', href: '/wedding-kraft-napkins-ireland' },
      { name: 'Wedding boards', href: '/wedding-boards-ireland' },
      { name: 'Wedding coasters', href: '/wedding-coasters-ireland' },
    ],
  },
  {
    id: 'bags',
    name: 'Bags',
    href: '/paper-bags-ireland',
    summary: 'Printed carrier bags and grab bags',
    match: ['/paper-bags', '/printed-flat-handle', '/luxury-paper-bags', '/twisted-handle-paper-bags', '/products/sos-grab-bags'],
    products: [
      { name: 'Flat handle paper bags', href: '/printed-flat-handle-bags-ireland' },
      { name: 'Twisted handle paper bags', href: '/twisted-handle-paper-bags-ireland' },
      { name: 'Luxury die-cut paper bags', href: '/luxury-paper-bags-ireland' },
      { name: 'SOS grab bags', href: '/products/sos-grab-bags' },
    ],
  },
  {
    id: 'boxes',
    name: 'Boxes',
    href: '/pizza-boxes-ireland',
    summary: 'Printed food boxes and rigid gift boxes',
    match: ['/pizza-boxes', '/custom-pizza', '/custom-cake-boxes', '/burger-boxes', '/custom-burger', '/eco-bagasse', '/luxury-magnetic'],
    products: [
      { name: 'Custom pizza boxes', href: '/custom-pizza-boxes-ireland' },
      { name: 'Custom cake boxes', href: '/custom-cake-boxes-ireland' },
      { name: 'Custom burger boxes', href: '/custom-burger-boxes-ireland' },
      { name: 'Burger boxes', href: '/burger-boxes-ireland' },
      { name: 'Bagasse burger box', href: '/eco-bagasse-burger-boxes' },
      { name: 'Luxury magnetic closure boxes', href: '/luxury-magnetic-closure-boxes-ireland' },
    ],
  },
  {
    id: 'cups',
    name: 'Cups',
    href: '/custom-printed-coffee-cups-ireland',
    summary: 'Printed takeaway coffee cups',
    match: ['/custom-printed-coffee-cups'],
    products: [
      { name: 'Custom printed coffee cups', href: '/custom-printed-coffee-cups-ireland' },
    ],
  },
  {
    id: 'napkins',
    name: 'Napkins',
    href: '/napkins-ireland',
    summary: 'Printed napkins for restaurants and cafés',
    match: ['/napkins-ireland', '/products/premium-linen-feel-napkins', '/products/cocktail-napkins', '/products/premium-linen'],
    products: [
      { name: 'Linen-feel napkins', href: '/products/premium-linen-feel-napkins' },
      { name: 'Cocktail napkins', href: '/products/cocktail-napkins' },
    ],
  },
  {
    id: 'stickers',
    name: 'Stickers',
    href: '/vinyl-stickers',
    summary: 'Vinyl stickers and decals',
    match: ['/vinyl-sticker', '/vinyl-cut-letters'],
    products: [
      { name: 'Vinyl stickers', href: '/vinyl-stickers' },
      { name: 'Vinyl cut letters', href: '/vinyl-cut-letters-ireland' },
    ],
  },
  {
    id: 'labels',
    name: 'Labels',
    href: '/labels-on-a-roll',
    summary: 'Product labels on a roll',
    match: ['/labels-on-a-roll'],
    products: [
      { name: 'Labels on a roll', href: '/labels-on-a-roll' },
    ],
  },
  {
    id: 'banners',
    name: 'Banners',
    href: '/banners-ireland',
    summary: 'PVC banners, roll-ups and stage backdrops',
    match: ['/banners-ireland', '/banner-', '/vinyl-banners', '/roll-up-banners', '/stage-backdrop'],
    products: [
      { name: 'Vinyl banners', href: '/vinyl-banners' },
      { name: 'Roll-up banners', href: '/roll-up-banners-ireland' },
      { name: 'Extra wide roll-ups', href: '/extra-wide-roll-up-banners-ireland' },
      { name: 'Stage backdrop banners', href: '/stage-backdrop-banners-ireland' },
    ],
  },
  {
    id: 'exhibition',
    name: 'Exhibition',
    href: '/products?group=banners-stands-frames',
    summary: 'Stands, walls and illuminated frames',
    match: ['/pop-up-walls', '/freestanding-led', '/inhaker-stands', '/fabric-banner', '/curved-banner', '/custom-table-covers', '/extra-wide-roll'],
    products: [
      { name: 'Pop-up display stands', href: '/pop-up-walls-ireland' },
      { name: 'Exhibition walls', href: '/inhaker-stands-ireland' },
      { name: 'Freestanding LED frames', href: '/freestanding-led-frames-ireland' },
      { name: 'Fabric banner stands', href: '/fabric-banner-stands-ireland' },
      { name: 'Curved banner stands', href: '/curved-banner-stands-ireland' },
      { name: 'Custom table covers', href: '/custom-table-covers-ireland' },
    ],
  },
  {
    id: 'flags',
    name: 'Flags',
    href: '/flags-ireland',
    summary: 'Beach flags, feather flags and custom flags',
    match: ['/flags-ireland', '/beach-flags', '/custom-printed-flags'],
    products: [
      { name: 'Beach flags', href: '/beach-flags-ireland' },
      { name: 'Custom printed flags', href: '/custom-printed-flags-ireland' },
    ],
  },
  {
    id: 'leaflets',
    name: 'Leaflets',
    href: '/premium-leaflets-ireland',
    summary: 'Leaflets, flyers and NCR books',
    match: ['/premium-leaflets', '/products/leaflets-', '/ncr-pads'],
    products: [
      { name: 'Premium leaflets', href: '/premium-leaflets-ireland' },
      { name: 'A6 leaflets', href: '/products/leaflets-a6' },
      { name: 'A5 leaflets', href: '/products/leaflets-a5' },
      { name: 'A4 leaflets', href: '/products/leaflets-a4' },
      { name: 'A3 leaflets', href: '/products/leaflets-a3' },
      { name: 'NCR pads', href: '/ncr-pads-ireland' },
    ],
  },
  {
    id: 'cards',
    name: 'Cards',
    href: '/business-cards-ireland',
    summary: 'Business cards',
    match: ['/business-cards'],
    products: [
      { name: 'Business cards', href: '/business-cards-ireland' },
    ],
  },
  {
    id: 'stamps',
    name: 'Stamps',
    href: '/rubber-stamps-ireland',
    summary: 'Self-inking, logo and company stamps',
    match: ['/rubber-stamp', '/self-inking-stamps', '/company-logo-stamps', '/company-seal', '/clothing-name-stamps', '/rocker-stamps', '/loyalty-card-stamps'],
    products: [
      { name: 'Rubber stamps', href: '/rubber-stamps' },
      { name: 'Self-inking stamps', href: '/self-inking-stamps-ireland' },
      { name: 'Company logo stamps', href: '/company-logo-stamps-ireland' },
      { name: 'Company seal stamps', href: '/company-seal-stamps-ireland' },
      { name: 'Clothing name stamps', href: '/clothing-name-stamps-ireland' },
      { name: 'Rocker stamps', href: '/rocker-stamps-ireland' },
      { name: 'Loyalty card stamps', href: '/loyalty-card-stamps-ireland' },
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing',
    href: '/clothing',
    summary: 'Printed and embroidered workwear',
    match: ['/clothing'],
    products: [
      { name: 'T-shirts', href: '/clothing/custom-printed-tshirts-ireland' },
      { name: 'Polo shirts', href: '/clothing/custom-polo-shirts-ireland' },
      { name: 'Hoodies', href: '/clothing/custom-hoodies-ireland' },
      { name: 'Sweatshirts', href: '/clothing/custom-sweatshirts-ireland' },
      { name: 'Sportswear', href: '/clothing/custom-sportswear-ireland' },
      { name: 'Hi-viz workwear', href: '/clothing/custom-hiviz-workwear-ireland' },
    ],
  },
  {
    id: 'posters',
    name: 'Posters',
    href: '/posters',
    summary: 'Posters, foamex and correx boards',
    match: ['/posters', '/foamex', '/correx'],
    products: [
      { name: 'Custom posters', href: '/posters' },
      { name: 'Foamex boards', href: '/foamex-boards' },
      { name: 'Correx boards', href: '/correx-boards' },
    ],
  },
  {
    id: 'coasters',
    name: 'Coasters',
    href: '/printed-coasters-ireland',
    summary: 'Printed drink coasters',
    match: ['/printed-coasters', '/wedding-coasters'],
    products: [
      { name: 'Printed coasters', href: '/printed-coasters-ireland' },
      { name: 'Wedding coasters', href: '/wedding-coasters-ireland' },
    ],
  },
];

export function activeHeaderCategory(asPath) {
  const path = (asPath || '').split('#')[0];
  const pathname = path.split('?')[0];
  let bestId = '';
  let bestLength = 0;
  HEADER_CATEGORIES.forEach((category) => {
    const candidates = [category.href, ...(category.match || [])];
    candidates.forEach((candidate) => {
      const hit = candidate.includes('?')
        ? path.startsWith(candidate)
        : pathname === candidate || pathname.startsWith(candidate);
      if (hit && candidate.length > bestLength) {
        bestId = category.id;
        bestLength = candidate.length;
      }
    });
  });
  return bestId;
}
