// FILE: components/LessonTemplate.jsx
'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import Sidebar from '@/components/Sidebar'
import LessonScene from '@/components/LessonScene'
import { playHover } from '@/app/utils/sounds'

import { 
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
  DetailModal,
  SectionHeader
} from '@/components/shared/LessonComponents'

export default function LessonTemplate({ lessonData }) {
  const [activeTab, setActiveTab] = useState(lessonData.tabs[1].id)
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  // Auto-open modal from URL hash (for search results)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#item=')) {
        try {
          const itemData = JSON.parse(decodeURIComponent(hash.substring(6)))
          setSelectedItem(itemData)
          setCurrentPage(0)
          // Switch to the correct tab if specified
          if (itemData.tab) {
            setActiveTab(itemData.tab)
          }
        } catch (e) {
          console.error('Failed to parse item from URL:', e)
        }
      }
    }

    // Check hash on mount
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const {
    heroConfig,
    tabs,
    themeColor,
    overviewCards,
    overviewTitle,
    overviewDescription,
    // NEW: Unified categories structure
    categories,
    contentTitle,
    contentDescription,
    // Special tabs
    shortcuts,
    // Practice projects (all lessons)
    practiceProjects,
    practiceTitle,
    practiceDescription,
  } = lessonData

  return (
    <div className="page-wrapper">
      <Header />
      <Sidebar />
      
      <main>
        {/* Hero with 3D Background */}
        <section style={{ position: 'relative', padding: '0', margin: '0 -2rem', width: 'calc(100% + 4rem)', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '3rem' }}>
          {/* 3D Scene Background */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.3 }}>
            <LessonScene />
          </div>

          {/* Hero Content Overlay */}
          <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <LessonHero {...heroConfig} />
          </div>
        </section>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div className="tabs-wrapper">
                <BackButton />
                <TabNavigation 
                  onMouseEnter={playHover}
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  activeColor={themeColor}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && overviewCards && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <SectionHeader 
                  title={overviewTitle || "Welcome to this lesson!"}
                  description={overviewDescription || "Let's learn something amazing."}
                  color={themeColor}
                />

                <div style={{ display: 'grid', gap: '2rem' }}>
                  {overviewCards.map((card, idx) => (
                    <InfoCard key={idx} {...card} onMouseEnter={playHover} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content Tab - UNIFIED for all categorized content */}
        {activeTab === 'content' && categories && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {contentTitle || "Lesson Content"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {contentDescription || "Explore the key concepts and tools"}
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {categories.map((category, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {(category.items || category.brushes || []).map((item, itemIdx) => (
                        <ClickableCard
                          onMouseEnter={playHover}
                          key={itemIdx}
                          item={item}
                          color={category.color}
                          onClick={() => {
                            setSelectedItem({ ...item, color: category.color })
                            setCurrentPage(0)
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Techniques Tab - Uses same structure as content */}
        {activeTab === 'techniques' && lessonData.techniques && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
  {lessonData.techniquesTitle || 'Techniques'}
</h2>
<p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
  {lessonData.techniquesDescription || 'Master essential workflows and methods'}
</p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {lessonData.techniques.map((category, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.items.map((item, itemIdx) => (
                        <ClickableCard
                          onMouseEnter={playHover}
                          key={itemIdx}
                          item={item}
                          color={category.color}
                          onClick={() => {
                            setSelectedItem({ ...item, color: category.color })
                            setCurrentPage(0)
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Shortcuts Tab - Special case for Interface Lesson */}
        {activeTab === 'shortcuts' && shortcuts && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Essential Shortcuts
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Master these keyboard shortcuts to speed up your workflow
              </p>

              <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                {shortcuts.map((section, idx) => (
                  <div key={idx} style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: themeColor }}>
                      {section.category}
                    </h3>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                      {section.items.map((shortcut, itemIdx) => (
                        <div 
                          key={itemIdx} 
                          onMouseEnter={playHover}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'default' }}
                        >
                          <span style={{ color: '#b0c4d4', fontSize: '1rem' }}>{shortcut.action}</span>
                          <code style={{ background: `${themeColor}20`, color: themeColor, padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.9rem', fontWeight: '600', border: `1px solid ${themeColor}40` }}>
                            {shortcut.key}
                          </code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Practice Tab */}
        {activeTab === 'practice' && practiceProjects && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {practiceTitle || "Practice Projects"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {practiceDescription || "Apply what you've learned with these hands-on projects"}
              </p>

              <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                {practiceProjects.map((project, index) => (
                  <div key={index} style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '2rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{ background: `${themeColor}20`, color: themeColor, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', flexShrink: 0 }}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{project.title}</h4>
                            <p style={{ color: '#8fa9bd', margin: 0, fontSize: '1rem' }}>{project.desc}</p>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                          <span style={{ fontSize: '0.9rem', color: '#7a8c9e' }}>⏱️ {project.duration}</span>
                          <span style={{ fontSize: '0.9rem', padding: '0.25rem 0.75rem', borderRadius: '12px', background: project.difficulty === 'Beginner' ? '#10b98120' : '#f59e0b20', color: project.difficulty === 'Beginner' ? '#10b981' : '#f59e0b' }}>
                            {project.difficulty}
                          </span>
                        </div>

                        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {project.skills.map((skill, idx) => (
                            <span key={idx} style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', background: `${themeColor}20`, color: themeColor, borderRadius: '8px', border: `1px solid ${themeColor}30` }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button 
                        onMouseEnter={(e) => {
                          playHover()
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        style={{ background: themeColor, border: 'none', padding: '0.875rem 2rem', borderRadius: '10px', color: '#fff', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', flexShrink: 0, transition: 'all 0.3s ease' }}
                      >
                        Start →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Modal */}
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onMouseEnter={playHover}
            onClose={() => {
              setSelectedItem(null)
              // Clear the hash when closing
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