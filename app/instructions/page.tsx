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
        <h1 className="mb-4 text-2xl font-bold text-gray-900">
          Welcome to the Republic Airways SOC Appreciation Gift Redemption Site!
        </h1>

        {/* Copy aligned with Instructions.docx */}
        <ul className="mb-8 list-disc space-y-3 pl-5 text-gray-700">
          <li>
            After this page, please choose your brand logo (Republic Airways or MESA Airlines). This choice
            will determine item color options.
          </li>
          <li>There are various options you can choose from in different item colors and/or sizes.</li>
          <li>
            You may only select <strong>one</strong> item to redeem in this program.
          </li>
          <li>
            If a particular size/color/etc. is not offered, you will either not see that color selection, or
            see the option as greyed-out.
          </li>
          <li>
            You can choose to have your item sent to one of two locations: <strong>IND</strong> or{' '}
            <strong>PHX</strong>.
          </li>
          <li>
            Please enter your First Name, Last Name and Email Address during the checkout process. This will
            be compared to an existing list of people approved to order.
          </li>
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
