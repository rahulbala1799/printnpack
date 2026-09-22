// Quote, lead, and contact form funnel steps plus exit analysis.

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.funnel_events (
      id SERIAL PRIMARY KEY,
      event_name VARCHAR(64) NOT NULL DEFAULT 'funnel',
      form_type VARCHAR(40) NOT NULL,
      step VARCHAR(40) NOT NULL,
      page_path VARCHAR(300),
      page_url TEXT,
      session_id VARCHAR(64),
      product_id VARCHAR(160),
      product_name VARCHAR(200),
      traffic_source VARCHAR(80),
      device_type VARCHAR(20),
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_funnel_events_created
      ON analytics.funnel_events(created_at DESC)
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_funnel_events_form_step
      ON analytics.funnel_events(form_type, step, created_at DESC)
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_funnel_events_session
      ON analytics.funnel_events(session_id)
  `);
}

async function down(client) {
  await client.query(`DROP TABLE IF EXISTS analytics.funnel_events`);
}

module.exports = { up, down };
