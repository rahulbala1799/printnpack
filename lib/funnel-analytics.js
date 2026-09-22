import { getRows, query } from './database';

function periodClause(column, period) {
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
}

function rate(part, whole) {
  if (!whole) return 0;
  return Math.round((part / whole) * 1000) / 10;
}

export async function ensureFunnelTable() {
  await query('CREATE SCHEMA IF NOT EXISTS analytics');
  await query(`
    CREATE TABLE IF NOT EXISTS analytics.funnel_events (
      id SERIAL PRIMARY KEY,
      event_name VARCHAR(64) NOT NULL DEFAULT 'funnel',
      form_type VARCHAR(40) NOT NULL,
      step VARCHAR(40) NOT NULL,
      page_path VARCHAR(300),
      page_url TEXT,
      session_id VARCHAR(64),
      product_id VARCHAR(160),
      product_name VARCHAR(200),
      traffic_source VARCHAR(80),
      device_type VARCHAR(20),
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

function emptyFunnel() {
  return { opened: 0, started: 0, products: 0, sent: 0, success: 0, dismissed: 0 };
}

function buildFunnel(rows, formType) {
  const next = emptyFunnel();
  for (const row of rows) {
    if (row.form_type !== formType) continue;
    if (row.step === 'open') next.opened = Number(row.sessions) || 0;
    if (row.step === 'start') next.started = Number(row.sessions) || 0;
    if (row.step === 'product') next.products = Number(row.sessions) || 0;
    if (row.step === 'send') next.sent = Number(row.sessions) || 0;
    if (row.step === 'success') next.success = Number(row.sessions) || 0;
    if (row.step === 'dismiss') next.dismissed = Number(row.sessions) || 0;
  }
  const completed = next.success || next.sent;
  next.openToProduct = rate(next.products, next.opened);
  next.openToSend = rate(completed, next.opened);
  next.productToSend = rate(completed, next.products);
  next.startToSend = rate(completed, next.started || next.opened);
  return next;
}

export async function getFunnelStats(period = '30d') {
  await ensureFunnelTable();

  const funnelWhere = periodClause('created_at', period);
  const visitWhere = `${periodClause('visit_timestamp', period)} AND COALESCE(record_kind, 'pageview') = 'pageview'`;
  const sessionWhere = periodClause('session_start', period);

  const [steps, openPages, dropOffPages, exitPages, bouncePages, recent, sources] = await Promise.all([
    getRows(`
      SELECT form_type, step,
        COUNT(*)::int AS events,
        COUNT(DISTINCT session_id)::int AS sessions
      FROM analytics.funnel_events
      WHERE ${funnelWhere}
      GROUP BY form_type, step
    `),
    getRows(`
      SELECT form_type, COALESCE(NULLIF(page_path, ''), '/') AS page_path,
        COUNT(DISTINCT session_id)::int AS sessions
      FROM analytics.funnel_events
      WHERE ${funnelWhere} AND step = 'open'
      GROUP BY 1, 2
      ORDER BY sessions DESC
      LIMIT 20
    `),
    getRows(`
      WITH opened AS (
        SELECT DISTINCT session_id, form_type
        FROM analytics.funnel_events
        WHERE ${funnelWhere} AND step = 'open' AND session_id IS NOT NULL
      ),
      sent AS (
        SELECT DISTINCT session_id, form_type
        FROM analytics.funnel_events
        WHERE ${funnelWhere} AND step IN ('send', 'success') AND session_id IS NOT NULL
      ),
      last_page AS (
        SELECT DISTINCT ON (session_id)
          session_id,
          COALESCE(NULLIF(page_path, ''), '/') AS page_path
        FROM analytics.page_visits
        WHERE ${visitWhere} AND session_id IS NOT NULL
        ORDER BY session_id, visit_timestamp DESC
      )
      SELECT opened.form_type, last_page.page_path, COUNT(*)::int AS sessions
      FROM opened
      LEFT JOIN sent ON sent.session_id = opened.session_id AND sent.form_type = opened.form_type
      JOIN last_page ON last_page.session_id = opened.session_id
      WHERE sent.session_id IS NULL
      GROUP BY opened.form_type, last_page.page_path
      ORDER BY sessions DESC
      LIMIT 25
    `).catch(() => []),
    getRows(`
      WITH last_page AS (
        SELECT DISTINCT ON (session_id)
          session_id,
          COALESCE(NULLIF(page_path, ''), '/') AS page_path,
          COALESCE(NULLIF(traffic_source, ''), 'Direct') AS traffic_source
        FROM analytics.page_visits
        WHERE ${visitWhere} AND session_id IS NOT NULL
        ORDER BY session_id, visit_timestamp DESC
      )
      SELECT page_path,
        COUNT(*)::int AS exits,
        COUNT(*) FILTER (WHERE traffic_source = 'Google')::int AS google_exits
      FROM last_page
      GROUP BY page_path
      ORDER BY exits DESC
      LIMIT 20
    `).catch(() => []),
    getRows(`
      SELECT COALESCE(NULLIF(entry_page_path, ''), '/') AS page_path,
        COUNT(*)::int AS sessions
      FROM analytics.user_sessions
      WHERE ${sessionWhere}
        AND COALESCE(pages_visited, 1) <= 1
        AND COALESCE(quote_submitted, false) IS NOT TRUE
      GROUP BY 1
      ORDER BY sessions DESC
      LIMIT 15
    `).catch(() => []),
    getRows(`
      SELECT created_at, form_type, step, page_path, product_name, traffic_source, device_type, session_id
      FROM analytics.funnel_events
      WHERE ${funnelWhere}
      ORDER BY created_at DESC
      LIMIT 40
    `),
    getRows(`
      SELECT form_type, COALESCE(NULLIF(traffic_source, ''), 'Direct') AS traffic_source,
        COUNT(DISTINCT session_id)::int AS sessions
      FROM analytics.funnel_events
      WHERE ${funnelWhere} AND step = 'open'
      GROUP BY 1, 2
      ORDER BY sessions DESC
      LIMIT 20
    `),
  ]);

  return {
    period,
    quote: buildFunnel(steps, 'quote_builder'),
    quoteCart: buildFunnel(steps, 'quote_cart'),
    leadgen: buildFunnel(steps, 'leadgen'),
    contact: buildFunnel(steps, 'contact'),
    openPages,
    dropOffPages,
    exitPages,
    bouncePages,
    recent,
    sources,
  };
}
