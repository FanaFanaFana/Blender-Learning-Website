// FILE: components/shared/DetailModal.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function DetailModal({ item, currentPage, onPageChange, onClose, onMouseEnter }) {
  const modalRef = useRef(null)
  const videoRef = useRef(null)
  const mediaContainerRef = useRef(null)
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
      // Don't close if clicking inside the modal or the media container
      if (modalRef.current && !modalRef.current.contains(e.target) && 
          (!mediaContainerRef.current || !mediaContainerRef.current.contains(e.target))) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [onClose, isFullscreen])

  // Preload next page image for smoother navigation
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

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const page = item.detailedInfo.pages[currentPage]
  const totalPages = item.detailedInfo.pages.length
  
  // Simplified media detection - treat all videos and gifs the same way
  const isMedia = page.image && (
    page.image.endsWith('.mp4') || 
    page.image.endsWith('.webm') || 
    page.image.endsWith('.mov') ||
    page.image.endsWith('.MOV') ||
    page.image.endsWith('.gif')
  )
  const isGif = page.image && page.image.endsWith('.gif')

  const toggleFullscreen = async (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    const mediaElement = videoRef.current
    
    if (!mediaElement) return
    
    try {
      if (!document.fullscreenElement) {
        await mediaElement.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.55)',
      backdropFilter: 'blur(8px)',
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
          background: 'linear-gradient(135deg, rgba(21, 35, 47, 0.95), rgba(15, 25, 35, 0.98))',
          borderRadius: '24px',
          maxWidth: '1000px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'hidden',
          border: `1px solid ${item.color}40`,
          display: 'flex',
          flexDirection: 'column',
          animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '2rem',
          borderBottom: `1px solid ${item.color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {item.icon && (
              <img 
                src={item.icon} 
                alt="" 
                width={48}
                height={48}
                style={{ 
                  filter: `drop-shadow(0 0 6px ${item.color})`,
                  flexShrink: 0
                }}
              />
            )}
            <div>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '0.25rem',
                color: '#fff'
              }}>
                {item.name}
              </h2>
              <p style={{ 
                color: '#8fa9bd', 
                fontSize: '1rem',
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
              border: '1px solid rgba(255, 255, 255, 0.1)',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: '#8fa9bd',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'
              e.currentTarget.style.borderColor = '#ef4444'
              e.currentTarget.style.color = '#ef4444'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.color = '#8fa9bd'
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem'
        }}>
          {/* Overview Section */}
          {currentPage === 0 && (
            <div style={{
              marginBottom: '2.5rem',
              paddingBottom: '2rem',
              borderBottom: `1px solid ${item.color}15`
            }}>
              <h3 style={{ 
                color: item.color, 
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                Overview
              </h3>
              <p style={{ 
                color: '#b0c4d4',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                margin: 0
              }}>
                {item.detailedInfo.overview}
              </p>
            </div>
          )}

          {/* Current Page Content */}
          <h3 style={{ 
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            color: item.color
          }}>
            {page.title}
          </h3>

          {page.image && (
            <>
              {isMedia ? (
                <div 
                  ref={mediaContainerRef}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFullscreen(e)
                  }}
                  style={{
                    position: 'relative',
                    width: '80%',
                    height: '385px',
                    marginBottom: '1.5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(0, 0, 0, 0.9)',
                    border: `1px solid ${item.color}20`,
                    cursor: 'pointer'
                  }}
                >
                  {isGif ? (
                    <img
                      ref={videoRef}
                      src={page.image}
                      alt={page.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFullscreen(e)
                      }}
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      src={page.image}
                      controls
                      autoPlay
                      loop
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFullscreen(e)
                      }}
                    />
                  )}
                  
                  {/* Fullscreen indicator */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    opacity: 0.7,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                    </svg>
                    <span style={{ color: 'white', fontSize: '12px', fontWeight: '500' }}>
                      Click to fullscreen
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: `1px solid ${item.color}20`
                }}>
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    sizes="(max-width: 1000px) 100vw, 1000px"
                  />
                </div>
              )}
            </>
          )}

          <p style={{
            color: '#b0c4d4',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}>
            {page.content}
          </p>

          {/* Tips Section */}
          {page.tips && page.tips.length > 0 && (
            <div style={{
              background: 'rgba(21, 35, 47, 0.6)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: item.color,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                💡 Pro Tips
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {page.tips.map((tip, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    gap: '0.75rem',
                    color: '#8fa9bd',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ 
                      color: item.color,
                      flexShrink: 0,
                      fontWeight: '600'
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

        {/* Footer Navigation */}
        <div style={{
          padding: '1.5rem 2rem',
          borderTop: `1px solid ${item.color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
          background: 'rgba(0, 0, 0, 0.2)'
        }}>
          <button
            onMouseEnter={onMouseEnter}
            disabled={currentPage === 0}
            onClick={() => onPageChange(currentPage - 1)}
            style={{
              background: currentPage === 0 ? 'rgba(255, 255, 255, 0.02)' : item.color,
              border: 'none',
              padding: '0.875rem 1.75rem',
              borderRadius: '10px',
              color: currentPage === 0 ? '#4a5568' : '#fff',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: currentPage === 0 ? 0.4 : 1
            }}
            onMouseOver={(e) => {
              if (currentPage > 0) {
                e.currentTarget.style.transform = 'translateX(-4px)'
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            ← Previous
          </button>

          <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onMouseEnter={onMouseEnter}
                onClick={() => onPageChange(idx)}
                style={{
                  width: idx === currentPage ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentPage ? item.color : 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button
            onMouseEnter={onMouseEnter}
            disabled={currentPage === totalPages - 1}
            onClick={() => onPageChange(currentPage + 1)}
            style={{
              background: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.02)' : item.color,
              border: 'none',
              padding: '0.875rem 1.75rem',
              borderRadius: '10px',
              color: currentPage === totalPages - 1 ? '#4a5568' : '#fff',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: currentPage === totalPages - 1 ? 0.4 : 1
            }}
            onMouseOver={(e) => {
              if (currentPage < totalPages - 1) {
                e.currentTarget.style.transform = 'translateX(4px)'
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateX(0)'
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}