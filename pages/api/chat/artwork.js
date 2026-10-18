import { openChat, saveArtwork } from '../../../lib/chat/sessions';

export const config = {
  api: { bodyParser: { sizeLimit: '4mb' } },
};

const ALLOWED = new Set(['image/png', 'image/jpeg', 'image/webp', 'application/pdf']);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const name = String(req.body?.filename || 'artwork').replace(/[^\w.\- ]+/g, '').slice(0, 120) || 'artwork';
  const mime = String(req.body?.mime || '');
  const data = String(req.body?.data || '');
  if (!ALLOWED.has(mime) || !data) {
    res.status(400).json({ message: 'Attach a PNG, JPG, WEBP, or PDF.' });
    return;
  }

  const bytes = Buffer.from(data, 'base64');
  if (!bytes.length || bytes.length > 2_000_000) {
    res.status(400).json({ message: 'Artwork must be under 2 MB.' });
    return;
  }

  let chatId = req.body?.chatId;
  try {
    const chat = await openChat({
      id: chatId,
      page: typeof req.body?.page === 'string' ? req.body.page.slice(0, 180) : '/',
    });
    chatId = chat.id;
    const saved = await saveArtwork({
      chatId,
      sessionId: String(req.body?.sessionId || '').slice(0, 64),
      filename: name,
      mime,
      bytes,
    });
    res.status(200).json({
      chatId,
      artwork: { id: saved.id, filename: saved.filename, createdAt: saved.created_at },
    });
  } catch (error) {
    console.error('Artwork save error:', error?.message || error);
    res.status(500).json({ message: 'The artwork could not be saved. Email it to info@printnpack.ie.' });
  }
}
