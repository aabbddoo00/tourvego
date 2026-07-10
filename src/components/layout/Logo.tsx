import { useState } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <Link to="/" className={cn('flex items-center gap-2.5', className)}>
      {!imgFailed ? (
        <img
          src="/imgs/logo.png"
          alt="TourVego"
          className="h-9 w-auto"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="18" cy="18" r="18" fill="#0f172a" />
            <path
              d="M18 8C13.03 8 9 12.03 9 17c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 2.5c3.59 0 6.5 2.91 6.5 6.5 0 3.59-2.91 6.5-6.5 6.5S11.5 20.59 11.5 17c0-3.59 2.91-6.5 6.5-6.5z"
              fill="#217d96"
            />
            <circle cx="18" cy="17" r="3" fill="#f97316" />
            <path
              d="M18 24.5v3.5"
              stroke="#217d96"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-navy">
            Tour<span className="text-teal">Vego</span>
          </span>
        </>
      )}
    </Link>
  )
}
