import { verifyToken, getTokenFromCookies } from './auth.js';
import { getRow } from './database.js';

/**
 * Middleware wrapper for protected API routes
 * Usage: export default withAuth(handler, { roles: ['admin', 'staff'] })
 */
export function withAuth(handler, options = {}) {
  const { roles } = options;

  return async function (req, res) {
    try {
      // 1. Get token from cookie
      const token = getTokenFromCookies(req);
      if (!token) {
        return res.status(401).json({ error: 'Not authenticated' });
      }

      // 2. Verify JWT
      const payload = verifyToken(token);
      if (!payload) {
        return res.status(401).json({ error: 'Invalid or expired token' });
      }

      // 3. Load fresh user from DB (check is_active, get current role)
      const user = await getRow(
        'SELECT id, email, role, name, is_active FROM users WHERE id = $1',
        [payload.id]
      );

      if (!user || !user.is_active) {
        return res.status(401).json({ error: 'Account not found or deactivated' });
      }

      // 4. Check role if specified
      if (roles && !roles.includes(user.role)) {
        return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
      }

      // 5. Attach user to request and run handler
      req.user = user;
      return handler(req, res);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
}
