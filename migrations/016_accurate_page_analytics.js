// Collapse duplicate page views and store search terms for SEO reporting.

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    ALTER TABLE analytics.page_visits
      ADD COLUMN IF NOT EXISTS record_kind VARCHAR(20),
      ADD COLUMN IF NOT EXISTS search_term VARCHAR(300),
      ADD COLUMN IF NOT EXISTS utm_term VARCHAR(200),
      ADD COLUMN IF NOT EXISTS search_result_count INTEGER;
  `);

  await client.query(`
    ALTER TABLE analytics.user_sessions
      ADD COLUMN IF NOT EXISTS entry_search_term VARCHAR(300),
      ADD COLUMN IF NOT EXISTS quote_submitted BOOLEAN DEFAULT false;
  `);

  await client.query(`
    UPDATE analytics.page_visits
    SET page_path = COALESCE(
      NULLIF(page_path, ''),
      NULLIF(regexp_replace(split_part(page_url, '?', 1), '^https?://[^/]+', ''), ''),
      '/'
    )
    WHERE page_path IS NULL OR page_path = '';
  `);

  await client.query(`
    UPDATE analytics.page_visits
    SET search_term = NULLIF(
      replace(replace(substring(page_url from '[?&]q=([^&#]*)'), '+', ' '), '%20', ' '),
      ''
    )
    WHERE search_term IS NULL AND page_url ~ '[?&]q=';
  `);

  await client.query(`
    UPDATE analytics.page_visits
    SET utm_term = NULLIF(
      replace(replace(substring(page_url from '[?&]utm_term=([^&#]*)'), '+', ' '), '%20', ' '),
      ''
    )
    WHERE utm_term IS NULL AND page_url ~ '[?&]utm_term=';
  `);

  await client.query(`
    UPDATE analytics.page_visits
    SET record_kind = 'internal'
    WHERE page_path ~ '^/(admin|staff)(/|$)' OR page_path = '/login';
  `);

  await client.query(`
    UPDATE analytics.page_visits
    SET record_kind = 'bot'
    WHERE record_kind IS DISTINCT FROM 'internal'
      AND COALESCE(user_agent, '') ~* 'bot|crawl|spider|slurp|headless|facebookexternalhit|preview';
  `);

  await client.query(`
    WITH ranked AS (
      SELECT
        id,
        ROW_NUMBER() OVER (
          PARTITION BY
            CASE
              WHEN session_id IS NOT NULL AND session_id <> '' THEN 's:' || session_id
              ELSE 'a:' || COALESCE(ip_address_hash, '') || '|' || COALESCE(user_agent, '') || '|' ||
                ((visit_timestamp AT TIME ZONE 'Europe/Dublin')::date)::text
            END,
            COALESCE(NULLIF(page_path, ''), '/')
          ORDER BY COALESCE(time_on_page_seconds, 0) DESC, visit_timestamp ASC, id ASC
        ) AS rn
      FROM analytics.page_visits
      WHERE record_kind IS DISTINCT FROM 'internal'
        AND record_kind IS DISTINCT FROM 'bot'
    )
    UPDATE analytics.page_visits AS visit
    SET record_kind = CASE WHEN ranked.rn = 1 THEN 'pageview' ELSE 'duplicate' END
    FROM ranked
    WHERE visit.id = ranked.id;
  `);

  await client.query(`
    WITH kept AS (
      SELECT session_id, COUNT(*) AS pages,
        (ARRAY_AGG(id ORDER BY visit_timestamp ASC, id ASC))[1] AS first_id
      FROM analytics.page_visits
      WHERE record_kind = 'pageview' AND session_id IS NOT NULL AND session_id <> ''
      GROUP BY session_id
    )
    UPDATE analytics.page_visits AS visit
    SET
      is_landing_page = visit.id = kept.first_id,
      is_bounce = kept.pages = 1
    FROM kept
    WHERE visit.session_id = kept.session_id
      AND visit.record_kind = 'pageview';
  `);

  await client.query(`
    WITH kept AS (
      SELECT
        session_id,
        COUNT(DISTINCT page_path)::int AS pages,
        COALESCE(MAX(time_on_page_seconds), 0) AS max_time,
        (ARRAY_AGG(page_url ORDER BY visit_timestamp ASC))[1] AS first_page,
        (ARRAY_AGG(page_url ORDER BY visit_timestamp DESC))[1] AS last_page,
        (ARRAY_AGG(page_path ORDER BY visit_timestamp ASC))[1] AS entry_page_path,
        (ARRAY_AGG(traffic_source ORDER BY visit_timestamp ASC))[1] AS entry_traffic_source,
        (ARRAY_AGG(referrer_domain ORDER BY visit_timestamp ASC))[1] AS entry_referrer_domain,
        (ARRAY_AGG(product_family ORDER BY visit_timestamp ASC))[1] AS entry_product_family,
        (ARRAY_AGG(search_term ORDER BY visit_timestamp ASC) FILTER (WHERE search_term IS NOT NULL))[1] AS entry_search_term
      FROM analytics.page_visits
      WHERE record_kind = 'pageview' AND session_id IS NOT NULL AND session_id <> ''
      GROUP BY session_id
    )
    UPDATE analytics.user_sessions AS session
    SET
      pages_visited = kept.pages,
      total_time_seconds = kept.max_time,
      first_page = kept.first_page,
      last_page = kept.last_page,
      entry_page_path = kept.entry_page_path,
      entry_traffic_source = COALESCE(kept.entry_traffic_source, session.entry_traffic_source),
      entry_referrer_domain = COALESCE(kept.entry_referrer_domain, session.entry_referrer_domain),
      entry_product_family = COALESCE(kept.entry_product_family, session.entry_product_family),
      entry_search_term = kept.entry_search_term
    FROM kept
    WHERE session.session_id = kept.session_id;
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_record_kind
      ON analytics.page_visits(record_kind);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_search_term
      ON analytics.page_visits(search_term)
      WHERE search_term IS NOT NULL;
  `);

  await client.query(`
    SELECT analytics.update_daily_summary(day)
    FROM (
      SELECT DISTINCT (visit_timestamp AT TIME ZONE 'Europe/Dublin')::date AS day
      FROM analytics.page_visits
    ) days;
  `);

  console.log('✅ Rebuilt page analytics and collapsed duplicate visits');
}

async function down(client) {
  await client.query(`
    ALTER TABLE analytics.page_visits
      DROP COLUMN IF EXISTS record_kind,
      DROP COLUMN IF EXISTS search_term,
      DROP COLUMN IF EXISTS utm_term,
      DROP COLUMN IF EXISTS search_result_count;
  `);
  await client.query(`
    ALTER TABLE analytics.user_sessions
      DROP COLUMN IF EXISTS entry_search_term,
      DROP COLUMN IF EXISTS quote_submitted;
  `);
  console.log('✅ Removed accurate page analytics columns');
}

module.exports = { up, down };
