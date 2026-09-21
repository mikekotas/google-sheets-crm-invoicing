/**
 * Simplified portfolio excerpt.
 * Names and implementation details have been changed.
 * This is not the deployable production source.
 */

function toMinorUnits(amount) {
  const value = Number(amount);
  return Number.isFinite(value) ? Math.round(value * 100) : 0;
}

function calculateInvoice(lines, discountPercent = 0) {
  let subtotal = 0;
  let tax = 0;

  for (const line of lines) {
    const quantity = Math.max(0, Number(line.quantity) || 0);
    const rate = Math.max(0, Number(line.taxRate) || 0);
    const net = Math.round(toMinorUnits(line.unitPrice) * quantity);

    subtotal += net;
    tax += Math.round(net * rate);
  }

  const discountRate = Math.min(1, Math.max(0, Number(discountPercent) / 100));
  const discount = Math.round(subtotal * discountRate);
  const adjustedTax = subtotal > 0
    ? Math.round(tax * ((subtotal - discount) / subtotal))
    : 0;

  return {
    subtotal: subtotal / 100,
    discount: discount / 100,
    tax: adjustedTax / 100,
    total: (subtotal - discount + adjustedTax) / 100,
  };
}

