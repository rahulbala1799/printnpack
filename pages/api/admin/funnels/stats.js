import { withAuth } from '../../../../lib/withAuth';
import { getFunnelStats } from '../../../../lib/funnel-analytics';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const period = ['today', '7d', '30d', 'all'].includes(req.query.period)
    ? req.query.period
    : '30d';

  try {
    const stats = await getFunnelStats(period);
    return res.status(200).json({ success: true, ...stats });
  } catch (error) {
    console.error('Funnel stats error:', error);
    return res.status(500).json({
      error: 'Failed to load form funnel stats',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
