/**
 * Custom printed product pricing — reads pricing_rules from DB.
 */

import {
  goodsCostExToActual,
  costModeLabel,
  sellPriceLabel,
  DEFAULT_PURCHASE_VAT_RATE,
  isCashDocument,
} from './cost-mode.js';

const DEFAULT_MARKUP = 1.3;
const LABOUR_HOURLY = 12;

function labourCost(minutes, operators = 1, hourly = LABOUR_HOURLY) {
  return Math.round((minutes / 60) * hourly * operators * 100) / 100;
}

function withMarkup(cost, markup = DEFAULT_MARKUP) {
  return Math.round(cost * markup * 100) / 100;
}

function sqmFromDims(widthM, heightM) {
  return widthM * heightM;
}

function vinylSqmCost(rollCost, rollLengthM, rollWidthM, usedSqm, wastageCm = 10) {
  const rollSqm = rollLengthM * rollWidthM;
  const wastageSqm = (wastageCm / 100) * rollWidthM;
  const costPerSqm = rollCost / rollSqm;
  return (usedSqm + wastageSqm) * costPerSqm;
}

export async function getRulesForFamily(getRows, family) {
  return getRows(
    `SELECT rule_key, label, rule_data FROM pricing_rules
     WHERE family = $1 AND is_active = true ORDER BY sort_order`,
    [family]
  );
}

export function rulesToMap(rows) {
  const map = {};
  for (const r of rows) map[r.rule_key] = r.rule_data;
  return map;
}

export function calculateVinylBanner(params, rules = {}, globalRules = {}) {
  const widthM = Number(params.width_m) || 1;
  const heightM = Number(params.height_m) || 1;
  const qty = Number(params.quantity) || 1;
  const eyelets = Number(params.eyelets) || rules.eyelets?.default_count || 8;
  const sqm = sqmFromDims(widthM, heightM);
  const documentType = params.document_type || 'vat';
  const purchaseVatRate = params.purchase_vat_rate ?? DEFAULT_PURCHASE_VAT_RATE;

  const labourRate = globalRules.labour?.hourly_eur ?? LABOUR_HOURLY;
  const markupMult = globalRules.markup?.multiplier ?? params.markup ?? DEFAULT_MARKUP;

  const vinylRoll = rules.vinyl_roll?.cost ?? 80;
  const vinylLength = rules.vinyl_roll?.length_m ?? 50;
  const vinylWidth = rules.vinyl_roll?.width_m ?? 1;
  const inkCartridge = rules.ink?.cost ?? 70;
  const inkMlPerCartridge = rules.ink?.ml_per_cartridge ?? 440;
  const eyeletCostPer500 = rules.eyelets?.cost_per_500 ?? 19;

  const mlPer2sqm = rules.ink?.ml_per_2sqm ?? 13;
  const mlUsed = Math.round((mlPer2sqm / 2) * sqm * 10) / 10;

  const wastageCm = rules.vinyl_roll?.wastage_cm ?? 10;
  const vinylSqmUsed = Math.round((sqm + (wastageCm / 100) * vinylWidth) * 100) / 100;
  const rollSqm = vinylLength * vinylWidth;
  const vinylCostPerSqmEx = Math.round((vinylRoll / rollSqm) * 100) / 100;
  const materialVinylEx = Math.round(vinylSqmUsed * vinylCostPerSqmEx * 100) / 100;
  const inkCostEx = Math.round((mlUsed / inkMlPerCartridge) * inkCartridge * 100) / 100;
  const eyeletUnitCostEx = Math.round((eyeletCostPer500 / 500) * 1000) / 1000;
  const eyeletCostEx = Math.round(eyelets * eyeletUnitCostEx * 100) / 100;

  const materialVinyl = goodsCostExToActual(materialVinylEx, documentType, purchaseVatRate);
  const inkCost = goodsCostExToActual(inkCostEx, documentType, purchaseVatRate);
  const eyeletCost = goodsCostExToActual(eyeletCostEx, documentType, purchaseVatRate);
  const materialsExVat = Math.round((materialVinylEx + inkCostEx + eyeletCostEx) * 100) / 100;
  const materialsCost = Math.round((materialVinyl + inkCost + eyeletCost) * 100) / 100;
  const materialsVatAmount = Math.round((materialsCost - materialsExVat) * 100) / 100;

  const printMetres = Math.max(widthM, heightM);
  const printSpeedMhr = rules.print?.metres_per_hour ?? 10;
  const printMins = Math.round((printMetres / printSpeedMhr) * 60 * 10) / 10;
  const finishMinsPer2m = rules.finish?.mins_per_2m ?? 20;
  const finishMins = Math.round((finishMinsPer2m / 2) * printMetres * 10) / 10;

  const printLabour = labourCost(printMins, 1, labourRate);
  const finishLabour = labourCost(finishMins, 1, labourRate);
  const labour = Math.round((printLabour + finishLabour) * 100) / 100;

  const unitCost = Math.round((materialsCost + labour) * 100) / 100;
  let unitSell = withMarkup(unitCost, markupMult);
  const markupAmount = Math.round((unitSell - unitCost) * 100) / 100;

  const minimumSell = rules.minimum?.sell_eur ?? null;
  let minimumApplied = false;
  if (minimumSell != null && unitSell < minimumSell) {
    unitSell = minimumSell;
    minimumApplied = true;
  }

  return {
    category: 'Vinyl',
    pricing_family: 'vinyl_banner',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: {
      document_type: documentType,
      cost_mode: costModeLabel(documentType),
      sqm,
      vinylSqmUsed,
      vinylCostPerSqm: isCashDocument(documentType) ? goodsCostExToActual(vinylCostPerSqmEx, documentType, purchaseVatRate) : vinylCostPerSqmEx,
      vinylCostPerSqmEx,
      vinylRollNote: `€${vinylRoll} ex-VAT roll ${vinylLength}m × ${vinylWidth}m`,
      materialVinylEx,
      materialVinyl,
      mlUsed,
      inkNote: `${mlPer2sqm}ml per 2 sqm, €${inkCartridge} ex-VAT / ${inkMlPerCartridge}ml`,
      inkCostEx,
      inkCost,
      eyeletUnitCostEx,
      eyeletUnitCost: goodsCostExToActual(eyeletUnitCostEx, documentType, purchaseVatRate),
      eyeletCostEx,
      eyeletCost,
      materialsExVat,
      materialsCost,
      materialsVatAmount,
      printMetres,
      printSpeedMhr,
      printMins,
      printLabour,
      finishMins,
      finishLabour,
      labour,
      labourRate,
      unitCost,
      markup: markupMult,
      markupAmount,
      minimumSell,
      minimumApplied,
      sell_price_label: sellPriceLabel(documentType),
    },
    size_spec: `${widthM}m × ${heightM}m`,
    suggested_name: params.name || 'PVC vinyl banner',
  };
}

export function calculateRollUp(params, rules = {}) {
  const qty = Number(params.quantity) || 1;
  const documentType = params.document_type || 'vat';
  const purchaseVatRate = params.purchase_vat_rate ?? DEFAULT_PURCHASE_VAT_RATE;
  const cassetteRoll = rules.cassette_roll?.cost ?? 130;
  const cassetteLength = rules.cassette_roll?.length_m ?? 30;
  const usePerUnit = rules.cassette_roll?.use_m_per_unit ?? 2;
  const hardwareEx = rules.hardware?.cost ?? 21;
  const materialPerUnitEx = (usePerUnit / cassetteLength) * cassetteRoll;
  const printCostEx = params.print_cost ?? 15;
  const materialPerUnit = goodsCostExToActual(materialPerUnitEx, documentType, purchaseVatRate);
  const hardware = goodsCostExToActual(hardwareEx, documentType, purchaseVatRate);
  const printCost = goodsCostExToActual(printCostEx, documentType, purchaseVatRate);
  const unitCost = Math.round((materialPerUnit + hardware + printCost) * 100) / 100;
  const unitSell = withMarkup(unitCost, params.markup ?? DEFAULT_MARKUP);

  return {
    category: 'Roll Up',
    pricing_family: 'roll_up_banner',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: {
      document_type: documentType,
      cost_mode: costModeLabel(documentType),
      materialPerUnitEx,
      materialPerUnit,
      hardwareEx,
      hardware,
      printCostEx,
      printCost,
      unitCost,
      sell_price_label: sellPriceLabel(documentType),
    },
    size_spec: params.size_spec || '2m × 85cm',
    suggested_name: params.name || 'Roll Up Banner',
  };
}

export function calculatePrintedPizzaBox(params, rules = {}, plainUnitCost = 0) {
  const qty = Number(params.quantity) || 500;
  const documentType = params.document_type || 'vat';
  const purchaseVatRate = params.purchase_vat_rate ?? DEFAULT_PURCHASE_VAT_RATE;
  const inkPerBoxEx = rules.ink?.cost_per_unit ?? 0.045;
  const boxesPerHour = rules.print_speed?.per_hour ?? 1000;
  const operators = rules.print_speed?.operators ?? 1;
  const labourPerBox = (LABOUR_HOURLY * operators) / boxesPerHour;
  const materialsEx = plainUnitCost + inkPerBoxEx;
  const materials = goodsCostExToActual(materialsEx, documentType, purchaseVatRate);
  const unitCost = Math.round((materials + labourPerBox) * 100) / 100;
  const unitSell = withMarkup(unitCost, params.markup ?? DEFAULT_MARKUP);

  return {
    category: 'Pizza Box',
    pricing_family: 'pizza_box_printed',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: {
      document_type: documentType,
      cost_mode: costModeLabel(documentType),
      plainUnitCost,
      inkPerBoxEx,
      materialsEx,
      materials,
      labourPerBox,
      unitCost,
      sell_price_label: sellPriceLabel(documentType),
    },
    size_spec: params.size_spec || null,
    suggested_name: params.name || 'Printed pizza box',
  };
}

export function calculateCorrexFoamex(params, rules = {}, boardFamily = 'correx') {
  const thickness = String(params.thickness_mm || '3');
  const sheetW = Number(params.sheet_width_cm) || 240;
  const sheetH = Number(params.sheet_height_cm) || 120;
  const pieceW = Number(params.piece_width_cm) || 40;
  const pieceH = Number(params.piece_height_cm) || 60;
  const qty = Number(params.quantity) || 1;
  const laminated = Boolean(params.laminated);
  const documentType = params.document_type || 'vat';
  const purchaseVatRate = params.purchase_vat_rate ?? DEFAULT_PURCHASE_VAT_RATE;

  const boardPrices = rules.board_prices || { '2': 13, '3': 15, '5': 19 };
  if (boardFamily === 'foamex') {
    Object.assign(boardPrices, rules.board_prices || { '2': 18, '3': 22, '5': 28 });
  }
  const boardCostEx = boardPrices[thickness] ?? boardPrices['3'];

  const fitW = Math.floor(sheetW / pieceW);
  const fitH = Math.floor(sheetH / pieceH);
  const perSheet = Math.max(1, fitW * fitH);
  const sheetsNeeded = Math.ceil(qty / perSheet);

  const vinylRoll = rules.vinyl_roll?.cost ?? 90;
  const vinylSqm = (sheetW / 100) * (sheetH / 100) * sheetsNeeded;
  const vinylCostEx = vinylSqmCost(vinylRoll, 50, 1.3, vinylSqm);
  const laminateCostEx = laminated ? vinylSqmCost(rules.laminate_roll?.cost ?? 90, 50, 1.3, vinylSqm) : 0;
  const boardCostTotalEx = boardCostEx * sheetsNeeded;
  const materialsEx = boardCostTotalEx + vinylCostEx + laminateCostEx;
  const materials = goodsCostExToActual(materialsEx, documentType, purchaseVatRate);

  const printMins = rules.print?.mins_per_sheet ?? 18;
  const lamMins = laminated ? (rules.laminate?.mins ?? 20) : 0;
  const applyMins = rules.apply?.mins ?? 20;
  const labour = labourCost((printMins + lamMins + applyMins) * sheetsNeeded, 1);

  const totalCost = Math.round((materials + labour) * 100) / 100;
  const unitSell = withMarkup(totalCost / qty, params.markup ?? DEFAULT_MARKUP);

  return {
    category: boardFamily === 'foamex' ? 'Foamex' : 'Correx',
    pricing_family: boardFamily === 'foamex' ? 'foamex_boards' : 'correx_boards',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: {
      document_type: documentType,
      cost_mode: costModeLabel(documentType),
      sheetsNeeded,
      perSheet,
      boardCostEx,
      boardCostTotalEx,
      vinylCostEx,
      laminateCostEx,
      materialsEx,
      materials,
      labour,
      totalCost,
      sell_price_label: sellPriceLabel(documentType),
    },
    size_spec: `${pieceW}cm × ${pieceH}cm`,
    suggested_name: params.name || `${boardFamily === 'foamex' ? 'Foamex' : 'Correx'} board`,
  };
}

export function calculateCustomProduct(family, params, rulesRows = [], plainUnitCost = 0, globalRulesRows = []) {
  const rules = rulesToMap(rulesRows);
  const globalRules = rulesToMap(globalRulesRows);
  switch (family) {
    case 'vinyl_banner':
      return calculateVinylBanner(params, rules, globalRules);
    case 'roll_up_banner':
      return calculateRollUp(params, rules);
    case 'pizza_box_printed':
      return calculatePrintedPizzaBox(params, rules, plainUnitCost);
    case 'correx_boards':
      return calculateCorrexFoamex(params, rules, 'correx');
    case 'foamex_boards':
      return calculateCorrexFoamex(params, rules, 'foamex');
    default:
      throw new Error(`Unknown pricing family: ${family}`);
  }
}
