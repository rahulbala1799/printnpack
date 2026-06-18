import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow, query } from '../../../../lib/database.js';
import { generateText, tool, stepCountIs } from 'ai';
import { z } from 'zod';
import { getInvoiceAiModel, getAiConfigError, isAiConfigured } from '../../../../lib/ai/gateway.js';
import { searchPlainProducts, pricePlainProduct } from '../../../../lib/pricing/plain-product.js';
import { calculateCustomProduct, getRulesForFamily } from '../../../../lib/pricing/custom-print.js';
import {
  getCustomerPriceCatalog,
  applySavedPricesToItems,
} from '../../../../lib/invoices/customer-prices.js';
import {
  buildPlainLineItem,
  buildPrintedLineItem,
  calcQuoteTotals,
  recalcLineTotal,
} from '../../../../lib/invoices/line-item.js';
import { resolvePricingFamily, PRICING_FAMILY_GUIDE } from '../../../../lib/invoices/pricing-families.js';
import { formatBreakdownForFamily, collectBreakdownsFromSteps } from '../../../../lib/pricing/breakdown-format.js';

const MODEL = getInvoiceAiModel();

async function getQuoteForSession(sessionId, adminId) {
  const session = await getRow(
    `SELECT * FROM invoice_sessions WHERE id = $1 AND admin_id = $2`,
    [sessionId, adminId]
  );
  if (!session?.quote_id) return { session, quote: null };
  const quote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
  return { session, quote };
}

async function mergeLinesIntoQuote(quoteId, lines, replace = false) {
  const q = await getRow(`SELECT * FROM quotes WHERE id = $1`, [quoteId]);
  let items = replace ? [] : [...(q.items || [])];
  for (const line of lines) {
    const n = recalcLineTotal(line);
    const idx = items.findIndex((i) => i.id === n.id);
    if (idx >= 0) items[idx] = n;
    else items.push(n);
  }
  const totals = calcQuoteTotals(items, q.document_type, q.vat_rate);
  return getRow(
    `UPDATE quotes SET items = $1, subtotal = $2, vat_amount = $3, total = $4, updated_at = now() WHERE id = $5 RETURNING *`,
    [JSON.stringify(items), totals.subtotal, totals.vat_amount, totals.total, q.id]
  );
}

/** Parse "2m x 1m" style dimensions from user text when the model omits them. */
function parseDimsFromText(text) {
  const m = String(text || '').match(
    /(\d+(?:\.\d+)?)\s*(?:m|metre|meter|mtr)?\s*[x×]\s*(\d+(?:\.\d+)?)\s*(?:m|metre|meter|mtr)?/i
  );
  if (!m) return {};
  return { width_m: parseFloat(m[1]), height_m: parseFloat(m[2]) };
}

/** Parse quantity e.g. "5 banners", "5 Banners - 2m x 1m". */
function parseQuantityFromText(text) {
  const t = String(text || '');
  const patterns = [
    /\b(\d+)\s+banners?\b/i,
    /\b(\d+)\s*(?:x|×)\s*\d+(?:\.\d+)?\s*m\s*banners?\b/i,
    /\b(?:qty|quantity)\s*[:\-]?\s*(\d+)/i,
    /^(\d+)\s+(?:pcs?|units?)\b/i,
  ];
  for (const re of patterns) {
    const m = t.match(re);
    if (m) return { quantity: Math.max(1, parseInt(m[1], 10)) };
  }
  return {};
}

function extractJobHints(priorMessages, currentMessage) {
  const userText = [
    ...priorMessages.filter((m) => m.role === 'user').map((m) => m.content),
    currentMessage,
  ].join(' ');
  return { ...parseDimsFromText(userText), ...parseQuantityFromText(userText) };
}

async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!isAiConfigured()) {
    return res.status(503).json({ error: getAiConfigError() });
  }

  try {
    const { session_id, message, customer_id } = req.body || {};
    if (!session_id || !message) {
      return res.status(400).json({ error: 'session_id and message required' });
    }

    const { session, quote } = await getQuoteForSession(session_id, req.user.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const jobHints = extractJobHints(priorMessages, message);

    const ctx = {
      sessionId: session_id,
      adminId: req.user.id,
      customerId: customer_id || quote?.customer_id || session.customer_id,
      quoteId: session.quote_id,
      userMessage: message,
      jobHints,
    };

    const priorMessages = await getRows(
      `SELECT role, content FROM invoice_session_messages
       WHERE session_id = $1 AND role IN ('user', 'assistant')
       ORDER BY created_at ASC`,
      [session_id]
    );

    await query(
      `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'user', $2)`,
      [session_id, message]
    );

    const searchPlain = tool({
      description: 'Search plain packaging products by name or category',
      inputSchema: z.object({
        search: z.string().optional().describe('Product name search'),
        category: z.string().optional().describe('Category filter'),
      }),
      execute: async ({ search, category }) => {
        const products = await searchPlainProducts(getRows, { search, category });
        return { products: products.slice(0, 12) };
      },
    });

    const pricePlain = tool({
      description: 'Price a plain packaging product by database id and number of cases',
      inputSchema: z.object({
        product_id: z.string(),
        num_cases: z.number().describe('Number of cases to order'),
      }),
      execute: async ({ product_id, num_cases }) => {
        const product = await getRow(`SELECT * FROM plain_products WHERE id = $1`, [product_id]);
        if (!product) return { error: 'Not found' };
        const shaped = {
          id: product.id,
          name: product.name,
          category: product.category,
          qtyPerCase: product.qty_per_case,
          caseTiers: product.case_tiers,
        };
        const priced = pricePlainProduct(shaped, num_cases);
        const tier = shaped.caseTiers.find((t) => t.casesLabel === priced.tier_label) || shaped.caseTiers[0];
        const line = buildPlainLineItem({ product: shaped, numCases: num_cases, tier, unitPrice: priced.unit_price });
        return { priced, line };
      },
    });

    const calcCustom = tool({
      description:
        'Calculate price for a custom printed product. PVC/vinyl banners use family vinyl_banner. Always call this when user asks for a price.',
      inputSchema: z.object({
        family: z.string().describe('Pricing family e.g. vinyl_banner, roll_up_banner'),
        name: z.string().optional().describe('Line item display name'),
        quantity: z.number().optional().describe('Quantity, default 1'),
        width_m: z.number().optional().describe('Width in metres'),
        height_m: z.number().optional().describe('Height in metres'),
        eyelets: z.number().optional().describe('Number of eyelets, default 8'),
        thickness_mm: z.string().optional(),
        piece_width_cm: z.number().optional(),
        piece_height_cm: z.number().optional(),
      }),
      execute: async (args) => {
        const family = resolvePricingFamily(args);
        const merged = {
          quantity: 1,
          eyelets: 8,
          ...ctx.jobHints,
          ...args,
          family,
        };
        const rules = await getRulesForFamily(getRows, family);
        const globalRules = await getRulesForFamily(getRows, 'global');
        const result = calculateCustomProduct(family, merged, rules, 0, globalRules);
        const breakdown_text = formatBreakdownForFamily(family, result, merged);
        const line = buildPrintedLineItem({
          name: merged.name || result.suggested_name,
          category: result.category,
          quantity: merged.quantity || 1,
          size_spec: result.size_spec,
          unit_price: result.unit_price,
          pricing_family: family,
          pricing_breakdown: result.breakdown,
        });
        return { family, result, line, breakdown_text };
      },
    });

    const savedPrices = tool({
      description: 'Get customer saved price catalog. Uses linked customer automatically.',
      inputSchema: z.object({
        customer_id: z.string().optional(),
      }),
      execute: async ({ customer_id }) => {
        const cid = customer_id || ctx.customerId;
        if (!cid) return { error: 'No customer linked — ask user to select a customer first' };
        return getCustomerPriceCatalog(getRow, getRows, cid);
      },
    });

    const applySavedPrices = tool({
      description: 'Apply saved customer prices to the quote draft',
      inputSchema: z.object({
        mode: z.enum(['latest', 'selection']).optional(),
        match_keys: z.array(z.string()).optional(),
        selections: z
          .array(
            z.object({
              match_key: z.string(),
              unit_price: z.number(),
              quantity: z.number().optional(),
            })
          )
          .optional(),
        replace_existing: z.boolean().optional(),
      }),
      execute: async ({ mode, match_keys, selections, replace_existing }) => {
        const cid = ctx.customerId;
        if (!cid) return { error: 'No customer linked' };
        const catalog = await getCustomerPriceCatalog(getRow, getRows, cid);
        if (!catalog?.products?.length) return { error: 'No saved prices for this customer' };
        const lines = applySavedPricesToItems(catalog, {
          mode: mode || 'latest',
          selections: selections || [],
          match_keys: match_keys || [],
        });
        if (!lines.length) return { error: 'No matching saved prices' };
        const updated = await mergeLinesIntoQuote(ctx.quoteId, lines, replace_existing);
        return { applied: lines.length, items: updated.items, total: updated.total };
      },
    });

    const upsertDraft = tool({
      description: 'Add or update line items on the quote draft after pricing',
      inputSchema: z.object({
        lines: z.array(z.record(z.any())).describe('Line items from calcCustom or pricePlain'),
      }),
      execute: async ({ lines }) => {
        const updated = await mergeLinesIntoQuote(ctx.quoteId, lines);
        return { items: updated.items, total: updated.total };
      },
    });

    let customerContext = '';
    if (ctx.customerId) {
      const catalog = await getCustomerPriceCatalog(getRow, getRows, ctx.customerId);
      const count = catalog?.products?.length || 0;
      customerContext = count
        ? `Linked customer: ${catalog.customer_name} (${count} saved products).`
        : `Linked customer: ${catalog?.customer_name || ctx.customerId} (no saved prices yet).`;
    } else {
      customerContext = 'No customer linked yet.';
    }

    const system = `You are PrintNPack admin quote assistant. Currency: EUR. Document type: ${quote?.document_type || 'vat'}.
${customerContext}
${PRICING_FAMILY_GUIDE}

RULES:
1. ALWAYS use tools to calculate prices — never invent numbers.
2. When user gives product type + size + quantity, call calcCustom then upsertDraft in the same turn.
3. For banners: PVC, vinyl, and outdoor banners are all family "vinyl_banner". Default eyelets=8, quantity=1 if not stated. Parse "5 banners" as quantity=5.
4. Only ask a clarifying question if product type OR dimensions are genuinely missing.
5. Every price answer MUST include the full breakdown_text from calcCustom (materials, labour, markup per unit and order total for qty > 1). Never reply with only a final euro amount.`;

    const chatMessages = [
      ...priorMessages.map((m) => ({ role: m.role, content: m.content })),
      { role: 'user', content: message },
    ];

    const { text, steps } = await generateText({
      model: MODEL,
      system,
      messages: chatMessages,
      tools: { searchPlain, pricePlain, calcCustom, savedPrices, applySavedPrices, upsertDraft },
      stopWhen: stepCountIs(10),
    });

    const breakdownBlocks = collectBreakdownsFromSteps(steps);
    let finalMessage = text;
    if (breakdownBlocks.length) {
      const block = breakdownBlocks.join('\n\n');
      const summary = text.includes('PRICE BREAKDOWN')
        ? text
        : text.trim()
          ? `${text.trim()}\n\n${block}`
          : block;
      finalMessage = summary.includes(block) ? summary : `${block}\n\n${text.trim()}`.trim();
    }

    await query(
      `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'assistant', $2)`,
      [session_id, finalMessage]
    );

    const freshQuote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
    return res.status(200).json({ message: finalMessage, quote: freshQuote });
  } catch (e) {
    console.error('Chat error:', e);
    return res.status(500).json({ error: e.message || 'Chat failed' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
