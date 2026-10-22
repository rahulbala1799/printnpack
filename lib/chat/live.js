import crypto from 'crypto';

export function liveMessage(role, content, status) {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString(),
    status,
  };
}

// Pushes the message onto the PrintNPack Supabase project so the other screen updates immediately.
export async function broadcastLive(chatId, message, topic) {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '').replace(/\/$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const channel = topic || (chatId ? `live-chat-${chatId}` : '');
  if (!url || !key || !channel || !message?.content) return false;

  try {
    const response = await fetch(`${url}/realtime/v1/api/broadcast`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            topic: channel,
            event: 'message',
            payload: message,
          },
          ...(chatId && channel !== 'live-inbox'
            ? [{
              topic: 'live-inbox',
              event: 'message',
              payload: { ...message, chatId: String(chatId) },
            }]
            : []),
        ],
      }),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error('Live chat broadcast failed', response.status, detail.slice(0, 180));
      return false;
    }
    return true;
  } catch (error) {
    console.error('Live chat broadcast failed', error?.message || error);
    return false;
  }
}
