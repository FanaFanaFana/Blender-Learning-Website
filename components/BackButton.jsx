// Create a new file: components/BackButton.jsx
'use client'

export default function BackButton({ style = {} }) {
  return (
    <button
      onClick={() => window.history.back()}
      style={{
        background: 'rgba(21, 35, 47, 0.6)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        color: '#ffffff',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        position: 'absolute',
        left: 0,
        zIndex: 10,
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(28, 45, 60, 0.8)'
        e.currentTarget.style.transform = 'translateX(-3px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      ← Back
    </button>
  )
}