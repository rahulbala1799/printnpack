// Migration: Track phone (tel:) link clicks for admin reporting

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.phone_click_events (
      id SERIAL PRIMARY KEY,
      page_url VARCHAR(500) NOT NULL,
      page_path VARCHAR(200),
      page_title VARCHAR(200),
      phone_href VARCHAR(80) NOT NULL,
      link_text VARCHAR(300),
      location VARCHAR(100),
      session_id VARCHAR(64),
      device_type VARCHAR(20),
      referrer VARCHAR(500),
      user_agent TEXT,
      ip_address_hash VARCHAR(64),
      clicked_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_phone_click_events_clicked_at
      ON analytics.phone_click_events (clicked_at DESC);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_phone_click_events_page_path
      ON analytics.phone_click_events (page_path);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_phone_click_events_location
      ON analytics.phone_click_events (location);
  `);

  console.log('✅ Created analytics.phone_click_events table');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS analytics.phone_click_events;');
  console.log('✅ Dropped analytics.phone_click_events table');
}

module.exports = { up, down };
