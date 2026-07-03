import { withAuth } from '../../../../lib/withAuth';
import { getPageViewStats } from '../../../../lib/page-view-analytics';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const period = ['today', '7d', '30d', 'all'].includes(req.query.period)
    ? req.query.period
    : '30d';

  try {
    const stats = await getPageViewStats(period);

    return res.status(200).json({
      success: true,
      ...stats,
    });
  } catch (error) {
    console.error('Page view stats error:', error);

    const missingTable =
      error.code === '42P01' ||
      /relation "analytics\.page_visits" does not exist/i.test(error.message || '');
    return res.status(missingTable ? 503 : 500).json({
      error: missingTable
        ? 'Page view tracking tables not set up. Run analytics DB setup or migrations.'
        : 'Failed to load page view stats',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      period,
      totals: {
        total_views: 0,
        unique_visitors: 0,
        unique_pages: 0,
        avg_time_on_page: 0,
        bounce_rate: 0,
        landing_page_views: 0,
        landing_sessions: 0,
      },
      byDay: [],
      byProductFamily: [],
      byProductPage: [],
      byLandingPage: [],
      byReferrer: [],
      byReferrerDomain: [],
      byProductSource: [],
      byPage: [],
      byDevice: [],
      byCountry: [],
      recentViews: [],
      visitors: [],
      periodTotals: [],
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
