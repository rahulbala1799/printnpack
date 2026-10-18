import crypto from 'crypto';
import { generateText } from 'ai';
import { chatProviderOptions, getAiConfigError, getChatAiModel, isAiConfigured, resolveAiModel } from '../../../lib/ai/gateway';
import { getRow, query } from '../../../lib/database';

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

function pageLabel(path) {
  const slug = String(path || '/').split('/').filter(Boolean).pop() || 'the site';
  return slug.replace(/-/g, ' ').replace(/\bireland\b/i, '').trim() || 'the site';
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
    `SELECT id FROM analytics.agent_invites
     WHERE ip_address_hash = $1 AND created_at > NOW() - INTERVAL '1 day'
     LIMIT 1`,
    [ipHash]
  );
  if (seen) {
    res.status(200).json({ skip: true });
    return;
  }

  let message = `Hey, I can help with a price for ${pageLabel(path)} if you want.`;
  if (isAiConfigured()) {
    try {
      const result = await generateText({
        model: resolveAiModel(getChatAiModel()),
        maxOutputTokens: 40,
        providerOptions: chatProviderOptions(),
        prompt: `Write one friendly chat bubble, under 18 words, from PrintNPack to a customer looking at "${pageLabel(path)}". Offer help with a price. Do not invent a number. English only. No quotes.`,
      });
      const line = String(result.text || '').replace(/\s+/g, ' ').trim();
      if (line) message = line.slice(0, 180);
    } catch (error) {
      console.error('Invite line error:', error?.message || error);
    }
  } else {
    console.error(getAiConfigError());
  }

  await query(
    `INSERT INTO analytics.agent_invites (session_id, ip_address_hash, page_path, message)
     VALUES ($1, $2, $3, $4)`,
    [sessionId || null, ipHash, path, message]
  );

  res.status(200).json({ message });
}
