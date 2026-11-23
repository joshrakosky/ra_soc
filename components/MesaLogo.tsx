// Mesa Airlines logo — uses public/images/MESA-Logo.png

'use client'

import { useState } from 'react'

interface MesaLogoProps {
  className?: string
}

export default function MesaLogo({ className = '' }: MesaLogoProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-2xl font-bold text-gray-900">MESA</p>
      </div>
    )
  }

  return (
    <img
      src="/images/MESA-Logo.png"
      alt="Mesa Airlines"
      className={`h-4 max-w-full ${className}`}
      onError={() => setImageError(true)}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}
