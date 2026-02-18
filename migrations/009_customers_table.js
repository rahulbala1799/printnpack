// Migration: Customers table (B2B/shop) and link from customer_pricelists

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS customers (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name          TEXT NOT NULL,
      contact_name  TEXT,
      phone         TEXT,
      email         TEXT,
      address       TEXT,
      notes         TEXT,
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customers_name ON customers(name);
  `);

  await client.query(`
    ALTER TABLE customer_pricelists
    ADD COLUMN IF NOT EXISTS customer_id UUID REFERENCES customers(id) ON DELETE SET NULL;
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_pricelists_customer_id ON customer_pricelists(customer_id);
  `);

  console.log('✅ Created customers table and customer_id on customer_pricelists');
}

async function down(client) {
  await client.query('ALTER TABLE customer_pricelists DROP COLUMN IF EXISTS customer_id;');
  await client.query('DROP TABLE IF EXISTS customers CASCADE;');
  console.log('✅ Dropped customer_id and customers table');
}

module.exports = { up, down };
