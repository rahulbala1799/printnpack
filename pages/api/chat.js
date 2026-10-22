import { submitEnquiry } from '../../lib/leads/submit-enquiry';
import { broadcastLive, liveMessage } from '../../lib/chat/live';
import { notifyChatMessage } from '../../lib/push/visitors';
import { addChatMessage, getChat, listMessages, openChat, rememberVisitorEmail, rememberVisitorName } from '../../lib/chat/sessions';

export const config = {
  maxDuration: 60,
  api: {
    externalResolver: true,
    bodyParser: { sizeLimit: '64kb' },
  },
};

const ASK_DETAILS = 'Please share your name, email, and phone in case the chat disconnects, so we can still get back to you.';
const THANKS = 'Thanks, we have your details. We will reply here, and we can still reach you if the chat drops.';

const hits = new Map();

function limited(key, max, windowMs) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((time) => now - time < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return String(value || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
}

function sanitizeMessages(input) {
  if (!Array.isArray(input)) return [];
  return input
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .filter((message) => typeof message.content === 'string' && message.content.trim())
    .slice(-8)
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, 1000),
    }));
}

function publicMessage(row) {
  return {
    id: row.id,
    role: row.role,
    content: row.content,
    createdAt: row.created_at || row.createdAt,
  };
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function readLead(body) {
  const lead = body?.lead;
  if (!lead || typeof lead !== 'object') return null;
  return {
    name: String(lead.name || '').replace(/\s+/g, ' ').trim().slice(0, 120),
    email: String(lead.email || '').trim().toLowerCase().slice(0, 160),
    phone: String(lead.phone || '').replace(/\s+/g, ' ').trim().slice(0, 40),
  };
}

function hasLead(chat) {
  return Boolean(chat?.visitor_email && chat?.visitor_name);
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const chat = await getChat(req.query.chatId);
      if (!chat) {
        res.status(404).json({ message: 'Chat not found.' });
        return;
      }
      const since = typeof req.query.since === 'string' ? req.query.since : null;
      const messages = await listMessages(chat.id, since);
      res.status(200).json({
        chatId: chat.id,
        status: chat.status,
        hasLead: hasLead(chat),
        messages: messages.map(publicMessage),
      });
    } catch (error) {
      console.error('Site chat read error:', error?.message || error);
      res.status(500).json({ message: 'Chat is unavailable.' });
    }
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const ip = clientIp(req);
  if (limited(`chat:${ip}`, 20, 10 * 60 * 1000)) {
    res.status(429).json({ message: 'Too many messages. Call 089 415 7369 or email info@printnpack.ie.' });
    return;
  }

  const lead = readLead(req.body);
  const messages = sanitizeMessages(req.body?.messages);
  const last = messages[messages.length - 1];
  if (!lead && (!last || last.role !== 'user')) {
    res.status(400).json({ message: 'Send a message to start.' });
    return;
  }

  const page = typeof req.body?.page === 'string' && req.body.page.startsWith('/')
    ? req.body.page.slice(0, 180)
    : '/';

  let chat = null;
  try {
    const sessionId = typeof req.body?.sessionId === 'string' ? req.body.sessionId : '';
    const opened = await openChat({ id: req.body?.chatId, page, sessionId });
    chat = opened?.id ? await getChat(opened.id) : null;
  } catch (error) {
    console.error('Site chat save error:', error?.message || error);
    chat = null;
  }

  if (chat && last?.role === 'user') {
    try {
      const incoming = liveMessage('user', last.content, chat.status || 'ai');
      await addChatMessage(chat.id, 'user', last.content, incoming.id);
      await rememberVisitorEmail(chat.id, last.content);
      await broadcastLive(chat.id, incoming);
      notifyChatMessage({ chatId: chat.id, text: last.content }).catch((error) => {
        console.error('Message push failed:', error?.message || error);
      });
      chat = await getChat(chat.id);
    } catch (error) {
      console.error('Site chat save error:', error?.message || error);
    }
  }

  if (lead) {
    if (lead.name.length < 2) {
      res.status(400).json({ message: 'Enter your name.' });
      return;
    }
    if (!validEmail(lead.email)) {
      res.status(400).json({ message: 'Enter a valid email address.' });
      return;
    }
    if (!chat?.id) {
      res.status(503).json({ message: 'Chat is unavailable. Call 089 415 7369 or email info@printnpack.ie.' });
      return;
    }
    if (hasLead(chat)) {
      res.status(200).json({ mode: 'waiting', chatId: chat.id, hasLead: true });
      return;
    }
    if (limited(`lead:${ip}`, 5, 60 * 60 * 1000)) {
      res.status(429).json({ message: 'An enquiry was already sent. Call 089 415 7369 or email info@printnpack.ie.' });
      return;
    }

    const history = await listMessages(chat.id);
    const question = history
      .filter((row) => row.role === 'user')
      .map((row) => row.content)
      .join('\n')
      .slice(0, 2000);
    const summary = [
      question || 'Website chat enquiry',
      '',
      `Phone: ${lead.phone || 'not given'}`,
      `Page: ${page}`,
    ].join('\n');

    const result = await submitEnquiry({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      message: summary,
      productInterest: question.slice(0, 160),
      source: 'Website chat',
      subject: 'Website chat enquiry',
      page,
    });
    if (!result.ok) {
      res.status(result.status || 500).json({ message: result.message || 'Could not send that. Call 089 415 7369.' });
      return;
    }

    await rememberVisitorName(chat.id, lead.name);
    await rememberVisitorEmail(chat.id, lead.email);
    const leadNote = [question.split('\n')[0] || 'New chat', lead.phone ? `Phone ${lead.phone}` : '']
      .filter(Boolean)
      .join(' · ')
      .slice(0, 160);
    await notifyChatMessage({ chatId: chat.id, text: leadNote }).catch((error) => {
      console.error('Lead push failed:', error?.message || error);
    });
    const note = liveMessage('assistant', THANKS, 'ai');
    await addChatMessage(chat.id, 'assistant', note.content, note.id);
    await broadcastLive(chat.id, note);
    res.status(200).json({
      mode: 'waiting',
      chatId: chat.id,
      hasLead: true,
      message: publicMessage(note),
    });
    return;
  }

  if (chat?.status === 'human') {
    res.status(200).json({ mode: 'human', chatId: chat.id, hasLead: hasLead(chat) });
    return;
  }

  if (!chat?.id) {
    res.status(503).json({ message: 'Chat is unavailable. Call 089 415 7369 or email info@printnpack.ie.' });
    return;
  }

  if (hasLead(chat)) {
    res.status(200).json({ mode: 'waiting', chatId: chat.id, hasLead: true });
    return;
  }

  const history = await listMessages(chat.id);
  const alreadyAsked = history.some((row) => row.role === 'assistant' && row.content === ASK_DETAILS);
  let prompt = null;
  if (!alreadyAsked) {
    prompt = liveMessage('assistant', ASK_DETAILS, 'ai');
    await addChatMessage(chat.id, 'assistant', prompt.content, prompt.id);
    await broadcastLive(chat.id, prompt);
  }

  res.status(200).json({
    mode: 'lead',
    chatId: chat.id,
    hasLead: false,
    message: prompt ? publicMessage(prompt) : undefined,
  });
}
