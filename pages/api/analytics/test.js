import { testReportingSystem } from '../../../lib/scheduled-reports';
import { sendTestEmail } from '../../../lib/email-service';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { testType = 'full', recipientEmail } = req.body;

    let result;

    switch (testType) {
      case 'email':
        // Test only email service
        result = await sendTestEmail(recipientEmail);
        break;
      
      case 'database':
        // Test only database connection
        const { generateDailyReport } = await import('../../../lib/analytics-reports');
        const report = await generateDailyReport();
        result = {
          success: true,
          message: 'Database connection test successful',
          hasData: !!report,
          visitorCount: report?.summary?.totalVisitors || 0
        };
        break;
      
      case 'full':
      default:
        // Test entire system
        result = await testReportingSystem();
        break;
    }

    res.status(200).json({
      success: true,
      message: 'Analytics system test completed',
      testType,
      result,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Analytics test error:', error);
    res.status(500).json({
      success: false,
      error: 'Test failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      timestamp: new Date().toISOString()
    });
  }
}
