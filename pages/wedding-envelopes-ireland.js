import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-envelopes-ireland');

export default function WeddingEnvelopesIreland() {
  return <WeddingProductPage product={product} />;
}
