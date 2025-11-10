// FILE: components/builder/BuilderTabs.jsx
import IconPicker from '@/components/shared/IconPicker'
import EditableText from '@/components/shared/EditableText'
import { Plus, Trash2 } from 'lucide-react'

// ========================================
// OVERVIEW TAB
// ========================================
export function OverviewTab({ lesson, update, add, remove, editMode }) {
  return (
    <div>
      <h2 className="builder-content-title">
        <EditableText
          value={lesson.overviewTitle}
          onChange={(v) => update('overviewTitle', v)}
          editMode={editMode}
          placeholder="Overview Title"
        />
      </h2>
      <p className="builder-content-description">
        <EditableText
          value={lesson.overviewDescription}
          onChange={(v) => update('overviewDescription', v)}
          multiline
          editMode={editMode}
          placeholder="Overview description"
        />
      </p>

      <div className="builder-cards-grid">
        {(lesson.overviewCards || []).map((card, i) => (
          <div key={i} className="builder-card">
            {editMode && (
              <button
                onClick={() => remove('overviewCards', i)}
                className="builder-card-remove"
              >
                ×
              </button>
            )}
            <div className="builder-card-icon">
              <IconPicker
                value={card.icon}
                onChange={(v) => update(`overviewCards[${i}].icon`, v)}
                editMode={editMode}
              />
            </div>

            <h3>
              <EditableText
                value={card.title}
                onChange={(v) => update(`overviewCards[${i}].title`, v)}
                editMode={editMode}
                placeholder="Card title"
              />
            </h3>
            <EditableText
              value={card.content}
              onChange={(v) => update(`overviewCards[${i}].content`, v)}
              multiline
              editMode={editMode}
              placeholder="Card content"
            />
          </div>
        ))}

        {editMode && (
          <button
            onClick={() => add('overviewCards', { icon: '/Icons/blender_icon_current_file.svg', title: 'New Card', content: 'Content here' })}
            className="builder-add-card-btn"
          >
            <Plus size={20} /> Add Card
          </button>
        )}
      </div>
    </div>
  )
}

// ========================================
// CONTENT TAB
// ========================================
export function ContentTab({ lesson, update, add, remove, editMode, setSelectedItem }) {
  return (
    <div>
      <h2 className="builder-content-title">Categories & Items</h2>
      {(lesson.categories || []).map((cat, ci) => (
        <div key={ci} className="builder-category">
          <div className="builder-category-header">
            <div className="builder-category-title">
              <IconPicker
                value={cat.icon}
                onChange={(v) => update(`categories[${ci}].icon`, v)}
                editMode={editMode}
              />
              <h3 style={{ color: cat.color }}>
                <EditableText
                  value={cat.name}
                  onChange={(v) => update(`categories[${ci}].name`, v)}
                  editMode={editMode}
                  placeholder="Category name"
                />
              </h3>
            </div>

            {editMode && (
              <button
                onClick={() => remove('categories', ci)}
                className="builder-trash-btn"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>

          <div className="builder-items-grid">
            {(cat.items || []).map((item, ii) => (
              <div
                key={ii}
                onClick={() => {
                  if (!editMode) {
                    setSelectedItem({ ...item, color: cat.color, categoryIndex: ci, itemIndex: ii })
                  }
                }}
                className="builder-item"
              >
                {editMode && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        remove(`categories[${ci}].items`, ii)
                      }}
                      className="builder-item-remove"
                    >
                      ×
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedItem({ ...item, color: cat.color, categoryIndex: ci, itemIndex: ii })
                      }}
                      className="builder-item-view"
                      title="View details"
                    >
                      👁️
                    </button>
                  </>
                )}

                {/* Item Icon */}
                <div className="builder-item-icon">
                  <IconPicker
                    value={item.icon}
                    onChange={(v) => update(`categories[${ci}].items[${ii}].icon`, v)}
                    editMode={editMode}
                  />
                </div>

                <div>
                  <strong>
                    <EditableText
                      value={item.name}
                      onChange={(v) => update(`categories[${ci}].items[${ii}].name`, v)}
                      editMode={editMode}
                      placeholder="Item name"
                    />
                  </strong>
                </div>
                <p>
                  <EditableText
                    value={item.description}
                    onChange={(v) => update(`categories[${ci}].items[${ii}].description`, v)}
                    multiline
                    editMode={editMode}
                    placeholder="Item description"
                  />
                </p>
              </div>
            ))}

            {editMode && (
              <button
                onClick={() => add(`categories[${ci}].items`, {
                  name: 'New Item',
                  description: 'Description',
                  icon: '/Icons/blender_icon_current_file.svg',
                  detailedInfo: { overview: '', pages: [{ title: 'Page 1', content: 'Content', tips: [] }] }
                })}
                className="builder-add-item-btn"
              >
                <Plus size={20} /> Add Item
              </button>
            )}
          </div>
        </div>
      ))}

      {editMode && (
        <button
          onClick={() => add('categories', {
            name: 'New Category',
            icon: '/Icons/blender_icon_current_file.svg',
            color: lesson.themeColor || '#3b82f6',
            items: []
          })}
          className="builder-add-category-btn"
        >
          <Plus size={20} /> Add Category
        </button>
      )}
    </div>
  )
}

// ========================================
// SHORTCUTS TAB
// ========================================
export function ShortcutsTab({ lesson, update, add, remove, editMode }) {
  return (
    <div>
      <h2 className="builder-content-title">Keyboard Shortcuts</h2>
      {(lesson.shortcuts || []).map((sec, si) => (
        <div key={si} className="builder-shortcuts-section">
          {editMode && (
            <button
              onClick={() => remove('shortcuts', si)}
              className="builder-shortcuts-remove"
            >
              ×
            </button>
          )}
          <h3>
            <EditableText
              value={sec.category}
              onChange={(v) => update(`shortcuts[${si}].category`, v)}
              editMode={editMode}
              placeholder="Shortcut category"
            />
          </h3>

          {(sec.items || []).map((sc, sci) => (
            <div key={sci} className="builder-shortcut-item">
              {editMode && (
                <button
                  onClick={() => remove(`shortcuts[${si}].items`, sci)}
                  className="builder-shortcut-remove"
                >
                  ×
                </button>
              )}
              <EditableText
                value={sc.action}
                onChange={(v) => update(`shortcuts[${si}].items[${sci}].action`, v)}
                editMode={editMode}
                placeholder="Action"
              />
              <EditableText
                value={sc.key}
                onChange={(v) => update(`shortcuts[${si}].items[${sci}].key`, v)}
                editMode={editMode}
                placeholder="Key"
                style={{ fontFamily: 'monospace' }}
              />
            </div>
          ))}

          {editMode && (
            <button
              onClick={() => add(`shortcuts[${si}].items`, { action: 'New Shortcut', key: 'Key' })}
              className="builder-add-shortcut-btn"
            >
              <Plus size={16} /> Add Shortcut
            </button>
          )}
        </div>
      ))}

      {editMode && (
        <button
          onClick={() => add('shortcuts', { category: 'New Category', items: [] })}
          className="builder-add-shortcuts-category-btn"
        >
          <Plus size={20} /> Add Category
        </button>
      )}
    </div>
  )
}

// ========================================
// PRACTICE TAB
// ========================================
export function PracticeTab({ lesson, update, add, remove, editMode }) {
  return (
    <div>
      <h2 className="builder-content-title">Practice Projects</h2>
      {(lesson.practiceProjects || []).map((proj, pi) => (
        <div key={pi} className="builder-practice-project">
          {editMode && (
            <button
              onClick={() => remove('practiceProjects', pi)}
              className="builder-practice-remove"
            >
              ×
            </button>
          )}
          <h3>
            <EditableText
              value={proj.title}
              onChange={(v) => update(`practiceProjects[${pi}].title`, v)}
              editMode={editMode}
              placeholder="Project title"
            />
          </h3>
          <p>
            <EditableText
              value={proj.desc}
              onChange={(v) => update(`practiceProjects[${pi}].desc`, v)}
              multiline
              editMode={editMode}
              placeholder="Project description"
            />
          </p>
          <div className="builder-practice-meta">
            <div>
              <strong>Duration: </strong>
              <EditableText
                value={proj.duration}
                onChange={(v) => update(`practiceProjects[${pi}].duration`, v)}
                editMode={editMode}
                placeholder="30 min"
              />
            </div>
            <div>
              <strong>Difficulty: </strong>
              <EditableText
                value={proj.difficulty}
                onChange={(v) => update(`practiceProjects[${pi}].difficulty`, v)}
                editMode={editMode}
                placeholder="Beginner"
              />
            </div>
          </div>
        </div>
      ))}

      {editMode && (
        <button
          onClick={() => add('practiceProjects', {
            title: 'New Project',
            desc: '',
            duration: '30 min',
            difficulty: 'Beginner',
            skills: []
          })}
          className="builder-add-practice-btn"
        >
          <Plus size={20} /> Add Project
        </button>
      )}
    </div>
  )
}