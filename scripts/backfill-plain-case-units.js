/**
 * Backfill units_per_case and case_pack_detail for all plain_products.
 * Usage: node scripts/backfill-plain-case-units.js
 *        MIGRATE_ENV=live node scripts/backfill-plain-case-units.js
 */

const path = require('path');
const fs = require('fs');

const envFile =
  process.env.MIGRATE_ENV === 'live'
    ? '.env.live'
    : fs.existsSync('.env.local')
      ? '.env.local'
      : '.env.local';
require('dotenv').config({ path: path.resolve(__dirname, '..', envFile) });

const { Pool } = require('pg');

async function main() {
  const { parseCaseQty } = await import('../lib/pricing/case-qty.js');
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      `SELECT id, qty_per_case FROM plain_products ORDER BY id`
    );
    let ok = 0;
    for (const row of rows) {
      const detail = parseCaseQty(row.qty_per_case);
      await client.query(
        `UPDATE plain_products SET units_per_case = $1, case_pack_detail = $2, updated_at = now() WHERE id = $3`,
        [detail.unitsPerCase, JSON.stringify(detail), row.id]
      );
      ok++;
    }
    console.log(`✅ Backfilled case units for ${ok} plain products`);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
