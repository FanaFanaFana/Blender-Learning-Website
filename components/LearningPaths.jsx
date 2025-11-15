'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PathsScene from './PathsScene'
import { playHover } from '@/app/utils/sounds'
// ✅ Import from centralized config
import { CATEGORIES, getCategoryKeys } from '@/app/config/categories'

export default function BlenderCompendium() {
  const [selectedCategory, setSelectedCategory] = useState('modeling')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [categories, setCategories] = useState({})
  const [loading, setLoading] = useState(true)

  // ✅ Use centralized config for main categories
  const mainCategories = ['modeling', 'rendering', 'animation']
  
  // ✅ Get dropdown categories dynamically (everything after the first 3)
  const dropdownCategories = getCategoryKeys().slice(3)

  // Fetch lessons from API route
  useEffect(() => {
    async function fetchLessons() {
      try {
        const response = await fetch('/api/lessons')
        if (!response.ok) throw new Error('Failed to fetch')
        const lessons = await response.json()
        
        console.log('📚 Fetched lessons with icons:', lessons)
        
        // Group lessons by category
        const groupedLessons = lessons.reduce((acc, lesson) => {
          const cat = lesson.lessonCategory || 'Lesson'
          if (!acc[cat]) {
            acc[cat] = {
              ...CATEGORIES[cat], // ✅ Use centralized config
              topics: []
            }
          }
          acc[cat].topics.push({
  title: lesson.fullTitle || 'Untitled',  // ✅ Changed from lesson.gradientText || lesson.title
  description: 'Click to view lesson details',
  icon: lesson.icon || '/Icons/blender_icon_current_file.svg',
  link: `/lessons/${lesson.id}`
})
          return acc
        }, {})

        // Merge with metadata for categories without lessons
        const mergedCategories = getCategoryKeys().reduce((acc, key) => {
          acc[key] = groupedLessons[key] || {
            ...CATEGORIES[key], // ✅ Use centralized config
            topics: []
          }
          return acc
        }, {})

        setCategories(mergedCategories)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching lessons:', error)
        setLoading(false)
      }
    }

    fetchLessons()
  }, [])

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && CATEGORIES[hash]) { // ✅ Use centralized config
        setSelectedCategory(hash)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const currentCategory = categories[selectedCategory] || {}

  if (loading) {
    return (
      <div style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#8fa9bd'
      }}>
        Loading lessons...
      </div>
    )
  }

  return (
    <>
      {/* Hero section with 3D scene background */}
      <section className="paths-hero-section">
  <div className="paths-scene-background">
    <PathsScene />
  </div>

  <div className="container">
    <div className="paths-text-overlay">
      <h2>{currentCategory.title || 'Documentation'}</h2>
      <p>{currentCategory.description || 'Explore comprehensive guides and references'}</p>
    </div>
  </div>
</section>

      {/* Main content */}
      <section className="learning-paths">
        <div className="container">
          <div className="path-selector">
            {mainCategories.map((key) => (
              <button
                onMouseEnter={playHover}
                key={key}
                className={`path-button ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(key)
                  window.history.pushState(null, '', `#${key}`)
                }}
                style={selectedCategory === key ? { 
                  borderColor: CATEGORIES[key]?.color, 
                  backgroundColor: `${CATEGORIES[key]?.color}15` 
                } : {}}
              >
                <Image 
                  src={CATEGORIES[key]?.icon || '/Icons/blender_icon_current_file.svg'} 
                  alt={CATEGORIES[key]?.title || key} 
                  width={50} 
                  height={50} 
                />
                <span>{CATEGORIES[key]?.title || key}</span>
              </button>
            ))}

            {/* Dropdown Button */}
            <div className="category-dropdown-wrapper">
              <button
                onMouseEnter={playHover}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="path-button"
                style={{ minWidth: 'auto', padding: '1rem 1.5rem' }}
              >
                <span style={{ 
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  fontSize: '1.2rem'
                }}>
                  ▼
                </span>
              </button>

              {/* Dropdown Menu - ✅ Now uses centralized config */}
              {isDropdownOpen && (
                <div className="category-dropdown-menu">
                  {dropdownCategories.map((key) => (
                    <button
                      key={key}
                      className={`category-dropdown-btn ${selectedCategory === key ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(key)
                        setIsDropdownOpen(false)
                        window.history.pushState(null, '', `#${key}`)
                      }}
                      style={{
                        background: selectedCategory === key ? `${CATEGORIES[key]?.color}30` : 'transparent',
                        color: selectedCategory === key ? '#0a0f14' : '#fff',
                        fontWeight: selectedCategory === key ? '600' : '400'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${CATEGORIES[key]?.color}15`
                        if (selectedCategory !== key) e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = selectedCategory === key ? `${CATEGORIES[key]?.color}30` : 'transparent'
                        e.currentTarget.style.color = selectedCategory === key ? '#0a0f14' : '#fff'
                      }}
                    >
                      <Image 
                        src={CATEGORIES[key]?.icon || '/Icons/blender_icon_current_file.svg'} 
                        alt={CATEGORIES[key]?.title || key} 
                        width={24} 
                        height={24} 
                        style={{ filter: selectedCategory === key ? 'none' : 'brightness(0) invert(1)' }} 
                      />
                      <span>{CATEGORIES[key]?.title || key}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="path-content">
            <div className="path-header" style={{ borderLeftColor: currentCategory.color }}>
              <h3>{currentCategory.title}</h3>
              <p>{currentCategory.description}</p>
            </div>

            {currentCategory.topics && currentCategory.topics.length > 0 ? (
              <div className="topic-cards-grid">
                {currentCategory.topics.map((topic, index) => {
                  const TopicWrapper = topic.link ? Link : 'div'
                  const wrapperProps = topic.link ? { href: topic.link } : {}
                  
                  return (
                    <TopicWrapper 
                      key={index} 
                      onMouseEnter={playHover} 
                      {...wrapperProps}
                      className="topic-card"
                    >
                      <div 
                        className="topic-card-icon"
                        style={{ background: `${currentCategory.color}15` }}
                      >
                        <Image 
                          src={topic.icon} 
                          alt={topic.title}
                          width={36}
                          height={36}
                          onError={(e) => {
                            console.error(`Failed to load icon for ${topic.title}:`, topic.icon)
                            e.currentTarget.src = '/Icons/blender_icon_current_file.svg'
                          }}
                        />
                      </div>
                      <div>
                        <h4>{topic.title}</h4>
                        <p>{topic.description}</p>
                      </div>
                    </TopicWrapper>
                  )
                })}
              </div>
            ) : (
              <div className="empty-category-state">
                <p>No lessons available in this category yet.</p>
                <p>Create lessons in Sanity Studio and assign them to this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}