'use client'

import { useRouter } from 'next/navigation'
import ExportOrdersButton from '@/components/ExportOrdersButton'
import HelpIcon from '@/components/HelpIcon'
import MesaLogo from '@/components/MesaLogo'
import RALogo from '@/components/RALogo'
import { setSelectedBrand } from '@/lib/session'
import { useRequireEmail } from '@/lib/use-require-email'
import type { LogoBrand } from '@/types'

export default function BrandPage() {
  const router = useRouter()
  const { email, ready } = useRequireEmail()

  const choose = (brand: LogoBrand) => {
    setSelectedBrand(brand)
    // Clear any prior product pick when brand changes so colors stay valid.
    sessionStorage.removeItem('productSelection')
    router.push('/products')
  }

  if (!ready || !email) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-12">
      <ExportOrdersButton />
      <HelpIcon />

      <div className="relative z-10 w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Choose Your Brand</h1>
          <p className="text-white/80">This selects which logo and colors are available on your gift.</p>
        </div>

        {/* Logo-only cards — brand name/subtext removed per design. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => choose('RA')}
            aria-label="Republic Airways"
            className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[140px] hover:shadow-[0_0_22px_rgba(200,16,46,0.45)] focus:outline-none focus:ring-4 focus:ring-[#c8102e] transition-shadow"
          >
            <RALogo className="max-w-[160px]" />
          </button>

          <button
            type="button"
            onClick={() => choose('MESA')}
            aria-label="Mesa Airlines"
            className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[140px] hover:shadow-[0_0_22px_rgba(200,16,46,0.45)] focus:outline-none focus:ring-4 focus:ring-[#c8102e] transition-shadow"
          >
            <MesaLogo className="max-w-[160px]" />
          </button>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => router.push('/instructions')}
            className="px-6 py-2 text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 font-medium"
            style={{ backgroundColor: '#c8102e' }}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  )
}
