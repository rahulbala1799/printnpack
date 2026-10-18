import { withAuth } from '../../../../lib/withAuth';
import { addChatMessage, getChat, listMessages, setChatStatus } from '../../../../lib/chat/sessions';

function publicMessage(row) {
  return {
    id: row.id,
    role: row.role,
    content: row.content,
    createdAt: row.created_at,
  };
}

async function handler(req, res) {
  const chat = await getChat(req.query.id);
  if (!chat) {
    res.status(404).json({ error: 'Chat not found' });
    return;
  }

  if (req.method === 'GET') {
    const since = typeof req.query.since === 'string' ? req.query.since : null;
    const messages = await listMessages(chat.id, since);
    res.status(200).json({
      chat: {
        id: chat.id,
        page: chat.page,
        status: chat.status,
        visitorEmail: chat.visitor_email,
        lastMessageAt: chat.last_message_at,
      },
      messages: messages.map(publicMessage),
    });
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const action = String(req.body?.action || 'reply');

  if (action === 'release') {
    await setChatStatus(chat.id, 'ai', null);
    const note = await addChatMessage(chat.id, 'staff', 'The assistant is back if you need anything else.');
    res.status(200).json({ status: 'ai', message: publicMessage(note) });
    return;
  }

  if (action === 'takeover' || action === 'reply') {
    await setChatStatus(chat.id, 'human', req.user.id);
  }

  if (action === 'takeover') {
    const note = await addChatMessage(chat.id, 'staff', 'You are now chatting with the PrintNPack team.');
    res.status(200).json({ status: 'human', message: publicMessage(note) });
    return;
  }

  const text = String(req.body?.text || '').trim();
  if (!text) {
    res.status(400).json({ error: 'Type a reply first.' });
    return;
  }

  const message = await addChatMessage(chat.id, 'staff', text);
  res.status(200).json({ status: 'human', message: publicMessage(message) });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
