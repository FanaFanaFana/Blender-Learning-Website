// FILE: FirstModelLesson.jsx
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

// Import our beautiful reusable components!
import { 
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
  DetailModal,
  SectionHeader
} from '@/components/shared/LessonComponents'

export default function FirstModelLesson() {
  const [activeTab, setActiveTab] = useState('steps')
  const [selectedStep, setSelectedStep] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  // ============================================
  // CONFIGURATION
  // ============================================
  
  const heroConfig = {
    title: 'Your First',
    gradientText: '3D Model',
    subtitle: 'Start your 3D journey with hands-on modeling basics',
    gradientColors: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/filebrowser.svg', title: '1 Project', subtitle: 'Build a coffee mug' }
    ]
  }

  const tabs = [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'steps', icon: '/Icons/tool.svg', label: 'Learning Steps' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ]

  const themeColor = '#3b82f6'

  const overviewCards = [
    {
      icon: '/Icons/mesh_cube.svg',
      title: 'Start Simple',
      content: 'Begin with basic shapes and primitives. Every complex model starts with a cube, sphere, or cylinder. Learn to see objects as combinations of simple forms.'
    },
    {
      icon: '/Icons/editmode_hlt.svg',
      title: 'Learn by Doing',
      content: 'The best way to learn 3D is to create. Follow along, make mistakes, experiment! Each error teaches you something valuable about how 3D modeling works.'
    },
    {
      icon: '/Icons/checkmark.svg',
      title: 'Build Confidence',
      content: 'Your first model might not be perfect - and that\'s completely fine! Every professional artist started exactly where you are. The key is to start and keep creating.'
    }
  ]

  const modelingSteps = [
    {
      name: 'Starting Simple',
      icon: '/Icons/mesh_cube.svg',
      color: '#3b82f6',
      steps: [
        {
          name: 'Add a Cube',
          description: 'Learn the basics of adding objects',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Every 3D journey starts with primitives. The cube is your foundation - simple, predictable, and perfect for learning the basics of 3D modeling.',
            pages: [
              {
                title: 'Adding Your First Object',
                content: 'Press Shift+A to open the Add menu. Navigate to Mesh > Cube. A perfect cube appears at the 3D cursor location. This is your blank canvas!',
                tips: [
                  'Shift+A opens the Add menu anywhere',
                  'The cube appears at the 3D cursor location',
                  'Default cube is 2x2x2 Blender units',
                  'You can delete the default cube (X key) if needed'
                ]
              },
              {
                title: 'Understanding the Default Cube',
                content: 'The cube has 8 vertices (corners), 12 edges, and 6 faces. These three elements - vertices, edges, and faces - are the building blocks of all 3D models.',
                tips: [
                  'Vertices are the points/corners',
                  'Edges connect vertices',
                  'Faces are the surfaces between edges',
                  'All 3D objects are made of these components'
                ]
              }
            ]
          }
        },
        {
          name: 'Edit Mode',
          description: 'Switch between object and edit mode',
          icon: '/Icons/editmode_hlt.svg',
          detailedInfo: {
            overview: 'Edit Mode is where the magic happens. This is where you reshape, sculpt, and transform your basic shapes into anything you can imagine.',
            pages: [
              {
                title: 'Entering Edit Mode',
                content: 'Press Tab to enter Edit Mode. Your cube turns orange/yellow and you can now see its vertices. Press Tab again to return to Object Mode.',
                tips: [
                  'Tab toggles between Object and Edit Mode',
                  'Orange color indicates Edit Mode',
                  'You can only edit one object at a time',
                  'Most modeling happens in Edit Mode'
                ]
              },
              {
                title: 'Selection Modes',
                content: 'Press 1 for Vertex mode, 2 for Edge mode, 3 for Face mode. Each mode lets you select and manipulate different components of your mesh.',
                tips: [
                  '1 = Vertex selection mode',
                  '2 = Edge selection mode', 
                  '3 = Face selection mode',
                  'You can have multiple modes active at once'
                ]
              }
            ]
          }
        },
        {
          name: 'Basic Navigation',
          description: 'Move around your 3D scene',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Good navigation is essential for 3D modeling. Learn to orbit, pan, and zoom smoothly around your objects.',
            pages: [
              {
                title: 'Mouse Navigation',
                content: 'Middle mouse button to orbit, Shift+Middle mouse to pan, scroll wheel to zoom. These are the core navigation controls you\'ll use constantly.',
                tips: [
                  'MMB (middle mouse) = rotate view',
                  'Shift+MMB = pan view',
                  'Scroll wheel = zoom in/out',
                  'Numpad keys jump to orthographic views'
                ]
              },
              {
                title: 'Frame Selected',
                content: 'Press . (period) on the numpad or View > Frame Selected to center the view on your selection. Super useful when working on specific parts.',
                tips: [
                  'Numpad . frames selected object',
                  'Home key frames all objects',
                  'Use this when you lose your object',
                  'Works in both Object and Edit Mode'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Modeling Tools',
      icon: '/Icons/tool.svg',
      color: '#f59e0b',
      steps: [
        {
          name: 'Extrude',
          description: 'Pull out new geometry',
          icon: '/Icons/ops.mesh.extrude_region_move.svg',
          detailedInfo: {
            overview: 'Extrude is THE most important modeling tool. It pulls out faces, edges, or vertices to create new geometry. You\'ll use this constantly!',
            pages: [
              {
                title: 'Basic Extrusion',
                content: 'Select a face in Edit Mode (press 3 for face mode). Press E to extrude, move your mouse outward, and click to confirm. New geometry extends from your selection.',
                tips: [
                  'E key activates extrude',
                  'Move mouse to pull geometry out',
                  'Click to confirm, right-click to cancel',
                  'Works on vertices, edges, and faces'
                ]
              },
              {
                title: 'Constrained Extrusion',
                content: 'After pressing E, press X, Y, or Z to constrain movement to a specific axis. This keeps your extrusions straight and precise.',
                tips: [
                  'E then X = extrude along X axis',
                  'E then Y = extrude along Y axis',
                  'E then Z = extrude along Z axis',
                  'Type numbers for exact distances'
                ]
              }
            ]
          }
        },
        {
          name: 'Scale',
          description: 'Make things bigger or smaller',
          icon: '/Icons/ops.transform.resize.svg',
          detailedInfo: {
            overview: 'Scaling resizes your selection. It\'s essential for proportioning your models and creating variation in size.',
            pages: [
              {
                title: 'Basic Scaling',
                content: 'Press S to scale, move your mouse, and click. The selection grows or shrinks from its center point.',
                tips: [
                  'S key activates scale',
                  'Move mouse away = bigger',
                  'Move mouse closer = smaller',
                  'Type numbers for exact scale (2 = double size)'
                ]
              },
              {
                title: 'Axis Scaling',
                content: 'Press S then X, Y, or Z to scale along one axis only. Great for stretching or squashing shapes in one direction.',
                tips: [
                  'S then X = scale on X axis',
                  'S then Shift+X = scale on Y and Z (not X)',
                  'Hold Ctrl while scaling to snap',
                  'Type 0 to flatten on an axis (S, X, 0)'
                ]
              }
            ]
          }
        },
        {
          name: 'Loop Cut',
          description: 'Add edge loops for more detail',
          icon: '/Icons/ops.mesh.loopcut_slide.svg',
          detailedInfo: {
            overview: 'Loop cuts add rings of edges around your mesh. They\'re perfect for adding detail where you need it and controlling how your model deforms.',
            pages: [
              {
                title: 'Creating Loop Cuts',
                content: 'Press Ctrl+R, hover over your mesh to see a preview line, click to place it, then move your mouse to position it. Click again to confirm.',
                tips: [
                  'Ctrl+R activates loop cut tool',
                  'Scroll wheel to add multiple loops',
                  'Move mouse to position before final click',
                  'Press Enter to place at center'
                ]
              }
            ]
          }
        },
        {
          name: 'Inset Faces',
          description: 'Create faces inside faces',
          icon: '/Icons/ops.mesh.inset.svg',
          detailedInfo: {
            overview: 'Inset creates smaller faces inside your selected faces. Perfect for adding details like panels, windows, or decorative elements.',
            pages: [
              {
                title: 'Using Inset',
                content: 'Select one or more faces (press 3), then press I. Move your mouse inward and click. A new face appears inside with edges connecting to the original.',
                tips: [
                  'I key activates inset',
                  'Works on single or multiple faces',
                  'Great before extruding for detail',
                  'Hold Ctrl for even thickness'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Finishing Touches',
      icon: '/Icons/shade_smooth.svg',
      color: '#10b981',
      steps: [
        {
          name: 'Smooth Shading',
          description: 'Make surfaces look smooth',
          icon: '/Icons/shade_smooth.svg',
          detailedInfo: {
            overview: 'Smooth shading makes your models look organic and polished by blending the lighting between faces.',
            pages: [
              {
                title: 'Applying Smooth Shading',
                content: 'Right-click your object and choose "Shade Smooth". Your model instantly looks more organic and less blocky.',
                tips: [
                  'Right-click > Shade Smooth',
                  'Shade Flat returns to angular look',
                  'Doesn\'t change geometry, only lighting',
                  'Use on organic models, not hard-surface'
                ]
              }
            ]
          }
        },
        {
          name: 'Subdivision Surface',
          description: 'Add smooth detail automatically',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'The Subdivision Surface modifier automatically smooths and adds detail to your mesh. It\'s like magic for creating smooth, high-quality models.',
            pages: [
              {
                title: 'Adding Subdivision',
                content: 'Select your object, go to Modifiers panel, Add Modifier > Subdivision Surface. Your model becomes instantly smoother!',
                tips: [
                  'Non-destructive - can be removed anytime',
                  'Increase levels for more smoothness',
                  'Works best with clean quad topology',
                  'Edge loops control where it stays sharp'
                ]
              }
            ]
          }
        }
      ]
    }
  ]

  const practiceProjects = [
    { 
      title: 'Create the Mug Body', 
      desc: 'Add a cylinder, scale it, and adjust proportions', 
      duration: '5 min', 
      difficulty: 'Beginner',
      skills: ['Add primitives', 'Scale tool', 'Proportional editing']
    },
    { 
      title: 'Add Thickness', 
      desc: 'Use extrude and scale to create hollow interior', 
      duration: '5 min', 
      difficulty: 'Beginner',
      skills: ['Extrude faces', 'Inset tool', 'Face selection']
    },
    { 
      title: 'Model the Handle', 
      desc: 'Create a torus, edit it into a handle shape', 
      duration: '10 min', 
      difficulty: 'Intermediate',
      skills: ['Add torus', 'Edit mode', 'Proportional editing', 'Join objects']
    },
    { 
      title: 'Add Final Details', 
      desc: 'Smooth shading and add a subdivision surface modifier', 
      duration: '10 min', 
      difficulty: 'Beginner',
      skills: ['Smooth shading', 'Modifiers', 'Material basics']
    }
  ]

  // ============================================
  // RENDER
  // ============================================
  
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        <LessonHero {...heroConfig} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative' }}>
    <BackButton />
    
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <TabNavigation 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        activeColor={themeColor}
      />
    </div>
  </div>
</div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <SectionHeader 
                  title="Welcome to 3D Modeling!"
                  description="Creating your first 3D model is an exciting milestone! In this lesson, you'll learn the fundamental tools and techniques that every 3D artist uses daily."
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

        {/* Steps Tab */}
        {activeTab === 'steps' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Learning Steps
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Follow along step-by-step to build your first model
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
                            setSelectedStep({ ...step, color: category.color })
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
        {activeTab === 'practice' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Practice Project: Coffee Mug
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Apply everything you've learned by creating a simple coffee mug
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
                            <span key={idx} style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', background: 'rgba(59, 130, 246, 0.1)', color: themeColor, borderRadius: '8px', border: `1px solid ${themeColor}30` }}>
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

              {/* Tip Box */}
              <div style={{ maxWidth: '1100px', margin: '3rem auto 0', background: 'rgba(59, 130, 246, 0.1)', padding: '2rem', borderRadius: '16px', border: `2px solid ${themeColor}40` }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>💡</span>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: themeColor }}>Pro Tip: Save Your Work!</h4>
                    <p style={{ color: '#b0c4d4', margin: 0, lineHeight: '1.6' }}>
                      Get into the habit of saving frequently (Ctrl+S). Blender also has auto-save, but manual saves ensure you never lose your progress. Your future self will thank you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Modal */}
        {selectedStep && (
          <DetailModal
            item={selectedStep}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onClose={() => setSelectedStep(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

// ============================================
// ✅ FIXED ICON PATHS (matching Blender conventions):
// - Extrude: ops.mesh.extrude_region_move.svg
// - Scale: ops.transform.resize.svg
// - Loop Cut: ops.mesh.loopcut_slide.svg
// - Inset: ops.mesh.inset.svg
// ============================================