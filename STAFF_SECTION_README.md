# Staff Section – Overview and Access

This document describes the **staff section** of the website: how staff accounts are created, how staff log in, and how they reach their dashboard. Staff use **User ID and password** (no email). Staff login uses a **different screen and URL** from the admin login.

---

## Summary

| Topic | Detail |
|-------|--------|
| **Who creates staff?** | The **Admin**. Staff are added and managed from the Admin Panel. |
| **Staff credentials** | **User ID** and **password**. No email is used for staff login. |
| **Staff login URL** | A **dedicated staff login page** at `/staff/login` (separate from the main login). |
| **Admin login** | Stays at **`/login`** (existing). Uses **email + password**. No change. |
| **After login** | Staff are redirected to the **Staff Dashboard**. |
| **After logout** | Staff are taken to the **staff login page** (`/staff/login`). |
| **First login** | Staff **must** change their password on first login (required). |
| **Deactivated staff** | Mid-session deactivation must be enforced (see JWT / revocation). |
| **Staff login API** | **Rate limiting** is required on `/api/auth/staff-login` (brute force protection). |
| **Migrations** | **Required.** Run migrations before using the staff section (see below). |

---

## Migrations required

Before using the staff login flow, you **must** run the database migrations. The staff feature depends on extra columns on the `users` table.

1. **Ensure** `DATABASE_URL` is set in `.env.local` (or your environment).
2. **Run migrations** from the project root:
   ```bash
   node migrations/migrate.js
   ```
3. The migration **`006_staff_login`** adds:
   - **`login_id`** – unique identifier staff use to log in (User ID). Nullable; only staff have it set.
   - **`must_change_password`** – when `true`, staff must change their password before accessing the dashboard. Set to `true` when an admin creates a staff account.
   - **`email`** is changed to **nullable** so that staff accounts do not require an email.

If you deploy to Vercel (or another host), run migrations against your production database **before** or as part of your first deployment of the staff feature (e.g. in a one-off step or a deploy script). Do not skip this step or the staff login API and admin staff-creation will fail.

---

## 1. How Staff Are Added

- **Only the Admin** can create and manage staff accounts.
- When the Admin adds a staff member, they set:
  - **User ID** (e.g. a username or employee ID – used for login)
  - **Password** (staff use this with their User ID to log in)
- **No email** is required or used for staff login. Staff do not sign in with an email address.

The Admin can also deactivate staff or change their details from the Admin Panel.

**Implementation note:** The backend exposes **`POST /api/admin/staff`** (admin-only) to create a staff account: send `user_id`, `password`, and `name`. The created staff has `must_change_password: true` and must sign in at `/staff/login` and change their password before using the dashboard. The Admin Panel UI for “Add staff” should call this API.

---

## 2. Staff Login – Different from Admin

Staff do **not** use the same login page as the Admin.

| User type | Login method | Login URL / screen |
|-----------|--------------|---------------------|
| **Admin** | Email + password | **`/login`** (existing – leave as is) |
| **Staff** | User ID + password | **`/staff/login`** – separate page (User ID + password only) |

Using a **separate staff login screen** allows:

- A form that asks for **User ID** and **password** (no email field).
- Clear labelling so staff know they are on the staff portal, not the admin or customer area.
- Different branding or messaging if needed (e.g. “Staff Portal”, “Employee Login”).

Implementation will use a dedicated route (e.g. `/staff/login`) and a dedicated API (e.g. `/api/auth/staff-login`) that accepts **User ID** (or username) and **password**, not email. **Rate limiting on this endpoint is required** (see §6).

---

## 3. How Staff Access Their Dashboard

1. **Login link**  
   Staff use the **staff-only login link**: **`/staff/login`** (e.g. `https://yoursite.com/staff/login`). They do **not** use the main login page at `/login` (that page is for admin/customer with email + password).

2. **Enter credentials**  
   On the staff login page they enter:
   - **User ID** (the ID or username given to them by the Admin)
   - **Password** (the temporary password set by the Admin; staff **must** change it on first login – see §6)

3. **Submit**  
   After submitting, the system checks the User ID and password. If valid and the account is active, the staff member is logged in.

4. **Redirect to dashboard**  
   On success, they are redirected to the **Staff Dashboard** (e.g. `https://yoursite.com/staff` or `/staff`). There they can use staff-only features (e.g. orders, quotes, tasks – as defined in your app).

5. **Logout**  
   From the dashboard, staff can log out. **After logout, staff must be taken to the staff login page** (`/staff/login`).

---

## 4. Login URLs – Quick Reference

| Purpose | URL | Used by |
|---------|-----|--------|
| **Admin (and customer) login** | **`/login`** | Admins and customers (email + password). **Existing – do not change.** |
| **Staff login** | **`/staff/login`** | Staff only (User ID + password). **Separate page.** |
| **Staff dashboard** | **`/staff`** | Staff (after successful login) |

**Note:** The main login at **`/login`** stays as it is. Only **staff** use a different URL: **`/staff/login`**.

---

## 5. What Staff See After Login

- **First login:** Staff **must** complete the forced password-change step before they can access the dashboard (see §6.2).
- **Staff Dashboard** (`/staff`): the main landing page after staff login (and after first-login password change, if applicable).
- From there, staff can use the links and tools available to their role (e.g. view orders, manage quotes, complete onboarding if required).
- If you use the **Staff Onboarding** flow (see `STAFF_ONBOARDING_README.md`), new staff may be taken through onboarding (e.g. Legal/Privacy step) before or after reaching the dashboard, as per your implementation.

---

## 6. Security and Behaviour

### 6.1 General

- Staff accounts are **created and managed by the Admin**; staff cannot self-register.
- Staff authenticate with **User ID + password**; the backend must validate against the **User ID** (e.g. a `user_id` field) and never use email for staff login.
- Use a **dedicated staff login API** that looks up the user by **User ID** (`user_id`), checks password and `is_active`, then issues a session (e.g. JWT cookie) with role `staff`.
- The **admin login** stays at **`/login`** (email + password). Only **staff** use a different route (**`/staff/login`**) with User ID + password.

### 6.2 Forced password change on first login (required)

Admin-set passwords that staff never rotate are a **persistent credential risk**. Therefore:

- **Staff must change their password on first login.** This is a **firm requirement**, not optional.
- When a staff account is created, the Admin sets an initial/temporary password. On first successful login, the staff member **must** be forced to set a new password before they can access the dashboard or any other protected resource.
- Implement a “first login” or “password change required” flag (e.g. `must_change_password` or `password_changed_at`). After the staff member sets a new password, clear the flag and allow normal access.
- Until the password is changed, block access to the dashboard and show only the “Change password” flow; do not allow skipping.

### 6.3 JWT and deactivation (mid-session revocation)

When an Admin **deactivates** a staff account, the staff member may still have a valid JWT. JWTs are stateless: the token remains valid until it expires, so deactivation does not automatically invalidate an existing session.

You **must** plan for this gap. Use one of the following approaches (or a combination):

| Approach | Description |
|----------|-------------|
| **Server-side check on protected routes** | On every protected request (e.g. in `withAuth` or equivalent), after verifying the JWT, **re-load the user from the database** and check `is_active`. If the user is deactivated, reject the request (401/403) and clear the session. This way deactivation takes effect on the next API call. |
| **Short expiry + refresh tokens** | Use short-lived access tokens (e.g. 15–60 minutes) and refresh tokens. When the staff is deactivated, invalidate or revoke refresh tokens (e.g. in a blocklist or by deleting/flagging in DB). The access token expires soon anyway; refresh will fail for deactivated users. |
| **Token version / “last invalidated at”** | Store a `token_version` or `sessions_invalidated_at` on the user record. Include it in the JWT (or check it server-side). When deactivating, bump the version or set the timestamp. On each request, reject if the token’s version is older than the stored one. |

**Recommendation:** At minimum, implement the **server-side check on protected routes**: after JWT verification, load the user from the DB and enforce `is_active`. This ensures that once an Admin deactivates a staff account, the next request from that staff fails and they are logged out (redirect to `/staff/login`).

### 6.4 Rate limiting on staff login

**Brute force protection on the staff login endpoint is required.**

- Apply **rate limiting** to **`/api/auth/staff-login`** (or whatever path you use for staff login). For example: limit by IP and/or by User ID (e.g. max N failed attempts per 15 minutes), then temporarily block or require a delay/captcha.
- This prevents attackers from repeatedly guessing User IDs and passwords. Without rate limiting, the staff login is a high-value target for credential stuffing and brute force.
- Document the chosen limits (e.g. “5 failed attempts per IP per 15 minutes”) and behaviour (e.g. HTTP 429, or lockout for X minutes). Apply the same security mindset as for the main `/api/auth/login` if that endpoint is rate limited.

---

## 7. Summary Table

| Question | Answer |
|----------|--------|
| Who adds staff? | **Admin** (via Admin Panel). |
| What do staff use to log in? | **User ID** and **password** (no email). |
| Is the staff login the same as the admin login? | **No.** Staff use a **different screen and URL** (e.g. `/staff/login`). |
| Which link do staff use to log in? | The **staff login link** (e.g. `https://yoursite.com/staff/login`). |
| Where do staff go after login? | **Staff Dashboard** (e.g. `/staff`). |
| Where do staff go after logout? | **Staff login page** (`/staff/login`). |
| Can staff use the main login at `/login`? | No. `/login` is for admin/customer (email + password). Staff must use **`/staff/login`** (User ID + password). |
| Must staff change password on first login? | **Yes.** Required. Admin-set passwords must be rotated on first login. |
| What if admin deactivates staff mid-session? | JWT stays valid until expiry. **Must** enforce revocation: e.g. re-check `is_active` on every protected request, or short expiry + refresh, or token version. See §6.3. |
| Is rate limiting required on staff login? | **Yes.** Brute force protection on `/api/auth/staff-login` is required. See §6.4. |

---

*This README describes the staff section: staff are added by the Admin with User ID and password; staff use a dedicated login at **`/staff/login`** (the main login at **`/login`** stays for admin/customer). English only.*
