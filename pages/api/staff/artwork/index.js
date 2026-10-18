import { withAuth } from '../../../../lib/withAuth';
import { listRecentArtwork } from '../../../../lib/chat/sessions';

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const rows = await listRecentArtwork();
  res.status(200).json({
    artwork: rows.map((row) => ({
      id: row.id,
      filename: row.filename,
      mime: row.mime,
      size: Number(row.size) || 0,
      chatId: row.chat_id,
      email: row.visitor_email,
      page: row.page,
      createdAt: row.created_at,
    })),
  });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
