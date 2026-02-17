// Migration: Staff login (login_id, must_change_password, email nullable)
// Staff log in with User ID (login_id) + password; no email required.
// must_change_password forces password change on first login.

async function up(client) {
  await client.query(`
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS login_id TEXT UNIQUE,
    ADD COLUMN IF NOT EXISTS must_change_password BOOLEAN DEFAULT false
  `);

  await client.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_login_id ON users(login_id) WHERE login_id IS NOT NULL
  `);

  await client.query(`
    ALTER TABLE users ALTER COLUMN email DROP NOT NULL
  `);

  console.log('✅ Staff login columns and index added; email nullable');
}

async function down(client) {
  await client.query(`ALTER TABLE users ALTER COLUMN email SET NOT NULL`);
  await client.query(`DROP INDEX IF EXISTS idx_users_login_id`);
  await client.query(`
    ALTER TABLE users
    DROP COLUMN IF EXISTS login_id,
    DROP COLUMN IF EXISTS must_change_password
  `);
  console.log('✅ Reverted staff login columns');
}

module.exports = { up, down };
