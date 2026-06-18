/**
 * Structured price breakdown for rich UI (chat cards + quote preview).
 */

import { isCashDocument, sellPriceLabel } from './cost-mode.js';

function eur(n) {
  return `€${Number(n ?? 0).toFixed(2)}`;
}

function row(label, value, detail = null) {
  return { label, value, detail };
}

function sumRow(label, value, emphasis = false) {
  return { label, value, emphasis };
}

function section(title, rows) {
  return { title, rows: rows.filter(Boolean) };
}

export function structuredBreakdownForFamily(family, result, params = {}) {
  const b = result.breakdown || {};
  const docType = b.document_type || params.document_type || 'vat';
  const qty = Number(params.quantity) || 1;
  const base = {
    title: result.suggested_name || family,
    subtitle: [result.size_spec, qty > 1 ? `× ${qty}` : null].filter(Boolean).join(' · '),
    badge: isCashDocument(docType) ? 'Cash' : 'VAT invoice',
    cost_mode: b.cost_mode || null,
    family,
    sections: [],
    summary: [],
    totals: {
      qty,
      unitLabel: params.price_per === 'case' ? 'per case' : 'per unit',
      unitCost: b.unitCost ?? null,
      unitSell: result.unit_price,
      lineTotal: result.line_total,
      sellLabel: b.sell_price_label || sellPriceLabel(docType),
      pricingMode: b.pricing_mode || null,
    },
  };

  if (family === 'vinyl_banner') {
    base.sections = [
      section('Materials', [
        row('Vinyl', eur(b.materialVinyl), `${b.vinylSqmUsed} sqm`),
        row('CMYK ink', eur(b.inkCost), `${b.mlUsed} ml`),
        row('Eyelets', eur(b.eyeletCost)),
        row('Materials total', eur(b.materialsCost), `${eur(b.materialsExVat)} ex-VAT`),
      ]),
      section('Labour', [
        row('Printing', eur(b.printLabour), `${b.printMins} min`),
        row('Finishing', eur(b.finishLabour), `${b.finishMins} min`),
        row('Labour total', eur(b.labour)),
      ]),
    ];
    base.summary = [
      sumRow('Cost / unit', eur(b.unitCost)),
      sumRow('Markup', eur(b.markupAmount)),
      sumRow('Sell / unit', eur(result.unit_price), true),
      qty > 1 ? sumRow('Order total', eur(result.line_total), true) : null,
    ].filter(Boolean);
    return base;
  }

  if (family === 'pizza_box_printed') {
    base.sections = [
      section('Plain box (cost list)', [
        b.plain_product_name
          ? row('Product', b.plain_product_name, `#${b.plain_product_id}`)
          : row('Product', 'Not matched', 'Specify size or product id'),
        b.plain_tier ? row('Tier', b.plain_tier, `${b.plain_qty_per_case || 100}/case`) : null,
        row('Plain box', eur(b.plain_unit_cost_ex)),
        row('CMYK ink', eur(b.inkPerBoxEx)),
        row('Materials / box', eur(b.materials)),
      ]),
      section('Labour', [
        row('Rate', `${eur(b.labourRate)}/hr`),
        row('Speed', `${b.boxesPerHour} boxes/hr`),
        row('Labour / box', eur(b.labourPerBox)),
      ]),
    ];
    base.summary = [
      sumRow('Cost / box', eur(b.unitCost)),
      sumRow('Pricing', b.pricing_mode || '30% markup'),
      sumRow('Sell / box', eur(result.unit_price), true),
      qty > 1 ? sumRow('Order total', eur(result.line_total), true) : null,
    ].filter(Boolean);
    return base;
  }

  if (
    family === 'bagasse_meal_box_printed' ||
    family === 'burger_boxes_printed' ||
    family === 'paper_bags_printed' ||
    family === 'sos_grab_bags_printed'
  ) {
    base.sections = [
      section('Plain packaging', [
        b.plain_product_name
          ? row('Product', b.plain_product_name, `#${b.plain_product_id}`)
          : row('Product', 'Not matched'),
        row('Plain unit', eur(b.plain_unit_cost_ex)),
        row('Ink', eur(b.inkPerUnitEx)),
        row('Materials / unit', eur(b.materials)),
      ]),
      section('Labour', [
        row('Speed', `${b.unitsPerHour}/hr · ${b.operators} op`),
        row('Labour / unit', eur(b.labourPerUnit)),
      ]),
    ];
    base.summary = [
      sumRow('Cost', eur(b.unitCost)),
      sumRow('Pricing', b.pricing_mode || '30% markup'),
      sumRow(params.price_per === 'case' ? 'Sell / case' : 'Sell / unit', eur(result.unit_price), true),
      qty > 1 ? sumRow('Line total', eur(result.line_total), true) : null,
    ].filter(Boolean);
    return base;
  }

  if (family === 'foamex_boards' || family === 'correx_boards') {
    base.sections = [
      section('Board material', [
        row('Master sheet', `${b.sheet_size_cm} cm`, `${b.sheet_sqm} sqm`),
        row('Sheet price', eur(b.board_sheet_cost_ex), `${params.thickness_mm || ''}mm`),
        row('Board / sqm', eur(b.board_cost_per_sqm_ex)),
        row('Piece area', `${b.piece_sqm} sqm`, eur(b.board_cost_per_piece_ex)),
      ]),
      section('Vinyl & labour', [
        row('Vinyl / sqm', eur(b.vinyl_cost_per_sqm_ex)),
        row('Vinyl / piece', eur(b.vinyl_cost_per_piece_ex)),
        b.laminate_cost_per_piece_ex ? row('Laminate / piece', eur(b.laminate_cost_per_piece_ex)) : null,
        row('Materials / piece', eur(b.materials_per_piece)),
        row('Labour / piece', eur(b.labourPerPiece), `${b.printMinsPerPiece}+${b.applyMinsPerPiece} min`),
      ]),
    ];
    base.summary = [
      sumRow('Cost / piece', eur(b.unitCost)),
      sumRow('Pricing', b.pricing_mode || '30% markup'),
      sumRow('Sell / piece', eur(result.unit_price), true),
      qty > 1 ? sumRow('Order total', eur(result.line_total), true) : null,
    ].filter(Boolean);
    return base;
  }

  base.sections = [
    section('Costing', [
      row('Cost', eur(b.unitCost ?? b.totalCost)),
      row('Sell', eur(result.unit_price)),
    ]),
  ];
  base.summary = [sumRow('Sell', eur(result.unit_price), true)];
  return base;
}
