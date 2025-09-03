import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  // For Gmail (you can change this to your email provider)
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD // Use app-specific password for Gmail
    }
  });

  // Alternative: For other email providers (uncomment and modify as needed)
  /*
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  */
};

// Send analytics report email
export async function sendAnalyticsReport(reportHtml, reportType = 'daily', recipientEmail = null) {
  try {
    const transporter = createTransporter();
    
    const timeOfDay = reportType === 'morning' ? 'Morning' : 'Evening';
    const currentTime = new Date().toLocaleString('en-GB', { 
      timeZone: 'Europe/Dublin',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail || process.env.ANALYTICS_RECIPIENT_EMAIL,
      subject: `🌐 printNpack ${timeOfDay} Analytics Report - ${currentTime}`,
      html: reportHtml,
      text: `printNpack ${timeOfDay} Analytics Report - ${currentTime}\n\nPlease view this email in HTML format for the complete report.`
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log(`${timeOfDay} analytics report sent successfully:`, info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error(`Error sending ${reportType} analytics report:`, error);
    throw error;
  }
}

// Send test email
export async function sendTestEmail(recipientEmail = null) {
  try {
    const transporter = createTransporter();
    
    const testHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; }
          .content { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🧪 Analytics System Test</h1>
            <p>Email Service Verification</p>
          </div>
          
          <div class="content">
            <h2>✅ Email Service Working!</h2>
            <p>This is a test email to verify that your analytics email system is properly configured.</p>
            <p><strong>Test Time:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Dublin' })}</p>
            <p><strong>System:</strong> printNpack Analytics</p>
          </div>
          
          <p style="text-align: center; color: #666; font-size: 12px;">
            If you received this email, your analytics email system is working correctly!
          </p>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail || process.env.ANALYTICS_RECIPIENT_EMAIL,
      subject: '🧪 printNpack Analytics System Test',
      html: testHtml,
      text: 'printNpack Analytics System Test - Email service verification successful!'
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Test email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error sending test email:', error);
    throw error;
  }
}

// Send error notification email
export async function sendErrorNotification(error, context = 'Analytics System') {
  try {
    const transporter = createTransporter();
    
    const errorHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; }
          .content { background: #ffeaea; border: 1px solid #dc3545; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .error-details { background: #f8f9fa; border-radius: 8px; padding: 15px; margin: 10px 0; font-family: monospace; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚨 System Error Alert</h1>
            <p>${context}</p>
          </div>
          
          <div class="content">
            <h2>⚠️ Error Detected</h2>
            <p>An error has occurred in your analytics system that requires attention.</p>
            
            <h3>Error Details:</h3>
            <div class="error-details">
              <strong>Time:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/Dublin' })}<br>
              <strong>Error:</strong> ${error.message || 'Unknown error'}<br>
              <strong>Stack:</strong> ${error.stack || 'No stack trace available'}
            </div>
            
            <p><strong>Action Required:</strong> Please check your analytics system logs and resolve this issue.</p>
          </div>
          
          <p style="text-align: center; color: #666; font-size: 12px;">
            This is an automated error notification from printNpack Analytics System
          </p>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ANALYTICS_RECIPIENT_EMAIL,
      subject: `🚨 ${context} Error Alert`,
      html: errorHtml,
      text: `${context} Error Alert - ${error.message || 'Unknown error'}`
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Error notification email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      timestamp: new Date().toISOString()
    };

  } catch (emailError) {
    console.error('Error sending error notification email:', emailError);
    // Don't throw here to avoid infinite loops
    return {
      success: false,
      error: emailError.message
    };
  }
}
