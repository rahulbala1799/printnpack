# PrintNPack – Auth Setup Guide

## Overview

Custom **JWT + bcrypt** authentication for PrintNPack with three roles: **Admin**, **Staff**, and **Customer**. The public website remains fully open. Auth protects the customer portal, staff panel, and admin dashboard.

This sits on top of the existing Next.js **Pages Router** codebase with **Neon Postgres** already wired up via `lib/database.js`.

---

## Codebase: Router and database

- **Router:** The PrintNPack codebase uses the **Pages Router** (the `pages/` directory). It does **not** use the App Router (`app/` directory). All routes—including API routes—live under `pages/` (e.g. `pages/index.js`, `pages/api/contact.js`). Auth routes follow the same pattern (e.g. `pages/login.js`, `pages/api/auth/...`).

- **Neon Postgres:** Neon Postgres is **already wired up**. The app has a shared connection pool in `lib/database.js` that uses `process.env.DATABASE_URL` and exports `query`, `getRow`, `getRows`, `transaction`, and the `pool` itself. For auth we reuse this existing setup; no new connection wiring is required. Ensure `DATABASE_URL` is set in `.env.local` (and in Vercel) for the app and for running migrations.

---

## Security principles

1. **Never commit credentials**  
   Database URLs and secrets live only in environment variables (e.g. `.env.local`). They are **not** hardcoded, not in READMEs, and not in the repo.

2. **Database URL usage**  
   The Postgres connection string is used only where needed: **migrations** (run locally with env set) and **runtime** (app reads `process.env.DATABASE_URL`). No URL in code or in this README.

3. **Secrets in env only**  
   `DATABASE_URL`, `JWT_SECRET`, and any API keys come from env (Vercel / `.env.local`). Do not put real values in this repo.

---

## Architecture

**Public website (no auth)**

| Route        | Description        |
|-------------|--------------------|
| `/`         | Homepage (public)  |
| `/products` | Product pages      |
| `/contact`  | Contact form       |

**Auth-protected areas**

| Area           | Path           | Role     |
|----------------|----------------|----------|
| Customer portal| `/customer/*`  | customer |
| Staff panel    | `/staff/*`     | staff    |
| Admin dashboard| `/admin/*`     | admin    |

**Customer:** `/customer/orders`, `/customer/quotes`, `/customer/account`  
**Staff:** `/staff/orders`, `/staff/quotes`, `/staff/jobs`  
**Admin:** `/admin/users`, `/admin/orders`, `/admin/settings`, `/admin/reports`

---

## Roles and permissions

| Action                    | Admin | Staff | Customer |
|---------------------------|-------|-------|----------|
| View public website       | ✅    | ✅    | ✅       |
| Place orders / request quotes | ✅ | ✅    | ✅       |
| View own orders & quotes   | ✅    | ✅    | ✅       |
| View ALL orders & quotes   | ✅    | ✅    | ❌       |
| Update order status        | ✅    | ✅    | ❌       |
| Manage products / content  | ✅    | ✅    | ❌       |
| Create / edit users        | ✅    | ❌    | ❌       |
| Assign roles               | ✅    | ❌    | ❌       |
| View reports & analytics   | ✅    | ❌    | ❌       |
| System settings            | ✅    | ❌    | ❌       |

---

## Tenant separation (data isolation)

This is critical. All roles share one database, but each role must only see data they are allowed to see. Without this, a customer could access another customer's orders or staff-level data.

**Rules**

- **Customers** can only see their own data. Every customer-facing query MUST filter by the logged-in user's ID from the JWT. No exceptions.
- **Staff** can see all orders/quotes but cannot see other users' accounts or admin settings. Staff queries for orders do not filter by user ID; they have no access to the `users` table except reading their own profile.
- **Admin** has unrestricted access.
- Enforcement is in **API routes** at the server. The client must never receive data it should not see; filtering only in the frontend is NOT security.

**Example – correct vs wrong**

```sql
-- CORRECT: Customer sees only their orders
SELECT * FROM orders WHERE customer_id = $1;  -- $1 = logged-in user's ID from JWT

-- WRONG: Never do this on a customer-facing endpoint
SELECT * FROM orders;
SELECT * FROM orders WHERE id = $1;  -- Order ID alone is not enough; customer could guess IDs
```

**Tenant separation checklist**

- [ ] Every customer API route filters by `user.id` from the JWT (never from request body or query params).
- [ ] Order detail endpoints check `customer_id = user.id` for customers (not just order ID).
- [ ] Customers cannot access `/api/admin/*` or `/api/staff/*`.
- [ ] Staff cannot access `/api/admin/*`.
- [ ] User listing and role management restricted to admin only.
- [ ] No endpoint returns all users to non-admin roles.
- [ ] File uploads (quotes, artwork) scoped to the user who uploaded them.
- [ ] Database queries never trust client-supplied user IDs for ownership checks.

---

## How it works in practice

Every protected API route follows this pattern:

```javascript
// pages/api/orders/index.js
import { withAuth } from '../../../lib/auth';
import { query } from '../../../lib/database';

async function handler(req, res) {
  const user = req.user; // set by withAuth

  if (user.role === 'customer') {
    const orders = await query(
      'SELECT * FROM orders WHERE customer_id = $1 ORDER BY created_at DESC',
      [user.id]
    );
    return res.json(orders.rows);
  }

  if (user.role === 'staff' || user.role === 'admin') {
    const orders = await query(
      'SELECT * FROM orders ORDER BY created_at DESC'
    );
    return res.json(orders.rows);
  }

  return res.status(403).json({ error: 'Forbidden' });
}

export default withAuth(handler);
```

---

## Database schema

### `users` table

```sql
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('admin', 'staff', 'customer')),
  name TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  is_active BOOLEAN DEFAULT true,
  email_verified_at TIMESTAMPTZ,
  password_reset_token TEXT,
  password_reset_expires TIMESTAMPTZ,
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_is_active ON users(is_active);
```

### `orders` table (relevant columns for tenant separation)

Orders must have `customer_id` linking to `users`. This column enforces tenant separation.

```sql
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES users(id),
  order_number TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  total_amount DECIMAL(10,2),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
```

### `audit_log` table (recommended)

Track who did what for security and debugging.

```sql
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  action TEXT NOT NULL,
  resource TEXT NOT NULL,
  resource_id TEXT,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX idx_audit_log_created_at ON audit_log(created_at);
```

---

## Where the database URL is used

- **Migrations:** The migration runner reads `process.env.DATABASE_URL` only when you run migrations locally. No URL in repo or in this README.
- **App runtime:** `lib/database.js` uses `process.env.DATABASE_URL` to create the pool. On Vercel, set this in Project → Settings → Environment Variables.

Never log or expose `DATABASE_URL` in responses or in the client.

---

## Environment variables

Add these to `.env.local` (already gitignored) and to Vercel environment settings. Do **not** put real values in this repo.

```bash
# Already exists – use your Neon URL only in env, never in code
DATABASE_URL=postgresql://...

# New – generate a strong random string (at least 32 characters)
# Run: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET=your_generated_secret_here

# Optional (defaults shown)
JWT_EXPIRY=7d
```

Ensure `.env` and `.env.local` (and any file with secrets) are in `.gitignore`.

---

## File structure

New files to add (existing `lib/database.js` unchanged):

```
lib/
  database.js              ← EXISTS (no changes needed)
  auth.js                   ← NEW: JWT sign/verify, password hash, cookie helpers
  withAuth.js               ← NEW: API route wrapper that checks JWT and role

pages/
  login.js                  ← NEW: Single login page for all roles

  customer/
    index.js                ← NEW: Customer dashboard
    orders.js               ← NEW: Customer order list
    account.js              ← NEW: Customer profile/settings

  staff/
    index.js                ← NEW: Staff dashboard
    orders.js               ← NEW: Staff order management

  admin/
    index.js                ← NEW: Admin dashboard
    users.js                ← NEW: User management
    orders.js               ← NEW: Admin order view

  api/
    auth/
      login.js              ← NEW: POST email + password, returns JWT cookie
      register.js           ← NEW: POST create customer account
      logout.js             ← NEW: POST clears JWT cookie
      me.js                 ← NEW: GET current user from JWT
    customer/
      orders.js             ← NEW: GET orders (filtered by customer_id)
    staff/
      orders.js             ← NEW: GET all orders (staff+admin only)
    admin/
      users.js              ← NEW: CRUD users (admin only)

migrations/
  001_create_users.js       ← NEW: Users table migration
  002_create_audit_log.js   ← NEW: Audit log migration
  migrate.js                ← NEW: Migration runner script

scripts/
  seed-admin.js             ← NEW: Seed first admin (run once, change password)
```

---

## Auth flow

**Login**

1. User visits `/login`, enters email + password.
2. `POST /api/auth/login`.
3. Server checks: email exists, `bcrypt.compare(password, password_hash)` passes, `is_active = true`.
4. Server creates JWT with `{ id, email, role }`, sets it as httpOnly, secure, SameSite cookie.
5. Server returns `{ role }` in body; client redirects: admin → `/admin`, staff → `/staff`, customer → `/customer`.

**Every protected request**

1. Request hits an API route wrapped with `withAuth()`.
2. `withAuth` reads JWT from httpOnly cookie, verifies signature and expiry.
3. Loads user from DB (to check `is_active` and current role).
4. If invalid/expired → 401; if role not allowed → 403.
5. Handler runs with `req.user` set.

**Logout**

1. `POST /api/auth/logout` clears the JWT cookie (Max-Age=0).
2. Client redirects to `/login`.

---

## Implementation: key files

### `lib/auth.js`

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
const SALT_ROUNDS = 12;

async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

function setAuthCookie(res, token) {
  res.setHeader('Set-Cookie', [
    `token=${token}; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Lax${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  ]);
}

function clearAuthCookie(res) {
  res.setHeader('Set-Cookie', [
    `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${
      process.env.NODE_ENV === 'production' ? '; Secure' : ''
    }`
  ]);
}

function getTokenFromCookies(req) {
  const cookies = req.headers.cookie || '';
  const match = cookies.match(/token=([^;]+)/);
  return match ? match[1] : null;
}

module.exports = {
  hashPassword,
  verifyPassword,
  signToken,
  verifyToken,
  setAuthCookie,
  clearAuthCookie,
  getTokenFromCookies,
};
```

### `lib/withAuth.js`

Usage: `export default withAuth(handler, { roles: ['admin', 'staff'] })`

```javascript
const { verifyToken, getTokenFromCookies } = require('./auth');
const { getRow } = require('./database');

function withAuth(handler, options = {}) {
  const { roles } = options;

  return async function (req, res) {
    const token = getTokenFromCookies(req);
    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const payload = verifyToken(token);
    if (!payload) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    const user = await getRow(
      'SELECT id, email, role, name, is_active FROM users WHERE id = $1',
      [payload.id]
    );

    if (!user || !user.is_active) {
      return res.status(401).json({ error: 'Account not found or deactivated' });
    }

    if (roles && !roles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
    }

    req.user = user;
    return handler(req, res);
  };
}

module.exports = { withAuth };
```

**Note:** The rest of the codebase (e.g. `lib/database.js`) uses ESM (`import`/`export`). When adding these files you can keep CommonJS as above or convert to ESM for consistency.

---

## Setup steps

1. **Install dependencies**
   ```bash
   npm install bcrypt jsonwebtoken
   ```

2. **Generate JWT_SECRET**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```
   Add the output to `.env.local` as `JWT_SECRET=...` and to Vercel → Project → Settings → Environment Variables.

3. **Run the migration**
   ```bash
   node migrations/migrate.js
   ```
   This creates the `users` (and optionally `audit_log`) table. Use `DATABASE_URL` from env only; do not commit it.

4. **Seed the first admin**
   The public register endpoint only creates customers. Seed the first admin manually:
   ```bash
   node scripts/seed-admin.js
   ```
   Example script (change the password before running, and again in the admin panel once built):

   ```javascript
   // scripts/seed-admin.js
   const { hashPassword } = require('../lib/auth');
   const { query } = require('../lib/database');

   async function seedAdmin() {
     const email = 'admin@printnpack.ie';
     const password = 'CHANGE_THIS_PASSWORD';
     const name = 'Admin';
     const hash = await hashPassword(password);
     await query(
       `INSERT INTO users (email, password_hash, role, name, is_active)
        VALUES ($1, $2, 'admin', $3, true)
        ON CONFLICT (email) DO NOTHING`,
       [email, hash, name]
     );
     console.log('Admin user created (or already exists)');
     process.exit(0);
   }
   seedAdmin().catch(console.error);
   ```

5. **Add the auth files**  
   Add the files listed in the File Structure section. Start with: `lib/auth.js`, `lib/withAuth.js`, `pages/api/auth/login.js`, `pages/api/auth/me.js`, `pages/api/auth/logout.js`, `pages/login.js`.

6. **Test the flow**
   ```bash
   # Login
   curl -X POST http://localhost:3000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@printnpack.ie","password":"your_password"}'

   # Who's logged in (use cookie from login response)
   curl http://localhost:3000/api/auth/me -H "Cookie: token=the_jwt_token_here"
   ```

---

## Security checklist

- [ ] JWT_SECRET is at least 32 characters and stored only in env.
- [ ] `.env` and `.env.local` are in `.gitignore`.
- [ ] Passwords hashed with bcrypt (12 rounds); never stored or logged in plain text.
- [ ] JWT stored in httpOnly, secure (in production), SameSite cookie.
- [ ] Every customer endpoint filters by `user.id` from the JWT (tenant isolation).
- [ ] Every staff/admin endpoint uses `withAuth(handler, { roles: [...] })`.
- [ ] No endpoint trusts client-supplied user IDs for ownership.
- [ ] Login endpoint is rate limited (Vercel or custom middleware).
- [ ] Admin seed password changed after first login.
- [ ] `is_active` checked on every request (not just at login).
- [ ] Audit log records sensitive actions (user creation, role changes, deletions).
- [ ] HTTPS enforced in production (Vercel handles this).
- [ ] No database URLs or secrets in code or committed files.

---

## What NOT to do

| Bad practice | Why it's dangerous |
|--------------|---------------------|
| Store JWT in localStorage | XSS can steal the token. |
| Trust client-sent user ID for ownership | Customer A can view Customer B's orders. |
| Check roles only on the frontend | Anyone can call the API directly. |
| Same endpoint for all roles without filtering | Data leaks across tenants. |
| Skip `is_active` check after login | Deactivated user keeps access until token expires. |
| Log passwords or tokens | Credential exposure in logs. |
| Hardcode JWT_SECRET in source | Anyone with repo access can forge tokens. |

---

## Next steps after auth is live

- Customer registration page – public signup creating `role: 'customer'` accounts.
- Password reset – token-based “forgot password” flow via email.
- Admin user management – create staff accounts, deactivate users, change roles.
- Audit logging – record login attempts, role changes, order updates.
- Rate limiting – protect login from brute force.
- Email verification – optional: verify email before allowing orders.
