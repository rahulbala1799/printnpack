import { getRow, getRows } from './database';

function periodClause(period) {
  switch (period) {
    case 'today':
      return `clicked_at >= date_trunc('day', NOW() AT TIME ZONE 'Europe/Dublin')`;
    case '7d':
      return `clicked_at >= NOW() - INTERVAL '7 days'`;
    case '30d':
      return `clicked_at >= NOW() - INTERVAL '30 days'`;
    case 'all':
      return 'TRUE';
    default:
      return `clicked_at >= NOW() - INTERVAL '30 days'`;
  }
}

export async function getPhoneClickStats(period = '30d') {
  const where = periodClause(period);

  const totals = await getRow(
    `
    SELECT
      COUNT(*)::int AS total_clicks,
      COUNT(DISTINCT session_id)::int AS unique_sessions,
      COUNT(DISTINCT page_path)::int AS unique_pages
    FROM analytics.phone_click_events
    WHERE ${where}
    `
  );

  const byDay = await getRows(
    `
    SELECT
      (clicked_at AT TIME ZONE 'Europe/Dublin')::date AS date,
      COUNT(*)::int AS clicks
    FROM analytics.phone_click_events
    WHERE ${where}
    GROUP BY 1
    ORDER BY 1 ASC
    `
  );

  const byPage = await getRows(
    `
    SELECT
      COALESCE(NULLIF(page_path, ''), '/') AS page_path,
      MAX(page_title) AS page_title,
      COUNT(*)::int AS clicks
    FROM analytics.phone_click_events
    WHERE ${where}
    GROUP BY 1
    ORDER BY clicks DESC
    LIMIT 25
    `
  );

  const byLocation = await getRows(
    `
    SELECT
      COALESCE(NULLIF(location, ''), 'unknown') AS location,
      COUNT(*)::int AS clicks
    FROM analytics.phone_click_events
    WHERE ${where}
    GROUP BY 1
    ORDER BY clicks DESC
    `
  );

  const byDevice = await getRows(
    `
    SELECT
      COALESCE(NULLIF(device_type, ''), 'unknown') AS device_type,
      COUNT(*)::int AS clicks
    FROM analytics.phone_click_events
    WHERE ${where}
    GROUP BY 1
    ORDER BY clicks DESC
    `
  );

  const byPhoneHref = await getRows(
    `
    SELECT
      phone_href,
      COUNT(*)::int AS clicks
    FROM analytics.phone_click_events
    WHERE ${where}
    GROUP BY 1
    ORDER BY clicks DESC
    `
  );

  const recent = await getRows(
    `
    SELECT
      id,
      page_url,
      page_path,
      page_title,
      phone_href,
      link_text,
      location,
      device_type,
      clicked_at
    FROM analytics.phone_click_events
    WHERE ${where}
    ORDER BY clicked_at DESC
    LIMIT 50
    `
  );

  const periodTotals = await getRows(
    `
    SELECT period, total_clicks FROM (
      SELECT 'today' AS period, COUNT(*)::int AS total_clicks
      FROM analytics.phone_click_events
      WHERE clicked_at >= date_trunc('day', NOW() AT TIME ZONE 'Europe/Dublin')
      UNION ALL
      SELECT '7d', COUNT(*)::int
      FROM analytics.phone_click_events
      WHERE clicked_at >= NOW() - INTERVAL '7 days'
      UNION ALL
      SELECT '30d', COUNT(*)::int
      FROM analytics.phone_click_events
      WHERE clicked_at >= NOW() - INTERVAL '30 days'
      UNION ALL
      SELECT 'all', COUNT(*)::int
      FROM analytics.phone_click_events
    ) s
    `
  );

  return {
    period,
    totals: totals || { total_clicks: 0, unique_sessions: 0, unique_pages: 0 },
    periodTotals: periodTotals || [],
    byDay: byDay || [],
    byPage: byPage || [],
    byLocation: byLocation || [],
    byDevice: byDevice || [],
    byPhoneHref: byPhoneHref || [],
    recent: recent || [],
  };
}
