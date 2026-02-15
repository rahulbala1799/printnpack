# Plain Packaging Products Database

## Scope: Plain Packaging only

We are building a **products database only for Plain Packaging**. The main printed-products catalog (custom pizza boxes, paper bags, etc.) stays in **data/products.js** and is **not** moved to the DB — you don’t show prices for printed products there, so there’s no need to manage them in the database.

- **In the DB:** Plain packaging products (800+ items with case-tier pricing, qty per case, categories).
- **Stay static:** Main catalog in `data/products.js` — no DB, no rewiring for that part.

**Chosen approach:** The database is used **only on the admin side**. The main website keeps using the static file (`data/plain-products.js`). A **cron job** syncs that data into the DB so the admin view always mirrors the live site; both stay in sync.

---

## How it works (frontend ↔ backend)

Yes — we **rewire the frontend to the backend**.

| Layer | Before | After |
|-------|--------|--------|
| **Data** | Static: `data/plain-products-tiered.js` → `data/plain-products.js` | Database: table `plain_products` in Neon Postgres |
| **Backend** | None (pages import from JS files) | API routes that read from the DB, e.g. `GET /api/plain-products`, `GET /api/plain-products/[id]` |
| **Frontend** | `import { PLAIN_PRODUCTS, getProductById, ... } from '../data/plain-products'` | Pages call the API (or use `getServerSideProps` / `getStaticProps` to fetch from API/DB and pass data as props) |

So:

1. **Backend:** Migration creates `plain_products` table; a seed script fills it from the existing tiered data; API routes serve that data.
2. **Frontend:** We change the **Plain Packaging** pages so they no longer import from `data/plain-products.js`. Instead they get data from the API (or from server-side fetch that uses the same DB). That’s the “rewire.”

Main product pages (`/products`, `/products/[slug]`, search, etc.) keep using `data/products.js` — no change there.

---

## Will this break existing systems?

**It can, if we’re not careful.** Rewiring changes how Plain Packaging gets its data:

- **Risks:** If the API is down, slow, or returns a different shape, plain packaging pages can break, show errors, or load slowly. Deploy order matters (API before frontend, or frontend that still works with old data). Any bug in the new API or in the frontend fetch logic affects the live site.
- **We can reduce risk by:** Keeping the same data shape as today so the UI code changes minimally; adding a fallback (e.g. if the API fails, fall back to static data once); testing thoroughly before switchover; or choosing the **alternative (hybrid)** below so the public site keeps behaving exactly as it does now.

So: the current “import from JS files” setup is stable and won’t break unless we change it. Moving to the DB + API is a deliberate change; we should design it so existing behaviour is preserved or we have a safe fallback.

---

## Speed: the database can reduce performance

**Yes. A database can be slower than the current setup.**

- **Now:** Plain packaging data is in static JS files. At build or first load, Next.js has the data in memory. No network call or DB query when a user hits the page — **very fast**.
- **With DB:** Each request that needs product data may trigger an API call that runs a query on Neon. That adds **latency** (network + query time, often tens to a couple hundred ms). Under load, the DB can also become a bottleneck.

**Ways to keep speed:**

1. **Pre-render at build time** – Use `getStaticProps` to fetch from the API (or DB) **during build**. The published site stays static HTML; no DB hit when users visit. You’d run a rebuild (or revalidate) when products change (e.g. after Excel sync).
2. **Caching** – Cache API responses or DB results (in-memory, or with headers like `Cache-Control` / Vercel’s caching). So most requests don’t hit the DB every time.
3. **Hybrid (alternative below)** – Don’t rewire the public site at all; keep it reading from static files. Then the DB doesn’t affect visitor speed.

So: if we rewire the live site to call the API on every request with no caching, **speed can drop**. If we use build-time fetch or caching, we can keep it close to current performance.

---

## Chosen approach: DB for admin only, cron keeps DB in sync with the site

**We don’t have to rewire the public site.** - **Main website (public):** Unchanged. Plain packaging pages keep importing from `data/plain-products.js` (fed by `plain-products-tiered.js` / Excel). No API, no DB, no rewiring. Same speed and behaviour as today.
- **Database:** Holds a **copy** of the same plain packaging data so admin can view (and optionally edit) products in the admin UI. It is not the source of truth for the live site — the static files are.
- **Cron job:** Runs on a schedule (e.g. daily, or after each deploy). It reads the **current static data** (the same file the website uses) and **syncs into the DB** (upsert by product id/code). So the DB always reflects what is on the main website. When you update Excel, run the Python script, and deploy new tiered data, the next cron run updates the DB so admin sees the same list and prices as the site.

**Why this is better:** No rewiring (site unchanged); no speed impact (site never hits the DB); admin always sees what is live (cron keeps DB in sync with the site). **Sync direction:** Static file → DB only. Cron does not write DB → file. **Cron options:** Vercel Cron, GitHub Actions, or an API route protected by a secret (e.g. `/api/cron/sync-plain-products?secret=...`).

| Approach | Public site | Speed | Risk of breaking |
|----------|-------------|--------|-------------------|
| **Full rewiring** (frontend → API → DB) | Reads from API | Can be slower unless we cache or pre-render | Higher (new code path, API dependency) |
| **Hybrid + cron** (chosen) | Still imports from JS file; cron syncs file to DB so admin mirrors site | Same as now | Low (we do not change how the site gets data) |
| **Hybrid, no cron** | Same but you run sync script by hand when the file changes | Same as now | Low; admin can go out of sync if you forget to run the script |

---

## What gets rewired (Plain Packaging only)

| File / area | Change |
|-------------|--------|
| **pages/plain-packaging.js** | Stop importing from `data/plain-products`. Fetch list (and categories) from `GET /api/plain-products` (or via `getServerSideProps`/`getStaticProps` calling that API / DB). |
| **pages/plain-packaging/[slug].js** | Stop importing `getProductById` from data. Fetch product by id/slug from `GET /api/plain-products/[id]` (or server-side DB). |
| **components/home/PlainPackagingShowcase.js** | Same: get data from API or props from a parent that fetched from API. |
| **pages/sitemap.xml.js** | Plain packaging URLs: instead of reading from `TIERED_PLAIN_PRODUCTS`, fetch from API or DB. |
| **data/plain-products.js** | No longer the source of truth for the app. Can stay for image overrides only, or we move overrides into the DB. |
| **data/plain-products-tiered.js** | Still generated by the Excel script. A **sync script** will push this data into the DB (upsert by product code) so Excel remains the source for bulk updates. |

Main products (data/products.js), admin dashboard stats that use `products`, search, etc. are **not** rewired; they keep using the static file.

---

## Database: one table for plain packaging

```sql
CREATE TABLE plain_products (
  id            TEXT PRIMARY KEY,              -- product code e.g. 160003
  name          TEXT NOT NULL,
  category      TEXT NOT NULL,
  description   TEXT,
  qty_per_case  TEXT,                          -- e.g. "10 x 500s"
  case_tiers    JSONB NOT NULL,                 -- [{ casesLabel, pricePerCase }, ...]
  image_src     TEXT,
  images        TEXT[],                         -- array of image paths
  is_active     BOOLEAN DEFAULT true,
  sort_order    INT DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_plain_products_category ON plain_products(category);
CREATE INDEX idx_plain_products_active ON plain_products(is_active);
```

Image overrides (per product code) can live in the same table (`image_src`, `images`) or in a small `plain_product_image_overrides` table; we’ll apply overrides when seeding/syncing.

---

## Flow end-to-end

1. **Migration** – Run `node migrations/migrate.js` (includes `003_create_plain_products.js`). ✅ Done.
2. **Seed / sync** – Run `npm run sync-plain-products` (or `node scripts/sync-plain-products.js`). Reads `data/plain-products-tiered.js` + image overrides from `data/plain-products.js`, upserts into `plain_products`. ✅ Done.
3. **API** – `GET /api/plain-products` (list + categories) and `GET /api/plain-products/[id]` (one product). Read from the DB for admin use. ✅ Done.
4. **Public site** – Stays on static data: plain packaging pages keep importing from `data/plain-products.js` (no rewiring).
5. **Excel updates** – When the Excel file changes, run the Python script to regenerate `plain-products-tiered.js`, then run `npm run sync-plain-products` (or trigger via **cron**) so the DB stays in sync.
6. **Cron (recommended)** – Call the sync regularly (e.g. Vercel Cron, GitHub Actions, or `GET /api/cron/sync-plain-products?secret=...`) so the DB mirrors the site.
7. **Admin (optional)** – Wire admin plain-products list to `GET /api/plain-products`. Later, admin can edit products in the DB; sync can overwrite only tiered fields to keep manual overrides.

---

## Summary

| Question | Answer |
|----------|--------|
| What goes in the database? | **Plain packaging products only** (case-tier pricing, categories, etc.). |
| Will it break existing systems? | **It can** if we rewire carelessly (API down, wrong shape, deploy order). We can reduce risk with fallbacks, same data shape, and testing; or avoid rewiring entirely with the **hybrid** approach. |
| Can the database reduce speed? | **Yes.** DB reads add latency. To keep speed: use build-time fetch (`getStaticProps`), cache API/DB responses, or use the **hybrid** so the public site keeps reading static files. |
| Do we have to rewire the frontend? | **No.** Alternative: **hybrid** — DB only for admin; export from DB to a static file; site keeps importing from that file (no rewiring, same speed, low risk). |
| What about main/printed products? | **No DB.** They stay in `data/products.js`; prices aren’t shown for those, so they’re not part of this. |
| Excel flow? | Keep it. Excel → Python script → `plain-products-tiered.js` → **sync script** → DB. So the DB is filled and updated from the same source you use today. |

**Next step:** Add a cron-triggered sync (e.g. API route with secret, or Vercel Cron). Optionally wire the admin UI to `GET /api/plain-products` so admin sees products from the DB.
