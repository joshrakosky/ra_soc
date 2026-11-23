// Fixed ship-to locations for SOC gifts.
// Addresses are TBD — update this file when real destinations are confirmed.

export interface ShippingLocation {
  id: string
  label: string
  address: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
}

export const SHIPPING_LOCATIONS: ShippingLocation[] = [
  {
    id: 'loc_a',
    label: 'Location A (TBD)',
    address: 'Address TBD',
    address2: '',
    city: 'City TBD',
    state: 'XX',
    zip: '00000',
    country: 'USA',
  },
  {
    id: 'loc_b',
    label: 'Location B (TBD)',
    address: 'Address TBD',
    address2: '',
    city: 'City TBD',
    state: 'XX',
    zip: '00000',
    country: 'USA',
  },
]

export function getShippingLocation(id: string): ShippingLocation | undefined {
  return SHIPPING_LOCATIONS.find((location) => location.id === id)
}
