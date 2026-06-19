#!/usr/bin/env node
/**
 * Import Google Search Console CSV exports into data/search-console/
 * Usage: node scripts/import-search-console.js [source-dir]
 */

import fs from 'fs';
import path from 'path';

const SOURCE = process.argv[2] || path.join(process.cwd(), 'uploads');
const DEST = path.join(process.cwd(), 'data', 'search-console');

const EXPECTED_PREFIXES = [
  'Queries',
  'Pages',
  'Chart',
  'Countries',
  'Devices',
  'Filters',
  'Search_appearance',
];

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Source directory not found: ${SOURCE}`);
    console.error('Usage: node scripts/import-search-console.js [source-dir]');
    process.exit(1);
  }

  fs.mkdirSync(DEST, { recursive: true });

  const files = fs.readdirSync(SOURCE).filter((f) => f.endsWith('.csv'));
  let imported = 0;

  for (const prefix of EXPECTED_PREFIXES) {
    const match = files.find((f) => f.startsWith(prefix));
    if (match) {
      const destName = `${prefix}.csv`;
      fs.copyFileSync(path.join(SOURCE, match), path.join(DEST, destName));
      console.log(`  ✓ ${match} → ${destName}`);
      imported += 1;
    }
  }

  if (imported === 0) {
    console.error('No Search Console CSV files found. Expected files starting with:');
    EXPECTED_PREFIXES.forEach((p) => console.error(`  - ${p}`));
    process.exit(1);
  }

  fs.writeFileSync(path.join(DEST, '.imported'), new Date().toISOString());
  console.log(`\nImported ${imported} files to ${DEST}`);
}

main();
