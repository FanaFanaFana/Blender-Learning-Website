// FILE: components/builder/LessonBuilder.jsx
'use client'

import { useState, useEffect } from 'react'
import { downloadLesson, copyLesson } from './builderUtils'
import { SettingsPanel, HeroSection, TabsSection } from './BuilderSection'
import { OverviewTab, ContentTab, ShortcutsTab, PracticeTab } from './BuilderTabs'
import DetailModal from './DetailModal'
import { Download, Copy, Eye, Edit3 } from 'lucide-react'

export default function LessonBuilder({ lesson: initialLesson }) {
  // ✅ FIXED: Ensure lessonIcon is initialized
  const [lesson, setLesson] = useState(() => {
    const lessonWithDefaults = {
      ...initialLesson,
      lessonIcon: initialLesson.lessonIcon || '/Icons/blender_icon_current_file.svg'
    }
    console.log('🎨 Initial lesson state:', lessonWithDefaults)
    return lessonWithDefaults
  })
  
  const [editMode, setEditMode] = useState(true)
  const [showJSON, setShowJSON] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedItem, setSelectedItem] = useState(null)

  // Update nested values
  const update = (path, value) => {
    console.log('📝 Updating:', path, '=', value)
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      obj[keys[keys.length - 1]] = value
      console.log('✅ Updated lesson:', clone)
      return clone
    })
  }

  // Add item to array
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
      if (!obj[key]) obj[key] = []
      obj[key].push(JSON.parse(JSON.stringify(item)))
      return clone
    })
  }

  // Remove item from array
  const remove = (path, idx) => {
    setLesson(prev => {
      const clone = JSON.parse(JSON.stringify(prev))
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let obj = clone
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {}
        obj = obj[keys[i]]
      }
      obj[keys[keys.length - 1]].splice(idx, 1)
      return clone
    })
  }

  // Initialize tabs if empty
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

  // Set initial active tab
  useEffect(() => {
    if (lesson.enabledTabs?.[0] && !activeTab) {
      setActiveTab(lesson.enabledTabs[0].tabId)
    }
  }, [lesson.enabledTabs, activeTab])

  const handleDownload = () => {
    console.log('💾 Downloading lesson with lessonIcon:', lesson.lessonIcon)
    downloadLesson(lesson)
    alert('✅ JSON downloaded with all fields!')
  }

  const handleCopy = () => {
    console.log('📋 Copying lesson with lessonIcon:', lesson.lessonIcon)
    copyLesson(lesson)
    alert('✅ Copied with all required fields!')
  }

  return (
    <div>
      {/* Builder Toolbar */}
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {showJSON ? (
          <pre className="builder-json-view">
            {JSON.stringify(lesson, null, 2)}
          </pre>
        ) : (
          <>
            {/* Settings Panel */}
            {editMode && <SettingsPanel lesson={lesson} update={update} />}

            {/* Hero Section */}
            <HeroSection lesson={lesson} update={update} add={add} remove={remove} editMode={editMode} />

            {/* Tabs */}
            <TabsSection 
              lesson={lesson} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              add={add}
              remove={remove}
              editMode={editMode}
            />

            {/* Tab Content */}
            <div style={{ marginTop: '2rem' }}>
              {activeTab === 'overview' && (
                <OverviewTab lesson={lesson} update={update} add={add} remove={remove} editMode={editMode} />
              )}

              {activeTab === 'content' && (
                <ContentTab 
                  lesson={lesson} 
                  update={update} 
                  add={add} 
                  remove={remove} 
                  editMode={editMode}
                  setSelectedItem={setSelectedItem}
                />
              )}

              {activeTab === 'shortcuts' && (
                <ShortcutsTab lesson={lesson} update={update} add={add} remove={remove} editMode={editMode} />
              )}

              {activeTab === 'practice' && (
                <PracticeTab lesson={lesson} update={update} add={add} remove={remove} editMode={editMode} />
              )}
            </div>
          </>
        )}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          themeColor={selectedItem.color}
          onClose={() => setSelectedItem(null)}
          onSave={(updatedItem) => {
            update(
              `categories[${selectedItem.categoryIndex}].items[${selectedItem.itemIndex}]`,
              updatedItem
            )
            setSelectedItem(null)
          }}
        />
      )}

    
      
    </div>
  )
}