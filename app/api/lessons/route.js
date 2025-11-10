// FILE: app/api/lessons/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `
      *[_type == "lesson"] {
        "id": lessonId.current,
        "icon": coalesce(lessonIcon, "/Icons/blender_icon_current_file.svg"),
        "title": coalesce(title, heroConfig.gradientText, heroConfig.title),
        "description": coalesce(subtitle, heroConfig.subtitle),
        category,
        "themeColor": coalesce(color, themeColor, "#3b82f6"),
        heroConfig
      }
    `
    
    const lessons = await client.fetch(query)
    
    console.log('📚 API fetched lessons:', lessons.length)
    
    return NextResponse.json(lessons)
  } catch (error) {
    console.error('❌ Error fetching lessons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    )
  }
}