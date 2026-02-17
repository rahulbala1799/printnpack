// Migration: Add status and effective dates to customer_pricelists
// Option A: one active per customer; valid_from / valid_to for lifecycle

async function up(client) {
  await client.query(`
    ALTER TABLE customer_pricelists
    ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'active', 'archived'));
  `);
  await client.query(`
    ALTER TABLE customer_pricelists
    ADD COLUMN IF NOT EXISTS valid_from DATE;
  `);
  await client.query(`
    ALTER TABLE customer_pricelists
    ADD COLUMN IF NOT EXISTS valid_to DATE;
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_pricelists_status ON customer_pricelists(status);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_pricelists_customer_status ON customer_pricelists(staff_id, customer_name, status);
  `);
  console.log('✅ Added status, valid_from, valid_to to customer_pricelists');
}

async function down(client) {
  await client.query('DROP INDEX IF EXISTS idx_customer_pricelists_customer_status;');
  await client.query('DROP INDEX IF EXISTS idx_customer_pricelists_status;');
  await client.query('ALTER TABLE customer_pricelists DROP COLUMN IF EXISTS valid_to;');
  await client.query('ALTER TABLE customer_pricelists DROP COLUMN IF EXISTS valid_from;');
  await client.query('ALTER TABLE customer_pricelists DROP COLUMN IF EXISTS status;');
  console.log('✅ Dropped status, valid_from, valid_to from customer_pricelists');
}

module.exports = { up, down };
