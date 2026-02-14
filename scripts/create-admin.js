/**
 * Create a single admin user. SAFE: no public form, no URL.
 *
 * WHERE TO PUT THE PASSWORD (choose one):
 *
 * 1) TEMPORARILY IN .env.local (recommended)
 *    - Open .env.local and add these two lines (use your real password):
 *      ADMIN_EMAIL=rahulbala1799@gmail.com
 *      ADMIN_PASSWORD=YourChosenPassword
 *    - Run: node scripts/create-admin.js
 *    - Remove those two lines from .env.local and save.
 *    .env.local is gitignored so the password is never committed.
 *
 * 2) IN THE TERMINAL (one command)
 *    ADMIN_EMAIL=rahulbala1799@gmail.com ADMIN_PASSWORD=YourPassword node scripts/create-admin.js
 *    Note: password may end up in shell history; use option 1 if you prefer.
 *
 * Optional in .env.local or env: ADMIN_NAME=Rahul Bala
 */

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

async function createAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD;
  const name = (process.env.ADMIN_NAME || 'Admin').trim();

  if (!email) {
    console.error('❌ ADMIN_EMAIL is required.');
    console.error('   In .env.local add: ADMIN_EMAIL=your@email.com and ADMIN_PASSWORD=yourpassword');
    console.error('   Then run this script in your own terminal (not inside Cursor): node scripts/create-admin.js\n');
    process.exit(1);
  }

  if (!password || password.length < 8) {
    console.error('❌ ADMIN_PASSWORD is required and must be at least 8 characters. Set it in the environment, not on the command line.\n');
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set. Add it to .env.local\n');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log('🔐 Creating admin user...\n');

    const existing = await pool.query(
      'SELECT id, role FROM users WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existing.rows.length > 0) {
      const user = existing.rows[0];
      console.log('⚠️  User already exists with this email:', email);
      console.log('   Role:', user.role);
      console.log('   To reset password, use a separate script or update in DB.\n');
      process.exit(0);
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    await pool.query(
      `INSERT INTO users (email, password_hash, role, name, is_active)
       VALUES ($1, $2, 'admin', $3, true)`,
      [email.toLowerCase(), passwordHash, name]
    );

    console.log('✅ Admin user created successfully!');
    console.log('   Email:', email);
    console.log('   Name:', name);
    console.log('\n   You can log in at /login. Do not share your password.\n');
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createAdmin();
