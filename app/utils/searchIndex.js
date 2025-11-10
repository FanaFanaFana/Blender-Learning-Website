// FILE: app/utils/searchIndex.js
// This file indexes all your lesson data for searching from Sanity

import { client } from '@/sanity/lib/client'

function extractSearchableItems(lessonData, lessonInfo) {
  const items = []
  
  // Helper to create search item
  const createItem = (title, description, type, path, detailedInfo, color, tags = [], tabId = 'content', fullItem = null) => ({
    title,
    description,
    type,
    path,
    link: lessonInfo.link,
    color: color || lessonInfo.color,
    difficulty: lessonInfo.difficulty,
    tags: [...tags, ...lessonInfo.baseTags],
    detailedInfo,
    tabId,
    fullItem
  })

  // Index overview cards
  if (lessonData.overviewCards) {
    lessonData.overviewCards.forEach(card => {
      items.push(createItem(
        card.title,
        card.content,
        'concept',
        `${lessonInfo.title} → Overview`,
        null,
        lessonInfo.color,
        ['overview', 'concept'],
        'overview'
      ))
    })
  }

  // Index categories and their items
  if (lessonData.categories) {
    lessonData.categories.forEach(category => {
      const categoryItems = category.items || []
      categoryItems.forEach(item => {
        items.push(createItem(
          item.name,
          item.description,
          'tool',
          `${lessonInfo.title} → ${category.name}`,
          item.detailedInfo,
          category.color,
          ['tool', item.name.toLowerCase()],
          'content',
          { ...item, color: category.color }
        ))
      })
    })
  }

  // Index tabs
  if (lessonData.tabs) {
    lessonData.tabs.forEach(tab => {
      items.push(createItem(
        tab.label,
        `Tab: ${tab.label}`,
        'tab',
        `${lessonInfo.title} → ${tab.label}`,
        null,
        lessonInfo.color,
        ['tab', tab.label.toLowerCase()],
        tab.id
      ))
    })
  }

  return items
}

// Cache for search index
let searchIndexCache = null
let cacheTimestamp = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Build the complete search index from Sanity
export async function buildSearchIndex(forceRefresh = false) {
  // Return cached version if available and not expired
  if (!forceRefresh && searchIndexCache && cacheTimestamp) {
    const now = Date.now()
    if (now - cacheTimestamp < CACHE_DURATION) {
      console.log('Returning cached search index')
      return searchIndexCache
    }
  }

  try {
    const query = `
      *[_type == "lesson"] {
        "id": lessonId.current,
        title,
        subtitle,
        themeColor,
        tabs[] {
          id,
          icon,
          label
        },
        overviewTitle,
        overviewDescription,
        overviewCards[] {
          icon,
          title,
          content
        },
        categories[] {
          name,
          color,
          items[] {
            name,
            icon,
            description,
            detailedInfo {
              overview,
              pages[] {
                title,
                content,
                tips[]
              }
            }
          }
        }
      }
    `
    
    const lessons = await client.fetch(query)
    const allItems = []
    
    lessons.forEach(lesson => {
      // Determine difficulty based on lesson content complexity
      const difficulty = lesson.categories?.length > 5 ? 'Advanced' : 
                        lesson.categories?.length > 2 ? 'Intermediate' : 
                        'Beginner'
      
      // Generate base tags from title and categories
      const baseTags = [
  (lesson.heroConfig?.title || lesson.title || '').toLowerCase(),
  ...(lesson.categories?.map(c => c.name.toLowerCase()) || [])
]
      
      const lessonInfo = {
        title: lesson.title,
        link: `/lessons/${lesson.id}`,
        color: lesson.themeColor || '#3b82c4',
        difficulty,
        baseTags
      }
      
      const items = extractSearchableItems(lesson, lessonInfo)
      allItems.push(...items)
    })
    
    // Update cache
    searchIndexCache = allItems
    cacheTimestamp = Date.now()
    
    console.log(`Search index built: ${allItems.length} items from ${lessons.length} lessons`)
    return allItems
  } catch (error) {
    console.error('Error building search index:', error)
    return searchIndexCache || [] // Return cached version if available
  }
}

// Get or build search index
export async function getSearchIndex() {
  if (searchIndexCache) {
    return searchIndexCache
  }
  return await buildSearchIndex()
}

// Clear cache (useful for development or when content is updated)
export function clearSearchCache() {
  searchIndexCache = null
  cacheTimestamp = null
  console.log('Search index cache cleared')
}

// Search function
export function searchLessons(query, searchIndex) {
  if (!query || query.trim() === '') return []
  
  const lowerQuery = query.toLowerCase().trim()
  const words = lowerQuery.split(' ').filter(w => w.length > 0)
  
  return searchIndex.filter(item => {
    // Search in title
    const titleMatch = item.title.toLowerCase().includes(lowerQuery)
    
    // Search in description
    const descMatch = item.description?.toLowerCase().includes(lowerQuery)
    
    // Search in tags
    const tagMatch = item.tags.some(tag => 
      words.some(word => tag.includes(word))
    )
    
    // Search in path
    const pathMatch = item.path.toLowerCase().includes(lowerQuery)
    
    return titleMatch || descMatch || tagMatch || pathMatch
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aExact = a.title.toLowerCase() === lowerQuery ? 1 : 0
    const bExact = b.title.toLowerCase() === lowerQuery ? 1 : 0
    if (aExact !== bExact) return bExact - aExact
    
    // Then prioritize title starts with
    const aStarts = a.title.toLowerCase().startsWith(lowerQuery) ? 1 : 0
    const bStarts = b.title.toLowerCase().startsWith(lowerQuery) ? 1 : 0
    return bStarts - aStarts
  })
}

// Hook-style function for use in components
export async function useSearchIndex() {
  return await getSearchIndex()
}