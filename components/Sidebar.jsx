"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { playHover } from '@/app/utils/sounds'
// ✅ Import from centralized config
import { getCategoryLabel } from '@/app/config/categories'

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [allTopics, setAllTopics] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch lessons from API route on mount
  useEffect(() => {
    async function fetchLessons() {
      try {
        const response = await fetch('/api/lessons')
        if (!response.ok) throw new Error('Failed to fetch')
        const lessons = await response.json()

        console.log('📚 Fetched lessons with icons:', lessons)

        // Transform API data to match sidebar format
        const transformedTopics = lessons.map(lesson => {
          const displayTitle = lesson.title && lesson.gradientText
            ? `${lesson.title} ${lesson.gradientText}`
            : lesson.gradientText || lesson.title || 'Untitled'
          const categoryKey = lesson.lessonCategory || 'Lesson'
          // ✅ Use centralized category labels
          const categoryLabel = getCategoryLabel(categoryKey)

          return {
            title: displayTitle,
            category: categoryLabel,
            icon: lesson.icon || '/Icons/blender_icon_current_file.svg',
            link: `/lessons/${lesson.id}`,
            color: lesson.themeColor || '#3b82f6'
          }
        })

        console.log('✅ Transformed topics:', transformedTopics)
        setAllTopics(transformedTopics)
        setLoading(false)
      } catch (error) {
        console.error('❌ Error fetching lessons:', error)
        setLoading(false)
      }
    }

    fetchLessons()
  }, [])

  const filteredTopics = allTopics.filter(topic =>
    (topic.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (topic.category || '').toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Group by category
  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = []
    }
    acc[topic.category].push(topic)
    return acc
  }, {})

  // Handle mouse leave with a small delay
  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    if (e.clientX > rect.right) {
      setTimeout(() => {
        setIsSidebarOpen(false)
      }, 200)
    }
  }

  const handleMouseEnter = () => {
    setIsSidebarOpen(true)
  }

  return (
    <>
      {/* Overlay for touch devices */}
      {isSidebarOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
          onTouchEnd={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9998,
            background: 'rgba(0, 0, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        />
      )}

      {/* Invisible buffer zone */}
      {isSidebarOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '340px',
            height: '100vh',
            zIndex: 9999,
            pointerEvents: 'auto'
          }}
        />
      )}

      {/* Sidebar */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: isSidebarOpen ? '320px' : '0px',
          background: 'rgba(21, 35, 47, 0.95)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: isSidebarOpen ? '1.5rem' : '0',
          zIndex: 10000,
          transition: 'all 0.3s ease'
        }}
        className="documentation-sidebar"
      >
        {/* Search Bar */}
        <div style={{ marginBottom: '1.5rem', opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          <input
            onMouseEnter={playHover}
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(13, 27, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{
            opacity: isSidebarOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
            textAlign: 'center',
            color: '#7a8c9e',
            padding: '2rem'
          }}>
            Loading lessons...
          </div>
        )}

        {/* Topics List */}
        {!loading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease 0.1s' }}>
            {Object.entries(groupedTopics).map(([category, topics]) => (
              <div key={category}>
                <h3 style={{
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: topics[0].color,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em'
                }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {topics.map((topic, idx) => {
                    const TopicWrapper = topic.link ? Link : 'div'
                    const wrapperProps = topic.link ? { href: topic.link } : {}

                    return (
                      <TopicWrapper key={idx} onMouseEnter={playHover} {...wrapperProps} style={{ textDecoration: 'none' }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.625rem 0.875rem',
                            background: 'rgba(13, 27, 42, 0.4)',
                            borderRadius: '8px',
                            cursor: topic.link ? 'pointer' : 'default',
                            opacity: topic.link ? 1 : 0.5,
                            transition: 'all 0.2s ease',
                            border: '1px solid transparent'
                          }}
                          onMouseEnter={(e) => {
                            if (topic.link) {
                              e.currentTarget.style.background = 'rgba(28, 45, 60, 0.6)'
                              e.currentTarget.style.borderColor = `${topic.color}40`
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(13, 27, 42, 0.4)'
                            e.currentTarget.style.borderColor = 'transparent'
                          }}
                        >
                          <Image
                            src={topic.icon}
                            alt={topic.title}
                            width={20}
                            height={20}
                            style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
                            onError={(e) => {
                              console.error(`Failed to load icon for ${topic.title}:`, topic.icon)
                              e.currentTarget.src = '/Icons/blender_icon_current_file.svg'
                            }}
                          />
                          <span style={{
                            fontSize: '0.9rem',
                            color: '#fff',
                            fontWeight: '400'
                          }}>
                            {topic.title}
                          </span>
                          {!topic.link && (
                            <span style={{
                              marginLeft: 'auto',
                              fontSize: '0.75rem',
                              color: '#7a8c9e',
                              fontStyle: 'italic'
                            }}>
                              Soon
                            </span>
                          )}
                        </div>
                      </TopicWrapper>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Invisible trigger zone */}
      <div
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '10px',
          height: '100vh',
          zIndex: 9998,
          cursor: 'pointer'
        }}
      />

      {/* Hover Tab */}
      <div
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '80px',
          background: 'rgba(21, 35, 47, 0.95)',
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        className="sidebar-tab"
      >
        <span style={{
          fontSize: '1.5rem',
          color: '#fff',
          transform: isSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ◀
        </span>
      </div>

      <style jsx>{`
        .documentation-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .documentation-sidebar::-webkit-scrollbar-track {
          background: rgba(13, 27, 42, 0.4);
        }

        .documentation-sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .documentation-sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .sidebar-tab:hover {
          background: rgba(28, 45, 60, 0.95);
        }

        @media (max-width: 768px) {
          .sidebar-tab {
            display: none;
          }
        }
      `}</style>
    </>
  )
}