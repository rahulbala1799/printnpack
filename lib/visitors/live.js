import { getRows } from '../database';

export async function listLiveVisitors() {
  return getRows(
    `SELECT s.session_id, s.device_type, s.country, s.city,
            s.entry_traffic_source, s.entry_referrer_domain, s.entry_page_path,
            s.last_page, s.pages_visited, s.session_start, s.session_end,
            (
              SELECT json_agg(json_build_object('path', p.page_path, 'at', p.visit_timestamp) ORDER BY p.visit_timestamp)
              FROM (
                SELECT page_path, visit_timestamp
                FROM analytics.page_visits
                WHERE session_id = s.session_id
                  AND page_path IS NOT NULL
                ORDER BY visit_timestamp ASC
                LIMIT 12
              ) p
            ) AS trail,
            (
              SELECT message FROM analytics.agent_invites i
              WHERE i.session_id = s.session_id
              ORDER BY i.created_at DESC
              LIMIT 1
            ) AS invite_message
     FROM analytics.user_sessions s
     WHERE COALESCE(s.session_end, s.session_start) > NOW() - INTERVAL '15 minutes'
     ORDER BY COALESCE(s.session_end, s.session_start) DESC
     LIMIT 40`
  );
}
