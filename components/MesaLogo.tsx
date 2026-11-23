// Mesa Airlines logo — placeholder until a real asset is dropped in public/images.

'use client'

import { useState } from 'react'

interface MesaLogoProps {
  className?: string
}

export default function MesaLogo({ className = '' }: MesaLogoProps) {
  const [imageError, setImageError] = useState(false)
  const imageFormats = ['png', 'jpg', 'svg', 'webp']
  const [currentFormat, setCurrentFormat] = useState(0)

  const imageSrc = `/images/Mesa-Logo.${imageFormats[currentFormat]}`

  const handleError = () => {
    if (currentFormat < imageFormats.length - 1) {
      setCurrentFormat(currentFormat + 1)
    } else {
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-2xl font-bold text-gray-900">MESA</p>
        <p className="text-xs text-gray-500">Airlines</p>
      </div>
    )
  }

  return (
    <img
      src={imageSrc}
      alt="Mesa Airlines"
      className={`h-4 max-w-full ${className}`}
      onError={handleError}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}
