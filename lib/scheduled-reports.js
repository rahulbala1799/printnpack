import cron from 'node-cron';
import { generateDailyReport, generateComparisonReport, formatReportForEmail } from './analytics-reports';
import { sendAnalyticsReport, sendErrorNotification } from './email-service';

// Schedule reports at 6 AM and 6 PM daily (Irish time)
const MORNING_REPORT_TIME = '0 6 * * *'; // 6:00 AM
const EVENING_REPORT_TIME = '0 18 * * *'; // 6:00 PM

// Initialize scheduled reports
export function initializeScheduledReports() {
  console.log('🚀 Initializing scheduled analytics reports...');
  
  try {
    // Schedule morning report (6 AM)
    cron.schedule(MORNING_REPORT_TIME, async () => {
      console.log('🌅 Generating morning analytics report...');
      await generateAndSendReport('morning');
    }, {
      timezone: 'Europe/Dublin'
    });

    // Schedule evening report (6 PM)
    cron.schedule(EVENING_REPORT_TIME, async () => {
      console.log('🌆 Generating evening analytics report...');
      await generateAndSendReport('evening');
    }, {
      timezone: 'Europe/Dublin'
    });

    console.log('✅ Scheduled reports initialized successfully');
    console.log(`   📅 Morning report: 6:00 AM (Irish time)`);
    console.log(`   📅 Evening report: 6:00 PM (Irish time)`);

  } catch (error) {
    console.error('❌ Error initializing scheduled reports:', error);
    sendErrorNotification(error, 'Scheduled Reports Initialization');
  }
}

// Generate and send a report
async function generateAndSendReport(reportType) {
  try {
    const startTime = Date.now();
    console.log(`📊 Starting ${reportType} report generation...`);

    // Generate the daily report
    const report = await generateDailyReport();
    
    if (!report) {
      console.log(`⚠️ No data available for ${reportType} report`);
      return;
    }

    // Generate comparison with previous day
    const comparison = await generateComparisonReport();
    
    // Format report for email
    const reportHtml = formatReportForEmail(report, comparison, reportType);
    
    // Send the report
    const emailResult = await sendAnalyticsReport(reportHtml, reportType);
    
    const duration = Date.now() - startTime;
    console.log(`✅ ${reportType} report sent successfully in ${duration}ms`);
    console.log(`   📧 Email ID: ${emailResult.messageId}`);
    console.log(`   📊 Report data: ${report.summary.totalVisitors} visitors, ${report.summary.totalPageViews} page views`);

  } catch (error) {
    console.error(`❌ Error generating ${reportType} report:`, error);
    await sendErrorNotification(error, `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report Generation`);
  }
}

// Manual report generation (for testing or on-demand reports)
export async function generateManualReport(reportType = 'daily', date = new Date()) {
  try {
    console.log(`📊 Generating manual ${reportType} report for ${date.toISOString().split('T')[0]}...`);
    
    const report = await generateDailyReport(date);
    
    if (!report) {
      throw new Error('No data available for the specified date');
    }

    const comparison = await generateComparisonReport(date);
    const reportHtml = formatReportForEmail(report, comparison, reportType);
    
    const emailResult = await sendAnalyticsReport(reportHtml, reportType);
    
    console.log(`✅ Manual ${reportType} report sent successfully:`, emailResult.messageId);
    return {
      success: true,
      report,
      comparison,
      emailResult
    };

  } catch (error) {
    console.error(`❌ Error generating manual ${reportType} report:`, error);
    throw error;
  }
}

// Test the reporting system
export async function testReportingSystem() {
  try {
    console.log('🧪 Testing analytics reporting system...');
    
    // Test database connection
    const report = await generateDailyReport();
    console.log('✅ Database connection: OK');
    
    // Test report generation
    if (report) {
      console.log('✅ Report generation: OK');
      console.log(`   📊 Sample data: ${report.summary.totalVisitors} visitors`);
    } else {
      console.log('⚠️ Report generation: No data available (this is normal for new systems)');
    }
    
    // Test email service
    const emailResult = await sendAnalyticsReport(
      '<h1>Test Report</h1><p>This is a test of the analytics system.</p>',
      'test'
    );
    console.log('✅ Email service: OK');
    console.log(`   📧 Test email sent: ${emailResult.messageId}`);
    
    console.log('🎉 All tests passed! Analytics system is working correctly.');
    return true;

  } catch (error) {
    console.error('❌ Test failed:', error);
    return false;
  }
}

// Get next report times
export function getNextReportTimes() {
  const now = new Date();
  const dublinTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Dublin' }));
  
  const morningReport = new Date(dublinTime);
  morningReport.setHours(6, 0, 0, 0);
  
  const eveningReport = new Date(dublinTime);
  eveningReport.setHours(18, 0, 0, 0);
  
  // If it's past 6 PM, next morning report is tomorrow
  if (dublinTime.getHours() >= 18) {
    morningReport.setDate(morningReport.getDate() + 1);
  }
  
  // If it's past 6 AM but before 6 PM, next is evening
  if (dublinTime.getHours() >= 6 && dublinTime.getHours() < 18) {
    // eveningReport is today
  } else if (dublinTime.getHours() < 6) {
    // morningReport is today
  }
  
  return {
    morning: morningReport,
    evening: eveningReport,
    currentTime: dublinTime
  };
}

// Stop scheduled reports
export function stopScheduledReports() {
  console.log('🛑 Stopping scheduled analytics reports...');
  cron.getTasks().forEach(task => {
    if (task.toString().includes('analytics')) {
      task.stop();
    }
  });
  console.log('✅ Scheduled reports stopped');
}
