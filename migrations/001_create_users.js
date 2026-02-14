// Migration: Create users table

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('admin', 'staff', 'customer')),
      name TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      is_active BOOLEAN DEFAULT true,
      email_verified_at TIMESTAMPTZ,
      password_reset_token TEXT,
      password_reset_expires TIMESTAMPTZ,
      last_login_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_email ON users(email);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);
  `);

  console.log('✅ Created users table with indexes');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS users CASCADE;');
  console.log('✅ Dropped users table');
}

module.exports = { up, down };
