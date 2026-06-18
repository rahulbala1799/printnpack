/** ISO paper sizes in cm (width × height). */

export const PAPER_SIZES_CM = {
  A0: { w: 84.1, h: 118.9 },
  A1: { w: 59.4, h: 84.1 },
  A2: { w: 42.0, h: 59.4 },
  A3: { w: 29.7, h: 42.0 },
  A4: { w: 21.0, h: 29.7 },
  A5: { w: 14.8, h: 21.0 },
};

export function parsePaperSizeFromText(text) {
  const t = String(text || '');
  const m = t.match(/\b(A[0-5])\b/i);
  if (!m) return null;
  const key = m[1].toUpperCase();
  const size = PAPER_SIZES_CM[key];
  if (!size) return null;
  return {
    paper_size: key,
    piece_width_cm: size.w,
    piece_height_cm: size.h,
    size_spec: `${key} (${size.w}cm × ${size.h}cm)`,
  };
}

export function parseThicknessMm(text) {
  const m = String(text || '').match(/(\d+)\s*mm/i);
  return m ? m[1] : null;
}

export function parsePizzaSizeInches(text) {
  const t = String(text || '');
  const patterns = [
    /\b(\d{1,2})\s*(?:inch|inches|")\s*(?:pizza|box)?/i,
    /\b(\d{1,2})\s*inch\b/i,
    /pizza\s*box\s*(\d{1,2})/i,
  ];
  for (const re of patterns) {
    const m = t.match(re);
    if (m) return parseInt(m[1], 10);
  }
  return null;
}
