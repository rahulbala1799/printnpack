import { withAuth } from '../../../../lib/withAuth.js';
import { getRow, query, transaction, getRows } from '../../../../lib/database.js';
import { calcQuoteTotals, recalcLineTotal } from '../../../../lib/invoices/line-item.js';
import { recalcPrintedLinesForDocument } from '../../../../lib/invoices/recalc-quote-lines.js';
import { savePriceSnapshot, getCustomerPriceCatalog, applySavedPricesToItems } from '../../../../lib/invoices/customer-prices.js';
import { generatePdfBuffer } from '../../../../lib/invoices/generate-pdf.js';
import { formatQtySize } from '../../../../lib/invoices/line-item.js';
import fs from 'fs';
import path from 'path';

function mapQuote(r) {
  return {
    id: r.id,
    session_id: r.session_id,
    customer_id: r.customer_id,
    lead_id: r.lead_id,
    customer_name: r.customer_name,
    document_type: r.document_type,
    items: r.items || [],
    subtotal: Number(r.subtotal),
    vat_rate: Number(r.vat_rate),
    vat_amount: Number(r.vat_amount),
    total: Number(r.total),
    status: r.status,
    notes: r.notes,
    created_at: r.created_at,
    updated_at: r.updated_at,
  };
}

async function nextInvoiceNumber(client) {
  const year = new Date().getFullYear();
  const r = await client.query(`SELECT nextval('invoice_number_seq') AS n`);
  const n = String(r.rows[0].n).padStart(4, '0');
  return `INV-${year}-${n}`;
}

async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing id' });

  if (req.method === 'GET') {
    const quote = await getRow(`SELECT * FROM quotes WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
    if (quote) return res.status(200).json({ type: 'quote', ...mapQuote(quote) });
    const invoice = await getRow(`SELECT * FROM invoices WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
    if (invoice) {
      return res.status(200).json({
        type: 'invoice',
        id: invoice.id,
        quote_id: invoice.quote_id,
        customer_id: invoice.customer_id,
        lead_id: invoice.lead_id,
        customer_name: invoice.customer_name,
        document_type: invoice.document_type,
        invoice_number: invoice.invoice_number,
        items: invoice.items || [],
        subtotal: Number(invoice.subtotal),
        vat_rate: Number(invoice.vat_rate),
        vat_amount: Number(invoice.vat_amount),
        total: Number(invoice.total),
        status: invoice.status,
        pdf_path: invoice.pdf_path,
        sent_at: invoice.sent_at,
        created_at: invoice.created_at,
        updated_at: invoice.updated_at,
      });
    }
    return res.status(404).json({ error: 'Not found' });
  }

  if (req.method === 'PATCH') {
    try {
      const quote = await getRow(`SELECT * FROM quotes WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
      if (!quote) return res.status(404).json({ error: 'Quote not found' });

      const body = req.body || {};
      const documentType = body.document_type ?? quote.document_type;
      const vatRate = body.vat_rate ?? quote.vat_rate ?? 0.23;
      let items = (body.items ?? quote.items ?? []).map(recalcLineTotal);

      if (body.document_type && body.document_type !== quote.document_type) {
        items = await recalcPrintedLinesForDocument(items, documentType, getRows, getRow, vatRate);
      }

      const totals = calcQuoteTotals(items, documentType, vatRate);

      const updated = await getRow(
        `UPDATE quotes SET
          customer_id = COALESCE($1, customer_id),
          lead_id = COALESCE($2, lead_id),
          customer_name = COALESCE($3, customer_name),
          document_type = $4,
          items = $5,
          subtotal = $6, vat_rate = $7, vat_amount = $8, total = $9,
          notes = COALESCE($10, notes),
          status = COALESCE($11, status),
          updated_at = now()
         WHERE id = $12 RETURNING *`,
        [
          body.customer_id,
          body.lead_id,
          body.customer_name,
          documentType,
          JSON.stringify(items),
          totals.subtotal,
          totals.vat_rate,
          totals.vat_amount,
          totals.total,
          body.notes,
          body.status,
          id,
        ]
      );
      return res.status(200).json(mapQuote(updated));
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Update failed' });
    }
  }

  if (req.method === 'POST' && req.query.action === 'apply-saved-prices') {
    try {
      const quote = await getRow(`SELECT * FROM quotes WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
      if (!quote) return res.status(404).json({ error: 'Quote not found' });
      if (!quote.customer_id) return res.status(400).json({ error: 'Link a customer first' });

      const body = req.body || {};
      const catalog = await getCustomerPriceCatalog(getRow, getRows, quote.customer_id);
      if (!catalog?.products?.length) return res.status(400).json({ error: 'No saved prices' });

      const lines = applySavedPricesToItems(catalog, {
        mode: body.mode || 'latest',
        selections: body.selections || [],
        match_keys: body.match_keys || [],
      });
      if (!lines.length) return res.status(400).json({ error: 'No matching saved prices' });

      let items = body.replace_existing ? [] : [...(quote.items || [])];
      for (const line of lines) {
        const n = recalcLineTotal(line);
        items.push(n);
      }
      const totals = calcQuoteTotals(items, quote.document_type, quote.vat_rate);
      const updated = await getRow(
        `UPDATE quotes SET items = $1, subtotal = $2, vat_amount = $3, total = $4, updated_at = now() WHERE id = $5 RETURNING *`,
        [JSON.stringify(items), totals.subtotal, totals.vat_amount, totals.total, id]
      );
      return res.status(200).json(mapQuote(updated));
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Apply saved prices failed' });
    }
  }

  if (req.method === 'POST' && req.query.action === 'finalize') {
    try {
      const quote = await getRow(`SELECT * FROM quotes WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
      if (!quote) return res.status(404).json({ error: 'Quote not found' });
      const updated = await getRow(
        `UPDATE quotes SET status = 'sent', updated_at = now() WHERE id = $1 RETURNING *`,
        [id]
      );
      if (quote.customer_id && quote.items?.length) {
        await transaction(async (client) => {
          await savePriceSnapshot(client, {
            customerId: quote.customer_id,
            items: quote.items,
            quoteId: quote.id,
            sourceLabel: `Quote ${quote.id.slice(0, 8)}`,
          });
        });
      }
      return res.status(200).json(mapQuote(updated));
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Finalize failed' });
    }
  }

  if (req.method === 'POST' && req.query.action === 'convert') {
    try {
      const quote = await getRow(`SELECT * FROM quotes WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
      if (!quote) return res.status(404).json({ error: 'Quote not found' });

      const documentType = quote.document_type === 'cash' ? 'cash' : 'vat';
      const result = await transaction(async (client) => {
        let invoiceNumber = null;
        if (documentType === 'vat') {
          invoiceNumber = await nextInvoiceNumber(client);
        }
        const inv = await client.query(
          `INSERT INTO invoices (quote_id, admin_id, customer_id, lead_id, customer_name, document_type, invoice_number, items, subtotal, vat_rate, vat_amount, total, status)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'draft') RETURNING *`,
          [
            quote.id,
            req.user.id,
            quote.customer_id,
            quote.lead_id,
            quote.customer_name,
            documentType,
            invoiceNumber,
            JSON.stringify(quote.items || []),
            quote.subtotal,
            quote.vat_rate,
            quote.vat_amount,
            quote.total,
          ]
        );
        const invoice = inv.rows[0];
        const pdfBuf = await generatePdfBuffer({
          documentType,
          invoiceNumber,
          customerName: quote.customer_name,
          items: quote.items || [],
          totals: {
            subtotal: Number(quote.subtotal),
            vat_rate: Number(quote.vat_rate),
            vat_amount: Number(quote.vat_amount),
            total: Number(quote.total),
          },
          formatQtySize,
        });
        const dir = path.join(process.cwd(), 'public', 'invoices');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const filename = `${invoice.id}.pdf`;
        fs.writeFileSync(path.join(dir, filename), pdfBuf);
        await client.query(`UPDATE invoices SET pdf_path = $1 WHERE id = $2`, [`/invoices/${filename}`, invoice.id]);
        await client.query(`UPDATE quotes SET status = 'converted', updated_at = now() WHERE id = $1`, [id]);
        if (quote.customer_id) {
          await savePriceSnapshot(client, {
            customerId: quote.customer_id,
            items: quote.items,
            quoteId: quote.id,
            invoiceId: invoice.id,
            sourceLabel: invoiceNumber || 'Cash summary',
          });
        }
        return invoice;
      });
      return res.status(201).json({
        ...result,
        subtotal: Number(result.subtotal),
        total: Number(result.total),
        items: result.items || [],
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Convert failed' });
    }
  }

  if (req.method === 'POST' && req.query.action === 'send') {
    try {
      const invoice = await getRow(`SELECT * FROM invoices WHERE id = $1 AND admin_id = $2`, [id, req.user.id]);
      if (!invoice) return res.status(404).json({ error: 'Invoice not found' });
      const customer = invoice.customer_id
        ? await getRow(`SELECT email, name FROM customers WHERE id = $1`, [invoice.customer_id])
        : null;
      if (!customer?.email) {
        return res.status(400).json({ error: 'Customer email required to send' });
      }
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        return res.status(500).json({ error: 'Email not configured' });
      }
      const nodemailer = (await import('nodemailer')).default;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
      });
      const isVat = invoice.document_type === 'vat';
      const subject = isVat
        ? `Invoice ${invoice.invoice_number} from PrintNPack`
        : 'Price summary from PrintNPack';
      const pdfPath = path.join(process.cwd(), 'public', invoice.pdf_path || '');
      await transporter.sendMail({
        from: `"PrintNPack" <${process.env.GMAIL_USER}>`,
        to: customer.email,
        subject,
        text: `Please find attached your ${isVat ? 'invoice' : 'price summary'}.`,
        attachments: pdfPath && fs.existsSync(pdfPath) ? [{ filename: path.basename(pdfPath), path: pdfPath }] : [],
      });
      await query(`UPDATE invoices SET status = 'sent', sent_at = now(), updated_at = now() WHERE id = $1`, [id]);
      if (invoice.lead_id) {
        await query(`UPDATE leads SET status = 'quote_sent', updated_at = now() WHERE id = $1`, [invoice.lead_id]);
      }
      return res.status(200).json({ ok: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Send failed' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

export default withAuth(handler, { roles: ['admin'] });
