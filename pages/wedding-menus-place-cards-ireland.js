import React from 'react';
import WeddingProductPage from '../components/wedding/WeddingProductPage';
import { getWeddingProduct } from '../data/wedding-products';

const product = getWeddingProduct('wedding-menus-place-cards-ireland');

export default function WeddingMenusPlaceCardsIreland() {
  return <WeddingProductPage product={product} />;
}
