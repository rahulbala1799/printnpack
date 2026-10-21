import crypto from 'crypto';
import { getRow, query } from '../../../lib/chat-db';

const INVITE = 'Need any help? We usually reply very fast. We are live and answer queries until 12 AM.';

export const config = {
  api: { bodyParser: { sizeLimit: '16kb' } },
};

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return String(value || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
}

function hashIp(ip) {
  return crypto.createHash('sha256').update(ip).digest('hex');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const path = typeof req.body?.page === 'string' && req.body.page.startsWith('/')
    ? req.body.page.slice(0, 180)
    : '/';
  const sessionId = String(req.body?.sessionId || '').slice(0, 64);
  const ipHash = hashIp(clientIp(req));

  const seen = await getRow(
    `SELECT id FROM agent_invites
     WHERE ip_address_hash = $1 AND created_at > NOW() - INTERVAL '1 day'
     LIMIT 1`,
    [ipHash]
  );
  if (seen) {
    res.status(200).json({ skip: true });
    return;
  }

  const message = INVITE;

  await query(
    `INSERT INTO agent_invites (session_id, ip_address_hash, page_path, message)
     VALUES ($1, $2, $3, $4)`,
    [sessionId || null, ipHash, path, message]
  );

  res.status(200).json({ message });
}
