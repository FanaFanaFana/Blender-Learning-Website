'use client'

export default function BackButton() {
  return (
    <button
      className="back-button"
      onClick={() => window.history.back()} // ← Must be a prop here
    >
      ← Back
    </button>
  )
}
