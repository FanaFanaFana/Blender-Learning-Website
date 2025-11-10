// FILE: app/api/lessons/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const includeDrafts = searchParams.get('drafts') === 'true'
    
    // 🔒 By default, only fetch PUBLISHED lessons
    const query = includeDrafts
      ? `*[_type == "lesson"] | order(_createdAt desc) {
          "id": lessonId.current,
          "gradientText": heroConfig.gradientText,
          "title": heroConfig.title,
          "lessonCategory": category,
          "themeColor": coalesce(themeColor, "#3b82f6"),
          "icon": lessonIcon,
          "isDraft": _id in path("drafts.**")
        }`
      : `*[_type == "lesson" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
          "id": lessonId.current,
          "gradientText": heroConfig.gradientText,
          "title": heroConfig.title,
          "lessonCategory": category,
          "themeColor": coalesce(themeColor, "#3b82f6"),
          "icon": lessonIcon
        }`
    
    const lessons = await client.fetch(query)
    
    return NextResponse.json(lessons)
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    )
  }
}