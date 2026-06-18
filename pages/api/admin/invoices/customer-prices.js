import { withAuth } from '../../../../lib/withAuth.js';
import { getRow, getRows } from '../../../../lib/database.js';
import { getCustomerPriceCatalog } from '../../../../lib/invoices/customer-prices.js';

async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const customerId = req.query.customer_id;
  if (!customerId) return res.status(400).json({ error: 'customer_id required' });

  try {
    const catalog = await getCustomerPriceCatalog(getRow, getRows, customerId);
    if (!catalog) return res.status(404).json({ error: 'Customer not found' });
    return res.status(200).json(catalog);
  } catch (e) {
    console.error('GET customer-prices:', e);
    return res.status(500).json({ error: 'Failed to load saved prices' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
