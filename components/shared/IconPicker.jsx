// FILE: components/shared/IconPicker.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useIcons } from './IconContext'

export default function IconPicker({ value, onChange, editMode, size = 'normal' }) {
  const { icons, categorizedIcons, loading } = useIcons()
  const [showPicker, setShowPicker] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [mounted, setMounted] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (showPicker) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [showPicker])

  const iconSize = size === 'large' ? '48px' : '32px'
  const displaySize = size === 'large' ? '28px' : '24px'

  // Filter icons based on search and category
  const getFilteredIcons = () => {
    let filtered = icons

    if (activeCategory !== 'All') {
      const categoryData = categorizedIcons.find(([cat]) => cat === activeCategory)
      filtered = categoryData ? categoryData[1] : []
    }

    if (searchQuery) {
      filtered = filtered.filter(icon => 
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }

  const filteredIcons = getFilteredIcons()

  const handleClose = () => {
    setShowPicker(false)
    setSearchQuery('')
    setActiveCategory('All')
  }

  const handleIconSelect = (icon) => {
    onChange(icon)
    handleClose()
  }

  if (!editMode) {
    return value?.startsWith('/') ? (
      <img src={value} alt="" style={{ width: iconSize, height: iconSize }} />
    ) : (
      <span style={{ fontSize: iconSize }}>{value || ''}</span>
    )
  }

  const modalContent = showPicker && mounted ? createPortal(
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          zIndex: 2147483646,
          backdropFilter: 'blur(8px)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      />
      
      {/* Modal container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90vw',
          maxHeight: '85vh',
          width: '700px',
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          border: '2px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '20px',
          zIndex: 2147483647,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.1)',
          overflow: 'hidden',
          animation: 'slideUpModal 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <h3 style={{
              margin: 0,
              color: '#e0e7ef',
              fontSize: '1.3rem',
              fontWeight: '700'
            }}>
               Choose an Icon
            </h3>
            <button
              onClick={handleClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#94a3b8',
                fontSize: '1.2rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'
                e.currentTarget.style.color = '#ef4444'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                e.currentTarget.style.color = '#94a3b8'
              }}
            >
              ✕
            </button>
          </div>
          <p style={{
            margin: '0 0 1rem 0',
            color: '#7a8c9e',
            fontSize: '0.9rem'
          }}>
            {loading ? 'Loading icons...' : `${filteredIcons.length} icons ${searchQuery ? `matching "${searchQuery}"` : ''}`}
          </p>

          {/* Search bar */}
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '0.95rem',
              marginBottom: '1rem',
              outline: 'none',
              transition: 'all 0.2s ease',
              opacity: loading ? 0.5 : 1
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.5)'
              e.target.style.background = 'rgba(59, 130, 246, 0.08)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.target.style.background = 'rgba(255, 255, 255, 0.05)'
            }}
          />

          {/* Category tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(59, 130, 246, 0.3) transparent'
          }}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setActiveCategory('All')
              }}
              disabled={loading}
              style={{
                padding: '0.6rem 1.2rem',
                background: activeCategory === 'All' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: activeCategory === 'All' ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: activeCategory === 'All' ? '#60a5fa' : '#94a3b8',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem',
                fontWeight: activeCategory === 'All' ? '600' : '500',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                opacity: loading ? 0.5 : 1
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== 'All' && !loading) {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                  e.currentTarget.style.color = '#60a5fa'
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== 'All') {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.color = '#94a3b8'
                }
              }}
            >
              All ({icons.length})
            </button>
            {categorizedIcons.map(([category, categoryIcons]) => (
              <button
                key={category}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveCategory(category)
                }}
                disabled={loading}
                style={{
                  padding: '0.6rem 1.2rem',
                  background: activeCategory === category ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: activeCategory === category ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: activeCategory === category ? '#60a5fa' : '#94a3b8',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === category ? '600' : '500',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  opacity: loading ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category && !loading) {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                    e.currentTarget.style.color = '#60a5fa'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.color = '#94a3b8'
                  }
                }}
              >
                {category} ({categoryIcons.length})
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable grid */}
        <div 
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '1.5rem',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}
        >
          {loading ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              color: '#7a8c9e'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
                <p>Loading icons...</p>
              </div>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
              gap: '0.875rem',
              width: '100%'
            }}>
              {filteredIcons.map((icon, i) => (
                <div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleIconSelect(icon)
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    handleIconSelect(icon)
                  }}
                  title={icon.split('/').pop()?.replace(/\.(svg|png|jpg|jpeg|gif|webp)$/i, '')}
                  style={{
                    padding: '0.875rem',
                    background: value === icon ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: value === icon ? '2px solid #3b82f6' : '2px dashed rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    aspectRatio: '1',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    WebkitTouchCallout: 'none',
                    touchAction: 'manipulation'
                  }}
                  onMouseEnter={(e) => {
                    if (value !== icon) {
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)'
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)'
                      e.currentTarget.style.borderStyle = 'solid'
                      e.currentTarget.style.transform = 'scale(1.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (value !== icon) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                      e.currentTarget.style.borderStyle = 'dashed'
                      e.currentTarget.style.transform = 'scale(1)'
                    }
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: '36px',
                      height: '36px',
                      objectFit: 'contain',
                      pointerEvents: 'none',
                      filter: value === icon ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          )}

          {!loading && filteredIcons.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: '#7a8c9e'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No icons found</p>
              {searchQuery && (
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#64748b' }}>
                  Try a different search term
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from {
            opacity: 0;
            transform: translate(-50%, -45%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>,
    document.body
  ) : null

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setShowPicker(!showPicker)
        }}
        style={{
          width: iconSize,
          height: iconSize,
          background: size === 'large' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.03)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: size === 'large' 
            ? '2px dashed rgba(59, 130, 246, 0.4)' 
            : '2px dashed rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = size === 'large' ? '#3b82f6' : 'rgba(59, 130, 246, 0.6)'
          e.currentTarget.style.background = size === 'large' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = size === 'large' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.2)'
          e.currentTarget.style.background = size === 'large' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255, 255, 255, 0.03)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {value?.startsWith('/') ? (
          <img src={value} alt="" style={{ width: displaySize, height: displaySize }} />
        ) : (
          <span style={{ fontSize: displaySize }}>{value || '✨'}</span>
        )}
        {/* Click indicator */}
        <div style={{
          position: 'absolute',
          bottom: '-4px',
          right: '-4px',
          width: '16px',
          height: '16px',
          background: '#3b82f6',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          color: '#fff',
          fontWeight: '600',
          border: '2px solid #1e293b'
        }}>
          ✎
        </div>
      </div>

      {modalContent}
    </>
  )
}