import { getRows } from '../../../lib/database';

/**
 * GET /api/plain-products
 * Returns all plain packaging products from the DB (for admin). Optional ?category= to filter.
 */
function toProduct(row) {
  return {
    id: row.id,
    code: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    qtyPerCase: row.qty_per_case,
    caseTiers: row.case_tiers || [],
    costPerCase: row.cost_per_case != null ? Number(row.cost_per_case) : null,
    imageSrc: row.image_src,
    images: row.images || [],
    is_active: row.is_active,
    sort_order: row.sort_order,
  };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { category } = req.query;
    let rows;
    if (category && category !== 'All') {
      rows = await getRows(
        'SELECT id, name, category, description, qty_per_case, case_tiers, cost_per_case, image_src, images, is_active, sort_order FROM plain_products WHERE is_active = true AND category = $1 ORDER BY sort_order, name',
        [category]
      );
    } else {
      rows = await getRows(
        'SELECT id, name, category, description, qty_per_case, case_tiers, cost_per_case, image_src, images, is_active, sort_order FROM plain_products WHERE is_active = true ORDER BY sort_order, name'
      );
    }
    const categories = [...new Set(rows.map((r) => r.category))].sort();
    res.status(200).json({ products: rows.map(toProduct), categories });
  } catch (error) {
    console.error('GET /api/plain-products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
