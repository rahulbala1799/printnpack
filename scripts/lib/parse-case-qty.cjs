/** CommonJS copy for Node scripts — keep in sync with lib/pricing/case-qty.js */

function parseCaseQty(raw) {
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

module.exports = { parseCaseQty };
