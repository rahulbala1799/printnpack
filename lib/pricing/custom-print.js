/**
 * Custom printed product pricing — reads pricing_rules from DB.
 */

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

  const labourRate = globalRules.labour?.hourly_eur ?? LABOUR_HOURLY;
  const markupMult = globalRules.markup?.multiplier ?? params.markup ?? DEFAULT_MARKUP;

  const vinylRoll = rules.vinyl_roll?.cost ?? 80;
  const vinylLength = rules.vinyl_roll?.length_m ?? 50;
  const vinylWidth = rules.vinyl_roll?.width_m ?? 1;
  const inkCartridge = rules.ink?.cost ?? 70;
  const inkMlPerCartridge = rules.ink?.ml_per_cartridge ?? 440;
  const inkColours = rules.ink?.colours ?? 4;
  const eyeletCostPer500 = rules.eyelets?.cost_per_500 ?? 19;

  // Ink: plan specifies ~12–14ml TOTAL (all CMYK) for a 2m × 1m banner
  const mlPer2sqm = rules.ink?.ml_per_2sqm ?? 13;
  const mlUsed = Math.round((mlPer2sqm / 2) * sqm * 10) / 10;

  const wastageCm = rules.vinyl_roll?.wastage_cm ?? 10;
  const vinylSqmUsed = Math.round((sqm + (wastageCm / 100) * vinylWidth) * 100) / 100;
  const rollSqm = vinylLength * vinylWidth;
  const vinylCostPerSqm = Math.round((vinylRoll / rollSqm) * 100) / 100;
  const materialVinyl = Math.round(vinylSqmUsed * vinylCostPerSqm * 100) / 100;

  // Proportional cartridge usage across CMYK cartridges
  const inkCost = Math.round((mlUsed / inkMlPerCartridge) * inkCartridge * 100) / 100;

  const eyeletUnitCost = Math.round((eyeletCostPer500 / 500) * 1000) / 1000;
  const eyeletCost = Math.round(eyelets * eyeletUnitCost * 100) / 100;

  const printMetres = Math.max(widthM, heightM);
  const printSpeedMhr = rules.print?.metres_per_hour ?? 10;
  const printMins = Math.round((printMetres / printSpeedMhr) * 60 * 10) / 10;
  const finishMinsPer2m = rules.finish?.mins_per_2m ?? 20;
  const finishMins = Math.round((finishMinsPer2m / 2) * printMetres * 10) / 10;

  const printLabour = labourCost(printMins, 1, labourRate);
  const finishLabour = labourCost(finishMins, 1, labourRate);
  const labour = Math.round((printLabour + finishLabour) * 100) / 100;

  const unitCost = Math.round((materialVinyl + inkCost + eyeletCost + labour) * 100) / 100;
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
      sqm,
      vinylSqmUsed,
      vinylCostPerSqm,
      vinylRollNote: `€${vinylRoll} roll ${vinylLength}m × ${vinylWidth}m`,
      materialVinyl,
      mlUsed,
      inkNote: `${mlPer2sqm}ml per 2 sqm reference, €${inkCartridge}/${inkMlPerCartridge}ml cartridge`,
      inkCost,
      eyeletUnitCost,
      eyeletCost,
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
    },
    size_spec: `${widthM}m × ${heightM}m`,
    suggested_name: params.name || 'PVC vinyl banner',
  };
}

export function calculateRollUp(params, rules = {}) {
  const qty = Number(params.quantity) || 1;
  const cassetteRoll = rules.cassette_roll?.cost ?? 130;
  const cassetteLength = rules.cassette_roll?.length_m ?? 30;
  const usePerUnit = rules.cassette_roll?.use_m_per_unit ?? 2;
  const hardware = rules.hardware?.cost ?? 21;
  const materialPerUnit = (usePerUnit / cassetteLength) * cassetteRoll;
  const printCost = params.print_cost ?? 15;
  const unitCost = materialPerUnit + hardware + printCost;
  const unitSell = withMarkup(unitCost, params.markup ?? DEFAULT_MARKUP);

  return {
    category: 'Roll Up',
    pricing_family: 'roll_up_banner',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: { materialPerUnit, hardware, printCost, unitCost },
    size_spec: params.size_spec || '2m × 85cm',
    suggested_name: params.name || 'Roll Up Banner',
  };
}

export function calculatePrintedPizzaBox(params, rules = {}, plainUnitCost = 0) {
  const qty = Number(params.quantity) || 500;
  const inkPerBox = rules.ink?.cost_per_unit ?? 0.045;
  const boxesPerHour = rules.print_speed?.per_hour ?? 1000;
  const operators = rules.print_speed?.operators ?? 1;
  const labourPerBox = (LABOUR_HOURLY * operators) / boxesPerHour;
  const unitCost = plainUnitCost + inkPerBox + labourPerBox;
  const unitSell = withMarkup(unitCost, params.markup ?? DEFAULT_MARKUP);

  return {
    category: 'Pizza Box',
    pricing_family: 'pizza_box_printed',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: { plainUnitCost, inkPerBox, labourPerBox, unitCost },
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

  const boardPrices = rules.board_prices || { '2': 13, '3': 15, '5': 19 };
  if (boardFamily === 'foamex') {
    Object.assign(boardPrices, rules.board_prices || { '2': 18, '3': 22, '5': 28 });
  }
  const boardCost = boardPrices[thickness] ?? boardPrices['3'];

  const fitW = Math.floor(sheetW / pieceW);
  const fitH = Math.floor(sheetH / pieceH);
  const perSheet = Math.max(1, fitW * fitH);
  const sheetsNeeded = Math.ceil(qty / perSheet);

  const vinylRoll = rules.vinyl_roll?.cost ?? 90;
  const vinylSqm = (sheetW / 100) * (sheetH / 100) * sheetsNeeded;
  const vinylCost = vinylSqmCost(vinylRoll, 50, 1.3, vinylSqm);
  const laminateCost = laminated ? vinylSqmCost(rules.laminate_roll?.cost ?? 90, 50, 1.3, vinylSqm) : 0;
  const printMins = rules.print?.mins_per_sheet ?? 18;
  const lamMins = laminated ? (rules.laminate?.mins ?? 20) : 0;
  const applyMins = rules.apply?.mins ?? 20;
  const labour = labourCost((printMins + lamMins + applyMins) * sheetsNeeded, 1);

  const totalCost = boardCost * sheetsNeeded + vinylCost + laminateCost + labour;
  const unitSell = withMarkup(totalCost / qty, params.markup ?? DEFAULT_MARKUP);

  return {
    category: boardFamily === 'foamex' ? 'Foamex' : 'Correx',
    pricing_family: boardFamily === 'foamex' ? 'foamex_boards' : 'correx_boards',
    unit_price: unitSell,
    line_total: Math.round(unitSell * qty * 100) / 100,
    breakdown: { sheetsNeeded, perSheet, boardCost, vinylCost, laminateCost, labour, totalCost },
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
