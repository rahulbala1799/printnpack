# Auth System – Build Summary (Last Commit)

This document describes **what was built, migrated, and coded** in the authentication system commit.

**Commit:** `3378a1e` — *Add complete authentication system with JWT and bcrypt*  
**Branch:** `main`  
**Scope:** 18 files changed, 1,828 insertions

---

## What Was Built

### Features

| Feature | Description |
|--------|-------------|
| **Multi-role auth** | Three roles: **admin**, **staff**, **customer**. Single login page; redirect by role after sign-in. |
| **JWT authentication** | Tokens signed with `JWT_SECRET`, stored in httpOnly cookie (7-day expiry). No localStorage. |
| **Password security** | Bcrypt hashing (12 rounds). Passwords never stored or logged in plain text. |
| **Login page** | Public `/login` with email + password, Formik + Yup validation, error handling, link to register. |
| **Role-based dashboards** | Placeholder dashboards: `/admin`, `/staff`, `/customer` with logout and role-specific nav. |
| **Auth API** | Login, logout, current user (`/me`), and public customer registration. |
| **Protected routes** | `withAuth(handler, { roles })` wrapper for API routes; loads user from JWT and enforces role. |
| **Tenant isolation** | Design and docs for customer-only data (all customer queries must filter by `user.id`). |
| **Migrations** | Node script that runs SQL migrations in order and records them in a `migrations` table. |
| **Admin seed** | One-time script to create the first admin user (email/password in script; change after first login). |

### Security

- All secrets in env (`DATABASE_URL`, `JWT_SECRET`). No credentials in repo.
- `.env` and `.env.local` in `.gitignore`.
- Cookie: HttpOnly, Secure in production, SameSite=Lax.
- `is_active` checked on every authenticated request.
- Auth docs and checklist in `AUTH_SETUP_README.md`.

---

## What Was Migrated (Database)

Migrations run with: `node migrations/migrate.js` (reads `DATABASE_URL` from `.env.local`).

### 1. `users` table

| Column | Type | Notes |
|--------|------|--------|
| `id` | UUID | PK, `gen_random_uuid()` |
| `email` | TEXT | UNIQUE, NOT NULL |
| `password_hash` | TEXT | NOT NULL |
| `role` | TEXT | `admin` \| `staff` \| `customer`, NOT NULL |
| `name` | TEXT | NOT NULL |
| `phone` | TEXT | optional |
| `company` | TEXT | optional |
| `is_active` | BOOLEAN | DEFAULT true |
| `email_verified_at` | TIMESTAMPTZ | optional |
| `password_reset_token` | TEXT | optional |
| `password_reset_expires` | TIMESTAMPTZ | optional |
| `last_login_at` | TIMESTAMPTZ | optional |
| `created_at` | TIMESTAMPTZ | DEFAULT now() |
| `updated_at` | TIMESTAMPTZ | DEFAULT now() |

**Indexes:** `idx_users_email` (UNIQUE), `idx_users_role`, `idx_users_is_active`.

### 2. `migrations` table

Tracks applied migrations: `id`, `name`, `applied_at`. Used by the migration runner so each migration runs once.

### 3. `audit_log` table

| Column | Type | Notes |
|--------|------|--------|
| `id` | UUID | PK |
| `user_id` | UUID | FK → users(id) |
| `action` | TEXT | NOT NULL |
| `resource` | TEXT | NOT NULL |
| `resource_id` | TEXT | optional |
| `details` | JSONB | optional |
| `ip_address` | TEXT | optional |
| `created_at` | TIMESTAMPTZ | DEFAULT now() |

**Indexes:** `idx_audit_log_user_id`, `idx_audit_log_created_at`.

---

## What Was Coded (Files)

### New files

| Path | Purpose |
|------|--------|
| **lib/auth.js** | JWT sign/verify, bcrypt hash/verify, cookie helpers: `setAuthCookie`, `clearAuthCookie`, `getTokenFromCookies`. Uses `JWT_SECRET`, `JWT_EXPIRY`. |
| **lib/withAuth.js** | API middleware: read JWT from cookie, verify, load user from DB, check `is_active` and optional `roles`, attach `req.user`. |
| **migrations/001_create_users.js** | Creates `users` table and indexes. Exports `up` / `down`. |
| **migrations/002_create_audit_log.js** | Creates `audit_log` table and indexes. Exports `up` / `down`. |
| **migrations/migrate.js** | Migration runner: loads `.env.local`, connects with `DATABASE_URL`, runs migration files in order, records in `migrations` table. |
| **pages/api/auth/login.js** | POST: email + password → validate, load user, verify password, set JWT cookie, return user (no password). Updates `last_login_at`. |
| **pages/api/auth/logout.js** | POST: clear JWT cookie. |
| **pages/api/auth/me.js** | GET: requires auth via `withAuth`, returns current user (id, email, name, role). |
| **pages/api/auth/register.js** | POST: email, password, name (optional phone, company) → create user with role `customer`, set JWT cookie, return user. |
| **pages/login.js** | Login page: form (email, password), Formik + Yup, submit → `/api/auth/login`, redirect by role to `/admin`, `/staff`, or `/customer`. Link to `/register`. |
| **pages/admin/index.js** | Admin dashboard: checks auth and role, shows cards for Users, Orders, Reports, Settings; logout; account info. |
| **pages/staff/index.js** | Staff dashboard: checks auth (staff or admin), cards for Orders, Quotes; logout. |
| **pages/customer/index.js** | Customer dashboard: checks auth, cards for My Orders, My Quotes, Settings; logout; account info. |
| **scripts/seed-admin.js** | One-time script: create admin user (email `admin@printnpack.ie`, password in script). Uses `dotenv` + `DATABASE_URL`. |
| **AUTH_SETUP_README.md** | Full auth guide: architecture, roles, tenant separation, schema, env vars, file structure, auth flow, code samples, setup steps, security checklist. |

### Modified files

| Path | Change |
|------|--------|
| **.gitignore** | Added `.env` and explicit `.env.local` so env files with secrets are never committed. |
| **package.json** | Added dependencies: `bcrypt`, `jsonwebtoken`, `dotenv`. |
| **package-lock.json** | Lockfile updated for new dependencies. |

---

## Dependencies Added

| Package | Purpose |
|---------|---------|
| `bcrypt` | Hash and verify passwords (12 rounds). |
| `jsonwebtoken` | Sign and verify JWT for session token. |
| `dotenv` | Load `.env.local` when running `migrate.js` and `seed-admin.js` from CLI. |

---

## How to Use (Quick Reference)

1. **Env:** In `.env.local` set `DATABASE_URL` and `JWT_SECRET` (and optionally `JWT_EXPIRY`). Never commit these.
2. **Migrations:** `node migrations/migrate.js` — creates `users`, `migrations`, `audit_log`.
3. **Seed admin (once):** Edit `scripts/seed-admin.js` password, then `node scripts/seed-admin.js`. Or create a specific admin with **`scripts/create-admin.js`** (password from env only): `ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=YourPassword node scripts/create-admin.js`.
4. **Login:** Open `/login`, sign in; you are redirected to `/admin`, `/staff`, or `/customer` by role.
5. **APIs:** `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`, `POST /api/auth/register`.

---

## Summary

- **Built:** JWT + bcrypt auth, login page, role-based dashboards, auth APIs, withAuth middleware, migrations, seed script, and auth documentation.
- **Migrated:** `users`, `migrations`, and `audit_log` tables on Neon Postgres via a small migration runner.
- **Coded:** 15 new files (lib, migrations, API routes, pages, script, README) and 3 modified files (gitignore, package.json, package-lock.json), all included in commit `3378a1e`.
