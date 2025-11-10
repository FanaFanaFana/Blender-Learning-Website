// FILE: components/builder/DraftManager.jsx
'use client'

import { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client'
import { FileText, CheckCircle, Clock, Trash2, ExternalLink } from 'lucide-react'

export default function DraftManager({ onSelectDraft }) {
  const [drafts, setDrafts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDrafts()
  }, [])

  const loadDrafts = async () => {
    try {
      const query = `
        *[_type == "lesson"] | order(_updatedAt desc) {
          _id,
          _updatedAt,
          "id": lessonId.current,
          "gradientText": heroConfig.gradientText,
          "themeColor": themeColor,
          "isDraft": _id in path("drafts.**"),
          "hasPublished": defined(*[_type == "lesson" && lessonId.current == ^.lessonId.current && !(_id in path("drafts.**"))][0])
        }
      `
      
      const allLessons = await client.fetch(query)
      
      // Separate into drafts and published
      const draftsList = allLessons.filter(l => l.isDraft)
      const publishedList = allLessons.filter(l => !l.isDraft)
      
      // Match drafts with published versions
      const enrichedDrafts = draftsList.map(draft => {
        const published = publishedList.find(p => p.id === draft.id)
        return {
          ...draft,
          hasPublished: !!published,
          publishedUpdated: published?._updatedAt
        }
      })
      
      setDrafts(enrichedDrafts)
      setLoading(false)
    } catch (err) {
      console.error('Failed to load drafts:', err)
      setLoading(false)
    }
  }

  const deleteDraft = async (draftId) => {
    if (!confirm('Delete this draft? This cannot be undone.')) return
    
    try {
      await client.delete(draftId)
      setDrafts(drafts.filter(d => d._id !== draftId))
      alert('✅ Draft deleted')
    } catch (err) {
      console.error('Failed to delete draft:', err)
      alert('❌ Failed to delete draft')
    }
  }

  const openInStudio = (lessonId) => {
    const studioUrl = `${window.location.origin}/studio/structure/lesson;${lessonId.replace('drafts.', '')}`
    window.open(studioUrl, '_blank')
  }

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div className="spinner" />
        <p style={{ marginTop: '1rem', color: '#7a8c9e' }}>Loading drafts...</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '600', 
        marginBottom: '1.5rem',
        color: '#e0e7ef'
      }}>
        📝 Draft Lessons
      </h2>

      {drafts.length === 0 ? (
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '3rem',
          textAlign: 'center',
          color: '#7a8c9e'
        }}>
          <FileText size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
          <p>No drafts found</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Create a new lesson or edit an existing one to create drafts
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '1rem'
        }}>
          {drafts.map(draft => (
            <div
              key={draft._id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${draft.themeColor || '#3b82f6'}40`,
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: draft.themeColor || '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                {draft.gradientText?.charAt(0) || '?'}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '600',
                    color: '#e0e7ef',
                    margin: 0
                  }}>
                    {draft.gradientText || 'Untitled Lesson'}
                  </h3>
                  
                  {draft.hasPublished ? (
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#10b981',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      <CheckCircle size={12} />
                      Has Published Version
                    </span>
                  ) : (
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'rgba(234, 179, 8, 0.2)',
                      color: '#eab308',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      <Clock size={12} />
                      Unpublished
                    </span>
                  )}
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '1rem',
                  fontSize: '0.85rem',
                  color: '#7a8c9e',
                  marginTop: '0.25rem'
                }}>
                  <span>ID: {draft.id}</span>
                  <span>Updated: {new Date(draft._updatedAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => onSelectDraft(draft.id)}
                  style={{
                    background: draft.themeColor || '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => openInStudio(draft._id)}
                  title="Open in Sanity Studio"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#b0c4d4',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <ExternalLink size={16} />
                </button>

                <button
                  onClick={() => deleteDraft(draft._id)}
                  title="Delete draft"
                  style={{
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#ef4444',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    padding: '0.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: #3b82f6;
          border-radius: 50%;
          margin: 0 auto;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}