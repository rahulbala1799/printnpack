#!/usr/bin/env node
/**
 * Add AI Gateway key to local env files (does not print the key).
 * Usage: AI_GATEWAY_API_KEY=your_key node scripts/setup-ai-gateway-env.js
 */
const fs = require('fs');
const path = require('path');

const key = process.env.AI_GATEWAY_API_KEY?.trim();
if (!key) {
  console.error('Usage: AI_GATEWAY_API_KEY=your_key node scripts/setup-ai-gateway-env.js');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const model = process.env.INVOICE_AI_MODEL || 'google/gemini-2.5-flash';
const lines = [
  `AI_GATEWAY_API_KEY=${key}`,
  `INVOICE_AI_MODEL=${model}`,
];

for (const file of ['.env.local', '.env.live']) {
  const fp = path.join(root, file);
  let content = fs.existsSync(fp) ? fs.readFileSync(fp, 'utf8') : '';
  for (const [k] of lines.map((l) => l.split('='))) {
    const re = new RegExp(`^${k}=.*$`, 'm');
    content = content.replace(re, '');
  }
  content = content.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n\n' + lines.join('\n') + '\n';
  fs.writeFileSync(fp, content);
  console.log(`✅ Updated ${file} (AI_GATEWAY_API_KEY + INVOICE_AI_MODEL)`);
}

console.log('\nProduction: add the same key in Vercel → Project → Settings → Environment Variables');
console.log('Or run: vercel login && echo "$AI_GATEWAY_API_KEY" | vercel env add AI_GATEWAY_API_KEY production');
