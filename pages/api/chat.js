import { streamText, tool, stepCountIs } from 'ai';
import { z } from 'zod';
import {
  getChatAiModel,
  chatProviderOptions,
  getAiConfigError,
  isAiConfigured,
  resolveAiModel,
} from '../../lib/ai/gateway';
import { buildSystemPrompt } from '../../lib/chat/knowledge';
import { submitEnquiry } from '../../lib/leads/submit-enquiry';

export const config = {
  maxDuration: 60,
  api: {
    externalResolver: true,
    bodyParser: { sizeLimit: '64kb' },
  },
};

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

function userTranscript(messages) {
  return messages.filter((message) => message.role === 'user').map((message) => message.content).join('\n');
}

function digits(value) {
  return String(value || '').replace(/\D/g, '');
}

function nameWasTyped(name, transcript) {
  const hay = transcript.toLowerCase();
  const parts = name.toLowerCase().split(/[^a-z0-9']+/).filter((part) => part.length >= 3);
  if (!parts.length) return hay.includes(name.toLowerCase());
  return parts.every((part) => hay.includes(part));
}

function phoneWasTyped(phone, transcript) {
  const wanted = digits(phone);
  if (wanted.length < 7) return false;
  const typed = digits(transcript);
  const local = wanted.replace(/^353/, '');
  return typed.includes(wanted) || typed.includes(local) || typed.includes(`0${local}`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  if (!isAiConfigured()) {
    res.status(503).json({ message: getAiConfigError() });
    return;
  }

  const ip = clientIp(req);
  if (limited(`chat:${ip}`, 20, 10 * 60 * 1000)) {
    res.status(429).json({ message: 'Too many messages. Call 089 415 7369 or email info@printnpack.ie.' });
    return;
  }

  const messages = sanitizeMessages(req.body?.messages);
  const last = messages[messages.length - 1];
  if (!last || last.role !== 'user') {
    res.status(400).json({ message: 'Send a message to start.' });
    return;
  }

  const page = typeof req.body?.page === 'string' && req.body.page.startsWith('/')
    ? req.body.page.slice(0, 180)
    : '/';
  const transcript = userTranscript(messages);
  const model = getChatAiModel();
  const customerLeftContact = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(transcript);

  try {
    const result = streamText({
      model: resolveAiModel(model),
      system: buildSystemPrompt(page, last.content),
      messages,
      stopWhen: stepCountIs(3),
      maxOutputTokens: 400,
      providerOptions: chatProviderOptions(model),
      ...(customerLeftContact ? { tools: {
        submitEnquiry: tool({
          description: 'Send the customer enquiry to PrintNPack. Call only after the customer has typed their name and email and wants a quote, a callback, or an order.',
          inputSchema: z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string().optional(),
            company: z.string().optional(),
            product: z.string().optional(),
            message: z.string().describe('What they want quoted, including size and quantity if they gave them'),
          }),
          execute: async ({ name, email, phone, company, product, message }) => {
            const typedEmail = String(email || '').trim().toLowerCase();
            if (!typedEmail || !transcript.toLowerCase().includes(typedEmail)) {
              return { sent: false, error: 'Ask the customer to type their email address. Do not invent one.' };
            }
            if (!nameWasTyped(name, transcript)) {
              return { sent: false, error: 'Ask the customer to type their name.' };
            }
            if (limited(`lead:${ip}`, 5, 60 * 60 * 1000)) {
              return { sent: false, error: 'An enquiry was already sent. Ask them to call 089 415 7369.' };
            }

            const typedPhone = phone && phoneWasTyped(phone, transcript) ? phone : '';
            const typedCompany = company && transcript.toLowerCase().includes(company.toLowerCase()) ? company : '';
            const summary = [
              String(message || '').trim(),
              '',
              `Page: ${page}`,
              'Customer wrote:',
              transcript.slice(0, 2000),
            ].join('\n');

            const result = await submitEnquiry({
              name,
              email: typedEmail,
              phone: typedPhone,
              company: typedCompany,
              message: summary,
              productInterest: product,
              source: 'Website chat',
              subject: `Website chat — ${product || 'enquiry'}`,
              page,
            });

            if (!result.ok) return { sent: false, error: result.message };
            return { sent: true };
          },
        }),
      } } : {}),
    });

    result.pipeTextStreamToResponse(res);
  } catch (error) {
    console.error('Site chat error:', error?.message || error);
    if (!res.headersSent) {
      res.status(500).json({
        message: 'The assistant is unavailable. Call 089 415 7369 or email info@printnpack.ie.',
      });
    }
  }
}
