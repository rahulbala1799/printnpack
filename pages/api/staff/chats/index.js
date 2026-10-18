import { withAuth } from '../../../../lib/withAuth';
import { listChats } from '../../../../lib/chat/sessions';

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const chats = await listChats();
  res.status(200).json({
    chats: chats.map((chat) => ({
      id: chat.id,
      page: chat.page,
      status: chat.status,
      visitorEmail: chat.visitor_email,
      preview: chat.preview,
      lastMessageAt: chat.last_message_at,
      createdAt: chat.created_at,
    })),
  });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
