import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ message: 'Email address is required' });
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send test email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Test Email from Print N Pack',
      text: 'This is a test email to confirm your email configuration is working correctly.',
      html: `
        <h2>Email Configuration Test</h2>
        <p>This is a test email to confirm your email configuration is working correctly.</p>
        <p>If you received this email, it means your email settings are properly configured.</p>
        <br>
        <p>Best regards,</p>
        <p>Print N Pack Team</p>
      `,
    });

    res.status(200).json({ message: 'Test email sent successfully' });
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).json({ message: 'Failed to send test email', error: error.message });
  }
} 