// FILE: components/builder/BuilderSection.jsx
import IconPicker from '@/components/shared/IconPicker'
import EditableText from '@/components/shared/EditableText'
import { Plus, Settings, Link, Folder, Palette } from 'lucide-react'

// ========================================
// SETTINGS PANEL
// ========================================
export function SettingsPanel({ lesson, update }) {
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

        {/* Category Dropdown */}
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
            <option value="modeling">3D Modeling</option>
            <option value="rendering">Rendering</option>
            <option value="animation">Animation</option>
            <option value="texturing">Texturing</option>
            <option value="Lesson">Lesson Content</option>
            <option value="printing">3D Printing</option>
            <option value="vfx">VFX Integration</option>
            <option value="gameAssets">Game Assets</option>
            <option value="hairFur">Hair & Fur</option>
            <option value="greaseGencil">Grease Pencil</option>
            <option value="geometryNodes">Geometry Nodes</option>
            <option value="projectManagement">Project Management</option>
            <option value="simulation">Simulation</option>
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

        {/* ✅ FIXED: Lesson Card Icon with IconPicker */}
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
// HERO SECTION (WITHOUT BADGES)
// ========================================
export function HeroSection({ lesson, update, add, remove, editMode }) {
  return (
    <section className="builder-hero-section">
      <h1 className="builder-hero-title">
        <EditableText
          value={lesson.heroConfig?.title}
          onChange={(v) => update('heroConfig.title', v)}
          editMode={editMode}
          placeholder="Title"
        />
        {' '}
        <span className="builder-hero-gradient">
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
    </section>
  )
}

// ========================================
// TABS SECTION
// ========================================
export function TabsSection({ lesson, activeTab, setActiveTab, add, remove, editMode }) {
  const availableTabs = [
    { tabId: 'overview', customLabel: 'Overview' },
    { tabId: 'content', customLabel: 'Content' },
    { tabId: 'shortcuts', customLabel: 'Shortcuts' },
    { tabId: 'practice', customLabel: 'Practice' }
  ]

  const handleAddTab = () => {
    const existingIds = (lesson.enabledTabs || []).map(t => t.tabId)
    const nextTab = availableTabs.find(t => !existingIds.includes(t.tabId))

    if (nextTab) {
      add('enabledTabs', nextTab)
    } else {
      alert('All tabs already added!')
    }
  }

  return (
    <div className="builder-tabs">
      {(lesson.enabledTabs || []).map((tab, i) => (
        <div key={i} className="builder-tab-wrapper">
          <button
            onClick={() => setActiveTab(tab.tabId)}
            className={`builder-tab ${activeTab === tab.tabId ? 'active' : ''}`}
            style={{
              '--theme-color': lesson.themeColor || '#3b82f6',
              background: activeTab === tab.tabId ? (lesson.themeColor || '#3b82f6') : undefined
            }}
          >
            {tab.customLabel}
          </button>

          {editMode && lesson.enabledTabs.length > 1 && (
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
            >
              ×
            </button>
          )}
        </div>
      ))}

      {editMode && (
        <button onClick={handleAddTab} className="builder-add-tab-btn">
          <Plus size={16} /> Add Tab
        </button>
      )}
    </div>
  )
}