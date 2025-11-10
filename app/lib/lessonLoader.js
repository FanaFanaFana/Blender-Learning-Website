// FILE: app/lib/lessonLoader.js
import {client} from '@/sanity/lib/client'

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

  // 🔥 Fetch BOTH old and new format fields + lessonIcon
  const query = `
    *[_type == "lesson" && lessonId.current == $lessonId][0] {
      "id": lessonId.current,
      
      // ✅ CRITICAL: Fetch lessonIcon
      lessonIcon,
      
      // NEW FORMAT FIELDS
      title,
      subtitle,
      category,
      "themeColor": color,
      icon,
      duration,
      level,
      overviewCards[] {
        icon,
        title,
        content
      },
      contentSections[] {
        sectionName,
        sectionColor,
        lessons[] {
          name,
          icon,
          description,
          overview,
          steps[] {
            stepTitle,
            stepContent,
            "videoUrl": videoFile.asset->url,
            videoPath,
            tips[]
          }
        }
      },
      shortcuts[] {
        category,
        icon,
        items[] {
          action,
          key
        }
      },
      practiceProjects[] {
        title,
        description,
        duration,
        difficulty,
        skills[]
      },
      
      // OLD FORMAT FIELDS (from migration)
      themeColor,
      heroConfig {
        title,
        gradientText,
        subtitle,
        gradientColors
      },
      
      // ✅ NEW: Fetch enabledTabs instead of tabs
      enabledTabs[] {
        tabId,
        customLabel
      },
      
      // ✅ FALLBACK: Also fetch old tabs format for backwards compatibility
      tabs[] {
        id,
        icon,
        label
      },
      
      overviewTitle,
      overviewDescription,
      contentTitle,
      contentDescription,
      categories[] {
        name,
        color,
        icon,
        items[] {
          name,
          icon,
          description,
          detailedInfo {
            overview,
            pages[] {
              title,
              content,
              image,
              mediaType,
              "uploadedMediaUrl": uploadedMedia.asset->url,
              tips[]
            }
          }
        }
      },
      techniques[] {
        name,
        color,
        icon,
        items[] {
          name,
          icon,
          description,
          detailedInfo {
            overview,
            pages[] {
              title,
              content,
              image,
              mediaType,
              "uploadedMediaUrl": uploadedMedia.asset->url
            }
          }
        }
      },
      techniquesTitle,
      techniquesDescription,
      practiceTitle,
      practiceDescription
    }
  `

  const data = await client.fetch(query, {lessonId})

  if (!data) {
    throw new Error(`Lesson "${lessonId}" not found`)
  }

  console.log('🎨 Fetched lessonIcon from Sanity:', data.lessonIcon)

  // 🔥 Detect which format this lesson uses
  const isOldFormat = !!data.heroConfig && !!data.categories?.[0]?.items?.[0]?.detailedInfo
  const isNewFormat = !!data.contentSections

  console.log(`📖 Loading "${lessonId}" - Format: ${isOldFormat ? 'OLD (migrated)' : 'NEW (Sanity)'}`);

  // ✅ Transform enabledTabs to tabs format (for BOTH old and new formats)
  if (data.enabledTabs && data.enabledTabs.length > 0) {
    data.tabs = data.enabledTabs.map(tab => {
      const tabConfig = availableTabs.find(t => t.id === tab.tabId)
      return {
        id: tab.tabId,
        label: tab.customLabel,
        icon: tabConfig?.icon || '/Icons/info.svg'
      }
    })
    console.log('✅ Transformed enabledTabs:', data.tabs)
  }

  // ✅ CRITICAL FIX: Ensure lessonIcon has a value (not null)
  data.lessonIcon = data.lessonIcon || '/Icons/blender_icon_current_file.svg'
  console.log('🎨 After null-check, lessonIcon:', data.lessonIcon)

  // 🔥 If OLD FORMAT - return as-is (already correct structure)
  if (isOldFormat) {
    // ✅ FIXED: Process media URLs for old format with proper mediaType handling
    const processPages = (pages) => {
      if (!pages) return []
      return pages.map(page => {
        // Determine the final media URL based on mediaType
        let finalMediaUrl = null
        
        if (page.mediaType === 'upload' && page.uploadedMediaUrl) {
          // Use uploaded file from Sanity
          finalMediaUrl = page.uploadedMediaUrl
          console.log('📤 Using uploaded media:', finalMediaUrl)
        } else if (page.mediaType === 'url' && page.image) {
          // Use direct URL/path
          finalMediaUrl = page.image
          console.log('🔗 Using URL path:', finalMediaUrl)
        } else {
          // Fallback to any available media
          finalMediaUrl = page.uploadedMediaUrl || page.image
          console.log('🔄 Using fallback media:', finalMediaUrl)
        }
        
        return {
          ...page,
          image: finalMediaUrl,
          finalMediaUrl: finalMediaUrl  // Add explicit field for clarity
        }
      })
    }

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

    console.log('✅ Old format lesson loaded successfully')
    console.log('🔑 Tabs:', data.tabs?.length || 0)
    console.log('⌨️ Shortcuts:', data.shortcuts?.length || 0, 'sections')
    console.log('🎨 lessonIcon:', data.lessonIcon)
    if (data.shortcuts?.[0]) {
      console.log('   First shortcut section:', data.shortcuts[0].category, '- Items:', data.shortcuts[0].items?.length || 0)
    }
    lessonCache.set(lessonId, data)
    return data
  }

  // 🔥 If NEW FORMAT - transform to match LessonTemplate expectations
  const transformed = {
    themeColor: data.themeColor || '#3b82f6',
    lessonIcon: data.lessonIcon || '/Icons/blender_icon_current_file.svg', // ✅ FIXED: Added lessonIcon
    
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
    
    // ✅ Tabs - use transformed tabs from enabledTabs if available
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
            // ✅ FIXED: Determine media URL based on what's available
            let mediaUrl = null
            if (step.videoUrl) {
              mediaUrl = step.videoUrl  // Uploaded file from Sanity
              console.log('📤 New format using uploaded:', mediaUrl)
            } else if (step.videoPath) {
              mediaUrl = step.videoPath  // Direct path/URL
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
    
    // ✅ FIXED: Shortcuts - use 'items' instead of 'shortcutList'
    shortcuts: (data.shortcuts || []).map(cat => ({
      category: cat.category,
      icon: cat.icon,
      items: cat.items || []  // ✅ Changed from shortcutList to items
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
    }))
  }

  console.log('✅ New format lesson transformed successfully')
  console.log('📊 Overview cards:', transformed.overviewCards?.length || 0)
  console.log('📚 Content sections:', transformed.categories?.length || 0)
  console.log('⌨️ Shortcut groups:', transformed.shortcuts?.length || 0)
  console.log('💪 Practice projects:', transformed.practiceProjects?.length || 0)
  console.log('🔑 Tabs:', transformed.tabs?.length || 0)
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