import { withAuth } from '../../../lib/withAuth';
import { listLiveVisitors } from '../../../lib/visitors/live';

function pathOnly(value) {
  if (!value) return '';
  try {
    return new URL(value, 'https://www.printnpack.ie').pathname;
  } catch {
    return String(value).slice(0, 180);
  }
}

async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const rows = await listLiveVisitors();
  res.status(200).json({
    visitors: rows.map((row) => {
      const trail = Array.isArray(row.trail) ? row.trail : [];
      return {
        id: row.session_id,
        device: row.device_type,
        country: row.country,
        city: row.city,
        source: row.entry_traffic_source || 'Direct',
        referrer: row.entry_referrer_domain,
        landed: row.entry_page_path || pathOnly(trail[0]?.path),
        next: trail[1]?.path || '',
        current: pathOnly(row.last_page) || trail[trail.length - 1]?.path || '',
        pages: row.pages_visited,
        invite: row.invite_message || '',
        trail: trail.map((step) => step.path).filter(Boolean),
        seenAt: row.session_end || row.session_start,
      };
    }),
  });
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
