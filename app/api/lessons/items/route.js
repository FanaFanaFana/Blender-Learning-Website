import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `
      *[_type == "lesson" && !(_id in path("drafts.**"))] {
        "lessonId": lessonId.current,
        "lessonTitle": heroConfig.gradientText,
        "themeColor": coalesce(themeColor, "#3b82f6"),
        categories[] {
          name,
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
                uploadedMediaUrl,
                tips
              }
            }
          }
        },
        tabContents[] {
          tabId,
          categories[] {
            name,
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
                  uploadedMediaUrl,
                  tips
                }
              }
            }
          }
        }
      }
    `
    
    const lessons = await client.fetch(query)
    const allItems = []
    
    lessons.forEach(lesson => {
      // Process root categories
      if (lesson.categories) {
        lesson.categories.forEach(category => {
          if (category.items) {
            category.items.forEach(item => {
              allItems.push({
                ...item,
                lessonId: lesson.lessonId,
                lessonTitle: lesson.lessonTitle,
                categoryColor: category.color || lesson.themeColor,
                detailedInfo: item.detailedInfo ? {
                  ...item.detailedInfo,
                  pages: (item.detailedInfo.pages || []).map(page => ({
                    ...page,
                    finalMediaUrl: page.mediaType === 'upload' 
                      ? page.uploadedMediaUrl 
                      : page.image
                  }))
                } : undefined
              })
            })
          }
        })
      }
      
      // Process tabContents
      if (lesson.tabContents) {
        lesson.tabContents.forEach(tabContent => {
          if (tabContent.categories) {
            tabContent.categories.forEach(category => {
              if (category.items) {
                category.items.forEach(item => {
                  allItems.push({
                    ...item,
                    lessonId: lesson.lessonId,
                    lessonTitle: lesson.lessonTitle,
                    categoryColor: category.color || lesson.themeColor,
                    detailedInfo: item.detailedInfo ? {
                      ...item.detailedInfo,
                      pages: (item.detailedInfo.pages || []).map(page => ({
                        ...page,
                        finalMediaUrl: page.mediaType === 'upload' 
                          ? page.uploadedMediaUrl 
                          : page.image
                      }))
                    } : undefined
                  })
                })
              }
            })
          }
        })
      }
    })
    
    console.log(`📚 Fetched ${allItems.length} items from ${lessons.length} lessons`)
    return NextResponse.json(allItems)
  } catch (error) {
    console.error('Error fetching all lesson items:', error)
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 })
  }
}

export const revalidate = 3600 // Cache for 1 hour