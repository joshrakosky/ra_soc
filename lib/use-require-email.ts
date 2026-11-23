'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getUserEmail } from '@/lib/session'

/** Redirects to / when session email is missing. */
export function useRequireEmail(): { email: string | null; ready: boolean } {
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = getUserEmail()
    if (!stored) {
      router.push('/')
      return
    }
    setEmail(stored)
    setReady(true)
  }, [router])

  return { email, ready }
}
