import { withAuth } from '../../../../lib/withAuth.js';
import { getRows, getRow, query } from '../../../../lib/database.js';
import { generateText, tool, stepCountIs } from 'ai';
import { z } from 'zod';
import { getInvoiceAiModel, getAiConfigError, isAiConfigured } from '../../../../lib/ai/gateway.js';
import { searchPlainProducts, pricePlainProduct, mapPlainProductRow } from '../../../../lib/pricing/plain-product.js';
import { calculateCustomProduct, getRulesForFamily } from '../../../../lib/pricing/custom-print.js';
import {
  getCustomerPriceCatalog,
  applySavedPricesToItems,
} from '../../../../lib/invoices/customer-prices.js';
import {
  buildPlainLineItem,
} from '../../../../lib/invoices/line-item.js';
import { resolvePricingFamily, PRICING_FAMILY_GUIDE } from '../../../../lib/invoices/pricing-families.js';
import { formatBreakdownForFamily, collectBreakdownsFromSteps } from '../../../../lib/pricing/breakdown-format.js';
import { PLAIN_CASE_QTY_GUIDE, formatPlainProductForAi } from '../../../../lib/invoices/plain-packaging-ai-context.js';
import {
  loadQuotedItems,
  saveQuotedItems,
  upsertQuotedItem,
  summarizeQuotedItems,
  buildLinesFromSelections,
  buildLineFromQuotedItem,
  collectStructuredBreakdownsFromSteps,
  getQuotedBreakdowns,
  userWantsBreakdown,
  parseQuotedIndexFromText,
  createPendingItem,
  upsertPendingItem,
  setQuotedInvoicePrice,
  createManualQuotedItem,
} from '../../../../lib/invoices/quoted-items.js';
import { buildCostTableRows } from '../../../../lib/invoices/cost-table.js';
import { mergeLinesIntoQuote } from '../../../../lib/invoices/quote-merge.js';
import { runCalcCustom } from '../../../../lib/invoices/run-calc-custom.js';
import {
  parsePaperSizeFromText,
  parseThicknessMm,
  parsePizzaSizeInches,
} from '../../../../lib/pricing/paper-sizes.js';

const MODEL = getInvoiceAiModel();
const MAX_CHAT_HISTORY = 24;
const MAX_AI_STEPS = 10;

async function persistAssistantReply(sessionId, finalMessage, metadata) {
  try {
    await query(
      `INSERT INTO invoice_session_messages (session_id, role, content, metadata) VALUES ($1, 'assistant', $2, $3)`,
      [sessionId, finalMessage, JSON.stringify(metadata)]
    );
  } catch {
    await query(
      `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'assistant', $2)`,
      [sessionId, finalMessage]
    );
  }
}

function breakdownMetadata(structuredBreakdowns) {
  return {
    breakdowns: structuredBreakdowns.map((b) => ({
      ...b,
      unitSell: b.totals?.unitSell,
    })),
  };
}

async function buildChatPayload(getRow, sessionId, session, finalMessage, structuredBreakdowns = []) {
  const quotedItems = await loadQuotedItems(getRow, sessionId);
  const freshQuote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
  const cost_table = buildCostTableRows(quotedItems, freshQuote?.items || []);
  const metadata = { cost_table };
  await persistAssistantReply(sessionId, finalMessage, metadata);
  return {
    message: finalMessage,
    quote: freshQuote,
    quoted_items: quotedItems,
    cost_table,
    breakdowns: breakdownMetadata(structuredBreakdowns).breakdowns,
    metadata,
  };
}

function resolveLedgerBreakdowns(message, quotedItems) {
  const index = parseQuotedIndexFromText(message);
  let structured = getQuotedBreakdowns(quotedItems, { index: index ?? undefined });
  if (!structured.length && index != null) {
    structured = getQuotedBreakdowns(quotedItems);
  }
  return structured;
}

async function getQuoteForSession(sessionId, adminId) {
  const session = await getRow(
    `SELECT * FROM invoice_sessions WHERE id = $1 AND admin_id = $2`,
    [sessionId, adminId]
  );
  if (!session?.quote_id) return { session, quote: null };
  const quote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
  return { session, quote };
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
    /\b(\d+)\s+(?:foamex|correx|corriboard|sheets?|boards?|boxes?|bags?)\b/i,
    /\b(\d+)\s*(?:x|×)\s*(?:foamex|correx|sheets?)\b/i,
    /\b(?:qty|quantity)\s*[:\-]?\s*(\d+)/i,
    /^(\d+)\s+(?:pcs?|units?)\b/i,
  ];
  for (const re of patterns) {
    const m = t.match(re);
    if (m) return { quantity: Math.max(1, parseInt(m[1], 10)) };
  }
  return {};
}

function parseMarginMarkupFromText(text) {
  const t = String(text || '');
  const margin = t.match(/(\d+(?:\.\d+)?)\s*%\s*margin/i);
  if (margin) return { margin_percent: parseFloat(margin[1]) };
  const markup = t.match(/(\d+(?:\.\d+)?)\s*%\s*markup/i);
  if (markup) return { markup_percent: parseFloat(markup[1]) };
  return {};
}

function enrichPrintParams(args, userText, jobHints) {
  const paper = parsePaperSizeFromText(userText);
  const thickness = parseThicknessMm(userText);
  const pizzaInches = parsePizzaSizeInches(userText);
  const pricing = parseMarginMarkupFromText(userText);
  return {
    ...jobHints,
    ...pricing,
    ...args,
    ...(paper || {}),
    ...(thickness ? { thickness_mm: thickness } : {}),
    ...(pizzaInches && !args.pizza_size_inches ? { pizza_size_inches: pizzaInches } : {}),
  };
}

function parsePricePerFromText(text) {
  const t = String(text || '');
  if (/per\s+case/i.test(t)) {
    const cases = t.match(/(\d+)\s+cases?\b/i);
    return { price_per: 'case', num_cases: cases ? parseInt(cases[1], 10) : 1 };
  }
  const casesOnly = t.match(/(\d+)\s+cases?\b/i);
  if (casesOnly) return { num_cases: parseInt(casesOnly[1], 10), price_per: 'case' };
  return {};
}

function extractJobHints(priorMessages, currentMessage) {
  const userText = [
    ...priorMessages.filter((m) => m.role === 'user').map((m) => m.content),
    currentMessage,
  ].join(' ');
  const paper = parsePaperSizeFromText(userText);
  const thickness = parseThicknessMm(userText);
  const pizzaInches = parsePizzaSizeInches(userText);
  return {
    ...parseDimsFromText(userText),
    ...parseQuantityFromText(userText),
    ...parseMarginMarkupFromText(userText),
    ...parsePricePerFromText(userText),
    ...(paper || {}),
    ...(thickness ? { thickness_mm: thickness } : {}),
    ...(pizzaInches ? { pizza_size_inches: pizzaInches } : {}),
  };
}

async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!isAiConfigured()) {
    return res.status(503).json({ error: getAiConfigError() });
  }

  try {
    const { session_id, message, customer_id, document_type: bodyDocumentType } = req.body || {};
    if (!session_id || !message) {
      return res.status(400).json({ error: 'session_id and message required' });
    }

    const { session, quote } = await getQuoteForSession(session_id, req.user.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });

    const priorMessages = await getRows(
      `SELECT role, content FROM invoice_session_messages
       WHERE session_id = $1 AND role IN ('user', 'assistant')
       ORDER BY created_at ASC`,
      [session_id]
    );

    const jobHints = extractJobHints(priorMessages, message);
    const documentType = bodyDocumentType || quote?.document_type || 'vat';
    const purchaseVatRate = quote?.vat_rate ?? 0.23;
    let quotedItems = await loadQuotedItems(getRow, session_id);

    const ctx = {
      sessionId: session_id,
      adminId: req.user.id,
      customerId: customer_id || quote?.customer_id || session.customer_id,
      quoteId: session.quote_id,
      userMessage: message,
      jobHints,
    };

    await query(
      `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'user', $2)`,
      [session_id, message]
    );

    if (userWantsBreakdown(message) && quotedItems.length) {
      const structuredBreakdowns = resolveLedgerBreakdowns(message, quotedItems);
      if (structuredBreakdowns.length) {
        const finalMessage = structuredBreakdowns
          .map((b) => `Cost breakdown — #${b.index} ${b.title}`)
          .join('\n');
        const payload = await buildChatPayload(getRow, session_id, session, finalMessage, structuredBreakdowns);
        return res.status(200).json(payload);
      }
    }

    const searchPlain = tool({
      description:
        'Search plain packaging catalog. Returns units_per_case (e.g. 4x50=200), case price tier1, unit_price_ex per sellable unit.',
      inputSchema: z.object({
        search: z.string().optional().describe('Product name search'),
        category: z.string().optional().describe('Category filter e.g. Corrugated Meal Box'),
      }),
      execute: async ({ search, category }) => {
        const products = await searchPlainProducts(getRows, { search, category, limit: 12 });
        return {
          products,
          lines: products.map(formatPlainProductForAi),
        };
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
        const shaped = mapPlainProductRow(product);
        const priced = pricePlainProduct(shaped, num_cases);
        const tier = shaped.caseTiers.find((t) => t.casesLabel === priced.tier_label) || shaped.caseTiers[0];
        const line = buildPlainLineItem({ product: shaped, numCases: num_cases, tier, unitPrice: priced.unit_price });
        return { priced, line };
      },
    });

    const calcCustom = tool({
      description:
        'Calculate printed product price. Pizza/bagasse/bags: plain box cost from DB + ink + labour. Foamex/correx: per-sqm from 240×120cm sheet + vinyl + labour. Banners: vinyl_banner.',
      inputSchema: z.object({
        family: z.string().describe('e.g. vinyl_banner, pizza_box_printed, foamex_boards, bagasse_meal_box_printed'),
        name: z.string().optional(),
        quantity: z.number().optional(),
        width_m: z.number().optional(),
        height_m: z.number().optional(),
        eyelets: z.number().optional(),
        thickness_mm: z.union([z.string(), z.number()]).optional(),
        piece_width_cm: z.number().optional(),
        piece_height_cm: z.number().optional(),
        paper_size: z.string().optional().describe('A1, A2, A3, A4'),
        pizza_size_inches: z.number().optional().describe('7, 9, 10, 12, 14, 16'),
        plain_product_id: z.string().optional().describe('Plain product id e.g. 120762 for 12" pizza box'),
        plain_search: z.string().optional(),
        price_per: z.enum(['unit', 'case']).optional(),
        num_cases: z.number().optional(),
        margin_percent: z.number().optional(),
        markup_percent: z.number().optional(),
        ink_per_unit: z.number().optional(),
        labour_rate: z.number().optional(),
        laminated: z.boolean().optional(),
      }),
      execute: async (args) => {
        const userText = [
          ...priorMessages.filter((m) => m.role === 'user').map((m) => m.content),
          ctx.userMessage,
        ].join(' ');
        const enriched = enrichPrintParams(
          {
            quantity: 1,
            eyelets: 8,
            document_type: documentType,
            purchase_vat_rate: purchaseVatRate,
            ...ctx.jobHints,
            ...args,
          },
          userText,
          ctx.jobHints
        );

        const out = await runCalcCustom(getRows, getRow, enriched, {
          document_type: documentType,
          purchase_vat_rate: purchaseVatRate,
          jobHints: ctx.jobHints,
        });
        if (out.error) return out;

        const { family, merged, result, line, entry, plainMaterial } = out;
        quotedItems = upsertQuotedItem(quotedItems, entry);
        quotedItems = quotedItems.filter(
          (it) =>
            !(
              it.status === 'pending' &&
              it.label?.toLowerCase().trim() === entry.label?.toLowerCase().trim()
            )
        );
        quotedItems = await saveQuotedItems(query, session_id, quotedItems);
        const saved = quotedItems.find((it) => it.id === entry.id);
        const breakdown_structured = {
          ...saved.breakdown_structured,
          id: saved.id,
          index: saved.index,
        };

        return {
          family,
          quoted_id: saved.id,
          quoted_index: saved.index,
          result,
          line,
          breakdown_text: formatBreakdownForFamily(family, result, merged),
          breakdown_structured,
          plain_product: plainMaterial?.product
            ? { id: plainMaterial.product.id, name: plainMaterial.product.name, unit_cost: plainMaterial.unitCost }
            : null,
        };
      },
    });

    const registerPendingItem = tool({
      description:
        'Register product awaiting user input — cost table shows inline form. Use when quantity/cases unknown or catalog product not found after searchPlain.',
      inputSchema: z.object({
        label: z.string(),
        needs: z
          .array(
            z.object({
              key: z.string(),
              label: z.string(),
              type: z.enum(['text', 'number']).optional(),
              placeholder: z.string().optional(),
            })
          )
          .min(1),
        partial_params: z.record(z.string(), z.any()).optional(),
        message: z.string().optional(),
      }),
      execute: async ({ label, needs, partial_params, message }) => {
        const entry = createPendingItem({ label, needs, partial_params, message });
        quotedItems = upsertPendingItem(quotedItems, entry);
        quotedItems = await saveQuotedItems(query, session_id, quotedItems);
        const saved = quotedItems.find((it) => it.id === entry.id);
        return { pending_id: saved.id, index: saved.index, label };
      },
    });

    const setInvoicePrices = tool({
      description:
        'Set invoice unit prices on quoted items. Use when user gives exact sell prices (e.g. "40 cents pizza, 25 cent bags").',
      inputSchema: z.object({
        prices: z
          .array(
            z.object({
              index: z.number().optional(),
              quoted_id: z.string().optional(),
              label_match: z.string().optional(),
              unit_price: z.number(),
            })
          )
          .min(1),
      }),
      execute: async ({ prices }) => {
        let updated = 0;
        for (const p of prices) {
          const match = quotedItems.find(
            (it) =>
              it.id === p.quoted_id ||
              it.index === p.index ||
              (p.label_match &&
                it.label?.toLowerCase().includes(p.label_match.toLowerCase()))
          );
          if (!match) continue;
          quotedItems = setQuotedInvoicePrice(quotedItems, {
            quoted_id: match.id,
            unit_price: p.unit_price,
          });
          updated += 1;
        }
        quotedItems = await saveQuotedItems(query, session_id, quotedItems);
        return { updated };
      },
    });

    const addManualQuoteLine = tool({
      description:
        'Manual line at user price when not in catalog. Creates cost-table row and optionally adds to invoice.',
      inputSchema: z.object({
        name: z.string(),
        quantity: z.number(),
        unit_price: z.number(),
        add_to_invoice: z.boolean().optional(),
      }),
      execute: async ({ name, quantity, unit_price, add_to_invoice }) => {
        const entry = createManualQuotedItem({ name, quantity, unit_price });
        quotedItems = [...quotedItems, entry];
        quotedItems = await saveQuotedItems(query, session_id, quotedItems);
        if (add_to_invoice) {
          const line = buildLineFromQuotedItem(entry, { unit_price, quantity });
          await mergeLinesIntoQuote(ctx.quoteId, [line]);
        }
        return { quoted_id: entry.id, name, unit_price };
      },
    });

    const listQuotedItems = tool({
      description:
        'List products already priced in this chat (session ledger). Use before adding to invoice when multiple items exist.',
      inputSchema: z.object({}),
      execute: async () => ({
        items: summarizeQuotedItems(quotedItems),
        count: quotedItems.length,
      }),
    });

    const showQuotedBreakdowns = tool({
      description:
        'Return full cost breakdown for items already priced in this session. REQUIRED when user asks for breakdown, cost details, or how the price was calculated — never describe breakdown from memory.',
      inputSchema: z.object({
        index: z.number().optional().describe('Quote ledger item # (e.g. 1 for #1)'),
        quoted_id: z.string().optional(),
      }),
      execute: async ({ index, quoted_id }) => {
        const breakdowns = getQuotedBreakdowns(quotedItems, { index, quoted_id });
        if (!breakdowns.length) {
          return {
            error: 'No priced items in this session — run calcCustom first',
            count: 0,
            breakdowns: [],
          };
        }
        return { count: breakdowns.length, breakdowns };
      },
    });

    const addToInvoice = tool({
      description:
        'Add selected quoted items to the invoice draft. Only call after user confirms which items and any margin/price overrides.',
      inputSchema: z.object({
        selections: z
          .array(
            z.object({
              quoted_id: z.string().optional(),
              index: z.number().optional(),
              quantity: z.number().optional(),
              margin_percent: z.number().optional(),
              markup_percent: z.number().optional(),
              unit_price: z.number().optional(),
            })
          )
          .min(1),
      }),
      execute: async ({ selections }) => {
        const lines = buildLinesFromSelections(quotedItems, selections);
        if (!lines.length) return { error: 'No matching quoted items — use listQuotedItems' };
        const updated = await mergeLinesIntoQuote(ctx.quoteId, lines);
        return { added: lines.length, items: updated.items, total: Number(updated.total) };
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
      description: 'Legacy: add line items directly. Prefer addToInvoice with quoted item selections.',
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

    const system = `You are PrintNPack admin quote assistant. Currency: EUR. Document type: ${documentType}.
${customerContext}
${PLAIN_CASE_QTY_GUIDE}
${PRICING_FAMILY_GUIDE}

PRINTED PACKAGING: plain unit cost = tier1 case price ÷ units_per_case. Then + ink + labour + markup.
- Corrugated clamshell 120092: 4×50=200/case, €38.47/case → €0.192/unit.
- Always searchPlain or plain_product_id — never guess unit counts.

FOAMEX / CORREX: 240×120cm sheet → per sqm → piece area. A1 = 59.4×84.1cm.

PRICING: margin_percent, markup_percent, price_per ("case"|"unit").
DOCUMENT TYPE: VAT = ex-VAT materials + 23% on invoice. Cash = purchase VAT on goods.

SESSION WORKFLOW (critical — UI has a Cost Table, not chat breakdowns):
- Multi-product request → calcCustom for EACH product in ONE turn when possible.
- Missing quantity/cases or unknown catalog product → registerPendingItem with specific form fields (never ask in chat prose).
- Chat replies: max 2 sentences. Cost table shows costs; user expands Breakdown per row.
- User gives invoice prices ("40c pizza", "25 cent bags") → setInvoicePrices. Unknown product at fixed price → addManualQuoteLine.
- addToInvoice ONLY when user explicitly says add to quote/invoice.
- "Need invoice" / "make invoice" / "add all" → addToInvoice for all priced items using invoice_unit_price if set else unit_sell.

BREAKDOWN: User clicks Breakdown in cost table — do NOT paste breakdowns in chat unless explicitly asked in chat.

RULES:
1. ALWAYS use calcCustom for printed products — never invent prices.
2. Multi-product requests: run calcCustom for EACH product in the same turn when possible.
3. "Per case" → price_per: "case" (bags, boxes). "12 inch pizza box" → pizza_size_inches: 12.
4. Foamex/correx: thickness_mm, paper_size (A1) or piece dimensions, quantity.
5. Do NOT call upsertDraft unless user explicitly wants a raw line without going through the ledger.`;

    const chatMessages = [
      ...priorMessages.slice(-MAX_CHAT_HISTORY).map((m) => ({ role: m.role, content: m.content })),
      { role: 'user', content: message },
    ];

    const { text, steps } = await generateText({
      model: MODEL,
      system,
      messages: chatMessages,
      tools: {
        searchPlain,
        pricePlain,
        calcCustom,
        registerPendingItem,
        setInvoicePrices,
        addManualQuoteLine,
        listQuotedItems,
        showQuotedBreakdowns,
        addToInvoice,
        savedPrices,
        applySavedPrices,
        upsertDraft,
      },
      stopWhen: stepCountIs(MAX_AI_STEPS),
    });

    let structuredBreakdowns = collectStructuredBreakdownsFromSteps(steps);

    if (!structuredBreakdowns.length && userWantsBreakdown(message) && quotedItems.length) {
      structuredBreakdowns = resolveLedgerBreakdowns(message, quotedItems);
    }

    const breakdownBlocks = structuredBreakdowns.length ? [] : collectBreakdownsFromSteps(steps);
    let finalMessage = text?.trim() || '';

    if (
      userWantsBreakdown(message) &&
      structuredBreakdowns.length &&
      /typically includes|material cost|labour cost for production/i.test(finalMessage)
    ) {
      finalMessage = structuredBreakdowns
        .map((b) => `Cost breakdown — #${b.index} ${b.title}`)
        .join('\n');
    }

    if (!finalMessage && structuredBreakdowns.length) {
      finalMessage = structuredBreakdowns
        .map(
          (b) =>
            `#${b.index} ${b.title}: ${b.summary?.find((s) => s.label?.includes('Sell'))?.value || b.totals?.unitSell}`
        )
        .join('\n');
    }

    if (
      userWantsBreakdown(message) &&
      !structuredBreakdowns.length &&
      !quotedItems.length &&
      (!finalMessage || /typically includes|material cost|labour cost for production/i.test(finalMessage))
    ) {
      finalMessage =
        'Nothing priced in this session yet — ask me to price the product first (e.g. "price 5 vinyl banners 2m x 1m"), then ask for the breakdown again.';
    }

    if (breakdownBlocks.length && !structuredBreakdowns.length) {
      const block = breakdownBlocks.join('\n\n');
      finalMessage = finalMessage.includes('PRICE BREAKDOWN')
        ? finalMessage
        : finalMessage
          ? `${finalMessage}\n\n${block}`
          : block;
    }

    const payload = await buildChatPayload(getRow, session_id, session, finalMessage, structuredBreakdowns);
    return res.status(200).json(payload);
  } catch (e) {
    console.error('Chat error:', e);
    return res.status(500).json({ error: e.message || 'Chat failed' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
