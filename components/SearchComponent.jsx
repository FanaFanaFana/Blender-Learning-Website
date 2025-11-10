'use client'

import { useState, useEffect, useRef } from 'react'
import { buildSearchIndex, searchLessons } from '@/app/utils/searchIndex'

export default function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searchIndex, setSearchIndex] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const searchRef = useRef(null)

  // Build search index on mount
  useEffect(() => {
    async function initSearchIndex() {
      setLoading(true)
      try {
        const index = await buildSearchIndex()
        setSearchIndex(index)
      } catch (error) {
        console.error('Failed to build search index:', error)
      } finally {
        setLoading(false)
      }
    }
    
    initSearchIndex()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Perform search when query changes
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    
    const timeoutId = setTimeout(() => {
      const searchResults = searchLessons(query, searchIndex)
      setResults(searchResults)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query, searchIndex])

  // NEW: Handle click - if result has itemData, encode it in URL hash
  const handleResultClick = (result) => {
    if (result.itemData) {
      // Navigate to lesson page with item hash
      const itemHash = encodeURIComponent(JSON.stringify(result.itemData))
      window.location.href = `${result.link}#item=${itemHash}`
    } else {
      // Regular navigation
      window.location.href = result.link
    }
    setIsExpanded(false)
  }

  return (
    <div ref={searchRef} style={{ position: 'relative', flex: '0 1 300px' }}>
      {/* Compact Search Input */}
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          disabled={loading}
          style={{
            width: '100%',
            padding: '0.6rem 1rem 0.6rem 2.5rem',
            background: 'rgba(21, 35, 47, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#fff',
            fontSize: '0.9rem',
            outline: 'none',
            transition: 'all 0.3s ease',
            opacity: loading ? 0.5 : 1
          }}
        />
        {/* Search Icon */}
        <svg
          style={{
            position: 'absolute',
            left: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '16px',
            height: '16px',
            color: '#8fa9bd'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Dropdown Results */}
      {isExpanded && query && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 0,
            maxHeight: '400px',
            overflowY: 'auto',
            background: 'rgba(15, 25, 35, 0.98)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
            zIndex: 1000,
            backdropFilter: 'blur(10px)'
          }}
        >
          {isSearching ? (
            <div style={{ 
              padding: '1.5rem', 
              textAlign: 'center',
              color: '#8fa9bd',
              fontSize: '0.9rem'
            }}>
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
              <div style={{ 
                padding: '0.75rem 1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                color: '#8fa9bd',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
              <div>
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    style={{
                      width: '100%',
                      display: 'block',
                      padding: '1rem',
                      borderBottom: index < results.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'background 0.2s ease',
                      cursor: 'pointer',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.4rem'
                    }}>
                      <div style={{ 
                        display: 'inline-block',
                        padding: '0.15rem 0.5rem',
                        background: `${result.color}20`,
                        color: result.color,
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {result.type}
                      </div>
                      {result.itemData && (
                        <div style={{
                          fontSize: '0.7rem',
                          color: '#8fa9bd',
                          fontStyle: 'italic'
                        }}>
                          • Opens detail view
                        </div>
                      )}
                    </div>
                    
                    <div style={{ 
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      marginBottom: '0.3rem',
                      color: '#fff'
                    }}>
                      {result.title}
                    </div>
                    
                    <div style={{ 
                      color: '#8fa9bd',
                      fontSize: '0.8rem',
                      lineHeight: '1.4',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {result.description}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div style={{ 
              padding: '2rem 1.5rem',
              textAlign: 'center',
              color: '#8fa9bd'
            }}>
              <div style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                No results found
              </div>
              <div style={{ fontSize: '0.8rem' }}>
                Try different keywords
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}