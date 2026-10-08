import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-napkins-ireland');

export default function WeddingNapkinsIreland() {
  return <WeddingProductPage product={product} />;
}
