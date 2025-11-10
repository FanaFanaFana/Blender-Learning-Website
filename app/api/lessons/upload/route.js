// FILE: app/api/lessons/upload/route.js
import { serverClient } from '@/sanity/lib/serverClient'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Convert to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Sanity using server client
    const asset = await serverClient.assets.upload(
      file.type.startsWith('video/') ? 'file' : 'image',
      buffer,
      {
        filename: file.name,
        contentType: file.type
      }
    )

    return NextResponse.json({ url: asset.url })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'