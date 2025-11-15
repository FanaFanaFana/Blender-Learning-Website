// FILE: components/shared/IconContext.jsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const IconContext = createContext(null)

export function IconProvider({ children }) {
  const [icons, setIcons] = useState([])
  const [categorizedIcons, setCategorizedIcons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Only fetch once for the entire app
    fetch('/Icons/icons.json')
      .then(res => res.json())
      .then(data => {
        const allIcons = data.icons
          .filter(icon => /\.(svg|png|jpg|jpeg|gif|webp)$/i.test(icon))
          .map(icon => `/Icons/${icon}`)
        
        setIcons(allIcons)
        
        const categorized = categorizeIcons(allIcons)
        setCategorizedIcons(categorized)
        setLoading(false)
        console.log(`📦 Loaded ${allIcons.length} icons (shared across all pickers)`)
      })
      .catch((err) => {
        console.error('Failed to load icons:', err)
        setIcons([])
        setLoading(false)
      })
  }, [])

  return (
    <IconContext.Provider value={{ icons, categorizedIcons, loading }}>
      {children}
    </IconContext.Provider>
  )
}

export function useIcons() {
  const context = useContext(IconContext)
  if (!context) {
    throw new Error('useIcons must be used within IconProvider')
  }
  return context
}

// Categorize icons helper function
function categorizeIcons(iconsList) {
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