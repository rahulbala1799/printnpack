/**
 * Sync plain packaging products from the site data file into the database.
 * Reads data/plain-products-tiered.js and data/plain-products.js (image overrides), then upserts into plain_products.
 * Run after Excel import or when the static file changes. Can be triggered by cron.
 *
 * Usage: node scripts/sync-plain-products.js
 *        (ensure .env.local has DATABASE_URL)
 */

const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

function loadTieredProducts() {
  const filePath = path.resolve(__dirname, '../data/plain-products-tiered.js');
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const TIERED_PLAIN_PRODUCTS = (\[[\s\S]*?\]);\s*export const TIERED_CATEGORIES/);
  if (!match) throw new Error('Could not extract TIERED_PLAIN_PRODUCTS from tiered file');
  return eval(match[1]);
}

function loadImageOverrides() {
  const filePath = path.resolve(__dirname, '../data/plain-products.js');
  const content = fs.readFileSync(filePath, 'utf8');
  const block = content.match(/const PLAIN_IMAGE_OVERRIDES = \{([\s\S]*?)\};\s*function applyImageOverrides/);
  if (!block) return {};
  const overrides = {};
  const re = /'\s*([^']+)\s*':\s*'([^']*)'/g;
  let m;
  while ((m = re.exec(block[1])) !== null) {
    overrides[m[1].trim()] = m[2];
  }
  return overrides;
}

function loadPlainProducts() {
  const products = loadTieredProducts();
  const overrides = loadImageOverrides();
  return products.map((p) => {
    const src = overrides[p.code];
    if (!src) return p;
    return { ...p, imageSrc: src, images: [src] };
  });
}

function toDbRow(p, index) {
  return {
    id: p.id || p.code,
    name: p.name || '',
    category: p.category || '',
    description: p.description || null,
    qty_per_case: p.qtyPerCase || null,
    case_tiers: JSON.stringify(p.caseTiers || []),
    image_src: p.imageSrc || null,
    images: Array.isArray(p.images) ? p.images : (p.imageSrc ? [p.imageSrc] : []),
    is_active: p.is_active !== false,
    sort_order: index,
  };
}

async function run() {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set. Use .env.local or set the env var.');
    process.exit(1);
  }

  const products = loadPlainProducts();
  console.log(`Loaded ${products.length} products from data/plain-products-tiered.js + overrides`);

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  const client = await pool.connect();
  const upsertSql = `
    INSERT INTO plain_products (id, name, category, description, qty_per_case, case_tiers, image_src, images, is_active, sort_order, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8, $9, $10, now())
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      category = EXCLUDED.category,
      description = EXCLUDED.description,
      qty_per_case = EXCLUDED.qty_per_case,
      case_tiers = EXCLUDED.case_tiers,
      image_src = EXCLUDED.image_src,
      images = EXCLUDED.images,
      is_active = EXCLUDED.is_active,
      sort_order = EXCLUDED.sort_order,
      updated_at = now();
  `;

  let ok = 0;
  let err = 0;
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const row = toDbRow(p, i);
    try {
      await client.query(upsertSql, [
        row.id,
        row.name,
        row.category,
        row.description,
        row.qty_per_case,
        row.case_tiers,
        row.image_src,
        row.images,
        row.is_active,
        row.sort_order,
      ]);
      ok++;
    } catch (e) {
      err++;
      console.error(`Failed to upsert product ${row.id}:`, e.message);
    }
  }

  client.release();
  await pool.end();
  console.log(`Sync done. Upserted: ${ok}, errors: ${err}`);
  if (err > 0) process.exit(1);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
