// FILE: app/lessons/[lessonId]/page.jsx
'use client'

import { useState, useEffect } from 'react'
import { loadLessonData } from '@/app/lib/lessonLoader'
import LessonTemplate from '@/components/LessonTemplate'
import Header from '@/components/Header'

function LessonLoadingSkeleton() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'rgb(27, 40, 56)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#fff'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid rgba(255, 255, 255, 0.2)',
          borderTopColor: '#fff',
          borderRadius: '50%',
          margin: '0 auto 1rem',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ fontSize: '1.2rem' }}>Loading lesson...</p>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default function LessonPage({ params }) {
  const [lessonData, setLessonData] = useState(null)
  const [error, setError] = useState(null)
  const [lessonId, setLessonId] = useState(null)

  // Unwrap params Promise (Next.js 15+)
  useEffect(() => {
    const unwrapParams = async () => {
      const unwrappedParams = await params
      setLessonId(unwrappedParams.lessonId)
    }
    unwrapParams()
  }, [params])

  // Load lesson data when lessonId is available
  useEffect(() => {
    if (!lessonId) return
    
    loadLessonData(lessonId)
      .then(setLessonData)
      .catch(err => {
        console.error('Failed to load lesson:', err)
        setError('Failed to load lesson content')
      })
  }, [lessonId])

  if (error) {
    return (
      <div className="page-wrapper">
        <Header />
        <main>
          <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>⚠️</div>
            <h1 style={{
              color: '#ef4444',
              fontSize: '2rem',
              marginBottom: '1rem'
            }}>
              Oops! Something went wrong
            </h1>
            <p style={{
              color: '#8fa9bd',
              fontSize: '1.2rem',
              marginBottom: '2rem'
            }}>
              {error}
            </p>
            <button
              onClick={() => window.location.href = '/learn'}
              style={{
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              ← Back to Lessons
            </button>
          </div>
        </main>
      </div>
    )
  }

  if (!lessonData) {
    return (
      <div className="page-wrapper">
        <Header />
        <LessonLoadingSkeleton />
      </div>
    )
  }

  // ✅ Wrap everything in page-wrapper, Header goes BEFORE LessonTemplate
  return (
    <div className="page-wrapper">
      <Header lessonData={lessonData} />
      <LessonTemplate lessonData={lessonData} />
    </div>
  )
}