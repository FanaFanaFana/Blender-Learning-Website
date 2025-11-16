// FILE: components/shared/LessonComponents.jsx
// Put this in a shared folder - all your lessons will import from here!

import { useState } from 'react'
import { playHover } from '@/app/utils/sounds'

// ============================================
// 1. BACK BUTTON
// ============================================
export function BackButton() {
  return (
    <button
      className="back-button"
      onClick={() => window.history.back()}
      onMouseEnter={playHover}
    >
      ← Back
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
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
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
  return (
    <section style={{ padding: '0rem 0', background: 'transparent' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              onMouseEnter={onMouseEnter}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'rgba(21, 35, 47, 0.6)',
                border: activeTab === tab.id ? `2px solid ${activeColor}` : '2px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: activeTab === tab.id ? `${activeColor}15` : 'rgba(21, 35, 47, 0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseMove={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img src={tab.icon} alt={tab.label} style={{ width: '40px', height: '40px' }} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
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
// 5. CLICKABLE CARD (with hover effect)
// ============================================
export function ClickableCard({ item, color, onClick, onMouseEnter }) {
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
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <img src={item.icon} alt={item.name} style={{ width: '30px', height: '30px', borderRadius: '8px' }} />
        <h4 style={{ fontSize: '1.25rem', margin: 0, color }}>{item.name}</h4>
      </div>
      <p style={{ color: '#8fa9bd', margin: 0 }}>{item.description}</p>
    </div>
  )
}