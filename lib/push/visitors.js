import crypto from 'crypto';
import { getRow, query } from '../database';
import { visitorLabel } from '../visitors/identity';

let cachedToken = null;
let cachedUntil = 0;

function pageLabel(pageUrl) {
  try {
    const path = new URL(pageUrl || '/', 'https://www.printnpack.ie').pathname.replace(/\/$/, '') || '/';
    if (path === '/' || path === '/index') return 'Homepage';
    const slug = path.split('/').filter(Boolean).pop() || 'Homepage';
    const words = slug.replace(/-ireland$/i, '').replace(/-/g, ' ').trim();
    if (!words) return 'Homepage';
    return words.charAt(0).toUpperCase() + words.slice(1);
  } catch {
    return 'the site';
  }
}

function skippedPage(pageUrl) {
  try {
    const path = new URL(pageUrl || '/', 'https://www.printnpack.ie').pathname;
    return path.startsWith('/admin') || path.startsWith('/staff') || path === '/login' || path.startsWith('/login/');
  } catch {
    return false;
  }
}

function readServiceAccount() {
  const raw = String(process.env.FIREBASE_SERVICE_ACCOUNT || '').trim();
  if (!raw) return null;
  const candidates = [raw];
  if ((raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"))) {
    candidates.push(raw.slice(1, -1));
  }
  for (const candidate of candidates) {
    try {
      let account = JSON.parse(candidate);
      if (typeof account === 'string') account = JSON.parse(account);
      if (!account || typeof account !== 'object' || !account.client_email || !account.private_key) continue;
      account.private_key = String(account.private_key);
      if (!account.private_key.includes('\n')) {
        account.private_key = account.private_key.replace(/\\n/g, '\n');
      }
      if (!String(account.private_key).includes('BEGIN PRIVATE KEY')) continue;
      return account;
    } catch {
      // The hosting panel sometimes wraps the account JSON a second time.
    }
  }
  return null;
}

async function messagingToken() {
  if (cachedToken && Date.now() < cachedUntil) return cachedToken;
  const account = readServiceAccount();
  if (!account) return null;
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claim = Buffer.from(JSON.stringify({
    iss: account.client_email,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })).toString('base64url');
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${claim}`);
  const assertion = `${header}.${claim}.${signer.sign(account.private_key, 'base64url')}`;
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload.access_token) return null;
  cachedToken = payload.access_token;
  cachedUntil = Date.now() + 50 * 60 * 1000;
  return cachedToken;
}

export async function notifyLiveVisitor({ ipHash, city, pageUrl, device }) {
  if (!ipHash || !process.env.FIREBASE_SERVICE_ACCOUNT || skippedPage(pageUrl)) return;

  try {
    if (!readServiceAccount()) {
      console.error('Visitor push skipped: Firebase account could not be read');
      return;
    }

    const tokens = await query(
      `SELECT token FROM agent_push_tokens WHERE updated_at > NOW() - INTERVAL '90 days'`
    );
    if (!tokens.rowCount) return;

    const recent = await query(
      `SELECT sent_at
       FROM agent_visitor_alerts
       WHERE ip_address_hash = $1`,
      [ipHash]
    );
    const sentAt = recent.rows[0]?.sent_at ? new Date(recent.rows[0].sent_at).getTime() : 0;
    const sinceAlert = sentAt ? Date.now() - sentAt : Infinity;
    if (sinceAlert < 3 * 60 * 1000) return;

    let stillBrowsing = false;
    try {
      const already = await query(
        `SELECT 1
         FROM live_sessions
         WHERE ip_address_hash = $1
           AND is_active = true
           AND session_end > NOW() - INTERVAL '45 seconds'
         LIMIT 1`,
        [ipHash]
      );
      stillBrowsing = Boolean(already.rowCount);
    } catch (error) {
      if (!/live_sessions/i.test(String(error?.message || error))) throw error;
    }
    if (stillBrowsing && sinceAlert < 3 * 60 * 60 * 1000) return;

    const place = city || 'Someone';
    const where = pageLabel(pageUrl);
    const body = [place === 'Someone' ? null : place, where, device].filter(Boolean).join(' · ');
    const sent = await deliverPush(tokens.rows, {
      notification: {
        title: 'Someone is on the site',
        body: body || where,
      },
      android: {
        priority: 'HIGH',
        notification: {
          channel_id: 'visitors',
          sound: 'default',
        },
      },
      data: { type: 'visitor' },
    });
    if (!sent) return;

    await query(
      `INSERT INTO agent_visitor_alerts (ip_address_hash, sent_at)
       VALUES ($1, NOW())
       ON CONFLICT (ip_address_hash) DO UPDATE
         SET sent_at = NOW()`,
      [ipHash]
    );
  } catch (error) {
    console.error('Visitor push failed:', error.message);
  }
}

export async function notifyChatMessage({ chatId, text }) {
  const preview = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 160);
  if (!preview || !process.env.FIREBASE_SERVICE_ACCOUNT) return;
  if (!readServiceAccount()) {
    console.error('Message push skipped: Firebase account could not be read');
    return;
  }

  try {
    const tokens = await query(
      `SELECT token FROM agent_push_tokens WHERE updated_at > NOW() - INTERVAL '90 days'`
    );
    if (!tokens.rowCount) return;

    const chat = await getRow(
      'SELECT visitor_name FROM site_chats WHERE id = $1',
      [chatId]
    );
    const title = visitorLabel({ name: chat?.visitor_name });

    await deliverPush(tokens.rows, {
      notification: {
        title,
        body: preview,
      },
      android: {
        priority: 'HIGH',
        notification: {
          channel_id: 'visitors',
          sound: 'default',
        },
      },
      data: {
        type: 'message',
        chatId: String(chatId || ''),
      },
    });
  } catch (error) {
    console.error('Message push failed:', error.message);
  }
}

async function deliverPush(tokens, message) {
  const access = await messagingToken();
  if (!access) {
    console.error('Push skipped: Firebase login failed');
    return 0;
  }
  let sent = 0;
  await Promise.all(tokens.map(async (row) => {
    const response = await fetch('https://fcm.googleapis.com/v1/projects/voip-b81d6/messages:send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: { ...message, token: row.token } }),
    });
    if (response.ok) {
      sent += 1;
      return;
    }
    const detail = await response.text();
    if (/UNREGISTERED|NOT_FOUND|registration token/i.test(detail)) {
      await query('DELETE FROM agent_push_tokens WHERE token = $1', [row.token]);
      return;
    }
    console.error('Push failed', response.status);
  }));
  return sent;
}
