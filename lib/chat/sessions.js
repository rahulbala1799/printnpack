import { getRow, getRows, query } from '../database';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isChatId(value) {
  return UUID.test(String(value || ''));
}

export async function openChat({ id, page }) {
  const chatId = isChatId(id) ? id : null;
  if (chatId) {
    const existing = await getRow('SELECT id, status FROM site_chats WHERE id = $1', [chatId]);
    if (existing) {
      if (page) await query('UPDATE site_chats SET page = $2 WHERE id = $1', [chatId, page]);
      return existing;
    }
  }

  return getRow(
    `INSERT INTO site_chats (id, page)
     VALUES (COALESCE($1::uuid, gen_random_uuid()), $2)
     RETURNING id, status`,
    [chatId, page || '/']
  );
}

export async function addChatMessage(chatId, role, content) {
  const text = String(content || '').trim().slice(0, 4000);
  if (!text || !isChatId(chatId)) return null;
  const row = await getRow(
    `INSERT INTO site_chat_messages (chat_id, role, content)
     VALUES ($1, $2, $3)
     RETURNING id, role, content, created_at`,
    [chatId, role, text]
  );
  await query('UPDATE site_chats SET last_message_at = now() WHERE id = $1', [chatId]);
  return row;
}

export async function rememberVisitorEmail(chatId, transcript) {
  const match = String(transcript || '').match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
  if (!match || !isChatId(chatId)) return;
  await query(
    'UPDATE site_chats SET visitor_email = $2 WHERE id = $1 AND visitor_email IS NULL',
    [chatId, match[0].toLowerCase().slice(0, 180)]
  );
}

export async function listChats() {
  return getRows(
    `SELECT c.id, c.page, c.status, c.visitor_email, c.last_message_at, c.created_at,
            (
              SELECT content FROM site_chat_messages m
              WHERE m.chat_id = c.id
              ORDER BY m.created_at DESC
              LIMIT 1
            ) AS preview
     FROM site_chats c
     ORDER BY c.last_message_at DESC
     LIMIT 80`
  );
}

export async function getChat(chatId) {
  if (!isChatId(chatId)) return null;
  return getRow(
    'SELECT id, page, status, visitor_email, last_message_at, created_at FROM site_chats WHERE id = $1',
    [chatId]
  );
}

export async function listMessages(chatId, since) {
  if (!isChatId(chatId)) return [];
  return getRows(
    `SELECT id, role, content, created_at
     FROM site_chat_messages
     WHERE chat_id = $1
       AND ($2::timestamptz IS NULL OR created_at > $2::timestamptz)
     ORDER BY created_at ASC`,
    [chatId, since || null]
  );
}

export async function setChatStatus(chatId, status, userId) {
  if (!isChatId(chatId)) return null;
  return getRow(
    `UPDATE site_chats
     SET status = $2, taken_over_by = $3
     WHERE id = $1
     RETURNING id, status`,
    [chatId, status, status === 'human' ? userId : null]
  );
}
