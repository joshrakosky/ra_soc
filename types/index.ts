// Types for Republic Airways SOC appreciation gift store.

/** Logo brand chosen on /brand — drives which colors are offered. */
export type LogoBrand = 'RA' | 'MESA'

/** Soft inventory from the catalog sheet: + → available, NONE → unavailable. */
export type SizeAvailability = 'available' | 'unavailable'

/** One color variant with logo eligibility and per-size stock flags. */
export interface ProductColor {
  name: string
  /** Fallback / legacy single image when brand-specific files are not split yet. */
  image_url?: string
  /**
   * Logo-specific photos. Files on disk follow:
   * /images/{RA|MESA}_{ItemNumber}_{ColorToken}.jpg
   * e.g. RA_CT106416_CARBON.HTHR.jpg
   */
  images?: { RA?: string; MESA?: string }
  logos: { RA: boolean; MESA: boolean }
  /** Size key present only when the style offers that size for this color. */
  sizes: Record<string, SizeAvailability>
}

/** One product chosen on the products page (sessionStorage). */
export interface ProductSelection {
  id: string
  name: string
  sku: string
  itemNumber: string
  imageUrl: string
  logo: LogoBrand
  size?: string
  color?: string
}

/** Shipping step: recipient + one of two fixed locations (no free-form address). */
export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  locationId: string
  locationLabel: string
  attention: string
  address: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
}

/** Row in ra_soc_orders — one product per order, no pricing. */
export interface Order {
  id: string
  order_number: string
  email: string
  first_name: string
  last_name: string
  product_id?: string | null
  product_name: string
  item_number: string
  sku: string
  color?: string | null
  size?: string | null
  logo: LogoBrand
  shipping_location_id: string
  shipping_name: string
  shipping_attention?: string | null
  shipping_address: string
  shipping_address2?: string | null
  shipping_city: string
  shipping_state: string
  shipping_zip: string
  shipping_country: string
  created_at: string
}
