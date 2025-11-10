// FILE: app/api/lessons/upload/route.js
import { NextResponse } from 'next/server'

// Dynamic import or lazy initialization
let sanityClient = null;

async function getSanityClient() {
  if (!sanityClient) {
    const { client } = await import('@/sanity/lib/client');
    sanityClient = client;
  }
  return sanityClient;
}

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

    // Get Sanity client
    const client = await getSanityClient()

    // Upload to Sanity
    const asset = await client.assets.upload(
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

// Opt out of static optimization
export const dynamic = 'force-dynamic'