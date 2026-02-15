import { getRow } from '../../../lib/database';

/**
 * GET /api/plain-products/[id]
 * Returns one plain packaging product by id (for admin).
 */
function toProduct(row) {
  if (!row) return null;
  return {
    id: row.id,
    code: row.id,
    name: row.name,
    category: row.category,
    description: row.description,
    qtyPerCase: row.qty_per_case,
    caseTiers: row.case_tiers || [],
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

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Missing product id' });
  }

  try {
    const row = await getRow(
      'SELECT id, name, category, description, qty_per_case, case_tiers, image_src, images, is_active, sort_order FROM plain_products WHERE id = $1',
      [id]
    );
    const product = toProduct(row);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('GET /api/plain-products/[id]:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
}
