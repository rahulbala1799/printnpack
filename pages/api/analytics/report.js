import { generateManualReport } from '../../../lib/scheduled-reports';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      reportType = 'daily', 
      date, 
      recipientEmail,
      includeComparison = true 
    } = req.body;

    // Validate report type
    const validTypes = ['daily', 'morning', 'evening'];
    if (!validTypes.includes(reportType)) {
      return res.status(400).json({ 
        error: 'Invalid report type. Must be one of: daily, morning, evening' 
      });
    }

    // Parse date if provided
    let reportDate = new Date();
    if (date) {
      reportDate = new Date(date);
      if (isNaN(reportDate.getTime())) {
        return res.status(400).json({ error: 'Invalid date format' });
      }
    }

    // Generate the report
    const result = await generateManualReport(reportType, reportDate);
    
    res.status(200).json({
      success: true,
      message: `${reportType} report generated and sent successfully`,
      reportType,
      reportDate: reportDate.toISOString().split('T')[0],
      result: {
        report: result.report,
        comparison: result.comparison,
        emailResult: result.emailResult
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Manual report generation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate report',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      timestamp: new Date().toISOString()
    });
  }
}
