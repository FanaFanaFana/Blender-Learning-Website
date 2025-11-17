// FILE: components/LessonTemplate.jsx
'use client'

import { useState, useEffect, Suspense, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { playHover } from '@/app/utils/sounds'
import './styles/LessonTemplate.css'

import { 
  BackButton,        // ✅ Now imported from LessonComponents
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
} from '@/components/shared/LessonComponents'

// ✨ DYNAMIC IMPORTS - Load heavy components only when needed
const LessonScene = dynamic(() => import('@/components/scenes/LessonScene'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.05)' }} />
})

const DetailModal = dynamic(() => import('@/components/shared/DetailModal'), {
  ssr: false,
  loading: () => (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ color: '#fff', fontSize: '1.5rem' }}>Loading...</div>
    </div>
  )
})

// Loading skeleton component
const TabContentSkeleton = () => (
  <div className="tab-content-skeleton">
    <div className="lesson-container">
      <div className="skeleton-header" />
      <div className="skeleton-grid">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div 
            key={i} 
            className="skeleton-card" 
            style={{ animationDelay: `${i * 0.1}s` }} 
          />
        ))}
      </div>
    </div>
  </div>
)

export default function LessonTemplate({ lessonData }) {
  // Safety check
  if (!lessonData || typeof lessonData !== 'object') {
    console.error('❌ Invalid lessonData received:', lessonData)
    return (
      <div className="error-state">
        <h2 className="error-title">Error: Invalid lesson data</h2>
        <p className="error-description">Please check the console for details</p>
      </div>
    )
  }

  const [activeTab, setActiveTab] = useState(
    lessonData.enabledTabs?.[0]?.tabId || 
    lessonData.tabs?.[0]?.id || 
    'overview'
  )
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [tabContentLoaded, setTabContentLoaded] = useState(false)
  const [allLessonItems, setAllLessonItems] = useState([])

  const {
    heroConfig = {},
    tabs = lessonData.enabledTabs || [],
    themeColor = '#3b82f6',
  } = lessonData || {}

  // Debug logging
  useEffect(() => {
    console.log('📦 LessonData structure:', {
      hasTabContents: !!lessonData?.tabContents,
      tabContentsLength: lessonData?.tabContents?.length,
      enabledTabs: lessonData?.enabledTabs?.map(t => t.tabId)
    })
  }, [lessonData])

  // Get tab content helper
  const getTabContent = useCallback((tabId) => {
    const baseTabs = ['overview', 'content', 'shortcuts', 'practice', 'techniques']
    
    if (baseTabs.includes(tabId)) {
      return lessonData
    }
    
    if (!lessonData?.tabContents || !Array.isArray(lessonData.tabContents)) {
      console.warn(`⚠️ No tabContents array found for tab: ${tabId}`)
      return null
    }
    
    const tabContent = lessonData.tabContents.find(tc => tc?.tabId === tabId)
    
    if (!tabContent) {
      console.warn(`⚠️ No content found for tab: ${tabId}`)
      return null
    }
    
    return tabContent
  }, [lessonData])

  // Auto-open modal from URL hash
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
          if (itemData.tab) setActiveTab(itemData.tab)
        } catch (e) {
          console.error('Failed to parse item from URL:', e)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Tab content loading simulation
  useEffect(() => {
    setTabContentLoaded(false)
    const timer = setTimeout(() => setTabContentLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  // Fetch all items for cross-lesson linking
  useEffect(() => {
    async function fetchAllItems() {
      try {
        console.log('🔍 Fetching all lesson items...')
        const response = await fetch('/api/lessons/items')
        if (response.ok) {
          const items = await response.json()
          setAllLessonItems(items)
          console.log(`✅ Loaded ${items.length} items`)
        }
      } catch (error) {
        console.error('❌ Failed to fetch items:', error)
      }
    }
    fetchAllItems()
  }, [])

  const activeTabType = useMemo(() => activeTab.split('-')[0], [activeTab])
  const activeTabContent = useMemo(() => getTabContent(activeTab), [activeTab, getTabContent])

  return (
    <>
      <Sidebar />
      
      <main>
        {/* Hero Section */}
        <section className="lesson-hero-section">
          <div className="lesson-hero-background">
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.05)' }} />}>
              <LessonScene />
            </Suspense>
          </div>

          <div className="lesson-hero-content">
            <LessonHero {...heroConfig} />
          </div>
        </section>
        
       {/* Tabs Navigation */}
<div className="lesson-tabs-container">
  <div className="tabs-layout-horizontal">
    <div className="back-button-wrapper" data-tab-count={tabs.length}>  {/* ⬅️ ADDED: Pass tab count */}
      <BackButton />
    </div>
    <div className="tabs-centered">
      <TabNavigation 
        onMouseEnter={playHover}
        tabs={tabs || []}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeColor={themeColor}
      />
    </div>
  </div>
</div>
       
        {/* Loading State */}
        {!tabContentLoaded && <TabContentSkeleton />}

        {/* No Content State */}
        {tabContentLoaded && !activeTabContent && (
          <section className="empty-state">
            <h2 className="empty-state-title">No content available for this tab</h2>
            <p className="empty-state-description">Tab ID: {activeTab}</p>
          </section>
        )}

        {/* OVERVIEW TAB */}
        {tabContentLoaded && activeTabType === 'overview' && activeTabContent && (
          <section className="lesson-section">
            <div className="lesson-container">
              {activeTabContent.overviewTitle && (
                <h2 className="section-title">{activeTabContent.overviewTitle}</h2>
              )}
              {activeTabContent.overviewDescription && (
                <p className="section-description">{activeTabContent.overviewDescription}</p>
              )}

              {activeTabContent.overviewCards?.length > 0 && (
                <div className="lesson-narrow-container">
                  <div className="overview-cards-grid">
                    {activeTabContent.overviewCards.map((card, idx) => (
                      <InfoCard key={idx} {...card} onMouseEnter={playHover} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CONTENT TAB */}
        {tabContentLoaded && activeTabType === 'content' && activeTabContent && (
          <section className="lesson-section">
            <div className="lesson-container">
              <h2 className="section-title">
                {activeTabContent.contentTitle || "Lesson Content"}
              </h2>
              <p className="section-description">
                {activeTabContent.contentDescription || "Explore the key concepts and tools"}
              </p>

              {activeTabContent.categories?.length > 0 && (
                <div className="categories-grid">
                  {activeTabContent.categories.map((category, idx) => (
                    <div key={idx}>
                      <h3 
                        className="category-header"
                        style={{ color: category.color || themeColor }}
                      >
                        {category.name}
                      </h3>

                      <div className="category-items-grid">
                        {(category.items || []).map((item, itemIdx) => (
                          <ClickableCard
                            onMouseEnter={playHover}
                            key={itemIdx}
                            item={item}
                            color={category.color || themeColor}
                            onClick={() => {
                              setSelectedItem({ ...item, color: category.color || themeColor })
                              setCurrentPage(0)
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* TECHNIQUES TAB */}
        {tabContentLoaded && activeTab === 'techniques' && lessonData.techniques?.length > 0 && (
          <section className="lesson-section">
            <div className="lesson-container">
              <h2 className="section-title">
                {lessonData.techniquesTitle || 'Techniques'}
              </h2>
              <p className="section-description">
                {lessonData.techniquesDescription || 'Master essential workflows'}
              </p>

              <div className="categories-grid">
                {lessonData.techniques.map((category, idx) => (
                  <div key={idx}>
                    <h3 
                      className="category-header"
                      style={{ color: category.color || themeColor }}
                    >
                      {category.name}
                    </h3>

                    <div className="category-items-grid">
                      {(category.items || []).map((item, itemIdx) => (
                        <ClickableCard
                          onMouseEnter={playHover}
                          key={itemIdx}
                          item={item}
                          color={category.color || themeColor}
                          onClick={() => {
                            setSelectedItem({ ...item, color: category.color || themeColor })
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

        {/* SHORTCUTS TAB */}
        {tabContentLoaded && activeTabType === 'shortcuts' && activeTabContent && (
          <section className="lesson-section">
            <div className="lesson-container">
              <h2 className="section-title">Essential Shortcuts</h2>
              <p className="section-description">
                Master these keyboard shortcuts to speed up your workflow
              </p>

              {activeTabContent.shortcuts?.length > 0 && (
                <div className="lesson-narrow-container">
                  <div className="shortcuts-grid">
                    {activeTabContent.shortcuts.map((section, idx) => (
                      <div key={idx} className="shortcut-category">
                        <h3 
                          className="shortcut-category-title"
                          style={{ color: themeColor }}
                        >
                          {section.category}
                        </h3>
                        <div className="shortcut-items">
                          {(section.items || []).map((shortcut, itemIdx) => (
                            <div 
                              key={itemIdx} 
                              className="shortcut-item"
                              onMouseEnter={playHover}
                            >
                              <span className="shortcut-action">{shortcut.action}</span>
                              <code 
                                className="shortcut-key"
                                style={{
                                  background: `${themeColor}20`,
                                  color: themeColor,
                                  border: `1px solid ${themeColor}40`
                                }}
                              >
                                {shortcut.key}
                              </code>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* PRACTICE TAB */}
        {tabContentLoaded && activeTabType === 'practice' && activeTabContent && (
          <section className="lesson-section">
            <div className="lesson-container">
              <h2 className="section-title">
                {activeTabContent.practiceTitle || "Practice Projects"}
              </h2>
              <p className="section-description">
                {activeTabContent.practiceDescription || "Apply what you've learned"}
              </p>

              {activeTabContent.practiceProjects?.length > 0 && (
                <div className="lesson-narrow-container">
                  <div className="practice-grid">
                    {activeTabContent.practiceProjects.map((project, index) => (
                      <div key={index} className="practice-card">
                        <div className="practice-content">
                          <div className="practice-details">
                            <div className="practice-header">
                              <div 
                                className="practice-number"
                                style={{
                                  background: `${themeColor}20`,
                                  color: themeColor
                                }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="practice-title">{project.title}</h4>
                                <p className="practice-description">{project.desc}</p>
                              </div>
                            </div>
                            
                            <div className="practice-meta">
                              <span className="practice-duration">⏱️ {project.duration}</span>
                              <span className={`practice-difficulty ${project.difficulty?.toLowerCase()}`}>
                                {project.difficulty}
                              </span>
                            </div>

                            <div className="practice-skills">
                              {(project.skills || []).map((skill, idx) => (
                                <span 
                                  key={idx} 
                                  className="practice-skill-tag"
                                  style={{
                                    background: `${themeColor}20`,
                                    color: themeColor,
                                    border: `1px solid ${themeColor}30`
                                  }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Modal */}
        {selectedItem && (
          <Suspense fallback={null}>
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
          </Suspense>
        )}
      </main>

      <Footer />
    </>
  )
}