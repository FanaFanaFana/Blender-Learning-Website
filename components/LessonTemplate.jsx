// FILE: components/LessonTemplate.jsx
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'
import Sidebar from '@/components/Sidebar'

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

  const {
    heroConfig,
    tabs,
    themeColor,
    overviewCards,
    overviewTitle,
    overviewDescription,
    // For FirstModelLesson
    modelingSteps,
    stepsTitle,
    stepsDescription,
    // For EditModeLesson
    selectionModes,
    modesTitle,
    modesDescription,
    essentialTools,
    toolsTitle,
    toolsDescription,
    // For InterfaceLesson
    interfaceAreas,
    areasTitle,
    areasDescription,
    shortcuts,
    // Modifier lesson
    modifierCategories,
    //Scultping
    techniques,
    brushCategories,
    sculptingTools,
    workflowSteps,
    //HardSurface
    corePrinciples,
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
        <LessonHero {...heroConfig} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>

 <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
  <div className="tabs-wrapper">
              <BackButton />
              <TabNavigation 
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
                    <InfoCard key={idx} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Steps Tab - for categorized steps like modelingSteps */}
        {activeTab === 'steps' && modelingSteps && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {stepsTitle || "Learning Steps"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {stepsDescription || "Follow along step-by-step to build your first model"}
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {modelingSteps.map((category, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.steps.map((step, stepIdx) => (
                        <ClickableCard
                          key={stepIdx}
                          item={step}
                          color={category.color}
                          onClick={() => {
                            setSelectedItem({ ...step, color: category.color })
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

        {/* Modes Tab - for flat selection modes */}
        {activeTab === 'modes' && selectionModes && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {modesTitle || "Selection Modes"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {modesDescription || "Master the three fundamental ways to select and edit geometry"}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {selectionModes.map((mode, idx) => (
                  <ClickableCard
                    key={idx}
                    item={mode}
                    color={mode.color}
                    onClick={() => {
                      setSelectedItem(mode)
                      setCurrentPage(0)
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        
       {/* Tools Tab */}
{activeTab === 'tools' && (essentialTools || sculptingTools) && (
  <section style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
        {toolsTitle || (sculptingTools ? "Sculpting Tools" : "Essential Tools")}
      </h2>
      <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
        {toolsDescription || "Master the essential tools for your workflow"}
      </p>

      {/* Check if it's a flat array or categorized */}
      {(essentialTools && !essentialTools[0]?.tools) ? (
        // Flat array - render directly
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {essentialTools.map((tool, idx) => (
            <ClickableCard
              key={idx}
              item={tool}
              color={tool.color || themeColor}
              onClick={() => {
                setSelectedItem({ ...tool, color: tool.color || themeColor })
                setCurrentPage(0)
              }}
            />
          ))}
        </div>
      ) : (
        // Categorized array
        <div style={{ display: 'grid', gap: '3rem' }}>
          {(sculptingTools || essentialTools).map((category, idx) => {
            const items = category.tools || category.items || []
            return (
              <div key={idx}>
                <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                  {category.name}
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {items.map((tool, toolIdx) => (
                    <ClickableCard
                      key={toolIdx}
                      item={tool}
                      color={category.color}
                      onClick={() => {
                        setSelectedItem({ ...tool, color: category.color })
                        setCurrentPage(0)
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  </section>
)}
        {/* Types Tab - for Modifier Categories */}
        {activeTab === 'types' && modifierCategories && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Modifier Types
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Explore the complete collection of Blender modifiers organized by category
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {modifierCategories.map((category, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.modifiers.map((modifier, modIdx) => (
                        <ClickableCard
                          key={modIdx}
                          item={modifier}
                          color={category.color}
                          onClick={() => {
                            setSelectedItem({ ...modifier, color: category.color })
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

        {/* Areas Tab - for Interface Lesson (interfaceAreas) */}
        {activeTab === 'areas' && interfaceAreas && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                {areasTitle || "Interface Areas"}
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                {areasDescription || "Explore Blender's interface components"}
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {interfaceAreas.map((category, idx) => (
                  <div key={idx}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                      {category.name}
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.areas.map((area, areaIdx) => (
                        <ClickableCard
                          key={areaIdx}
                          item={area}
                          color={category.color}
                          onClick={() => {
                            setSelectedItem({ ...area, color: category.color })
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

        {/* Shortcuts Tab - for Interface Lesson */}
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
                        <div key={itemIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
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

        {/* Brushes Tab - for Sculpting Lesson */}
{activeTab === 'brushes' && brushCategories && (
  <section style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
        Sculpting Brushes
      </h2>
      <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
        Master the essential brushes for digital sculpting
      </p>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {brushCategories.map((category, idx) => (
          <div key={idx}>
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
              {category.name}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {category.brushes.map((brush, brushIdx) => (
                <ClickableCard
                  key={brushIdx}
                  item={brush}
                  color={category.color}
                  onClick={() => {
                    setSelectedItem({ ...brush, color: category.color })
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



{/* Workflow Tab - for Character Modeling Lesson */}
{activeTab === 'workflow' && workflowSteps && (
  <section style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
        Character Modeling Workflow
      </h2>
      <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
        Step-by-step process from concept to finished character
      </p>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {workflowSteps.map((category, idx) => (
          <div key={idx}>
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
              {category.name}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {category.steps.map((step, stepIdx) => (
                <ClickableCard
                  key={stepIdx}
                  item={step}
                  color={category.color}
                  onClick={() => {
                    setSelectedItem({ ...step, color: category.color })
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
                      
                      <button style={{ background: themeColor, border: 'none', padding: '0.875rem 2rem', borderRadius: '10px', color: '#fff', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', flexShrink: 0, transition: 'all 0.3s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
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

        

        {/* Principles Tab - for Hard Surface Lesson */}
{activeTab === 'principles' && corePrinciples && (
  <section style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
        Core Principles
      </h2>
      <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
        Fundamental concepts for hard surface modeling
      </p>

      <div style={{ display: 'grid', gap: '3rem' }}>
        {corePrinciples.map((category, idx) => (
          <div key={idx}>
            <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
              {category.name}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {category.topics.map((topic, topicIdx) => (
                <ClickableCard
                  key={topicIdx}
                  item={topic}
                  color={category.color}
                  onClick={() => {
                    setSelectedItem({ ...topic, color: category.color })
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

{/* Techniques Tab - handles flat arrays and categorized structures */}
{activeTab === 'techniques' && techniques && (
  <section style={{ padding: '4rem 0' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
      <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
        {techniques[0]?.items || techniques[0]?.methods ? 'Advanced Techniques' : 'Essential Techniques'}
      </h2>
      <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
        Essential methods and workflows for professional results
      </p>

      {/* Check if it's a flat array or categorized */}
      {(techniques[0]?.items || techniques[0]?.methods) ? (
        // Categorized structure
        <div style={{ display: 'grid', gap: '3rem' }}>
          {techniques.map((category, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1.5rem', color: category.color }}>
                {category.name}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {(category.items || category.methods)?.map((item, itemIdx) => (
                  <ClickableCard
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
      ) : (
        // Flat array - render directly
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {techniques.map((technique, idx) => (
            <ClickableCard
              key={idx}
              item={technique}
              color={technique.color || themeColor}
              onClick={() => {
                setSelectedItem({ ...technique, color: technique.color || themeColor })
                setCurrentPage(0)
              }}
            />
          ))}
        </div>
      )}
    </div>
  </section>
)}

        {/* Modal */}
        {selectedItem && (
          <DetailModal
            item={selectedItem}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}