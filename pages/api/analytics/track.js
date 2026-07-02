import crypto from 'crypto';
import { query, transaction } from '../../../lib/database';

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return String(forwarded).split(',')[0].trim();
  }
  return req.socket?.remoteAddress || req.connection?.remoteAddress || '127.0.0.1';
}

function hashIp(ipAddress) {
  return crypto.createHash('sha256').update(ipAddress).digest('hex');
}

function getDeviceType(userAgent = '') {
  if (userAgent.includes('Mobile')) return 'mobile';
  if (userAgent.includes('Tablet')) return 'tablet';
  return 'desktop';
}

function getPagePath(pageUrl = '') {
  try {
    return new URL(pageUrl).pathname || '/';
  } catch {
    return '/';
  }
}

async function recordPhoneClick({
  pageUrl,
  pageTitle,
  referrer,
  userAgent,
  ipAddress,
  sessionId,
  eventData = {},
}) {
  const ipHash = hashIp(ipAddress);
  const deviceType = getDeviceType(userAgent);
  const pagePath = eventData.pagePath || getPagePath(pageUrl);

  await query(
    `
    INSERT INTO analytics.phone_click_events (
      page_url, page_path, page_title, phone_href, link_text, location,
      session_id, device_type, referrer, user_agent, ip_address_hash
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `,
    [
      pageUrl,
      pagePath,
      pageTitle || null,
      eventData.phoneHref || 'tel:unknown',
      eventData.linkText || null,
      eventData.location || 'unknown',
      sessionId || null,
      deviceType,
      referrer || null,
      userAgent || null,
      ipHash,
    ]
  );
}

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
      ipAddress: bodyIp,
      sessionId,
      loadTime,
      timeOnPage,
      isBounce = true,
      eventName,
      eventData,
    } = req.body;

    const ipAddress = getClientIp(req) || bodyIp || '127.0.0.1';

    if (eventName === 'phone_click') {
      if (!pageUrl || !eventData?.phoneHref) {
        return res.status(400).json({ error: 'Missing phone click fields' });
      }

      await recordPhoneClick({
        pageUrl,
        pageTitle,
        referrer,
        userAgent,
        ipAddress,
        sessionId,
        eventData,
      });

      return res.status(200).json({
        success: true,
        message: 'Phone click recorded successfully',
      });
    }

    if (!pageUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const ipHash = hashIp(ipAddress);
    const deviceType = getDeviceType(userAgent);
    const country = 'IE';

    await transaction(async (client) => {
      await client.query(
        `
        INSERT INTO analytics.page_visits (
          page_url, page_title, referrer, user_agent, ip_address_hash,
          device_type, country, session_id, load_time_ms, time_on_page_seconds, is_bounce
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `,
        [
          pageUrl,
          pageTitle,
          referrer,
          userAgent,
          ipHash,
          deviceType,
          country,
          sessionId,
          loadTime,
          timeOnPage,
          isBounce,
        ]
      );

      if (sessionId) {
        const sessionExists = await client.query(
          `SELECT id FROM analytics.user_sessions WHERE session_id = $1`,
          [sessionId]
        );

        if (sessionExists.rows.length > 0) {
          await client.query(
            `
            UPDATE analytics.user_sessions
            SET pages_visited = pages_visited + 1,
                total_time_seconds = total_time_seconds + COALESCE($1, 0),
                last_page = $2,
                session_end = NOW(),
                is_active = true
            WHERE session_id = $3
            `,
            [timeOnPage || 0, pageUrl, sessionId]
          );
        } else {
          await client.query(
            `
            INSERT INTO analytics.user_sessions (
              session_id, ip_address_hash, user_agent, device_type, country,
              first_page, last_page, pages_visited, total_time_seconds
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, 1, $8)
            `,
            [
              sessionId,
              ipHash,
              userAgent,
              deviceType,
              country,
              pageUrl,
              pageUrl,
              timeOnPage || 0,
            ]
          );
        }
      }

      await client.query(`SELECT analytics.update_daily_summary(CURRENT_DATE)`);
    });

    return res.status(200).json({
      success: true,
      message: 'Analytics data recorded successfully',
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);

    if (req.body?.eventName === 'phone_click') {
      return res.status(500).json({
        error: 'Failed to record phone click',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }

    return res.status(500).json({
      error: 'Failed to record analytics data',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
