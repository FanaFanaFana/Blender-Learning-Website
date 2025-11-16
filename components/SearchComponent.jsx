'use client'

import { useState, useEffect, useRef } from 'react'
import { buildSearchIndex, searchLessons } from '@/app/utils/searchIndex'
import './styles/SearchComponent.css'

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

  // Handle click - if result has itemData, encode it in URL hash
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
    <div ref={searchRef} className="search-container">
      {/* Compact Search Input */}
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          disabled={loading}
          className="search-input"
        />
        {/* Search Icon */}
        <svg
          className="search-icon"
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
        <div className="search-dropdown">
          {isSearching ? (
            <div className="search-loading">
              Searching...
            </div>
          ) : results.length > 0 ? (
            <>
              <div className="search-results-header">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
              <div>
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="search-result-item"
                  >
                    <div className="search-result-header">
                      <div 
                        className="search-result-badge"
                        style={{
                          background: `${result.color}20`,
                          color: result.color
                        }}
                      >
                        {result.type}
                      </div>
                      {result.itemData && (
                        <div className="search-result-detail-hint">
                          • Opens detail view
                        </div>
                      )}
                    </div>
                    
                    <div className="search-result-title">
                      {result.title}
                    </div>
                    
                    <div className="search-result-description">
                      {result.description}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="search-no-results">
              <div className="search-no-results-title">
                No results found
              </div>
              <div className="search-no-results-hint">
                Try different keywords
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}