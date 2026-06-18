// Migration: parsed units per case for plain packaging (4x50 → 200 units)

async function up(client) {
  await client.query(`
    ALTER TABLE plain_products
    ADD COLUMN IF NOT EXISTS units_per_case INTEGER,
    ADD COLUMN IF NOT EXISTS case_pack_detail JSONB;
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_plain_products_units_per_case
    ON plain_products(units_per_case) WHERE is_active = true;
  `);
}

async function down(client) {
  await client.query(`ALTER TABLE plain_products DROP COLUMN IF EXISTS case_pack_detail;`);
  await client.query(`ALTER TABLE plain_products DROP COLUMN IF EXISTS units_per_case;`);
}

module.exports = { up, down };
