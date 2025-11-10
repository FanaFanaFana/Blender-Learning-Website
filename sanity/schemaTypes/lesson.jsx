// FILE: sanity/schemaTypes/lesson.js
import {defineType, defineField} from 'sanity'
import {EyeOpenIcon, BookIcon, RocketIcon, TerminalIcon} from '@sanity/icons'
import {LessonImporter} from '../components/LessonImporter'

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

    // URL SLUG
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

    // CATEGORY (for filtering in compendium)
    defineField({
      name: 'category',
      title: '📁 Category (for Compendium page)',
      type: 'string',
      group: 'hero',
      description: 'Where this lesson appears in the main compendium',
      options: {
        list: [
          { title: '🎨 3D Modeling', value: 'modeling' },
          { title: '💡 Rendering', value: 'rendering' },
          { title: '🎬 Animation', value: 'animation' },
          { title: '🖼️ Texturing', value: 'texturing' },
          { title: '📝 Lesson Content', value: 'Lesson' },
          { title: '🖨️ 3D Printing', value: 'printing' },
          { title: '🎥 VFX Integration', value: 'vfx' },
          { title: '🎮 Game Assets', value: 'gameAssets' },
          { title: '✨ Hair & Fur', value: 'hairFur' },
          { title: '✏️ Grease Pencil', value: 'greaseGencil' },
          { title: '🔷 Geometry Nodes', value: 'geometryNodes' },
          { title: '📋 Project Management', value: 'projectManagement' },
          { title: '💧 Simulation', value: 'simulation' },
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }),

    // ✅ NEW: LESSON CARD ICON (shows in compendium & sidebar)
    defineField({
      name: 'lessonIcon',
      title: '🎨 Lesson Card Icon',
      type: 'string',
      group: 'hero',
      description: '📌 This icon appears on the lesson card in the Compendium and in the Sidebar. Use SVG path (e.g., /Icons/modifier.svg) or emoji',
      placeholder: '/Icons/modifier.svg',
      initialValue: '/Icons/blender_icon_current_file.svg'
    }),

    // HERO CONFIG
    defineField({
      name: 'heroConfig',
      title: '🎯 Hero Section',
      type: 'object',
      group: 'hero',
      fields: [
        { 
          name: 'title', 
          type: 'string', 
          title: 'Title (before gradient)', 
          placeholder: 'Working with', 
          initialValue: 'Working with' 
        },
        { 
          name: 'gradientText', 
          type: 'string', 
          title: '✨ Gradient Text (Main)', 
          placeholder: 'Modifiers', 
          validation: Rule => Rule.required() 
        },
        { 
          name: 'subtitle', 
          type: 'text', 
          title: 'Subtitle', 
          rows: 2 
        },
        { 
          name: 'gradientColors', 
          type: 'string', 
          title: 'CSS Gradient', 
          initialValue: 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)' 
        }
      ]
    }),

    // ✅ TAB SELECTION
    defineField({
      name: 'enabledTabs',
      title: '📑 Select Which Tabs to Show',
      type: 'array',
      group: 'hero',
      description: '⚠️ IMPORTANT: Only select tabs where you have content! The tab ID is fixed, but you can customize the label.',
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
            title: '🔑 Tab Type (Fixed - Choose Carefully!)',
            description: 'This determines what content shows. Cannot be changed after selecting!',
            options: {
              list: availableTabs.map(tab => ({
                title: `${tab.defaultLabel} - ${tab.description}`,
                value: tab.id
              })),
              layout: 'dropdown'
            },
            validation: Rule => Rule.required()
          },
          { 
            name: 'customLabel', 
            type: 'string', 
            title: '🏷️ Custom Label (What Users See)',
            description: 'This is what appears on the button. You can change this anytime!',
            placeholder: 'e.g., "Sculpting Brushes", "Essential Tools"',
            validation: Rule => Rule.required()
          }
        ],
        preview: {
          select: { 
            tabId: 'tabId', 
            customLabel: 'customLabel' 
          },
          prepare({tabId, customLabel}) {
            const tab = availableTabs.find(t => t.id === tabId)
            return {
              title: customLabel || tab?.defaultLabel || 'Unknown Tab',
              subtitle: `Type: ${tabId || 'unknown'} ${tab?.description || ''}`,
              media: () => (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  {tabId ? tabId.slice(0, 3).toUpperCase() : '???'}
                </div>
              )
            }
          }
        }
      }],
      validation: Rule => Rule.unique().error('You cannot add the same tab type twice!')
    }),

    // THEME COLOR
    defineField({
      name: 'themeColor',
      title: '🎨 Theme Color',
      type: 'string',
      group: 'hero',
      options: { list: colorOptions },
      validation: Rule => Rule.required()
    }),

    // OVERVIEW SECTION
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
        name: 'overviewCard',
        fields: [
          { 
            name: 'icon', 
            type: 'string', 
            title: 'Icon',
            description: '🎨 Emoji or path (e.g., ✨ or /Icons/tool.svg)',
            placeholder: '✨'
          },
          { name: 'title', type: 'string', title: 'Card Title', validation: Rule => Rule.required() },
          { name: 'content', type: 'text', title: 'Card Content', rows: 4, validation: Rule => Rule.required() }
        ],
        preview: {
          select: { title: 'title', subtitle: 'content', icon: 'icon' },
          prepare({title, subtitle, icon}) {
            return {
              title: title || 'Untitled Card',
              subtitle: subtitle?.substring(0, 60) + '...' || 'No content',
              media: () => (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: 'rgba(59,130,246,0.1)',
                  borderRadius: '3px'
                }}>
                  {icon?.startsWith('/') ? (
                    <img src={icon} alt="" style={{width: '20px', height: '20px'}} />
                  ) : (
                    icon || '✨'
                  )}
                </div>
              )
            }
          }
        }
      }]
    }),

    // MAIN CONTENT (Categories → Items → Pages)
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
      title: '🗂️ Categories (e.g., "Generate", "Deform")',
      type: 'array',
      group: 'content',
      description: 'These are the sections like "Generate", "Deform", etc.',
      
      of: [{
        type: 'object',
        name: 'category',
        fields: [
          { name: 'name', type: 'string', title: 'Category Name', validation: Rule => Rule.required() },
          { 
            name: 'icon', 
            type: 'string', 
            title: 'Icon',
            description: '🎨 Emoji or path (e.g., ✨ or /Icons/tool.svg)',
            placeholder: '✨'
          },
          { name: 'color', type: 'string', title: 'Color', options: {list: colorOptions} },
          {
            name: 'items',
            title: 'Items (e.g., "Array", "Bevel")',
            type: 'array',
            of: [{
              type: 'object',
              name: 'item',
              fields: [
                { name: 'name', type: 'string', title: 'Item Name (shown on card)', validation: Rule => Rule.required() },
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
                  title: 'Detailed Info (opens in modal)',
                  type: 'object',
                  fields: [
                    { 
                      name: 'overview', 
                      type: 'text', 
                      title: 'Overview', 
                      rows: 4 
                    },
                    {
                      name: 'pages',
                      title: 'Tutorial Pages',
                      type: 'array',
                      of: [{
                        type: 'object',
                        name: 'page',
                        fields: [
                          { 
                            name: 'title', 
                            type: 'string', 
                            title: 'Page Title',
                            validation: Rule => Rule.required()
                          },
                          { 
                            name: 'content', 
                            type: 'text', 
                            title: 'Content', 
                            rows: 5,
                            validation: Rule => Rule.required()
                          },
                          { 
                            name: 'mediaType', 
                            type: 'string', 
                            title: '📹 Media Type',
                            description: 'Choose how you want to add media',
                            options: {
                              list: [
                                { title: '🔗 URL/Path (e.g., /examples/video.mp4)', value: 'url' },
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
                            placeholder: '/examples/array-basic.mp4',
                            description: 'Direct path to video/image file',
                            hidden: ({parent}) => parent?.mediaType === 'upload'
                          },
                          {
                            name: 'uploadedMedia',
                            type: 'file',
                            title: '📤 Upload Video/Image',
                            description: 'Upload MP4, WebM, or image files',
                            options: {
                              accept: 'video/mp4,video/webm,video/quicktime,image/jpeg,image/png,image/gif,image/webp'
                            },
                            hidden: ({parent}) => parent?.mediaType === 'url'
                          },
                          { 
                            name: 'tips', 
                            type: 'array', 
                            title: 'Pro Tips', 
                            of: [{type: 'string'}] 
                          }
                        ],
                        preview: {
                          select: { 
                            title: 'title', 
                            content: 'content',
                            mediaType: 'mediaType',
                            hasUpload: 'uploadedMedia.asset',
                            hasUrl: 'image'
                          },
                          prepare({title, content, mediaType, hasUpload, hasUrl}) {
                            let mediaInfo = '📭 No media'
                            if (mediaType === 'upload' && hasUpload) {
                              mediaInfo = '📤 Uploaded file'
                            } else if (mediaType === 'url' && hasUrl) {
                              mediaInfo = '🔗 URL/Path'
                            }
                            
                            return {
                              title: title || 'Untitled Page',
                              subtitle: `${mediaInfo} • ${content?.substring(0, 40) || 'No content'}...`
                            }
                          }
                        }
                      }]
                    }
                  ]
                }
              ],
              preview: {
                select: { 
                  title: 'name', 
                  subtitle: 'description',
                  pages: 'detailedInfo.pages',
                  icon: 'icon'
                },
                prepare({title, subtitle, pages, icon}) {
                  return {
                    title: title || 'Untitled Item',
                    subtitle: `${pages?.length || 0} pages • ${subtitle?.substring(0, 40) || 'No description'}...`,
                    media: () => (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        background: 'rgba(59,130,246,0.1)',
                        borderRadius: '3px'
                      }}>
                        {icon?.startsWith('/') ? (
                          <img src={icon} alt="" style={{width: '20px', height: '20px'}} />
                        ) : (
                          icon || '📐'
                        )}
                      </div>
                    )
                  }
                }
              }
            }]
          }
        ],
        preview: {
          select: { title: 'name', items: 'items', color: 'color', icon: 'icon' },
          prepare({title, items, color, icon}) {
            return {
              title: title || 'Untitled Category',
              subtitle: `${items?.length || 0} items`,
              media: () => (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: color || '#3b82f6',
                  borderRadius: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: 'white'
                }}>
                  {icon?.startsWith('/') ? (
                    <img src={icon} alt="" style={{width: '20px', height: '20px', filter: 'brightness(0) invert(1)'}} />
                  ) : (
                    icon || '📁'
                  )}
                </div>
              )
            }
          }
        }
      }]
    }),

    // TECHNIQUES (optional - similar to categories)
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
      description: 'Optional: Similar to categories but for techniques',
      of: [{
        type: 'reference',
        to: [{ type: 'lesson' }],
        weak: true
      }]
    }),

    // SHORTCUTS
    defineField({
      name: 'shortcuts',
      title: '⌨️ Keyboard Shortcuts',
      type: 'array',
      group: 'shortcuts',
      of: [{
        type: 'object',
        fields: [
          { name: 'category', type: 'string', title: 'Category Name', placeholder: 'Selection Tools' },
          {
            name: 'items',
            title: 'Shortcuts',
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
                    title: action || 'Untitled',
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
    }),

    // PRACTICE
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
        ],
        preview: {
          select: { title: 'title', difficulty: 'difficulty', duration: 'duration' },
          prepare({title, difficulty, duration}) {
            return {
              title: title || 'Untitled Project',
              subtitle: `${difficulty || 'No difficulty'} • ${duration || 'No duration'}`
            }
          }
        }
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
      const categoryLabels = {
        modeling: '🎨 3D Modeling',
        rendering: '💡 Rendering',
        animation: '🎬 Animation',
        texturing: '🖼️ Texturing',
        Lesson: '📝 Lesson Content',
        printing: '🖨️ 3D Printing',
        vfx: '🎥 VFX Integration',
        gameAssets: '🎮 Game Assets',
        hairFur: '✨ Hair & Fur',
        greaseGencil: '✏️ Grease Pencil',
        geometryNodes: '🔷 Geometry Nodes',
        projectManagement: '📋 Project Management',
        simulation: '💧 Simulation'
      };
      
      const mainTitle = slug || gradientText || 'Untitled Lesson'
      const categoryLabel = categoryLabels[category] || category || 'No category'
      
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