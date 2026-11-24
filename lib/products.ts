// SOC catalog helpers. Products live in ra_soc_products (no pricing).
// Color/logo/size availability comes from the appreciation gift spreadsheet.

import { catalogImagePath } from '@/lib/catalog-images'
import { supabase } from '@/lib/supabase'
import type { LogoBrand, ProductColor, SizeAvailability } from '@/types'

export interface SocProduct {
  id: string
  name: string
  description: string | null
  sku: string
  item_number: string
  image_url: string | null
  available_sizes: string[] | null
  colors: ProductColor[] | null
  /** External spec sheet. Empty when this style has no size chart. */
  size_chart_url: string | null
  sort_order: number
  active: boolean
}

function parseSizeMap(value: unknown): Record<string, SizeAvailability> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const sizes: Record<string, SizeAvailability> = {}
  for (const [size, status] of Object.entries(value as Record<string, unknown>)) {
    if (status === 'available' || status === 'unavailable') {
      sizes[size] = status
    }
  }
  return sizes
}

function parseColors(value: unknown): ProductColor[] | null {
  if (!Array.isArray(value) || value.length === 0) return null
  const colors: ProductColor[] = []
  for (const entry of value) {
    if (!entry || typeof entry !== 'object' || !('name' in entry) || typeof entry.name !== 'string') {
      continue
    }
    const logosRaw =
      'logos' in entry && entry.logos && typeof entry.logos === 'object'
        ? (entry.logos as Record<string, unknown>)
        : {}
    // Optional per-logo image map (RA / MESA embroidery variants).
    let images: ProductColor['images']
    if ('images' in entry && entry.images && typeof entry.images === 'object') {
      const raw = entry.images as Record<string, unknown>
      images = {
        RA: typeof raw.RA === 'string' ? raw.RA : undefined,
        MESA: typeof raw.MESA === 'string' ? raw.MESA : undefined,
      }
    }

    colors.push({
      name: entry.name,
      image_url:
        'image_url' in entry && typeof entry.image_url === 'string' ? entry.image_url : undefined,
      images,
      logos: {
        RA: Boolean(logosRaw.RA),
        MESA: Boolean(logosRaw.MESA),
      },
      sizes: parseSizeMap('sizes' in entry ? entry.sizes : {}),
    })
  }
  return colors.length > 0 ? colors : null
}

export function toSocProduct(row: Record<string, unknown>): SocProduct {
  return {
    id: String(row.id),
    name: String(row.name),
    description: typeof row.description === 'string' ? row.description : null,
    sku: String(row.sku),
    item_number: String(row.item_number ?? row.sku),
    image_url: typeof row.image_url === 'string' ? row.image_url : null,
    available_sizes: Array.isArray(row.available_sizes)
      ? row.available_sizes.filter((size): size is string => typeof size === 'string')
      : null,
    colors: parseColors(row.colors),
    size_chart_url: sizeChartHref(row.size_chart_url),
    sort_order: Number(row.sort_order ?? 0),
    active: Boolean(row.active),
  }
}

/** Only http(s) spec-sheet links are opened from the product popup. */
export function sizeChartHref(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null
    return url.toString()
  } catch {
    return null
  }
}

/** Colors eligible for the shopper's chosen logo brand. */
export function colorsForBrand(product: SocProduct, brand: LogoBrand): ProductColor[] {
  return (product.colors ?? []).filter((color) => color.logos[brand])
}

export function productRequiresColor(product: SocProduct, brand: LogoBrand): boolean {
  return colorsForBrand(product, brand).length > 0
}

/** True when any offered color has at least one size key (apparel / sized goods). */
export function productRequiresSize(product: SocProduct, brand: LogoBrand): boolean {
  return colorsForBrand(product, brand).some((color) => Object.keys(color.sizes).length > 0)
}

export function getProductColor(
  product: SocProduct,
  brand: LogoBrand,
  colorName: string
): ProductColor | undefined {
  return colorsForBrand(product, brand).find((color) => color.name === colorName)
}

/** Size is orderable only when status is available for that color. */
export function isSizeAvailable(color: ProductColor | undefined, size: string): boolean {
  return color?.sizes[size] === 'available'
}

/** Sizes shown in the picker for a color (available + unavailable greyed). */
export function sizesForColor(color: ProductColor | undefined): string[] {
  if (!color) return []
  const order = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', 'OS']
  const keys = Object.keys(color.sizes)
  return order.filter((size) => keys.includes(size)).concat(keys.filter((k) => !order.includes(k)))
}

/**
 * Colors with a single size (usually OS) should not ask the shopper to pick.
 * The size is still stored on the order and export.
 */
export function soleSizeForColor(color: ProductColor | undefined): string | undefined {
  const sizes = sizesForColor(color)
  return sizes.length === 1 ? sizes[0] : undefined
}

/** Brand-specific thumbnail from public/images, then the catalog fallback. */
export function previewImage(
  product: SocProduct,
  colorName?: string,
  brand?: LogoBrand
): string {
  const color =
    (colorName ? product.colors?.find((entry) => entry.name === colorName) : undefined) ??
    (brand ? colorsForBrand(product, brand)[0] : undefined) ??
    product.colors?.[0]

  if (color) {
    const logo: LogoBrand = brand ?? 'RA'
    if (color.logos[logo] || !brand) {
      return catalogImagePath(product.item_number, color.name, logo)
    }
  }

  return product.image_url || '/images/placeholder-product.svg'
}

export const PRODUCT_STYLES = ["Men's", "Women's", 'Bags', 'Drinkware', 'Tech'] as const
export type ProductStyle = (typeof PRODUCT_STYLES)[number]

export function getProductStyle(product: SocProduct): ProductStyle {
  const name = product.name.toLowerCase()
  if (/\bwom[ae]n['’]?s?\b/.test(name)) return "Women's"
  if (/\b(backpack|tote|bag)\b/.test(name)) return 'Bags'
  if (/\b(yeti|owala|stanley|tumbler|freesip|quencher)\b/.test(name)) return 'Drinkware'
  if (/\b(mophie|anker|power bank|juice)\b/.test(name)) return 'Tech'
  return "Men's"
}

function catalogGridRank(style: ProductStyle): number {
  if (style === 'Bags') return 1
  if (style === 'Drinkware') return 2
  if (style === 'Tech') return 3
  return 0
}

export function sortCatalogForGrid(products: SocProduct[]): SocProduct[] {
  return [...products].sort((a, b) => {
    const rankDiff = catalogGridRank(getProductStyle(a)) - catalogGridRank(getProductStyle(b))
    if (rankDiff !== 0) return rankDiff
    return a.sort_order - b.sort_order
  })
}

/** Hide products that have no colors for the selected brand. */
export function filterProductsForBrand(products: SocProduct[], brand: LogoBrand): SocProduct[] {
  return products.filter((product) => colorsForBrand(product, brand).length > 0)
}

export async function fetchActiveProducts(): Promise<SocProduct[]> {
  const { data, error } = await supabase
    .from('ra_soc_products')
    .select('*')
    .eq('active', true)
    .order('sort_order', { ascending: true })

  if (error) throw error
  return sortCatalogForGrid((data ?? []).map((row) => toSocProduct(row as Record<string, unknown>)))
}
