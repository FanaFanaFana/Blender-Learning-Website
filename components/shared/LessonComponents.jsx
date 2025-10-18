// FILE: components/shared/LessonComponents.jsx
// Put this in a shared folder - all your lessons will import from here!

import { useState } from 'react'

// ============================================
// 1. LESSON HERO
// ============================================
export function LessonHero({ title, gradientText, subtitle, gradientColors }) {
  return (
    <section style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            {title}{' '}
            <span
              style={{
                background: gradientColors,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {gradientText}
            </span>
          </h1>

          <p style={{ fontSize: '1.5rem', color: '#b0c4d4', marginBottom: '3rem' }}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}


// ============================================
// 2. TAB NAVIGATION
// ============================================
export function TabNavigation({ tabs, activeTab, onTabChange, activeColor }) {
  return (
    <section style={{ padding: '0rem 0', background: 'transparent' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
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
// 3. INFO CARD (for overview sections)
// ============================================
export function InfoCard({ icon, title, content }) {
  return (
    <div style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
// 4. CLICKABLE CARD (with hover effect)
// ============================================
export function ClickableCard({ item, color, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
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
        <img src={item.icon} alt={item.name} style={{ width: '30px', height: '30px' }} />
        <h4 style={{ fontSize: '1.25rem', margin: 0, color }}>{item.name}</h4>
      </div>
      <p style={{ color: '#8fa9bd', margin: 0 }}>{item.description}</p>
    </div>
  )
}

/// ============================================
// 5. DETAIL MODAL (the big popup!)
// ============================================
export function DetailModal({ item, onClose, currentPage, onPageChange }) {
  if (!item || !item.detailedInfo) return null

  const { detailedInfo, color } = item

  // ✅ Safely handle both multi-page and single-page data
  const hasPages = Array.isArray(detailedInfo.pages)
  const totalPages = hasPages ? detailedInfo.pages.length : 1
  const currentPageData = hasPages ? detailedInfo.pages[currentPage] : detailedInfo

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(21, 35, 47, 0.98)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          scrollbarWidth: 'thin',
          scrollbarColor: `${color} rgba(255, 255, 255, 0)`
        }}
        className="custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <style jsx>{`
  .custom-scrollbar::-webkit-scrollbar {
    width: 12px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(13, 27, 42, 0.5);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: ${color};
    border-radius: 10px;
    border: 2px solid rgba(21, 35, 47, 0.98);
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: ${color}dd;
  }
  /* 🟢 Hide the top/bottom scroll arrows */
  .custom-scrollbar::-webkit-scrollbar-button {
    display: none;
    width: 0;
    height: 0;
  }
`}</style>


        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ padding: '2rem 2rem 1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
            <h2 style={{ fontSize: '2.5rem', margin: 0, color }}>{item.name}</h2>
          </div>
          {/* Show overview text if available */}
          {currentPageData.overview && (
            <p style={{ color: '#b0c4d4', fontSize: '1.2rem', margin: 0 }}>
              {currentPageData.overview}
            </p>
          )}
        </div>

        {/* Main content */}
        <div style={{ padding: '2rem' }}>
          <div
            style={{
              background: 'rgba(28, 45, 60, 0.5)',
              borderRadius: '16px',
              padding: '2rem',
              minHeight: '400px'
            }}
          >
            {/* Page title */}
            {currentPageData.title && (
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color }}>
                {currentPageData.title}
              </h3>
            )}

            {/* Image (if any) */}
            {currentPageData.image && (
              <img
                src={currentPageData.image}
                alt={currentPageData.title || item.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                  background: 'rgba(13, 27, 42, 0.8)'
                }}
              />
            )}

            {/* Content or Overview */}
            {currentPageData.content && (
              <p style={{ color: '#b0c4d4', fontSize: '1.15rem', lineHeight: '1.8' }}>
                {currentPageData.content}
              </p>
            )}

            {/* Tips */}
            {currentPageData.tips && currentPageData.tips.length > 0 && (
              <div
                style={{
                  background: 'rgba(59, 130, 196, 0.1)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${color}`,
                  marginTop: '1.5rem'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#60a5fa',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <img src="/Icons/info.svg" alt="tips" style={{ width: '24px', height: '24px' }} />
                  Pro Tips
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  {currentPageData.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      style={{
                        color: '#b0c4d4',
                        fontSize: '1.05rem',
                        lineHeight: '1.6',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Page controls (only if multiple pages) */}
          {hasPages && totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2rem'
              }}
            >
              <button
                onClick={() => onPageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                style={{
                  background: currentPage === 0 ? 'rgba(255, 255, 255, 0.05)' : color,
                  border: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 0 ? 0.5 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                ← Previous
              </button>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {detailedInfo.pages.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: idx === currentPage ? color : 'rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                style={{
                  background:
                    currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.05)' : color,
                  border: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ============================================
// 6. SECTION HEADER (with colored border)
// ============================================
export function SectionHeader({ title, description, color }) {
  return (
    <div style={{ 
      padding: '2rem', 
      background: 'rgba(21, 35, 47, 0.6)', 
      borderRadius: '16px', 
      borderLeft: `4px solid ${color}`, 
      marginBottom: '2rem' 
    }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#8fa9bd', fontSize: '1.1rem', margin: 0 }}>
        {description}
      </p>
    </div>
  )
}

// ============================================
// USAGE EXAMPLE - This shows you how to use them!
// ============================================
export default function ExampleUsage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div style={{ minHeight: '100vh', background: '#0d1b2a', color: '#fff', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        📦 Reusable Components Library
      </h1>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
        <h2>✅ What you get:</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '2' }}>
          <li><strong>LessonHero</strong> - The big title section at the top</li>
          <li><strong>TabNavigation</strong> - The Overview/Areas/Shortcuts tabs</li>
          <li><strong>InfoCard</strong> - Static info boxes</li>
          <li><strong>ClickableCard</strong> - Cards that open modals</li>
          <li><strong>DetailModal</strong> - The popup with pages</li>
          <li><strong>SectionHeader</strong> - Colored section titles</li>
        </ul>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
          <h3>💡 How to use:</h3>
          <pre style={{ background: '#000', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
{`// In your InterfaceLesson.jsx:
import { 
  LessonHero, 
  TabNavigation, 
  DetailModal 
} from '@/components/shared/LessonComponents'

// Then just use them!
<LessonHero 
  title="Blender"
  gradientText="Interface"
  subtitle="Master the interface..."
  badges={[...]}
/>`}
          </pre>
        </div>
      </div>
    </div>
  )
}