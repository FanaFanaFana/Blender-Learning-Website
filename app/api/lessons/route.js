// FILE: app/api/lessons/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `
      *[_type == "lesson"] | order(_createdAt desc) {
        "lessonId": lessonId,
        "heroConfig": heroConfig,
        "themeColor": themeColor,
        "category": category
      }
    `
    
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