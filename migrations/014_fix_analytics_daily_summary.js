// Fix analytics.update_daily_summary — parameter name collided with column name

async function up(client) {
  await client.query(`CREATE SCHEMA IF NOT EXISTS analytics;`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.page_visits (
      id SERIAL PRIMARY KEY,
      page_url VARCHAR(500) NOT NULL,
      page_title VARCHAR(200),
      referrer VARCHAR(500),
      user_agent TEXT,
      ip_address_hash VARCHAR(64) NOT NULL,
      device_type VARCHAR(20),
      country VARCHAR(2),
      session_id VARCHAR(64),
      visit_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      load_time_ms INTEGER,
      time_on_page_seconds INTEGER,
      is_bounce BOOLEAN DEFAULT true
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.user_sessions (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(64) UNIQUE NOT NULL,
      ip_address_hash VARCHAR(64) NOT NULL,
      user_agent TEXT,
      device_type VARCHAR(20),
      country VARCHAR(2),
      first_page VARCHAR(500),
      last_page VARCHAR(500),
      pages_visited INTEGER DEFAULT 1,
      total_time_seconds INTEGER DEFAULT 0,
      session_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      session_end TIMESTAMP WITH TIME ZONE,
      is_active BOOLEAN DEFAULT true
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS analytics.daily_summaries (
      id SERIAL PRIMARY KEY,
      report_date DATE UNIQUE NOT NULL,
      total_visitors INTEGER DEFAULT 0,
      total_page_views INTEGER DEFAULT 0,
      unique_pages INTEGER DEFAULT 0,
      avg_time_on_page_seconds DECIMAL(10,2) DEFAULT 0,
      bounce_rate DECIMAL(5,2) DEFAULT 0,
      peak_hour INTEGER,
      top_pages JSONB,
      device_breakdown JSONB,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_timestamp
      ON analytics.page_visits(visit_timestamp);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_url
      ON analytics.page_visits(page_url);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_page_visits_session
      ON analytics.page_visits(session_id);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_user_sessions_session
      ON analytics.user_sessions(session_id);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_user_sessions_timestamp
      ON analytics.user_sessions(session_start);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_daily_summaries_date
      ON analytics.daily_summaries(report_date);
  `);

  await client.query(`
    DROP FUNCTION IF EXISTS analytics.update_daily_summary(DATE);
  `);

  await client.query(`
    CREATE OR REPLACE FUNCTION analytics.update_daily_summary(target_date DATE)
    RETURNS VOID
    LANGUAGE plpgsql
    AS $$
    DECLARE
      visitor_count INTEGER;
      page_view_count INTEGER;
      page_count INTEGER;
      avg_time DECIMAL(10,2);
      bounce_count INTEGER;
      peak_hour_val INTEGER;
    BEGIN
      SELECT COUNT(DISTINCT ip_address_hash) INTO visitor_count
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date;

      SELECT COUNT(*) INTO page_view_count
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date;

      SELECT COUNT(DISTINCT page_url) INTO page_count
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date;

      SELECT AVG(time_on_page_seconds) INTO avg_time
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date;

      SELECT COUNT(*) INTO bounce_count
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date AND is_bounce = true;

      SELECT EXTRACT(HOUR FROM visit_timestamp)::INTEGER INTO peak_hour_val
      FROM analytics.page_visits
      WHERE DATE(visit_timestamp) = target_date
      GROUP BY EXTRACT(HOUR FROM visit_timestamp)
      ORDER BY COUNT(*) DESC
      LIMIT 1;

      INSERT INTO analytics.daily_summaries (
        report_date,
        total_visitors,
        total_page_views,
        unique_pages,
        avg_time_on_page_seconds,
        bounce_rate,
        peak_hour,
        top_pages,
        device_breakdown,
        updated_at
      ) VALUES (
        target_date,
        COALESCE(visitor_count, 0),
        COALESCE(page_view_count, 0),
        COALESCE(page_count, 0),
        COALESCE(avg_time, 0),
        CASE WHEN COALESCE(visitor_count, 0) > 0
          THEN (bounce_count * 100.0 / visitor_count)
          ELSE 0
        END,
        peak_hour_val,
        (SELECT jsonb_agg(jsonb_build_object('page', page_url, 'visits', visits))
         FROM (
           SELECT page_url, COUNT(*) AS visits
           FROM analytics.page_visits
           WHERE DATE(visit_timestamp) = target_date
           GROUP BY page_url
           ORDER BY visits DESC
           LIMIT 10
         ) t),
        (SELECT jsonb_build_object(
          'mobile', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = target_date AND device_type = 'mobile'),
          'desktop', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = target_date AND device_type = 'desktop'),
          'tablet', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = target_date AND device_type = 'tablet')
        )),
        NOW()
      )
      ON CONFLICT (report_date)
      DO UPDATE SET
        total_visitors = EXCLUDED.total_visitors,
        total_page_views = EXCLUDED.total_page_views,
        unique_pages = EXCLUDED.unique_pages,
        avg_time_on_page_seconds = EXCLUDED.avg_time_on_page_seconds,
        bounce_rate = EXCLUDED.bounce_rate,
        peak_hour = EXCLUDED.peak_hour,
        top_pages = EXCLUDED.top_pages,
        device_breakdown = EXCLUDED.device_breakdown,
        updated_at = NOW();
    END;
    $$;
  `);

  console.log('✅ Fixed analytics.update_daily_summary and ensured page view tables exist');
}

async function down(client) {
  await client.query('DROP FUNCTION IF EXISTS analytics.update_daily_summary(DATE);');
  console.log('✅ Dropped analytics.update_daily_summary');
}

module.exports = { up, down };
