import { generateText } from 'ai';
import { withAuth } from '../../../../lib/withAuth.js';
import {
  loadSearchConsoleData,
  analyzeSearchConsole,
  hasSearchConsoleData,
} from '../../../../lib/seo/search-console.js';
import { generateRecommendations } from '../../../../lib/seo/recommendations.js';
import { getInvoiceAiModel, getAiConfigError, isAiConfigured } from '../../../../lib/ai/gateway.js';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAiConfigured()) {
    return res.status(503).json({ error: getAiConfigError() });
  }

  if (!hasSearchConsoleData()) {
    return res.status(404).json({ error: 'No Search Console data found' });
  }

  try {
    const data = loadSearchConsoleData();
    const analysis = analyzeSearchConsole(data);
    const recommendations = generateRecommendations(analysis);

    const topQueries = analysis.topQueriesByImpressions.slice(0, 20);
    const zeroClick = analysis.highDemandZeroClicks.slice(0, 15);
    const lowCtrPages = analysis.lowCtrPages.slice(0, 10);

    const prompt = `You are an SEO strategist for PrintNPack (printnpack.ie), an Irish printing and packaging company in Ashbourne, Meath.

Analyze this Google Search Console data and provide actionable SEO recommendations.

PERIOD: ${analysis.meta.dateRange}
SUMMARY: ${analysis.summary.totalImpressions} impressions, ${analysis.summary.totalClicks} clicks, ${analysis.summary.avgCtr}% CTR, avg position ${analysis.summary.avgPosition}

TOP SEARCHED TERMS (by impressions):
${topQueries.map((q) => `- "${q.name}": ${q.impressions} imp, ${q.clicks} clicks, pos ${q.position.toFixed(1)}`).join('\n')}

HIGH DEMAND, ZERO CLICKS:
${zeroClick.map((q) => `- "${q.name}": ${q.impressions} imp, pos ${q.position.toFixed(1)}`).join('\n')}

LOW CTR PAGES:
${lowCtrPages.map((p) => `- ${p.path}: ${p.impressions} imp, ${p.ctr}% CTR, pos ${p.position.toFixed(1)}`).join('\n')}

EXISTING RULE-BASED RECOMMENDATIONS:
${recommendations.slice(0, 10).map((r) => `- [${r.priority}] "${r.query}" → ${r.targetPage || 'NEW PAGE NEEDED'}`).join('\n')}

Provide a concise SEO action plan with:
1. Top 5 immediate wins (this week)
2. Top 5 content/page optimizations (this month)
3. New content ideas based on high-impression zero-click queries
4. Technical SEO notes (canonical URLs, meta titles, internal linking)

Be specific to Irish printing/packaging market. Reference actual page paths on printnpack.ie.`;

    const { text } = await generateText({
      model: getInvoiceAiModel(),
      prompt,
      maxTokens: 2000,
    });

    return res.status(200).json({
      success: true,
      plan: text,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('SEO AI recommendations error:', error);
    return res.status(500).json({
      error: 'Failed to generate AI recommendations',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
