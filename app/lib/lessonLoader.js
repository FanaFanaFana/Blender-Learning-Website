// FILE: app/lib/lessonLoader.js

const lessonCache = new Map()

// ✅ Available tab types with their default icons
const availableTabs = [
  { id: 'overview', icon: '/Icons/info.svg' },
  { id: 'content', icon: '/Icons/modifier.svg' },
  { id: 'techniques', icon: '/Icons/tool.svg' },
  { id: 'shortcuts', icon: '/Icons/settings.svg' },
  { id: 'practice', icon: '/Icons/view_camera.svg' }
]

export async function loadLessonData(lessonId) {
  if (lessonCache.has(lessonId)) return lessonCache.get(lessonId)

  const response = await fetch(`/api/lessons/${lessonId}`)
  
  if (!response.ok) {
    throw new Error(`Lesson "${lessonId}" not found`)
  }
  
  const data = await response.json()

  console.log('🎨 Fetched lessonIcon from API:', data.lessonIcon)
  console.log('📦 Raw API response:', {
    hasHeroConfig: !!data.heroConfig,
    heroConfig: data.heroConfig,
    hasCategories: !!data.categories,
    categoriesLength: data.categories?.length,
    hasTechniques: !!data.techniques,
    techniquesLength: data.techniques?.length,
    hasTabContents: !!data.tabContents,
    tabContentsLength: data.tabContents?.length
  })

  // ✅ FIXED: Better format detection
  // If it has heroConfig and either categories/techniques/tabContents, it's the current Sanity format
  const hasCurrentStructure = !!data.heroConfig && (
    !!data.categories || 
    !!data.techniques || 
    !!data.tabContents || 
    !!data.overviewCards
  )
  
  // Only consider it "new format" if it has contentSections (old custom format)
  const isLegacyCustomFormat = !!data.contentSections

  console.log(`📖 Loading "${lessonId}" - Format: ${hasCurrentStructure ? 'CURRENT (Sanity)' : 'LEGACY (Custom)'}`)

  // ✅ Transform enabledTabs to tabs format for FRONTEND ONLY
  if (data.enabledTabs && data.enabledTabs.length > 0) {
    data.tabs = data.enabledTabs.map(tab => {
      const baseTabId = tab.tabId.split('-')[0]
      const tabConfig = availableTabs.find(t => t.id === baseTabId)
      return {
        id: tab.tabId,
        label: tab.customLabel,
        icon: tabConfig?.icon || '/Icons/info.svg'
      }
    })
    console.log('✅ Transformed enabledTabs to tabs for frontend:', data.tabs)
  }

  data.lessonIcon = data.lessonIcon || '/Icons/blender_icon_current_file.svg'

  // 🔥 If CURRENT SANITY FORMAT - return as-is (no transformation needed!)
  if (hasCurrentStructure) {
    console.log('✅ Current Sanity format - using data as-is')
    console.log('🎨 Hero Config:', data.heroConfig)
    console.log('📦 Categories:', data.categories?.length || 0)
    console.log('🔧 Techniques:', data.techniques?.length || 0)
    console.log('📚 TabContents:', data.tabContents?.length || 0)
    
    lessonCache.set(lessonId, data)
    return data
  }

  // 🔥 If LEGACY CUSTOM FORMAT - transform to match current structure
  const transformed = {
    themeColor: data.themeColor || '#3b82f6',
    lessonIcon: data.lessonIcon || '/Icons/blender_icon_current_file.svg',
    
    // Hero
    heroConfig: {
      title: data.title || 'Untitled',
      gradientText: '', 
      subtitle: data.subtitle || '',
      badges: [
        data.duration && {icon: '/Icons/time.svg', title: data.duration, subtitle: 'Duration'},
        data.level && {icon: '/Icons/user.svg', title: data.level, subtitle: 'Level'},
      ].filter(Boolean)
    },
    
    // Tabs
    tabs: data.tabs || [
      data.overviewCards?.length > 0 && {id: 'overview', icon: '/Icons/info.svg', label: 'Overview'},
      data.contentSections?.length > 0 && {id: 'content', icon: data.icon || '/Icons/editmode_hlt.svg', label: 'Content'},
      data.shortcuts?.length > 0 && {id: 'shortcuts', icon: '/Icons/settings.svg', label: 'Shortcuts'},
      data.practiceProjects?.length > 0 && {id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice'}
    ].filter(Boolean),
    
    // Overview
    overviewTitle: `Welcome to ${data.title}!`,
    overviewDescription: data.subtitle,
    overviewCards: data.overviewCards || [],
    
    // Content
    contentTitle: data.title,
    contentDescription: 'Explore the key concepts and tools',
    categories: (data.contentSections || []).map(section => ({
      name: section.sectionName,
      color: section.sectionColor || data.themeColor,
      items: (section.lessons || []).map(lesson => ({
        name: lesson.name,
        icon: lesson.icon,
        description: lesson.description
      }))
    })),
    
    // Shortcuts
    shortcuts: (data.shortcuts || []).map(cat => ({
      category: cat.category,
      icon: cat.icon,
      items: cat.items || []
    })),
    
    // Practice
    practiceTitle: 'Practice Projects',
    practiceDescription: 'Apply what you\'ve learned',
    practiceProjects: (data.practiceProjects || []).map(p => ({
      title: p.title,
      desc: p.description,
      duration: p.duration,
      difficulty: p.difficulty,
      skills: p.skills || []
    })),
    
    tabContents: data.tabContents || []
  }

  console.log('✅ Legacy format lesson transformed')
  console.log('📊 Overview cards:', transformed.overviewCards?.length || 0)
  console.log('📚 Content sections:', transformed.categories?.length || 0)

  lessonCache.set(lessonId, transformed)
  return transformed
}

export function preloadLesson(lessonId) {
  loadLessonData(lessonId).catch(() => {})
}

export function clearLessonCache() {
  lessonCache.clear()
}