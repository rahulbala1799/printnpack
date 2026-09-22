import { withAuth } from '../../../../lib/withAuth.js';
import { analyzeSearchConsole, loadPeriodBundle } from '../../../../lib/seo/search-console.js';
import { generateRecommendations } from '../../../../lib/seo/recommendations.js';
import { formatSeoReportForEmail } from '../../../../lib/seo/email-report.js';
import nodemailer from 'nodemailer';

function createTransporter() {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { recipientEmail, period } = req.body || {};
  const bundle = await loadPeriodBundle(period || null);

  if (!bundle.data) {
    return res.status(404).json({ error: 'No Search Console data found for that period' });
  }

  try {
    const data = bundle.data;
    const analysis = analyzeSearchConsole(data);
    const recommendations = generateRecommendations(analysis);
    const html = formatSeoReportForEmail(analysis, recommendations);

    const transporter = createTransporter();
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail || process.env.ANALYTICS_RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: `📈 PrintNPack SEO Report — ${analysis.meta.dateRange}`,
      html,
      text: `PrintNPack SEO Report for ${analysis.meta.dateRange}. View in HTML format.`,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      recipient: mailOptions.to,
      summary: analysis.summary,
      recommendationCount: recommendations.length,
    });
  } catch (error) {
    console.error('SEO report error:', error);
    return res.status(500).json({
      error: 'Failed to send SEO report',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}

export default withAuth(handler, { roles: ['admin'] });
