// Simple migration runner
// Usage: node migrations/migrate.js

const envArg = process.argv.find((a) => a.startsWith('--env='));
const envName = envArg ? envArg.split('=')[1] : process.env.MIGRATE_ENV || 'local';
const envFile = envName === 'live' ? '.env.live' : envName === 'local' ? '.env.local' : `.env.${envName}`;
const fs = require('fs');
if (fs.existsSync(envFile)) {
  require('dotenv').config({ path: envFile });
  console.log(`📁 Using env file: ${envFile}`);
} else if (envName === 'live' && fs.existsSync('.env.local')) {
  require('dotenv').config({ path: '.env.local' });
  console.log('📁 .env.live not found — using .env.local for live migration');
} else {
  require('dotenv').config({ path: '.env.local' });
  console.log(`📁 ${envFile} not found — using .env.local`);
}
if (!process.env.DATABASE_URL) {
  console.log('⏭️  DATABASE_URL not set, skipping migrations');
  process.exit(0);
}
const { Pool } = require('pg');
const path = require('path');

async function runMigrations() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  const client = await pool.connect();

  try {
    console.log('🚀 Starting migrations...\n');

    // Create migrations tracking table
    await client.query(`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        applied_at TIMESTAMPTZ DEFAULT now()
      );
    `);

    // Get list of migration files
    const migrationsDir = __dirname;
    const files = fs.readdirSync(migrationsDir)
      .filter(f => f.endsWith('.js') && f !== 'migrate.js')
      .sort();

    for (const file of files) {
      const name = file.replace('.js', '');

      // Check if already applied
      const result = await client.query(
        'SELECT id FROM migrations WHERE name = $1',
        [name]
      );

      if (result.rows.length > 0) {
        console.log(`⏭️  Skipping ${name} (already applied)`);
        continue;
      }

      // Run migration
      console.log(`▶️  Running ${name}...`);
      const migration = require(path.join(migrationsDir, file));

      await client.query('BEGIN');
      try {
        await migration.up(client);
        await client.query(
          'INSERT INTO migrations (name) VALUES ($1)',
          [name]
        );
        await client.query('COMMIT');
        console.log(`✅ ${name} completed\n`);
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      }
    }

    console.log('🎉 All migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

runMigrations();
