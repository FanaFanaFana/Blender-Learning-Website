// FILE: components/shared/EditableText.jsx
'use client'

import { useState, useEffect } from 'react'

export default function EditableText({ 
  value, 
  onChange, 
  multiline = false, 
  placeholder = '', 
  editMode = false, 
  style = {} 
}) {
  const [editing, setEditing] = useState(false)
  const [temp, setTemp] = useState(value ?? '')

  useEffect(() => {
    setTemp(value ?? '')
  }, [value])

  if (!editMode) {
    return multiline ? (
      <div style={style}>{value || placeholder}</div>
    ) : (
      <span style={style}>{value || placeholder}</span>
    )
  }

  if (editing) {
    const El = multiline ? 'textarea' : 'input'
    return (
      <El
        autoFocus
        value={temp ?? ''}
        onChange={(e) => setTemp(e.target.value)}
        onBlur={() => {
          onChange(temp)
          setEditing(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !multiline) {
            e.preventDefault()
            onChange(temp)
            setEditing(false)
          }
          if (e.key === 'Escape') {
            setTemp(value ?? '')
            setEditing(false)
          }
        }}
        onClick={(e) => e.stopPropagation()}
        style={{
          ...style,
          width: '100%',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '2px solid #3b82f6',
          borderRadius: '4px',
          padding: '0.5rem',
          color: 'inherit',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          resize: multiline ? 'vertical' : 'none',
          outline: 'none'
        }}
      />
    )
  }

  return (
    <span
      onClick={(e) => {
        e.stopPropagation()
        setTemp(value)
        setEditing(true)
      }}
      style={{
        ...style,
        cursor: 'pointer',
        borderBottom: '2px dashed transparent',
        transition: 'border-color 0.2s',
        display: 'inline-block',
        minWidth: '50px'
      }}
      onMouseEnter={(e) => editMode && (e.target.style.borderBottomColor = 'rgba(59, 130, 246, 0.5)')}
      onMouseLeave={(e) => (e.target.style.borderBottomColor = 'transparent')}
    >
      {value || <span style={{ opacity: 0.5 }}>{placeholder}</span>}
    </span>
  )
}