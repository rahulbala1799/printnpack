// Migration: Customer pricelists for staff (sales on the road)
// Tables: customer_pricelists (one per customer), items stored as JSONB

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS customer_pricelists (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      staff_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      customer_name TEXT NOT NULL,
      notes         TEXT,
      items         JSONB NOT NULL DEFAULT '[]',
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_pricelists_staff_id ON customer_pricelists(staff_id);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_pricelists_updated_at ON customer_pricelists(updated_at DESC);
  `);

  console.log('✅ Created customer_pricelists table with indexes');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS customer_pricelists CASCADE;');
  console.log('✅ Dropped customer_pricelists table');
}

module.exports = { up, down };
