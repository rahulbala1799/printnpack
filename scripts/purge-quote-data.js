/**
 * Delete all quote sessions, messages, quotes, and invoices (keeps pricing rules & customer saved prices).
 * Usage: node scripts/purge-quote-data.js
 *        MIGRATE_ENV=live node scripts/purge-quote-data.js
 */

const envArg = process.argv.find((a) => a.startsWith('--env='));
const envName = envArg ? envArg.split('=')[1] : process.env.MIGRATE_ENV || 'local';
const envFile = envName === 'live' ? '.env.live' : '.env.local';
const fs = require('fs');
if (fs.existsSync(envFile)) {
  require('dotenv').config({ path: envFile });
  console.log(`Using ${envFile}`);
} else {
  require('dotenv').config({ path: '.env.local' });
}

const { Pool } = require('pg');

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL not set');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  const client = await pool.connect();

  try {
    const before = await client.query(`
      SELECT
        (SELECT COUNT(*)::int FROM quotes) AS quotes,
        (SELECT COUNT(*)::int FROM invoice_sessions) AS sessions,
        (SELECT COUNT(*)::int FROM invoices) AS invoices,
        (SELECT COUNT(*)::int FROM invoice_session_messages) AS messages
    `);
    console.log('Before:', before.rows[0]);

    await client.query('BEGIN');
    await client.query('DELETE FROM customer_price_snapshots');
    await client.query('DELETE FROM invoices');
    await client.query('DELETE FROM invoice_session_messages');
    await client.query('DELETE FROM invoice_sessions');
    await client.query('DELETE FROM quotes');
    await client.query('COMMIT');

    const after = await client.query(`
      SELECT
        (SELECT COUNT(*)::int FROM quotes) AS quotes,
        (SELECT COUNT(*)::int FROM invoice_sessions) AS sessions,
        (SELECT COUNT(*)::int FROM invoices) AS invoices,
        (SELECT COUNT(*)::int FROM invoice_session_messages) AS messages
    `);
    console.log('After:', after.rows[0]);
    console.log('Done — quote data cleared (pricing rules & customer catalogs kept).');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error(e);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

main();
