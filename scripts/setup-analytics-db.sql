-- Analytics Database Setup Script
-- Run this in your Neon PostgreSQL database

-- Create analytics schema
CREATE SCHEMA IF NOT EXISTS analytics;

-- Page visits table
CREATE TABLE IF NOT EXISTS analytics.page_visits (
    id SERIAL PRIMARY KEY,
    page_url VARCHAR(500) NOT NULL,
    page_title VARCHAR(200),
    referrer VARCHAR(500),
    user_agent TEXT,
    ip_address_hash VARCHAR(64) NOT NULL, -- SHA256 hash of IP for privacy
    device_type VARCHAR(20), -- mobile, desktop, tablet
    country VARCHAR(2), -- ISO country code
    session_id VARCHAR(64),
    visit_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    load_time_ms INTEGER, -- page load time in milliseconds
    time_on_page_seconds INTEGER, -- time spent on page
    is_bounce BOOLEAN DEFAULT true -- single page visit
);

-- User sessions table
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

-- Daily summary table for caching
CREATE TABLE IF NOT EXISTS analytics.daily_summaries (
    id SERIAL PRIMARY KEY,
    report_date DATE UNIQUE NOT NULL,
    total_visitors INTEGER DEFAULT 0,
    total_page_views INTEGER DEFAULT 0,
    unique_pages INTEGER DEFAULT 0,
    avg_time_on_page_seconds DECIMAL(10,2) DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0,
    peak_hour INTEGER,
    top_pages JSONB, -- Store top pages as JSON
    device_breakdown JSONB, -- Store device stats as JSON
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Performance metrics table
CREATE TABLE IF NOT EXISTS analytics.performance_metrics (
    id SERIAL PRIMARY KEY,
    page_url VARCHAR(500) NOT NULL,
    load_time_ms INTEGER,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    device_type VARCHAR(20),
    country VARCHAR(2)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_page_visits_timestamp ON analytics.page_visits(visit_timestamp);
CREATE INDEX IF NOT EXISTS idx_page_visits_url ON analytics.page_visits(page_url);
CREATE INDEX IF NOT EXISTS idx_page_visits_session ON analytics.page_visits(session_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session ON analytics.user_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_timestamp ON analytics.user_sessions(session_start);
CREATE INDEX IF NOT EXISTS idx_daily_summaries_date ON analytics.daily_summaries(report_date);

-- Create function to anonymize IP addresses
CREATE OR REPLACE FUNCTION analytics.hash_ip(ip_address INET)
RETURNS VARCHAR(64)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Hash the IP address for privacy
    RETURN encode(sha256(ip_address::text::bytea), 'hex');
END;
$$;

-- Create function to get device type from user agent
CREATE OR REPLACE FUNCTION analytics.get_device_type(user_agent TEXT)
RETURNS VARCHAR(20)
LANGUAGE plpgsql
AS $$
BEGIN
    IF user_agent IS NULL THEN
        RETURN 'unknown';
    ELSIF user_agent ILIKE '%Mobile%' THEN
        RETURN 'mobile';
    ELSIF user_agent ILIKE '%Tablet%' THEN
        RETURN 'tablet';
    ELSE
        RETURN 'desktop';
    END IF;
END;
$$;

-- Create function to update daily summary
CREATE OR REPLACE FUNCTION analytics.update_daily_summary(report_date DATE)
RETURNS VOID
LANGUAGE plpgsql
AS $$
DECLARE
    summary_record RECORD;
BEGIN
    -- Get daily statistics
    SELECT 
        COUNT(DISTINCT ip_address_hash) as total_visitors,
        COUNT(*) as total_page_views,
        COUNT(DISTINCT page_url) as unique_pages,
        AVG(time_on_page_seconds) as avg_time_on_page,
        (COUNT(CASE WHEN is_bounce = true THEN 1 END) * 100.0 / COUNT(DISTINCT ip_address_hash)) as bounce_rate,
        EXTRACT(HOUR FROM visit_timestamp) as peak_hour
    INTO summary_record
    FROM analytics.page_visits 
    WHERE DATE(visit_timestamp) = report_date;
    
    -- Insert or update daily summary
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
        report_date,
        summary_record.total_visitors,
        summary_record.total_page_views,
        summary_record.unique_pages,
        summary_record.avg_time_on_page,
        summary_record.bounce_rate,
        summary_record.peak_hour,
        (SELECT jsonb_agg(jsonb_build_object('page', page_url, 'visits', visits))
         FROM (SELECT page_url, COUNT(*) as visits 
               FROM analytics.page_visits 
               WHERE DATE(visit_timestamp) = report_date 
               GROUP BY page_url 
               ORDER BY visits DESC 
               LIMIT 10) t),
        (SELECT jsonb_build_object(
            'mobile', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = report_date AND device_type = 'mobile'),
            'desktop', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = report_date AND device_type = 'desktop'),
            'tablet', (SELECT COUNT(*) FROM analytics.page_visits WHERE DATE(visit_timestamp) = report_date AND device_type = 'tablet')
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

-- Grant permissions (adjust as needed)
GRANT USAGE ON SCHEMA analytics TO neondb_owner;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA analytics TO neondb_owner;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA analytics TO neondb_owner;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA analytics TO neondb_owner;

-- Insert initial daily summary for today
INSERT INTO analytics.daily_summaries (report_date, total_visitors, total_page_views, unique_pages)
VALUES (CURRENT_DATE, 0, 0, 0)
ON CONFLICT (report_date) DO NOTHING;
