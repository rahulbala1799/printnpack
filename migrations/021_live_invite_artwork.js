// City on visits, one agent invite per day, and artwork files from chat.

async function up(client) {
  await client.query(`
    ALTER TABLE analytics.page_visits
      ADD COLUMN IF NOT EXISTS city VARCHAR(80);
  `);
  await client.query(`
    ALTER TABLE analytics.user_sessions
      ADD COLUMN IF NOT EXISTS city VARCHAR(80);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.agent_invites (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(64),
      ip_address_hash VARCHAR(64) NOT NULL,
      page_path VARCHAR(500),
      message TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_agent_invites_ip_day
      ON analytics.agent_invites (ip_address_hash, created_at DESC);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS site_chat_artwork (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      chat_id UUID REFERENCES site_chats(id) ON DELETE SET NULL,
      session_id VARCHAR(64),
      filename TEXT NOT NULL,
      mime TEXT NOT NULL,
      bytes BYTEA NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_site_chat_artwork_chat
      ON site_chat_artwork (chat_id, created_at DESC);
  `);

  console.log('✅ Added live invite and artwork storage');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS site_chat_artwork;');
  await client.query('DROP TABLE IF EXISTS analytics.agent_invites;');
  await client.query('ALTER TABLE analytics.page_visits DROP COLUMN IF EXISTS city;');
  await client.query('ALTER TABLE analytics.user_sessions DROP COLUMN IF EXISTS city;');
  console.log('✅ Removed live invite and artwork storage');
}

module.exports = { up, down };
