import { submitEnquiry } from '../../lib/leads/submit-enquiry';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { name, email, phone, message, productInterest, subject: bodySubject, source: bodySource, company } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const leadSource = bodySource || productInterest || 'Contact';
    const emailSubject = bodySubject || `New Contact Form Submission - ${productInterest || leadSource}`;
    const result = await submitEnquiry({
      name,
      email,
      phone,
      company,
      message,
      productInterest,
      source: leadSource,
      subject: emailSubject,
    });

    if (!result.ok) {
      return res.status(result.status).json({
        message: result.message,
        ...(result.status === 500 && result.message === 'Email service not configured properly'
          ? { error: 'Missing email credentials' }
          : {}),
      });
    }

    res.status(200).json({
      message: 'Email sent successfully',
      messageId: result.messageId,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong. Please try again or email us directly at info@printnpack.ie',
    });
  }
} 