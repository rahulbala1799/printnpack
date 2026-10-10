import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-kraft-napkins-ireland');

export default function WeddingKraftNapkinsIreland() {
  return <WeddingProductPage product={product} />;
}
