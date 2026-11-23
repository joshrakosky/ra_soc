// Fixed ship-to locations for SOC gifts (IND HQ + PHX HQ).

export interface ShippingLocation {
  id: string
  label: string
  /** Printed on the label as Attn: … */
  attention: string
  address: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
}

export const SHIPPING_LOCATIONS: ShippingLocation[] = [
  {
    id: 'ind_hq',
    label: 'IND HQ',
    attention: 'SOC Program Manager',
    address: '2 Brickyard Lane',
    address2: '',
    city: 'Carmel',
    state: 'IN',
    zip: '46032',
    country: 'USA',
  },
  {
    id: 'phx_hq',
    label: 'PHX HQ',
    attention: 'SOC Program Manager',
    address: '410 N. 44th Street',
    address2: 'Suite 700',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85008',
    country: 'USA',
  },
]

export function getShippingLocation(id: string): ShippingLocation | undefined {
  return SHIPPING_LOCATIONS.find((location) => location.id === id)
}
