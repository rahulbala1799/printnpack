/**
 * Simple in-memory rate limiter for staff login.
 * Key: identifier (e.g. IP). Window: 15 minutes. Max: 5 attempts.
 * For production with multiple instances, use a distributed store (e.g. Redis/Upstash).
 */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

const store = new Map();

function getKey(identifier) {
  return `staff-login:${identifier}`;
}

export function checkStaffLoginRateLimit(identifier) {
  const key = getKey(identifier);
  const now = Date.now();
  let entry = store.get(key);

  if (!entry) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
    store.set(key, entry);
  }

  if (now >= entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + WINDOW_MS;
  }

  entry.count += 1;

  if (entry.count > MAX_ATTEMPTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000)
    };
  }

  return { allowed: true };
}

export function clearStaffLoginRateLimit(identifier) {
  store.delete(getKey(identifier));
}
