/**
 * Reset password for an existing user (by email).
 * Uses ADMIN_EMAIL and ADMIN_PASSWORD from .env.local.
 *
 * Usage: node scripts/reset-password.js
 */

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

async function resetPassword() {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password || password.length < 8) {
    console.error('❌ Set ADMIN_EMAIL and ADMIN_PASSWORD (8+ chars) in .env.local, then run: node scripts/reset-password.js\n');
    process.exit(1);
  }

  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL not set in .env.local\n');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const result = await pool.query(
      'UPDATE users SET password_hash = $1, updated_at = now() WHERE email = $2 RETURNING id',
      [hash, email.toLowerCase()]
    );

    if (result.rowCount === 0) {
      console.error('❌ No user found with email:', email);
      process.exit(1);
    }

    console.log('✅ Password updated for', email);
    console.log('   Log in at /login with this email and your new password.\n');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

resetPassword();
