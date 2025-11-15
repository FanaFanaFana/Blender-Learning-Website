// FILE: components/LessonCard.jsx
'use client'

import { useRouter } from 'next/navigation'
import { preloadLesson } from '@/lib/lessonLoader'
import { playHover } from '@/app/utils/sounds'

export default function LessonCard({ lesson }) {
  const router = useRouter()

  const handleMouseEnter = () => {
    playHover()
    // Preload lesson data in background when user hovers
    preloadLesson(lesson.id)
  }

  const handleClick = () => {
    router.push(`/lessons/${lesson.id}`)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{
        background: 'rgba(21, 35, 47, 0.6)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.borderColor = lesson.color
        e.currentTarget.style.boxShadow = `0 12px 32px ${lesson.color}30`
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Gradient accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: lesson.gradient || lesson.color
      }} />

      {/* Icon */}
      {lesson.icon && (
        <div style={{
          width: '64px',
          height: '64px',
          background: `${lesson.color}20`,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          border: `1px solid ${lesson.color}30`
        }}>
          <img 
            src={lesson.icon} 
            alt=""
            width={36}
            height={36}
            style={{ filter: `drop-shadow(0 0 8px ${lesson.color})` }}
          />
        </div>
      )}

      {/* Title */}
      <h3 style={{
        fontSize: '1.5rem',
        marginBottom: '0.75rem',
        color: '#fff'
      }}>
       {lesson.fullTitle}
      </h3>

      {/* Description */}
      <p style={{
        color: '#8fa9bd',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>
        {lesson.description}
      </p>

      {/* Metadata */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.5rem'
      }}>
        <span style={{
          fontSize: '0.9rem',
          color: '#7a8c9e',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          ⏱️ {lesson.duration}
        </span>
        <span style={{
          fontSize: '0.9rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '12px',
          background: `${lesson.color}20`,
          color: lesson.color
        }}>
          {lesson.level}
        </span>
      </div>

      {/* Progress bar (if lesson has progress) */}
      {lesson.progress !== undefined && (
        <div style={{
          marginBottom: '1rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontSize: '0.85rem',
            color: '#7a8c9e'
          }}>
            <span>Progress</span>
            <span>{lesson.progress}%</span>
          </div>
          <div style={{
            height: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${lesson.progress}%`,
              background: lesson.color,
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      )}

      {/* Action button */}
      <button
        style={{
          width: '100%',
          background: lesson.color,
          border: 'none',
          padding: '0.875rem',
          borderRadius: '10px',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)'
          e.stopPropagation()
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {lesson.progress > 0 ? 'Continue Learning →' : 'Start Lesson →'}
      </button>
    </div>
  )
}

