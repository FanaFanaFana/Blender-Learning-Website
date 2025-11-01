// FILE: app/utils/searchIndex.js
// This file indexes all your lesson data for searching

// Import all your lesson data files - EXACT filenames from your directory
import { characterModelingLessonData } from '../../data/lessons/characterModelingLessonData'
import { editModeLessonData } from '../../data/lessons/editModeLessonData'
import { firstModelLessonData } from '../../data/lessons/firstModelLessonData'
import { interfaceLessonData } from '../../data/lessons/interfaceLessonData'
import { modifierLessonData } from '../../data/lessons/modifierLessonData'
import { sculptingLessonData } from '../../data/lessons/sculptingLessonData'
import { hardsurfaceLessonData } from '../../data/lessons/hardsurfaceLessonData'
import { productDesignLessonData } from '../../data/lessons/productDesignLessonData'
import { materialLessonData } from '../../data/lessons/materialLessonData'

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
    tabId, // Which tab to switch to
    fullItem // The complete item data for the modal
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

  // Index modeling steps (categorized)
  if (lessonData.modelingSteps) {
    lessonData.modelingSteps.forEach(category => {
      category.steps.forEach(step => {
        items.push(createItem(
          step.name,
          step.description,
          'step',
          `${lessonInfo.title} → Steps → ${category.name}`,
          step.detailedInfo,
          category.color,
          ['step', 'tutorial', step.name.toLowerCase()],
          'content',
          { ...step, color: category.color }
        ))
      })
    })
  }

  // Index selection modes (flat array)
  if (lessonData.selectionModes) {
    lessonData.selectionModes.forEach(mode => {
      items.push(createItem(
        mode.name,
        mode.description,
        'mode',
        `${lessonInfo.title} → Modes`,
        mode.detailedInfo,
        mode.color,
        ['mode', 'selection', mode.name.toLowerCase()],
        'content',
        mode
      ))
    })
  }

  // Index essential tools (can be flat or categorized)
  if (lessonData.essentialTools) {
    if (lessonData.essentialTools[0]?.tools) {
      // Categorized
      lessonData.essentialTools.forEach(category => {
        category.tools.forEach(tool => {
          items.push(createItem(
            tool.name,
            tool.description,
            'tool',
            `${lessonInfo.title} → Tools → ${category.name}`,
            tool.detailedInfo,
            category.color,
            ['tool', tool.name.toLowerCase()],
            'content',
            { ...tool, color: category.color }
          ))
        })
      })
    } else {
      // Flat array
      lessonData.essentialTools.forEach(tool => {
        items.push(createItem(
          tool.name,
          tool.description,
          'tool',
          `${lessonInfo.title} → Tools`,
          tool.detailedInfo,
          tool.color || lessonInfo.color,
          ['tool', tool.name.toLowerCase()],
          'content',
          tool
        ))
      })
    }
  }

  // Index categories (brushes, techniques, etc.)
  if (lessonData.categories) {
    lessonData.categories.forEach(category => {
      const categoryItems = category.items || category.brushes || []
      categoryItems.forEach(item => {
        items.push(createItem(
          item.name,
          item.description,
          category.name.toLowerCase().includes('brush') ? 'brush' : 'tool',
          `${lessonInfo.title} → ${category.name}`,
          item.detailedInfo,
          category.color,
          ['tool', 'brush', item.name.toLowerCase()],
          'content',
          { ...item, color: category.color }
        ))
      })
    })
  }

  // Index techniques
  if (lessonData.techniques) {
    lessonData.techniques.forEach(category => {
      const techniqueItems = category.items || category.methods || []
      techniqueItems.forEach(technique => {
        items.push(createItem(
          technique.name,
          technique.description,
          'technique',
          `${lessonInfo.title} → Techniques → ${category.name}`,
          technique.detailedInfo,
          category.color,
          ['technique', 'method', technique.name.toLowerCase()],
          'techniques',
          { ...technique, color: category.color }
        ))
      })
    })
  }

  // Index workflow steps
  if (lessonData.workflowSteps) {
    lessonData.workflowSteps.forEach(category => {
      category.steps.forEach(step => {
        items.push(createItem(
          step.name,
          step.description,
          'workflow',
          `${lessonInfo.title} → Workflow → ${category.name}`,
          step.detailedInfo,
          category.color,
          ['workflow', 'process', step.name.toLowerCase()],
          'content',
          { ...step, color: category.color }
        ))
      })
    })
  }

  // Index modifier categories
  if (lessonData.modifierCategories) {
    lessonData.modifierCategories.forEach(category => {
      category.modifiers.forEach(modifier => {
        items.push(createItem(
          modifier.name,
          modifier.description,
          'modifier',
          `${lessonInfo.title} → Modifiers → ${category.name}`,
          modifier.detailedInfo,
          category.color,
          ['modifier', modifier.name.toLowerCase()],
          'content',
          { ...modifier, color: category.color }
        ))
      })
    })
  }

  // Index interface areas
  if (lessonData.interfaceAreas) {
    lessonData.interfaceAreas.forEach(category => {
      category.areas.forEach(area => {
        items.push(createItem(
          area.name,
          area.description,
          'interface',
          `${lessonInfo.title} → Areas → ${category.name}`,
          area.detailedInfo,
          category.color,
          ['interface', 'ui', area.name.toLowerCase()],
          'content',
          { ...area, color: category.color }
        ))
      })
    })
  }

  // Index shortcuts
  if (lessonData.shortcuts) {
    lessonData.shortcuts.forEach(section => {
      section.items.forEach(shortcut => {
        items.push(createItem(
          shortcut.action,
          `Keyboard shortcut: ${shortcut.key}`,
          'shortcut',
          `${lessonInfo.title} → Shortcuts → ${section.category}`,
          null,
          lessonInfo.color,
          ['shortcut', 'keyboard', shortcut.key.toLowerCase(), shortcut.action.toLowerCase()],
          'shortcuts'
        ))
      })
    })
  }

  // Index core principles (hard surface)
  if (lessonData.corePrinciples) {
    lessonData.corePrinciples.forEach(category => {
      category.topics.forEach(topic => {
        items.push(createItem(
          topic.name,
          topic.description,
          'principle',
          `${lessonInfo.title} → Principles → ${category.name}`,
          topic.detailedInfo,
          category.color,
          ['principle', 'concept', topic.name.toLowerCase()],
          'content',
          { ...topic, color: category.color }
        ))
      })
    })
  }

  return items
}

// Define all your lessons with their metadata
const lessons = [
  {
    data: characterModelingLessonData,
    title: 'Character Modeling',
    link: '/CharacterModelingLesson',
    color: '#ec4899',
    difficulty: 'Advanced',
    baseTags: ['character', 'modeling', 'advanced']
  },
  {
    data: editModeLessonData,
    title: 'Edit Mode',
    link: '/EditModeLesson',
    color: '#3b82c4',
    difficulty: 'Beginner',
    baseTags: ['edit', 'mode', 'beginner']
  },
  {
    data: firstModelLessonData,
    title: 'First 3D Model',
    link: '/FirstModelLesson',
    color: '#3b82c4',
    difficulty: 'Beginner',
    baseTags: ['modeling', 'beginner', 'basics']
  },
  {
    data: interfaceLessonData,
    title: 'Interface',
    link: '/InterfaceLesson',
    color: '#3b82c4',
    difficulty: 'Beginner',
    baseTags: ['interface', 'ui', 'beginner']
  },
  {
    data: modifierLessonData,
    title: 'Modifiers',
    link: '/modifierlesson',
    color: '#3b82c4',
    difficulty: 'Intermediate',
    baseTags: ['modifiers', 'intermediate']
  },
  {
    data: sculptingLessonData,
    title: 'Sculpting',
    link: '/SculptingLesson',
    color: '#3b82c4',
    difficulty: 'Intermediate',
    baseTags: ['sculpting', 'intermediate']
  },
  {
    data: hardsurfaceLessonData,
    title: 'Hard Surface',
    link: '/HardSurfaceLesson',
    color: '#3b82c4',
    difficulty: 'Advanced',
    baseTags: ['hard surface', 'advanced']
  },
  {
    data: productDesignLessonData,
    title: 'Product Design',
    link: '/ProductDesignLesson',
    color: '#3b82c4',
    difficulty: 'Advanced',
    baseTags: ['product', 'design', 'advanced']
  },
  {
    data: materialLessonData,
    title: 'Materials & Shading',
    link: '/MaterialLesson',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['materials', 'shading', 'intermediate']
  }
]

// Build the complete search index
export function buildSearchIndex() {
  const allItems = []
  
  lessons.forEach(lesson => {
    const items = extractSearchableItems(lesson.data, lesson)
    allItems.push(...items)
  })
  
  console.log(`Search index built: ${allItems.length} items from ${lessons.length} lessons`)
  return allItems
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