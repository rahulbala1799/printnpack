import { SITE_URL } from './site';
import { inhakerFromPrice } from '../data/inhaker-stands';
import { beachFlagFromPrice } from '../data/beach-flags';
import { vinylLetterFromPrice } from '../data/vinyl-cut-letters';
import { ZIPPER_FAMILIES, zipperFromPrice, zipperRangeFromPrice } from '../data/zipper-walls';

const SELLER = {
  '@type': 'Organization',
  name: 'PrintNPack Ireland',
  url: SITE_URL,
};

/** Extract the first numeric price from strings like "Starting at €0.35 per unit" or "€25". */
export function parsePriceString(value) {
  if (value == null || value === '') return undefined;
  if (typeof value === 'number' && !Number.isNaN(value)) return value.toFixed(2);
  const match = String(value).replace(/,/g, '').match(/(\d+(?:\.\d+)?)/);
  return match ? Number(match[1]).toFixed(2) : undefined;
}

function priceValidUntil() {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().split('T')[0];
}

/** Standard Offer block — Google Product rich results require a price on offers. */
export function buildOffer({ url, price, priceCurrency = 'EUR' } = {}) {
  const parsedPrice = parsePriceString(price);

  return {
    '@type': 'Offer',
    ...(url ? { url } : {}),
    priceCurrency,
    ...(parsedPrice
      ? {
          price: parsedPrice,
          priceValidUntil: priceValidUntil(),
        }
      : {}),
    availability: 'https://schema.org/InStock',
    seller: SELLER,
  };
}

/** OfferCatalog entry — Product nested in itemOffered must include offers for Google validation. */
export function buildCatalogOffer(name, url, { price } = {}) {
  if (!parsePriceString(price)) return null;
  const offer = buildOffer({ url, price });

  return {
    ...offer,
    itemOffered: {
      '@type': 'Product',
      name,
      url,
      offers: { ...offer },
    },
  };
}

/** ItemList entry wrapping a Product with a valid priced offer. */
export function buildProductListItem({ position, name, url, price, image }) {
  const offer = buildOffer({ url, price });

  return {
    '@type': 'ListItem',
    position,
    item: {
      '@type': 'Product',
      name,
      url,
      ...(image ? { image } : {}),
      offers: { ...offer },
    },
  };
}

/** Full Product JSON-LD with a valid offers block (required for Google Product rich results). */
export function buildProductLd({
  name,
  description,
  image,
  url,
  price,
  lowPrice,
  highPrice,
  sku,
  category,
  brand = 'PrintNPack Ireland',
}) {
  const parsedLow = parsePriceString(lowPrice);
  const parsedHigh = parsePriceString(highPrice);

  if (parsedLow && parsedHigh) {
    return {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name,
      ...(description ? { description } : {}),
      ...(image ? { image } : {}),
      ...(sku ? { sku } : {}),
      ...(category ? { category } : {}),
      ...(url ? { url } : {}),
      brand: { '@type': 'Brand', name: brand },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: parsedLow,
        highPrice: parsedHigh,
        offerCount: 10,
        ...(url ? { url } : {}),
        offeredBy: SELLER,
      },
    };
  }

  if (!parsePriceString(price)) return null;

  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    ...(description ? { description } : {}),
    ...(image ? { image } : {}),
    ...(sku ? { sku } : {}),
    ...(category ? { category } : {}),
    ...(url ? { url } : {}),
    brand: { '@type': 'Brand', name: brand },
    offers: buildOffer({ url, price }),
  };
}

/** Starting-from prices for quote-based product pages (EUR). */
export const PRODUCT_STARTING_PRICES = {
  'rubber-stamps': '15.00',
  'rubber-stamps-ireland': '15.00',
  'self-inking-stamps-ireland': '15.00',
  'company-logo-stamps-ireland': '20.00',
  'loyalty-card-stamps-ireland': '15.00',
  'rocker-stamps-ireland': '50.00',
  'company-seal-stamps-ireland': '20.00',
  'clothing-name-stamps-ireland': '15.00',
  'napkins-ireland': '0.18',
  'custom-printed-napkins': '0.24',
  'banners-ireland': '25.00',
  'pizza-boxes-ireland': '0.17',
  'custom-pizza-boxes-ireland': '0.17',
  'vinyl-banners': '25.00',
  'roll-up-banners': '80.00',
  'roll-up-banners-ireland': '80.00',
  'pop-up-walls-ireland': '511.65',
  'zipper-walls-ireland': zipperRangeFromPrice().toFixed(2),
  ...Object.fromEntries(ZIPPER_FAMILIES.map((family) => [family.id, zipperFromPrice(family.id).toFixed(2)])),
  'freestanding-led-frames-ireland': '1098.54',
  'inhaker-stands-ireland': inhakerFromPrice().toFixed(2),
  'beach-flags-ireland': beachFlagFromPrice().toFixed(2),
  'extra-wide-roll-up-banners-ireland': '398.96',
  'posters': '8.00',
  'vinyl-stickers': '2.00',
  'vinyl-cut-letters-ireland': vinylLetterFromPrice().toFixed(2),
  'printed-flat-handle-bags-ireland': '0.20',
  'paper-bags-ireland': '0.20',
  'banner-printing-dublin': '25.00',
  'twisted-handle-paper-bags-ireland': '0.35',
  'luxury-paper-bags-ireland': '0.55',
  'luxury-magnetic-closure-boxes-ireland': '2.50',
  'custom-printed-tissue-paper-ireland': '0.05',
  'luxury-tissue-paper-ireland': '29.99',
  'burger-boxes-ireland': '0.15',
  'plain-burger-boxes-ireland': '0.15',
  'custom-burger-boxes-ireland': '0.22',
  'eco-bagasse-burger-boxes': '0.22',
  'plain-packaging': '15.00',
  'refuse-sacks-ireland': '18.02',
  'plain-napkins-tableware-ireland': '15.00',
  'hot-cups-ireland': '17.00',
  'custom-printed-coffee-cups-ireland': '0.08',
  'plain-hot-cups-ireland': '24.00',
  'gloves-ireland': '15.20',
  'nitrile-gloves-ireland': '29.29',
  'vinyl-gloves-ireland': '15.20',
  'services/leaflets': '0.05',
  'business-cards-ireland': '35.00',
  'blog/trade-show-banners-decals-ireland': '80.00',
  'foamex-boards': '15.00',
  'foamex-ireland': '15.00',
  'correx-boards': '10.00',
  'clothing': '8.50',
};

export function startingPriceForUrl(urlPath) {
  const path = urlPath.replace(SITE_URL, '').replace(/^\//, '');
  return PRODUCT_STARTING_PRICES[path];
}
