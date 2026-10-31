import { buildLocalInventoryTsv } from '../../../lib/local-inventory-feed';

export default function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end('Method not allowed');
  }

  const body = buildLocalInventoryTsv();
  res.setHeader('Content-Type', 'text/tab-separated-values; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  if (req.method === 'HEAD') return res.status(200).end();
  return res.status(200).send(body);
}
