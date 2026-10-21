import { withAuth } from '../../../../lib/withAuth';
import { broadcastLive, liveMessage } from '../../../../lib/chat/live';
import { addChatMessage, getChat, listMessages, setChatStatus } from '../../../../lib/chat/sessions';
import { visitorLabel } from '../../../../lib/visitors/identity';
import { draftReply } from './draft';

function publicMessage(row) {
  return {
    id: row.id,
    role: row.role,
    content: row.content,
    createdAt: row.created_at || row.createdAt,
  };
}

async function handler(req, res) {
  if (String(req.query.id || '') === 'draft') {
    return draftReply(req, res);
  }

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
        visitorEmail: chat.visitor_email || '',
        label: visitorLabel({
          name: chat.profile_name || chat.visitor_name,
          number: chat.visitor_number,
        }),
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
    res.status(200).json({ status: 'ai' });
    return;
  }

  if (action === 'takeover') {
    const note = liveMessage('staff', 'You are now chatting with the PrintNPack team.', 'human');
    await broadcastLive(chat.id, note);
    await setChatStatus(chat.id, 'human', req.user.id);
    const saved = await addChatMessage(chat.id, 'staff', note.content, note.id);
    res.status(200).json({ status: 'human', message: publicMessage(saved || note) });
    return;
  }

  const text = String(req.body?.text || '').trim();
  if (!text) {
    res.status(400).json({ error: 'Type a reply first.' });
    return;
  }

  const message = liveMessage('staff', text, 'human');
  await broadcastLive(chat.id, message);
  await setChatStatus(chat.id, 'human', req.user.id);
  const saved = await addChatMessage(chat.id, 'staff', text, message.id);
  res.status(200).json({ status: 'human', message: publicMessage(saved || message) });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
