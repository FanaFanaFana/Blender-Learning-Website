// FILE: components/shared/IconPicker.jsx
'use client'

import { useState, useEffect } from 'react'

export default function IconPicker({ value, onChange, editMode, size = 'normal' }) {
  const [showPicker, setShowPicker] = useState(false)
  const [icons, setIcons] = useState([])

  useEffect(() => {
    fetch('/Icons/icons.json')
      .then(res => res.json())
      .then(data => {
        const svgIcons = data.icons.map(icon => `/Icons/${icon}`)
        setIcons(svgIcons)
      })
      .catch(() => {
        setIcons([])
      })
  }, [])

  const iconSize = size === 'large' ? '48px' : '32px'
  const displaySize = size === 'large' ? '28px' : '24px'

  if (!editMode) {
    return value?.startsWith('/') ? (
      <img src={value} alt="" style={{ width: iconSize, height: iconSize }} />
    ) : (
      <span style={{ fontSize: iconSize }}>{value || ''}</span>
    )
  }

  return (
    <div className="icon-picker">
      <div
        onClick={() => setShowPicker(!showPicker)}
        className="icon-picker-trigger"
        style={{
          width: iconSize,
          height: iconSize,
          background: size === 'large' ? 'rgba(59, 130, 246, 0.1)' : undefined,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: size === 'large' ? '2px solid rgba(59, 130, 246, 0.3)' : undefined,
          transition: 'all 0.2s'
        }}
      >
        {value?.startsWith('/') ? (
          <img src={value} alt="" style={{ width: displaySize, height: displaySize }} />
        ) : (
          <span style={{ fontSize: displaySize }}>{value || '✨'}</span>
        )}
      </div>

      {showPicker && (
        <>
          <div
            onClick={() => setShowPicker(false)}
            className="icon-picker-overlay"
          />
          <div className="icon-picker-grid">
            {icons.map((icon, i) => (
              <div
                key={i}
                onClick={() => {
                  onChange(icon)
                  setShowPicker(false)
                }}
                className={`icon-picker-item ${value === icon ? 'active' : ''}`}
              >
                <img src={icon} alt="" style={{ width: '24px', height: '24px' }} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}