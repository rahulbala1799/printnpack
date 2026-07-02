import { withAuth } from '../../../../lib/withAuth';
import { getPhoneClickStats } from '../../../../lib/phone-click-analytics';
import { SITE_PHONE_DISPLAY } from '../../../../lib/site';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const period = ['today', '7d', '30d', 'all'].includes(req.query.period)
    ? req.query.period
    : '30d';

  try {
    const stats = await getPhoneClickStats(period);

    return res.status(200).json({
      success: true,
      phoneNumber: SITE_PHONE_DISPLAY,
      ...stats,
    });
  } catch (error) {
    console.error('Phone click stats error:', error);

    const missingTable = error.message?.includes('phone_click_events');
    return res.status(missingTable ? 503 : 500).json({
      error: missingTable
        ? 'Phone click tracking table not set up yet. Run database migrations.'
        : 'Failed to load phone click stats',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      period,
      phoneNumber: SITE_PHONE_DISPLAY,
      totals: { total_clicks: 0, unique_sessions: 0, unique_pages: 0 },
      byDay: [],
      byPage: [],
      byLocation: [],
      byDevice: [],
      byPhoneHref: [],
      recent: [],
      periodTotals: [],
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
