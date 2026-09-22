import { withAuth } from '../../../../lib/withAuth.js';
import { analyzeSearchConsole, loadPeriodBundle } from '../../../../lib/seo/search-console.js';
import {
  generateRecommendations,
  summarizeRecommendations,
} from '../../../../lib/seo/recommendations.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const requested = typeof req.query.period === 'string' ? req.query.period : '';

  try {
    const bundle = await loadPeriodBundle(requested || null);

    if (!bundle.period || !bundle.data) {
      if (!bundle.periods.some((period) => period.available)) {
        return res.status(404).json({
          error: 'No Search Console data found',
          hint: 'Upload a Performance on Search zip from Google Search Console.',
          periods: bundle.periods,
        });
      }

      return res.status(200).json({
        success: true,
        available: false,
        period: bundle.period,
        periods: bundle.periods,
      });
    }

    const analysis = analyzeSearchConsole(bundle.data);
    const recommendations = generateRecommendations(analysis);
    const recSummary = summarizeRecommendations(recommendations);

    return res.status(200).json({
      success: true,
      available: true,
      period: bundle.period,
      periods: bundle.periods,
      analysis,
      recommendations,
      recSummary,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('SEO analyze error:', error);
    return res.status(500).json({
      error: 'Failed to analyze Search Console data',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
