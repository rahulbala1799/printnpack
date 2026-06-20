import { SITE_URL } from './site';

const SELLER = {
  '@type': 'Organization',
  name: 'PrintNPack Ireland',
  url: SITE_URL,
};

/** Standard Offer block for quote-based or fixed-price products. */
export function buildOffer({ url, price, priceCurrency = 'EUR' } = {}) {
  return {
    '@type': 'Offer',
    ...(url ? { url } : {}),
    priceCurrency,
    ...(price != null && price !== '' ? { price: String(price) } : {}),
    availability: 'https://schema.org/InStock',
    seller: SELLER,
  };
}

/** OfferCatalog entry — Product nested in itemOffered must include offers for Google validation. */
export function buildCatalogOffer(name, url, { price } = {}) {
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

/** Full Product JSON-LD with a valid offers block (required for Google Product rich results). */
export function buildProductLd({
  name,
  description,
  image,
  url,
  price,
  sku,
  category,
  brand = 'PrintNPack Ireland',
}) {
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
