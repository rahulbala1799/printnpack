import { query, transaction } from '../../../lib/database';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      pageUrl,
      pageTitle,
      referrer,
      userAgent,
      ipAddress,
      sessionId,
      loadTime,
      timeOnPage,
      isBounce = true
    } = req.body;

    // Validate required fields
    if (!pageUrl || !ipAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Anonymize IP address for privacy
    const ipHash = crypto.createHash('sha256').update(ipAddress).digest('hex');
    
    // Determine device type from user agent
    let deviceType = 'unknown';
    if (userAgent) {
      if (userAgent.includes('Mobile')) deviceType = 'mobile';
      else if (userAgent.includes('Tablet')) deviceType = 'tablet';
      else deviceType = 'desktop';
    }

    // Get country from IP (basic implementation - you can enhance this)
    const country = 'IE'; // Default to Ireland, can be enhanced with IP geolocation

    // Use transaction to ensure data consistency
    await transaction(async (client) => {
      // Insert page visit
      const visitResult = await client.query(`
        INSERT INTO analytics.page_visits (
          page_url, page_title, referrer, user_agent, ip_address_hash,
          device_type, country, session_id, load_time_ms, time_on_page_seconds, is_bounce
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING id
      `, [pageUrl, pageTitle, referrer, userAgent, ipHash, deviceType, country, sessionId, loadTime, timeOnPage, isBounce]);

      // Update or create user session
      if (sessionId) {
        const sessionExists = await client.query(`
          SELECT id FROM analytics.user_sessions WHERE session_id = $1
        `, [sessionId]);

        if (sessionExists.rows.length > 0) {
          // Update existing session
          await client.query(`
            UPDATE analytics.user_sessions 
            SET pages_visited = pages_visited + 1,
                total_time_seconds = total_time_seconds + COALESCE($1, 0),
                last_page = $2,
                session_end = NOW(),
                is_active = true
            WHERE session_id = $3
          `, [timeOnPage || 0, pageUrl, sessionId]);
        } else {
          // Create new session
          await client.query(`
            INSERT INTO analytics.user_sessions (
              session_id, ip_address_hash, user_agent, device_type, country,
              first_page, last_page, pages_visited, total_time_seconds
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, 1, $8)
          `, [sessionId, ipHash, userAgent, deviceType, country, pageUrl, pageUrl, timeOnPage || 0]);
        }
      }

      // Update daily summary
      await client.query(`
        SELECT analytics.update_daily_summary(CURRENT_DATE)
      `);
    });

    res.status(200).json({ 
      success: true, 
      message: 'Analytics data recorded successfully' 
    });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    res.status(500).json({ 
      error: 'Failed to record analytics data',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
