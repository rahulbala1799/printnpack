# AGENTS.md

## Cursor Cloud specific instructions

PrintNPack is a single Next.js 13 (pages-router) app (`package.json` name `printnpack`).
It serves a public marketing/quote website plus authenticated `/admin` and `/staff`
dashboards (leads, plain-products, customers, pricelists, invoice/quote AI chat) backed
by PostgreSQL. Standard scripts live in `package.json` (`dev`, `build`, `start`, `lint`,
`migrate`); READMEs at the repo root document individual features.

### Node version (important gotcha)
The repo pins Node 18 (`.nvmrc` = 18.20.8) and `predev` runs `use-node-18.sh`. However the
VM has a `/exec-daemon/node` (v22) earlier in `PATH` that shadows nvm, so plain `node`
resolves to v22 even after `nvm use 18`. To run on the pinned Node 18, prepend nvm's bin
to PATH in your shell before running npm scripts:

```
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; unset npm_config_prefix
export PATH="$HOME/.nvm/versions/node/v18.20.8/bin:$PATH"   # node -> v18.20.8
```

### Database (PostgreSQL)
A local PostgreSQL 16 cluster is provisioned with SSL enabled and a `printnpack` role/db.
It is NOT auto-started on boot — start it each session:

```
sudo service postgresql start
```

Connection details live in `.env.local` (gitignored, persisted via the VM snapshot):
`DATABASE_URL=postgresql://printnpack:printnpack@127.0.0.1:5432/printnpack?sslmode=no-verify`.
Note: `lib/database.js` hard-codes `ssl: { rejectUnauthorized: false }`, so the URL must use
`sslmode=no-verify` (not `sslmode=require`) for the local self-signed cert — `require` triggers
`DEPTH_ZERO_SELF_SIGNED_CERT`. Migrations and a seeded admin user already exist in the snapshot;
re-run migrations any time with `node migrations/migrate.js --env=local` (idempotent).

Seeded admin login: `admin@printnpack.ie` / `Admin123!CHANGE` (DB-backed `/login` → `/admin`).

### Running / building (dev gotcha)
Run the dev server with `npm run dev` (serves on port 3000). Do NOT run `npm run build`
while the dev server is running: `build` overwrites `.next` with production chunks, after
which the dev server serves stale/404 JS and pages render blank. If that happens, stop dev,
`rm -rf .next`, and restart `npm run dev`.

### Lint
`npm run lint` (`next lint`) has no committed ESLint config and will block on an interactive
"How would you like to configure ESLint?" prompt. Lint is effectively not configured in this repo.

### Features needing external secrets (optional)
- Email (contact/quote form sending) needs `GMAIL_USER` / `GMAIL_APP_PASSWORD`. Without them
  `/api/contact` returns 500, but the lead is still saved to the DB first.
- Invoice/quote AI chat needs `AI_GATEWAY_API_KEY` (or `VERCEL_OIDC_TOKEN`).
Core auth + DB CRUD (login, leads, staff, plain-products, customers, pricelists) work without these.
