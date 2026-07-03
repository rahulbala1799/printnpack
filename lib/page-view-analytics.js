import { getRow, getRows } from './database';

function periodClause(column) {
  return (period) => {
    switch (period) {
      case 'today':
        return `${column} >= date_trunc('day', NOW() AT TIME ZONE 'Europe/Dublin')`;
      case '7d':
        return `${column} >= NOW() - INTERVAL '7 days'`;
      case '30d':
        return `${column} >= NOW() - INTERVAL '30 days'`;
      case 'all':
        return 'TRUE';
      default:
        return `${column} >= NOW() - INTERVAL '30 days'`;
    }
  };
}

const visitWhere = periodClause('visit_timestamp');
const sessionWhere = periodClause('session_start');

function pagePathSql(urlColumn = 'page_url', pathColumn = 'page_path') {
  return `
    COALESCE(
      NULLIF(${pathColumn}, ''),
      NULLIF(
        regexp_replace(${urlColumn}, '^https?://[^/]+', ''),
        ''
      ),
      '/'
    )
  `;
}

function productFamilySql() {
  return `
    COALESCE(
      NULLIF(product_family, ''),
      CASE
        WHEN ${pagePathSql()} ~* 'pizza' THEN 'Pizza Boxes'
        WHEN ${pagePathSql()} ~* 'burger|bagasse' THEN 'Burger Boxes'
        WHEN ${pagePathSql()} ~* 'napkin' THEN 'Napkins'
        WHEN ${pagePathSql()} ~* 'banner|foamex|correx|vinyl-banner|roll-up|pull-up|poster' THEN 'Banners & Signage'
        WHEN ${pagePathSql()} ~* 'leaflet' THEN 'Leaflets'
        WHEN ${pagePathSql()} ~* 'rubber-stamp|stamp' THEN 'Rubber Stamps'
        WHEN ${pagePathSql()} ~* 'bag' THEN 'Paper Bags'
        WHEN ${pagePathSql()} ~* 'plain-packaging' THEN 'Plain Packaging'
        ELSE NULL
      END
    )
  `;
}

function trafficSourceSql() {
  return `
    COALESCE(
      NULLIF(traffic_source, ''),
      CASE
        WHEN referrer IS NULL OR referrer = '' THEN 'Direct'
        WHEN referrer ILIKE '%google%' THEN 'Google'
        WHEN referrer ILIKE '%bing%' THEN 'Bing'
        WHEN referrer ILIKE '%facebook%' OR referrer ILIKE '%fb.%' THEN 'Facebook'
        WHEN referrer ILIKE '%instagram%' THEN 'Instagram'
        WHEN referrer ILIKE '%linkedin%' THEN 'LinkedIn'
        WHEN referrer ILIKE '%printnpack%' THEN 'Internal'
        ELSE 'Other'
      END
    )
  `;
}

function referrerDomainSql() {
  return `
    COALESCE(
      NULLIF(referrer_domain, ''),
      CASE
        WHEN referrer IS NULL OR referrer = '' THEN NULL
        ELSE regexp_replace(referrer, '^https?://([^/]+).*$', '\\1')
      END
    )
  `;
}

export async function getPageViewStats(period = '30d') {
  const whereVisits = visitWhere(period);
  const whereSessions = sessionWhere(period);
  const pagePath = pagePathSql('page_url', 'page_path');
  const productFamily = productFamilySql();
  const trafficSource = trafficSourceSql();
  const referrerDomain = referrerDomainSql();

  const totals = await getRow(
    `
    SELECT
      COUNT(*)::int AS total_views,
      COUNT(DISTINCT session_id)::int AS unique_visitors,
      COUNT(DISTINCT ${pagePath})::int AS unique_pages,
      ROUND(AVG(NULLIF(time_on_page_seconds, 0))::numeric, 1) AS avg_time_on_page,
      ROUND(
        100.0 * COUNT(*) FILTER (WHERE is_bounce = true) / NULLIF(COUNT(*), 0),
        1
      ) AS bounce_rate,
      COUNT(*) FILTER (WHERE is_landing_page = true)::int AS landing_page_views,
      COUNT(DISTINCT session_id) FILTER (WHERE is_landing_page = true)::int AS landing_sessions
    FROM analytics.page_visits
    WHERE ${whereVisits}
    `
  );

  const byDay = await getRows(
    `
    SELECT
      (visit_timestamp AT TIME ZONE 'Europe/Dublin')::date AS date,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY 1 ASC
    `
  );

  const byProductFamily = await getRows(
    `
    SELECT
      COALESCE(${productFamily}, 'Uncategorised') AS product_family,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors,
      ROUND(AVG(NULLIF(time_on_page_seconds, 0))::numeric, 1) AS avg_time_on_page
    FROM analytics.page_visits
    WHERE ${whereVisits}
      AND page_type NOT IN ('internal', 'utility')
      AND ${productFamily} IS NOT NULL
    GROUP BY 1
    ORDER BY views DESC
    LIMIT 20
    `
  );

  const byProductPage = await getRows(
    `
    SELECT
      ${pagePath} AS page_path,
      COALESCE(NULLIF(product_name, ''), MAX(page_title)) AS product_name,
      COALESCE(${productFamily}, 'Uncategorised') AS product_family,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors,
      ROUND(AVG(NULLIF(time_on_page_seconds, 0))::numeric, 1) AS avg_time_on_page
    FROM analytics.page_visits
    WHERE ${whereVisits}
      AND page_type IN ('product', 'hub', 'plain', 'catalog')
    GROUP BY 1, product_name, product_family
    ORDER BY views DESC
    LIMIT 30
    `
  );

  const byLandingPage = await getRows(
    `
    SELECT
      COALESCE(NULLIF(entry_page_path, ''), ${pagePathSql('first_page', 'entry_page_path')}) AS landing_page,
      COALESCE(NULLIF(entry_product_family, ''), 'Uncategorised') AS product_family,
      COALESCE(NULLIF(entry_traffic_source, ''), 'Direct') AS traffic_source,
      COUNT(*)::int AS sessions,
      ROUND(AVG(pages_visited)::numeric, 1) AS avg_pages_per_session,
      ROUND(AVG(NULLIF(total_time_seconds, 0))::numeric, 0) AS avg_session_seconds
    FROM analytics.user_sessions
    WHERE ${whereSessions}
    GROUP BY 1, 2, 3
    ORDER BY sessions DESC
    LIMIT 25
    `
  );

  const byReferrer = await getRows(
    `
    SELECT
      ${trafficSource} AS source,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY views DESC
    `
  );

  const byReferrerDomain = await getRows(
    `
    SELECT
      COALESCE(${referrerDomain}, 'Direct') AS referrer_domain,
      ${trafficSource} AS traffic_source,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1, 2
    ORDER BY views DESC
    LIMIT 20
    `
  );

  const byProductSource = await getRows(
    `
    SELECT
      COALESCE(${productFamily}, 'Uncategorised') AS product_family,
      ${trafficSource} AS traffic_source,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
      AND ${productFamily} IS NOT NULL
    GROUP BY 1, 2
    ORDER BY views DESC
    LIMIT 30
    `
  );

  const byPage = await getRows(
    `
    SELECT
      ${pagePath} AS page_path,
      MAX(page_title) AS page_title,
      COALESCE(
        MAX(NULLIF(product_family, '')),
        CASE
          WHEN MIN(${pagePath}) ~* 'pizza' THEN 'Pizza Boxes'
          WHEN MIN(${pagePath}) ~* 'burger|bagasse' THEN 'Burger Boxes'
          WHEN MIN(${pagePath}) ~* 'napkin' THEN 'Napkins'
          WHEN MIN(${pagePath}) ~* 'banner|foamex|correx|vinyl-banner|roll-up|pull-up|poster' THEN 'Banners & Signage'
          WHEN MIN(${pagePath}) ~* 'leaflet' THEN 'Leaflets'
          WHEN MIN(${pagePath}) ~* 'rubber-stamp|stamp' THEN 'Rubber Stamps'
          WHEN MIN(${pagePath}) ~* 'bag' THEN 'Paper Bags'
          WHEN MIN(${pagePath}) ~* 'plain-packaging' THEN 'Plain Packaging'
          ELSE '—'
        END
      ) AS product_family,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY ${pagePath}
    ORDER BY views DESC
    LIMIT 25
    `
  );

  const byDevice = await getRows(
    `
    SELECT
      COALESCE(NULLIF(device_type, ''), 'unknown') AS device_type,
      COUNT(*)::int AS views
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY views DESC
    `
  );

  const byCountry = await getRows(
    `
    SELECT
      COALESCE(NULLIF(country, ''), 'unknown') AS country,
      COUNT(*)::int AS views
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY views DESC
    `
  );

  const recentViews = await getRows(
    `
    SELECT
      id,
      page_url,
      ${pagePath} AS page_path,
      page_title,
      COALESCE(${productFamily}, '—') AS product_family,
      COALESCE(NULLIF(product_name, ''), page_title) AS product_name,
      referrer,
      ${trafficSource} AS referrer_source,
      COALESCE(${referrerDomain}, '—') AS referrer_domain,
      session_id,
      device_type,
      country,
      time_on_page_seconds,
      is_bounce,
      is_landing_page,
      visit_timestamp
    FROM analytics.page_visits
    WHERE ${whereVisits}
    ORDER BY visit_timestamp DESC
    LIMIT 50
    `
  );

  const visitors = await getRows(
    `
    SELECT
      session_id,
      device_type,
      country,
      COALESCE(NULLIF(entry_page_path, ''), ${pagePathSql('first_page', 'entry_page_path')}) AS entry_page,
      ${pagePathSql('last_page')} AS exit_page,
      COALESCE(NULLIF(entry_traffic_source, ''), 'Direct') AS entry_source,
      COALESCE(NULLIF(entry_product_family, ''), '—') AS entry_product_family,
      COALESCE(NULLIF(entry_referrer_domain, ''), '—') AS entry_referrer_domain,
      pages_visited,
      total_time_seconds,
      session_start,
      session_end,
      is_active
    FROM analytics.user_sessions
    WHERE ${whereSessions}
    ORDER BY session_start DESC
    LIMIT 50
    `
  );

  const periodTotals = await getRows(
    `
    SELECT period, total_views, unique_visitors FROM (
      SELECT 'today' AS period,
        COUNT(*)::int AS total_views,
        COUNT(DISTINCT session_id)::int AS unique_visitors
      FROM analytics.page_visits
      WHERE visit_timestamp >= date_trunc('day', NOW() AT TIME ZONE 'Europe/Dublin')
      UNION ALL
      SELECT '7d',
        COUNT(*)::int,
        COUNT(DISTINCT session_id)::int
      FROM analytics.page_visits
      WHERE visit_timestamp >= NOW() - INTERVAL '7 days'
      UNION ALL
      SELECT '30d',
        COUNT(*)::int,
        COUNT(DISTINCT session_id)::int
      FROM analytics.page_visits
      WHERE visit_timestamp >= NOW() - INTERVAL '30 days'
      UNION ALL
      SELECT 'all',
        COUNT(*)::int,
        COUNT(DISTINCT session_id)::int
      FROM analytics.page_visits
    ) s
    `
  );

  return {
    period,
    totals: totals || {
      total_views: 0,
      unique_visitors: 0,
      unique_pages: 0,
      avg_time_on_page: 0,
      bounce_rate: 0,
      landing_page_views: 0,
      landing_sessions: 0,
    },
    periodTotals: periodTotals || [],
    byDay: byDay || [],
    byProductFamily: byProductFamily || [],
    byProductPage: byProductPage || [],
    byLandingPage: byLandingPage || [],
    byReferrer: byReferrer || [],
    byReferrerDomain: byReferrerDomain || [],
    byProductSource: byProductSource || [],
    byPage: byPage || [],
    byDevice: byDevice || [],
    byCountry: byCountry || [],
    recentViews: recentViews || [],
    visitors: visitors || [],
  };
}
