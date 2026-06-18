import { buildMatchKey, recalcLineTotal } from './line-item.js';

export async function savePriceSnapshot(client, { customerId, items, quoteId, invoiceId, sourceLabel }) {
  if (!customerId || !items?.length) return null;
  const row = await client.query(
    `INSERT INTO customer_price_snapshots (customer_id, quote_id, invoice_id, source_label, items)
     VALUES ($1, $2, $3, $4, $5) RETURNING id`,
    [customerId, quoteId || null, invoiceId || null, sourceLabel || null, JSON.stringify(items)]
  );
  await rebuildCatalog(client, customerId);
  return row.rows[0]?.id;
}

export async function rebuildCatalog(client, customerId) {
  const snapshots = await client.query(
    `SELECT items, source_label, created_at FROM customer_price_snapshots
     WHERE customer_id = $1 ORDER BY created_at DESC`,
    [customerId]
  );

  const productMap = new Map();

  for (const snap of snapshots.rows) {
    const items = snap.items || [];
    const source = snap.source_label || 'snapshot';
    const savedAt = snap.created_at;

    for (const item of items) {
      const key = buildMatchKey(item);
      if (!productMap.has(key)) {
        productMap.set(key, {
          match_key: key,
          product_type: item.product_type,
          product_id: item.product_id || null,
          name: item.name,
          category: item.category,
          unit_label: item.unit_label,
          size_spec: item.size_spec || null,
          prices: [],
        });
      }
      const entry = productMap.get(key);
      entry.prices.push({
        unit_price: item.unit_price,
        saved_at: savedAt,
        source,
      });
      entry.latest_unit_price = entry.prices[0].unit_price;
    }
  }

  const catalog = {
    customer_id: customerId,
    products: Array.from(productMap.values()),
    snapshot_count: snapshots.rows.length,
    last_snapshot_at: snapshots.rows[0]?.created_at || null,
  };

  await client.query(
    `UPDATE customers SET saved_price_catalog = $1, updated_at = now() WHERE id = $2`,
    [JSON.stringify(catalog), customerId]
  );
  return catalog;
}

export async function getCustomerPriceCatalog(getRow, getRows, customerId) {
  const customer = await getRow(
    `SELECT id, name, saved_price_catalog FROM customers WHERE id = $1`,
    [customerId]
  );
  if (!customer) return null;

  let catalog = customer.saved_price_catalog;
  if (!catalog?.products?.length) {
    catalog = await rebuildCatalogFromQuery(getRows, customerId);
  }

  const pricelists = await getRows(
    `SELECT id, items, updated_at, status FROM customer_pricelists
     WHERE customer_id = $1 AND status = 'active' ORDER BY updated_at DESC LIMIT 1`,
    [customerId]
  );

  return {
    customer_id: customerId,
    customer_name: customer.name,
    ...catalog,
    active_pricelist: pricelists[0] || null,
  };
}

async function rebuildCatalogFromQuery(getRows, customerId) {
  const snapshots = await getRows(
    `SELECT items, source_label, created_at FROM customer_price_snapshots
     WHERE customer_id = $1 ORDER BY created_at DESC`,
    [customerId]
  );
  const productMap = new Map();
  for (const snap of snapshots) {
    for (const item of snap.items || []) {
      const key = buildMatchKey(item);
      if (!productMap.has(key)) {
        productMap.set(key, {
          match_key: key,
          product_type: item.product_type,
          product_id: item.product_id || null,
          name: item.name,
          category: item.category,
          unit_label: item.unit_label,
          size_spec: item.size_spec || null,
          prices: [],
        });
      }
      const entry = productMap.get(key);
      entry.prices.push({
        unit_price: item.unit_price,
        saved_at: snap.created_at,
        source: snap.source_label || 'snapshot',
      });
      entry.latest_unit_price = entry.prices[0]?.unit_price;
    }
  }
  return {
    products: Array.from(productMap.values()),
    snapshot_count: snapshots.length,
    last_snapshot_at: snapshots[0]?.created_at || null,
  };
}

export function applySavedPricesToItems(catalog, { mode = 'latest', selections = [], match_keys = [] } = {}) {
  const selectionMap = new Map(
    selections.map((s) => [s.match_key, { unit_price: s.unit_price, quantity: s.quantity }])
  );
  const keyFilter = match_keys?.length ? new Set(match_keys) : null;
  const lines = [];

  for (const product of catalog.products || []) {
    if (keyFilter && !keyFilter.has(product.match_key)) continue;

    const sel = selectionMap.get(product.match_key);
    let price = sel?.unit_price;
    let quantity = sel?.quantity;

    if (price == null) {
      if (mode === 'latest' && product.prices?.length) {
        price = product.prices[0].unit_price;
      } else {
        price = product.latest_unit_price;
      }
    }
    if (price == null) continue;
    if (quantity == null) quantity = 1;

    lines.push(recalcLineTotal({
      id: `line_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      product_type: product.product_type,
      product_id: product.product_id,
      name: product.name,
      category: product.category,
      quantity,
      unit: product.product_type === 'plain' ? 'cases' : 'units',
      size_spec: product.size_spec,
      pack_size: null,
      unit_label: product.unit_label || 'per unit',
      unit_price: price,
      line_total: price,
      price_source: 'saved',
    }));
  }
  return lines;
}
