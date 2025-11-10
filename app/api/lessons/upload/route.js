
// FILE: app/api/upload/route.js
import { client } from '@/sanity/lib/client'
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
```

## What You Get:

✅ **Drag & drop file upload**  
✅ **Direct upload to Sanity's CDN**  
✅ **Automatic video/image detection**  
✅ **File size validation (50MB limit)**  
✅ **OR paste URL manually**  
✅ **Preview uploaded media**  
✅ **Clear/remove media button**

The uploaded files will be stored in your Sanity project's assets and you'll get a permanent CDN URL like:
```
