import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-order-thank-you-cards-ireland');

export default function WeddingOrderThankYouCardsIreland() {
  return <WeddingProductPage product={product} />;
}
