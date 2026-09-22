import crypto from 'crypto';
import { query, transaction } from '../../../lib/database';
import { enrichPageVisit, getPagePath, parseSearchFromUrl } from '../../../lib/analytics-page-classifier';
import products from '../../../data/products';

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
  if (/ipad|tablet/i.test(userAgent)) return 'tablet';
  if (/mobile|iphone|android/i.test(userAgent)) return 'mobile';
  return 'desktop';
}

function isBot(userAgent = '') {
  return /bot|crawl|spider|slurp|headless|facebookexternalhit|preview/i.test(userAgent);
}

function countSearchMatches(term) {
  const needle = String(term || '').trim().toLowerCase();
  if (needle.length < 2) return 0;
  return products.filter((product) =>
    `${product.name || ''} ${product.description || ''} ${product.category || ''}`.toLowerCase().includes(needle)
  ).length;
}

function getPagePathFromUrl(pageUrl = '') {
  return getPagePath(pageUrl);
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
  const pagePath = eventData.pagePath || getPagePathFromUrl(pageUrl);

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
      utmSource,
      utmMedium,
      utmCampaign,
    } = req.body;

    const ipAddress = getClientIp(req) || bodyIp || '127.0.0.1';
    const eventType = req.body?.eventType || '';

    if (isBot(userAgent)) {
      return res.status(200).json({ success: true, ignored: true });
    }

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

    if (eventName && eventName !== 'quote_submit') {
      return res.status(200).json({ success: true, ignored: true });
    }

    if (eventName === 'quote_submit' || eventType === 'quote_submit') {
      if (sessionId) {
        await query(
          `UPDATE analytics.user_sessions SET quote_submitted = true WHERE session_id = $1`,
          [sessionId]
        );
      }
      return res.status(200).json({ success: true, message: 'Quote recorded' });
    }

    if (!pageUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const ipHash = hashIp(ipAddress);
    const deviceType = getDeviceType(userAgent);
    const country = String(req.headers['x-vercel-ip-country'] || '').slice(0, 2).toUpperCase() || null;
    const searched = parseSearchFromUrl(pageUrl);
    const enriched = enrichPageVisit({
      pageUrl,
      pageTitle,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
    });

    const searchResultCount = enriched.page_path === '/search' && searched.search_term
      ? countSearchMatches(searched.search_term)
      : null;

    if (eventType === 'engagement' && sessionId) {
      await query(
        `
        UPDATE analytics.page_visits
        SET time_on_page_seconds = GREATEST(COALESCE(time_on_page_seconds, 0), COALESCE($1, 0)),
            is_bounce = CASE WHEN COALESCE($1, 0) >= 30 THEN false ELSE is_bounce END
        WHERE id = (
          SELECT id FROM analytics.page_visits
          WHERE session_id = $2
            AND page_path = $3
            AND record_kind = 'pageview'
          ORDER BY visit_timestamp DESC
          LIMIT 1
        )
        `,
        [timeOnPage || 0, sessionId, enriched.page_path]
      );
      await query(
        `
        UPDATE analytics.user_sessions
        SET total_time_seconds = GREATEST(COALESCE(total_time_seconds, 0), COALESCE($1, 0)),
            session_end = NOW()
        WHERE session_id = $2
        `,
        [timeOnPage || 0, sessionId]
      );
      return res.status(200).json({ success: true, message: 'Engagement updated' });
    }

    if (!eventType && sessionId && (timeOnPage || 0) > 0) {
      const updated = await query(
        `
        UPDATE analytics.page_visits
        SET time_on_page_seconds = GREATEST(COALESCE(time_on_page_seconds, 0), COALESCE($1, 0)),
            is_bounce = false
        WHERE id = (
          SELECT id FROM analytics.page_visits
          WHERE session_id = $2 AND page_path = $3 AND record_kind = 'pageview'
          ORDER BY visit_timestamp DESC
          LIMIT 1
        )
        RETURNING id
        `,
        [timeOnPage || 0, sessionId, enriched.page_path]
      );
      if (updated.rowCount > 0) {
        return res.status(200).json({ success: true, message: 'Existing page view updated' });
      }
    }

    if (enriched.page_path.startsWith('/admin') || enriched.page_path.startsWith('/staff') || enriched.page_path === '/login') {
      return res.status(200).json({ success: true, ignored: true });
    }

    let visitId = null;
    let isLandingPage = false;

    await transaction(async (client) => {
      if (sessionId) {
        const existing = await client.query(
          `
          SELECT id FROM analytics.page_visits
          WHERE session_id = $1
            AND page_path = $2
            AND record_kind = 'pageview'
            AND visit_timestamp >= NOW() - INTERVAL '10 seconds'
          ORDER BY visit_timestamp DESC
          LIMIT 1
          `,
          [sessionId, enriched.page_path]
        );
        if (existing.rows.length > 0) {
          visitId = existing.rows[0].id;
          await client.query(
            `
            UPDATE analytics.page_visits
            SET time_on_page_seconds = GREATEST(COALESCE(time_on_page_seconds, 0), COALESCE($1, 0))
            WHERE id = $2
            `,
            [timeOnPage || 0, visitId]
          );
          return;
        }
      }

      if (sessionId) {
        const sessionExists = await client.query(
          `SELECT id FROM analytics.user_sessions WHERE session_id = $1`,
          [sessionId]
        );
        isLandingPage = sessionExists.rows.length === 0;
      }

      const inserted = await client.query(
        `
        INSERT INTO analytics.page_visits (
          page_url, page_title, referrer, user_agent, ip_address_hash,
          device_type, country, session_id, load_time_ms, time_on_page_seconds, is_bounce,
          page_path, page_type, product_family, product_slug, product_name,
          traffic_source, referrer_domain, utm_source, utm_medium, utm_campaign, is_landing_page,
          record_kind, search_term, utm_term, search_result_count
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,
          $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,
          'pageview', $23, $24, $25
        )
        RETURNING id
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
          enriched.page_path,
          enriched.page_type,
          enriched.product_family,
          enriched.product_slug,
          enriched.product_name,
          enriched.traffic_source,
          enriched.referrer_domain,
          enriched.utm_source,
          enriched.utm_medium,
          enriched.utm_campaign,
          isLandingPage,
          searched.search_term,
          searched.utm_term,
          searchResultCount,
        ]
      );
      visitId = inserted.rows[0]?.id || null;

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
                last_page = $1,
                session_end = NOW(),
                is_active = true,
                entry_search_term = COALESCE(entry_search_term, $2)
            WHERE session_id = $3
            `,
            [pageUrl, searched.search_term, sessionId]
          );
        } else {
          await client.query(
            `
            INSERT INTO analytics.user_sessions (
              session_id, ip_address_hash, user_agent, device_type, country,
              first_page, last_page, pages_visited, total_time_seconds,
              entry_page_path, entry_traffic_source, entry_referrer_domain, entry_product_family,
              utm_source, utm_medium, utm_campaign, entry_search_term
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, 1, $8, $9, $10, $11, $12, $13, $14, $15, $16)
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
              enriched.page_path,
              enriched.traffic_source,
              enriched.referrer_domain,
              enriched.product_family,
              enriched.utm_source,
              enriched.utm_medium,
              enriched.utm_campaign,
              searched.search_term,
            ]
          );
        }
      }
    });

    try {
      await query(`SELECT analytics.update_daily_summary(CURRENT_DATE)`);
    } catch (summaryError) {
      console.error('Daily summary update failed (page visit still recorded):', summaryError);
    }

    return res.status(200).json({
      success: true,
      visitId,
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
