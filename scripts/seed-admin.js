// Seed the first admin user
// Usage: node scripts/seed-admin.js

require('dotenv').config({ path: '.env.local' });
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

async function seedAdmin() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    const email = 'admin@printnpack.ie';
    const password = 'Admin123!CHANGE'; // CHANGE THIS BEFORE RUNNING
    const name = 'Admin User';

    console.log('🌱 Seeding admin user...\n');

    // Check if admin already exists
    const existing = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existing.rows.length > 0) {
      console.log('⚠️  Admin user already exists with email:', email);
      process.exit(0);
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Create admin
    await pool.query(
      `INSERT INTO users (email, password_hash, role, name, is_active)
       VALUES ($1, $2, 'admin', $3, true)`,
      [email, passwordHash, name]
    );

    console.log('✅ Admin user created successfully!');
    console.log('\nLogin credentials:');
    console.log('  Email:', email);
    console.log('  Password:', password);
    console.log('\n⚠️  IMPORTANT: Change this password immediately after first login!\n');
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seedAdmin();
