// Migration: Add cost_per_case to plain_products (admin-only; not synced from file)

async function up(client) {
  await client.query(`
    ALTER TABLE plain_products
    ADD COLUMN IF NOT EXISTS cost_per_case NUMERIC(10, 2);
  `);
  console.log('✅ Added cost_per_case to plain_products');
}

async function down(client) {
  await client.query(`
    ALTER TABLE plain_products
    DROP COLUMN IF EXISTS cost_per_case;
  `);
  console.log('✅ Dropped cost_per_case from plain_products');
}

module.exports = { up, down };
