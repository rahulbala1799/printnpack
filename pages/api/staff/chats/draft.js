import { generateText } from 'ai';
import { withAuth } from '../../../../lib/withAuth';
import { chatProviderOptions, getAiConfigError, getChatAiModel, isAiConfigured, resolveAiModel } from '../../../../lib/ai/gateway';

function recentLines(messages) {
  if (!Array.isArray(messages)) return '';
  return messages
    .slice(-6)
    .map((message) => {
      const who = message.role === 'user' ? 'Customer' : message.role === 'staff' ? 'PrintNPack' : 'Assistant';
      return `${who}: ${String(message.content || '').slice(0, 400)}`;
    })
    .filter((line) => line.length > 3)
    .join('\n');
}

export async function draftReply(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const note = String(req.body?.text || '').trim().slice(0, 1000);
  if (!note) {
    res.status(400).json({ error: 'Type what you want to say first.' });
    return;
  }
  if (!isAiConfigured()) {
    res.status(503).json({ error: getAiConfigError() });
    return;
  }

  const context = recentLines(req.body?.messages);
  try {
    const result = await generateText({
      model: resolveAiModel(getChatAiModel()),
      maxOutputTokens: 180,
      providerOptions: chatProviderOptions(),
      prompt: `Rewrite this staff note as a short reply the PrintNPack team can send to a customer.

Staff note:
${note}

Recent chat:
${context || 'No earlier messages.'}

Rules:
- Keep the staff member's meaning. Do not add prices, dates, quantities, or promises they did not write.
- Do not mention suppliers, other companies, trade prices, or product codes.
- Do not say cheapest.
- Friendly, plain English, two or three sentences at most.
- Return only the reply, with no label and no quotation marks.`,
    });
    const reply = String(result.text || '').replace(/^["']|["']$/g, '').trim();
    if (!reply) {
      res.status(502).json({ error: 'No reply came back. Try again.' });
      return;
    }
    res.status(200).json({ reply: reply.slice(0, 1000) });
  } catch (error) {
    console.error('Staff draft error:', error?.message || error);
    res.status(502).json({ error: 'The helper is unavailable right now.' });
  }
}

export default withAuth(draftReply, { roles: ['staff', 'admin'] });
