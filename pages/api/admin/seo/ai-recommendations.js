import { generateText } from 'ai';
import { withAuth } from '../../../../lib/withAuth.js';
import { analyzeSearchConsole, loadPeriodBundle } from '../../../../lib/seo/search-console.js';
import { generateRecommendations } from '../../../../lib/seo/recommendations.js';
import { resolveAiModel, getSeoAiModel, getAiConfigError, isAiConfigured } from '../../../../lib/ai/gateway.js';

export const config = {
  maxDuration: 300,
};

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

  const bundle = await loadPeriodBundle(req.body?.period || null);
  if (!bundle.data) {
    return jsonError(res, 404, 'No Search Console data found for that period');
  }

  try {
    const data = bundle.data;
    const analysis = analyzeSearchConsole(data);
    const recommendations = generateRecommendations(analysis);

    const topQueries = analysis.topQueriesByImpressions.slice(0, 8);
    const zeroClick = analysis.highDemandZeroClicks.slice(0, 8);
    const lowCtrPages = analysis.lowCtrPages.slice(0, 5);

    const userPrompt = `SEO action plan for printnpack.ie (${analysis.meta.dateRange}).
${analysis.summary.totalImpressions} impressions, ${analysis.summary.totalClicks} clicks, CTR ${analysis.summary.avgCtr}%, pos ${analysis.summary.avgPosition}.

Top terms:
${topQueries.map((q) => `- ${q.name}: ${q.impressions} imp, ${q.clicks} clk, pos ${q.position.toFixed(1)}`).join('\n')}

Zero-click demand:
${zeroClick.map((q) => `- ${q.name}: ${q.impressions} imp, pos ${q.position.toFixed(1)}`).join('\n')}

Low CTR pages:
${lowCtrPages.map((p) => `- ${p.path}: ${p.impressions} imp, ${p.ctr}% CTR`).join('\n')}

Mapped actions:
${recommendations.slice(0, 6).map((r) => `- [${r.priority}] ${r.query} → ${r.targetPage || 'new page'}`).join('\n')}

Return:
1. 5 this-week wins
2. 5 page fixes this month
3. 5 new content ideas from zero-click terms
4. Short technical notes
Irish print/packaging only. Use real printnpack.ie paths. Keep it under 700 words.`;

    const { text } = await generateText({
      model: resolveAiModel(getSeoAiModel()),
      system:
        'SEO strategist for PrintNPack Ireland. Be specific and brief. No preamble.',
      messages: [{ role: 'user', content: userPrompt }],
      maxOutputTokens: 900,
      abortSignal: AbortSignal.timeout(90000),
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
    const timedOut = error?.name === 'AbortError' || /timeout|timed out|aborted/i.test(message);

    return jsonError(
      res,
      isAuthError ? 503 : timedOut ? 504 : 500,
      isAuthError
        ? 'AI authentication failed. Check AI_GATEWAY_API_KEY or GOOGLE_GENERATIVE_AI_API_KEY in Vercel environment variables.'
        : timedOut
          ? 'AI analysis took too long. Try again — the shorter plan should finish this time.'
          : 'Failed to generate AI recommendations',
      message
    );
  }
}

export default withAuth(handler, { roles: ['admin'] });
