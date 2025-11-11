// FILE: components/builder/MediaUploader.jsx
'use client'

import { useState } from 'react'
import { Upload, X, AlertCircle, File } from 'lucide-react'

export default function MediaUploader({ 
  currentUrl, 
  onUrlChange, 
  editMode,
  onFileStaged, // NEW: Callback when user selects a file (doesn't upload yet)
}) {
  const [stagedFile, setStagedFile] = useState(null)
  const [error, setError] = useState(null)

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!validTypes.includes(file.type)) {
      setError('Invalid file type. Please upload MP4, WebM, or image files.')
      return
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('File too large. Maximum size is 5MB.')
      return
    }

    setError(null)
    
    // Create a preview URL
    const previewUrl = URL.createObjectURL(file)
    setStagedFile({ file, previewUrl })
    
    // Pass the file object to parent (NOT uploaded yet)
    if (onFileStaged) {
      onFileStaged(file, previewUrl)
    }
    
    // Set the preview URL in the lesson data
    onUrlChange(previewUrl)
  }

  const clearMedia = () => {
    if (stagedFile?.previewUrl) {
      URL.revokeObjectURL(stagedFile.previewUrl)
    }
    setStagedFile(null)
    onUrlChange('')
    setError(null)
  }

  if (!editMode) {
    if (!currentUrl) return null
    
    return (
      <div className="media-preview">
        {currentUrl.match(/\.(mp4|webm|mov)$/i) || currentUrl.startsWith('blob:') ? (
          <video src={currentUrl} controls style={{ maxWidth: '100%', borderRadius: '8px' }} />
        ) : (
          <img src={currentUrl} alt="Media" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        )}
      </div>
    )
  }

  return (
    <div className="media-uploader">
      {stagedFile && (
        <div className="staged-file-notice">
          <File size={16} />
          <span>📁 Staged: {stagedFile.file.name} (will upload when you commit)</span>
        </div>
      )}

      {currentUrl ? (
        <div className="media-uploader-preview">
          <div className="media-preview-container">
            {currentUrl.match(/\.(mp4|webm|mov)$/i) || currentUrl.startsWith('blob:') ? (
              <video src={currentUrl} controls style={{ maxWidth: '100%', borderRadius: '8px' }} />
            ) : currentUrl.startsWith('http') || currentUrl.startsWith('/') || currentUrl.startsWith('blob:') ? (
              <img src={currentUrl} alt="Media" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            ) : (
              <div style={{ 
                padding: '2rem', 
                textAlign: 'center', 
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                color: '#7a8c9e'
              }}>
                Invalid media URL
              </div>
            )}
          </div>
          
          <div className="media-uploader-actions">
            {!stagedFile && (
              <input
                type="text"
                value={currentUrl}
                onChange={(e) => onUrlChange(e.target.value)}
                placeholder="Or paste URL here..."
                className="media-url-input"
              />
            )}
            <button 
              onClick={clearMedia} 
              className="btn-clear-media"
              type="button"
            >
              <X size={16} /> Clear
            </button>
          </div>
        </div>
      ) : (
        <>
          <label className="media-upload-label">
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime,image/jpeg,image/png,image/gif,image/webp"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            
            <div className="media-upload-box">
              <Upload size={32} />
              <p><strong>Click to select file</strong> or drag and drop</p>
              <p style={{ fontSize: '0.85rem', color: '#7a8c9e' }}>
                MP4, WebM, MOV, or images (max 50MB)
              </p>
              <p style={{ fontSize: '0.8rem', color: '#60a5fa', marginTop: '0.5rem' }}>
                💡 Files won't upload until you click "Commit to Sanity"
              </p>
            </div>
          </label>

          <div className="media-url-option">
            <span>or</span>
            <input
              type="text"
              value={currentUrl || ''}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="Paste URL here..."
              className="media-url-input"
            />
          </div>
        </>
      )}

      {error && (
        <div className="media-error">
          ⚠️ {error}
        </div>
      )}

      <style jsx>{`
        .media-uploader {
          margin: 1rem 0;
        }

        .staged-file-notice {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #60a5fa;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .media-upload-label {
          cursor: pointer;
          display: block;
        }

        .media-upload-box {
          border: 2px dashed rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.02);
        }

        .media-upload-box:hover {
          border-color: rgba(59, 130, 246, 0.5);
          background: rgba(59, 130, 246, 0.05);
        }

        .media-upload-box p {
          margin: 0.5rem 0;
          color: #b0c4d4;
        }

        .media-url-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .media-url-option span {
          color: #7a8c9e;
          font-size: 0.9rem;
        }

        .media-url-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.75rem;
          border-radius: 8px;
          color: white;
          font-size: 0.95rem;
        }

        .media-url-input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .media-uploader-preview {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .media-preview-container {
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }

        .media-uploader-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .btn-clear-media {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-clear-media:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        .media-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 0.75rem;
          border-radius: 8px;
          margin-top: 0.5rem;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  )
}