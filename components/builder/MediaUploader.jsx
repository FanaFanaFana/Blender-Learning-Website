// FILE: components/builder/MediaUploader.jsx
'use client'

import { useState } from 'react'
import { client } from '@/sanity/lib/client'
import { Upload, X, AlertCircle } from 'lucide-react'

export default function MediaUploader({ 
  currentUrl, 
  onUrlChange, 
  editMode,
  onUploadComplete, // Callback to track uploaded asset IDs
}) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!validTypes.includes(file.type)) {
      setError('Invalid file type. Please upload MP4, WebM, or image files.')
      return
    }

    // Validate file size (50MB max)
    if (file.size > 50 * 1024 * 1024) {
      setError('File too large. Maximum size is 50MB.')
      return
    }

    setUploading(true)
    setError(null)

    try {
      console.log('🔄 Starting upload to Sanity...')
      
      // Upload to Sanity
      const asset = await client.assets.upload(
        file.type.startsWith('video/') ? 'file' : 'image',
        file,
        {
          filename: file.name,
          contentType: file.type
        }
      )

      console.log('✅ Upload successful:', asset.url)
      
      // Pass the URL AND asset ID to parent
      onUrlChange(asset.url)
      
      // Track this upload so we can delete it later if needed
      if (onUploadComplete) {
        onUploadComplete({
          assetId: asset._id,
          url: asset.url,
          type: asset._type
        })
      }
      
      alert('✅ Upload successful!')
    } catch (err) {
      console.error('❌ Upload failed:', err)
      
      let errorMessage = 'Upload failed. '
      if (err.message?.includes('token')) {
        errorMessage += 'Missing or invalid Sanity API token.'
      } else if (err.statusCode === 401) {
        errorMessage += 'Authentication failed.'
      } else if (err.statusCode === 403) {
        errorMessage += 'Permission denied.'
      } else {
        errorMessage += err.message || 'Unknown error occurred.'
      }
      
      setError(errorMessage)
    } finally {
      setUploading(false)
    }
  }

  const clearMedia = () => {
    onUrlChange('')
    setError(null)
  }

  if (!editMode) {
    if (!currentUrl) return null
    
    return (
      <div className="media-preview">
        {currentUrl.match(/\.(mp4|webm|mov)$/i) ? (
          <video src={currentUrl} controls style={{ maxWidth: '100%', borderRadius: '8px' }} />
        ) : (
          <img src={currentUrl} alt="Media" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        )}
      </div>
    )
  }

  const hasToken = client.config().token
  
  return (
    <div className="media-uploader">
      {!hasToken && (
        <div className="media-warning">
          <AlertCircle size={16} />
          <div>
            <strong>⚠️ Sanity token not configured</strong>
            <p>Add <code>NEXT_PUBLIC_SANITY_TOKEN</code> to your <code>.env.local</code></p>
          </div>
        </div>
      )}

      {currentUrl ? (
        <div className="media-uploader-preview">
          <div className="media-preview-container">
            {currentUrl.match(/\.(mp4|webm|mov)$/i) ? (
              <video src={currentUrl} controls style={{ maxWidth: '100%', borderRadius: '8px' }} />
            ) : currentUrl.startsWith('http') || currentUrl.startsWith('/') ? (
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
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => onUrlChange(e.target.value)}
              placeholder="Or paste URL here..."
              className="media-url-input"
            />
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
          <label className={`media-upload-label ${!hasToken ? 'disabled' : ''}`}>
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime,image/jpeg,image/png,image/gif,image/webp"
              onChange={handleFileUpload}
              disabled={uploading || !hasToken}
              style={{ display: 'none' }}
            />
            
            <div className="media-upload-box">
              {uploading ? (
                <>
                  <div className="spinner" />
                  <p>Uploading to Sanity CDN...</p>
                </>
              ) : (
                <>
                  <Upload size={32} />
                  <p><strong>Click to upload</strong> or drag and drop</p>
                  <p style={{ fontSize: '0.85rem', color: '#7a8c9e' }}>
                    MP4, WebM, MOV, or images (max 50MB)
                  </p>
                </>
              )}
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

        .media-upload-label {
          cursor: pointer;
          display: block;
        }

        .media-upload-label.disabled {
          opacity: 0.5;
          cursor: not-allowed;
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

        .media-error, .media-warning {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 0.75rem;
          border-radius: 8px;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .media-warning {
          background: rgba(234, 179, 8, 0.1);
          border-color: rgba(234, 179, 8, 0.3);
          color: #eab308;
        }

        .media-warning code {
          background: rgba(0, 0, 0, 0.3);
          padding: 0.125rem 0.375rem;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: #3b82f6;
          border-radius: 50%;
          margin: 0 auto 0.5rem;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}