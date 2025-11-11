// FILE: components/LessonTemplate.jsx
'use client'

import { useState, useEffect, Suspense, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import Sidebar from '@/components/Sidebar'
import { playHover } from '@/app/utils/sounds'

import { 
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
} from '@/components/shared/LessonComponents'

// ✨ DYNAMIC IMPORTS - Load heavy components only when needed
const LessonScene = dynamic(() => import('@/components/LessonScene'), {
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
      <div style={{ color: '#ffffffff', fontSize: '1.5rem' }}>Loading...</div>
    </div>
  )
})

// Loading skeleton for tab content
const TabContentSkeleton = () => (
  <div style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <div style={{ height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '2rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} style={{ height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  </div>
)

export default function LessonTemplate({ lessonData }) {
  // ✅ Safety check: Don't render if lessonData is invalid
  if (!lessonData || typeof lessonData !== 'object') {
    console.error('❌ Invalid lessonData received:', lessonData)
    return (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h2 style={{ color: '#ef4444' }}>Error: Invalid lesson data</h2>
        <p style={{ color: '#9ca3af' }}>Please check the console for details</p>
      </div>
    )
  }

  const [activeTab, setActiveTab] = useState(lessonData.enabledTabs?.[0]?.tabId || lessonData.tabs?.[0]?.id || 'overview')
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [tabContentLoaded, setTabContentLoaded] = useState(false)

  // 🔍 DEBUG: Log lessonData structure on mount and when it changes
  useEffect(() => {
    console.log('📦 LessonData structure:', {
      hasTabContents: !!lessonData?.tabContents,
      tabContentsIsArray: Array.isArray(lessonData?.tabContents),
      tabContentsLength: lessonData?.tabContents?.length,
      tabContentIds: lessonData?.tabContents?.map(tc => tc.tabId),
      enabledTabs: lessonData?.enabledTabs?.map(t => t.tabId),
      rootLevelFields: lessonData ? Object.keys(lessonData) : 'lessonData is null/undefined',
      fullLessonData: lessonData // See the entire object
    })
  }, [lessonData])
  
  // 🔍 DEBUG: Log when activeTab changes
  useEffect(() => {
    console.log('🔄 Active tab changed to:', activeTab, {
      tabType: activeTab.split('-')[0],
      isBaseTab: ['overview', 'content', 'shortcuts', 'practice', 'techniques'].includes(activeTab),
      tabContentsAvailable: !!lessonData?.tabContents
    })
  }, [activeTab, lessonData])

  // ✅ FIXED: Memoized helper function to get content for any tab
  const getTabContent = useCallback((tabId) => {
    // Base tabs that use root-level lessonData fields
    const baseTabs = ['overview', 'content', 'shortcuts', 'practice', 'techniques']
    
    // If it's a base tab, return the root lessonData
    if (baseTabs.includes(tabId)) {
      return lessonData
    }
    
    // For numbered tabs (e.g., content-2, shortcuts-2), look in tabContents array
    // First check if tabContents exists and is an array
    if (!lessonData?.tabContents || !Array.isArray(lessonData.tabContents)) {
      console.warn(`⚠️ No tabContents array found in lessonData for tab: ${tabId}`, {
        hasTabContents: !!lessonData?.tabContents,
        isArray: Array.isArray(lessonData?.tabContents),
        lessonDataKeys: lessonData ? Object.keys(lessonData) : 'no lessonData'
      })
      return null
    }
    
    const tabContent = lessonData.tabContents.find(tc => tc?.tabId === tabId)
    
    if (!tabContent) {
      console.warn(`⚠️ No content found for tab: ${tabId}. Available tabs in tabContents:`, 
        lessonData.tabContents.map(tc => tc?.tabId))
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
          
          if (itemData.detailedInfo && itemData.detailedInfo.pages) {
            itemData.detailedInfo.pages = itemData.detailedInfo.pages.map(page => {
              const finalMediaUrl = page.mediaType === 'upload' 
                ? page.uploadedMediaUrl 
                : page.image
              
              return {
                ...page,
                finalMediaUrl: finalMediaUrl
              }
            })
          }
          
          setSelectedItem(itemData)
          setCurrentPage(0)
          if (itemData.tab) {
            setActiveTab(itemData.tab)
          }
        } catch (e) {
          console.error('Failed to parse item from URL:', e)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Simulate tab content loading
  useEffect(() => {
    setTabContentLoaded(false)
    const timer = setTimeout(() => setTabContentLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  const {
    heroConfig = {},
    tabs = lessonData.enabledTabs || [], // ✅ FIXED: Use enabledTabs if tabs doesn't exist
    themeColor = '#3b82f6',
  } = lessonData || {}

  // ✅ Get the current tab's type (memoized)
  const activeTabType = useMemo(() => activeTab.split('-')[0], [activeTab])
  
  // ✅ Get content for the active tab (memoized)
  const activeTabContent = useMemo(() => getTabContent(activeTab), [activeTab, getTabContent])

  return (
    <>
      <Sidebar />
      
      <main>
        {/* Hero with 3D Background */}
        <section style={{ position: 'relative', padding: '0', margin: '0 -2rem', width: 'calc(100% + 4rem)', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '3rem' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.3 }}>
            <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'rgba(16, 185, 129, 0.05)' }} />}>
              <LessonScene />
            </Suspense>
          </div>

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
                  tabs={tabs || []}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  activeColor={themeColor}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Show skeleton while content loads */}
        {!tabContentLoaded && <TabContentSkeleton />}

        {/* ✅ Show fallback if no content found */}
        {tabContentLoaded && !activeTabContent && (
          <section style={{ padding: '4rem 0', textAlign: 'center' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '2rem', color: '#8fa9bd' }}>
                No content available for this tab
              </h2>
              <p style={{ color: '#6b7280', marginTop: '1rem' }}>
                Tab ID: {activeTab}
              </p>
            </div>
          </section>
        )}

        {/* ✅ OVERVIEW TAB - Updated to use activeTabContent */}
        {tabContentLoaded && activeTabType === 'overview' && activeTabContent && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              {activeTabContent.overviewTitle && (
                <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                  {activeTabContent.overviewTitle}
                </h2>
              )}
              {activeTabContent.overviewDescription && (
                <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                  {activeTabContent.overviewDescription}
                </p>
              )}

              {activeTabContent.overviewCards && activeTabContent.overviewCards.length > 0 && (
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                    {activeTabContent.overviewCards.map((card, idx) => (
                      <InfoCard key={idx} {...card} onMouseEnter={playHover} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ✅ CONTENT TAB - Updated to use activeTabContent */}
        {tabContentLoaded && activeTabType === 'content' && activeTabContent && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {activeTabContent.contentTitle || "Lesson Content"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {activeTabContent.contentDescription || "Explore the key concepts and tools"}
              </p>

              {activeTabContent.categories && activeTabContent.categories.length > 0 && (
                <div style={{ display: 'grid', gap: '3rem' }}>
                  {activeTabContent.categories.map((category, idx) => (
                    <div key={idx}>
                      <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color || themeColor }}>
                        {category.name}
                      </h3>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
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

        {/* ✅ TECHNIQUES TAB - Only show for base 'techniques' tab */}
        {tabContentLoaded && activeTab === 'techniques' && lessonData.techniques && lessonData.techniques.length > 0 && (
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
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color || themeColor }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
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

        {/* ✅ SHORTCUTS TAB - Updated to use activeTabContent */}
        {tabContentLoaded && activeTabType === 'shortcuts' && activeTabContent && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Essential Shortcuts
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Master these keyboard shortcuts to speed up your workflow
              </p>

              {activeTabContent.shortcuts && activeTabContent.shortcuts.length > 0 && (
                <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                  {activeTabContent.shortcuts.map((section, idx) => (
                    <div key={idx} style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: themeColor }}>
                        {section.category}
                      </h3>
                      <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {(section.items || []).map((shortcut, itemIdx) => (
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
              )}
            </div>
          </section>
        )}

        {/* ✅ PRACTICE TAB - Updated to use activeTabContent */}
        {tabContentLoaded && activeTabType === 'practice' && activeTabContent && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {activeTabContent.practiceTitle || "Practice Projects"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {activeTabContent.practiceDescription || "Apply what you've learned with these hands-on projects"}
              </p>

              {activeTabContent.practiceProjects && activeTabContent.practiceProjects.length > 0 && (
                <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                  {activeTabContent.practiceProjects.map((project, index) => (
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
                            {(project.skills || []).map((skill, idx) => (
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
              )}
            </div>
          </section>
        )}

        {/* Modal - Only loads when selectedItem exists */}
        {selectedItem && (
          <Suspense fallback={null}>
            <DetailModal
              item={selectedItem}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              onMouseEnter={playHover}
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  )
}