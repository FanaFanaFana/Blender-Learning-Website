// FILE: components/builder/LessonPicker.jsx
'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function LessonPicker({ lessons, onSelect }) {
  const [search, setSearch] = useState('')

  const filtered = lessons.filter(l =>
    l.heroConfig?.gradientText?.toLowerCase().includes(search.toLowerCase()) ||
    l.lessonId?.current?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="lesson-picker">
      <div className="lesson-picker-search">
        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#7a8c9e' }} />
        <input
          type="text"
          placeholder="Search lessons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          style={{ paddingLeft: '2.5rem' }}
        />
      </div>

      <div className="lesson-picker-grid">
        {filtered.map((lesson, i) => (
          <div
            key={i}
            onClick={() => onSelect(lesson.lessonId?.current)}
            className="lesson-picker-card"
            style={{ '--theme-color': lesson.themeColor || '#3b82f6' }}
          >
            <h3 style={{ color: lesson.themeColor || '#3b82f6' }}>
              {lesson.heroConfig?.gradientText || 'Untitled'}
            </h3>
            <p className="lesson-picker-desc">
              {lesson.heroConfig?.subtitle || 'No description'}
            </p>
            <div className="lesson-picker-meta">
              <span>ID: {lesson.lessonId?.current}</span>
              <span 
                className="lesson-picker-category"
                style={{ 
                  background: `${lesson.themeColor || '#3b82f6'}20`,
                  color: lesson.themeColor || '#3b82f6'
                }}
              >
                {lesson.category || 'Unknown'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="lesson-picker-empty">
          <p>No lessons found matching "{search}"</p>
        </div>
      )}
    </div>
  )
}