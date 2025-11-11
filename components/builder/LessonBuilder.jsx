// FILE: components/builder/LessonBuilder.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { client } from '@/sanity/lib/client'
import { downloadLesson, copyLesson } from './BuilderUtils'
import { SettingsPanel, HeroSection, TabsSection } from './BuilderSection'
import { OverviewTab, ContentTab, ShortcutsTab, PracticeTab } from './BuilderTabs'
import DetailModal from './DetailModal'
import { Download, Copy, Eye, Edit3, Cloud, AlertCircle } from 'lucide-react'

export default function LessonBuilder({ lesson: initialLesson }) {
  const [lesson, setLesson] = useState(() => ({
    ...initialLesson,
    lessonIcon: initialLesson.lessonIcon || '/Icons/blender_icon_current_file.svg'
  }))

  const [editMode, setEditMode] = useState(true)
  const [showJSON, setShowJSON] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedItem, setSelectedItem] = useState(null)
  const [committing, setCommitting] = useState(false)
  const [commitError, setCommitError] = useState(null)

  const stagedFilesMapRef = useRef(new Map())

  const update = (path, value) => {
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      obj[keys[keys.length - 1]] = value
      return clone
    })
  }

  const add = (path, item) => {
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      const key = keys[keys.length - 1]
      if (!obj[key]) {
        obj[key] = []
      }
      if (!Array.isArray(obj[key])) {
        obj[key] = []
      }
      obj[key].push(JSON.parse(JSON.stringify(item)))
      return clone
    })
  }

  const remove = (path, idx) => {
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      const finalKey = keys[keys.length - 1]
      if (obj[finalKey] && Array.isArray(obj[finalKey])) {
        obj[finalKey].splice(idx, 1)
      }
      return clone
    })
  }

  useEffect(() => {
    if (!lesson.enabledTabs || lesson.enabledTabs.length === 0) {
      const tabs = []
      if (lesson.overviewCards?.length > 0 || lesson.overviewTitle) {
        tabs.push({ tabId: 'overview', customLabel: 'Overview' })
      }
      if (lesson.categories?.length > 0) {
        tabs.push({ tabId: 'content', customLabel: 'Content' })
      }
      if (lesson.shortcuts?.length > 0) {
        tabs.push({ tabId: 'shortcuts', customLabel: 'Shortcuts' })
      }
      if (lesson.practiceProjects?.length > 0) {
        tabs.push({ tabId: 'practice', customLabel: 'Practice' })
      }
      if (tabs.length === 0) {
        tabs.push(
          { tabId: 'overview', customLabel: 'Overview' },
          { tabId: 'content', customLabel: 'Content' },
          { tabId: 'shortcuts', customLabel: 'Shortcuts' },
          { tabId: 'practice', customLabel: 'Practice' }
        )
      }
      setLesson(prev => ({ ...prev, enabledTabs: tabs }))
    }
  }, [])

  useEffect(() => {
    if (lesson.enabledTabs?.[0] && !activeTab) {
      setActiveTab(lesson.enabledTabs[0].tabId)
    }
  }, [lesson.enabledTabs, activeTab])

  const getTabType = (tabId) => {
    return tabId.split('-')[0]
  }

  const activeTabType = getTabType(activeTab)

  const getTabData = (tabId, baseKey, defaultValue = []) => {
    if (!tabId.includes('-')) {
      const data = lesson[baseKey]
      if (Array.isArray(defaultValue)) {
        return Array.isArray(data) ? data : defaultValue
      }
      return data !== undefined ? data : defaultValue
    }
    
    const tabContents = lesson.tabContents || []
    const tabContent = tabContents.find(tc => tc.tabId === tabId)
    
    if (!tabContent) {
      return defaultValue
    }
    
    const data = tabContent[baseKey]
    if (Array.isArray(defaultValue)) {
      return Array.isArray(data) ? data : defaultValue
    }
    return data !== undefined ? data : defaultValue
  }

  // ✅ FIXED: Better initialization that creates arrays when needed
  const updateTabContent = (tabId, baseKey, value) => {
    if (!tabId.includes('-')) {
      update(baseKey, value)
      return
    }
    
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      if (!clone.tabContents) clone.tabContents = []
      
      let tabContent = clone.tabContents.find(tc => tc.tabId === tabId)
      if (!tabContent) {
        tabContent = { 
          _key: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, 
          tabId,
          _type: 'object'
        }
        clone.tabContents.push(tabContent)
      }
      
      const keys = baseKey.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = tabContent
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]
        if (!obj[key]) {
          obj[key] = isNaN(key) ? {} : []
        }
        obj = obj[key]
      }
      obj[keys[keys.length - 1]] = value
      
      return clone
    })
  }

  const addTabContent = (tabId, baseKey, item) => {
    if (!tabId.includes('-')) {
      add(baseKey, item)
      return
    }
    
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      if (!clone.tabContents) clone.tabContents = []
      
      let tabContent = clone.tabContents.find(tc => tc.tabId === tabId)
      if (!tabContent) {
        tabContent = { _key: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, tabId }
        clone.tabContents.push(tabContent)
      }
      
      const keys = baseKey.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = tabContent
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      
      const finalKey = keys[keys.length - 1]
      if (!obj[finalKey]) obj[finalKey] = []
      if (!Array.isArray(obj[finalKey])) obj[finalKey] = []
      obj[finalKey].push(JSON.parse(JSON.stringify(item)))
      
      return clone
    })
  }

  const removeTabContent = (tabId, baseKey, idx) => {
    if (!tabId.includes('-')) {
      remove(baseKey, idx)
      return
    }
    
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      if (!clone.tabContents) return clone
      
      const tabContent = clone.tabContents.find(tc => tc.tabId === tabId)
      if (!tabContent) return clone
      
      const keys = baseKey.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = tabContent
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) return clone
        obj = obj[keys[i]]
      }
      
      const finalKey = keys[keys.length - 1]
      if (obj[finalKey] && Array.isArray(obj[finalKey])) {
        obj[finalKey].splice(idx, 1)
      }
      
      return clone
    })
  }

  const handleDownload = () => {
    downloadLesson(lesson)
    alert('✅ JSON downloaded!')
  }

  const handleCopy = () => {
    copyLesson(lesson)
    alert('✅ Copied to clipboard!')
  }

  const handleCommitToSanity = async () => {
    if (!client.config().token) {
      setCommitError('Missing Sanity token. Add NEXT_PUBLIC_SANITY_TOKEN to .env.local')
      return
    }

    const confirmMsg = stagedFilesMapRef.current.size > 0
      ? `This will upload ${stagedFilesMapRef.current.size} file(s) and save as DRAFT. You can review in Sanity Studio before publishing. Continue?`
      : 'Save this lesson as DRAFT to Sanity?'

    if (!confirm(confirmMsg)) return

    setCommitting(true)
    setCommitError(null)

    try {
      const uploadedUrls = new Map()

      for (const [key, file] of stagedFilesMapRef.current.entries()) {
        console.log(`📤 Uploading ${file.name}...`)

        const asset = await client.assets.upload(
          file.type.startsWith('video/') ? 'file' : 'image',
          file,
          {
            filename: file.name,
            contentType: file.type
          }
        )

        uploadedUrls.set(key, asset.url)
        console.log(`✅ Uploaded: ${asset.url}`)
      }

      const lessonWithUrls = JSON.parse(JSON.stringify(lesson))

      lessonWithUrls.categories?.forEach((cat, ci) => {
        cat.items?.forEach((item, ii) => {
          item.detailedInfo?.pages?.forEach((page, pi) => {
            const key = `${ci}-${ii}-${pi}`
            if (uploadedUrls.has(key)) {
              page.uploadedMediaUrl = uploadedUrls.get(key)
              page.mediaType = 'upload'
              page.image = ''
              page.finalMediaUrl = uploadedUrls.get(key)
            }
          })
        })
      })

      // ✅ CRITICAL: Remove any stray numbered fields
      const cleanLesson = {...lessonWithUrls}
      Object.keys(cleanLesson).forEach(key => {
        if (key.includes('_content-') || key.includes('_overview-') || key.includes('_shortcuts-') || key.includes('_practice-')) {
          console.log(`🗑️ Removing stray field: ${key}`)
          delete cleanLesson[key]
        }
      })

      const addKeys = (obj) => {
        if (Array.isArray(obj)) {
          return obj.map(item => {
            if (typeof item === 'object' && item !== null) {
              return {
                _key: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                ...addKeys(item)
              }
            }
            return item
          })
        } else if (obj && typeof obj === 'object') {
          const newObj = {}
          for (const key in obj) {
            if (!key.startsWith('_staged')) {
              newObj[key] = addKeys(obj[key])
            }
          }
          return newObj
        }
        return obj
      }

      const lessonWithKeys = addKeys(cleanLesson)

      console.log('💾 Committing to Sanity as DRAFT...')
      console.log('📦 TabContents:', lessonWithKeys.tabContents?.length || 0)

      const existingDraft = await client.fetch(
        `*[_type == "lesson" && lessonId.current == $id && _id in path("drafts.**")][0]`,
        { id: lessonWithKeys.lessonId.current }
      )

      const existingPublished = await client.fetch(
        `*[_type == "lesson" && lessonId.current == $id && !(_id in path("drafts.**"))][0]`,
        { id: lessonWithKeys.lessonId.current }
      )

      let result
      let draftId

      if (existingDraft) {
        draftId = existingDraft._id
        result = await client
          .patch(draftId)
          .set(lessonWithKeys)
          .commit()
        console.log('✅ Updated existing draft:', draftId)
      } else if (existingPublished) {
        draftId = `drafts.${existingPublished._id}`
        result = await client.create({
          ...lessonWithKeys,
          _id: draftId,
          _type: 'lesson'
        })
        console.log('✅ Created draft from published lesson:', draftId)
      } else {
        draftId = `drafts.${lessonWithKeys.lessonId.current}`
        result = await client.create({
          ...lessonWithKeys,
          _id: draftId,
          _type: 'lesson'
        })
        console.log('✅ Created new draft:', draftId)
      }

      stagedFilesMapRef.current.clear()

      const studioUrl = `${window.location.origin}/studio/structure/lesson;${result._id.replace('drafts.', '')}`

      if (confirm('🎉 Draft saved! Open in Sanity Studio to review and publish?')) {
        window.open(studioUrl, '_blank')
      }

    } catch (err) {
      console.error('❌ Commit failed:', err)
      setCommitError(err.message || 'Failed to commit to Sanity')
    } finally {
      setCommitting(false)
    }
  }

  return (
    <div>
      <div className="builder-toolbar">
        <div className="builder-toolbar-inner">
          <div className="builder-toolbar-left">
            <button
              onClick={() => setEditMode(!editMode)}
              className={editMode ? 'btn-edit-mode' : 'btn-view-mode'}
            >
              {editMode ? <Edit3 size={16} /> : <Eye size={16} />}
              {editMode ? 'Edit Mode' : 'View Mode'}
            </button>

            <button
              onClick={() => setShowJSON(!showJSON)}
              className={`btn-toggle-json ${showJSON ? 'active' : ''}`}
            >
              {showJSON ? <Eye size={16} /> : '{ }'}
              {showJSON ? 'Visual' : 'JSON'}
            </button>
          </div>

          <div className="builder-toolbar-right">
            <button onClick={handleDownload} className="btn-download">
              <Download size={16} /> Download JSON
            </button>

            <button onClick={handleCopy} className="btn-copy">
              <Copy size={16} /> Copy JSON
            </button>

            <button
              onClick={handleCommitToSanity}
              disabled={committing}
              className="btn-commit"
              style={{
                background: committing ? 'rgba(59, 130, 246, 0.3)' : 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                opacity: committing ? 0.7 : 1
              }}
            >
              <Cloud size={16} />
              {committing ? 'Saving Draft...' : 'Save as Draft'}
            </button>
          </div>
        </div>
      </div>

      {stagedFilesMapRef.current.size > 0 && (
        <div style={{
          maxWidth: '1400px',
          margin: '1rem auto',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          color: '#60a5fa',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <AlertCircle size={20} />
          <span>
            📎 {stagedFilesMapRef.current.size} file(s) ready to upload.
            Click "Save as Draft" to upload and save.
          </span>
        </div>
      )}

      {commitError && (
        <div style={{
          maxWidth: '1400px',
          margin: '1rem auto',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#ef4444',
          padding: '1rem',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <AlertCircle size={20} />
          <span>{commitError}</span>
        </div>
      )}

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {showJSON ? (
          <pre className="builder-json-view">
            {JSON.stringify(lesson, null, 2)}
          </pre>
        ) : (
          <>
            {editMode && <SettingsPanel lesson={lesson} update={update} />}
            <HeroSection lesson={lesson} update={update} add={add} remove={remove} editMode={editMode} />
            <TabsSection
              lesson={lesson}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              add={add}
              remove={remove}
              update={update}
              editMode={editMode}
            />

            <div style={{ marginTop: '2rem' }}>
              {activeTabType === 'overview' && (
                <OverviewTab 
                  lesson={{
                    overviewTitle: getTabData(activeTab, 'overviewTitle', `Overview - ${activeTab}`),
                    overviewDescription: getTabData(activeTab, 'overviewDescription', ''),
                    overviewCards: getTabData(activeTab, 'overviewCards', [])
                  }}
                  update={(path, value) => {
                    if (path.startsWith('overviewTitle')) {
                      updateTabContent(activeTab, 'overviewTitle', value)
                    } else if (path.startsWith('overviewDescription')) {
                      updateTabContent(activeTab, 'overviewDescription', value)
                    } else if (path.startsWith('overviewCards')) {
                      updateTabContent(activeTab, path, value)
                    } else {
                      update(path, value)
                    }
                  }}
                  add={(path, item) => {
                    if (path === 'overviewCards') {
                      addTabContent(activeTab, 'overviewCards', item)
                    } else {
                      add(path, item)
                    }
                  }}
                  remove={(path, idx) => {
                    if (path === 'overviewCards') {
                      removeTabContent(activeTab, 'overviewCards', idx)
                    } else {
                      remove(path, idx)
                    }
                  }}
                  editMode={editMode}
                />
              )}

              {activeTabType === 'content' && (
                <ContentTab
                  lesson={{
                    categories: getTabData(activeTab, 'categories', []),
                    contentTitle: getTabData(activeTab, 'contentTitle', `Content - ${activeTab}`),
                    contentDescription: getTabData(activeTab, 'contentDescription', '')
                  }}
                  update={(path, value) => {
                    if (path.startsWith('contentTitle')) {
                      updateTabContent(activeTab, 'contentTitle', value)
                    } else if (path.startsWith('contentDescription')) {
                      updateTabContent(activeTab, 'contentDescription', value)
                    } else if (path.startsWith('categories')) {
                      updateTabContent(activeTab, path, value)
                    } else {
                      update(path, value)
                    }
                  }}
                  add={(path, item) => {
                    if (path === 'categories' || path.startsWith('categories[')) {
                      addTabContent(activeTab, path, item)
                    } else {
                      add(path, item)
                    }
                  }}
                  remove={(path, idx) => {
                    if (path === 'categories' || path.startsWith('categories[')) {
                      removeTabContent(activeTab, path, idx)
                    } else {
                      remove(path, idx)
                    }
                  }}
                  editMode={editMode}
                  setSelectedItem={setSelectedItem}
                />
              )}

              {activeTabType === 'shortcuts' && (
                <ShortcutsTab 
                  lesson={{
                    shortcuts: getTabData(activeTab, 'shortcuts', [])
                  }}
                  update={(path, value) => {
                    if (path.startsWith('shortcuts')) {
                      updateTabContent(activeTab, path, value)
                    } else {
                      update(path, value)
                    }
                  }}
                  add={(path, item) => {
                    if (path === 'shortcuts' || path.startsWith('shortcuts[')) {
                      addTabContent(activeTab, path, item)
                    } else {
                      add(path, item)
                    }
                  }}
                  remove={(path, idx) => {
                    if (path === 'shortcuts' || path.startsWith('shortcuts[')) {
                      removeTabContent(activeTab, path, idx)
                    } else {
                      remove(path, idx)
                    }
                  }}
                  editMode={editMode}
                />
              )}

              {activeTabType === 'practice' && (
                <PracticeTab 
                  lesson={{
                    practiceTitle: getTabData(activeTab, 'practiceTitle', `Practice - ${activeTab}`),
                    practiceDescription: getTabData(activeTab, 'practiceDescription', ''),
                    practiceProjects: getTabData(activeTab, 'practiceProjects', [])
                  }}
                  update={(path, value) => {
                    if (path.startsWith('practiceTitle')) {
                      updateTabContent(activeTab, 'practiceTitle', value)
                    } else if (path.startsWith('practiceDescription')) {
                      updateTabContent(activeTab, 'practiceDescription', value)
                    } else if (path.startsWith('practiceProjects')) {
                      updateTabContent(activeTab, path, value)
                    } else {
                      update(path, value)
                    }
                  }}
                  add={(path, item) => {
                    if (path === 'practiceProjects' || path.startsWith('practiceProjects[')) {
                      addTabContent(activeTab, path, item)
                    } else {
                      add(path, item)
                    }
                  }}
                  remove={(path, idx) => {
                    if (path === 'practiceProjects' || path.startsWith('practiceProjects[')) {
                      removeTabContent(activeTab, path, idx)
                    } else {
                      remove(path, idx)
                    }
                  }}
                  editMode={editMode}
                />
              )}
            </div>
          </>
        )}
      </div>

      {selectedItem && (
        <DetailModal
          item={selectedItem}
          themeColor={selectedItem.color}
          onClose={() => setSelectedItem(null)}
          onSave={(updatedItem) => {
            if (updatedItem._stagedFiles) {
              updatedItem._stagedFiles.forEach(({ pageIndex, file }) => {
                const key = `${selectedItem.categoryIndex}-${selectedItem.itemIndex}-${pageIndex}`
                stagedFilesMapRef.current.set(key, file)
              })
              delete updatedItem._stagedFiles
            }

            update(
              `categories[${selectedItem.categoryIndex}].items[${selectedItem.itemIndex}]`,
              updatedItem
            )
            setSelectedItem(null)
          }}
        />
      )}

      <style jsx>{`
        .btn-commit {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-commit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }

        .btn-commit:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}