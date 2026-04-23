import nodemailer from 'nodemailer';
import { query } from '../../lib/database';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { name, email, phone, message, productInterest, subject: bodySubject, source: bodySource, company } = body;

    // Validate required fields: need name, message, and at least one of email/phone
    if (!name || !message || (!email && !phone)) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Save as lead first (so we never lose a submission)
    const leadSource = bodySource || productInterest || 'Contact';
    const emailSubject = bodySubject || `New Contact Form Submission - ${productInterest || leadSource}`;
    if (process.env.DATABASE_URL) {
      try {
        await query(
          `INSERT INTO leads (source, name, email, phone, company, subject, message, payload, status)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'new')`,
          [
            leadSource,
            name,
            email,
            phone || null,
            company || null,
            emailSubject,
            message,
            JSON.stringify(body),
          ]
        );
      } catch (leadErr) {
        console.error('Lead save failed:', leadErr);
        // Continue to send email
      }
    }

    // Email via Gmail
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        message: 'Email service not configured properly',
        error: 'Missing email credentials',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: false,
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      return res.status(500).json({
        message: 'We could not process your request right now. Please try again or contact us directly at info@printnpack.ie',
      });
    }

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'info@printnpack.ie',
      ...(email ? { replyTo: email } : {}),
      subject: emailSubject,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Product Interest: ${productInterest || leadSource}

Message:
${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
<p><strong>Source:</strong> ${leadSource}</p>
<h3>Message:</h3>
<p>${(message || '').replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong. Please try again or email us directly at info@printnpack.ie',
    });
  }
} 