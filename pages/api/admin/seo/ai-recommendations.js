import { generateText } from 'ai';
import { withAuth } from '../../../../lib/withAuth.js';
import {
  loadSearchConsoleData,
  analyzeSearchConsole,
  hasSearchConsoleData,
} from '../../../../lib/seo/search-console.js';
import { generateRecommendations } from '../../../../lib/seo/recommendations.js';
import { resolveAiModel, getAiConfigError, isAiConfigured } from '../../../../lib/ai/gateway.js';

function jsonError(res, status, error, details) {
  return res.status(status).json({ success: false, error, details });
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return jsonError(res, 405, 'Method not allowed');
  }

  if (!isAiConfigured()) {
    return jsonError(res, 503, getAiConfigError());
  }

  if (!hasSearchConsoleData()) {
    return jsonError(res, 404, 'No Search Console data found');
  }

  try {
    const data = loadSearchConsoleData();
    const analysis = analyzeSearchConsole(data);
    const recommendations = generateRecommendations(analysis);

    const topQueries = analysis.topQueriesByImpressions.slice(0, 20);
    const zeroClick = analysis.highDemandZeroClicks.slice(0, 15);
    const lowCtrPages = analysis.lowCtrPages.slice(0, 10);

    const userPrompt = `Analyze this Google Search Console data and provide actionable SEO recommendations.

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
      model: resolveAiModel(),
      system:
        'You are an SEO strategist for PrintNPack (printnpack.ie), an Irish printing and packaging company in Ashbourne, Meath. Give clear, actionable recommendations.',
      messages: [{ role: 'user', content: userPrompt }],
      maxOutputTokens: 2000,
    });

    return res.status(200).json({
      success: true,
      plan: text,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('SEO AI recommendations error:', error);

    const message = error?.message || 'Failed to generate AI recommendations';
    const isAuthError =
      error?.name === 'GatewayAuthenticationError' ||
      /unauthenticated|authentication failed|AI Gateway/i.test(message);

    return jsonError(
      res,
      isAuthError ? 503 : 500,
      isAuthError
        ? 'AI authentication failed. Check AI_GATEWAY_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY in Vercel environment variables.'
        : 'Failed to generate AI recommendations',
      message
    );
  }
}

export default withAuth(handler, { roles: ['admin'] });
