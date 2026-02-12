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
  
    
    // Check if environment variables are loaded
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {

      return res.status(500).json({ 
        message: 'Email service not configured properly',
        error: 'Missing email credentials'
      });
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: false
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      return res.status(500).json({
        message: 'We could not process your request right now. Please try again or contact us directly at info@printnpack.ie',
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
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong. Please try again or email us directly at info@printnpack.ie',
    });
  }
} 