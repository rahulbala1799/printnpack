import { useEffect } from 'react';
import { trackWedding } from '../../lib/track-funnel';

/** Records a wedding-page view in the quote-form funnel. One event per visit to the page. */
export function useWeddingPageView(productName) {
  useEffect(() => {
    trackWedding('view', { productName: productName || 'Wedding printing' });
  }, [productName]);
}
