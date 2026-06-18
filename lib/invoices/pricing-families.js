/**
 * Map user-facing product names to pricing rule families.
 */
export function resolvePricingFamily({ family, name } = {}) {
  const raw = `${family || ''} ${name || ''}`.toLowerCase();

  if (/roll\s*up|rollup|pop\s*up|cassette/.test(raw)) return 'roll_up_banner';
  if (/pvc|vinyl|banner|mesh|flex/.test(raw)) return 'vinyl_banner';
  if (/pizza/.test(raw)) return 'pizza_box_printed';
  if (/correx|corriboard|corri/.test(raw)) return 'correx_boards';
  if (/foamex|foam\s*board/.test(raw)) return 'foamex_boards';

  return family;
}

export const PRICING_FAMILY_GUIDE = `
Product families for calcCustom (use these exact family strings):
- vinyl_banner — PVC banners, vinyl banners, outdoor banners. Needs width_m, height_m, quantity (default 1), eyelets (default 8).
- roll_up_banner — roll-up / pop-up stands. Needs quantity (default 1).
- pizza_box_printed — printed pizza boxes. Needs quantity, size_spec optional.
- correx_boards — correx / corriboard signs. Needs piece_width_cm, piece_height_cm, quantity, thickness_mm.
- foamex_boards — foamex signs. Same dims as correx.

Synonyms: PVC = vinyl_banner. Do NOT use fabric_banner — we only price vinyl/PVC banners.
When the user gives size and quantity, call calcCustom immediately. Do not ask extra questions unless size or product type is missing.
`;
