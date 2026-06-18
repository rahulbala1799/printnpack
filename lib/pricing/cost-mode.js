/** Purchase VAT on goods — pricing rules store ex-VAT supplier prices. */

export const DEFAULT_PURCHASE_VAT_RATE = 0.23;

export function isCashDocument(documentType) {
  return documentType === 'cash';
}

/** True material cost: cash sales pay VAT on goods; VAT invoice uses ex-VAT (recoverable). */
export function goodsCostExToActual(exVatCost, documentType, purchaseVatRate = DEFAULT_PURCHASE_VAT_RATE) {
  const ex = Number(exVatCost) || 0;
  if (!isCashDocument(documentType)) return Math.round(ex * 100) / 100;
  return Math.round(ex * (1 + purchaseVatRate) * 100) / 100;
}

export function costModeLabel(documentType) {
  if (isCashDocument(documentType)) {
    return 'Cash sale — material costs include 23% purchase VAT (not charged to customer)';
  }
  return 'VAT invoice — material costs ex-VAT (input VAT recoverable)';
}

export function sellPriceLabel(documentType) {
  if (isCashDocument(documentType)) {
    return 'SELL PRICE (cash — no VAT on customer receipt)';
  }
  return 'SELL PRICE (ex VAT — invoice adds 23% VAT)';
}
