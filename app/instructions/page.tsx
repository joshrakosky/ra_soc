'use client'

import { useRouter } from 'next/navigation'
import ExportOrdersButton from '@/components/ExportOrdersButton'
import HelpIcon from '@/components/HelpIcon'
import { useRequireEmail } from '@/lib/use-require-email'

export default function InstructionsPage() {
  const router = useRouter()
  const { email, ready } = useRequireEmail()

  if (!ready || !email) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center px-3 py-14 sm:px-4 sm:py-10">
      <ExportOrdersButton />
      <HelpIcon />

      <div className="relative z-10 w-full max-w-2xl rounded-lg bg-white p-5 shadow-lg sm:p-8 md:p-10">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Before you shop</h1>
        <p className="mb-6 text-gray-700">
          Welcome to the Republic Airways SOC appreciation gift store. Please read these notes, then continue.
        </p>

        <ul className="mb-8 list-disc space-y-3 pl-5 text-gray-700">
          <li>
            You may select <strong>one product</strong> only. There is no budget or pricing on this storefront.
          </li>
          <li>
            After these instructions, choose your <strong>logo brand</strong> (Republic or Mesa). That choice
            determines which colors are available for each item.
          </li>
          <li>
            Some sizes may be temporarily unavailable — unavailable sizes are greyed out and cannot be selected.
          </li>
          <li>Shipping goes to one of two designated locations. You will pick the location; no home address is needed.</li>
          <li>One order per email. After you submit, you cannot place another order with the same email.</li>
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="rounded-md border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => router.push('/brand')}
            className="rounded-md px-4 py-3 font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 sm:px-8"
            style={{ backgroundColor: '#c8102e' }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
