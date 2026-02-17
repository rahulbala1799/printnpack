import { withAuth } from '../../../lib/withAuth.js';
import products from '../../../data/products.js';

/**
 * GET /api/staff/printed-products
 * Staff-only. Returns printed packaging products for pricelist picker.
 * Query: search (optional) - filter by name/category; debounce on client.
 */
function getUnitFromPrice(price) {
  if (!price || typeof price !== 'string') return 'per unit';
  const s = price.toLowerCase();
  if (s.includes('per case')) return 'per case';
  if (s.includes('per box')) return 'per box';
  if (s.includes('per 1000')) return 'per 1000';
  if (s.includes('per unit')) return 'per unit';
  return 'per unit';
}

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const search = typeof req.query.search === 'string' ? req.query.search.trim().toLowerCase() : '';
    let list = (products || []).map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category || '',
      unit_label: getUnitFromPrice(p.price),
    }));

    if (search) {
      list = list.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(search)) ||
          (p.category && p.category.toLowerCase().includes(search))
      );
    }

    list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    const categories = [...new Set(list.map((p) => p.category).filter(Boolean))].sort();
    return res.status(200).json({ products: list.slice(0, 200), categories });
  } catch (error) {
    console.error('GET /api/staff/printed-products:', error);
    return res.status(500).json({ error: 'Failed to fetch products' });
  }
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
