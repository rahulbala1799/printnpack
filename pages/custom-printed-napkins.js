import ProductDetail from './products/[slug]';
import { getProductBySlug, getRelatedProducts } from '../data/products';

export default ProductDetail;

export async function getStaticProps() {
  const product = getProductBySlug('premium-linen-feel-napkins');
  if (!product) return { notFound: true };
  return {
    props: {
      product,
      relatedProducts: getRelatedProducts(product.id),
    },
    revalidate: 3600,
  };
}
