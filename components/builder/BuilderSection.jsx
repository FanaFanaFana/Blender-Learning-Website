// FILE: components/builder/BuilderSection.jsx
import { useState } from 'react'
import IconPicker from '@/components/shared/IconPicker'
import EditableText from '@/components/shared/EditableText'
import { Plus, Settings, Link, Folder, Palette } from 'lucide-react'
// ✅ Import from centralized config
import { getSanityCategories } from '@/app/config/categories'

// ========================================
// SETTINGS PANEL
// ========================================
export function SettingsPanel({ lesson, update }) {
  // ✅ Get categories from centralized config
  const categoryOptions = getSanityCategories()
  
  return (
    <section className="builder-settings-panel">
      <h3 className="builder-section-title">
        <Settings size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
        Lesson Settings
      </h3>
      
      <div className="builder-settings-grid">
        {/* Lesson ID */}
        <div className="builder-field">
          <label className="builder-label">
            <Link size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Lesson ID (URL slug)
          </label>
          <input
            value={lesson.lessonId?.current || ''}
            onChange={(e) => update('lessonId', { current: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
            placeholder="e.g., modifiers, cameras"
            className="builder-input"
          />
        </div>

        {/* Category Dropdown - ✅ Now uses centralized config */}
        <div className="builder-field">
          <label className="builder-label">
            <Folder size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Category (for Compendium)
          </label>
          <select
            value={lesson.category || 'Lesson'}
            onChange={(e) => update('category', e.target.value)}
            className="builder-select"
          >
            {categoryOptions.map(cat => (
              <option key={cat.value} value={cat.value}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Theme Color Picker */}
        <div className="builder-field">
          <label className="builder-label">
            <Palette size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Theme Color
          </label>
          <div className="builder-color-picker">
            {[
              { name: 'Blue', value: '#3b82c4' },
              { name: 'Orange', value: '#f97316' },
              { name: 'Purple', value: '#8b5cf6' },
              { name: 'Green', value: '#10b981' },
              { name: 'Red', value: '#ef4444' },
              { name: 'Cyan', value: '#06b6d4' },
              { name: 'Yellow', value: '#eab308' },
              { name: 'Pink', value: '#ec4899' }
            ].map(color => (
              <button
                key={color.value}
                onClick={() => update('themeColor', color.value)}
                title={color.name}
                className={`builder-color-swatch ${lesson.themeColor === color.value ? 'active' : ''}`}
                style={{ background: color.value }}
              />
            ))}
          </div>
        </div>

        {/* Lesson Card Icon with IconPicker */}
        <div className="builder-field">
          <label className="builder-label">
            <Palette size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Lesson Card Icon (Compendium & Sidebar)
          </label>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <IconPicker
              value={lesson.lessonIcon || '/Icons/blender_icon_current_file.svg'}
              onChange={(v) => update('lessonIcon', v)}
              editMode={true}
              size="large"
            />
            <div style={{ flex: 1 }}>
              <p style={{ 
                fontSize: '0.85rem', 
                color: '#7a8c9e',
                margin: 0
              }}>
                Click the icon to choose from available Blender SVG icons
              </p>
              <p style={{ 
                fontSize: '0.75rem', 
                color: '#5a6c7e',
                margin: '0.25rem 0 0 0'
              }}>
                Current: {lesson.lessonIcon || 'Not set'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// HERO SECTION
// ========================================
// Updated HeroSection component - replace in BuilderSection.jsx

export function HeroSection({ lesson, update, add, remove, editMode }) {
  // Just use the theme color directly for the text
  const textColor = lesson.themeColor || '#f97316'

  return (
    <section className="builder-hero-section">
      <div className="builder-hero-content">
        <h1 className="builder-hero-title">
          <EditableText
            value={lesson.heroConfig?.title}
            onChange={(v) => update('heroConfig.title', v)}
            editMode={editMode}
            placeholder="Title"
          />
          {' '}
          <span style={{ color: textColor }}>
            <EditableText
              value={lesson.heroConfig?.gradientText}
              onChange={(v) => update('heroConfig.gradientText', v)}
              editMode={editMode}
              placeholder="Main Text"
            />
          </span>
        </h1>

        <div className="builder-hero-subtitle">
          <EditableText
            value={lesson.heroConfig?.subtitle}
            onChange={(v) => update('heroConfig.subtitle', v)}
            multiline
            editMode={editMode}
            placeholder="Subtitle description"
          />
        </div>
      </div>
    </section>
  )
}

// ========================================
// TABS SECTION WITH TYPE SELECTION & RENAMING
// ========================================
export function TabsSection({ lesson, activeTab, setActiveTab, add, remove, update, editMode }) {
  const [showAddMenu, setShowAddMenu] = useState(false)
  const [editingTab, setEditingTab] = useState(null)

  const availableTabTypes = [
  { 
    type: 'overview', 
    label: 'Overview', 
    icon: '', // Grid layout for overview
    description: 'Info cards section' 
  },
  { 
    type: 'content', 
    label: 'Content', 
    icon: '', // Documents for content/learning materials
    description: 'Main content categories' 
  },
  { 
    type: 'shortcuts', 
    label: 'Shortcuts', 
    icon: '', // Properties/settings icon for shortcuts
    description: 'Keyboard shortcuts' 
  },
  { 
    type: 'practice', 
    label: 'Practice', 
    icon: '', // Tool settings for practice/hands-on
    description: 'Practice projects' 
  }
]

  const handleAddTab = (type) => {
    const existingCount = (lesson.enabledTabs || []).filter(t => t.tabId.startsWith(type)).length
    const tabType = availableTabTypes.find(t => t.type === type)
    
    // Create unique tabId by appending index
    const uniqueTabId = existingCount > 0 ? `${type}-${existingCount + 1}` : type
    
    const newTab = {
      tabId: uniqueTabId,
      tabType: type, // Store the original type
      customLabel: existingCount > 0 ? `${tabType.label} ${existingCount + 1}` : tabType.label
    }
    
    add('enabledTabs', newTab)
    setShowAddMenu(false)
  }

  return (
    <div className="builder-tabs">
      {(lesson.enabledTabs || []).map((tab, i) => (
        <div key={i} className="builder-tab-wrapper">
          <div
            onClick={() => {
              // Only switch tabs if not editing
              if (editingTab !== i) {
                setActiveTab(tab.tabId)
              }
            }}
            className={`builder-tab ${activeTab === tab.tabId ? 'active' : ''}`}
            style={{
              '--theme-color': lesson.themeColor || '#3b82f6',
              background: activeTab === tab.tabId ? (lesson.themeColor || '#3b82f6') : undefined,
              cursor: 'pointer'
            }}
          >
            {editMode ? (
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  setEditingTab(i)
                }}
                onMouseEnter={(e) => {
                  if (editingTab !== i) {
                    e.currentTarget.style.borderBottom = '2px dashed rgba(255, 255, 255, 0.4)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = 'none'
                }}
                style={{
                  cursor: 'text',
                  display: 'inline-block',
                  minWidth: '80px',
                  textAlign: 'center',
                  transition: 'border-bottom 0.2s',
                  paddingBottom: '2px'
                }}
              >
                {editingTab === i ? (
                  <input
                    autoFocus
                    value={tab.customLabel}
                    onChange={(e) => update(`enabledTabs[${i}].customLabel`, e.target.value)}
                    onBlur={() => setEditingTab(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        setEditingTab(null)
                      }
                      if (e.key === 'Escape') {
                        setEditingTab(null)
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      border: '2px solid #3b82f6',
                      borderRadius: '4px',
                      padding: '0.25rem 0.5rem',
                      color: 'inherit',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      fontFamily: 'inherit',
                      outline: 'none',
                      minWidth: '80px',
                      textAlign: 'center'
                    }}
                  />
                ) : (
                  tab.customLabel
                )}
              </span>
            ) : (
              tab.customLabel
            )}
          </div>

          {editMode && (
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {lesson.enabledTabs.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (confirm(`Remove "${tab.customLabel}" tab?`)) {
                      remove('enabledTabs', i)
                      if (activeTab === tab.tabId && lesson.enabledTabs[0]) {
                        setActiveTab(lesson.enabledTabs[0].tabId)
                      }
                    }
                  }}
                  className="builder-tab-remove"
                  title="Remove tab"
                >
                  ×
                </button>
              )}
            </div>
          )}
        </div>
      ))}

      {editMode && lesson.enabledTabs.length < 8 && (
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowAddMenu(!showAddMenu)} 
            className="builder-add-tab-btn"
          >
            <Plus size={16} /> Add Tab ({lesson.enabledTabs.length}/8)
          </button>

          {showAddMenu && (
            <>
              <div 
                onClick={() => setShowAddMenu(false)}
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 99
                }}
              />
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                marginTop: '0.5rem',
                background: 'rgba(21, 35, 47, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '0.5rem',
                minWidth: '280px',
                zIndex: 100,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#7a8c9e',
                  padding: '0.5rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Choose Tab Type
                </div>
                {availableTabTypes.map(tabType => (
                  <button
                    key={tabType.type}
                    onClick={() => handleAddTab(tabType.type)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      color: '#e0e7ef',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                      e.currentTarget.style.borderColor = lesson.themeColor || '#3b82f6'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{tabType.icon}</span>
                    <div>
                      <div style={{ fontWeight: '600', marginBottom: '0.125rem' }}>
                        {tabType.label}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#7a8c9e' }}>
                        {tabType.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}