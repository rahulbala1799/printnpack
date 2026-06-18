/**
 * Map user-facing product names to pricing rule families.
 */
export function resolvePricingFamily({ family, name } = {}) {
  const raw = `${family || ''} ${name || ''}`.toLowerCase();

  if (/roll\s*up|rollup|pop\s*up|cassette/.test(raw)) return 'roll_up_banner';
  if (/pvc|vinyl|banner|mesh|flex/.test(raw) && !/foamex|correx/.test(raw)) return 'vinyl_banner';
  if (/pizza/.test(raw)) return 'pizza_box_printed';
  if (/corrugated|clamshell/.test(raw) && /meal|box|burger/.test(raw)) return 'corrugated_meal_box_printed';
  if (/bagasse|meal\s*box/.test(raw) && !/burger|corrugated/.test(raw)) return 'bagasse_meal_box_printed';
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
  'corrugated_meal_box_printed',
  'paper_bags_printed',
  'sos_grab_bags_printed',
]);

export const PRICING_FAMILY_GUIDE = `
Product families for calcCustom (use these exact family strings):

PRINTED PACKAGING (plain unit cost = case price ÷ units_per_case, then + ink + labour):
- pizza_box_printed — pizza_size_inches or plain_product_id (120762 = 12").
- corrugated_meal_box_printed — corrugated clamshells e.g. 120092 (4×50=200/case), 120093 (3×50=150/case).
- bagasse_meal_box_printed — bagasse meal boxes.
- burger_boxes_printed — burger clamshells.
- paper_bags_printed — flat kraft bags. Use price_per: "case" when user asks per case.
- sos_grab_bags_printed — SOS/grab bags.

Use searchPlain first — every result shows units_per_case, case price, and unit_price_ex.

BOARDS: foamex_boards, correx_boards — thickness_mm, paper_size (A1…) or piece cm, quantity.
BANNERS: vinyl_banner, roll_up_banner.

Pricing: margin_percent, markup_percent, price_per ("case"|"unit"), ink_per_unit.
`;
