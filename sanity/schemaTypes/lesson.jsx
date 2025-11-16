// FILE: sanity/schemaTypes/lesson.js
import {defineType, defineField} from 'sanity'
import {EyeOpenIcon, BookIcon, RocketIcon, TerminalIcon} from '@sanity/icons'
import {LessonImporter} from '../components/LessonImporter'
// ✅ Import centralized categories
import { getSanityCategories, CATEGORIES } from '@/app/config/categories'

// Keep color options as dropdown (these work fine)
const colorOptions = [
  { title: '🔵 Blue', value: '#3b82c4' },
  { title: '🟠 Orange', value: '#f97316' },
  { title: '🟣 Purple', value: '#8b5cf6' },
  { title: '🟢 Green', value: '#10b981' },
  { title: '🔴 Red', value: '#ef4444' },
  { title: '🔷 Cyan', value: '#06b6d4' },
  { title: '🟡 Yellow', value: '#eab308' },
  { title: '🩷 Pink', value: '#ec4899' },
]

// ✅ PREDEFINED TAB OPTIONS
const availableTabs = [
  { 
    id: 'overview', 
    defaultLabel: 'Overview', 
    icon: '/Icons/info.svg',
    description: '👁️ Shows overview cards - make sure to add cards in the "Overview Cards" tab!'
  },
  { 
    id: 'content', 
    defaultLabel: 'Content', 
    icon: '/Icons/modifier.svg',
    description: '📖 Shows main content categories - add categories in "Main Content" tab!'
  },
  { 
    id: 'techniques', 
    defaultLabel: 'Techniques', 
    icon: '/Icons/tool.svg',
    description: '🛠️ Shows techniques section (optional)'
  },
  { 
    id: 'shortcuts', 
    defaultLabel: 'Shortcuts', 
    icon: '/Icons/settings.svg',
    description: '⌨️ Shows keyboard shortcuts - add them in "Shortcuts" tab!'
  },
  { 
    id: 'practice', 
    defaultLabel: 'Practice', 
    icon: '/Icons/view_camera.svg',
    description: '💪 Shows practice projects - add them in "Practice" tab!'
  }
]

// ✅ Reusable field definitions for tab contents
const categoryItemFields = [
  { name: 'name', type: 'string', title: 'Item Name', validation: Rule => Rule.required() },
  { name: 'description', type: 'text', title: 'Short Description', rows: 2 },
  { 
    name: 'icon', 
    type: 'string', 
    title: 'Icon',
    description: '🎨 Emoji or path (e.g., ✨ or /Icons/tool.svg)',
    placeholder: '✨'
  },
  {
    name: 'detailedInfo',
    title: 'Detailed Info',
    type: 'object',
    fields: [
      { name: 'overview', type: 'text', title: 'Overview', rows: 4 },
      {
        name: 'pages',
        title: 'Tutorial Pages',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Page Title', validation: Rule => Rule.required() },
            { name: 'content', type: 'text', title: 'Content', rows: 5, validation: Rule => Rule.required() },
            { 
              name: 'mediaType', 
              type: 'string', 
              title: '🎬 Media Type',
              options: {
                list: [
                  { title: '🔗 URL/Path', value: 'url' },
                  { title: '📤 Upload File', value: 'upload' }
                ],
                layout: 'radio'
              },
              initialValue: 'url'
            },
            { 
              name: 'image', 
              type: 'string', 
              title: '🔗 Video/Image Path', 
              placeholder: '/examples/video.mp4',
              hidden: ({parent}) => parent?.mediaType === 'upload'
            },
            {
              name: 'uploadedMedia',
              type: 'file',
              title: '📤 Upload Video/Image',
              options: {
                accept: 'video/mp4,video/webm,video/quicktime,image/jpeg,image/png,image/gif,image/webp'
              },
              hidden: ({parent}) => parent?.mediaType === 'url'
            },
            { name: 'tips', type: 'array', title: 'Pro Tips', of: [{type: 'string'}] }
          ]
        }]
      }
    ]
  }
]

export default defineType({
  name: 'lesson',
  title: '📚 Lesson Page',
  type: 'document',
  icon: BookIcon,
  groups: [
    { name: 'hero', title: '🎯 Hero Section', default: true },
    { name: 'overview', title: '👁️ Overview Cards', icon: EyeOpenIcon },
    { name: 'content', title: '📖 Main Content', icon: BookIcon },
    { name: 'shortcuts', title: '⌨️ Shortcuts', icon: TerminalIcon },
    { name: 'practice', title: '💪 Practice', icon: RocketIcon },
  ],
  
  fields: [
    defineField({
      name: 'importLesson',
      title: '📥 Import Lesson Data',
      type: 'string',
      group: 'hero',
      description: '⚡ Quick import: Upload a JSON file to auto-fill all fields',
      components: {
        input: LessonImporter
      },
      hidden: false,
    }),

    defineField({
      name: 'lessonId',
      title: '🔗 URL Slug',
      type: 'slug',
      group: 'hero',
      description: 'Will be used in: /lessons/your-slug',
      options: { 
        source: (doc) => doc.heroConfig?.gradientText || doc.heroConfig?.title,
        maxLength: 96 
      },
      validation: Rule => Rule.required()
    }),

    // ✅ UPDATED: Now uses centralized categories
    defineField({
      name: 'category',
      title: '📁 Category (for Compendium page)',
      type: 'string',
      group: 'hero',
      description: 'Where this lesson appears in the main compendium',
      options: {
        list: getSanityCategories(), // ✅ Uses centralized config
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }),

    // ✅ NEW: Add themeColor field
    defineField({
      name: 'themeColor',
      title: '🎨 Theme Color',
      type: 'string',
      group: 'hero',
      description: 'Primary color for this lesson (hex code)',
      options: {
        list: colorOptions,
        layout: 'dropdown'
      },
      initialValue: '#3b82f6'
    }),

    defineField({
      name: 'lessonIcon',
      title: '🎨 Lesson Card Icon',
      type: 'string',
      group: 'hero',
      description: '📌 This icon appears on the lesson card in the Compendium and in the Sidebar',
      placeholder: '/Icons/modifier.svg',
      initialValue: '/Icons/blender_icon_current_file.svg'
    }),

    defineField({
      name: 'heroConfig',
      title: '🎯 Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'title', type: 'string', title: 'Title (before gradient)', placeholder: 'Working with', initialValue: 'Working with' },
        { name: 'gradientText', type: 'string', title: '✨ Gradient Text (Main)', placeholder: 'Modifiers', validation: Rule => Rule.required() },
        { name: 'subtitle', type: 'text', title: 'Subtitle', rows: 2 },
        { name: 'gradientColors', type: 'string', title: 'CSS Gradient', initialValue: 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)' }
      ]
    }),

    // ✅ NEW: Add legacy tabs field (hidden, for backward compatibility)
    defineField({
      name: 'tabs',
      title: '🔖 Tabs (Legacy)',
      type: 'array',
      group: 'hero',
      description: '⚠️ Deprecated: Use "enabledTabs" instead. This field exists for backward compatibility with imported JSON.',
      hidden: true,
      of: [{
        type: 'object',
        fields: [
          { name: 'id', type: 'string', title: 'Tab ID' },
          { name: 'icon', type: 'string', title: 'Icon' },
          { name: 'label', type: 'string', title: 'Label' }
        ]
      }]
    }),

    defineField({
      name: 'enabledTabs',
      title: '🔖 Select Which Tabs to Show',
      type: 'array',
      group: 'hero',
      description: '⚠️ Select tabs and customize their labels. You can add multiple tabs of the same type!',
      initialValue: [
        { tabId: 'overview', customLabel: 'Overview' },
        { tabId: 'content', customLabel: 'Content' }
      ],
      of: [{
        type: 'object',
        fields: [
          { 
            name: 'tabId', 
            type: 'string', 
            title: '🔖 Tab Type',
            description: 'The tab identifier (can be base type or numbered like content-2)',
            placeholder: 'e.g., content, content-2, shortcuts-3',
            validation: Rule => Rule.required().custom((value) => {
              const validPattern = /^(overview|content|techniques|shortcuts|practice)(-\d+)?$/
              if (!value || !validPattern.test(value)) {
                return 'Tab ID must be a valid type (overview, content, shortcuts, practice) with optional number (e.g., content-2)'
              }
              return true
            })
          },
          { 
            name: 'customLabel', 
            type: 'string', 
            title: '🏷️ Custom Label (What Users See)',
            description: 'This is what appears on the button',
            placeholder: 'e.g., "Sculpting Brushes", "Essential Tools"',
            validation: Rule => Rule.required()
          }
        ],
        preview: {
          select: { tabId: 'tabId', customLabel: 'customLabel' },
          prepare({tabId, customLabel}) {
            const baseType = tabId?.split('-')[0] || 'unknown'
            const icons = {
              overview: '👁️',
              content: '📖',
              techniques: '🛠️',
              shortcuts: '⌨️',
              practice: '💪'
            }
            
            return {
              title: customLabel || 'Unnamed Tab',
              subtitle: `${icons[baseType] || '📄'} ${tabId || 'unknown'}`,
              media: () => (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {icons[baseType] || '📄'}
                </div>
              )
            }
          }
        }
      }],
      validation: Rule => Rule.min(1).max(8).error('You must have between 1 and 8 tabs')
    }),

    defineField({
      name: 'tabContents',
      title: '📦 Additional Tab Contents',
      type: 'array',
      group: 'hero',
      description: '🔒 Contains content for numbered tabs (content-2, shortcuts-2, etc.). Managed by the builder.',
      hidden: false,
      readOnly: true,
      of: [{
        type: 'object',
        name: 'tabContent',
        fields: [
          { 
            name: 'tabId', 
            type: 'string', 
            title: 'Tab ID', 
            readOnly: true,
            validation: Rule => Rule.required()
          },
          
          // Overview fields
          { 
            name: 'overviewTitle', 
            type: 'string', 
            title: 'Overview Title',
            hidden: ({parent}) => !parent?.tabId?.includes('overview')
          },
          { 
            name: 'overviewDescription', 
            type: 'text', 
            title: 'Overview Description',
            hidden: ({parent}) => !parent?.tabId?.includes('overview')
          },
          { 
            name: 'overviewCards', 
            type: 'array', 
            title: 'Overview Cards',
            hidden: ({parent}) => !parent?.tabId?.includes('overview'),
            of: [{
              type: 'object',
              fields: [
                { name: 'icon', type: 'string', title: 'Icon' },
                { name: 'title', type: 'string', title: 'Card Title' },
                { name: 'content', type: 'text', title: 'Card Content', rows: 4 }
              ],
              preview: {
                select: { title: 'title', icon: 'icon' },
                prepare({title, icon}) {
                  return {
                    title: title || 'Untitled Card',
                    subtitle: icon || '✨'
                  }
                }
              }
            }]
          },
          
          // Content fields
          { 
            name: 'contentTitle', 
            type: 'string', 
            title: 'Content Title',
            hidden: ({parent}) => !parent?.tabId?.includes('content')
          },
          { 
            name: 'contentDescription', 
            type: 'text', 
            title: 'Content Description',
            hidden: ({parent}) => !parent?.tabId?.includes('content')
          },
          { 
            name: 'categories', 
            type: 'array', 
            title: 'Categories',
            hidden: ({parent}) => !parent?.tabId?.includes('content'),
            of: [{
              type: 'object',
              fields: [
                { name: 'name', type: 'string', title: 'Category Name' },
                { name: 'icon', type: 'string', title: 'Icon' },
                { name: 'color', type: 'string', title: 'Color', options: {list: colorOptions} },
                {
                  name: 'items',
                  type: 'array',
                  of: [{
                    type: 'object',
                    fields: categoryItemFields
                  }]
                }
              ],
              preview: {
                select: { name: 'name', icon: 'icon', items: 'items' },
                prepare({name, icon, items}) {
                  return {
                    title: name || 'Untitled Category',
                    subtitle: `${icon || '📁'} • ${items?.length || 0} items`
                  }
                }
              }
            }]
          },
          
          // Shortcuts fields
          { 
            name: 'shortcuts', 
            type: 'array', 
            title: 'Shortcuts',
            hidden: ({parent}) => !parent?.tabId?.includes('shortcuts'),
            of: [{
              type: 'object',
              fields: [
                { name: 'category', type: 'string', title: 'Category Name' },
                { 
                  name: 'icon', 
                  type: 'string', 
                  title: 'Icon',
                  description: '🎨 Optional icon for this shortcut category'
                },
                {
                  name: 'items',
                  type: 'array',
                  of: [{
                    type: 'object',
                    fields: [
                      { name: 'action', type: 'string', title: 'Action' },
                      { name: 'key', type: 'string', title: 'Key Combination' }
                    ],
                    preview: {
                      select: { action: 'action', key: 'key' },
                      prepare({action, key}) {
                        return {
                          title: action || 'Untitled Action',
                          subtitle: key || 'No key'
                        }
                      }
                    }
                  }]
                }
              ],
              preview: {
                select: { category: 'category', items: 'items' },
                prepare({category, items}) {
                  return {
                    title: category || 'Untitled Category',
                    subtitle: `${items?.length || 0} shortcuts`
                  }
                }
              }
            }]
          },
          
          // Practice fields
          { 
            name: 'practiceTitle', 
            type: 'string', 
            title: 'Practice Title',
            hidden: ({parent}) => !parent?.tabId?.includes('practice')
          },
          { 
            name: 'practiceDescription', 
            type: 'text', 
            title: 'Practice Description',
            hidden: ({parent}) => !parent?.tabId?.includes('practice')
          },
          { 
            name: 'practiceProjects', 
            type: 'array', 
            title: 'Practice Projects',
            hidden: ({parent}) => !parent?.tabId?.includes('practice'),
            of: [{
              type: 'object',
              fields: [
                { name: 'title', type: 'string', title: 'Project Title' },
                { name: 'desc', type: 'text', title: 'Description', rows: 3 },
                { name: 'duration', type: 'string', title: 'Duration' },
                { name: 'difficulty', type: 'string', title: 'Difficulty', options: {list: ['Beginner', 'Intermediate', 'Advanced']} },
                { name: 'skills', type: 'array', title: 'Skills', of: [{type: 'string'}] }
              ],
              preview: {
                select: { title: 'title', difficulty: 'difficulty', duration: 'duration' },
                prepare({title, difficulty, duration}) {
                  return {
                    title: title || 'Untitled Project',
                    subtitle: `${difficulty || 'Beginner'} • ${duration || '30 min'}`
                  }
                }
              }
            }]
          }
        ],
        preview: {
          select: { 
            tabId: 'tabId',
            overviewCards: 'overviewCards',
            categories: 'categories',
            shortcuts: 'shortcuts',
            practiceProjects: 'practiceProjects'
          },
          prepare({tabId, overviewCards, categories, shortcuts, practiceProjects}) {
            const tabType = tabId?.split('-')[0] || 'unknown'
            let contentSummary = []
            
            if (overviewCards?.length) contentSummary.push(`${overviewCards.length} cards`)
            if (categories?.length) contentSummary.push(`${categories.length} categories`)
            if (shortcuts?.length) contentSummary.push(`${shortcuts.length} shortcut groups`)
            if (practiceProjects?.length) contentSummary.push(`${practiceProjects.length} projects`)
            
            const icons = {
              overview: '👁️',
              content: '📖',
              shortcuts: '⌨️',
              practice: '💪'
            }
            
            return {
              title: `${icons[tabType] || '📄'} ${tabId || 'Unknown Tab'}`,
              subtitle: contentSummary.join(', ') || '⚠️ Empty - add content in builder'
            }
          }
        }
      }],
      validation: Rule => Rule.custom((tabContents) => {
        if (!tabContents || tabContents.length === 0) return true
        
        const invalidTabs = tabContents.filter(tab => !tab.tabId)
        if (invalidTabs.length > 0) {
          return 'All tabs must have a tabId'
        }
        
        return true
      })
    }),

    // OVERVIEW SECTION (for main overview tab)
    defineField({
      name: 'overviewTitle',
      title: '📌 Overview Title',
      type: 'string',
      group: 'overview',
      placeholder: 'Welcome to this lesson!'
    }),

    defineField({
      name: 'overviewDescription',
      title: '📝 Overview Description',
      type: 'text',
      group: 'overview',
      rows: 2
    }),

    defineField({
      name: 'overviewCards',
      title: '💡 Info Cards',
      type: 'array',
      group: 'overview',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', type: 'string', title: 'Icon', placeholder: '✨' },
          { name: 'title', type: 'string', title: 'Card Title', validation: Rule => Rule.required() },
          { name: 'content', type: 'text', title: 'Card Content', rows: 4, validation: Rule => Rule.required() }
        ]
      }]
    }),

    // MAIN CONTENT (for main content tab)
    defineField({
      name: 'contentTitle',
      title: '📚 Content Section Title',
      type: 'string',
      group: 'content',
      placeholder: 'Modifier Types'
    }),

    defineField({
      name: 'contentDescription',
      title: '📝 Content Description',
      type: 'text',
      group: 'content',
      rows: 2
    }),

    defineField({
      name: 'categories',
      title: '🗂️ Categories',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Category Name', validation: Rule => Rule.required() },
          { name: 'icon', type: 'string', title: 'Icon', placeholder: '✨' },
          { name: 'color', type: 'string', title: 'Color', options: {list: colorOptions} },
          {
            name: 'items',
            type: 'array',
            of: [{
              type: 'object',
              fields: categoryItemFields
            }]
          }
        ]
      }]
    }),

    defineField({
      name: 'techniquesTitle',
      title: '🎯 Techniques Title',
      type: 'string',
      group: 'content'
    }),

    defineField({
      name: 'techniquesDescription',
      title: '📝 Techniques Description',
      type: 'text',
      group: 'content',
      rows: 2
    }),

    defineField({
      name: 'techniques',
      title: '🛠️ Techniques Section',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Category Name', validation: Rule => Rule.required() },
          { name: 'icon', type: 'string', title: 'Icon', placeholder: '✨' },
          { name: 'color', type: 'string', title: 'Color', options: {list: colorOptions} },
          {
            name: 'items',
            type: 'array',
            of: [{
              type: 'object',
              fields: categoryItemFields
            }]
          }
        ]
      }]
    }),

    // SHORTCUTS (for main shortcuts tab)
    defineField({
      name: 'shortcuts',
      title: '⌨️ Keyboard Shortcuts',
      type: 'array',
      group: 'shortcuts',
      of: [{
        type: 'object',
        fields: [
          { name: 'category', type: 'string', title: 'Category Name' },
          {
            name: 'items',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                { name: 'action', type: 'string', title: 'Action' },
                { name: 'key', type: 'string', title: 'Key Combination' }
              ]
            }]
          }
        ]
      }]
    }),

    // PRACTICE (for main practice tab)
    defineField({
      name: 'practiceTitle',
      title: '💪 Practice Title',
      type: 'string',
      group: 'practice'
    }),

    defineField({
      name: 'practiceDescription',
      title: '📝 Practice Description',
      type: 'text',
      group: 'practice',
      rows: 2
    }),

    defineField({
      name: 'practiceProjects',
      title: '🎯 Practice Projects',
      type: 'array',
      group: 'practice',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Project Title' },
          { name: 'desc', type: 'text', title: 'Description', rows: 3 },
          { name: 'duration', type: 'string', title: 'Duration' },
          { name: 'difficulty', type: 'string', title: 'Difficulty', options: {list: ['Beginner', 'Intermediate', 'Advanced']} },
          { name: 'skills', type: 'array', title: 'Skills', of: [{type: 'string'}] }
        ]
      }]
    }),
  ],

  preview: {
    select: {
      slug: 'lessonId.current',
      gradientText: 'heroConfig.gradientText',
      category: 'category',
      color: 'themeColor',
      icon: 'lessonIcon'
    },
    prepare({slug, gradientText, category, color, icon}) {
      // ✅ UPDATED: Now uses centralized categories for labels
      const categoryLabel = CATEGORIES[category] 
        ? `${CATEGORIES[category].emoji} ${CATEGORIES[category].label}` 
        : category || 'No category'
      
      const mainTitle = slug || gradientText || 'Untitled Lesson'
      
      return {
        title: mainTitle,
        subtitle: `${categoryLabel} • ${gradientText || 'No title'}`,
        media: () => (
          <div style={{
            width: '100%',
            height: '100%',
            background: color || '#3b82f6',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {icon?.startsWith('/') ? (
              <img src={icon} alt="" style={{width: '20px', height: '20px', filter: 'brightness(0) invert(1)'}} />
            ) : (
              mainTitle ? mainTitle.slice(0, 2).toUpperCase() : '??'
            )}
          </div>
        )
      }
    }
  }
})