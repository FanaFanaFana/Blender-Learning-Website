// FILE: components/shared/LessonComponents.jsx
// Put this in a shared folder - all your lessons will import from here!

import { useState } from 'react'
import { playHover } from '@/app/utils/sounds'
import BookmarkButton from '@/components/BookmarkButton'

// ============================================
// 1. BACK BUTTON
// ============================================
export function BackButton() {
  return (
    <button
      className="back-button"
      onClick={() => window.history.back()}
      onMouseEnter={playHover}
      style={{
        padding: '1rem 0.75rem',
        background: 'rgba(21, 35, 47, 0.6)',
        border: '2px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        color: '#ffffff',
        fontSize: '0.9rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',  /* ⬅️ Stack vertically */
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}
    >
      <span style={{ fontSize: '1.5rem' }}>←</span>
      <span>Back</span>
    </button>
  )
}

// ============================================
// 2. LESSON HERO
// ============================================
export function LessonHero({ title, gradientText, subtitle, gradientColors }) {
  return (
    <div style={{
      padding: '4rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(3.5rem, 7vw, 7rem)',
        fontWeight: '700',
        marginBottom: '1.5rem',
        lineHeight: '1.1'
      }}>
        {title}{' '}
        <span style={{
          background: gradientColors || 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {gradientText}
        </span>
      </h1>

      {subtitle && (
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          color: '#8fa9bd',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}


// ============================================
// 3. TAB NAVIGATION
// ============================================
export function TabNavigation({ tabs, activeTab, onTabChange, activeColor, onMouseEnter }) {
  const tabCount = tabs.length;

  // Different grid layouts based on tab count
  const getGridStyle = () => {
    switch(tabCount) {
      case 1:
        return {
          gridTemplateColumns: '1fr',
          maxWidth: '400px',
          gap: '0'
        };
      case 2:
        return {
          gridTemplateColumns: 'repeat(2, 1fr)',
          maxWidth: '700px',
          gap: '1rem'
        };
      case 3:
        return {
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: '900px',
          gap: '1rem'
        };
      case 4:
        return {
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: '1000px',
          gap: '1rem'
        };
      default: // 5+ tabs
        return {
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          maxWidth: '1000px',
          gap: '1rem'
        };
    }
  };

  // Different padding based on tab count
  const getTabPadding = () => {
    if (tabCount === 1) return '2rem 1.5rem';  // Bigger for single tab
    if (tabCount === 2) return '1.5rem 1.25rem';  // Bigger for 2 tabs
    if (tabCount === 3) return '1.5rem 1.25rem';  // Bigger for 3 tabs
    return '1.25rem 1rem';  // Standard for 4+ tabs
  };

  // Different icon size based on tab count
  const getIconSize = () => {
    if (tabCount <= 3) return '42px';  // Bigger icons for 1-3 tabs
    return '36px';  // Standard for 4+ tabs
  };

  // Different font size based on tab count
  const getFontSize = () => {
    if (tabCount === 1) return '1.2rem';  // Bigger for single tab
    if (tabCount <= 3) return '1.1rem';  // Slightly bigger for 2-3 tabs
    return '1rem';  // Standard for 4+ tabs
  };

  const gridStyle = getGridStyle();

  return (
    <div style={{ 
      display: 'grid',
      ...gridStyle,
      width: '100%',
      margin: '0 auto',
      justifyItems: 'stretch'
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          onMouseEnter={onMouseEnter}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: getTabPadding(),
            background: 'rgba(21, 35, 47, 0.6)',
            border: activeTab === tab.id ? `2px solid ${activeColor}` : '2px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            color: '#ffffff',
            fontSize: getFontSize(),
            fontWeight: '600',
            cursor: 'pointer',
            backgroundColor: activeTab === tab.id ? `${activeColor}15` : 'rgba(21, 35, 47, 0.6)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            minHeight: tabCount <= 3 ? '120px' : '100px'  // Taller for 1-3 tabs
          }}
          onMouseMove={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <img 
            src={tab.icon} 
            alt={tab.label} 
            style={{ width: getIconSize(), height: getIconSize() }} 
          />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

// ============================================
// 4. INFO CARD (for overview sections)
// ============================================
export function InfoCard({ icon, title, content, onMouseEnter }) {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'default' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img src={icon} alt={title} style={{ width: '40px', height: '40px' }} />
        <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{title}</h3>
      </div>
      <p style={{ color: '#b0c4d4', fontSize: '1.1rem', lineHeight: '1.8' }}>
        {content}
      </p>
    </div>
  )
}

// ============================================
// 5. CLICKABLE CARD (with hover effect + bookmark)
// ============================================


export function ClickableCard({ item, color, onClick, onMouseEnter, lessonData, favorites, onFavoritesChange }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      onClick={onClick}
      onMouseEnter={(e) => {
        setIsHovered(true)
        if (onMouseEnter) onMouseEnter(e)
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? 'rgba(28, 45, 60, 0.8)' : 'rgba(21, 35, 47, 0.6)',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        position: 'relative'
      }}
    >
      {/* ✅ Pass item data to bookmark button */}
      {lessonData && (
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            zIndex: 10
          }}
        >
          <BookmarkButton
            lesson={{
              id: lessonData.lessonId?.current || lessonData.id,
              title: lessonData.heroConfig?.title || '',
              gradientText: lessonData.heroConfig?.gradientText || '',
              subtitle: lessonData.heroConfig?.subtitle || '',
              themeColor: color,
              icon: lessonData.lessonIcon || '/Icons/blender_icon_current_file.svg',
              lessonCategory: lessonData.category || lessonData.lessonCategory
            }}
            item={{  // ✅ Pass the item data
              ...item,
              color: color
            }}
            size="small"
            favorites={favorites}
            onFavoritesChange={onFavoritesChange}
          />
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img src={item.icon} alt={item.name} style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
        <h4 style={{ fontSize: '1.25rem', margin: 0, color }}>{item.name}</h4>
      </div>
      <p style={{ color: '#8fa9bd', margin: 0 }}>{item.description}</p>
    </div>
  )
}