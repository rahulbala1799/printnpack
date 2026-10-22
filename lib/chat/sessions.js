import { getRow, getRows, query } from '../database';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function isChatId(value) {
  return UUID.test(String(value || ''));
}

export async function openChat({ id, page, sessionId }) {
  const chatId = isChatId(id) ? id : null;
  const session = String(sessionId || '').trim().slice(0, 80) || null;
  if (chatId) {
    const existing = await getRow('SELECT id, status FROM site_chats WHERE id = $1', [chatId]);
    if (existing) {
      await query(
        `UPDATE site_chats
         SET page = COALESCE($2, page),
             session_id = COALESCE(session_id, $3)
         WHERE id = $1`,
        [chatId, page || null, session]
      );
      return existing;
    }
  }

  if (session) {
    const previous = await getRow(
      `SELECT id, status
       FROM site_chats
       WHERE session_id = $1
         AND COALESCE(visitor_name, '') <> ''
         AND COALESCE(visitor_email, '') <> ''
       ORDER BY last_message_at DESC
       LIMIT 1`,
      [session]
    );
    if (previous) {
      if (page) await query('UPDATE site_chats SET page = $2 WHERE id = $1', [previous.id, page]);
      return previous;
    }
  }

  return getRow(
    `INSERT INTO site_chats (id, page, session_id)
     VALUES (COALESCE($1::uuid, gen_random_uuid()), $2, $3)
     RETURNING id, status`,
    [chatId, page || '/', session]
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

export async function rememberVisitorName(chatId, name) {
  const clean = String(name || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  if (!clean || !isChatId(chatId)) return;
  await query(
    `UPDATE site_chats
     SET visitor_name = $2
     WHERE id = $1 AND (visitor_name IS NULL OR visitor_name = '')`,
    [chatId, clean]
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
    'SELECT id, page, status, visitor_email, visitor_name, last_message_at, created_at FROM site_chats WHERE id = $1',
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

export async function saveArtwork({ chatId, sessionId, filename, mime, bytes }) {
  return getRow(
    `INSERT INTO site_chat_artwork (chat_id, session_id, filename, mime, bytes)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id, filename, mime, created_at`,
    [isChatId(chatId) ? chatId : null, sessionId || null, filename, mime, bytes]
  );
}

export async function listArtwork(chatId) {
  if (!isChatId(chatId)) return [];
  return getRows(
    `SELECT id, filename, mime, created_at, octet_length(bytes) AS size
     FROM site_chat_artwork
     WHERE chat_id = $1
     ORDER BY created_at ASC`,
    [chatId]
  );
}

export async function listRecentArtwork() {
  return getRows(
    `SELECT a.id, a.filename, a.mime, a.created_at, a.chat_id, octet_length(a.bytes) AS size,
            c.visitor_email, c.page
     FROM site_chat_artwork a
     LEFT JOIN site_chats c ON c.id = a.chat_id
     ORDER BY a.created_at DESC
     LIMIT 40`
  );
}

export async function getArtwork(id) {
  if (!isChatId(id)) return null;
  return getRow(
    'SELECT id, filename, mime, bytes FROM site_chat_artwork WHERE id = $1',
    [id]
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
