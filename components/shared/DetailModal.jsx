// FILE: components/shared/DetailModal.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function DetailModal({ item, currentPage, onPageChange, onClose, onMouseEnter }) {
  const modalRef = useRef(null)
  const mediaContainerRef = useRef(null)
  const fullscreenRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false)
        } else {
          onClose()
        }
      }
    }
    
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && 
          (!mediaContainerRef.current || !mediaContainerRef.current.contains(e.target)) &&
          (!fullscreenRef.current || !fullscreenRef.current.contains(e.target))) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, isFullscreen])

  useEffect(() => {
    if (currentPage < item.detailedInfo.pages.length - 1) {
      const nextImage = item.detailedInfo.pages[currentPage + 1].image
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.as = 'image'
      link.href = nextImage
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [currentPage, item.detailedInfo.pages])

  const page = item.detailedInfo.pages[currentPage]
  const totalPages = item.detailedInfo.pages.length

  const toggleFullscreen = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(13, 27, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '2rem',
        animation: 'fadeIn 0.2s ease-out'
      }}>
        <div 
          ref={modalRef}
          style={{
            background: 'rgb(27, 40, 56)',
            borderRadius: '24px',
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.3s ease-out'
          }}
        >
          {/* Header */}
          <div style={{
            padding: '2rem 2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
              {item.icon && (
                <img 
                  src={item.icon} 
                  alt="" 
                  width={48}
                  height={48}
                  style={{ 
                    flexShrink: 0
                  }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                  marginBottom: '0.25rem',
                  color: '#fff',
                  fontWeight: '700'
                }}>
                  {item.name}
                </h2>
                <p style={{ 
                  color: 'rgb(143, 169, 189)', 
                  fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                  margin: 0
                }}>
                  {item.description}
                </p>
              </div>
            </div>

            <button 
              onMouseEnter={onMouseEnter}
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.25rem',
                color: 'rgb(143, 169, 189)',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'
                e.currentTarget.style.color = '#ef4444'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.color = 'rgb(143, 169, 189)'
              }}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden'
          }}>
            <div style={{ padding: '2.5rem' }}>
              {/* Overview Section - Only on first page */}
              {currentPage === 0 && (
                <div style={{
                  marginBottom: '2.5rem',
                  padding: '2rem',
                  background: 'rgba(21, 35, 47, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{ 
                    color: item.color, 
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    marginBottom: '1rem',
                    fontWeight: '700'
                  }}>
                    Overview
                  </h3>
                  <p style={{ 
                    color: 'rgb(176, 196, 212)',
                    fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                    lineHeight: '1.8',
                    margin: 0
                  }}>
                    {item.detailedInfo.overview}
                  </p>
                </div>
              )}

              {/* Current Page Content */}
              <h3 style={{ 
                fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)',
                marginBottom: '2rem',
                color: '#fff',
                fontWeight: '700'
              }}>
                {page.title}
              </h3>

              {page.image && (
                <div 
                  ref={mediaContainerRef}
                  onClick={toggleFullscreen}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/10',
                    marginBottom: '2rem',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}`
                    e.currentTarget.style.borderWidth = '3px'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.borderWidth = '2px'
                  }}
                >
                  <img
                    src={page.image}
                    alt={page.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Fullscreen hint */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.8,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                    <span style={{ color: 'white', fontSize: '13px', fontWeight: '500' }}>
                      Expand
                    </span>
                  </div>
                </div>
              )}

              <p style={{
                color: 'rgb(176, 196, 212)',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                {page.content}
              </p>

              {/* Tips Section */}
              {page.tips && page.tips.length > 0 && (
                <div style={{
                  background: 'rgba(21, 35, 47, 0.6)',
                  padding: '1.75rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                    marginBottom: '1.25rem',
                    color: item.color,
                    fontWeight: '600'
                  }}>
                    Pro Tips
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.875rem'
                  }}>
                    {page.tips.map((tip, idx) => (
                      <li key={idx} style={{
                        display: 'flex',
                        gap: '0.875rem',
                        color: 'rgb(143, 169, 189)',
                        fontSize: 'clamp(0.9rem, 1.5vw, 0.95rem)',
                        lineHeight: '1.6',
                        paddingLeft: '0.5rem'
                      }}>
                        <span style={{ 
                          color: item.color,
                          flexShrink: 0,
                          fontWeight: '700',
                          fontSize: '1.1rem'
                        }}>
                          •
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Footer Navigation */}
          <div style={{
            padding: '1.5rem 2.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexShrink: 0,
            background: 'rgba(21, 35, 47, 0.4)'
          }}>
            <button
              onMouseEnter={onMouseEnter}
              disabled={currentPage === 0}
              onClick={() => onPageChange(currentPage - 1)}
              style={{
                background: currentPage === 0 ? 'rgba(255, 255, 255, 0.03)' : item.color,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                color: currentPage === 0 ? 'rgb(122, 140, 158)' : '#fff',
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                fontWeight: '600',
                cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentPage === 0 ? 0.5 : 1,
                minWidth: '120px'
              }}
              onMouseOver={(e) => {
                if (currentPage > 0) {
                  e.currentTarget.style.transform = 'translateX(-3px)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${item.color}40`
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              ← Previous
            </button>

            {/* Page Indicators */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}>
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onMouseEnter={onMouseEnter}
                  onClick={() => onPageChange(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  style={{
                    width: idx === currentPage ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === currentPage ? item.color : 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: idx === currentPage ? `0 0 12px ${item.color}80` : 'none'
                  }}
                  onMouseOver={(e) => {
                    if (idx !== currentPage) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (idx !== currentPage) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
                    }
                  }}
                />
              ))}
            </div>

            <button
              onMouseEnter={onMouseEnter}
              disabled={currentPage === totalPages - 1}
              onClick={() => onPageChange(currentPage + 1)}
              style={{
                background: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.03)' : item.color,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                color: currentPage === totalPages - 1 ? 'rgb(122, 140, 158)' : '#fff',
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                fontWeight: '600',
                cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                minWidth: '120px'
              }}
              onMouseOver={(e) => {
                if (currentPage < totalPages - 1) {
                  e.currentTarget.style.transform = 'translateX(3px)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${item.color}40`
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Next →
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div 
          ref={fullscreenRef}
          onClick={(e) => {
            e.stopPropagation()
            toggleFullscreen(e)
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <img
            src={page.image}
            alt={page.title}
            style={{
              maxWidth: '95%',
              maxHeight: '95%',
              objectFit: 'contain'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            padding: '12px 18px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '500',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '16px' }}>✕</span>
            Click or press ESC to exit
          </div>
        </div>
      )}
    </>
  )
}