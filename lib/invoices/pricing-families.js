/**
 * Map user-facing product names to pricing rule families.
 */
export function resolvePricingFamily({ family, name } = {}) {
  const raw = `${family || ''} ${name || ''}`.toLowerCase();

  if (/roll\s*up|rollup|pop\s*up|cassette/.test(raw)) return 'roll_up_banner';
  if (/pvc|vinyl|banner|mesh|flex/.test(raw) && !/foamex|correx/.test(raw)) return 'vinyl_banner';
  if (/pizza/.test(raw)) return 'pizza_box_printed';
  if (/bagasse|meal\s*box/.test(raw) && !/burger/.test(raw)) return 'bagasse_meal_box_printed';
  if (/burger/.test(raw)) return 'burger_boxes_printed';
  if (/sos|grab\s*bag/.test(raw)) return 'sos_grab_bags_printed';
  if (/paper\s*bag|kraft\s*bag|flat\s*bag/.test(raw)) return 'paper_bags_printed';
  if (/correx|corriboard|corri/.test(raw)) return 'correx_boards';
  if (/foamex|foam\s*board/.test(raw)) return 'foamex_boards';

  return family;
}

export const PLAIN_PRINTED_FAMILIES = new Set([
  'pizza_box_printed',
  'bagasse_meal_box_printed',
  'burger_boxes_printed',
  'paper_bags_printed',
  'sos_grab_bags_printed',
]);

export const PRICING_FAMILY_GUIDE = `
Product families for calcCustom (use these exact family strings):

PRINTED PACKAGING (plain box/bag cost from plain_products DB + ink + labour):
- pizza_box_printed — printed pizza boxes. Pass pizza_size_inches (7/9/10/12/14/16) or plain_product_id (e.g. 120762 = 12"). Quantity = number of boxes.
- bagasse_meal_box_printed — printed bagasse meal boxes. Pass plain_product_id or plain_search with size/name.
- burger_boxes_printed — printed burger/bagasse clamshell boxes.
- paper_bags_printed — printed flat kraft bags.
- sos_grab_bags_printed — printed SOS/grab bags.

BOARDS (per-sqm from full 240×120cm sheet price + vinyl per sqm + labour):
- foamex_boards — foamex signs. Needs thickness_mm (2/3/5), piece_width_cm, piece_height_cm OR paper_size (A1, A2…), quantity.
- correx_boards — correx/corriboard. Same dims as foamex.

BANNERS:
- vinyl_banner — PVC/vinyl banners. width_m, height_m, quantity, eyelets (default 8).
- roll_up_banner — roll-up stands. quantity.

Paper sizes: A1=59.4×84.1cm, A2=42×59.4cm, A3=29.7×42cm, A4=21×29.7cm.

Pricing overrides (optional): margin_percent (e.g. 45), markup_percent (e.g. 80), ink_per_unit, labour_rate, boxes_per_hour.

When user gives product + size + quantity, call calcCustom immediately then upsertDraft.
`;
