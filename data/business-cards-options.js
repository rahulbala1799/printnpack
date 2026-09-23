export const BUSINESS_CARD_SIZE = '85 × 55 mm';
export const BUSINESS_CARD_GSM = '350 gsm';

export const BUSINESS_CARD_IMAGES = [
  {
    src: '/images/products/business-cards/business-cards-ireland-stack.jpg',
    alt: 'Stack of 350 gsm business cards, 85 × 55 mm, printed in Ireland',
  },
  {
    src: '/images/products/business-cards/business-cards-ireland-fan.jpg',
    alt: 'Fanned 350 gsm business cards, standard 85 × 55 mm size',
  },
];

export const BUSINESS_CARD_TIERS = [
  { qty: 100, price: 35 },
  { qty: 200, price: 60 },
  { qty: 300, price: 75 },
  { qty: 1000, price: 160 },
];

export const BUSINESS_CARD_DELIVERY = [
  {
    id: 'dublin',
    label: 'Dublin',
    detail: '2 day delivery',
    summary: 'Dublin — 2 day delivery',
  },
  {
    id: 'ireland',
    label: 'Rest of Ireland',
    detail: '4–6 days',
    summary: 'Rest of Ireland — 4–6 days',
  },
];

export const BUSINESS_CARD_QUANTITY_OPTIONS = BUSINESS_CARD_TIERS.map(
  (tier) => `${tier.qty} — €${tier.price}`
);

export const BUSINESS_CARD_DELIVERY_OPTIONS = BUSINESS_CARD_DELIVERY.map((item) => item.summary);

export const DEFAULT_BUSINESS_CARD_CONFIG = {
  qty: 100,
  deliveryId: 'dublin',
};

export function getBusinessCardTier(qty) {
  return BUSINESS_CARD_TIERS.find((tier) => tier.qty === Number(qty)) || null;
}

export function getBusinessCardDelivery(id) {
  return BUSINESS_CARD_DELIVERY.find((item) => item.id === id) || BUSINESS_CARD_DELIVERY[0];
}

export function parseBusinessCardQty(value) {
  const match = String(value || '').match(/(\d+)/);
  const qty = match ? Number(match[1]) : null;
  return getBusinessCardTier(qty) ? qty : null;
}

export function formatBusinessCardQuoteSummary({ qty, deliveryId, deliveryLabel }) {
  const tier = getBusinessCardTier(qty);
  const delivery = deliveryLabel || getBusinessCardDelivery(deliveryId).summary;

  return `Business cards
Size: ${BUSINESS_CARD_SIZE}
Stock: ${BUSINESS_CARD_GSM}
Quantity: ${tier ? tier.qty : qty}
Price: ${tier ? `€${tier.price}` : 'Quote'}
Delivery: ${delivery}`;
}
