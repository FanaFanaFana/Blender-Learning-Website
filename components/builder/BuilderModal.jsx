// FILE: components/builder/BuilderModal.jsx
'use client'

import { useState, useEffect } from 'react'
import { X, Wrench } from 'lucide-react'
import LessonBuilder from './LessonBuilder'
import LessonPicker from './LessonPicker'
import './builder.css'

// Template lesson for new projects
function getTemplateLesson() {
  return {
    lessonId: { current: 'new-lesson' },
    category: 'Lesson',
    themeColor: '#3b82f6',
    lessonIcon: '/Icons/blender_icon_current_file.svg',
    heroConfig: {
      title: 'Working with',
      gradientText: 'New Topic',
      subtitle: 'Learn the fundamentals',
      gradientColors: 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)'
    },
    enabledTabs: [
      { tabId: 'overview', customLabel: 'Overview' },
      { tabId: 'content', customLabel: 'Content' }
    ],
    overviewTitle: 'What You\'ll Learn',
    overviewDescription: 'This lesson covers the fundamentals',
    overviewCards: [
      { icon: '/Icons/blender_icon_current_file.svg', title: 'Card Title', content: 'Card content here' }
    ],
    contentTitle: 'Main Content',
    contentDescription: 'Explore the topics below',
    categories: [
      {
        name: 'Getting Started',
        icon: '/Icons/blender_icon_current_file.svg',
        color: '#3b82f6',
        items: [
          {
            name: 'First Topic',
            description: 'Learn the basics',
            icon: '/Icons/blender_icon_current_file.svg',
            detailedInfo: {
              overview: 'Overview text here',
              pages: [
                {
                  title: 'Introduction',
                  content: 'Content here...',
                  mediaType: 'url',
                  image: '',
                  tips: []
                }
              ]
            }
          }
        ]
      }
    ],
    shortcuts: [
      {
        category: 'Basic',
        items: [
          { action: 'Select All', key: 'A' }
        ]
      }
    ],
    practiceTitle: 'Practice Projects',
    practiceDescription: 'Try these exercises',
    practiceProjects: [
      {
        title: 'First Project',
        desc: 'Complete this exercise',
        duration: '30 min',
        difficulty: 'Beginner',
        skills: []
      }
    ]
  }
}

export default function BuilderModal({ currentLesson, onClose }) {
  const [selectedLesson, setSelectedLesson] = useState(currentLesson)
  const [availableLessons, setAvailableLessons] = useState([])
  const [loading, setLoading] = useState(!currentLesson)
  const [showPicker, setShowPicker] = useState(!currentLesson)

  useEffect(() => {
    if (!currentLesson) {
      fetch('/api/lessons')
        .then(res => res.json())
        .then(lessons => {
          console.log('📚 Loaded lessons from API:', lessons)
          setAvailableLessons(lessons)
          setLoading(false)
          
          if (!lessons || lessons.length === 0) {
            const template = getTemplateLesson()
            console.log('🎨 Using template lesson with lessonIcon:', template.lessonIcon)
            setSelectedLesson(template)
            setShowPicker(false)
          }
        })
        .catch(err => {
          console.error('Failed to load lessons:', err)
          setLoading(false)
          const template = getTemplateLesson()
          console.log('🎨 Using template lesson (error fallback) with lessonIcon:', template.lessonIcon)
          setSelectedLesson(template)
          setShowPicker(false)
        })
    } else {
      console.log('📖 Loaded existing lesson with lessonIcon:', currentLesson.lessonIcon)
    }
  }, [currentLesson])

  const loadLesson = async (lessonId) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/lessons/${lessonId}`)
      const data = await res.json()
      console.log('📖 Loaded lesson:', lessonId, 'with lessonIcon:', data.lessonIcon)
      setSelectedLesson(data)
      setShowPicker(false)
      setLoading(false)
    } catch (err) {
      console.error('Failed to load lesson:', err)
      alert('Failed to load lesson')
      setLoading(false)
    }
  }

  const handleChangeLesson = () => {
    if (!availableLessons.length) {
      setLoading(true)
      fetch('/api/lessons')
        .then(res => res.json())
        .then(lessons => {
          setAvailableLessons(lessons)
          setLoading(false)
          setShowPicker(true)
        })
        .catch(err => {
          console.error('Failed to load lessons:', err)
          setLoading(false)
        })
    } else {
      setShowPicker(true)
    }
  }

  return (
    <div className="builder-modal-overlay">
      <div className="builder-page-wrapper">
        {/* Unified Top Bar with everything */}
        <div className="builder-unified-header">
          <div className="builder-header-left">
            <div className="builder-modal-title">
              <Wrench size={20} />
              <span>Lesson Builder</span>
            </div>
            {selectedLesson && !showPicker && (
              <span className="builder-lesson-badge">
                {selectedLesson.heroConfig?.gradientText || 'Untitled'}
              </span>
            )}
          </div>

          <div className="builder-header-right">
            {selectedLesson && !showPicker && (
              <button onClick={handleChangeLesson} className="btn-change-lesson">
                Change Lesson
              </button>
            )}
            <button onClick={onClose} className="btn-close-builder">
              <X size={16} /> Close
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="builder-modal-content">
          {loading ? (
            <div className="builder-loading">
              <div className="spinner" />
              <p>Loading...</p>
            </div>
          ) : showPicker ? (
            <LessonPicker
              lessons={availableLessons}
              onSelect={loadLesson}
            />
          ) : selectedLesson ? (
            <LessonBuilder 
              lesson={selectedLesson}
              onClose={onClose}
            />
          ) : (
            <div className="builder-empty">
              <p>No lesson selected</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}