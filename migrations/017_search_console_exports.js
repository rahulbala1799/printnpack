// Persist Search Console Performance zips so serverless uploads survive.

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.search_console_exports (
      period_id VARCHAR(32) PRIMARY KEY,
      label TEXT,
      filter_value TEXT,
      search_type TEXT,
      start_date TEXT,
      end_date TEXT,
      day_count INTEGER,
      imported_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      files JSONB NOT NULL DEFAULT '{}'::jsonb
    )
  `);
}

async function down(client) {
  await client.query(`DROP TABLE IF EXISTS analytics.search_console_exports`);
}

module.exports = { up, down };
