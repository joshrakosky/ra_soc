// Republic Airways logo — tries common image extensions, then text fallback.

'use client'

import { useState } from 'react'

interface RALogoProps {
  className?: string
}

export default function RALogo({ className = '' }: RALogoProps) {
  const [imageError, setImageError] = useState(false)
  const imageFormats = ['png', 'jpg', 'svg', 'webp']
  const [currentFormat, setCurrentFormat] = useState(0)

  const imageSrc = `/images/RA-Logo.${imageFormats[currentFormat]}`

  const handleError = () => {
    if (currentFormat < imageFormats.length - 1) {
      setCurrentFormat(currentFormat + 1)
    } else {
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <h1 className={`text-4xl font-bold text-gray-900 mb-2 ${className}`}>
        Republic Airways
      </h1>
    )
  }

  return (
    <img
      src={imageSrc}
      alt="Republic Airways"
      className={`h-4 max-w-full ${className}`}
      onError={handleError}
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  )
}
