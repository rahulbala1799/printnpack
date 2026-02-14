// Migration: Create audit_log table

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS audit_log (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id),
      action TEXT NOT NULL,
      resource TEXT NOT NULL,
      resource_id TEXT,
      details JSONB,
      ip_address TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at);
  `);

  console.log('✅ Created audit_log table with indexes');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS audit_log CASCADE;');
  console.log('✅ Dropped audit_log table');
}

module.exports = { up, down };
