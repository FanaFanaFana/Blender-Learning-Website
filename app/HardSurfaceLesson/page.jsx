// FILE: HardSurfaceLesson.jsx
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackButton from '@/components/BackButton'

// 👇 SAME imports every time!
import { 
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
  DetailModal,
  SectionHeader
} from '@/components/shared/LessonComponents'

export default function HardSurfaceLesson() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  // ============================================
  // CONFIGURATION
  // ============================================
  
  const heroConfig = {
    title: 'Hard Surface',
    gradientText: 'Modeling',
    subtitle: 'Create mechanical objects, vehicles, and man-made assets with precision and style',
    gradientColors: 'linear-gradient(135deg, #06b6d4, #0ea5e9, #3b82f6)', // Cyan to blue gradient
    badges: [
      { icon: '/Icons/time.svg', title: '75 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' },
      { icon: '/Icons/mesh_cube.svg', title: 'Mechanical', subtitle: 'Focus area' }
    ]
  }

  const tabs = [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'principles', icon: '/Icons/mesh_cube.svg', label: 'Principles' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'workflow', icon: '/Icons/modifier.svg', label: 'Workflow' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ]

  const themeColor = '#06b6d4'

  const overviewCards = [
    {
      icon: '/Icons/mesh_cube.svg',
      title: 'Boolean Operations',
      content: 'Hard surface modeling relies heavily on boolean operations to combine, subtract, and intersect shapes. Master booleans to create complex mechanical forms from simple primitives quickly and non-destructively.'
    },
    {
      icon: '/Icons/mod_bevel.svg',
      title: 'Beveling Everything',
      content: 'Real-world objects never have perfectly sharp edges. Beveling creates realistic edge wear and catches light beautifully. The Bevel modifier and manual beveling are essential hard surface skills.'
    },
    {
      icon: '/Icons/modifier.svg',
      title: 'Non-Destructive Workflow',
      content: 'Use modifiers like Array, Mirror, and Solidify to work efficiently. Keep your workflow flexible - you should be able to make changes at any stage without starting over.'
    }
  ]

  const corePrinciples = [
    {
      name: 'Form & Function',
      icon: '/Icons/mesh_cube.svg',
      color: '#06b6d4',
      topics: [
        {
          name: 'Design Language',
          description: 'Visual consistency in mechanical design',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Design language is the consistent use of shapes, proportions, and details that make objects feel like they belong together. Every panel, vent, and detail should follow your established rules.',
            pages: [
              {
                title: 'Shape Motifs',
                content: 'Choose 2-3 basic shapes as your foundation. If you use hexagons for vents, use hexagons throughout. Circles for one part, circles for related parts. Consistency creates cohesion.',
                image: '/examples/hardsurface-design-motifs.gif'
              },
              {
                title: 'Panel Logic',
                content: 'Panels should suggest how the object is assembled. Show access panels, seams where parts connect, fasteners. Even if fictional, make it feel like it could be built.',
                image: '/examples/hardsurface-panel-logic.gif'
              },
              {
                title: 'Scale Relationships',
                content: 'Large forms contain medium details which contain small details. This hierarchy creates visual interest at every distance. Avoid same-sized details everywhere.',
                image: '/examples/hardsurface-scale-hierarchy.gif'
              }
            ]
          }
        },
        {
          name: 'Mechanical Purpose',
          description: 'Making functional-looking designs',
          icon: '/Icons/tool.svg',
          detailedInfo: {
            overview: 'Even fictional machines should suggest purpose. Viewers should be able to guess what parts do - engines look powerful, joints look articulated, vents suggest airflow.',
            pages: [
              {
                title: 'Visible Function',
                content: 'Show how things work. Pistons that could compress, gears that could rotate, panels that could open. Suggest mechanism even if it doesn\'t actually function.',
                image: '/examples/hardsurface-function-visible.gif'
              },
              {
                title: 'Material Implications',
                content: 'Thick plates suggest armor, thin panels suggest covers, exposed mechanisms suggest maintenance access. Thickness tells stories about strength and purpose.',
                image: '/examples/hardsurface-material-thickness.gif'
              }
            ]
          }
        },
        {
          name: 'Edge Flow',
          description: 'Clean topology for hard surfaces',
          icon: '/Icons/mesh_icosphere.svg',
          detailedInfo: {
            overview: 'Hard surface topology should be clean and quad-based where possible. Edge flow should follow the forms and make beveling predictable and controllable.',
            pages: [
              {
                title: 'Supporting Edges',
                content: 'Add edge loops near features you want to keep sharp under subdivision. These support edges prevent subdivision from rounding areas you want crisp.',
                image: '/examples/hardsurface-support-edges.gif'
              },
              {
                title: 'Boolean Cleanup',
                content: 'After boolean operations, clean up the resulting topology. Remove unnecessary edges, convert triangles to quads where possible, ensure even quad flow.',
                image: '/examples/hardsurface-boolean-cleanup.gif'
              },
              {
                title: 'Pole Placement',
                content: 'Place 5-pole vertices on flat surfaces away from edges. Never place poles on curved surfaces or edges - they cause pinching and shading artifacts.',
                image: '/examples/hardsurface-pole-placement.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Surface Detail',
      icon: '/Icons/brush.sculpt_draw.svg',
      color: '#0ea5e9',
      topics: [
        {
          name: 'Panel Detailing',
          description: 'Breaking up large surfaces',
          icon: '/Icons/mod_solidify.svg',
          detailedInfo: {
            overview: 'Large flat surfaces are boring. Break them up with panels, insets, raised details, and surface variation. Every panel tells a story about construction and maintenance.',
            pages: [
              {
                title: 'Inset Panels',
                content: 'Use Inset Faces (I key) to create recessed panels. Vary depths - some shallow, some deep. Add bevels to panel edges for realism and light catching.',
                image: '/examples/hardsurface-inset-panels.gif'
              },
              {
                title: 'Raised Details',
                content: 'Extrude faces slightly outward for raised panels, warning stripes, or reinforcement strips. Subtle height variation creates shadow play and interest.',
                image: '/examples/hardsurface-raised-details.gif'
              },
              {
                title: 'Panel Gaps',
                content: 'Leave small gaps between panels to suggest separate parts. Use Solidify modifier on individual faces for quick panel creation with automatic thickness.',
                image: '/examples/hardsurface-panel-gaps.gif'
              }
            ]
          }
        },
        {
          name: 'Greebles & Detail',
          description: 'Small mechanical features',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Greebles are small mechanical details that add complexity and realism. Vents, bolts, wires, ports, and other tiny elements make surfaces feel lived-in and functional.',
            pages: [
              {
                title: 'Functional Greebles',
                content: 'Add vents near areas that would generate heat, bolts where panels attach, ports for connections. Make greebles feel purposeful, not random decoration.',
                image: '/examples/hardsurface-functional-greebles.gif'
              },
              {
                title: 'Detail Hierarchy',
                content: 'Use large greebles on important areas, medium on secondary areas, small everywhere else. Too much detail everywhere is overwhelming - be strategic.',
                image: '/examples/hardsurface-detail-hierarchy.gif'
              },
              {
                title: 'Instancing Details',
                content: 'Model one bolt, vent, or port, then instance it everywhere. Use Array modifier for repeated elements. Consistency through reuse looks professional.',
                image: '/examples/hardsurface-instancing.gif'
              }
            ]
          }
        },
        {
          name: 'Wear & Damage',
          description: 'Adding realism through imperfection',
          icon: '/Icons/brush.draw.svg',
          detailedInfo: {
            overview: 'Perfect surfaces look CG. Real objects have scratches, dents, dirt, and wear. Add imperfections strategically - more on edges and high-traffic areas, less on protected surfaces.',
            pages: [
              {
                title: 'Edge Wear',
                content: 'Edges get bumped and worn first. Use weighted normals or custom normals to simulate worn edges. Add slight chamfers to most-used edges for realism.',
                image: '/examples/hardsurface-edge-wear.gif'
              },
              {
                title: 'Strategic Damage',
                content: 'Add dents where objects would impact, scratches where surfaces slide, dirt in crevices. Tell a story with damage - what has this object experienced?',
                image: '/examples/hardsurface-strategic-damage.gif'
              }
            ]
          }
        }
      ]
    }
  ]

  const techniques = [
    {
      name: 'Boolean Techniques',
      icon: '/Icons/mod_boolean.svg',
      color: '#3b82f6',
      methods: [
        {
          name: 'Cutter Objects',
          description: 'Non-destructive boolean workflow',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Keep boolean cutters as separate objects in a collection. This lets you modify, move, or remove cuts at any time. Always work non-destructively until final stages.',
            pages: [
              {
                title: 'Cutter Setup',
                content: 'Create a "Cutters" collection. Make cutter objects, hide them from render. Add Boolean modifier to main object referencing each cutter. Keep cutters editable.',
                image: '/examples/hardsurface-cutter-setup.gif'
              },
              {
                title: 'Boolean Order',
                content: 'Modifier stack order matters. Union operations first, then difference (cuts), then intersect. Bevel modifier should come after booleans for clean edges.',
                image: '/examples/hardsurface-boolean-order.gif'
              },
              {
                title: 'Cutter Organization',
                content: 'Name cutters descriptively: "Cutter_Window_Front", "Cutter_Vent_Top". Use collections to organize by type or location. Good organization enables iteration.',
                image: '/examples/hardsurface-cutter-organization.gif'
              }
            ]
          }
        },
        {
          name: 'Boolean + Bevel',
          description: 'Perfect edges after cutting',
          icon: '/Icons/mod_bevel.svg',
          detailedInfo: {
            overview: 'The combination of Boolean and Bevel modifiers is the foundation of hard surface modeling. Booleans create sharp cuts, bevels make them realistic.',
            pages: [
              {
                title: 'Bevel After Boolean',
                content: 'Add Bevel modifier below Boolean modifiers in stack. Use Angle limit method with 30° threshold. This automatically bevels both original and cut edges.',
                image: '/examples/hardsurface-bevel-after-boolean.gif'
              },
              {
                title: 'Weighted Bevel',
                content: 'Use Mean Bevel Weight mode for control. Assign edge bevel weights (Ctrl+E > Bevel Weight) to control which edges bevel more. 0 = no bevel, 1 = full bevel.',
                image: '/examples/hardsurface-weighted-bevel.gif'
              },
              {
                title: 'Bevel Segments',
                content: 'Use 2-3 segments for most bevels. More segments = smoother but more geometry. Reserve 4+ segments for prominent edges that need extra smoothness.',
                image: '/examples/hardsurface-bevel-segments.gif'
              }
            ]
          }
        },
        {
          name: 'Boolean Optimization',
          description: 'Clean topology from booleans',
          icon: '/Icons/mod_remesh.svg',
          detailedInfo: {
            overview: 'Boolean operations create messy topology. Learn to clean this up manually or use tools like Remesh for optimized results ready for animation or subdivision.',
            pages: [
              {
                title: 'Manual Cleanup',
                content: 'Apply boolean modifier when satisfied. Select overlapping vertices (by distance), merge. Fill n-gons with faces, convert tris to quads (Alt+J). Time-consuming but clean.',
                image: '/examples/hardsurface-manual-cleanup.gif'
              },
              {
                title: 'Remesh Solution',
                content: 'Apply booleans, add Remesh modifier (Voxel mode). Adjust voxel size for detail. Loses some precision but creates clean, uniform topology. Good for organic-meets-hard-surface.',
                image: '/examples/hardsurface-remesh-cleanup.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Modeling Techniques',
      icon: '/Icons/tool.svg',
      color: '#8b5cf6',
      methods: [
        {
          name: 'Box Modeling',
          description: 'Building from primitives',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Start with cubes, cylinders, and spheres. Use loop cuts, extrusions, and insetting to create forms. Box modeling gives you full topology control from the start.',
            pages: [
              {
                title: 'Primitive Blocking',
                content: 'Block out major forms with primitives. Scale, rotate, position to match overall shape. Don\'t worry about details yet - nail proportions and silhouette first.',
                image: '/examples/hardsurface-box-blocking.gif'
              },
              {
                title: 'Loop Cut Refinement',
                content: 'Add loop cuts (Ctrl+R) where forms change direction. Every hard edge needs supporting geometry. Build up edge flow gradually, maintaining quads.',
                image: '/examples/hardsurface-loop-refinement.gif'
              },
              {
                title: 'Extrusion Detailing',
                content: 'Select faces, extrude (E) and scale (S) for raised details. Inset (I) then extrude inward for recesses. Layer these operations to build complexity.',
                image: '/examples/hardsurface-extrusion-detail.gif'
              }
            ]
          }
        },
        {
          name: 'Edge Modeling',
          description: 'Working from profile curves',
          icon: '/Icons/mesh_circle.svg',
          detailedInfo: {
            overview: 'Start with edge loops that define the profile or cross-section of your object. Fill between them to create surfaces. Great for cylindrical or symmetrical mechanical parts.',
            pages: [
              {
                title: 'Profile Creation',
                content: 'Create edge loops that define the silhouette. Use Grid Fill or manual faces to create surfaces between loops. Maintains clean edge flow naturally.',
                image: '/examples/hardsurface-edge-profile.gif'
              },
              {
                title: 'Spin & Lathe',
                content: 'Create half of a circular profile, use Spin tool (Alt+R) to revolve around axis. Perfect for wheels, turbines, barrels, or any cylindrical object.',
                image: '/examples/hardsurface-spin-lathe.gif'
              }
            ]
          }
        },
        {
          name: 'Array Patterns',
          description: 'Repeating elements efficiently',
          icon: '/Icons/mod_array.svg',
          detailedInfo: {
            overview: 'Array modifier creates repeated elements - vents, panels, armor plates, mechanical teeth. Combine with Curve modifier for arrays that follow paths.',
            pages: [
              {
                title: 'Linear Arrays',
                content: 'Add Array modifier, set count and offset. Use Relative Offset for spacing based on object size, Constant for fixed distance, Object for complex spacing.',
                image: '/examples/hardsurface-linear-arrays.gif'
              },
              {
                title: 'Radial Arrays',
                content: 'Use Empty as array offset, rotate empty by 360/count degrees. Creates perfect circular patterns - bolts around edges, engine cylinders, gear teeth.',
                image: '/examples/hardsurface-radial-arrays.gif'
              },
              {
                title: 'Array + Curve',
                content: 'Add Curve modifier after Array to make elements follow a path. Perfect for cables, armor strips, or mechanical details that wrap around surfaces.',
                image: '/examples/hardsurface-array-curve.gif'
              }
            ]
          }
        }
      ]
    }
  ]

  const workflowSteps = [
    {
      name: 'Planning & Blockout',
      icon: '/Icons/image.svg',
      color: '#10b981',
      steps: [
        {
          name: 'Reference Gathering',
          description: 'Collect visual inspiration',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Good hard surface work starts with research. Study real mechanical objects, collect reference images, understand how things are actually built.',
            pages: [
              {
                title: 'Real-World Study',
                content: 'Look at actual machines, vehicles, electronics. Notice panel arrangements, fastener placement, wear patterns. Real engineering teaches better design than imagination alone.',
                image: '/examples/hardsurface-reference-real.gif'
              },
              {
                title: 'Reference Sheets',
                content: 'Create reference sheet with front, side, top views if possible. Include detail callouts - interesting panels, mechanical features, surface treatments to recreate.',
                image: '/examples/hardsurface-reference-sheet.gif'
              }
            ]
          }
        },
        {
          name: 'Primitive Blocking',
          description: 'Establish basic forms',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Block out major volumes with simple primitives. Get proportions and overall shape right before adding any detail. This phase is quick - minutes, not hours.',
            pages: [
              {
                title: 'Major Volumes',
                content: 'Use cubes, cylinders, spheres to represent main components. Scale and position to match references. Focus on silhouette and proportions only.',
                image: '/examples/hardsurface-blocking-volumes.gif'
              },
              {
                title: 'Component Relationships',
                content: 'Ensure parts relate correctly in size and position. Check from multiple angles. This blockout guides all future work - get it right.',
                image: '/examples/hardsurface-blocking-relationships.gif'
              }
            ]
          }
        },
        {
          name: 'Design Refinement',
          description: 'Develop the design language',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Refine basic shapes into designed forms. Add primary details - panel breaks, major vents, key features. Establish your design language here.',
            pages: [
              {
                title: 'Primary Features',
                content: 'Add major design elements - distinctive panels, prominent vents, key mechanical features. These define the character of your object.',
                image: '/examples/hardsurface-primary-features.gif'
              },
              {
                title: 'Consistent Language',
                content: 'Use consistent shapes and patterns. If you use hexagons once, use them throughout. If you bevel edges one way, bevel all edges that way.',
                image: '/examples/hardsurface-consistent-language.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detailing & Refinement',
      icon: '/Icons/modifier.svg',
      color: '#f59e0b',
      steps: [
        {
          name: 'Boolean Cuts',
          description: 'Create openings and recesses',
          icon: '/Icons/mod_boolean.svg',
          detailedInfo: {
            overview: 'Use boolean operations to cut windows, vents, ports, and panel separations. Work non-destructively with cutter objects until you\'re satisfied.',
            pages: [
              {
                title: 'Primary Cuts',
                content: 'Cut major openings first - windows, large vents, access panels. These define the overall look. Keep cutters organized and editable.',
                image: '/examples/hardsurface-primary-cuts.gif'
              },
              {
                title: 'Secondary Details',
                content: 'Add smaller cuts - bolt holes, smaller vents, detail panels. Use arrays for repeated cuts. Boolean operations should build complexity gradually.',
                image: '/examples/hardsurface-secondary-cuts.gif'
              }
            ]
          }
        },
        {
          name: 'Beveling & Edges',
          description: 'Add realistic edge treatment',
          icon: '/Icons/mod_bevel.svg',
          detailedInfo: {
            overview: 'Apply bevels to all edges for realism. Use Bevel modifier for flexibility, or manual beveling for complete control. No sharp edges in real life.',
            pages: [
              {
                title: 'Global Beveling',
                content: 'Add Bevel modifier with Angle method. Adjust threshold until edges look right. Most edges should bevel, only intentional ones stay sharp.',
                image: '/examples/hardsurface-global-bevel.gif'
              },
              {
                title: 'Edge Weighting',
                content: 'Use bevel weights to control individual edges. Important edges get more bevel (larger), subtle edges get less. Creates visual hierarchy.',
                image: '/examples/hardsurface-edge-weighting.gif'
              }
            ]
          }
        },
        {
          name: 'Greeble Pass',
          description: 'Add small mechanical details',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Final detail pass adds small elements - bolts, rivets, small vents, warning labels, cables. These bring the model to life without overwhelming.',
            pages: [
              {
                title: 'Strategic Placement',
                content: 'Add greebles where they make sense functionally. Bolts where panels attach, vents near heat sources, cables connecting components. Purpose, not decoration.',
                image: '/examples/hardsurface-greeble-placement.gif'
              },
              {
                title: 'Instance Reuse',
                content: 'Model each greeble type once, then instance everywhere. Duplication with Alt+D creates instances. Changes to original affect all copies.',
                image: '/examples/hardsurface-greeble-instances.gif'
              },
              {
                title: 'Detail Balance',
                content: 'Not every surface needs greebles. Leave some areas clean for visual rest. Cluster details on focal points, spread them thinly elsewhere.',
                image: '/examples/hardsurface-detail-balance.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Finalization',
      icon: '/Icons/mesh_icosphere.svg',
      color: '#ef4444',
      steps: [
        {
          name: 'Topology Cleanup',
          description: 'Optimize mesh structure',
          icon: '/Icons/mod_remesh.svg',
          detailedInfo: {
            overview: 'Clean up boolean artifacts, merge overlapping geometry, optimize polygon count. Prepare mesh for texturing, rigging, or animation.',
            pages: [
              {
                title: 'Boolean Application',
                content: 'Apply boolean modifiers when design is final. Clean up resulting geometry - merge vertices by distance, remove doubles, fill any gaps.',
                image: '/examples/hardsurface-cleanup-boolean.gif'
              },
              {
                title: 'Edge Flow',
                content: 'Ensure edge loops flow cleanly. Convert triangles to quads where possible. Add support edges for crisp features under subdivision if needed.',
                image: '/examples/hardsurface-cleanup-edgeflow.gif'
              }
            ]
          }
        },
        {
          name: 'UV Unwrapping',
          description: 'Prepare for texturing',
          icon: '/Icons/uv.svg',
          detailedInfo: {
            overview: 'Hard surface UVs should follow panel breaks and natural seams. Use plenty of seams - hard surfaces handle UV seams better than organic forms.',
            pages: [
              {
                title: 'Seam Placement',
                content: 'Mark seams along panel edges, inside cuts, on hidden faces. Select seam edges, Ctrl+E > Mark Seam. Unwrap (U > Unwrap) for clean UV islands.',
                image: '/examples/hardsurface-uv-seams.gif'
              },
              {
                title: 'Island Organization',
                content: 'Pack UV islands efficiently. Large visible areas get more space, hidden areas get less. Use Average Island Scale for consistent texel density.',
                image: '/examples/hardsurface-uv-packing.gif'
              }
            ]
          }
        },
        {
          name: 'Final Polish',
          description: 'Last adjustments and refinement',
          icon: '/Icons/brush.smooth.svg',
          detailedInfo: {
            overview: 'Final check for errors, awkward forms, or missing details. Adjust proportions if needed. Ensure model looks good from all angles and lighting conditions.',
            pages: [
              {
                title: 'Proportion Check',
                content: 'View model from all angles. Check against references. Adjust any forms that look off. Small proportion tweaks make huge difference in final look.',
                image: '/examples/hardsurface-final-proportions.gif'
              },
              {
                title: 'Lighting Test',
                content: 'Check model under different lighting. Good hard surface should look interesting in various lighting. Bevels and details should catch light nicely.',
                image: '/examples/hardsurface-final-lighting.gif'
              },
              {
                title: 'Detail Review',
                content: 'Walk through model section by section. Add any missing details. Remove anything that doesn\'t serve the design. Less is often more.',
                image: '/examples/hardsurface-final-review.gif'
              }
            ]
          }
        }
      ]
    }
  ]

  const practiceProjects = [
    { 
      title: 'Model a Sci-Fi Crate', 
      desc: 'Practice booleans and panel detailing',
      duration: '45 min', 
      difficulty: 'Beginner' 
    },
    { 
      title: 'Create a Mechanical Arm', 
      desc: 'Build articulated hard surface component',
      duration: '90 min', 
      difficulty: 'Intermediate' 
    },
    { 
      title: 'Design a Vehicle Exterior', 
      desc: 'Complex surface with design language',
      duration: '3 hours', 
      difficulty: 'Advanced' 
    },
    { 
      title: 'Build a Weapon or Tool', 
      desc: 'Functional-looking hard surface object',
      duration: '2 hours', 
      difficulty: 'Intermediate' 
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
                  title="Mastering Hard Surface"
                  description="Hard surface modeling is about precision, clean topology, and design language. Create mechanical objects that look functional, detailed, and professional."
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

        {/* Principles Tab */}
        {activeTab === 'principles' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Core Principles
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Essential concepts for professional hard surface modeling
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {corePrinciples.map((category, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: `0px solid ${category.color}` }}>
                      <img src={category.icon} alt={category.name} style={{ width: '40px', height: '40px' }} />
                      <h3 style={{ fontSize: '2rem', margin: 0, color: category.color }}>{category.name}</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.topics.map((topic, topicIdx) => (
                        <ClickableCard
                          key={topicIdx}
                          item={topic}
                          color={category.color}
                          onClick={() => {
                            setSelectedTopic({ ...topic, color: category.color })
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

        {/* Techniques Tab */}
        {activeTab === 'techniques' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Modeling Techniques
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Essential methods for hard surface creation
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {techniques.map((category, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: `0px solid ${category.color}` }}>
                      <img src={category.icon} alt={category.name} style={{ width: '40px', height: '40px' }} />
                      <h3 style={{ fontSize: '2rem', margin: 0, color: category.color }}>{category.name}</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.methods.map((method, methodIdx) => (
                        <ClickableCard
                          key={methodIdx}
                          item={method}
                          color={category.color}
                          onClick={() => {
                            setSelectedTopic({ ...method, color: category.color })
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

        {/* Workflow Tab */}
        {activeTab === 'workflow' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Production Workflow
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Professional workflow from concept to finished model
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {workflowSteps.map((category, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: `px solid ${category.color}` }}>
                      <img src={category.icon} alt={category.name} style={{ width: '40px', height: '40px' }} />
                      <h3 style={{ fontSize: '2rem', margin: 0, color: category.color }}>{category.name}</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.steps.map((step, stepIdx) => (
                        <ClickableCard
                          key={stepIdx}
                          item={step}
                          color={category.color}
                          onClick={() => {
                            setSelectedTopic({ ...step, color: category.color })
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
                Practice Projects
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Build your hard surface skills with these focused exercises
              </p>

              <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                {practiceProjects.map((project, index) => (
                  <div key={index} style={{ background: 'rgba(21, 35, 47, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ background: `${themeColor}20`, color: themeColor, width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '700' }}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{project.title}</h4>
                        <p style={{ color: '#8fa9bd', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{project.desc}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                          <span style={{ fontSize: '0.9rem', color: '#7a8c9e' }}>⏱️ {project.duration}</span>
                          <span style={{ fontSize: '0.9rem', padding: '0.25rem 0.75rem', borderRadius: '12px', background: project.difficulty === 'Beginner' ? '#10b98120' : project.difficulty === 'Intermediate' ? '#f59e0b20' : '#ef444420', color: project.difficulty === 'Beginner' ? '#10b981' : project.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444' }}>
                            {project.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button style={{ background: themeColor, border: 'none', padding: '0.75rem 2rem', borderRadius: '8px', color: '#fff', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
                      Start →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
// 💡 Pattern Recognition:
// ALL your lessons follow this EXACT structure:
// 1. Import the same components
// 2. Define heroConfig, tabs, themeColor
// 3. Define your content arrays
// 4. Render: Hero → Tabs → Content → Modal
// ============================================