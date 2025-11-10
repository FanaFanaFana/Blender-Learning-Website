// FILE: components/builder/DetailModal.jsx
'use client'

import { useState, useRef } from 'react'
import { client } from '@/sanity/lib/client'
import MediaUploader from './MediaUploader'

export default function DetailModal({ item, onClose, onSave, themeColor }) {
  const [editedItem, setEditedItem] = useState(JSON.parse(JSON.stringify(item)))
  const [currentPage, setCurrentPage] = useState(0)
  
  // ✅ Track all uploaded assets during this session
  const uploadedAssetsRef = useRef([])

  const updateItem = (path, value) => {
    setEditedItem(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      obj[keys[keys.length - 1]] = value
      return clone
    })
  }

  const addTip = (pageIndex) => {
    setEditedItem(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      if (!clone.detailedInfo.pages[pageIndex].tips) {
        clone.detailedInfo.pages[pageIndex].tips = []
      }
      clone.detailedInfo.pages[pageIndex].tips.push('New tip')
      return clone
    })
  }

  const removeTip = (pageIndex, tipIndex) => {
    setEditedItem(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      clone.detailedInfo.pages[pageIndex].tips.splice(tipIndex, 1)
      return clone
    })
  }

  const addPage = () => {
    setEditedItem(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      if (!clone.detailedInfo.pages) clone.detailedInfo.pages = []
      clone.detailedInfo.pages.push({
        title: 'New Page',
        content: 'Page content here...',
        mediaType: 'url',
        image: '',
        tips: []
      })
      return clone
    })
  }

  const removePage = (index) => {
    if (editedItem.detailedInfo.pages.length <= 1) {
      alert('Must have at least one page!')
      return
    }
    setEditedItem(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      clone.detailedInfo.pages.splice(index, 1)
      return clone
    })
    if (currentPage >= editedItem.detailedInfo.pages.length - 1) {
      setCurrentPage(Math.max(0, currentPage - 1))
    }
  }

  // ✅ Track uploaded assets
  const handleUploadComplete = (assetInfo) => {
    console.log('📌 Tracking uploaded asset:', assetInfo)
    uploadedAssetsRef.current.push(assetInfo)
  }

  // ✅ Cleanup orphaned uploads if user cancels
  const handleCancel = async () => {
    if (uploadedAssetsRef.current.length > 0) {
      const shouldCleanup = confirm(
        `You uploaded ${uploadedAssetsRef.current.length} file(s) but didn't save. Delete them?`
      )
      
      if (shouldCleanup) {
        console.log('🗑️ Cleaning up orphaned uploads...')
        for (const asset of uploadedAssetsRef.current) {
          try {
            await client.delete(asset.assetId)
            console.log('✅ Deleted:', asset.assetId)
          } catch (err) {
            console.error('❌ Failed to delete:', asset.assetId, err)
          }
        }
      }
    }
    onClose()
  }

  // ✅ Save and clear the upload tracker
  const handleSave = () => {
    console.log('💾 Saving with', uploadedAssetsRef.current.length, 'tracked uploads')
    // Clear tracker since we're keeping these assets
    uploadedAssetsRef.current = []
    onSave(editedItem)
  }

  const page = editedItem.detailedInfo?.pages?.[currentPage]
  const totalPages = editedItem.detailedInfo?.pages?.length || 0

  const getCurrentMediaUrl = () => {
    if (!page) return ''
    if (page.mediaType === 'upload') {
      return page.uploadedMediaUrl || page.finalMediaUrl || ''
    }
    return page.image || page.finalMediaUrl || ''
  }

  const handleMediaUrlChange = (url) => {
    const isUploadedUrl = url.includes('cdn.sanity.io')
    
    if (isUploadedUrl) {
      updateItem(`detailedInfo.pages.${currentPage}.uploadedMediaUrl`, url)
      updateItem(`detailedInfo.pages.${currentPage}.mediaType`, 'upload')
      updateItem(`detailedInfo.pages.${currentPage}.image`, '')
    } else {
      updateItem(`detailedInfo.pages.${currentPage}.image`, url)
      updateItem(`detailedInfo.pages.${currentPage}.mediaType`, 'url')
      updateItem(`detailedInfo.pages.${currentPage}.uploadedMediaUrl`, '')
    }
    
    updateItem(`detailedInfo.pages.${currentPage}.finalMediaUrl`, url)
  }

  return (
    <div onClick={handleCancel} className="detail-modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="detail-modal">
        {/* Header */}
        <div className="detail-modal-header">
          <div>
            <input
              value={editedItem.name || ''}
              onChange={(e) => updateItem('name', e.target.value)}
              className="detail-modal-name-input"
            />
            <textarea
              value={editedItem.description || ''}
              onChange={(e) => updateItem('description', e.target.value)}
              className="detail-modal-desc-input"
            />
          </div>
          <button onClick={handleCancel} className="detail-modal-close">
            ✕
          </button>
        </div>

        {/* Show upload tracker */}
        {uploadedAssetsRef.current.length > 0 && (
          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#60a5fa',
            padding: '0.75rem',
            margin: '1rem',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            📎 {uploadedAssetsRef.current.length} file(s) uploaded. Don't forget to save!
          </div>
        )}

        {/* Content */}
        <div className="detail-modal-content">
          {/* Overview */}
          {currentPage === 0 && (
            <div className="detail-modal-overview">
              <h3 style={{ color: themeColor }}>Overview</h3>
              <textarea
                value={editedItem.detailedInfo?.overview || ''}
                onChange={(e) => updateItem('detailedInfo.overview', e.target.value)}
                placeholder="Overview text..."
                className="detail-modal-textarea"
              />
            </div>
          )}

          {/* Page Content */}
          {page && (
            <>
              <div className="detail-modal-page-header">
                <input
                  value={page.title || ''}
                  onChange={(e) => updateItem(`detailedInfo.pages.${currentPage}.title`, e.target.value)}
                  className="detail-modal-page-title"
                />
                {totalPages > 1 && (
                  <button
                    onClick={() => removePage(currentPage)}
                    className="detail-modal-delete-page"
                  >
                    Delete Page
                  </button>
                )}
              </div>

              {/* Media Uploader with tracking */}
              <MediaUploader
                currentUrl={getCurrentMediaUrl()}
                onUrlChange={handleMediaUrlChange}
                onUploadComplete={handleUploadComplete}
                editMode={true}
              />

              {/* Content */}
              <textarea
                value={page.content || ''}
                onChange={(e) => updateItem(`detailedInfo.pages.${currentPage}.content`, e.target.value)}
                placeholder="Page content..."
                className="detail-modal-content-textarea"
              />

              {/* Tips */}
              <div className="detail-modal-tips">
                <div className="detail-modal-tips-header">
                  <h4 style={{ color: themeColor }}>Pro Tips</h4>
                  <button
                    onClick={() => addTip(currentPage)}
                    className="detail-modal-add-tip"
                  >
                    + Add Tip
                  </button>
                </div>
                {(page.tips || []).map((tip, i) => (
                  <div key={i} className="detail-modal-tip">
                    <span style={{ color: themeColor }}>•</span>
                    <input
                      value={tip}
                      onChange={(e) => updateItem(`detailedInfo.pages.${currentPage}.tips.${i}`, e.target.value)}
                      className="detail-modal-tip-input"
                    />
                    <button
                      onClick={() => removeTip(currentPage, i)}
                      className="detail-modal-remove-tip"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="detail-modal-footer">
          <div className="detail-modal-nav">
            <button
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="detail-modal-prev"
              style={{
                background: currentPage === 0 ? 'rgba(255,255,255,0.03)' : themeColor
              }}
            >
              ← Prev
            </button>

            <button onClick={addPage} className="detail-modal-add-page">
              + Page
            </button>

            <button
              disabled={currentPage === totalPages - 1}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="detail-modal-next"
              style={{
                background: currentPage === totalPages - 1 ? 'rgba(255,255,255,0.03)' : themeColor
              }}
            >
              Next →
            </button>
          </div>

          <button onClick={handleSave} className="detail-modal-save">
            ✓ Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}