import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth"
import clientPromise from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("blenddocs")
    
    const userId = session.user.id || session.user.email
    
    const favorites = await db
      .collection("favorites")
      .find({ userId })
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json(favorites)
  } catch (error) {
    console.error("❌ Error fetching favorites:", error)
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { lessonId, lessonData, itemData } = body  // ✅ Accept itemData

    if (!lessonId || !lessonData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("blenddocs")
    
    const userId = session.user.id || session.user.email
    
    // ✅ Create unique ID combining lesson + item (if item exists)
    const favoriteId = itemData ? `${lessonId}-${itemData.name}` : lessonId
    
    // Check if already favorited
    const existing = await db.collection("favorites").findOne({
      userId,
      favoriteId  // ✅ Use composite ID
    })

    if (existing) {
      return NextResponse.json(
        { error: "Already favorited" },
        { status: 400 }
      )
    }

    // Add favorite
    const favorite = {
      userId,
      lessonId,  // Keep for filtering by lesson
      favoriteId,  // ✅ Unique identifier
      lessonData: {
        title: lessonData.title,
        gradientText: lessonData.gradientText,
        fullTitle: lessonData.fullTitle,
        subtitle: lessonData.subtitle,
        themeColor: lessonData.themeColor,
        icon: lessonData.icon,
        lessonCategory: lessonData.lessonCategory
      },
      itemData: itemData || null,  // ✅ Store item data if provided
      createdAt: new Date()
    }

    await db.collection("favorites").insertOne(favorite)

    console.log('✅ Favorite added:', favoriteId)
    return NextResponse.json({ success: true, favorite })
  } catch (error) {
    console.error("❌ Error adding favorite:", error)
    return NextResponse.json(
      { error: "Failed to add favorite", details: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const lessonId = searchParams.get("lessonId")
    const itemName = searchParams.get("itemName")  // ✅ Accept itemName for items

    if (!lessonId) {
      return NextResponse.json(
        { error: "Missing lessonId" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("blenddocs")
    
    const userId = session.user.id || session.user.email
    
    // ✅ Create composite ID
    const favoriteId = itemName ? `${lessonId}-${itemName}` : lessonId
    
    const result = await db.collection("favorites").deleteOne({
      userId,
      favoriteId
    })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Favorite not found" },
        { status: 404 }
      )
    }

    console.log('✅ Favorite removed:', favoriteId)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Error removing favorite:", error)
    return NextResponse.json(
      { error: "Failed to remove favorite" },
      { status: 500 }
    )
  }
}