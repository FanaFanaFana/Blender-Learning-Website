'use client'

import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import { Bookmark } from 'lucide-react'
import { playHover } from '@/app/utils/sounds'
import './styles/BookmarkButton.css'

export default function BookmarkButton({ 
  lesson, 
  item = null,  // ✅ Accept optional item
  size = 'medium', 
  showLabel = false, 
  onRemove,
  favorites = [],
  onFavoritesChange
}) {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const lessonId = lesson?.id || lesson?.lessonId
  
  // ✅ Calculate unique favorite ID
  const favoriteId = item ? `${lessonId}-${item.name}` : lessonId
  
  // ✅ Check if this specific item/lesson is favorited
  const isFavorited = favorites.some(fav => fav.favoriteId === favoriteId)

  const showToastMessage = (message) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleBookmark = async (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (status !== 'authenticated') {
      showToastMessage('Please sign in to bookmark lessons')
      setTimeout(() => signIn('google'), 1500)
      return
    }

    if (!lessonId) {
      console.error('❌ No lessonId found')
      showToastMessage('Error: Lesson ID missing')
      return
    }

    setIsLoading(true)

    try {
      if (isFavorited) {
        // ✅ Pass itemName if it's an item bookmark
        const params = new URLSearchParams({ lessonId })
        if (item) params.append('itemName', item.name)
        
        const response = await fetch(`/api/favorites?${params}`, {
          method: 'DELETE'
        })

        if (response.ok) {
          showToastMessage('Removed from favorites')
          if (onRemove) await onRemove()
          if (onFavoritesChange) await onFavoritesChange()
        } else {
          showToastMessage('Failed to remove favorite')
        }
      } else {
        // ✅ Include item data if bookmarking an item
        const response = await fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lessonId: lessonId,
            lessonData: {
              title: lesson.title || '',
              gradientText: lesson.gradientText || '',
              fullTitle: lesson.fullTitle || `${lesson.title || ''} ${lesson.gradientText || ''}`,
              subtitle: lesson.subtitle || '',
              themeColor: lesson.themeColor || '#3b82f6',
              icon: lesson.icon || '/Icons/blender_icon_current_file.svg',
              lessonCategory: lesson.lessonCategory || lesson.category || ''
            },
            itemData: item ? {  // ✅ Include item details
              name: item.name,
              description: item.description,
              icon: item.icon,
              color: item.color,
              detailedInfo: item.detailedInfo,
              tab: item.tab
            } : null
          })
        })

        if (response.ok) {
          showToastMessage(item ? 'Card saved!' : 'Lesson saved!')
          if (onFavoritesChange) await onFavoritesChange()
        } else {
          const errorData = await response.json()
          showToastMessage(errorData.error || 'Failed to add favorite')
        }
      }
    } catch (error) {
      console.error('Bookmark error:', error)
      showToastMessage('Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const iconSize = size === 'large' ? 28 : size === 'small' ? 15 : 22

  return (
    <>
      <button
        onClick={handleBookmark}
        onMouseEnter={playHover}
        disabled={isLoading}
        className={`bookmark-button bookmark-${size} ${isFavorited ? 'favorited' : ''} ${isLoading ? 'loading' : ''}`}
        title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Bookmark
          size={iconSize}
          fill={isFavorited ? 'currentColor' : 'none'}
          className="bookmark-icon"
        />
        {showLabel && (
          <span className="bookmark-label">
            {isLoading ? 'Saving...' : isFavorited ? 'Saved' : 'Save'}
          </span>
        )}
      </button>

      {showToast && (
        <div className="bookmark-toast">
          {toastMessage}
        </div>
      )}
    </>
  )
}