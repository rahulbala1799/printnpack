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
import { resolvePricingFamily, PRICING_FAMILY_GUIDE, PLAIN_PRINTED_FAMILIES } from '../../../../lib/invoices/pricing-families.js';
import { formatBreakdownForFamily, collectBreakdownsFromSteps } from '../../../../lib/pricing/breakdown-format.js';
import { resolvePlainMaterial } from '../../../../lib/pricing/plain-material.js';
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
          plainMaterial = await resolvePlainMaterial(getRows, family, merged);
          if (!plainMaterial?.unitCost && family === 'pizza_box_printed') {
            return {
              error: 'Could not find plain pizza box in catalog — specify pizza_size_inches (e.g. 12) or plain_product_id (e.g. 120762)',
              family,
            };
          }
        }

        const result = calculateCustomProduct(family, merged, rules, plainMaterial, globalRules);
        const breakdown_text = formatBreakdownForFamily(family, result, merged);
        const pricingParams = buildPricingParams(family, merged, plainMaterial);
        const line = buildPrintedLineItem({
          name: merged.name || result.suggested_name,
          category: result.category,
          quantity: merged.quantity || 1,
          size_spec: result.size_spec,
          unit_price: result.unit_price,
          pricing_family: family,
          pricing_breakdown: result.breakdown,
          pricing_params: pricingParams,
        });
        return {
          family,
          result,
          line,
          breakdown_text,
          plain_product: plainMaterial?.product
            ? { id: plainMaterial.product.id, name: plainMaterial.product.name, unit_cost: plainMaterial.unitCost }
            : null,
        };
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

    const system = `You are PrintNPack admin quote assistant. Currency: EUR. Document type: ${documentType}.
${customerContext}
${PRICING_FAMILY_GUIDE}

PRINTED PACKAGING COSTING:
- Material = plain packaging unit cost from plain_products (searchPlain / plain_product_id) + ink + labour.
- Pizza boxes: match by size inches (12" → product 120762). Default ink €0.045/box unless admin overrides.
- Bagasse meal boxes / burger boxes: plain bagasse product from catalog + ink + labour.
- Bags: plain bag from catalog or pricing rules + ink + labour.

FOAMEX / CORREX:
- Full master sheet 240cm × 120cm (2.88 sqm). Sheet price by thickness from rules (foamex 5mm = €28 ex-VAT).
- Per-piece board cost = (sheet_price / sheet_sqm) × piece_sqm. Vinyl same way per sqm.
- A1 = 59.4×84.1cm. Labour per piece from print + apply minutes.

PRICING: default 30% markup. User may ask margin_percent (45% margin) or markup_percent (80% markup) — pass to calcCustom.

DOCUMENT TYPE: VAT invoice = materials ex-VAT, sell ex-VAT + 23% on invoice. Cash = materials include 23% purchase VAT, sell is cash total.

RULES:
1. ALWAYS use calcCustom — never invent prices.
2. Printed pizza/bagasse/bags: calcCustom resolves plain product automatically when size given.
3. Foamex/correx: pass thickness_mm, paper_size or piece dimensions, quantity.
4. Include full breakdown_text in every price answer.
5. After pricing, call upsertDraft with the line.`;

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
