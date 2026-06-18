#!/usr/bin/env node
/** Merge dev-critical vars from .env.live into .env.local after vercel env pull */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const live = fs.readFileSync(path.join(root, '.env.live'), 'utf8');
let local = fs.readFileSync(path.join(root, '.env.local'), 'utf8');

const KEYS = [
  'JWT_SECRET', 'JWT_EXPIRY', 'GMAIL_USER', 'GMAIL_APP_PASSWORD',
  'CRON_SECRET', 'ADMIN_EMAIL', 'ADMIN_PASSWORD', 'INVOICE_AI_MODEL',
];

function getVal(content, key) {
  const m = content.match(new RegExp(`^${key}=(.*)$`, 'm'));
  return m ? m[1] : null;
}

function setVal(content, key, val) {
  const line = `${key}=${val}`;
  if (new RegExp(`^${key}=`, 'm').test(content)) {
    return content.replace(new RegExp(`^${key}=.*$`, 'm'), line);
  }
  return content.trimEnd() + '\n' + line + '\n';
}

for (const key of KEYS) {
  const val = key === 'INVOICE_AI_MODEL'
    ? (getVal(local, key) || getVal(live, key) || 'google/gemini-2.5-flash')
    : getVal(live, key);
  if (val != null) local = setVal(local, key, val);
}

if (!getVal(live, 'INVOICE_AI_MODEL')) {
  const liveContent = setVal(live, 'INVOICE_AI_MODEL', 'google/gemini-2.5-flash');
  fs.writeFileSync(path.join(root, '.env.live'), liveContent);
}

fs.writeFileSync(path.join(root, '.env.local'), local);
console.log('✅ Merged dev vars into .env.local');
console.log('✅ AI auth:', getVal(local, 'VERCEL_OIDC_TOKEN') ? 'VERCEL_OIDC_TOKEN present' : 'missing');
console.log('✅ JWT:', getVal(local, 'JWT_SECRET') ? 'present' : 'missing');
