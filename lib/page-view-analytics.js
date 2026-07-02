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

function pagePathSql(urlColumn = 'page_url') {
  return `
    COALESCE(
      NULLIF(
        regexp_replace(${urlColumn}, '^https?://[^/]+', ''),
        ''
      ),
      '/'
    )
  `;
}

function referrerSourceSql(referrerColumn = 'referrer') {
  return `
    CASE
      WHEN ${referrerColumn} IS NULL OR ${referrerColumn} = '' THEN 'Direct'
      WHEN ${referrerColumn} ILIKE '%google%' THEN 'Google'
      WHEN ${referrerColumn} ILIKE '%bing%' THEN 'Bing'
      WHEN ${referrerColumn} ILIKE '%facebook%' OR ${referrerColumn} ILIKE '%fb.%' THEN 'Facebook'
      WHEN ${referrerColumn} ILIKE '%instagram%' THEN 'Instagram'
      WHEN ${referrerColumn} ILIKE '%linkedin%' THEN 'LinkedIn'
      WHEN ${referrerColumn} ILIKE '%printnpack%' THEN 'Internal'
      ELSE 'Other'
    END
  `;
}

export async function getPageViewStats(period = '30d') {
  const whereVisits = visitWhere(period);
  const whereSessions = sessionWhere(period);
  const pagePath = pagePathSql('page_url');

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
      ) AS bounce_rate
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

  const byPage = await getRows(
    `
    SELECT
      ${pagePath} AS page_path,
      MAX(page_title) AS page_title,
      COUNT(*)::int AS views,
      COUNT(DISTINCT session_id)::int AS visitors
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY views DESC
    LIMIT 25
    `
  );

  const byReferrer = await getRows(
    `
    SELECT
      ${referrerSourceSql()} AS source,
      COUNT(*)::int AS views
    FROM analytics.page_visits
    WHERE ${whereVisits}
    GROUP BY 1
    ORDER BY views DESC
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
      referrer,
      ${referrerSourceSql()} AS referrer_source,
      session_id,
      device_type,
      country,
      time_on_page_seconds,
      is_bounce,
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
      ${pagePathSql('first_page')} AS entry_page,
      ${pagePathSql('last_page')} AS exit_page,
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
    },
    periodTotals: periodTotals || [],
    byDay: byDay || [],
    byPage: byPage || [],
    byReferrer: byReferrer || [],
    byDevice: byDevice || [],
    byCountry: byCountry || [],
    recentViews: recentViews || [],
    visitors: visitors || [],
  };
}
