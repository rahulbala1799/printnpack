import nodemailer from 'nodemailer';
import { query } from '../database';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function clean(value, max) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return text ? text.slice(0, max) : '';
}

/**
 * Save a lead and email info@printnpack.ie.
 * Used by the contact form and the website assistant.
 */
export async function submitEnquiry(input) {
  const name = clean(input.name, 120);
  const email = clean(input.email, 160);
  const phone = clean(input.phone, 40);
  const company = clean(input.company, 120);
  const message = String(input.message || '').trim().slice(0, 4000);
  const productInterest = clean(input.productInterest, 160);
  const source = clean(input.source, 80) || 'Contact';
  const page = clean(input.page, 200);
  const subject = clean(input.subject, 180) || `New enquiry - ${productInterest || source}`;

  if (!name || !email || !message) {
    return { ok: false, status: 400, message: 'Missing required fields' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, status: 400, message: 'Enter a valid email address' };
  }

  const payload = {
    name,
    email,
    phone: phone || null,
    company: company || null,
    productInterest: productInterest || null,
    source,
    page: page || null,
    subject,
  };

  if (process.env.DATABASE_URL) {
    try {
      await query(
        `INSERT INTO leads (source, name, email, phone, company, subject, message, payload, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'new')`,
        [source, name, email, phone || null, company || null, subject, message, JSON.stringify(payload)]
      );
    } catch (leadErr) {
      console.error('Lead save failed:', leadErr);
    }
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return {
      ok: false,
      status: 500,
      message: 'Email service not configured properly',
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
  } catch {
    return {
      ok: false,
      status: 500,
      message: 'We could not process your request right now. Please try again or contact us directly at info@printnpack.ie',
    };
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Company: ${company || 'Not provided'}`,
    `Product interest: ${productInterest || source}`,
    page ? `Page: ${page}` : '',
    '',
    message,
  ].filter(Boolean).join('\n');

  const info = await transporter.sendMail({
    from: `"${name.replace(/"/g, '')}" <${process.env.GMAIL_USER}>`,
    to: 'info@printnpack.ie',
    replyTo: email,
    subject,
    text,
    html: `
<h2>${escapeHtml(subject)}</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
<p><strong>Source:</strong> ${escapeHtml(source)}</p>
${productInterest ? `<p><strong>Product:</strong> ${escapeHtml(productInterest)}</p>` : ''}
${page ? `<p><strong>Page:</strong> ${escapeHtml(page)}</p>` : ''}
<h3>Message:</h3>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  });

  return { ok: true, messageId: info.messageId };
}
