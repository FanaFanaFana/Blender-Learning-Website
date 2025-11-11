// FILE: components/builder/builderUtils.js

// Generate unique keys for Sanity
export const generateKey = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

// Add _key to all array items recursively
export const addKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(item => {
      if (typeof item === 'object' && item !== null) {
        return { _key: generateKey(), ...addKeys(item) }
      }
      return item
    })
  } else if (obj && typeof obj === 'object') {
    const newObj = {}
    for (const key in obj) {
      newObj[key] = addKeys(obj[key])
    }
    return newObj
  }
  return obj
}

// Remove undefined/null fields
export const cleanObject = (obj) => {
  if (Array.isArray(obj)) return obj.map(cleanObject)
  if (obj && typeof obj === 'object') {
    const cleaned = Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== null) {
        acc[key] = cleanObject(value)
      }
      return acc
    }, {})
    return cleaned
  }
  return obj
}

// Sanitize lesson data for Sanity export
export const sanitizeLesson = (lesson) => {
  console.log('🧹 SANITIZE START - lessonIcon:', lesson.lessonIcon)
  
  // ✅ First, organize tab content data
  const tabContentsArray = []
  
  // Process each enabled tab
  if (lesson.enabledTabs) {
    lesson.enabledTabs.forEach(tab => {
      const tabId = tab.tabId
      const tabType = tabId.split('-')[0] // Get base type (overview, content, shortcuts, practice)
      
      // Skip the main tabs (they use the root fields)
      if (!tabId.includes('-')) return
      
      // Find existing tab content or create new
      let tabContent = lesson.tabContents?.find(tc => tc.tabId === tabId)
      if (!tabContent) {
        tabContent = { tabId }
      }
      
      // Based on tab type, include the relevant fields
      const content = {
        _key: tabContent._key || generateKey(),
        tabId: tabId,
        _type: 'object'
      }
      
      if (tabType === 'overview') {
        content.overviewTitle = tabContent.overviewTitle || `Overview - ${tab.customLabel}`
        content.overviewDescription = tabContent.overviewDescription || ''
        content.overviewCards = (tabContent.overviewCards || []).map(card => ({
          _key: card._key || generateKey(),
          _type: 'object',
          icon: card.icon || '✨',
          title: card.title || 'Card Title',
          content: card.content || 'Card content'
        }))
      }
      
      if (tabType === 'content') {
        content.contentTitle = tabContent.contentTitle || `Content - ${tab.customLabel}`
        content.contentDescription = tabContent.contentDescription || ''
        content.categories = (tabContent.categories || []).map(cat => ({
          _key: cat._key || generateKey(),
          _type: 'object',
          name: cat.name || 'Category',
          icon: cat.icon || '📁',
          color: cat.color || '#3b82f6',
          items: (cat.items || []).map(item => ({
            _key: item._key || generateKey(),
            _type: 'object',
            name: item.name || 'Item',
            description: item.description || 'Description',
            icon: item.icon || '📄',
            detailedInfo: {
              _type: 'object',
              overview: item.detailedInfo?.overview || '',
              pages: (item.detailedInfo?.pages || []).map(page => ({
                _key: page._key || generateKey(),
                _type: 'object',
                title: page.title || 'Page Title',
                content: page.content || 'Page content',
                mediaType: page.mediaType || 'url',
                image: page.mediaType === 'url' ? (page.image || page.finalMediaUrl || '') : '',
                tips: (page.tips || []).filter(t => t && t.trim())
              }))
            }
          }))
        }))
      }
      
     if (tabType === 'shortcuts') {
  const shortcutsData = tabContent.shortcuts || []
  
  // Only add shortcuts field if there's actual data
  if (shortcutsData.length > 0) {
    content.shortcuts = shortcutsData.map(section => ({
      _key: section._key || generateKey(),
      _type: 'object',
      category: section.category || 'Category',
      icon: section.icon || '', // ✅ Add icon field
      items: (section.items || []).map(shortcut => ({
        _key: shortcut._key || generateKey(),
        _type: 'object',
        action: shortcut.action || 'Action',
        key: shortcut.key || 'Key'
      }))
    }))
  }
}

if (tabType === 'practice') {
  const practiceProjects = tabContent.practiceProjects || []
  
  // Only add if there's actual data
  if (practiceProjects.length > 0 || tabContent.practiceTitle || tabContent.practiceDescription) {
    if (tabContent.practiceTitle) content.practiceTitle = tabContent.practiceTitle
    if (tabContent.practiceDescription) content.practiceDescription = tabContent.practiceDescription
    
    content.practiceProjects = practiceProjects.map(proj => ({
      _key: proj._key || generateKey(),
      _type: 'object',
      title: proj.title || 'Practice Project',
      desc: proj.desc || 'Complete this exercise',
      duration: proj.duration || '30 min',
      difficulty: proj.difficulty || 'Beginner',
      skills: proj.skills || []
    }))
  }
}
      
      // Only add if there's actual content
      if (Object.keys(content).length > 3) { // More than just _key, tabId, _type
        tabContentsArray.push(content)
      }
    })
  }

  const sanitized = {
    _type: 'lesson',
    lessonId: lesson.lessonId || { current: 'untitled-lesson' },
    category: lesson.category || 'Lesson',
    themeColor: lesson.themeColor || '#3b82f6',
    lessonIcon: lesson.lessonIcon || '/Icons/blender_icon_current_file.svg',
    
    heroConfig: {
      title: lesson.heroConfig?.title || 'Working with',
      gradientText: lesson.heroConfig?.gradientText || 'New Topic',
      subtitle: lesson.heroConfig?.subtitle || 'Learn the fundamentals',
      gradientColors: lesson.heroConfig?.gradientColors || 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)'
    },
    
    enabledTabs: (lesson.enabledTabs || []).map(tab => ({
      _key: tab._key || generateKey(),
      _type: 'object',
      tabId: tab.tabId || tab.id || 'overview',
      customLabel: tab.customLabel || tab.label || 'Tab'
    })),
    
    // ✅ Include the organized tab contents
    tabContents: tabContentsArray,
    
    overviewTitle: lesson.overviewTitle || 'What You\'ll Learn',
    overviewDescription: lesson.overviewDescription || 'This lesson covers the fundamentals',
    overviewCards: (lesson.overviewCards || []).map(card => ({
      icon: card.icon || '✨',
      title: card.title || 'Card Title',
      content: card.content || 'Card content'
    })),
    
    contentTitle: lesson.contentTitle || 'Main Content',
    contentDescription: lesson.contentDescription || 'Explore the topics below',
    categories: (lesson.categories || []).map(cat => ({
      name: cat.name || 'Category',
      icon: cat.icon || '📁',
      color: cat.color || '#3b82f6',
      items: (cat.items || []).map(item => ({
        name: item.name || 'Item',
        description: item.description || 'Description',
        icon: item.icon || '📄',
        detailedInfo: {
          overview: item.detailedInfo?.overview || '',
          pages: (item.detailedInfo?.pages || []).map(page => ({
            title: page.title || 'Page Title',
            content: page.content || 'Page content',
            mediaType: page.mediaType || 'url',
            image: page.mediaType === 'url' ? (page.image || page.finalMediaUrl || '') : '',
            tips: (page.tips || []).filter(t => t && t.trim())
          }))
        }
      }))
    })),
    
    techniquesTitle: lesson.techniquesTitle || '',
    techniquesDescription: lesson.techniquesDescription || '',
    techniques: lesson.techniques || [],
    
    shortcuts: (lesson.shortcuts || []).map(section => ({
      category: section.category || 'Category',
      icon: section.icon,
      items: (section.items || []).length > 0 
        ? section.items.map(shortcut => ({
            action: shortcut.action || 'Action',
            key: shortcut.key || 'Key'
          }))
        : [{ action: 'Select All', key: 'A' }]
    })),
    
    practiceTitle: lesson.practiceTitle || 'Practice Projects',
    practiceDescription: lesson.practiceDescription || 'Try these exercises',
    practiceProjects: (lesson.practiceProjects || []).map(proj => ({
      title: proj.title || 'Practice Project',
      desc: proj.desc || 'Complete this exercise',
      duration: proj.duration || '30 min',
      difficulty: proj.difficulty || 'Beginner',
      skills: proj.skills || []
    }))
  }

  console.log('✅ SANITIZE DONE - lessonIcon:', sanitized.lessonIcon)
  console.log('📦 TabContents count:', sanitized.tabContents?.length || 0)
  console.log('🔍 Full sanitized object keys:', Object.keys(sanitized))
  
  const cleaned = cleanObject(sanitized)
  console.log('🧹 AFTER CLEAN - lessonIcon:', cleaned.lessonIcon)
  console.log('📦 After clean - TabContents count:', cleaned.tabContents?.length || 0)
  
  return cleaned
}

// Download lesson as JSON
export const downloadLesson = (lesson) => {
  console.log('💾 DOWNLOAD START - lessonIcon:', lesson.lessonIcon)
  const sanitized = sanitizeLesson(lesson)
  console.log('🧹 AFTER SANITIZE - lessonIcon:', sanitized.lessonIcon)
  const withKeys = addKeys(sanitized)
  console.log('🔑 AFTER ADD KEYS - lessonIcon:', withKeys.lessonIcon)
  
  const jsonString = JSON.stringify(withKeys, null, 2)
  console.log('📝 JSON string includes lessonIcon:', jsonString.includes('lessonIcon'))
  
  if (!jsonString.includes('lessonIcon')) {
    console.error('❌ CRITICAL: lessonIcon is missing from JSON string!')
    console.log('🔍 withKeys object:', withKeys)
  }
  
  const filename = withKeys.lessonId?.current || 'lesson'
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${filename}.json`
  a.click()
  URL.revokeObjectURL(url)
  
  console.log('💾 DOWNLOAD COMPLETE')
}

// Copy lesson JSON to clipboard
export const copyLesson = (lesson) => {
  console.log('📋 COPY START - lessonIcon:', lesson.lessonIcon)
  const sanitized = sanitizeLesson(lesson)
  const withKeys = addKeys(sanitized)
  const jsonString = JSON.stringify(withKeys, null, 2)
  navigator.clipboard.writeText(jsonString)
  console.log('📋 COPY COMPLETE - includes lessonIcon:', jsonString.includes('lessonIcon'))
}