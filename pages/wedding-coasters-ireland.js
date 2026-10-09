import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-coasters-ireland');

export default function WeddingCoastersIreland() {
  return <WeddingProductPage product={product} />;
}
