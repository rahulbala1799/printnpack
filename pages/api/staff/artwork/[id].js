import { withAuth } from '../../../../lib/withAuth';
import { getArtwork } from '../../../../lib/chat/sessions';

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const file = await getArtwork(req.query.id);
  if (!file) {
    res.status(404).json({ error: 'Artwork not found' });
    return;
  }
  const body = Buffer.isBuffer(file.bytes) ? file.bytes : Buffer.from(file.bytes);
  res.setHeader('Content-Type', file.mime || 'application/octet-stream');
  res.setHeader('Content-Disposition', `attachment; filename="${String(file.filename).replace(/"/g, '')}"`);
  res.status(200).send(body);
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
