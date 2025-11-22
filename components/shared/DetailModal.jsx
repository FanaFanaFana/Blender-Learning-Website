'use client'

import { useEffect, useRef, useState } from 'react'
import './DetailModal.css'

// ============================================
// CROSS-LESSON LINKING HELPER
// ============================================
function createLinkedText(text, allItems, currentItemName, themeColor, onItemClick) {
  if (!text || !allItems || allItems.length === 0) return text;
  
  const keywordMap = {};
  allItems.forEach(item => {
    if (item.name && item.name !== currentItemName) {
      keywordMap[item.name.toLowerCase()] = item;
    }
  });
  
  const keywords = Object.keys(keywordMap);
  if (keywords.length === 0) return text;
  
  const sortedKeywords = keywords.sort((a, b) => b.length - a.length);
  const escapedKeywords = sortedKeywords.map(k => 
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'gi');
  
  const parts = [];
  let lastIndex = 0;
  const matches = [];
  
  let match;
  while ((match = pattern.exec(text)) !== null) {
    matches.push({
      keyword: match[0],
      index: match.index,
      length: match[0].length,
      endIndex: match.index + match[0].length
    });
  }
  
  const validMatches = [];
  const sortedMatches = [...matches].sort((a, b) => {
    if (a.index !== b.index) return a.index - b.index;
    return b.length - a.length;
  });
  
  for (const match of sortedMatches) {
    const overlaps = validMatches.some(valid => 
      (match.index >= valid.index && match.index < valid.endIndex) ||
      (match.endIndex > valid.index && match.endIndex <= valid.endIndex) ||
      (match.index <= valid.index && match.endIndex >= valid.endIndex)
    );
    
    if (!overlaps) {
      validMatches.push(match);
    }
  }
  
  validMatches.sort((a, b) => a.index - b.index);
  
  validMatches.forEach((match) => {
    const keywordLower = match.keyword.toLowerCase();
    const linkedItem = keywordMap[keywordLower];
    
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
        key: `text-${lastIndex}`
      });
    }
    
    if (linkedItem) {
      parts.push({
        type: 'link',
        content: match.keyword,
        item: linkedItem,
        key: `link-${match.index}`
      });
    }
    
    lastIndex = match.endIndex;
  });
  
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(lastIndex),
      key: `text-${lastIndex}`
    });
  }
  
  return parts.map(part => {
    if (part.type === 'text') {
      return <span key={part.key}>{part.content}</span>;
    }
    
    const isCrossLesson = part.item.lessonId !== undefined;
    
    return (
      <a
        key={part.key}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onItemClick(part.item);
        }}
        style={{
          color: themeColor,
          textDecoration: 'none',
          borderBottom: `1px dotted ${themeColor}80`,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontWeight: '500',
          padding: '0 2px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderBottom = `1px solid ${themeColor}`;
          e.currentTarget.style.backgroundColor = `${themeColor}15`;
          e.currentTarget.style.borderRadius = '3px';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderBottom = `1px dotted ${themeColor}80`;
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        title={isCrossLesson 
          ? `From ${part.item.lessonTitle} lesson - Click to learn more` 
          : `Learn about ${part.content}`
        }
      >
        {part.content}
        {isCrossLesson && (
          <sup style={{ 
            fontSize: '0.65em', 
            marginLeft: '2px',
            opacity: 0.6 
          }}>
            ↗
          </sup>
        )}
      </a>
    );
  });
}

export default function DetailModal({ 
  item, 
  currentPage, 
  onPageChange, 
  onClose, 
  onMouseEnter,
  allItems = []
}) {
  const modalRef = useRef(null)
  const videoRef = useRef(null)
  const fullscreenVideoRef = useRef(null)
  const mediaContainerRef = useRef(null)
  const fullscreenRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(false)
  const [fullscreenPlaying, setFullscreenPlaying] = useState(true)
  const [fullscreenTime, setFullscreenTime] = useState(0)
  const [fullscreenDuration, setFullscreenDuration] = useState(0)
  const [showFullscreenControls, setShowFullscreenControls] = useState(false)
  
  const [itemHistory, setItemHistory] = useState([item])
  const [currentItem, setCurrentItem] = useState(item)
  
  // ✅ SAFETY CHECK: Wait for detailed info to load
  if (!currentItem?.detailedInfo?.pages || currentItem.detailedInfo.pages.length === 0) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          background: 'rgba(21, 35, 47, 0.95)',
          padding: '3rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          {currentItem?.loading ? (
            <>
              <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid rgba(255, 255, 255, 0.1)',
                borderTop: '4px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
                margin: '0 auto 1.5rem'
              }} />
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                Loading Details...
              </h3>
              <p style={{ color: '#8fa9bd', margin: 0 }}>
                Please wait while we fetch the content
              </p>
              <style jsx>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </>
          ) : (
            <>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                opacity: 0.5
              }}>⚠️</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '0.5rem',
                color: '#fff'
              }}>
                No Details Available
              </h3>
              <p style={{ 
                color: '#8fa9bd', 
                marginBottom: '1.5rem' 
              }}>
                This item doesn't have detailed information yet.
              </p>
              <button
                onClick={onClose}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#3b82f6',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
  
  useEffect(() => {
    setCurrentItem(item)
    setItemHistory([item])
  }, [item])
  
  const handleLinkedItemClick = (linkedItem) => {
    setItemHistory(prev => [...prev, linkedItem])
    setCurrentItem({
      ...linkedItem,
      color: linkedItem.categoryColor || currentItem.color
    })
    onPageChange(0)
  }
  
  const handleBack = () => {
    const newHistory = [...itemHistory]
    newHistory.pop()
    const previousItem = newHistory[newHistory.length - 1]
    setItemHistory(newHistory)
    setCurrentItem(previousItem)
    onPageChange(0)
  }
  
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
    if (isFullscreen && fullscreenVideoRef.current) {
      fullscreenVideoRef.current.currentTime = currentTime
      if (isPlaying) {
        fullscreenVideoRef.current.play()
      } else {
        fullscreenVideoRef.current.pause()
      }
    }
  }, [isFullscreen])

  const page = currentItem.detailedInfo.pages[currentPage]
  const totalPages = currentItem.detailedInfo.pages.length
  const mediaUrl = page.finalMediaUrl || page.mediaUrl || page.image

  const toggleFullscreen = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsFullscreen(!isFullscreen)
  }

  const togglePlayPause = (e) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleFullscreenPlayPause = (e) => {
    e.stopPropagation()
    if (fullscreenVideoRef.current) {
      if (fullscreenPlaying) {
        fullscreenVideoRef.current.pause()
      } else {
        fullscreenVideoRef.current.play()
      }
      setFullscreenPlaying(!fullscreenPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleFullscreenTimeUpdate = () => {
    if (fullscreenVideoRef.current) {
      setFullscreenTime(fullscreenVideoRef.current.currentTime)
    }
  }

  const handleFullscreenLoadedMetadata = () => {
    if (fullscreenVideoRef.current) {
      setFullscreenDuration(fullscreenVideoRef.current.duration)
    }
  }

  const handleSeek = (e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    if (videoRef.current) {
      videoRef.current.currentTime = pos * duration
      setCurrentTime(pos * duration)
    }
  }

  const handleFullscreenSeek = (e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.currentTime = pos * fullscreenDuration
      setFullscreenTime(pos * fullscreenDuration)
    }
  }

  const skipTime = (seconds, e) => {
    e.stopPropagation()
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds))
    }
  }

  const skipFullscreenTime = (seconds, e) => {
    e.stopPropagation()
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.currentTime = Math.max(0, Math.min(fullscreenDuration, fullscreenVideoRef.current.currentTime + seconds))
    }
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      <div className="detail-modal-overlay">
        <div ref={modalRef} className="detail-modal-container">
          {/* Header */}
          <div className="detail-modal-header">
            <div className="detail-modal-header-content">
              {itemHistory.length > 1 && (
                <button
                  className="detail-modal-back-button"
                  onMouseEnter={onMouseEnter}
                  onClick={handleBack}
                >
                  ← Back
                </button>
              )}
              
              {currentItem.icon && (
                <img 
                  src={currentItem.icon} 
                  alt="" 
                  width={48}
                  height={48}
                  className="detail-modal-icon"
                />
              )}
              <div className="detail-modal-info">
                <h2 className="detail-modal-title">
                  {currentItem.name}
                </h2>
                <p className="detail-modal-description">
                  {currentItem.description}
                </p>
                {currentItem.lessonTitle && (
                  <p className="detail-modal-lesson-source">
                    From: {currentItem.lessonTitle}
                  </p>
                )}
              </div>
            </div>

            <button 
              className="detail-modal-close-button"
              onMouseEnter={onMouseEnter}
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="detail-modal-body">
            <div className="detail-modal-content">
              {currentPage === 0 && (
                <div className="detail-modal-overview">
                  <h3 
                    className="detail-modal-overview-title"
                    style={{ color: currentItem.color }}
                  >
                    Overview
                  </h3>
                  <p className="detail-modal-overview-text">
                    {createLinkedText(
                      currentItem.detailedInfo.overview,
                      allItems,
                      currentItem.name,
                      currentItem.color,
                      handleLinkedItemClick
                    )}
                  </p>
                </div>
              )}

              <h3 className="detail-modal-page-title">
                {page.title}
              </h3>

              {mediaUrl && (
                <div 
                  ref={mediaContainerRef}
                  className="detail-modal-media-container"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                  onClick={toggleFullscreen}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = currentItem.color
                    e.currentTarget.style.borderWidth = '1.8px'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(8, 7, 7, 0.16)'
                    e.currentTarget.style.borderWidth = '2px'
                  }}
                >
                  <video
                    ref={videoRef}
                    src={mediaUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    className="detail-modal-video"
                  />
                  
                  <div className={`detail-modal-controls-overlay ${showControls ? 'visible' : 'hidden'}`}>
                    <div 
                      className="detail-modal-progress-bar"
                      onClick={handleSeek}
                    >
                      <div 
                        className="detail-modal-progress-fill"
                        style={{ 
                          background: currentItem.color,
                          width: `${(currentTime / duration) * 100}%` 
                        }}
                      />
                    </div>

                    <div className="detail-modal-controls">
                      <button
                        className="detail-modal-control-button"
                        onClick={(e) => skipTime(-5, e)}
                      >
                        -5s
                      </button>

                      <button
                        className="detail-modal-play-button"
                        onClick={togglePlayPause}
                      >
                        {isPlaying ? '⏸' : '▶'}
                      </button>

                      <button
                        className="detail-modal-control-button"
                        onClick={(e) => skipTime(5, e)}
                      >
                        +5s
                      </button>

                      <span className="detail-modal-time-display">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>

                      <button
                        className="detail-modal-fullscreen-button"
                        onClick={toggleFullscreen}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.8">
                          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <p className="detail-modal-page-content">
                {createLinkedText(
                  page.content,
                  allItems,
                  currentItem.name,
                  currentItem.color,
                  handleLinkedItemClick
                )}
              </p>

              {page.tips && page.tips.length > 0 && (
                <div className="detail-modal-tips">
                  <h4 
                    className="detail-modal-tips-title"
                    style={{ color: currentItem.color }}
                  >
                    Pro Tips
                  </h4>
                  <ul className="detail-modal-tips-list">
                    {page.tips.map((tip, idx) => (
                      <li key={idx} className="detail-modal-tip-item">
                        <span 
                          className="detail-modal-tip-bullet"
                          style={{ color: currentItem.color }}
                        >
                          •
                        </span>
                        <span>
                          {createLinkedText(
                            tip,
                            allItems,
                            currentItem.name,
                            currentItem.color,
                            handleLinkedItemClick
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="detail-modal-footer">
            <button
              className={`detail-modal-nav-button ${currentPage === 0 ? 'disabled' : 'enabled'}`}
              style={currentPage > 0 ? { background: currentItem.color } : {}}
              onMouseEnter={onMouseEnter}
              disabled={currentPage === 0}
              onClick={() => onPageChange(currentPage - 1)}
              onMouseOver={(e) => {
                if (currentPage > 0) {
                  e.currentTarget.style.transform = 'translateX(-3px)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${currentItem.color}40`
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              ← Previous
            </button>

            <div className="detail-modal-pagination">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`detail-modal-page-indicator ${idx === currentPage ? 'active' : 'inactive'}`}
                  style={{
                    background: idx === currentPage ? currentItem.color : undefined,
                    boxShadow: idx === currentPage ? `0 0 12px ${currentItem.color}80` : 'none'
                  }}
                  onMouseEnter={onMouseEnter}
                  onClick={() => onPageChange(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className={`detail-modal-nav-button ${currentPage === totalPages - 1 ? 'disabled' : 'enabled'}`}
              style={currentPage < totalPages - 1 ? { background: currentItem.color } : {}}
              onMouseEnter={onMouseEnter}
              disabled={currentPage === totalPages - 1}
              onClick={() => onPageChange(currentPage + 1)}
              onMouseOver={(e) => {
                if (currentPage < totalPages - 1) {
                  e.currentTarget.style.transform = 'translateX(3px)'
                  e.currentTarget.style.boxShadow = `0 4px 12px ${currentItem.color}40`
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
      </div>

      {/* Fullscreen Mode */}
      {isFullscreen && mediaUrl && (
        <div 
          ref={fullscreenRef}
          className="detail-modal-fullscreen"
          onMouseMove={() => {
            setShowFullscreenControls(true)
            if (window.fullscreenControlsTimer) {
              clearTimeout(window.fullscreenControlsTimer)
            }
            window.fullscreenControlsTimer = setTimeout(() => {
              setShowFullscreenControls(false)
            }, 2000)
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget || e.target.tagName === 'VIDEO') {
              toggleFullscreen(e)
            }
          }}
        >
          <video
            ref={fullscreenVideoRef}
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleFullscreenTimeUpdate}
            onLoadedMetadata={handleFullscreenLoadedMetadata}
            className="detail-modal-fullscreen-video"
          />
          
          <div className={`detail-modal-fullscreen-controls ${showFullscreenControls ? 'visible' : 'hidden'}`}>
            <div 
              className="detail-modal-progress-bar"
              onClick={handleFullscreenSeek}
            >
              <div 
                className="detail-modal-progress-fill"
                style={{
                  background: currentItem.color,
                  width: `${(fullscreenTime / fullscreenDuration) * 100}%`
                }}
              />
            </div>

            <div className="detail-modal-controls">
              <button 
                className="detail-modal-fullscreen-control-button"
                onClick={(e) => skipFullscreenTime(-5, e)}
              >
                -5s
              </button>

              <button
                className="detail-modal-fullscreen-play-button"
                onClick={toggleFullscreenPlayPause}
              >
                {fullscreenPlaying ? '⏸' : '▶'}
              </button>

              <button
                className="detail-modal-fullscreen-control-button"
                onClick={(e) => skipFullscreenTime(5, e)}
              >
                +5s
              </button>

              <span className="detail-modal-fullscreen-time">
                {formatTime(fullscreenTime)} / {formatTime(fullscreenDuration)}
              </span>
            </div>
          </div>

          <div className={`detail-modal-fullscreen-exit-hint ${showFullscreenControls ? 'visible' : 'hidden'}`}>
            <span style={{ fontSize: '16px' }}>✕</span>
            Click or press ESC to exit
          </div>
        </div>
      )}
    </>
  )
}