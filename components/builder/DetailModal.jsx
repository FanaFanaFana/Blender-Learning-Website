// FILE: components/builder/DetailModal.jsx
'use client'

import { useState } from 'react'
import MediaUploader from './MediaUploader'

export default function DetailModal({ item, onClose, onSave, themeColor }) {
  const [editedItem, setEditedItem] = useState(JSON.parse(JSON.stringify(item)))
  const [currentPage, setCurrentPage] = useState(0)
  const [stagedFiles, setStagedFiles] = useState([]) // Track files per page

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

  // ✅ Handle file staging
  const handleFileStaged = (file) => {
    console.log(`📁 Staging file for page ${currentPage}:`, file.name)
    setStagedFiles(prev => {
      const updated = [...prev]
      updated[currentPage] = file
      return updated
    })
  }

  const handleSave = () => {
    // ✅ Attach staged files to the item for parent to handle
    const itemWithFiles = {
      ...editedItem,
      _stagedFiles: stagedFiles
        .map((file, pageIndex) => file ? { pageIndex, file } : null)
        .filter(Boolean)
    }
    
    console.log('💾 Saving with staged files:', itemWithFiles._stagedFiles?.length || 0)
    onSave(itemWithFiles)
  }

  const page = editedItem.detailedInfo?.pages?.[currentPage]
  const totalPages = editedItem.detailedInfo?.pages?.length || 0

  const getCurrentMediaUrl = () => {
    if (!page) return ''
    
    // Check if there's a staged file for this page (blob URL)
    if (page.image?.startsWith('blob:')) {
      return page.image
    }
    
    // Otherwise use the stored URL
    if (page.mediaType === 'upload') {
      return page.uploadedMediaUrl || page.finalMediaUrl || ''
    }
    return page.image || page.finalMediaUrl || ''
  }

  const handleMediaUrlChange = (url) => {
    // If it's a blob URL, it means a file was staged
    if (url.startsWith('blob:')) {
      updateItem(`detailedInfo.pages.${currentPage}.image`, url)
      updateItem(`detailedInfo.pages.${currentPage}.mediaType`, 'upload')
    }
    // If it's a Sanity CDN URL (from existing data)
    else if (url.includes('cdn.sanity.io')) {
      updateItem(`detailedInfo.pages.${currentPage}.uploadedMediaUrl`, url)
      updateItem(`detailedInfo.pages.${currentPage}.mediaType`, 'upload')
      updateItem(`detailedInfo.pages.${currentPage}.image`, '')
    }
    // Regular URL/path
    else {
      updateItem(`detailedInfo.pages.${currentPage}.image`, url)
      updateItem(`detailedInfo.pages.${currentPage}.mediaType`, 'url')
      updateItem(`detailedInfo.pages.${currentPage}.uploadedMediaUrl`, '')
    }
    
    updateItem(`detailedInfo.pages.${currentPage}.finalMediaUrl`, url)
  }

  return (
    <div onClick={onClose} className="detail-modal-overlay">
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
          <button onClick={onClose} className="detail-modal-close">
            ✕
          </button>
        </div>

        {/* Show staged files indicator */}
        {stagedFiles.some(f => f) && (
          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#60a5fa',
            padding: '0.75rem',
            margin: '1rem',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            📎 {stagedFiles.filter(f => f).length} file(s) staged. Click "Save Changes" to confirm.
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

              {/* Media Uploader with file staging */}
              <MediaUploader
                currentUrl={getCurrentMediaUrl()}
                onUrlChange={handleMediaUrlChange}
                onFileStaged={handleFileStaged}
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