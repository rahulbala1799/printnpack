// Migration: session quoted-items ledger + message metadata for rich breakdowns

async function up(client) {
  await client.query(`
    ALTER TABLE invoice_sessions
    ADD COLUMN IF NOT EXISTS quoted_items JSONB NOT NULL DEFAULT '[]';
  `);

  await client.query(`
    ALTER TABLE invoice_session_messages
    ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}';
  `);
}

async function down(client) {
  await client.query(`ALTER TABLE invoice_session_messages DROP COLUMN IF EXISTS metadata;`);
  await client.query(`ALTER TABLE invoice_sessions DROP COLUMN IF EXISTS quoted_items;`);
}

module.exports = { up, down };
