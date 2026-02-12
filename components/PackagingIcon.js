// Placeholder SVG icons for plain packaging products
// Used while real product photos are being sourced.
// Swap back to <Image> once imageSrc is a real photo URL.

const ICON_TYPES = {
  box: 'box',
  bag: 'bag',
  cup: 'cup',
  container: 'container',
  wrap: 'wrap',
  default: 'default',
};

// Map category name → icon type + background colour
const CATEGORY_MAP = {
  // ── Boxes ──────────────────────────────────────────────────────────────
  'Pizza Boxes':          { icon: 'box',       bg: 'bg-orange-50',  accent: '#ea580c' },
  'Corrugated Meal Box':  { icon: 'box',       bg: 'bg-amber-50',   accent: '#d97706' },
  'Bagasse Meal Box':     { icon: 'box',       bg: 'bg-lime-50',    accent: '#65a30d' },
  'Biobox':               { icon: 'box',       bg: 'bg-lime-50',    accent: '#65a30d' },
  'Kids Meal Boxes':      { icon: 'box',       bg: 'bg-yellow-50',  accent: '#ca8a04' },
  'Microwave Meal Boxes': { icon: 'box',       bg: 'bg-amber-50',   accent: '#d97706' },
  'Nested Boxes':         { icon: 'box',       bg: 'bg-stone-100',  accent: '#78716c' },
  'Fish & Chip Boxes':    { icon: 'box',       bg: 'bg-yellow-50',  accent: '#ca8a04' },
  'Bakery Packaging':     { icon: 'box',       bg: 'bg-amber-50',   accent: '#d97706' },
  'Snackbox':             { icon: 'box',       bg: 'bg-orange-50',  accent: '#ea580c' },
  'Paper Meal Container': { icon: 'box',       bg: 'bg-stone-100',  accent: '#78716c' },
  // ── Bags ───────────────────────────────────────────────────────────────
  'Bags':                 { icon: 'bag',       bg: 'bg-stone-100',  accent: '#57534e' },
  'SOS Bags':             { icon: 'bag',       bg: 'bg-amber-50',   accent: '#b45309' },
  'Handled Carrier Bags': { icon: 'bag',       bg: 'bg-stone-100',  accent: '#57534e' },
  'Flat Kraft Food Bags': { icon: 'bag',       bg: 'bg-amber-50',   accent: '#b45309' },
  'MG Kraft Food Bags':   { icon: 'bag',       bg: 'bg-amber-50',   accent: '#b45309' },
  'Food & Freezer Bags':  { icon: 'bag',       bg: 'bg-blue-50',    accent: '#2563eb' },
  'Foil Bags':            { icon: 'bag',       bg: 'bg-slate-100',  accent: '#64748b' },
  'Greaseproof Food Bag': { icon: 'bag',       bg: 'bg-stone-100',  accent: '#78716c' },
  'Food Cones':           { icon: 'bag',       bg: 'bg-orange-50',  accent: '#ea580c' },
  // ── Cups / Bowls ───────────────────────────────────────────────────────
  'Hot Cups & Lids':      { icon: 'cup',       bg: 'bg-red-50',     accent: '#dc2626' },
  'Cold Cups & Lids':     { icon: 'cup',       bg: 'bg-sky-50',     accent: '#0284c7' },
  'Ice Cream Cups':       { icon: 'cup',       bg: 'bg-pink-50',    accent: '#db2777' },
  'Portion Pots':         { icon: 'cup',       bg: 'bg-stone-100',  accent: '#78716c' },
  'Soup Containers':      { icon: 'cup',       bg: 'bg-orange-50',  accent: '#ea580c' },
  'Noodle Containers':    { icon: 'cup',       bg: 'bg-amber-50',   accent: '#d97706' },
  'Popcorn Buckets':      { icon: 'cup',       bg: 'bg-yellow-50',  accent: '#ca8a04' },
  'Round Kraft Bowls':    { icon: 'cup',       bg: 'bg-amber-50',   accent: '#b45309' },
  'Hot Cup Extras':       { icon: 'cup',       bg: 'bg-red-50',     accent: '#dc2626' },
  // ── Containers / Trays ─────────────────────────────────────────────────
  'Foil Containers':      { icon: 'container', bg: 'bg-slate-100',  accent: '#64748b' },
  'Salad Container':      { icon: 'container', bg: 'bg-green-50',   accent: '#16a34a' },
  'Containersandtaway':   { icon: 'container', bg: 'bg-stone-100',  accent: '#78716c' },
  'Food Trays':           { icon: 'container', bg: 'bg-stone-100',  accent: '#78716c' },
  'Plates & Bowls':       { icon: 'container', bg: 'bg-stone-100',  accent: '#78716c' },
  'Platters & Lids':      { icon: 'container', bg: 'bg-stone-100',  accent: '#78716c' },
  'Tamper Proof':         { icon: 'container', bg: 'bg-slate-100',  accent: '#64748b' },
  // ── Wraps / Foils ──────────────────────────────────────────────────────
  'Sandwich & Wraps':     { icon: 'wrap',      bg: 'bg-yellow-50',  accent: '#ca8a04' },
  'Food Wrap':            { icon: 'wrap',      bg: 'bg-slate-100',  accent: '#64748b' },
  'Foil,Film, Parchment': { icon: 'wrap',      bg: 'bg-slate-100',  accent: '#64748b' },
  // ── Default ────────────────────────────────────────────────────────────
};

const DEFAULT_STYLE = { icon: 'default', bg: 'bg-stone-100', accent: '#a8a29e' };

function getStyle(category) {
  return CATEGORY_MAP[category] || DEFAULT_STYLE;
}

// ── SVG shapes ────────────────────────────────────────────────────────────────

function BoxSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Bottom box body */}
      <rect x="8" y="28" width="48" height="26" rx="2" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2"/>
      {/* Lid left flap */}
      <path d="M8 28 L8 18 L24 14 L24 28" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Lid right flap */}
      <path d="M56 28 L56 18 L40 14 L40 28" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Lid middle */}
      <path d="M24 14 L32 12 L40 14 L40 28 L24 28 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Centre crease line on box */}
      <line x1="32" y1="28" x2="32" y2="54" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.5"/>
    </svg>
  );
}

function BagSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Bag body */}
      <path d="M14 22 L12 56 L52 56 L50 22 Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Top fold */}
      <rect x="14" y="18" width="36" height="6" rx="1" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
      {/* Left handle */}
      <path d="M22 18 C22 10 28 8 28 8 C28 8 30 10 30 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Right handle */}
      <path d="M34 18 C34 10 38 8 38 8 C38 8 40 10 40 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Centre crease */}
      <line x1="32" y1="24" x2="32" y2="54" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.4"/>
    </svg>
  );
}

function CupSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Cup body */}
      <path d="M16 18 L20 54 L44 54 L48 18 Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Lid */}
      <rect x="13" y="13" width="38" height="7" rx="3.5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5"/>
      {/* Lid dome */}
      <path d="M20 13 C20 8 44 8 44 13" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.5"/>
      {/* Straw */}
      <rect x="30" y="6" width="4" height="22" rx="2" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1"/>
      {/* Vertical crease */}
      <line x1="32" y1="22" x2="34" y2="52" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.35"/>
    </svg>
  );
}

function ContainerSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Base tray */}
      <path d="M8 32 L12 54 L52 54 L56 32 Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Lid */}
      <rect x="8" y="22" width="48" height="12" rx="2" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2"/>
      {/* Lid lip overhang */}
      <rect x="6" y="20" width="52" height="5" rx="2.5" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.5"/>
      {/* Hinge line */}
      <line x1="8" y1="32" x2="56" y2="32" stroke={color} strokeWidth="1.5" strokeOpacity="0.5"/>
      {/* Vent holes on lid */}
      <circle cx="22" cy="26" r="2" fill={color} fillOpacity="0.4"/>
      <circle cx="32" cy="26" r="2" fill={color} fillOpacity="0.4"/>
      <circle cx="42" cy="26" r="2" fill={color} fillOpacity="0.4"/>
    </svg>
  );
}

function WrapSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Roll body */}
      <ellipse cx="32" cy="32" rx="22" ry="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2"/>
      {/* Roll height */}
      <path d="M10 32 L10 38 Q10 52 32 52 Q54 52 54 38 L54 32" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="2"/>
      {/* Bottom ellipse */}
      <ellipse cx="32" cy="38" rx="22" ry="10" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="4 2" strokeOpacity="0.5"/>
      {/* Spiral line */}
      <path d="M16 30 Q24 22 32 26 Q40 30 48 26" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeOpacity="0.5"/>
      {/* Core */}
      <ellipse cx="32" cy="32" rx="6" ry="2.5" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5"/>
    </svg>
  );
}

function DefaultSvg({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Generic flat package */}
      <rect x="10" y="20" width="44" height="30" rx="3" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2"/>
      {/* Tape / seal strip */}
      <rect x="10" y="31" width="44" height="8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1"/>
      {/* Left flap */}
      <path d="M10 20 L10 12 L32 8 L32 20" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Right flap */}
      <path d="M54 20 L54 12 L32 8 L32 20" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      {/* Fold highlight */}
      <line x1="32" y1="8" x2="32" y2="50" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.35"/>
    </svg>
  );
}

const ICON_COMPONENTS = {
  box:       BoxSvg,
  bag:       BagSvg,
  cup:       CupSvg,
  container: ContainerSvg,
  wrap:      WrapSvg,
  default:   DefaultSvg,
};

// ── Public component ──────────────────────────────────────────────────────────
// Usage: <PackagingIcon category={product.category} className="w-20 h-20" />
export default function PackagingIcon({ category, className = '' }) {
  const { icon, bg, accent } = getStyle(category);
  const SvgComp = ICON_COMPONENTS[icon] || DefaultSvg;

  return (
    <div className={`flex items-center justify-center ${bg} ${className}`}>
      <div className="w-[55%] h-[55%]">
        <SvgComp color={accent} />
      </div>
    </div>
  );
}

// Helper: returns true if the imageSrc is still the placeholder logo
export function isPlaceholderImage(src) {
  return !src || src.includes('/images/ifa/heroh/logos/logo.png');
}
