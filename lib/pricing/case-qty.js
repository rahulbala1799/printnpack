/**
 * Parse plain packaging "Qty / case" labels into unit counts.
 * Examples: "4x50" → 200 units, "100" → 100, "5 x 50" → 250, "6x200ml" → 6 units.
 */

export function parseCaseQty(raw) {
  const text = String(raw ?? '').trim().toLowerCase();
  if (!text) {
    return {
      raw: raw ?? '',
      packs: null,
      perPack: null,
      unitsPerCase: 1,
      displayLabel: '1 unit/case',
      parseNote: 'empty — default 1',
    };
  }

  const multi = text.match(/^(\d+)\s*x\s*(\d+)\s*(?:ml|s|pcs?)?$/i);
  if (multi) {
    const packs = parseInt(multi[1], 10);
    const perPack = parseInt(multi[2], 10);
    const units = packs * perPack;
    return {
      raw: String(raw).trim(),
      packs,
      perPack,
      unitsPerCase: units,
      displayLabel: `${packs}×${perPack} = ${units} units/case`,
      parseNote: null,
    };
  }

  const single = text.match(/^(\d+)\s*(?:s|'s)?$/);
  if (single) {
    const units = parseInt(single[1], 10);
    return {
      raw: String(raw).trim(),
      packs: null,
      perPack: null,
      unitsPerCase: units,
      displayLabel: `${units} units/case`,
      parseNote: null,
    };
  }

  const firstNum = text.match(/(\d+)/);
  const units = firstNum ? parseInt(firstNum[1], 10) : 1;
  return {
    raw: String(raw).trim(),
    packs: null,
    perPack: null,
    unitsPerCase: units,
    displayLabel: `${units} units/case (parsed)`,
    parseNote: 'fallback parse',
  };
}

export function caseUnitPrice(pricePerCase, unitsPerCase) {
  const u = Number(unitsPerCase) || 1;
  const p = Number(pricePerCase) || 0;
  return Math.round((p / u) * 100000) / 100000;
}

export function attachCasePricing(product, { numCases = 1 } = {}) {
  const tiers = product.caseTiers || product.case_tiers || [];
  const tier = tiers[0];
  const pricePerCase = tier ? Number(tier.pricePerCase) : 0;
  const parsed =
    product.case_pack_detail ||
    product.casePackDetail ||
    parseCaseQty(product.qtyPerCase ?? product.qty_per_case);
  const unitsPerCase = product.units_per_case ?? product.unitsPerCase ?? parsed.unitsPerCase;

  return {
    ...parsed,
    unitsPerCase,
    pricePerCase,
    tierLabel: tier?.casesLabel || null,
    unitPriceEx: caseUnitPrice(pricePerCase, unitsPerCase),
    numCases,
  };
}
