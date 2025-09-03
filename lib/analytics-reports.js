import { query, getRow, getRows } from './database';

// Generate daily analytics report
export async function generateDailyReport(reportDate = new Date()) {
  try {
    const dateStr = reportDate.toISOString().split('T')[0];
    
    // Get daily summary
    const dailySummary = await getRow(`
      SELECT * FROM analytics.daily_summaries 
      WHERE report_date = $1
    `, [dateStr]);

    if (!dailySummary) {
      console.log(`No data found for date: ${dateStr}`);
      return null;
    }

    // Get top pages for the day
    const topPages = await getRows(`
      SELECT page_url, COUNT(*) as visits
      FROM analytics.page_visits 
      WHERE DATE(visit_timestamp) = $1
      GROUP BY page_url 
      ORDER BY visits DESC 
      LIMIT 10
    `, [dateStr]);

    // Get hourly traffic breakdown
    const hourlyTraffic = await getRows(`
      SELECT 
        EXTRACT(HOUR FROM visit_timestamp) as hour,
        COUNT(*) as visits
      FROM analytics.page_visits 
      WHERE DATE(visit_timestamp) = $1
      GROUP BY EXTRACT(HOUR FROM visit_timestamp)
      ORDER BY hour
    `, [dateStr]);

    // Get device breakdown
    const deviceBreakdown = await getRows(`
      SELECT 
        device_type,
        COUNT(*) as visits
      FROM analytics.page_visits 
      WHERE DATE(visit_timestamp) = $1
      GROUP BY device_type
      ORDER BY visits DESC
    `, [dateStr]);

    // Get referrer sources
    const referrerSources = await getRows(`
      SELECT 
        CASE 
          WHEN referrer IS NULL OR referrer = '' THEN 'Direct'
          WHEN referrer LIKE '%google%' THEN 'Google'
          WHEN referrer LIKE '%facebook%' THEN 'Facebook'
          WHEN referrer LIKE '%twitter%' THEN 'Twitter'
          WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn'
          ELSE 'Other'
        END as source,
        COUNT(*) as visits
      FROM analytics.page_visits 
      WHERE DATE(visit_timestamp) = $1
      GROUP BY 
        CASE 
          WHEN referrer IS NULL OR referrer = '' THEN 'Direct'
          WHEN referrer LIKE '%google%' THEN 'Google'
          WHEN referrer LIKE '%facebook%' THEN 'Facebook'
          WHEN referrer LIKE '%twitter%' THEN 'Twitter'
          WHEN referrer LIKE '%linkedin%' THEN 'LinkedIn'
          ELSE 'Other'
        END
      ORDER BY visits DESC
    `, [dateStr]);

    // Calculate performance metrics
    const performanceMetrics = await getRow(`
      SELECT 
        AVG(load_time_ms) as avg_load_time,
        AVG(time_on_page_seconds) as avg_time_on_page
      FROM analytics.page_visits 
      WHERE DATE(visit_timestamp) = $1 
        AND load_time_ms IS NOT NULL
    `, [dateStr]);

    // Format the report
    const report = {
      date: dateStr,
      summary: {
        totalVisitors: dailySummary.total_visitors || 0,
        totalPageViews: dailySummary.total_page_views || 0,
        uniquePages: dailySummary.unique_pages || 0,
        avgTimeOnPage: Math.round((dailySummary.avg_time_on_page_seconds || 0) * 100) / 100,
        bounceRate: Math.round((dailySummary.bounce_rate || 0) * 100) / 100,
        peakHour: dailySummary.peak_hour || 0
      },
      topPages: topPages.map(page => ({
        url: page.page_url,
        visits: parseInt(page.visits)
      })),
      hourlyTraffic: hourlyTraffic.map(hour => ({
        hour: parseInt(hour.hour),
        visits: parseInt(hour.visits)
      })),
      deviceBreakdown: deviceBreakdown.map(device => ({
        type: device.device_type,
        visits: parseInt(device.visits)
      })),
      referrerSources: referrerSources.map(source => ({
        source: source.source,
        visits: parseInt(source.visits)
      })),
      performance: {
        avgLoadTime: Math.round(performanceMetrics?.avg_load_time || 0),
        avgTimeOnPage: Math.round(performanceMetrics?.avg_time_on_page || 0)
      }
    };

    return report;
  } catch (error) {
    console.error('Error generating daily report:', error);
    throw error;
  }
}

// Generate comparison with previous day
export async function generateComparisonReport(reportDate = new Date()) {
  try {
    const currentDate = reportDate.toISOString().split('T')[0];
    const previousDate = new Date(reportDate);
    previousDate.setDate(previousDate.getDate() - 1);
    const previousDateStr = previousDate.toISOString().split('T')[0];

    const currentReport = await generateDailyReport(reportDate);
    const previousReport = await generateDailyReport(previousDate);

    if (!currentReport || !previousReport) {
      return null;
    }

    const comparison = {
      visitors: {
        current: currentReport.summary.totalVisitors,
        previous: previousReport.summary.totalVisitors,
        change: currentReport.summary.totalVisitors - previousReport.summary.totalVisitors,
        percentage: previousReport.summary.totalVisitors > 0 
          ? Math.round(((currentReport.summary.totalVisitors - previousReport.summary.totalVisitors) / previousReport.summary.totalVisitors) * 100)
          : 0
      },
      pageViews: {
        current: currentReport.summary.totalPageViews,
        previous: previousReport.summary.totalPageViews,
        change: currentReport.summary.totalPageViews - previousReport.summary.totalPageViews,
        percentage: previousReport.summary.totalPageViews > 0
          ? Math.round(((currentReport.summary.totalPageViews - previousReport.summary.totalPageViews) / previousReport.summary.totalPageViews) * 100)
          : 0
      },
      bounceRate: {
        current: currentReport.summary.bounceRate,
        previous: previousReport.summary.bounceRate,
        change: currentReport.summary.bounceRate - previousReport.summary.bounceRate,
        percentage: previousReport.summary.bounceRate > 0
          ? Math.round(((currentReport.summary.bounceRate - previousReport.summary.bounceRate) / previousReport.summary.bounceRate) * 100)
          : 0
      }
    };

    return comparison;
  } catch (error) {
    console.error('Error generating comparison report:', error);
    throw error;
  }
}

// Format report for email
export function formatReportForEmail(report, comparison = null, reportType = 'daily') {
  const timeOfDay = reportType === 'morning' ? '🌅 Morning' : '🌆 Evening';
  
  let emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; }
        .metric-card { background: #f8f9fa; border-radius: 8px; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; }
        .metric-value { font-size: 24px; font-weight: bold; color: #667eea; }
        .metric-label { color: #666; font-size: 14px; }
        .comparison { background: #e8f5e8; border-left-color: #28a745; }
        .comparison.negative { background: #ffeaea; border-left-color: #dc3545; }
        .top-pages { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin: 10px 0; }
        .page-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .page-item:last-child { border-bottom: none; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>${timeOfDay} Website Analytics Report</h1>
          <p>${new Date(report.date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        
        <div class="metric-card">
          <div class="metric-value">${report.summary.totalVisitors}</div>
          <div class="metric-label">Total Unique Visitors</div>
        </div>
        
        <div class="metric-card">
          <div class="metric-value">${report.summary.totalPageViews}</div>
          <div class="metric-label">Total Page Views</div>
        </div>
        
        <div class="metric-card">
          <div class="metric-value">${report.summary.avgTimeOnPage}s</div>
          <div class="metric-label">Average Time on Page</div>
        </div>
        
        <div class="metric-card">
          <div class="metric-value">${report.summary.bounceRate}%</div>
          <div class="metric-label">Bounce Rate</div>
        </div>
  `;

  // Add comparison if available
  if (comparison) {
    emailHtml += `
        <h3>📊 Comparison with Previous Day</h3>
        <div class="metric-card comparison ${comparison.visitors.percentage >= 0 ? '' : 'negative'}">
          <div class="metric-value">${comparison.visitors.percentage >= 0 ? '+' : ''}${comparison.visitors.percentage}%</div>
          <div class="metric-label">Visitors Change</div>
        </div>
        
        <div class="metric-card comparison ${comparison.pageViews.percentage >= 0 ? '' : 'negative'}">
          <div class="metric-value">${comparison.pageViews.percentage >= 0 ? '+' : ''}${comparison.pageViews.percentage}%</div>
          <div class="metric-label">Page Views Change</div>
        </div>
    `;
  }

  // Add top pages
  if (report.topPages.length > 0) {
    emailHtml += `
        <h3>🏆 Top Pages Today</h3>
        <div class="top-pages">
    `;
    
    report.topPages.forEach((page, index) => {
      emailHtml += `
            <div class="page-item">
              <span>${index + 1}. ${page.url}</span>
              <span><strong>${page.visits}</strong> visits</span>
            </div>
      `;
    });
    
    emailHtml += `</div>`;
  }

  // Add device breakdown
  if (report.deviceBreakdown.length > 0) {
    emailHtml += `
        <h3>📱 Device Breakdown</h3>
    `;
    
    report.deviceBreakdown.forEach(device => {
      emailHtml += `
        <div class="metric-card">
          <div class="metric-value">${device.visits}</div>
          <div class="metric-label">${device.type.charAt(0).toUpperCase() + device.type.slice(1)}</div>
        </div>
      `;
    });
  }

  // Add performance metrics
  emailHtml += `
        <h3>⚡ Performance Metrics</h3>
        <div class="metric-card">
          <div class="metric-value">${report.performance.avgLoadTime}ms</div>
          <div class="metric-label">Average Page Load Time</div>
        </div>
        
        <div class="footer">
          <p>Generated by printNpack Analytics System</p>
          <p>Report time: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Dublin' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return emailHtml;
}
