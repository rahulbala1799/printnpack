import { withAuth } from '../../../lib/withAuth';
import { query, getRow } from '../../../lib/database';

const SOURCE = 'Outbound Sales Visit';
const PLACEHOLDER_EMAIL = 'outbound@printnpack.internal';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = req.user;
  const body = req.body || {};
  const {
    idempotencyKey,
    shopName,
    latitude,
    longitude,
    displayAddress,
    metOwnerOrKdm,
    interested,
    leafletOrMaterialDropped,
    visitAt,
    notes,
    productsInterestedPlain,
    productsInterestedPrinted,
    existingLeadId,
  } = body;

  if (!shopName || typeof shopName !== 'string' || !shopName.trim()) {
    return res.status(400).json({ error: 'Shop name is required' });
  }
  if (!displayAddress || typeof displayAddress !== 'string' || !displayAddress.trim()) {
    return res.status(400).json({ error: 'Location/address is required' });
  }

  const visitPayload = {
    shopName: shopName.trim(),
    displayAddress: displayAddress.trim(),
    latitude: latitude != null ? latitude : null,
    longitude: longitude != null ? longitude : null,
    metOwnerOrKdm: !!metOwnerOrKdm,
    interested: interested || null,
    leafletOrMaterialDropped: leafletOrMaterialDropped ?? null,
    visitAt: visitAt || null,
    notes: (notes && notes.trim()) || null,
    productsInterestedPlain: Array.isArray(productsInterestedPlain) ? productsInterestedPlain : null,
    productsInterestedPrinted: Array.isArray(productsInterestedPrinted) ? productsInterestedPrinted : null,
    staffId: user.id,
    staffName: user.name || user.email || 'Staff',
    idempotencyKey: idempotencyKey || null,
  };

  const messageSummary = [
    `Shop: ${shopName.trim()}`,
    `Address: ${displayAddress.trim()}`,
    metOwnerOrKdm ? `Met KDM: Yes · Interested: ${interested || '—'}` : `Met KDM: No · Leaflet dropped: ${leafletOrMaterialDropped === true ? 'Yes' : leafletOrMaterialDropped === false ? 'No' : '—'}`,
    notes && notes.trim() ? `Notes: ${notes.trim().slice(0, 200)}` : '',
  ].filter(Boolean).join('\n');

  try {
    if (!process.env.DATABASE_URL) {
      return res.status(503).json({ error: 'Database not configured' });
    }

    // Idempotency: if we have a stored key, return existing lead (simplified: we don't persist keys here; client can send same key and we still create — for full idempotency you’d store keys in DB or cache)
    // For "append to existing lead" when staff confirmed "same shop"
    if (existingLeadId && typeof existingLeadId === 'string') {
      const existing = await getRow(
        'SELECT id, payload FROM leads WHERE id = $1 AND source = $2',
        [existingLeadId, SOURCE]
      );
      if (existing) {
        const payload = existing.payload || {};
        const visits = Array.isArray(payload.visits) ? payload.visits : [];
        visits.push(visitPayload);
        await query(
          `UPDATE leads SET message = COALESCE(message, '') || E'\n---\n' || $1, payload = $2, updated_at = now() WHERE id = $3`,
          [messageSummary, JSON.stringify({ ...payload, visits }), existingLeadId]
        );
        return res.status(200).json({ leadId: existingLeadId, appended: true });
      }
    }

    // Create new lead (leads table requires name, email; we use shop name and placeholder email)
    const insert = await query(
      `INSERT INTO leads (source, name, email, phone, company, subject, message, payload, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'new')
       RETURNING id`,
      [
        SOURCE,
        shopName.trim(),
        PLACEHOLDER_EMAIL,
        null,
        displayAddress.trim(),
        `Outbound visit: ${shopName.trim()}`,
        messageSummary,
        JSON.stringify({ visits: [visitPayload], ...visitPayload }),
      ]
    );

    const leadId = insert.rows[0]?.id;
    if (!leadId) {
      return res.status(500).json({ error: 'Failed to create lead' });
    }

    res.status(200).json({ leadId });
  } catch (err) {
    console.error('POST /api/staff/outbound-visit:', err);
    res.status(500).json({ error: 'Failed to save visit' });
  }
}

export default withAuth(handler, { roles: ['staff', 'admin'] });
