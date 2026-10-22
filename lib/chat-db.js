import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.SUPABASE_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 3,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 8000,
});

pool.on('error', (err) => {
  console.error('Chat database error', err.message);
});

export async function query(text, params) {
  return pool.query(text, params);
}

export async function getRow(text, params) {
  const result = await query(text, params);
  return result.rows[0];
}

export async function getRows(text, params) {
  const result = await query(text, params);
  return result.rows;
}
