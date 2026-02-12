# Product Page Template Guide

Use the **Custom Pizza Boxes** page as the reference template to convert other product pages to the same B2B layout and multi-step quote flow.

**Reference files:**
- **Page:** `pages/custom-pizza-boxes-ireland.js`
- **Quote form:** `components/PizzaBoxQuoteForm.js` (multi-step wizard)

---

## 1. Template structure (section order)

Each product page should follow this section order. Copy from `custom-pizza-boxes-ireland.js` and replace content.

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Breadcrumb** | `Home / Products / [Product Name]` |
| 2 | **Hero / Product overview** | Two columns: left = image gallery (crossfade + thumbnails), right = badge, H1, short description, quick stats (price/MOQ/lead time), bullet points, primary CTA + phone, trust line |
| 3 | **Features** | Grid of 3–6 feature cards (icon, title, description) |
| 4 | **Options** (optional) | Product-specific options, e.g. “Available Sizes” for pizza boxes, or thickness/variant grid for foamex/correx |
| 5 | **Gallery** | Grid of images + lightbox (click to open, prev/next, close) |
| 6 | **Specifications** | Table of spec rows (label + value), optional product image beside it |
| 7 | **CTA block** | Dark background, headline, “Get Free Quote” + “Call” buttons, small trust bullets |
| 8 | **Quote modal** | Product-specific multi-step form; opened by “Get Custom Quote” / “Get Free Quote” |

---

## 2. Data to define at the top of the page

Define these **above** the main component. Replace with your product’s content.

```javascript
// Image paths (Next.js Image: use /images/... from public/)
const heroImages = [ '/images/your-product/img1.jpg', ... ];   // 4–8 for hero rotation
const galleryImages = [ ... ];                                  // For gallery + lightbox

// Optional: product options (sizes, thicknesses, variants)
const sizes = [
  { size: '12"', label: 'Medium', popular: true },
  // ...
];

// 3–6 feature cards
const features = [
  {
    title: 'Feature Title',
    description: 'Short description.',
    icon: ( <svg>...</svg> ),  // Inline SVG or React component
  },
  // ...
];

// Spec table rows
const specs = [
  { label: 'Material', value: '...' },
  { label: 'Min. Order', value: '...' },
  // ...
];
```

- **heroImages** – Main product images; first is usually the “hero” image.
- **galleryImages** – Can be same as hero or more; used in gallery grid and lightbox.
- **sizes** (or equivalent) – Only if the product has clear options (sizes, thicknesses, etc.). Omit or rename for products that don’t need it.
- **features** – Same structure as pizza box page; only copy and text change.
- **specs** – Same structure; adjust labels/values per product.

---

## 3. Page state (copy from template)

Keep the same state and behaviour as the pizza box page:

```javascript
const [quoteModalOpen, setQuoteModalOpen] = useState(false);
const [currentImage, setCurrentImage] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(false);
const [lightboxIndex, setLightboxIndex] = useState(null);
const timeoutRef = useRef(null);
```

- **Hero rotation:** `goToImage(nextIndex)` with 400ms transition; `useEffect` with `setInterval` (e.g. 5s) to auto-advance.
- **Open quote:** `const openQuote = () => setQuoteModalOpen(true);` and use it on all “Get Quote” / “Get Custom Quote” buttons.

---

## 4. Hero / product overview block

- **Left column:**  
  - One main image area: render all `heroImages`, show only the one where `i === currentImage && !isTransitioning` with `opacity` transition (e.g. 0.8s).  
  - Thumbnail strip: same images, `onClick={() => goToImage(i)}`, highlight current with border/ring.
- **Right column:**  
  - Optional badge (e.g. “In Stock - Ready to Print”).  
  - H1 (product name).  
  - Short paragraph.  
  - **Quick stats:** 3 boxes (e.g. “From €X”, “500+ min. order”, “5–7 days production”).  
  - Bullet list of key selling points (use a small `CheckIcon` component as in template).  
  - Two buttons: primary “Get Custom Quote” (`onClick={openQuote}`), secondary “Call +353 …”.  
  - Small trust line (e.g. Food Safe, Irish Business, 100+ Happy Customers).

Keep the same layout and Tailwind classes; only change copy and numbers.

---

## 5. Features section

- One heading + short intro paragraph.  
- Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.  
- Each card: icon (in a small coloured box), title, description.  
- Use your `features` array and the same card styling as the pizza box page.

---

## 6. Options section (e.g. “Available Sizes”)

- Only include if the product has variants (sizes, thicknesses, types).  
- Grid of options; mark “popular” ones with a badge and different border/background.  
- Optional: “Need something else?” link that calls `openQuote`.

---

## 7. Gallery + lightbox

- Grid of `galleryImages`; each item is a button `onClick={() => setLightboxIndex(i)}`.  
- Lightbox: when `lightboxIndex !== null`, render full-screen overlay, current image, prev/next (cycle index), close button, optional counter “1 / N”.  
- Use the same overlay and button behaviour as the pizza box page.

---

## 8. Specifications

- One column: heading, short intro, then a table (or striped rows) of `specs` (label + value).  
- Optional second column: one product image.  
- Same layout as pizza box “Technical Specifications” block.

---

## 9. CTA section

- Dark background (`bg-gray-900`).  
- Centred headline + short line of copy.  
- Two buttons: “Get Free Quote” (`onClick={openQuote}`) and “Call …”.  
- Small trust bullets (e.g. No obligation, Free design, Ireland-wide delivery).

---

## 10. Quote modal (product-specific form)

The pizza box page uses **`PizzaBoxQuoteForm`** with props:

```javascript
{quoteModalOpen && (
  <PizzaBoxQuoteForm
    isOpen={quoteModalOpen}
    onClose={() => setQuoteModalOpen(false)}
  />
)}
```

**For other products:**

- **Option A – Existing form:** If the product already has a quote form (e.g. `BagasseQuoteForm`, `FoamexQuoteForm`, `CorrexQuoteForm`, `VinylStickerQuoteForm`, `RubberStampQuoteForm`, `RollUpBannerQuoteForm`, `ClothingQuoteForm`), keep using it. Update that component to the **multi-step wizard** pattern if you want consistency (see below).
- **Option B – New form:** Create `components/YourProductQuoteForm.js` using `PizzaBoxQuoteForm.js` as the template.

**Multi-step wizard pattern (from PizzaBoxQuoteForm):**

1. **Steps:** e.g. “Product” → “Contact” → “Details” (define a `STEPS` array).
2. **Step 1 – Product:** Product-specific choices (sizes, quantity, print type, etc.) using chip/button selects.
3. **Step 2 – Contact:** Name, email, phone, business name, business type.
4. **Step 3 – Details:** Delivery location, timeframe, additional info, design service, etc.
5. **Validation:** Per-step validation; only allow “Next” when current step is valid; on last step “Submit” sends the request.
6. **Submit:** Build a clear text/HTML message (product + contact + details), send via your existing API (e.g. `POST /api/contact`). On success, show a thank-you state and optionally call `onClose()`.

Copy `PizzaBoxQuoteForm.js`, rename it, then:

- Replace product-specific options (SIZES, QUANTITIES, PRINT_TYPES, BUSINESS_TYPES, TIMEFRAMES) with your product’s options.
- Adjust `form` state fields and `validateStep` for your fields.
- Change the email body title and content (e.g. “CUSTOM PIZZA BOXES” → “FOAMEX BOARDS” / “BURGER BOXES”) so the recipient can identify the product.

---

## 11. SEO and meta

Match the pizza box pattern for every product page:

- `<title>Product Name Ireland | Short descriptor | Print n Pack</title>`
- `<meta name="description" content="..." />`
- `<meta name="keywords" content="..." />`
- `<meta property="og:title" ... />`
- `<meta property="og:description" ... />`
- `<meta property="og:image" content="https://www.printnpack.ie/..." />`
- `<meta property="og:url" content="https://www.printnpack.ie/your-product-slug" />`
- `<meta property="og:type" content="website" />`
- `<link rel="canonical" href="https://www.printnpack.ie/your-product-slug" />`

Use the exact URL path of the page for `og:url` and `canonical`.

---

## 12. Checklist for converting an existing product page

Use this when converting a page (e.g. `eco-bagasse-burger-boxes.js`, `foamex-boards.js`, `correx-boards.js`, `vinyl-stickers.js`, `rubber-stamps.js`, `roll-up-banners.js`).

- [ ] **Breadcrumb** – Add or keep `Home / Products / [Product Name]` with correct links.
- [ ] **Hero** – Two-column layout: left = crossfade gallery + thumbnails, right = badge, H1, description, quick stats, bullets, “Get Custom Quote” + “Call”, trust line.
- [ ] **Data** – Define `heroImages`, `galleryImages`, and optionally `sizes` (or equivalent), `features`, `specs` at top of file.
- [ ] **Features** – Grid of 3–6 cards; same structure as pizza box (icon, title, description).
- [ ] **Options** – If the product has variants, add a section (e.g. sizes or thicknesses) with optional “popular” styling.
- [ ] **Gallery** – Grid + lightbox with prev/next and close.
- [ ] **Specifications** – Table of `specs`; optional product image.
- [ ] **CTA** – Dark section with “Get Free Quote” and “Call”, plus trust bullets.
- [ ] **Quote modal** – Use existing product QuoteForm or create new one; ensure `isOpen` and `onClose` are wired; all quote buttons call `openQuote`.
- [ ] **SEO** – Title, description, keywords, OG tags, canonical.
- [ ] **Remove** – Any old pricing section or single-step form that’s replaced by the wizard (per design).

---

## 13. Pages to convert (current list)

| Page file | Route | Has dedicated QuoteForm? |
|-----------|--------|---------------------------|
| `custom-pizza-boxes-ireland.js` | `/custom-pizza-boxes-ireland` | ✅ PizzaBoxQuoteForm (template) |
| `eco-bagasse-burger-boxes.js` | `/eco-bagasse-burger-boxes` | ✅ BagasseQuoteForm |
| `foamex-boards.js` | `/foamex-boards` | ✅ FoamexQuoteForm |
| `correx-boards.js` | `/correx-boards` | ✅ CorrexQuoteForm |
| `vinyl-stickers.js` | `/vinyl-stickers` | ✅ VinylStickerQuoteForm |
| `rubber-stamps.js` | `/rubber-stamps` | ✅ RubberStampQuoteForm |
| `roll-up-banners.js` | `/roll-up-banners` | ✅ RollUpBannerQuoteForm |
| `clothing.js` | `/clothing` | ✅ ClothingQuoteForm |

For each row (except pizza boxes), apply the template structure and sections above; optionally upgrade the existing QuoteForm to the multi-step wizard pattern like `PizzaBoxQuoteForm`.

---

## 14. Small reusable bits from the template

- **CheckIcon** – Small green check SVG for bullet lists; copy from `custom-pizza-boxes-ireland.js`.
- **Image crossfade** – `opacity` + `isTransitioning` + `setTimeout` before changing `currentImage` for a smooth hero transition.
- **Thumbnail strip** – Same images as hero, border/ring on `currentImage`, `onClick` to `goToImage(i)`.

Keeping these consistent across product pages makes the site feel one template and easier to maintain.
