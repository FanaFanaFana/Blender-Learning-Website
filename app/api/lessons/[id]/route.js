// FILE: app/api/lessons/[id]/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    
    const query = `
      *[_type == "lesson" && lessonId.current == $id][0] {
        lessonId,
        category,
        themeColor,
        lessonIcon,
        heroConfig,
        enabledTabs,
        overviewTitle,
        overviewDescription,
        overviewCards,
        contentTitle,
        contentDescription,
        categories[] {
          name,
          icon,
          color,
          items[] {
            name,
            description,
            icon,
            detailedInfo {
              overview,
              pages[] {
                title,
                content,
                mediaType,
                image,
                "uploadedMediaUrl": uploadedMedia.asset->url,
                tips
              }
            }
          }
        },
        techniquesTitle,
        techniquesDescription,
        techniques,
        shortcuts,
        practiceTitle,
        practiceDescription,
        practiceProjects
      }
    `
    
    const lesson = await client.fetch(query, { id })
    
    if (!lesson) {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      )
    }

    // ✅ Ensure lessonIcon has a default value if null
    lesson.lessonIcon = lesson.lessonIcon || '/Icons/blender_icon_current_file.svg'

    // Process media URLs
    if (lesson.categories) {
      lesson.categories = lesson.categories.map(cat => ({
        ...cat,
        items: (cat.items || []).map(item => ({
          ...item,
          detailedInfo: item.detailedInfo ? {
            ...item.detailedInfo,
            pages: (item.detailedInfo.pages || []).map(page => ({
              ...page,
              finalMediaUrl: page.mediaType === 'upload' 
                ? page.uploadedMediaUrl 
                : page.image
            }))
          } : undefined
        }))
      }))
    }
    
    console.log('📖 API returning lesson with lessonIcon:', lesson.lessonIcon)
    
    return NextResponse.json(lesson)
  } catch (error) {
    console.error('Error fetching lesson:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lesson' },
      { status: 500 }
    )
  }
}