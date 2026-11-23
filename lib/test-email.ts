// Test account may place more than one order. Everyone else stays one order per email.
export const TEST_EMAIL = 'josh.rakosky@proforma.com'

export function allowsMultipleOrders(email: string): boolean {
  return email.toLowerCase().trim() === TEST_EMAIL
}
