import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, productInterest } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log the attempt
    console.log('Attempting to send email from:', email);
    
    // Check if environment variables are loaded
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email credentials:', {
        GMAIL_USER: process.env.GMAIL_USER ? 'Set' : 'Missing',
        GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Missing'
      });
      return res.status(500).json({ 
        message: 'Email service not configured properly',
        error: 'Missing email credentials'
      });
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: true, // Enable debug logs
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return res.status(500).json({ 
        message: 'Failed to connect to email server',
        error: verifyError.message 
      });
    }

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'info@printnpack.ie',
      replyTo: email,
      subject: `New Contact Form Submission - ${productInterest}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Product Interest: ${productInterest}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<p><strong>Product Interest:</strong> ${productInterest}</p>
<h3>Message:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    console.log('Attempting to send email with options:', { ...mailOptions, text: '[Content hidden]' });
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error in contact API:', error);
    res.status(500).json({ 
      message: 'Error sending email',
      error: error.message 
    });
  }
} 