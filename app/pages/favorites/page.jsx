'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import BookmarkButton from '@/components/BookmarkButton'
import Image from 'next/image'
import Link from 'next/link'
import { Bookmark, Heart, Loader2 } from 'lucide-react'
import { playHover } from '@/app/utils/sounds'
import './favorites.css'

// ✅ Dynamic import for DetailModal
const DetailModal = dynamic(() => import('@/components/shared/DetailModal'), {
  ssr: false
})

export default function FavoritesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [favorites, setFavorites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [allLessonItems, setAllLessonItems] = useState([])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchFavorites()
      fetchAllItems()
    } else if (status === 'unauthenticated') {
      setIsLoading(false)
    }
  }, [status])

  // ✅ Handle URL hash for opening modals
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#item=')) {
        try {
          const itemData = JSON.parse(decodeURIComponent(hash.substring(6)))
          
          if (itemData.detailedInfo?.pages) {
            itemData.detailedInfo.pages = itemData.detailedInfo.pages.map(page => ({
              ...page,
              finalMediaUrl: page.mediaType === 'upload' ? page.uploadedMediaUrl : page.image
            }))
          }
          
          setSelectedItem(itemData)
          setCurrentPage(0)
        } catch (e) {
          console.error('Failed to parse item from URL:', e)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const fetchFavorites = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/favorites', {
        cache: 'no-store'
      })
      if (response.ok) {
        const data = await response.json()
        setFavorites(data)
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchAllItems = async () => {
    try {
      const response = await fetch('/api/lessons/items')
      if (response.ok) {
        const items = await response.json()
        setAllLessonItems(items)
      }
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  // ✅ Handle card click - navigate with hash or just to lesson
  const handleCardClick = (favorite, e) => {
    e.preventDefault()
    
    if (favorite.itemData) {
      // Item favorite - navigate with hash to open modal
      const itemHash = encodeURIComponent(JSON.stringify(favorite.itemData))
      window.location.href = `/lessons/${favorite.lessonId}#item=${itemHash}`
    } else {
      // Lesson favorite - regular navigation
      router.push(`/lessons/${favorite.lessonId}`)
    }
  }

  if (status === 'loading' || isLoading) {
    return (
      <div className="page-wrapper">
        <Header />
        <Sidebar />
        <main className="favorites-page">
          <div className="favorites-loading">
            <Loader2 size={48} className="spinner" />
            <p>Loading your favorites...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="page-wrapper">
        <Header />
        <Sidebar />
        <main className="favorites-page">
          <div className="favorites-empty">
            <Heart size={64} strokeWidth={1.5} />
            <h2>Sign in to save favorites</h2>
            <p>Bookmark your favorite lessons to access them quickly</p>
            <button onClick={() => signIn('google')} className="sign-in-cta" onMouseEnter={playHover}>
              Sign in with Google
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <Header />
      <Sidebar />
      <main className="favorites-page">
        <div className="favorites-container">
          <div className="favorites-header">
            <div className="favorites-title-section">
              <Bookmark size={40} className="favorites-icon" />
              <div>
                <h1 className="favorites-title">My Favorites</h1>
                <p className="favorites-subtitle">
                  {favorites.length} {favorites.length === 1 ? 'favorite' : 'favorites'} saved
                </p>
              </div>
            </div>
          </div>

          {favorites.length === 0 ? (
            <div className="favorites-empty">
              <Bookmark size={64} strokeWidth={1.5} />
              <h2>No favorites yet</h2>
              <p>Start bookmarking lessons and content you want to revisit</p>
              <Link href="/pages/learn" className="browse-lessons-btn" onMouseEnter={playHover}>
                Browse Lessons
              </Link>
            </div>
          ) : (
            <div className="favorites-grid">
              {favorites.map((favorite) => (
                <div
                  key={favorite.favoriteId}
                  onClick={(e) => handleCardClick(favorite, e)}
                  className="favorite-card"
                  onMouseEnter={playHover}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="favorite-card-header">
                    <div className="favorite-icon-wrapper">
                      <Image
                        src={favorite.itemData?.icon || favorite.lessonData.icon || '/Icons/blender_icon_current_file.svg'}
                        alt=""
                        width={40}
                        height={40}
                        className="favorite-icon"
                      />
                    </div>
                    <div onClick={(e) => e.stopPropagation()}>
                      <BookmarkButton
                        lesson={{
                          id: favorite.lessonId,
                          ...favorite.lessonData
                        }}
                        item={favorite.itemData}
                        size="small"
                        favorites={favorites}
                        onFavoritesChange={fetchFavorites}
                        onRemove={fetchFavorites}
                      />
                    </div>
                  </div>

                  <div className="favorite-content">
                    {/* ✅ Show item name if it's an item favorite */}
                    {favorite.itemData ? (
                      <>
                        <h3 className="favorite-lesson-title">
                          <span
                            className="favorite-title-gradient"
                            style={{
                              background: `linear-gradient(135deg, ${favorite.itemData.color || favorite.lessonData.themeColor}dd 0%, ${favorite.itemData.color || favorite.lessonData.themeColor}66 100%)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {favorite.itemData.name}
                          </span>
                        </h3>
                        <p className="favorite-subtitle">
                          {favorite.itemData.description}
                        </p>
                        <p style={{ 
                          fontSize: '0.85rem', 
                          color: '#8fa9bd',
                          marginTop: '0.5rem',
                          fontStyle: 'italic'
                        }}>
                          From: {favorite.lessonData.title} {favorite.lessonData.gradientText}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="favorite-lesson-title">
                          {favorite.lessonData.title && (
                            <span className="favorite-title-normal">
                              {favorite.lessonData.title}
                            </span>
                          )}
                          {favorite.lessonData.gradientText && (
                            <span
                              className="favorite-title-gradient"
                              style={{
                                background: `linear-gradient(135deg, ${favorite.lessonData.themeColor}dd 0%, ${favorite.lessonData.themeColor}66 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {favorite.lessonData.gradientText}
                            </span>
                          )}
                        </h3>

                        {favorite.lessonData.subtitle && (
                          <p className="favorite-subtitle">
                            {favorite.lessonData.subtitle}
                          </p>
                        )}
                      </>
                    )}

                    {favorite.lessonData.lessonCategory && (
                      <div className="favorite-category">
                        <span
                          className="category-badge"
                          style={{
                            background: `${favorite.lessonData.themeColor}20`,
                            color: favorite.lessonData.themeColor,
                            border: `1px solid ${favorite.lessonData.themeColor}40`
                          }}
                        >
                          {favorite.lessonData.lessonCategory}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ✅ Modal for detailed item view */}
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onMouseEnter={playHover}
            allItems={allLessonItems}
            onClose={() => {
              setSelectedItem(null)
              if (window.location.hash.startsWith('#item=')) {
                window.history.replaceState(null, '', window.location.pathname)
              }
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}