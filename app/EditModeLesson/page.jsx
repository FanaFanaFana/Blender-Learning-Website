// FILE: EditModeLesson.jsx
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

export default function EditModeLesson() {
  const [activeTab, setActiveTab] = useState('tools')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  // ============================================
  // CONFIGURATION - ENHANCED WITH MORE TOOLS!
  // ============================================
  
  const heroConfig = {
    title: 'Edit Mode',
    gradientText: 'Fundamentals',
    subtitle: 'Master the art of manipulating vertices, edges, and faces',
    gradientColors: 'linear-gradient(135deg, #10b981, #34d399, #6ee7b7)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/editmode_hlt.svg', title: '20+ Tools', subtitle: 'Complete toolkit' }
    ]
  }

  const tabs = [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'modes', icon: '/Icons/editmode_hlt.svg', label: 'Selection Modes' },
    { id: 'tools', icon: '/Icons/tool.svg', label: 'Essential Tools' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ]

  const themeColor = '#10b981'

  const overviewCards = [
    {
      icon: '/Icons/editmode_hlt.svg',
      title: 'What is Edit Mode?',
      content: 'Edit Mode is where you directly manipulate the geometry of your 3D objects. While Object Mode moves entire objects, Edit Mode lets you reshape them by moving individual vertices, edges, and faces.'
    },
    {
      icon: '/Icons/mesh_cube.svg',
      title: 'The Building Blocks',
      content: 'All 3D meshes are made of three components: Vertices (points in space), Edges (lines between vertices), and Faces (surfaces enclosed by edges). Mastering these is the foundation of 3D modeling.'
    },
    {
      icon: '/Icons/tool.svg',
      title: 'Non-Destructive Editing',
      content: 'Edit Mode changes are live and reversible. You can always undo (Ctrl+Z) or revert changes. This gives you the freedom to experiment without fear of ruining your model.'
    }
  ]

  const selectionModes = [
    {
      name: 'Vertex Select',
      icon: '/Icons/vertexsel.svg',
      color: '#10b981',
      description: 'Select and manipulate individual points',
      detailedInfo: {
        overview: 'Vertex mode lets you select and move individual points in your mesh. Vertices are the most precise selection type and the foundation of all geometry.',
        pages: [
          {
            title: 'Selecting Vertices',
            content: 'Click to select individual vertices, or drag to box select. Hold Shift to add to selection, Alt to deselect. Selected vertices turn orange/white.',
            tips: [
              'Press 1 on keyboard to switch to Vertex mode',
              'Alt+A deselects all vertices',
              'Ctrl+I inverts your selection',
              'L selects all connected vertices (linked)'
            ]
          },
          {
            title: 'Moving Vertices',
            content: 'Press G to grab/move selected vertices. Move your mouse and click to confirm. Press X, Y, or Z to constrain movement to an axis. Type numbers for precise distances.',
            tips: [
              'G then X moves only along X axis',
              'Shift+Z moves on XY plane (excludes Z)',
              'Hold Ctrl while moving to snap to grid',
              'Double-tap G to slide along connected edges'
            ]
          },
          {
            title: 'Merging Vertices',
            content: 'Select multiple vertices and press M to merge them. Choose "At Center", "At Cursor", or "At First/Last". Perfect for closing gaps or fixing duplicate vertices.',
            tips: [
              'M opens merge menu',
              'Use "By Distance" to auto-merge close vertices',
              'Merging reduces polygon count',
              'Great for cleaning up imported models'
            ]
          }
        ]
      }
    },
    {
      name: 'Edge Select',
      icon: '/Icons/edgesel.svg',
      color: '#f59e0b',
      description: 'Select and work with edges between vertices',
      detailedInfo: {
        overview: 'Edge mode lets you work with the lines connecting vertices. Edges define the structure and flow of your mesh, making them crucial for topology.',
        pages: [
          {
            title: 'Selecting Edges',
            content: 'Click to select individual edges. Alt+Click selects an entire edge loop (ring of connected edges). This is incredibly useful for adding detail or making selections.',
            tips: [
              'Press 2 on keyboard to switch to Edge mode',
              'Alt+Click selects full edge loops',
              'Ctrl+Alt+Click selects edge rings',
              'Shift+Alt+Click adds loops to selection'
            ]
          },
          {
            title: 'Subdividing Edges',
            content: 'Right-click selected edges and choose "Subdivide" to split them into multiple segments. Add more geometry where you need extra detail.',
            tips: [
              'Subdivide adds vertices at edge midpoints',
              'Use F9 after subdividing to adjust settings',
              'More subdivisions = smoother curves',
              'Don\'t over-subdivide - keep it clean!'
            ]
          },
          {
            title: 'Loop Cut Tool',
            content: 'Press Ctrl+R to activate Loop Cut tool. Hover over edges to preview, click to place, move to position, click again to confirm. The fastest way to add edge loops!',
            tips: [
              'Scroll mouse wheel to add multiple loops',
              'Press E after placing to slide loops',
              'Loops follow the natural flow of geometry',
              'Essential for organic modeling'
            ]
          }
        ]
      }
    },
    {
      name: 'Face Select',
      icon: '/Icons/facesel.svg',
      color: '#8b5cf6',
      description: 'Select and manipulate surfaces',
      detailedInfo: {
        overview: 'Face mode lets you work with the surfaces of your mesh. Faces are what you see when you render - they catch light and display materials.',
        pages: [
          {
            title: 'Selecting Faces',
            content: 'Click to select individual faces. The face highlights in a translucent color. You can select multiple faces to work on larger areas of your model.',
            tips: [
              'Press 3 on keyboard to switch to Face mode',
              'Alt+Click selects face loops',
              'L selects all linked faces',
              'Ctrl+L selects all faces of mesh'
            ]
          },
          {
            title: 'Extruding Faces',
            content: 'Select a face and press E to extrude. Move your mouse outward and click. This creates new geometry extending from the original face - the most used modeling operation!',
            tips: [
              'E then S scales extruded face',
              'E then right-click cancels extrusion',
              'Alt+E opens extrude menu with options',
              'Extrude Individual (Alt+E) on multiple faces'
            ]
          },
          {
            title: 'Inset Faces',
            content: 'Press I to inset selected faces - creates a smaller face inside the original. Perfect for adding detail like panels, windows, or decorative elements.',
            tips: [
              'I then move mouse to control inset depth',
              'Hold Ctrl for even inset thickness',
              'O toggles individual face inset',
              'Combine with Extrude for complex shapes'
            ]
          }
        ]
      }
    }
  ]

  const essentialTools = [
    {
      name: 'Extrude',
      icon: '/Icons/ops.mesh.extrude_region_move.svg',
      color: '#10b981',
      description: 'Create new geometry from selection',
      detailedInfo: {
        overview: 'Extrude is THE fundamental modeling tool. It pulls your selection outward, creating new connected geometry. Almost every model uses extrusion.',
        pages: [
          {
            title: 'Basic Extrusion',
            content: 'Select vertices, edges, or faces, press E, move mouse, click. That\'s it! The selected elements move outward while new geometry connects them to the original.',
            tips: [
              'E for extrude, G for grab, R for rotate, S for scale',
              'Can extrude multiple times in succession',
              'Right-click cancels extrusion',
              'Most used modeling operation in Blender'
            ]
          },
          {
            title: 'Extrude Along Normals',
            content: 'After pressing E, tap Alt+S to extrude along surface normals. Great for adding uniform thickness or creating organic growth patterns.',
            tips: [
              'Works best on curved surfaces',
              'Maintains surface direction',
              'Perfect for thickening shells',
              'Combine with proportional editing'
            ]
          }
        ]
      }
    },
    {
      name: 'Inset Faces',
      icon: '/Icons/ops.mesh.inset.svg',
      color: '#8b5cf6',
      description: 'Create faces inside faces',
      detailedInfo: {
        overview: 'Inset creates smaller faces inside your selected faces. Perfect for adding details like panels, windows, or decorative elements.',
        pages: [
          {
            title: 'Using Inset',
            content: 'Select faces (press 3), then press I. Move mouse inward and click. A new face appears inside with edges connecting to the original.',
            tips: [
              'I key activates inset',
              'Works on single or multiple faces',
              'Hold Ctrl for even thickness',
              'O toggles individual face inset',
              'Combine with Extrude for detail'
            ]
          }
        ]
      }
    },
    {
      name: 'Bevel',
      icon: '/Icons/ops.mesh.bevel.svg',
      color: '#ec4899',
      description: 'Round edges and corners',
      detailedInfo: {
        overview: 'Bevel creates smooth transitions at edges and corners. Nothing in real life has perfectly sharp edges - beveling adds realism to your models.',
        pages: [
          {
            title: 'Beveling Edges',
            content: 'Select edges (or vertices), press Ctrl+B, move mouse to control width, click to confirm. Scroll wheel adds segments for smoother curves.',
            tips: [
              'More segments = smoother result',
              'Hold Shift for precise control',
              'Works on edges and vertices',
              'Essential for hard-surface modeling',
              'Ctrl+Shift+B for vertex bevel'
            ]
          }
        ]
      }
    },
    {
      name: 'Loop Cut',
      icon: '/Icons/ops.mesh.loopcut_slide.svg',
      color: '#3b82f6',
      description: 'Add edge loops to mesh',
      detailedInfo: {
        overview: 'Loop Cut adds complete rings of edges around your mesh. Essential for adding subdivision and controlling deformation in organic models.',
        pages: [
          {
            title: 'Placing Loop Cuts',
            content: 'Press Ctrl+R, hover over mesh to preview, click to confirm position, move to place, click again. Scroll wheel adds multiple loops at once!',
            tips: [
              'Scroll mouse wheel for multiple loops',
              'E after placing to evenly space',
              'Double-click edges to select loops first',
              'Loops follow mesh topology flow',
              'Essential for character modeling'
            ]
          }
        ]
      }
    },
    {
      name: 'Knife Tool',
      icon: '/Icons/ops.mesh.knife_tool.svg',
      color: '#f59e0b',
      description: 'Cut new edges into mesh',
      detailedInfo: {
        overview: 'The Knife tool lets you draw new edges directly onto your mesh. Click to place vertices, then press Enter to confirm or Esc to cancel.',
        pages: [
          {
            title: 'Using the Knife',
            content: 'Press K to activate Knife tool. Click on your mesh to place cut points. The tool shows a preview line. Press Enter to confirm cuts, Esc to cancel.',
            tips: [
              'C enables angle constraint (45° snapping)',
              'Hold Ctrl to snap to edge midpoints',
              'Z enables cut-through (cuts backfaces too)',
              'Great for adding detail to flat surfaces',
              'E starts new cut from last point'
            ]
          }
        ]
      }
    },
    {
      name: 'Proportional Editing',
      icon: '/Icons/ops.transform.translate.svg',
      color: '#06b6d4',
      description: 'Edit with soft falloff',
      detailedInfo: {
        overview: 'Proportional Editing affects nearby geometry with a soft falloff. Perfect for organic modeling - pull one vertex and nearby ones follow smoothly.',
        pages: [
          {
            title: 'Enabling Proportional Edit',
            content: 'Press O to toggle Proportional Editing. When active, transforming vertices affects surrounding geometry. Scroll wheel adjusts influence radius.',
            tips: [
              'O toggles proportional editing on/off',
              'Scroll wheel changes influence size',
              'Shift+O changes falloff shape',
              'Perfect for sculpting basic forms',
              'Works with move, rotate, and scale'
            ]
          }
        ]
      }
    },
    {
      name: 'Merge',
      icon: '/Icons/automerge_off.svg',
      color: '#a855f7',
      description: 'Combine vertices into one',
      detailedInfo: {
        overview: 'Merge combines multiple vertices into a single point. Essential for closing gaps and cleaning up geometry.',
        pages: [
          {
            title: 'Merging Vertices',
            content: 'Select vertices, press M to open merge menu. Choose At Center, At Cursor, At First, At Last, or By Distance.',
            tips: [
              'M opens merge menu',
              'By Distance auto-merges close vertices',
              'Great for cleanup work',
              'Reduces polygon count',
              'At Cursor useful for precise placement'
            ]
          }
        ]
      }
    },
    {
      name: 'Spin Tool',
      icon: '/Icons/ops.mesh.spin.svg',
      color: '#14b8a6',
      description: 'Revolve geometry around axis',
      detailedInfo: {
        overview: 'Spin tool rotates selected geometry around the 3D cursor, creating lathe-like objects. Perfect for vases, bowls, or any circular objects.',
        pages: [
          {
            title: 'Using Spin',
            content: 'Position 3D cursor at center point, select edge loop or vertices, Alt+R for Spin tool. Adjust angle and steps for smooth revolution.',
            tips: [
              'Place cursor carefully - it\'s the pivot',
              'Works great for pottery/vases',
              'Adjust steps for smoothness',
              'Can create partial revolutions',
              'Great for symmetric objects'
            ]
          }
        ]
      }
    },
    {
      name: 'Shrink/Fatten',
      icon: '/Icons/con_shrinkwrap.svg',
      color: '#84cc16',
      description: 'Move along normals',
      detailedInfo: {
        overview: 'Shrink/Fatten moves geometry along its normal direction. Perfect for adjusting thickness or creating organic bulges.',
        pages: [
          {
            title: 'Shrink/Fatten',
            content: 'Select geometry, press Alt+S to shrink or fatten. Positive values expand outward, negative values shrink inward along normals.',
            tips: [
              'Alt+S activates tool',
              'Works on any selection',
              'Great for organic shapes',
              'Combine with proportional editing',
              'Type numbers for precision'
            ]
          }
        ]
      }
    },
    {
      name: 'Slide Edge',
      icon: '/Icons/ops.transform.edge_slide.svg',
      color: '#10b981',
      description: 'Slide edges along topology',
      detailedInfo: {
        overview: 'Edge Slide moves edges along their connected edges without breaking topology. Perfect for adjusting edge loops.',
        pages: [
          {
            title: 'Sliding Edges',
            content: 'Select edges, press GG (double-tap G) to slide along edge direction. Great for repositioning edge loops.',
            tips: [
              'GG activates edge slide',
              'C toggles clamping',
              'E toggles even mode',
              'Perfect after loop cuts',
              'Maintains mesh flow'
            ]
          }
        ]
      }
    },
    {
      name: 'Bridge Edge Loops',
      icon: '/Icons/mod_edgesplit.svg',
      color: '#f59e0b',
      description: 'Connect two edge loops',
      detailedInfo: {
        overview: 'Bridge Edge Loops connects two separate edge loops with faces. Perfect for connecting body parts or filling gaps.',
        pages: [
          {
            title: 'Bridging Loops',
            content: 'Select two edge loops, right-click > Bridge Edge Loops. Creates smooth transition between loops with faces.',
            tips: [
              'Both loops need same vertex count',
              'Right-click for context menu',
              'Adjust smoothness in F9',
              'Great for character modeling',
              'Can twist connection'
            ]
          }
        ]
      }
    },
    {
      name: 'Subdivide',
      icon: '/Icons/mesh_grid.svg',
      color: '#8b5cf6',
      description: 'Add geometry to selection',
      detailedInfo: {
        overview: 'Subdivide splits edges and faces, adding new geometry. Essential for adding detail where you need it most.',
        pages: [
          {
            title: 'Subdividing Geometry',
            content: 'Select edges or faces, right-click > Subdivide. Adds vertices and edges at midpoints, creating denser geometry.',
            tips: [
              'Right-click for context menu',
              'Press F9 to adjust subdivisions',
              'Works on edges, faces, or vertices',
              'Great before sculpting',
              'Don\'t over-subdivide!'
            ]
          }
        ]
      }
    },
    {
      name: 'Fill/Grid Fill',
      icon: '/Icons/mesh_grid.svg',
      color: '#f43f5e',
      description: 'Create faces from edges',
      detailedInfo: {
        overview: 'Fill creates faces between selected edges or vertices. Grid Fill creates organized quad topology - essential for clean mesh flow.',
        pages: [
          {
            title: 'Filling Gaps',
            content: 'Select edges forming a loop, press F to fill with a face. For complex shapes, use Grid Fill (Ctrl+F > Grid Fill) for clean topology.',
            tips: [
              'F fills selected vertices/edges',
              'Grid Fill creates perfect quad flow',
              'Works best with even edge counts',
              'Essential for closing holes',
              'Beauty Fill for triangulation'
            ]
          }
        ]
      }
    },
    {
      name: 'Dissolve',
      icon: '/Icons/snap_face.svg',
      color: '#22d3ee',
      description: 'Remove geometry cleanly',
      detailedInfo: {
        overview: 'Dissolve removes selected geometry while preserving surrounding faces. Unlike delete, it maintains mesh continuity.',
        pages: [
          {
            title: 'Dissolving Elements',
            content: 'Select vertices/edges/faces, press X > Dissolve. Removes selection while keeping mesh intact. Great for cleanup work.',
            tips: [
              'X opens delete menu',
              'Dissolve keeps mesh connected',
              'Limited Dissolve removes unnecessary edges',
              'Better than delete for topology',
              'Ctrl+X for quick dissolve'
            ]
          }
        ]
      }
    },
    {
      name: 'Separate',
      icon: '/Icons/split_horizontal.svg',
      color: '#fbbf24',
      description: 'Split mesh into objects',
      detailedInfo: {
        overview: 'Separate tool splits selected geometry into a new object. Essential for organizing complex models into manageable parts.',
        pages: [
          {
            title: 'Separating Geometry',
            content: 'Select geometry, press P to open Separate menu. Choose Selection, By Material, or By Loose Parts to create new objects.',
            tips: [
              'P opens separate menu',
              'Creates new objects from selection',
              'By Loose Parts splits disconnected mesh',
              'By Material splits by materials',
              'Useful for organizing complex models'
            ]
          }
        ]
      }
    },
    {
      name: 'Rip',
      icon: '/Icons/ops.mesh.rip.svg',
      color: '#fb923c',
      description: 'Separate connected vertices',
      detailedInfo: {
        overview: 'Rip tool splits connected vertices, creating separate geometry. Essential for creating openings or separating mesh parts.',
        pages: [
          {
            title: 'Ripping Geometry',
            content: 'Select vertices or edges, press V to rip and move. Creates duplicate vertices at selection, breaking connections.',
            tips: [
              'V activates rip tool',
              'Great for creating openings',
              'Duplicates vertices at split',
              'Move immediately after ripping',
              'Alt+V for rip fill (fills gap)'
            ]
          }
        ]
      }
    },
    {
      name: 'Poke Faces',
      icon: '/Icons/panel_close.svg',
      color: '#f472b6',
      description: 'Add center vertex to faces',
      detailedInfo: {
        overview: 'Poke Faces adds a vertex in the center of each selected face, splitting them into triangles. Useful for creating center details.',
        pages: [
          {
            title: 'Poking Faces',
            content: 'Select faces, Alt+P or Mesh > Poke Faces. Adds center vertex and connects to all edges, creating triangular faces.',
            tips: [
              'Creates center vertex in each face',
              'Converts quads to triangles',
              'Great for star patterns',
              'Use before inset for details',
              'Can be undone with limited dissolve'
            ]
          }
        ]
      }
    },
    {
      name: 'Shear',
      icon: '/Icons/ops.transform.shear.svg',
      color: '#a855f7',
      description: 'Slant geometry parallel',
      detailedInfo: {
        overview: 'Shear tool slants geometry while keeping opposite sides parallel. Perfect for creating italic text or architectural details.',
        pages: [
          {
            title: 'Shearing Geometry',
            content: 'Select geometry, Ctrl+Shift+Alt+S for shear. Move mouse to slant, press X/Y/Z to constrain axis. Creates parallelogram effect.',
            tips: [
              'Great for italic effects',
              'Maintains parallel edges',
              'Useful in architectural modeling',
              'Combine with proportional edit',
              'Works on any selection type'
            ]
          }
        ]
      }
    },
    {
      name: 'To Sphere',
      icon: '/Icons/ops.transform.tosphere.svg',
      color: '#14b8a6',
      description: 'Push geometry toward sphere',
      detailedInfo: {
        overview: 'To Sphere pushes selected geometry toward a spherical shape. Great for smoothing corners or creating rounded forms.',
        pages: [
          {
            title: 'To Sphere',
            content: 'Select geometry, Shift+Alt+S to push toward sphere shape. Adjust factor to control how spherical the result becomes.',
            tips: [
              'Shift+Alt+S activates tool',
              '0-1 controls sphere amount',
              'Great for rounding corners',
              'Works well on subdivided meshes',
              'Useful for organic modeling'
            ]
          }
        ]
      }
    },
    {
      name: 'Duplicate',
      icon: '/Icons/split_vertical.svg',
      color: '#ec4899',
      description: 'Copy selected geometry',
      detailedInfo: {
        overview: 'Duplicate creates a copy of your selection that\'s immediately ready to move. Essential for creating repeated elements.',
        pages: [
          {
            title: 'Duplicating Geometry',
            content: 'Select geometry, press Shift+D to duplicate. Move your mouse to position, click to confirm. The new geometry stays part of the same object.',
            tips: [
              'Shift+D duplicates and moves',
              'Right-click to cancel movement',
              'Press X/Y/Z to constrain axis',
              'Alt+D for linked duplicate',
              'Great for creating patterns'
            ]
          }
        ]
      }
    },
    {
      name: 'Smooth Vertices',
      icon: '/Icons/ops.mesh.vertices_smooth.svg',
      color: '#06b6d4',
      description: 'Smooth vertex positions',
      detailedInfo: {
        overview: 'Smooth Vertices averages the position of selected vertices with their neighbors, creating smoother surfaces.',
        pages: [
          {
            title: 'Smoothing Vertices',
            content: 'Select vertices, right-click > Smooth Vertices. Reduces sharp peaks and creates organic flowing shapes.',
            tips: [
              'Press F9 to adjust iterations',
              'More iterations = smoother result',
              'Works best on dense geometry',
              'Great for organic shapes',
              'Doesn\'t add geometry'
            ]
          }
        ]
      }
    }
  ]

  const practiceExercises = [
    { 
      title: 'Build a Simple House', 
      desc: 'Use extrude and inset to create walls, windows, and a roof', 
      duration: '10 min', 
      difficulty: 'Beginner',
      skills: ['Extrude faces', 'Inset tool', 'Scale operations']
    },
    { 
      title: 'Model a Stylized Tree', 
      desc: 'Use loop cuts and proportional editing for organic shapes', 
      duration: '15 min', 
      difficulty: 'Beginner',
      skills: ['Loop cuts', 'Proportional editing', 'Smooth shading']
    },
    { 
      title: 'Create a Character Head Base', 
      desc: 'Practice edge loops and face modeling for character topology', 
      duration: '20 min', 
      difficulty: 'Intermediate',
      skills: ['Edge loops', 'Face selection', 'Subdivision workflow']
    },
    { 
      title: 'Design a Mechanical Part', 
      desc: 'Use bevel, knife tool, and precise edge work', 
      duration: '15 min', 
      difficulty: 'Intermediate',
      skills: ['Bevel tool', 'Knife cuts', 'Hard surface modeling']
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
                  title="Welcome to Edit Mode!"
                  description="Edit Mode is where the real magic of 3D modeling happens. This is where you'll spend most of your time transforming simple shapes into detailed creations."
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

        {/* Selection Modes Tab */}
        {activeTab === 'modes' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Selection Modes
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Master the three fundamental ways to select and edit geometry
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {selectionModes.map((mode, idx) => (
                  <ClickableCard
                    key={idx}
                    item={mode}
                    color={mode.color}
                    onClick={() => {
                      setSelectedTopic(mode)
                      setCurrentPage(0)
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Essential Tools Tab */}
        {activeTab === 'tools' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Essential Tools
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                The must-know tools for every 3D modeler
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {essentialTools.map((tool, idx) => (
                  <ClickableCard
                    key={idx}
                    item={tool}
                    color={tool.color}
                    onClick={() => {
                      setSelectedTopic(tool)
                      setCurrentPage(0)
                    }}
                  />
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
                Practice Exercises
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Apply what you've learned with these hands-on projects
              </p>

              <div style={{ display: 'grid', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
                {practiceExercises.map((exercise, index) => (
                  <div key={index} style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '2rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                          <div style={{ background: `${themeColor}20`, color: themeColor, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700', flexShrink: 0 }}>
                            {index + 1}
                          </div>
                          <div>
                            <h4 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{exercise.title}</h4>
                            <p style={{ color: '#8fa9bd', margin: 0, fontSize: '1rem' }}>{exercise.desc}</p>
                          </div>
                        </div>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                          <span style={{ fontSize: '0.9rem', color: '#7a8c9e' }}>⏱️ {exercise.duration}</span>
                          <span style={{ fontSize: '0.9rem', padding: '0.25rem 0.75rem', borderRadius: '12px', background: exercise.difficulty === 'Beginner' ? '#10b98120' : '#f59e0b20', color: exercise.difficulty === 'Beginner' ? '#10b981' : '#f59e0b' }}>
                            {exercise.difficulty}
                          </span>
                        </div>

                        <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                          {exercise.skills.map((skill, idx) => (
                            <span key={idx} style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', background: 'rgba(16, 185, 129, 0.1)', color: themeColor, borderRadius: '8px', border: `1px solid ${themeColor}30` }}>
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
              <div style={{ maxWidth: '1100px', margin: '3rem auto 0', background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '16px', border: `2px solid ${themeColor}40` }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>💡</span>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: themeColor }}>Pro Tip: Practice Daily</h4>
                    <p style={{ color: '#b0c4d4', margin: 0, lineHeight: '1.6' }}>
                      Spend 15 minutes each day practicing these fundamentals. Muscle memory is key to becoming fast and efficient in Edit Mode. The shortcuts will become second nature!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* The Beautiful Reusable Modal! */}
        {selectedTopic && (
          <DetailModal
            item={selectedTopic}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onClose={() => setSelectedTopic(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

// ============================================
// UPDATED ICON PATHS TO MATCH BLENDER CONVENTIONS
// Common Blender icon names:
// - ops.mesh.* (mesh operations)
// - ops.transform.* (transform operations)
// - ops.object.* (object operations)
// - ops.generic.* (generic operations)
// ============================================