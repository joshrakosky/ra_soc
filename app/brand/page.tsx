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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => choose('RA')}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-[0_0_22px_rgba(200,16,46,0.45)] focus:outline-none focus:ring-4 focus:ring-[#c8102e] transition-shadow"
          >
            <div className="flex justify-center mb-4 min-h-[64px] items-center">
              <RALogo className="max-w-[140px]" />
            </div>
            <p className="text-xl font-semibold text-gray-900">Republic</p>
            <p className="text-sm text-gray-600 mt-1">Republic Airways logo</p>
          </button>

          <button
            type="button"
            onClick={() => choose('MESA')}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-[0_0_22px_rgba(200,16,46,0.45)] focus:outline-none focus:ring-4 focus:ring-[#c8102e] transition-shadow"
          >
            <div className="flex justify-center mb-4 min-h-[64px] items-center">
              <MesaLogo className="max-w-[140px]" />
            </div>
            <p className="text-xl font-semibold text-gray-900">Mesa</p>
            <p className="text-sm text-gray-600 mt-1">Mesa Airlines logo</p>
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
