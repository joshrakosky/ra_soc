'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import CatalogImage from '@/components/CatalogImage'
import ExportOrdersButton from '@/components/ExportOrdersButton'
import HelpIcon from '@/components/HelpIcon'
import {
  colorsForBrand,
  fetchActiveProducts,
  filterProductsForBrand,
  getProductColor,
  getProductStyle,
  isSizeAvailable,
  previewImage,
  PRODUCT_STYLES,
  productRequiresColor,
  productRequiresSize,
  sizesForColor,
  soleSizeForColor,
  type ProductStyle,
  type SocProduct,
} from '@/lib/products'
import { getSelectedBrand, getUserEmail, setProductSelection } from '@/lib/session'
import type { LogoBrand, ProductSelection } from '@/types'

type CardSelection = { color: string; size: string }

export default function ProductsPage() {
  const router = useRouter()
  const [brand, setBrand] = useState<LogoBrand | null>(null)
  const [products, setProducts] = useState<SocProduct[]>([])
  const [loadError, setLoadError] = useState('')
  const [loading, setLoading] = useState(true)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [selections, setSelections] = useState<Record<string, CardSelection>>({})
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [styleFilter, setStyleFilter] = useState<ProductStyle | ''>('')

  useEffect(() => {
    if (!getUserEmail()) {
      router.push('/')
      return
    }
    const selected = getSelectedBrand()
    if (!selected) {
      router.push('/brand')
      return
    }
    setBrand(selected)

    let cancelled = false
    fetchActiveProducts()
      .then((rows) => {
        if (!cancelled) setProducts(filterProductsForBrand(rows, selected))
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Failed to load products'
        if (!cancelled) setLoadError(message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [router])

  const activeProduct = products.find((product) => product.id === activeId) ?? null
  const pick = activeId ? selections[activeId] : undefined
  const brandColors = activeProduct && brand ? colorsForBrand(activeProduct, brand) : []
  const activeColorName = activeProduct
    ? pick?.color || brandColors[0]?.name
    : undefined
  const activeColor =
    activeProduct && brand && activeColorName
      ? getProductColor(activeProduct, brand, activeColorName)
      : undefined

  const updateSelection = (productId: string, patch: Partial<CardSelection>) => {
    setSelections((prev) => {
      const current = prev[productId] ?? { color: '', size: '' }
      const next = { ...current, ...patch }
      // Changing color clears size so we don't keep an unavailable size from another color.
      if (patch.color && patch.color !== current.color) {
        next.size = ''
      }
      return { ...prev, [productId]: next }
    })
    setError('')
  }

  const openProduct = (product: SocProduct) => {
    if (!brand) return
    setError('')
    const colors = colorsForBrand(product, brand)
    if (colors.length > 0 && !selections[product.id]?.color) {
      updateSelection(product.id, { color: colors[0].name })
    }
    setActiveId(product.id)
  }

  const closeProduct = () => {
    setActiveId(null)
    setError('')
  }

  const handleContinue = () => {
    if (!activeProduct || !brand) return
    const current = selections[activeProduct.id] ?? { color: '', size: '' }
    const needsColor = productRequiresColor(activeProduct, brand)
    const needsSize = productRequiresSize(activeProduct, brand)
    const colorMatch = needsColor ? getProductColor(activeProduct, brand, current.color) : undefined

    if (needsColor && !colorMatch) {
      setError('Please choose a color to continue')
      return
    }
    // One-size goods skip the picker; that lone size is still what we save.
    const chosenSize = soleSizeForColor(colorMatch) ?? current.size
    if (needsSize && !chosenSize) {
      setError('Please choose a size to continue')
      return
    }
    if (needsSize && colorMatch && !isSizeAvailable(colorMatch, chosenSize)) {
      setError('That size is unavailable. Please choose another size.')
      return
    }

    const selection: ProductSelection = {
      id: activeProduct.id,
      name: activeProduct.name,
      sku: activeProduct.sku,
      itemNumber: activeProduct.item_number,
      imageUrl: previewImage(activeProduct, current.color, brand),
      logo: brand,
      size: needsSize ? chosenSize : undefined,
      color: needsColor ? current.color : undefined,
    }
    setProductSelection(selection)
    router.push('/shipping')
  }

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    return products.filter((product) => {
      if (styleFilter && getProductStyle(product) !== styleFilter) return false
      if (!query) return true
      const colorNames = (product.colors ?? []).map((color) => color.name).join(' ')
      const haystack = `${product.name} ${product.sku} ${product.item_number} ${colorNames}`.toLowerCase()
      return haystack.includes(query)
    })
  }, [products, search, styleFilter])

  const canContinue = (() => {
    if (!activeProduct || !brand) return false
    const current = selections[activeProduct.id]
    if (productRequiresColor(activeProduct, brand) && !current?.color) return false
    if (productRequiresSize(activeProduct, brand)) {
      const color = getProductColor(activeProduct, brand, current?.color ?? '')
      const chosenSize = soleSizeForColor(color) ?? current?.size
      if (!chosenSize || !isSizeAvailable(color, chosenSize)) return false
    }
    return true
  })()

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-10 relative">
      <ExportOrdersButton />
      <HelpIcon />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Choose Your Product</h1>
          <p className="text-white/80">
            Select 1 product · Logo: {brand === 'RA' ? 'Republic' : 'Mesa'}
          </p>
        </div>

        {/* Back on the left, search centered, style filter on the right. */}
        <div className="mb-6 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          <button
            type="button"
            onClick={() => router.push('/brand')}
            className="w-fit px-6 py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 font-medium"
            style={{ backgroundColor: '#c8102e' }}
          >
            ← Back
          </button>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products"
            className="w-full sm:w-72 justify-self-center px-4 py-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
          />
          <select
            id="product-style"
            value={styleFilter}
            onChange={(e) => setStyleFilter(e.target.value as ProductStyle | '')}
            className="w-full sm:w-48 justify-self-end px-4 py-2 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
          >
            <option value="">All styles</option>
            {PRODUCT_STYLES.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className="text-center text-white/80">Loading products...</p>}

        {!loading && loadError && (
          <div className="bg-white rounded-lg p-6 text-red-700">
            Could not load products. Confirm `ra_soc_products` exists in Supabase.
            <p className="text-sm text-gray-600 mt-2">{loadError}</p>
          </div>
        )}

        {!loading && !loadError && products.length === 0 && (
          <div className="bg-white rounded-lg p-8 text-center text-gray-700">
            <p className="font-medium text-gray-900 mb-2">No products listed yet</p>
            <p className="text-sm text-gray-600">
              Run the SOC migrations in Supabase, then refresh this page.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => openProduct(product)}
              className="group bg-white rounded-lg shadow-lg p-3 text-left transition-shadow duration-200 hover:shadow-[0_0_22px_rgba(200,16,46,0.45)] focus:outline-none focus:ring-4 focus:ring-[#c8102e]"
            >
              <h2 className="text-sm font-bold text-gray-900 mb-2 leading-snug min-h-[2.5rem]">{product.name}</h2>
              {/* Square frame, contain so wide product shots are not cropped. */}
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
                <CatalogImage
                  src={previewImage(product, undefined, brand ?? undefined)}
                  fallbacks={[
                    ...(product.colors ?? []).flatMap((c) => [
                      c.images?.RA || '',
                      c.images?.MESA || '',
                      c.image_url || '',
                    ]),
                    '/images/placeholder-product.svg',
                  ]}
                  alt={product.name}
                  className="block w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>

      </div>

      {activeProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          onClick={closeProduct}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          <div
            className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-3 mb-4">
              <h2 className="text-xl font-bold text-gray-900 leading-snug">{activeProduct.name}</h2>
              <button
                type="button"
                onClick={closeProduct}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="aspect-square w-full overflow-hidden rounded-md mb-4 bg-gray-100">
              <CatalogImage
                src={previewImage(activeProduct, activeColorName, brand ?? undefined)}
                fallbacks={[
                  ...(activeProduct.colors ?? []).flatMap((c) => [
                    c.images?.RA || '',
                    c.images?.MESA || '',
                    c.image_url || '',
                  ]),
                  '/images/placeholder-product.svg',
                ]}
                alt={`${activeProduct.name} ${activeColorName || ''}`}
                className="block w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4">
              {brandColors.length > 0 && (
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">Color</p>
                  <div className="flex flex-wrap gap-2">
                    {brandColors.map((color) => {
                      const selected = (pick?.color || brandColors[0]?.name) === color.name
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => updateSelection(activeProduct.id, { color: color.name })}
                          className={`px-3 py-1.5 rounded-md text-sm border font-medium ${
                            selected
                              ? 'border-[#c8102e] bg-[#c8102e] text-white'
                              : 'border-gray-300 bg-white text-gray-800 hover:border-gray-400'
                          }`}
                        >
                          {color.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {productRequiresSize(activeProduct, brand) && !soleSizeForColor(activeColor) && (
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-2">Size</p>
                  <div className="flex flex-wrap gap-2">
                    {sizesForColor(activeColor).map((size) => {
                      const available = isSizeAvailable(activeColor, size)
                      const selected = pick?.size === size
                      return (
                        <button
                          key={size}
                          type="button"
                          disabled={!available}
                          onClick={() => available && updateSelection(activeProduct.id, { size })}
                          className={`min-w-[3rem] px-3 py-2 rounded-md text-sm border font-medium ${
                            !available
                              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                              : selected
                                ? 'border-[#c8102e] bg-[#c8102e] text-white'
                                : 'border-gray-300 bg-white text-gray-800 hover:border-gray-400'
                          }`}
                          title={available ? size : `${size} unavailable`}
                        >
                          {size}
                        </button>
                      )
                    })}
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Greyed sizes are currently unavailable.</p>
                </div>
              )}

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="button"
                onClick={handleContinue}
                disabled={!canContinue}
                className="w-full py-3 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#c8102e' }}
              >
                Continue to Shipping →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
