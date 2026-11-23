// Excel builders: Order Details (one row per order) + Product Counts for production.
// Each SOC order is a single product, so a count row is one logo + color + size combo.

import type { Order } from '@/types'

export function buildOrderDetailRows(orders: Order[]) {
  return orders.map((order) => ({
    'Order Number': order.order_number,
    'First Name': order.first_name,
    'Last Name': order.last_name,
    Email: order.email,
    'Product Name': order.product_name,
    'Item Number': order.item_number,
    Color: order.color || '',
    Size: order.size || '',
    Logo: order.logo,
    SKU: order.sku,
    'Ship Location ID': order.shipping_location_id,
    'Shipping Name': order.shipping_name,
    'Shipping Attention': order.shipping_attention || '',
    'Shipping Address': order.shipping_address,
    'Address 2': order.shipping_address2 || '',
    City: order.shipping_city,
    State: order.shipping_state,
    ZIP: order.shipping_zip,
    Country: order.shipping_country,
    'Order Date': new Date(order.created_at).toLocaleDateString(),
  }))
}

export function buildProductCountRows(orders: Order[]) {
  // Republic and Mesa are different decorations, so they stay on separate rows.
  const counts = new Map<
    string,
    {
      name: string
      color: string
      size: string
      logo: string
      sku: string
      itemNumber: string
      quantity: number
    }
  >()

  for (const order of orders) {
    const color = order.color || ''
    const size = order.size || ''
    const logo = order.logo
    const key = `${order.sku}::${color}::${size}::${logo}`
    const existing = counts.get(key)
    if (existing) {
      existing.quantity += 1
    } else {
      counts.set(key, {
        name: order.product_name,
        color,
        size,
        logo,
        sku: order.sku,
        itemNumber: order.item_number,
        quantity: 1,
      })
    }
  }

  return Array.from(counts.values())
    .sort(
      (a, b) =>
        a.name.localeCompare(b.name) ||
        a.color.localeCompare(b.color) ||
        a.size.localeCompare(b.size) ||
        a.logo.localeCompare(b.logo)
    )
    .map((row) => ({
      'Product Name': row.name,
      Color: row.color,
      Size: row.size,
      Logo: row.logo,
      SKU: row.sku,
      'Item Number': row.itemNumber,
      Quantity: row.quantity,
    }))
}

export function socExportFilename(date = new Date()): string {
  return `ra-soc-orders-${date.toISOString().split('T')[0]}.xlsx`
}
