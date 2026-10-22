import { getRow, query } from '../chat-db';

function clean(value) {
  const text = String(value || '').trim();
  if (!text || text.toLowerCase() === 'null' || text.toLowerCase() === 'undefined') return '';
  return text;
}

export function visitorLabel({ name, number }) {
  const saved = clean(name);
  if (saved) return saved;
  const count = Number(number);
  if (Number.isInteger(count) && count > 0) return `Visitor ${count}`;
  return 'Visitor';
}

export async function profileForHash(ipHash) {
  const hash = clean(ipHash);
  if (!hash) return null;
  return getRow(
    `INSERT INTO visitor_profiles (ip_address_hash)
     VALUES ($1)
     ON CONFLICT (ip_address_hash) DO UPDATE
       SET ip_address_hash = EXCLUDED.ip_address_hash
     RETURNING visitor_number, name, email`,
    [hash]
  );
}

export async function rememberVisitorFacts(chatId, { name, email } = {}) {
  const savedName = clean(name).slice(0, 80);
  const savedEmail = clean(email).toLowerCase().slice(0, 180);
  if (savedName) {
    await query(
      `UPDATE site_chats
       SET visitor_name = COALESCE(NULLIF(visitor_name, ''), $2)
       WHERE id = $1`,
      [chatId, savedName]
    );
  }
  if (savedEmail) {
    await query(
      `UPDATE site_chats
       SET visitor_email = COALESCE(NULLIF(visitor_email, ''), $2)
       WHERE id = $1`,
      [chatId, savedEmail]
    );
  }

  const chat = await getRow(
    'SELECT session_id, visitor_name, visitor_email FROM site_chats WHERE id = $1',
    [chatId]
  );
  if (!chat?.session_id) return;
  const session = await getRow(
    'SELECT ip_address_hash FROM live_sessions WHERE session_id = $1',
    [chat.session_id]
  );
  if (!session?.ip_address_hash) return;
  await profileForHash(session.ip_address_hash);
  if (chat.visitor_name) {
    await query(
      `UPDATE visitor_profiles
       SET name = COALESCE(NULLIF(name, ''), $2), updated_at = now()
       WHERE ip_address_hash = $1`,
      [session.ip_address_hash, chat.visitor_name]
    );
  }
  if (chat.visitor_email) {
    await query(
      `UPDATE visitor_profiles
       SET email = COALESCE(NULLIF(email, ''), $2), updated_at = now()
       WHERE ip_address_hash = $1`,
      [session.ip_address_hash, chat.visitor_email]
    );
  }
}
