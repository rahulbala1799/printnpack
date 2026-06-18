import PDFDocument from 'pdfkit';

const COMPANY = {
  name: 'Print N Pack Ireland',
  url: 'www.printnpack.ie',
  email: 'info@printnpack.ie',
  phone: '+353 89 440 0155',
  address: 'Unit 14 Ashbourne Business Centre, Ashbourne, Co. Meath',
};

function drawLineItems(doc, items, formatQtySize, startY) {
  const cols = { desc: 50, cat: 200, qty: 280, unit: 380, amt: 480 };
  let y = startY;
  doc.fontSize(9).font('Helvetica-Bold');
  doc.text('Description', cols.desc, y);
  doc.text('Category', cols.cat, y);
  doc.text('Qty / Size', cols.qty, y);
  doc.text('Unit', cols.unit, y);
  doc.text('Amount', cols.amt, y, { align: 'right', width: 70 });
  y += 18;
  doc.moveTo(50, y).lineTo(550, y).stroke();
  y += 8;

  doc.font('Helvetica');
  for (const item of items) {
    if (y > 700) {
      doc.addPage();
      y = 50;
    }
    doc.text((item.name || '').slice(0, 35), cols.desc, y, { width: 140 });
    doc.text((item.category || '').slice(0, 12), cols.cat, y);
    doc.text(formatQtySize(item).slice(0, 22), cols.qty, y, { width: 90 });
    doc.text(`€${Number(item.unit_price).toFixed(2)}`, cols.unit, y);
    doc.text(`€${Number(item.line_total).toFixed(2)}`, cols.amt, y, { align: 'right', width: 70 });
    y += 16;
  }
  return y;
}

export function generatePdfBuffer({ documentType, invoiceNumber, customerName, items, totals, formatQtySize }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const chunks = [];
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const isVat = documentType === 'vat';
    doc.fontSize(16).font('Helvetica-Bold').text(COMPANY.name, 50, 50);
    doc.fontSize(10).font('Helvetica').text(COMPANY.address, 50, 72);
    doc.text(`${COMPANY.email} · ${COMPANY.phone}`, 50, 86);

    doc.fontSize(14).font('Helvetica-Bold');
    doc.text(isVat ? 'TAX INVOICE' : 'PRICE SUMMARY', 400, 50, { align: 'right', width: 150 });
    if (isVat && invoiceNumber) {
      doc.fontSize(10).font('Helvetica').text(invoiceNumber, 400, 68, { align: 'right', width: 150 });
    }
    doc.text(`Date: ${new Date().toLocaleDateString('en-IE')}`, 400, isVat ? 82 : 68, { align: 'right', width: 150 });

    doc.fontSize(11).font('Helvetica-Bold').text('Bill to:', 50, 120);
    doc.font('Helvetica').text(customerName || 'Customer', 50, 136);

    let y = drawLineItems(doc, items, formatQtySize, 170);
    y += 20;
    doc.moveTo(350, y).lineTo(550, y).stroke();
    y += 10;

    if (isVat) {
      doc.font('Helvetica').text('Subtotal:', 380, y);
      doc.text(`€${Number(totals.subtotal).toFixed(2)}`, 480, y, { align: 'right', width: 70 });
      y += 16;
      doc.text(`VAT (${Math.round((totals.vat_rate || 0.23) * 100)}%):`, 380, y);
      doc.text(`€${Number(totals.vat_amount).toFixed(2)}`, 480, y, { align: 'right', width: 70 });
      y += 16;
    }
    doc.font('Helvetica-Bold').text('Total:', 380, y);
    doc.text(`€${Number(totals.total).toFixed(2)}`, 480, y, { align: 'right', width: 70 });

    doc.end();
  });
}
