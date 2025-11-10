// FILE: components/shared/IconPicker.jsx
'use client'

import { useState, useEffect, useRef } from 'react'

// ✅ Organize icons by category
const categorizeIcons = (iconsList) => {
  const categories = {
    'Modeling': [],
    'Modifiers': [],
    'Animation': [],
    'Sculpting': [],
    'Painting': [],
    'Materials': [],
    'Constraints': [],
    'Forces': [],
    'UI & Navigation': [],
    'File & Data': [],
    'Other': []
  }

  iconsList.forEach(icon => {
    const name = icon.toLowerCase()
    
    // Modeling icons
    if (name.includes('mesh_') || name.includes('cube') || name.includes('sphere') || 
        name.includes('cone') || name.includes('cylinder') || name.includes('plane') ||
        name.includes('monkey') || name.includes('torus') || name.includes('curve_') ||
        name.includes('lattice') || name.includes('meta_')) {
      categories['Modeling'].push(icon)
    }
    // Modifiers
    else if (name.startsWith('mod_') || name.includes('modifier')) {
      categories['Modifiers'].push(icon)
    }
    // Animation
    else if (name.includes('anim') || name.includes('keyframe') || name.includes('action') ||
             name.includes('nla') || name.includes('driver') || name.includes('fcurve') ||
             name.includes('play') || name.includes('pause') || name.includes('rec') ||
             name.includes('frame_') || name.includes('marker')) {
      categories['Animation'].push(icon)
    }
    // Sculpting
    else if (name.includes('sculpt') || name.includes('brush') || 
             name.includes('clay') || name.includes('grab') || name.includes('pinch') ||
             name.includes('smooth') || name.includes('inflate') || name.includes('crease') ||
             name.includes('flatten') || name.includes('scrape') || name.includes('fill') ||
             name.includes('nudge') || name.includes('thumb') || name.includes('snake') ||
             name.includes('elastic') || name.includes('pose.png')) {
      categories['Sculpting'].push(icon)
    }
    // Painting
    else if (name.includes('paint') || name.includes('draw') || name.includes('tpaint') ||
             name.includes('vpaint') || name.includes('wpaint') || name.includes('airbrush') ||
             name.includes('smear') || name.includes('blend')) {
      categories['Painting'].push(icon)
    }
    // Materials & Textures
    else if (name.includes('material') || name.includes('texture') || name.includes('shader') ||
             name.includes('mat') || name.includes('color') || name.includes('node')) {
      categories['Materials'].push(icon)
    }
    // Constraints
    else if (name.startsWith('con_') || name.includes('constraint')) {
      categories['Constraints'].push(icon)
    }
    // Forces & Physics
    else if (name.startsWith('force_') || name.includes('rigid_body') || name.includes('physics') ||
             name.includes('cloth') || name.includes('fluid')) {
      categories['Forces'].push(icon)
    }
    // File & Data operations
    else if (name.includes('file_') || name.includes('folder') || name.includes('export') ||
             name.includes('import') || name.includes('save') || name.includes('load') ||
             name.includes('link') || name.includes('append') || name.includes('library')) {
      categories['File & Data'].push(icon)
    }
    // UI & Navigation
    else if (name.includes('arrow') || name.includes('tria_') || name.includes('view') ||
             name.includes('zoom') || name.includes('pan') || name.includes('snap') ||
             name.includes('pivot') || name.includes('orientation') || name.includes('axis') ||
             name.includes('menu') || name.includes('panel') || name.includes('window') ||
             name.includes('outliner') || name.includes('properties') || name.includes('settings')) {
      categories['UI & Navigation'].push(icon)
    }
    // Everything else
    else {
      categories['Other'].push(icon)
    }
  })

  // Remove empty categories
  return Object.entries(categories).filter(([_, icons]) => icons.length > 0)
}

export default function IconPicker({ value, onChange, editMode, size = 'normal' }) {
  const [showPicker, setShowPicker] = useState(false)
  const [icons, setIcons] = useState([])
  const [categorizedIcons, setCategorizedIcons] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const gridRef = useRef(null)

  useEffect(() => {
    fetch('/Icons/icons.json')
      .then(res => res.json())
      .then(data => {
        const allIcons = data.icons
          .filter(icon => /\.(svg|png|jpg|jpeg|gif|webp)$/i.test(icon))
          .map(icon => `/Icons/${icon}`)
        
        setIcons(allIcons)
        setCategorizedIcons(categorizeIcons(allIcons))
        console.log(`📦 Loaded ${allIcons.length} icons in ${categorizeIcons(allIcons).length} categories`)
      })
      .catch((err) => {
        console.error('Failed to load icons:', err)
        setIcons([])
      })
  }, [])

  useEffect(() => {
    if (showPicker) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [showPicker])

  const iconSize = size === 'large' ? '48px' : '32px'
  const displaySize = size === 'large' ? '28px' : '24px'

  // Filter icons based on search and category
  const getFilteredIcons = () => {
    let filtered = icons

    if (activeCategory !== 'All') {
      const categoryData = categorizedIcons.find(([cat]) => cat === activeCategory)
      filtered = categoryData ? categoryData[1] : []
    }

    if (searchQuery) {
      filtered = filtered.filter(icon => 
        icon.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return filtered
  }

  const filteredIcons = getFilteredIcons()

  if (!editMode) {
    return value?.startsWith('/') ? (
      <img src={value} alt="" style={{ width: iconSize, height: iconSize }} />
    ) : (
      <span style={{ fontSize: iconSize }}>{value || ''}</span>
    )
  }

  return (
    <div style={{ position: 'relative', zIndex: showPicker ? 1000 : 1 }}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setShowPicker(!showPicker)
        }}
        style={{
          width: iconSize,
          height: iconSize,
          background: size === 'large' ? 'rgba(59, 130, 246, 0.1)' : undefined,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: size === 'large' ? '2px solid rgba(59, 130, 246, 0.3)' : undefined,
          transition: 'all 0.2s'
        }}
      >
        {value?.startsWith('/') ? (
          <img src={value} alt="" style={{ width: displaySize, height: displaySize }} />
        ) : (
          <span style={{ fontSize: displaySize }}>{value || '✨'}</span>
        )}
      </div>

      {showPicker && (
        <>
          {/* Overlay */}
          <div
            onClick={(e) => {
              e.stopPropagation()
              setShowPicker(false)
              setSearchQuery('')
              setActiveCategory('All')
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              zIndex: 998,
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Modal container */}
          <div
            ref={gridRef}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '90vw',
              maxHeight: '80vh',
              width: '700px',
              background: '#1e293b',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '16px',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              background: '#1e293b',
              padding: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                color: '#e0e7ef',
                fontSize: '1.2rem',
                fontWeight: '600'
              }}>
                Choose an Icon
              </h3>
              <p style={{
                margin: '0 0 1rem 0',
                color: '#7a8c9e',
                fontSize: '0.9rem'
              }}>
                {filteredIcons.length} icons {searchQuery && `matching "${searchQuery}"`}
              </p>

              {/* Search bar */}
              <input
                type="text"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '0.95rem',
                  marginBottom: '1rem'
                }}
              />

              {/* Category tabs */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                overflowX: 'auto',
                paddingBottom: '0.5rem'
              }}>
                <button
                  onClick={() => setActiveCategory('All')}
                  style={{
                    padding: '0.5rem 1rem',
                    background: activeCategory === 'All' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: activeCategory === 'All' ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    color: activeCategory === 'All' ? '#60a5fa' : '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  All ({icons.length})
                </button>
                {categorizedIcons.map(([category, categoryIcons]) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{
                      padding: '0.5rem 1rem',
                      background: activeCategory === category ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: activeCategory === category ? '1px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      color: activeCategory === category ? '#60a5fa' : '#94a3b8',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s'
                    }}
                  >
                    {category} ({categoryIcons.length})
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable grid */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              padding: '1.5rem',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
                gap: '0.75rem',
                width: '100%'
              }}>
                {filteredIcons.map((icon, i) => (
                  <div
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation()
                      onChange(icon)
                      setShowPicker(false)
                      setSearchQuery('')
                      setActiveCategory('All')
                    }}
                    onTouchEnd={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      onChange(icon)
                      setShowPicker(false)
                      setSearchQuery('')
                      setActiveCategory('All')
                    }}
                    title={icon.split('/').pop()?.replace(/\.(svg|png|jpg|jpeg|gif|webp)$/i, '')}
                    style={{
                      padding: '0.75rem',
                      background: value === icon ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                      border: value === icon ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      aspectRatio: '1',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      WebkitTouchCallout: 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (value !== icon) {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                        e.currentTarget.style.transform = 'scale(1.05)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (value !== icon) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                        e.currentTarget.style.transform = 'scale(1)'
                      }
                    }}
                  >
                    <img
                      src={icon}
                      alt=""
                      style={{
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain',
                        pointerEvents: 'none'
                      }}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {filteredIcons.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: '#7a8c9e'
                }}>
                  <p>No icons found</p>
                  {searchQuery && (
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      Try a different search term
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}