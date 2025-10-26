'use client'

import { useState, useEffect, useMemo } from 'react'
import { buildSearchIndex, searchLessons } from '@/app/utils/searchIndex'

export default function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  // Build search index once when component mounts
  const searchIndex = useMemo(() => buildSearchIndex(), [])
  
  // Get filtered results
  const filteredResults = useMemo(() => 
    searchLessons(searchQuery, searchIndex), 
    [searchQuery, searchIndex]
  )

  // Keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="search-button"
        style={{
          padding: '0.6rem 1.2rem',
          background: 'rgba(21, 35, 47, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          color: '#b0c4d4',
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          transition: 'all 0.3s ease',
          marginLeft: '1rem',
          marginRight: '1rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#3b82f6'
          e.currentTarget.style.background = 'rgba(21, 35, 47, 0.9)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
        }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="search-text">Search</span>
        <kbd className="search-kbd" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.15rem 0.4rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontFamily: 'monospace'
        }}>⌘K</kbd>
      </button>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          .search-text,
          .search-kbd {
            display: none;
          }
          .search-button {
            padding: 0.6rem !important;
          }
        }
      `}</style>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <div 
            onClick={() => setIsSearchOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998
            }}
          />

          {/* Search Box */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '700px',
            background: 'rgba(13, 27, 42, 0.98)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            zIndex: 9999
          }}>
            {/* Search Input */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ position: 'relative' }}>
                <svg 
                  style={{ 
                    position: 'absolute', 
                    left: '1rem', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    width: '24px', 
                    height: '24px', 
                    opacity: 0.5 
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search lessons, tools, modifiers, shortcuts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3.5rem',
                    fontSize: '1.1rem',
                    background: 'rgba(21, 35, 47, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: '#8fa9bd' }}>
                {searchIndex.length} searchable items indexed
              </div>
            </div>

            {/* Results */}
            <div style={{ 
              maxHeight: '400px', 
              overflowY: 'auto',
              padding: '1rem'
            }}>
              {searchQuery.trim() === '' ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#8fa9bd' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Try searching for:</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {['array', 'mirror', 'smooth', 'draw brush', 'grab', 'cloth', 'viewport', 'extrude', 'loop cut'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          borderRadius: '8px',
                          color: '#3b82f6',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredResults.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#8fa9bd' }}>
                  <p style={{ fontSize: '1.1rem' }}>No results found for "{searchQuery}"</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try different keywords</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {filteredResults.slice(0, 20).map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      onClick={() => setIsSearchOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(21, 35, 47, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(21, 35, 47, 0.9)'
                        e.currentTarget.style.borderColor = item.color
                        e.currentTarget.style.transform = 'translateX(5px)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <div style={{
                        width: '4px',
                        height: '40px',
                        background: item.color,
                        borderRadius: '2px',
                        flexShrink: 0
                      }} />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: '600', 
                          marginBottom: '0.25rem',
                          color: '#fff'
                        }}>
                          {item.title}
                        </h4>
                        {item.description && (
                          <p style={{ fontSize: '0.85rem', color: '#8fa9bd', marginBottom: '0.5rem' }}>
                            {item.description}
                          </p>
                        )}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                          <span style={{ color: item.color }}>{item.path}</span>
                          <span style={{
                            padding: '0.2rem 0.5rem',
                            background: getTypeColor(item.type).bg,
                            color: getTypeColor(item.type).text,
                            borderRadius: '6px',
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            fontWeight: '600'
                          }}>
                            {item.type}
                          </span>
                          <span style={{
                            padding: '0.2rem 0.5rem',
                            background: item.difficulty === 'Beginner' ? 'rgba(16, 185, 129, 0.2)' :
                                       item.difficulty === 'Intermediate' ? 'rgba(245, 158, 11, 0.2)' :
                                       'rgba(239, 68, 68, 0.2)',
                            color: item.difficulty === 'Beginner' ? '#10b981' :
                                   item.difficulty === 'Intermediate' ? '#f59e0b' :
                                   '#ef4444',
                            borderRadius: '6px',
                            fontSize: '0.75rem'
                          }}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                  {filteredResults.length > 20 && (
                    <div style={{ padding: '1rem', textAlign: 'center', color: '#8fa9bd', fontSize: '0.9rem' }}>
                      Showing first 20 of {filteredResults.length} results
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

function getTypeColor(type) {
  const colors = {
    tool: { bg: 'rgba(139, 92, 246, 0.2)', text: '#8b5cf6' },
    modifier: { bg: 'rgba(59, 130, 246, 0.2)', text: '#3b82f6' },
    brush: { bg: 'rgba(236, 72, 153, 0.2)', text: '#ec4899' },
    step: { bg: 'rgba(34, 197, 94, 0.2)', text: '#22c55e' },
    workflow: { bg: 'rgba(245, 158, 11, 0.2)', text: '#f59e0b' },
    mode: { bg: 'rgba(168, 85, 247, 0.2)', text: '#a855f7' },
    shortcut: { bg: 'rgba(99, 102, 241, 0.2)', text: '#6366f1' },
    concept: { bg: 'rgba(14, 165, 233, 0.2)', text: '#0ea5e9' },
    interface: { bg: 'rgba(20, 184, 166, 0.2)', text: '#14b8a6' },
    principle: { bg: 'rgba(251, 146, 60, 0.2)', text: '#fb923c' },
    technique: { bg: 'rgba(244, 114, 182, 0.2)', text: '#f472b6' }
  }
  return colors[type] || { bg: 'rgba(100, 100, 100, 0.2)', text: '#888' }
}