"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { playHover } from '@/app/utils/sounds'
import { getCategoryLabel } from '@/app/config/categories'
import './styles/Sidebar.css'

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [allTopics, setAllTopics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLessons() {
      try {
        const response = await fetch('/api/lessons')
        if (!response.ok) throw new Error('Failed to fetch')
        const lessons = await response.json()

        console.log('📚 Fetched lessons with icons:', lessons)

        const transformedTopics = lessons.map(lesson => {
          const displayTitle = lesson.title && lesson.gradientText
            ? `${lesson.title} ${lesson.gradientText}`
            : lesson.gradientText || lesson.title || 'Untitled'
          const categoryKey = lesson.lessonCategory || 'Lesson'
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

  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = []
    }
    acc[topic.category].push(topic)
    return acc
  }, {})

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
          className="sidebar-overlay"
          onClick={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
          onTouchEnd={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
        />
      )}

      {/* Invisible buffer zone */}
      {isSidebarOpen && (
        <div
          className="sidebar-buffer"
          onMouseEnter={handleMouseEnter}
        />
      )}

      {/* Sidebar */}
      <div
        className={`documentation-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className={`sidebar-search ${isSidebarOpen ? 'visible' : 'hidden'}`}>
          <input
            onMouseEnter={playHover}
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className={`sidebar-loading ${isSidebarOpen ? 'visible' : 'hidden'}`}>
            Loading lessons...
          </div>
        )}

        {/* Topics List */}
        {!loading && (
          <div className={`sidebar-topics ${isSidebarOpen ? 'visible' : 'hidden'}`}>
            {Object.entries(groupedTopics).map(([category, topics]) => (
              <div key={category}>
                <h3
                  className="sidebar-category-header"
                  style={{ color: topics[0].color }}
                >
                  {category}
                </h3>
                <div className="sidebar-category-topics">
                  {topics.map((topic, idx) => {
                    const TopicWrapper = topic.link ? Link : 'div'
                    const wrapperProps = topic.link ? { href: topic.link } : {}

                    return (
                      <TopicWrapper
                        key={idx}
                        onMouseEnter={playHover}
                        {...wrapperProps}
                        className={`sidebar-topic-item ${topic.link ? 'clickable' : 'disabled'}`}
                        onMouseOver={(e) => {
                          if (topic.link) {
                            e.currentTarget.style.borderColor = `${topic.color}40`
                          }
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = 'transparent'
                        }}
                      >
                        <Image
                          src={topic.icon}
                          alt={topic.title}
                          width={20}
                          height={20}
                          className="sidebar-topic-icon"
                          onError={(e) => {
                            console.error(`Failed to load icon for ${topic.title}:`, topic.icon)
                            e.currentTarget.src = '/Icons/blender_icon_current_file.svg'
                          }}
                        />
                        <span className="sidebar-topic-title">
                          {topic.title}
                        </span>
                        {!topic.link && (
                          <span className="sidebar-topic-soon">
                            Soon
                          </span>
                        )}
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
        className="sidebar-trigger"
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
      />

      {/* Hover Tab */}
      <div
        className="sidebar-tab"
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
      >
        <span className={`sidebar-tab-icon ${isSidebarOpen ? 'rotated' : ''}`}>
          ◀
        </span>
      </div>
    </>
  )
}