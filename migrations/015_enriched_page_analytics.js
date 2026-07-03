// Enriched page analytics: product families, traffic sources, landing pages

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    ALTER TABLE analytics.page_visits
      ADD COLUMN IF NOT EXISTS page_path VARCHAR(500),
      ADD COLUMN IF NOT EXISTS page_type VARCHAR(30),
      ADD COLUMN IF NOT EXISTS product_family VARCHAR(80),
      ADD COLUMN IF NOT EXISTS product_slug VARCHAR(120),
      ADD COLUMN IF NOT EXISTS product_name VARCHAR(200),
      ADD COLUMN IF NOT EXISTS traffic_source VARCHAR(80),
      ADD COLUMN IF NOT EXISTS referrer_domain VARCHAR(200),
      ADD COLUMN IF NOT EXISTS utm_source VARCHAR(100),
      ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(100),
      ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(200),
      ADD COLUMN IF NOT EXISTS is_landing_page BOOLEAN DEFAULT false;
  `);

  await client.query(`
    ALTER TABLE analytics.user_sessions
      ADD COLUMN IF NOT EXISTS entry_page_path VARCHAR(500),
      ADD COLUMN IF NOT EXISTS entry_traffic_source VARCHAR(80),
      ADD COLUMN IF NOT EXISTS entry_referrer_domain VARCHAR(200),
      ADD COLUMN IF NOT EXISTS entry_product_family VARCHAR(80),
      ADD COLUMN IF NOT EXISTS utm_source VARCHAR(100),
      ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(100),
      ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(200);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_page_path
      ON analytics.page_visits(page_path);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_product_family
      ON analytics.page_visits(product_family);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_traffic_source
      ON analytics.page_visits(traffic_source);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_is_landing
      ON analytics.page_visits(is_landing_page) WHERE is_landing_page = true;
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_user_sessions_entry_page
      ON analytics.user_sessions(entry_page_path);
  `);

  console.log('✅ Added enriched analytics columns');
}

async function down(client) {
  await client.query(`
    ALTER TABLE analytics.page_visits
      DROP COLUMN IF EXISTS page_path,
      DROP COLUMN IF EXISTS page_type,
      DROP COLUMN IF EXISTS product_family,
      DROP COLUMN IF EXISTS product_slug,
      DROP COLUMN IF EXISTS product_name,
      DROP COLUMN IF EXISTS traffic_source,
      DROP COLUMN IF EXISTS referrer_domain,
      DROP COLUMN IF EXISTS utm_source,
      DROP COLUMN IF EXISTS utm_medium,
      DROP COLUMN IF EXISTS utm_campaign,
      DROP COLUMN IF EXISTS is_landing_page;
  `);

  await client.query(`
    ALTER TABLE analytics.user_sessions
      DROP COLUMN IF EXISTS entry_page_path,
      DROP COLUMN IF EXISTS entry_traffic_source,
      DROP COLUMN IF EXISTS entry_referrer_domain,
      DROP COLUMN IF EXISTS entry_product_family,
      DROP COLUMN IF EXISTS utm_source,
      DROP COLUMN IF EXISTS utm_medium,
      DROP COLUMN IF EXISTS utm_campaign;
  `);

  console.log('✅ Removed enriched analytics columns');
}

module.exports = { up, down };
