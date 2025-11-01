'use client'

import { playHover } from '@/app/utils/sounds'

export default function BackButton() {
  return (
    <button
      className="back-button"
      onClick={() => window.history.back()} // ← Must be a prop here
      onMouseEnter={playHover}
    >
      ← Back
    </button>
  )
}
