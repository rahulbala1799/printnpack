/**
 * Import cost prices into plain_products.cost_per_case.
 * Reads JSON lines from stdin: { "code": "160003", "cost": 22.50 }
 * Or pass path to a file: node scripts/import-cost-to-db.js path/to/costs.jsonl
 *
 * Usage:
 *   python scripts/export-cost-from-price-adj.py "Price Adj September 2025.xlsx" | node scripts/import-cost-to-db.js
 *   node scripts/import-cost-to-db.js costs.jsonl
 */
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { Pool } = require('pg');

require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set. Use .env.local or set the env var.');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function readJsonLines(stream) {
  const lines = [];
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  for await (const line of rl) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    try {
      const obj = JSON.parse(trimmed);
      if (obj.code != null && obj.cost != null) lines.push({ code: String(obj.code).trim(), cost: Number(obj.cost) });
    } catch (_) {}
  }
  return lines;
}

async function run() {
  let stream;
  if (process.argv[2]) {
    const filePath = path.resolve(process.argv[2]);
    if (!fs.existsSync(filePath)) {
      console.error('File not found:', filePath);
      process.exit(1);
    }
    stream = fs.createReadStream(filePath);
  } else {
    stream = process.stdin;
  }
  const rows = await readJsonLines(stream);
  if (rows.length === 0) {
    console.log('No cost rows to import.');
    await pool.end();
    return;
  }
  const client = await pool.connect();
  let updated = 0;
  let skipped = 0;
  for (const { code, cost } of rows) {
    const res = await client.query(
      'UPDATE plain_products SET cost_per_case = $1, updated_at = now() WHERE id = $2',
      [cost, code]
    );
    if (res.rowCount > 0) updated++;
    else skipped++;
  }
  client.release();
  await pool.end();
  console.log(`Updated ${updated} products with cost_per_case. ${skipped} codes had no matching product.`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
