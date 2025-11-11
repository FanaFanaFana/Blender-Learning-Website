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
  console.log('📦 Raw data has tabContents:', !!data.tabContents, 'Length:', data.tabContents?.length)

  const isOldFormat = !!data.heroConfig && !!data.categories?.[0]?.items?.[0]?.detailedInfo
  const isNewFormat = !!data.contentSections

  console.log(`📖 Loading "${lessonId}" - Format: ${isOldFormat ? 'OLD (migrated)' : 'NEW (Sanity)'}`);

  // ✅ Transform enabledTabs to tabs format for FRONTEND ONLY
  if (data.enabledTabs && data.enabledTabs.length > 0) {
    data.tabs = data.enabledTabs.map(tab => {
      const baseTabId = tab.tabId.split('-')[0]  // Get base type (removes -2, -3, etc.)
      const tabConfig = availableTabs.find(t => t.id === baseTabId)
      return {
        id: tab.tabId,  // Use full tabId (includes -2, -3, etc.)
        label: tab.customLabel,
        icon: tabConfig?.icon || '/Icons/info.svg'
      }
    })
    console.log('✅ Transformed enabledTabs to tabs for frontend:', data.tabs)
  }

  data.lessonIcon = data.lessonIcon || '/Icons/blender_icon_current_file.svg'
  console.log('🎨 After null-check, lessonIcon:', data.lessonIcon)

  // 🔥 If OLD FORMAT - process and return
  if (isOldFormat) {
    // ✅ Process media URLs for old format
    const processPages = (pages) => {
      if (!pages) return []
      return pages.map(page => {
        let finalMediaUrl = null
        
        if (page.mediaType === 'upload' && page.uploadedMediaUrl) {
          finalMediaUrl = page.uploadedMediaUrl
          console.log('📤 Using uploaded media:', finalMediaUrl)
        } else if (page.mediaType === 'url' && page.image) {
          finalMediaUrl = page.image
          console.log('🔗 Using URL path:', finalMediaUrl)
        } else {
          finalMediaUrl = page.uploadedMediaUrl || page.image
          console.log('🔄 Using fallback media:', finalMediaUrl)
        }
        
        return {
          ...page,
          image: finalMediaUrl,
          finalMediaUrl: finalMediaUrl
        }
      })
    }

    // Process root-level categories (for base "content" tab)
    if (data.categories) {
      data.categories = data.categories.map(cat => ({
        ...cat,
        items: cat.items?.map(item => ({
          ...item,
          detailedInfo: item.detailedInfo ? {
            ...item.detailedInfo,
            pages: processPages(item.detailedInfo.pages)
          } : undefined
        }))
      }))
    }

    // Process techniques
    if (data.techniques) {
      data.techniques = data.techniques.map(tech => ({
        ...tech,
        items: tech.items?.map(item => ({
          ...item,
          detailedInfo: item.detailedInfo ? {
            ...item.detailedInfo,
            pages: processPages(item.detailedInfo.pages)
          } : undefined
        }))
      }))
    }

    // ✅ CRITICAL FIX: Process tabContents array for numbered tabs (content-2, shortcuts-2, etc.)
    if (data.tabContents && Array.isArray(data.tabContents)) {
      console.log('🔧 Processing tabContents array with', data.tabContents.length, 'entries')
      
      data.tabContents = data.tabContents.map(tabContent => {
        const processed = { ...tabContent }
        
        // Process categories if this is a content-type tab
        if (processed.categories) {
          processed.categories = processed.categories.map(cat => ({
            ...cat,
            items: cat.items?.map(item => ({
              ...item,
              detailedInfo: item.detailedInfo ? {
                ...item.detailedInfo,
                pages: processPages(item.detailedInfo.pages)
              } : undefined
            }))
          }))
        }
        
        return processed
      })
      
      console.log('✅ Processed tabContents:', data.tabContents.map(tc => tc.tabId))
    } else {
      console.warn('⚠️ No tabContents found in data')
    }

    console.log('✅ Old format lesson loaded successfully')
    console.log('🔑 Tabs:', data.tabs?.length || 0)
    console.log('📦 TabContents:', data.tabContents?.length || 0)
    console.log('⌨️ Shortcuts:', data.shortcuts?.length || 0, 'sections')
    console.log('🎨 lessonIcon:', data.lessonIcon)
    
    // Final verification before caching
    console.log('🔍 Final data structure check:', {
      hasTabContents: !!data.tabContents,
      isArray: Array.isArray(data.tabContents),
      length: data.tabContents?.length,
      tabIds: data.tabContents?.map(tc => tc.tabId)
    })
    
    lessonCache.set(lessonId, data)
    return data
  }

  // 🔥 If NEW FORMAT - transform to match LessonTemplate expectations
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
    
    // Content - transform to old structure
    contentTitle: data.title,
    contentDescription: 'Explore the key concepts and tools',
    categories: (data.contentSections || []).map(section => ({
      name: section.sectionName,
      color: section.sectionColor || data.themeColor,
      items: (section.lessons || []).map(lesson => ({
        name: lesson.name,
        icon: lesson.icon,
        description: lesson.description,
        detailedInfo: {
          overview: lesson.overview,
          pages: (lesson.steps || []).map(step => {
            let mediaUrl = null
            if (step.videoUrl) {
              mediaUrl = step.videoUrl
              console.log('📤 New format using uploaded:', mediaUrl)
            } else if (step.videoPath) {
              mediaUrl = step.videoPath
              console.log('🔗 New format using path:', mediaUrl)
            }
            
            return {
              title: step.stepTitle,
              content: step.stepContent,
              image: mediaUrl,
              finalMediaUrl: mediaUrl,
              tips: step.tips || []
            }
          })
        }
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
    
    // ✅ IMPORTANT: Pass through tabContents if it exists in new format too
    tabContents: data.tabContents || []
  }

  console.log('✅ New format lesson transformed successfully')
  console.log('📊 Overview cards:', transformed.overviewCards?.length || 0)
  console.log('📚 Content sections:', transformed.categories?.length || 0)
  console.log('⌨️ Shortcut groups:', transformed.shortcuts?.length || 0)
  console.log('💪 Practice projects:', transformed.practiceProjects?.length || 0)
  console.log('🔑 Tabs:', transformed.tabs?.length || 0)
  console.log('📦 TabContents:', transformed.tabContents?.length || 0)
  console.log('🎨 lessonIcon:', transformed.lessonIcon)

  lessonCache.set(lessonId, transformed)
  return transformed
}

export function preloadLesson(lessonId) {
  loadLessonData(lessonId).catch(() => {})
}

export function clearLessonCache() {
  lessonCache.clear()
}