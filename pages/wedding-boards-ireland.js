import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-boards-ireland');

export default function WeddingBoardsIreland() {
  return <WeddingProductPage product={product} />;
}
