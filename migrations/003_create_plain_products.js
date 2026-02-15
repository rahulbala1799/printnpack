// Migration: Create plain_products table (mirrors site data for admin; synced via cron)

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS plain_products (
      id            TEXT PRIMARY KEY,
      name          TEXT NOT NULL,
      category      TEXT NOT NULL,
      description   TEXT,
      qty_per_case  TEXT,
      case_tiers    JSONB NOT NULL DEFAULT '[]',
      image_src     TEXT,
      images        TEXT[],
      is_active     BOOLEAN DEFAULT true,
      sort_order    INT DEFAULT 0,
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_plain_products_category ON plain_products(category);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_plain_products_is_active ON plain_products(is_active);
  `);

  console.log('✅ Created plain_products table with indexes');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS plain_products CASCADE;');
  console.log('✅ Dropped plain_products table');
}

module.exports = { up, down };
