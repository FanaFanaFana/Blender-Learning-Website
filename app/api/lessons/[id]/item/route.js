// FILE: app/api/lessons/[id]/item/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function POST(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()
    const { itemName, categoryName, tabId } = body

    if (!itemName) {
      return NextResponse.json(
        { error: 'Item name is required' },
        { status: 400 }
      )
    }

    // Query to find the specific item's detailed info
    const query = `
      *[_type == "lesson" && lessonId.current == $id && !(_id in path("drafts.**"))][0] {
        themeColor,
        "item": ${tabId ? `
          tabContents[tabId == $tabId][0].categories[name == $categoryName][0].items[name == $itemName][0] {
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
        ` : `
          categories[name == $categoryName][0].items[name == $itemName][0] {
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
        `}
      }
    `

    const result = await client.fetch(query, { 
      id, 
      itemName, 
      categoryName,
      tabId: tabId || null
    })

    if (!result?.item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      )
    }

    // Process media URLs
    if (result.item.detailedInfo?.pages) {
      result.item.detailedInfo.pages = result.item.detailedInfo.pages.map(page => ({
        ...page,
        finalMediaUrl: page.mediaType === 'upload' 
          ? page.uploadedMediaUrl 
          : page.image
      }))
    }

    console.log('✅ Fetched item details for:', itemName)
    return NextResponse.json(result.item)
  } catch (error) {
    console.error('Error fetching item details:', error)
    return NextResponse.json(
      { error: 'Failed to fetch item details' },
      { status: 500 }
    )
  }
}