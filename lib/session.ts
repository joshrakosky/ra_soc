// sessionStorage keys for the SOC gift checkout flow.
import type { LogoBrand, ProductSelection, ShippingInfo } from '@/types'

export const SESSION_KEYS = {
  userEmail: 'userEmail',
  selectedBrand: 'selectedBrand',
  productSelection: 'productSelection',
  shipping: 'shipping',
  orderNumber: 'orderNumber',
} as const

export function getUserEmail(): string | null {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(SESSION_KEYS.userEmail)
}

export function setUserEmail(email: string): void {
  sessionStorage.setItem(SESSION_KEYS.userEmail, email.toLowerCase().trim())
}

export function getSelectedBrand(): LogoBrand | null {
  if (typeof window === 'undefined') return null
  const value = sessionStorage.getItem(SESSION_KEYS.selectedBrand)
  if (value === 'RA' || value === 'MESA') return value
  return null
}

export function setSelectedBrand(brand: LogoBrand): void {
  sessionStorage.setItem(SESSION_KEYS.selectedBrand, brand)
}

export function getProductSelection(): ProductSelection | null {
  if (typeof window === 'undefined') return null
  const raw = sessionStorage.getItem(SESSION_KEYS.productSelection)
  if (!raw) return null
  try {
    return JSON.parse(raw) as ProductSelection
  } catch {
    return null
  }
}

export function setProductSelection(selection: ProductSelection): void {
  sessionStorage.setItem(SESSION_KEYS.productSelection, JSON.stringify(selection))
}

export function getShipping(): ShippingInfo | null {
  if (typeof window === 'undefined') return null
  const raw = sessionStorage.getItem(SESSION_KEYS.shipping)
  if (!raw) return null
  try {
    return JSON.parse(raw) as ShippingInfo
  } catch {
    return null
  }
}

export function setShipping(shipping: ShippingInfo): void {
  sessionStorage.setItem(SESSION_KEYS.shipping, JSON.stringify(shipping))
}

export function clearCheckoutSession(): void {
  sessionStorage.removeItem(SESSION_KEYS.productSelection)
  sessionStorage.removeItem(SESSION_KEYS.shipping)
  sessionStorage.removeItem(SESSION_KEYS.selectedBrand)
  // Keep email until confirmation close so re-entry feels familiar.
}
