'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ExportOrdersButton from '@/components/ExportOrdersButton'
import HelpIcon from '@/components/HelpIcon'
import RALogo from '@/components/RALogo'
import { setUserEmail } from '@/lib/session'

export default function LandingPage() {
  const router = useRouter()
  // Start blank. A prefilled address shows up for every visitor, including incognito.
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !trimmed.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    setUserEmail(trimmed)
    router.push('/instructions')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <ExportOrdersButton />
      <HelpIcon />
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="mb-3 flex justify-center">
            <RALogo className="max-w-[100px]" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">SOC Appreciation Gifts</h2>
          <p className="text-gray-600">Select 1 product of your choice</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Work email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#c8102e] focus:border-transparent bg-white"
              placeholder="enter email"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className="w-full text-white py-3 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#c8102e] focus:ring-offset-2 transition-colors font-medium"
            style={{ backgroundColor: '#c8102e' }}
          >
            Continue →
          </button>
        </form>
      </div>
    </div>
  )
}
