import { withAuth } from '../../../../lib/withAuth.js';
import {
  loadSearchConsoleData,
  analyzeSearchConsole,
  hasSearchConsoleData,
} from '../../../../lib/seo/search-console.js';
import {
  generateRecommendations,
  summarizeRecommendations,
} from '../../../../lib/seo/recommendations.js';

async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!hasSearchConsoleData()) {
    return res.status(404).json({
      error: 'No Search Console data found',
      hint: 'Upload GSC CSV exports via the SEO dashboard or run scripts/import-search-console.js',
    });
  }

  try {
    const data = loadSearchConsoleData();
    const analysis = analyzeSearchConsole(data);
    const recommendations = generateRecommendations(analysis);
    const recSummary = summarizeRecommendations(recommendations);

    return res.status(200).json({
      success: true,
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
