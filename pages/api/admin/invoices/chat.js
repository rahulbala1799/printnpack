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
  buildPrintedLineItem,
  calcQuoteTotals,
  recalcLineTotal,
} from '../../../../lib/invoices/line-item.js';
import { resolvePricingFamily, PRICING_FAMILY_GUIDE, PLAIN_PRINTED_FAMILIES } from '../../../../lib/invoices/pricing-families.js';
import { formatBreakdownForFamily, collectBreakdownsFromSteps } from '../../../../lib/pricing/breakdown-format.js';
import { resolvePlainMaterial } from '../../../../lib/pricing/plain-material.js';
import { PLAIN_CASE_QTY_GUIDE, formatPlainProductForAi } from '../../../../lib/invoices/plain-packaging-ai-context.js';
import {
  loadQuotedItems,
  saveQuotedItems,
  createQuotedItem,
  upsertQuotedItem,
  summarizeQuotedItems,
  buildLinesFromSelections,
  collectStructuredBreakdownsFromSteps,
  getQuotedBreakdowns,
  userWantsBreakdown,
  parseQuotedIndexFromText,
} from '../../../../lib/invoices/quoted-items.js';
import {
  parsePaperSizeFromText,
  parseThicknessMm,
  parsePizzaSizeInches,
} from '../../../../lib/pricing/paper-sizes.js';

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
  if (/per\s+case/i.test(String(text || ''))) return { price_per: 'case', num_cases: 1 };
  return {};
}

function applyPerCasePricing(merged, plainMaterial, result, line) {
  const unitsPerCase = plainMaterial?.unitsPerCase ?? plainMaterial?.qtyPerCase;
  if (merged.price_per !== 'case' || !unitsPerCase) {
    return { merged, result, line };
  }
  const numCases = merged.num_cases || 1;
  const caseLabel = plainMaterial?.caseLabel || `${unitsPerCase} units/case`;
  return {
    merged,
    result: {
      ...result,
      unit_price: result.line_total,
      line_total: Math.round(result.line_total * numCases * 100) / 100,
    },
    line: {
      ...line,
      quantity: numCases,
      unit_price: Math.round(result.line_total * 100) / 100,
      unit_label: 'per case',
      line_total: Math.round(result.line_total * numCases * 100) / 100,
      size_spec: line.size_spec ? `${line.size_spec} · ${caseLabel}` : caseLabel,
    },
  };
}

function buildPricingParams(family, merged, plainMaterial) {
  return {
    family,
    width_m: merged.width_m,
    height_m: merged.height_m,
    quantity: merged.quantity || 1,
    eyelets: merged.eyelets,
    name: merged.name,
    thickness_mm: merged.thickness_mm,
    piece_width_cm: merged.piece_width_cm,
    piece_height_cm: merged.piece_height_cm,
    paper_size: merged.paper_size,
    size_spec: merged.size_spec,
    laminated: merged.laminated,
    pizza_size_inches: merged.pizza_size_inches,
    plain_product_id: plainMaterial?.product?.id || merged.plain_product_id,
    margin_percent: merged.margin_percent,
    markup_percent: merged.markup_percent,
    ink_per_unit: merged.ink_per_unit,
    labour_rate: merged.labour_rate,
  };
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
        const family = resolvePricingFamily(args);
        const userText = [
          ...priorMessages.filter((m) => m.role === 'user').map((m) => m.content),
          ctx.userMessage,
        ].join(' ');
        const merged = enrichPrintParams(
          {
            quantity: 1,
            eyelets: 8,
            document_type: documentType,
            purchase_vat_rate: purchaseVatRate,
            ...ctx.jobHints,
            ...args,
            family,
          },
          userText,
          ctx.jobHints
        );

        const rules = await getRulesForFamily(getRows, family);
        const globalRules = await getRulesForFamily(getRows, 'global');

        let plainMaterial = null;
        if (PLAIN_PRINTED_FAMILIES.has(family)) {
          plainMaterial = await resolvePlainMaterial(getRows, getRow, family, merged);
          if (!plainMaterial?.unitCost && family === 'pizza_box_printed') {
            return {
              error: 'Could not find plain pizza box in catalog — specify pizza_size_inches (e.g. 12) or plain_product_id (e.g. 120762)',
              family,
            };
          }
          if (merged.price_per === 'case' && plainMaterial?.unitsPerCase) {
            merged.quantity = plainMaterial.unitsPerCase;
          }
        }

        let result = calculateCustomProduct(family, merged, rules, plainMaterial, globalRules);
        const pricingParams = buildPricingParams(family, merged, plainMaterial);
        let line = buildPrintedLineItem({
          name: merged.name || result.suggested_name,
          category: result.category,
          quantity: merged.num_cases || merged.quantity || 1,
          size_spec: result.size_spec,
          unit_price: result.unit_price,
          pricing_family: family,
          pricing_breakdown: result.breakdown,
          pricing_params: pricingParams,
        });

        ({ result, line } = applyPerCasePricing(merged, plainMaterial, result, line));

        const entry = createQuotedItem({
          family,
          merged,
          result,
          line,
          plainProduct: plainMaterial?.product
            ? { id: plainMaterial.product.id, name: plainMaterial.product.name }
            : null,
        });
        quotedItems = upsertQuotedItem(quotedItems, entry);
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

SESSION WORKFLOW (important):
- When user asks prices for multiple products, call calcCustom once per product. Each result is stored in the session ledger (quoted items #1, #2, …).
- Do NOT add to invoice automatically after pricing.
- Keep replies concise — breakdown cards appear in the UI. Summarise sell prices in a short table.
- When user asks to add/insert to invoice: if 2+ quoted items, call listQuotedItems then ask which items and what margin % or sell price (unless they specified clearly). Then call addToInvoice with selections.
- Example: "add pizza and foamex at 45% margin" → addToInvoice with margin_percent: 45 for those quoted_ids.

BREAKDOWN REQUESTS (critical):
- "breakdown", "cost breakdown", "show details", "how did you calculate" → MUST call showQuotedBreakdowns (or calcCustom if not priced yet).
- NEVER describe materials/labour/markup in prose from memory. The UI renders structured breakdown cards from tool output only.
- If one item in ledger, showQuotedBreakdowns with no args. If user says "#2" or "item 2", pass index: 2.

RULES:
1. ALWAYS use calcCustom for printed products — never invent prices.
2. Multi-product requests: run calcCustom for EACH product in the same turn when possible.
3. "Per case" → price_per: "case" (bags, boxes). "12 inch pizza box" → pizza_size_inches: 12.
4. Foamex/correx: thickness_mm, paper_size (A1) or piece dimensions, quantity.
5. Do NOT call upsertDraft unless user explicitly wants a raw line without going through the ledger.`;

    const chatMessages = [
      ...priorMessages.map((m) => ({ role: m.role, content: m.content })),
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
        listQuotedItems,
        showQuotedBreakdowns,
        addToInvoice,
        savedPrices,
        applySavedPrices,
        upsertDraft,
      },
      stopWhen: stepCountIs(15),
    });

    let structuredBreakdowns = collectStructuredBreakdownsFromSteps(steps);

    if (!structuredBreakdowns.length && userWantsBreakdown(message) && quotedItems.length) {
      const index = parseQuotedIndexFromText(message);
      structuredBreakdowns = getQuotedBreakdowns(quotedItems, { index: index ?? undefined });
      if (!structuredBreakdowns.length && index != null) {
        structuredBreakdowns = getQuotedBreakdowns(quotedItems);
      }
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

    const metadata = {
      breakdowns: structuredBreakdowns.map((b) => ({
        ...b,
        unitSell: b.totals?.unitSell,
      })),
    };

    try {
      await query(
        `INSERT INTO invoice_session_messages (session_id, role, content, metadata) VALUES ($1, 'assistant', $2, $3)`,
        [session_id, finalMessage, JSON.stringify(metadata)]
      );
    } catch {
      await query(
        `INSERT INTO invoice_session_messages (session_id, role, content) VALUES ($1, 'assistant', $2)`,
        [session_id, finalMessage]
      );
    }

    quotedItems = await loadQuotedItems(getRow, session_id);
    const freshQuote = await getRow(`SELECT * FROM quotes WHERE id = $1`, [session.quote_id]);
    return res.status(200).json({
      message: finalMessage,
      quote: freshQuote,
      quoted_items: quotedItems,
      breakdowns: metadata.breakdowns,
      metadata,
    });
  } catch (e) {
    console.error('Chat error:', e);
    return res.status(500).json({ error: e.message || 'Chat failed' });
  }
}

export default withAuth(handler, { roles: ['admin'] });
