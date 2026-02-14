import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
const SALT_ROUNDS = 12;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in environment variables');
}

// Password hashing (bcryptjs = pure JS, works on Vercel; hashes compatible with bcrypt)
export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

// JWT
export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

// Cookie helpers
export function setAuthCookie(res, token) {
  const maxAge = 7 * 24 * 60 * 60; // 7 days in seconds
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  
  res.setHeader('Set-Cookie', [
    `token=${token}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`
  ]);
}

export function clearAuthCookie(res) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  
  res.setHeader('Set-Cookie', [
    `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${secure}`
  ]);
}

export function getTokenFromCookies(req) {
  const cookies = req.headers.cookie || '';
  const match = cookies.match(/token=([^;]+)/);
  return match ? match[1] : null;
}
