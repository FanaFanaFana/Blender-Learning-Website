// FILE: ModifierLesson.jsx (NEW VERSION)
'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 👇 SAME imports every time!
import { 
  LessonHero, 
  TabNavigation, 
  InfoCard,
  ClickableCard,
  DetailModal,
  SectionHeader
} from '@/components/shared/LessonComponents'

export default function ModifierLesson() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedModifier, setSelectedModifier] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  // ============================================
  // CONFIGURATION
  // ============================================
  
  const heroConfig = {
    title: 'Working with',
    gradientText: 'Modifiers',
    subtitle: 'Learn how to use non-destructive tools to transform your 3D models',
    gradientColors: 'linear-gradient(135deg, #f97316, #fb923c, #fbbf24)', // Orange gradient
    badges: [
      
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/filebrowser.svg', title: '3 Projects', subtitle: 'Hands-on practice' }
    ]
  }

  const tabs = [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'types', icon: '/Icons/modifier.svg', label: 'Modifier Types' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ]

  const themeColor = '#f97316'

  const overviewCards = [
    {
      icon: '/Icons/checkmark.svg',
      title: 'Non-Destructive Workflow',
      content: 'Modifiers don\'t change your original mesh. You can adjust, disable, or remove them at any time, giving you complete creative freedom to experiment without fear of losing your work.'
    },
    {
      icon: '/Icons/sortsize.svg',
      title: 'Modifier Stack',
      content: 'Multiple modifiers can be applied to a single object in a specific order called the "modifier stack". The order matters - each modifier affects the result of the previous one.'
    },
    {
      icon: '/Icons/settings.svg',
      title: 'Performance Friendly',
      content: 'Modifiers are calculated in real-time, allowing you to see changes instantly. They only affect the final render or when you choose to apply them permanently.'
    }
  ]

  // 👇 Complete modifier data with all major modifiers
  const modifierCategories = [
    {
      name: 'Generate',
      icon: '/Icons/modifier.svg',
      color: '#3b82c4',
      modifiers: [
        {
          name: 'Array',
          description: 'Duplicate objects in a pattern',
          icon: '/Icons/mod_array.svg',
          detailedInfo: {
            overview: 'The Array modifier creates copies of an object in a regular pattern. Perfect for creating repeated elements like fence posts, building windows, or any repeating structure.',
            pages: [
              {
                title: 'Basic Setup',
                content: 'Add the Array modifier to your object. By default, it creates one copy offset along the X-axis. Adjust the count to increase duplicates.',
                image: '/examples/array-basic.gif'
              },
              {
                title: 'Offset Types',
                content: 'Use Relative Offset for spacing based on object size, Constant Offset for fixed distances, or Object Offset to follow another object\'s position.',
                image: '/examples/array-offset.gif'
              }
            ]
          }
        },
        {
          name: 'Bevel',
          description: 'Round off sharp edges',
          icon: '/Icons/mod_bevel.svg',
          detailedInfo: {
            overview: 'The Bevel modifier rounds and smooths edges of your mesh. Essential for realistic hard-surface modeling, as real-world objects rarely have perfectly sharp edges.',
            pages: [
              {
                title: 'Amount Control',
                content: 'Adjust the width to control how rounded edges become. Use segments to add more geometry for smoother bevels.',
                image: '/examples/bevel-amount.gif'
              },
              {
                title: 'Limit Methods',
                content: 'Use Angle to bevel only sharp edges, Weight to control specific edges, or Vertex Group for precise control over which edges get beveled.',
                image: '/examples/bevel-limits.gif'
              }
            ]
          }
        },
        {
          name: 'Boolean',
          description: 'Combine or subtract meshes',
          icon: '/Icons/mod_boolean.svg',
          detailedInfo: {
            overview: 'Boolean operations combine multiple objects using Union, Difference, or Intersect operations. Perfect for hard-surface modeling and creating complex shapes from simple primitives.',
            pages: [
              {
                title: 'Operation Types',
                content: 'Union merges objects together, Difference subtracts one from another, and Intersect keeps only overlapping areas.',
                image: '/examples/boolean-ops.gif'
              },
              {
                title: 'Clean Topology',
                content: 'After Boolean operations, use the Solver dropdown (Fast/Exact) based on your needs. Fast works for most cases, Exact handles complex overlaps better.',
                image: '/examples/boolean-solver.gif'
              }
            ]
          }
        },
        {
          name: 'Build',
          description: 'Animate mesh appearing progressively',
          icon: '/Icons/mod_build.svg',
          detailedInfo: {
            overview: 'The Build modifier makes faces appear or disappear over time. Great for creating animated construction sequences or dissolving effects.',
            pages: [
              {
                title: 'Timing Control',
                content: 'Set Start and Length frame values to control when building begins and how long it takes. Works great with Randomize for organic appearance.',
                image: '/examples/build-timing.gif'
              }
            ]
          }
        },
        {
          name: 'Decimate',
          description: 'Reduce polygon count',
          icon: '/Icons/mod_decim.svg',
          detailedInfo: {
            overview: 'Decimate reduces mesh complexity by removing geometry. Essential for optimizing high-poly models for games, real-time rendering, or reducing file sizes.',
            pages: [
              {
                title: 'Decimate Modes',
                content: 'Collapse mode removes vertices while preserving shape. Un-Subdivide reverses subdivision. Planar removes flat faces.',
                image: '/examples/decimate-modes.gif'
              },
              {
                title: 'Quality Control',
                content: 'Lower ratio values mean more reduction. Monitor face count and preview to balance optimization with quality.',
                image: '/examples/decimate-quality.gif'
              }
            ]
          }
        },
        {
          name: 'Edge Split',
          description: 'Split edges for hard shading',
          icon: '/Icons/mod_edgesplit.svg',
          detailedInfo: {
            overview: 'Edge Split creates sharp edges by splitting the mesh where needed. Useful for maintaining hard edges on smooth-shaded objects.',
            pages: [
              {
                title: 'Edge Angle',
                content: 'Set the angle threshold - edges sharper than this value will be split, creating a hard crease in shading.',
                image: '/examples/edgesplit-angle.jpg'
              }
            ]
          }
        },
        {
          name: 'Mask',
          description: 'Hide vertices dynamically',
          icon: '/Icons/mod_mask.svg',
          detailedInfo: {
            overview: 'The Mask modifier hides parts of your mesh based on vertex groups. Non-destructively hide geometry without deleting it.',
            pages: [
              {
                title: 'Using Vertex Groups',
                content: 'Create a vertex group, assign vertices with different weights, then select that group in the Mask modifier to show only those vertices.',
                image: '/examples/mask-groups.jpg'
              }
            ]
          }
        },
        {
          name: 'Mirror',
          description: 'Create symmetrical objects',
          icon: '/Icons/mod_mirror.svg',
          detailedInfo: {
            overview: 'The Mirror modifier creates a mirrored copy of your mesh across a chosen axis. Essential for symmetrical modeling like characters, vehicles, and architecture.',
            pages: [
              {
                title: 'Axis Selection',
                content: 'Choose X, Y, or Z axis for mirroring. You can enable multiple axes to mirror across several planes simultaneously.',
                image: '/examples/mirror-axis.jpg'
              },
              {
                title: 'Clipping & Merge',
                content: 'Enable Clipping to prevent vertices from crossing the mirror plane. Use Merge to automatically weld center vertices together.',
                image: '/examples/mirror-clipping.jpg'
              }
            ]
          }
        },
        {
          name: 'Multiresolution',
          description: 'Add sculpting detail levels',
          icon: '/Icons/mod_multires.svg',
          detailedInfo: {
            overview: 'Multiresolution allows multiple levels of detail for sculpting. Switch between low-poly base and high-detail versions without losing either.',
            pages: [
              {
                title: 'Level Management',
                content: 'Subdivide to add detail levels. Sculpt at high levels while maintaining clean topology at lower levels for animation.',
                image: '/examples/multires-levels.jpg'
              }
            ]
          }
        },
        {
          name: 'Remesh',
          description: 'Rebuild mesh topology',
          icon: '/Icons/mod_remesh.svg',
          detailedInfo: {
            overview: 'Remesh creates new, uniform topology. Great for cleaning up sculpts or creating base meshes from complex boolean operations.',
            pages: [
              {
                title: 'Voxel Remeshing',
                content: 'Adjust Voxel Size for resolution - smaller values create more detailed meshes. Useful for preparing models for 3D printing or further sculpting.',
                image: '/examples/remesh-voxel.jpg'
              }
            ]
          }
        },
        {
          name: 'Screw',
          description: 'Create spiral or revolved shapes',
          icon: '/Icons/mod_screw.svg',
          detailedInfo: {
            overview: 'The Screw modifier revolves a profile around an axis, creating threads, springs, or lathe-turned objects.',
            pages: [
              {
                title: 'Revolution Setup',
                content: 'Set axis to revolve around, adjust angle for partial or multiple revolutions. Increase Steps for smoother results.',
                image: '/examples/screw-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Skin',
          description: 'Create surfaces from edges',
          icon: '/Icons/mod_skin.svg',
          detailedInfo: {
            overview: 'Skin generates a surface around edge networks. Perfect for quick character base meshes, tree branches, or organic structures.',
            pages: [
              {
                title: 'Root & Scaling',
                content: 'Mark a vertex as root, then scale vertices in edit mode to control thickness. Skin automatically generates connecting geometry.',
                image: '/examples/skin-root.jpg'
              }
            ]
          }
        },
        {
          name: 'Solidify',
          description: 'Add thickness to surfaces',
          icon: '/Icons/mod_solidify.svg',
          detailedInfo: {
            overview: 'Solidify gives thickness to flat surfaces. Essential for making walls, shells, or converting 2D shapes into 3D solid objects.',
            pages: [
              {
                title: 'Thickness Control',
                content: 'Adjust thickness value, use Offset to control direction (inward, outward, or both). Enable Even Thickness for consistent results.',
                image: '/examples/solidify-thickness.jpg'
              }
            ]
          }
        },
        {
          name: 'Subdivision Surface',
          description: 'Smooth and add detail to meshes',
          icon: '/Icons/mod_subsurf.svg',
          detailedInfo: {
            overview: 'Subdivision Surface smooths meshes by subdividing faces and rounding edges. The foundation of organic modeling in Blender.',
            pages: [
              {
                title: 'Subdivision Levels',
                content: 'Viewport levels control preview smoothness, Render levels affect final output. Keep viewport lower for better performance.',
                image: '/examples/subsurf-levels.jpg'
              },
              {
                title: 'Edge Control',
                content: 'Use Edge Creases or add edge loops to control which areas stay sharp. Subdivision smooths everything unless you add control geometry.',
                image: '/examples/subsurf-control.jpg'
              }
            ]
          }
        },
        {
          name: 'Triangulate',
          description: 'Convert faces to triangles',
          icon: '/Icons/mod_triangulate.svg',
          detailedInfo: {
            overview: 'Triangulate converts all faces to triangles. Required for some game engines and useful for seeing how your mesh will be processed.',
            pages: [
              {
                title: 'Triangulation Methods',
                content: 'Beauty method creates most attractive triangulation, Fixed uses predictable patterns. Useful for export to game engines.',
                image: '/examples/triangulate-methods.jpg'
              }
            ]
          }
        },
        {
          name: 'Weld',
          description: 'Merge nearby vertices',
          icon: '/Icons/weld.svg',
          detailedInfo: {
            overview: 'Weld automatically merges vertices within a distance threshold. Clean up duplicate vertices and fix mesh issues non-destructively.',
            pages: [
              {
                title: 'Distance Threshold',
                content: 'Adjust merge distance to control which vertices combine. Great for fixing imported models or cleaning up boolean operations.',
                image: '/examples/weld-distance.jpg'
              }
            ]
          }
        },
        {
          name: 'Wireframe',
          description: 'Convert edges to geometry',
          icon: '/Icons/mod_wireframe.svg',
          detailedInfo: {
            overview: 'Wireframe converts your mesh edges into solid geometry. Creates lattice-like structures, perfect for architectural details or sci-fi elements.',
            pages: [
              {
                title: 'Thickness & Detail',
                content: 'Control thickness of generated edges, enable Boundary to cap open edges, use Crease Edges for better subdivision results.',
                image: '/examples/wireframe-thickness.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Deform',
      icon: '/Icons/modifier.svg',
      color: '#f59e0b',
      modifiers: [
        {
          name: 'Armature',
          description: 'Deform using bone skeleton',
          icon: '/Icons/mod_armature.svg',
          detailedInfo: {
            overview: 'The Armature modifier deforms your mesh using a bone skeleton. Essential for character animation and rigging any object that needs to bend.',
            pages: [
              {
                title: 'Bone Parenting',
                content: 'Create an armature, then parent your mesh with automatic weights. The modifier handles deformation based on bone movement.',
                image: '/examples/armature-parent.jpg'
              },
              {
                title: 'Weight Painting',
                content: 'Use Weight Paint mode to fine-tune which vertices are influenced by each bone. Red = full influence, blue = no influence.',
                image: '/examples/armature-weights.jpg'
              }
            ]
          }
        },
        {
          name: 'Cast',
          description: 'Project mesh onto shape',
          icon: '/Icons/mod_cast.svg',
          detailedInfo: {
            overview: 'Cast deforms your mesh to match a sphere, cylinder, or cuboid shape. Great for creating organic bulging or stylized effects.',
            pages: [
              {
                title: 'Shape Types',
                content: 'Choose Sphere for rounded bulges, Cylinder for tube-like deformations, or Cuboid for box-like shapes. Adjust Factor to control strength.',
                image: '/examples/cast-shapes.jpg'
              }
            ]
          }
        },
        {
          name: 'Curve',
          description: 'Deform along curve path',
          icon: '/Icons/mod_curve.svg',
          detailedInfo: {
            overview: 'Curve modifier bends your mesh along a curve path. Perfect for roads, pipes, cables, or any object that follows a custom path.',
            pages: [
              {
                title: 'Setup Process',
                content: 'Create a curve path, add Curve modifier to mesh, select curve object. Mesh will deform to follow the curve shape.',
                image: '/examples/curve-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Displace',
          description: 'Offset vertices by texture',
          icon: '/Icons/mod_displace.svg',
          detailedInfo: {
            overview: 'Displace uses texture values to push vertices up or down. Create detailed surface variations, terrain, or complex organic details.',
            pages: [
              {
                title: 'Texture Setup',
                content: 'Add a texture (image or procedural), adjust Strength to control displacement amount. Requires sufficient geometry to show detail.',
                image: '/examples/displace-texture.jpg'
              },
              {
                title: 'Direction Control',
                content: 'Use Normal for surface-based displacement, or choose specific axis. Use Coordinates to control texture mapping.',
                image: '/examples/displace-direction.jpg'
              }
            ]
          }
        },
        {
          name: 'Hook',
          description: 'Control vertices with empty',
          icon: '/Icons/hook.svg',
          detailedInfo: {
            overview: 'Hook links vertices to an empty object for easy animation control. Move the empty to deform your mesh - great for facial animation.',
            pages: [
              {
                title: 'Creating Hooks',
                content: 'Select vertices, add Hook modifier, create/assign empty. Moving the empty now controls those vertices with falloff.',
                image: '/examples/hook-create.jpg'
              }
            ]
          }
        },
        {
          name: 'Laplacian Deform',
          description: 'Advanced mesh deformation',
          icon: '/Icons/mod_meshdeform.svg',
          detailedInfo: {
            overview: 'Laplacian Deform provides smooth, natural deformations by preserving surface details. Creates organic deformations better than simple transforms.',
            pages: [
              {
                title: 'Anchor Setup',
                content: 'Assign anchor vertices that stay fixed, then move other vertices. The modifier smoothly deforms while preserving surface features.',
                image: '/examples/laplacian-anchors.jpg'
              }
            ]
          }
        },
        {
          name: 'Lattice',
          description: 'Deform using control cage',
          icon: '/Icons/mod_lattice.svg',
          detailedInfo: {
            overview: 'Lattice deforms your mesh using a 3D grid of control points. Provides easy, intuitive control over large deformations.',
            pages: [
              {
                title: 'Creating Lattice',
                content: 'Add a Lattice object around your mesh, then add Lattice modifier pointing to it. Moving lattice points deforms the mesh smoothly.',
                image: '/examples/lattice-create.jpg'
              },
              {
                title: 'Resolution Control',
                content: 'Adjust lattice resolution for more control points. Higher resolution gives finer control but more points to manage.',
                image: '/examples/lattice-resolution.jpg'
              }
            ]
          }
        },
        {
          name: 'Mesh Deform',
          description: 'Deform with cage mesh',
          icon: '/Icons/mod_meshdeform.svg',
          detailedInfo: {
            overview: 'Mesh Deform uses a low-poly cage to control high-poly mesh deformation. Like Lattice but with more flexible custom shapes.',
            pages: [
              {
                title: 'Binding Process',
                content: 'Create a simple cage mesh around your object, add modifier, click Bind. Deforming the cage now controls the enclosed mesh.',
                image: '/examples/meshdeform-bind.jpg'
              }
            ]
          }
        },
        {
          name: 'Shrinkwrap',
          description: 'Project mesh onto surface',
          icon: '/Icons/mod_shrinkwrap.svg',
          detailedInfo: {
            overview: 'Shrinkwrap projects your mesh onto another object\'s surface. Perfect for creating tight-fitting clothes, decals, or conforming details.',
            pages: [
              {
                title: 'Wrap Modes',
                content: 'Nearest Surface projects to closest point, Project casts along axis, Target Normal follows surface normals for best conforming.',
                image: '/examples/shrinkwrap-modes.jpg'
              }
            ]
          }
        },
        {
          name: 'Simple Deform',
          description: 'Basic twist, bend, taper effects',
          icon: '/Icons/mod_simpledeform.svg',
          detailedInfo: {
            overview: 'Simple Deform provides basic deformation types: Twist, Bend, Taper, and Stretch. Quick way to add common deformations.',
            pages: [
              {
                title: 'Deform Types',
                content: 'Twist spirals your mesh, Bend creates arc shapes, Taper scales along axis, Stretch elongates. Use limits to control affected area.',
                image: '/examples/simpledeform-types.jpg'
              }
            ]
          }
        },
        {
          name: 'Smooth',
          description: 'Average vertex positions',
          icon: '/Icons/mod_smooth.svg',
          detailedInfo: {
            overview: 'Smooth modifier averages vertex positions to create softer surfaces. Less aggressive than Subdivision Surface, useful for subtle smoothing.',
            pages: [
              {
                title: 'Smoothing Control',
                content: 'Increase Factor for stronger smoothing, Repeat for multiple passes. Use vertex groups to limit affected areas.',
                image: '/examples/smooth-factor.jpg'
              }
            ]
          }
        },
        {
          name: 'Surface Deform',
          description: 'Bind to animated surface',
          icon: '/Icons/surface_deform.svg',
          detailedInfo: {
            overview: 'Surface Deform binds your mesh to follow another mesh\'s deformation. Great for clothes following character movement.',
            pages: [
              {
                title: 'Binding Setup',
                content: 'Position mesh on target surface, add modifier, click Bind. The mesh will now follow target surface deformations automatically.',
                image: '/examples/surfacedeform-bind.jpg'
              }
            ]
          }
        },
        {
          name: 'Warp',
          description: 'Deform between two objects',
          icon: '/Icons/mod_warp.svg',
          detailedInfo: {
            overview: 'Warp deforms space between two objects (From and To). Creates fluid space-warping effects or animated transformations.',
            pages: [
              {
                title: 'Object Setup',
                content: 'Create two empties, assign as From and To objects. Moving these empties creates space-warping deformation between them.',
                image: '/examples/warp-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Wave',
          description: 'Create wave deformations',
          icon: '/Icons/mod_wave.svg',
          detailedInfo: {
            overview: 'Wave creates rippling wave patterns across your mesh. Perfect for water surfaces, flags in wind, or animated energy effects.',
            pages: [
              {
                title: 'Wave Parameters',
                content: 'Adjust Height for wave amplitude, Width for wavelength. Use Time Offset to animate. Requires sufficient geometry for smooth waves.',
                image: '/examples/wave-params.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Physics',
      icon: '/Icons/physics.svg',
      color: '#8b5cf6',
      modifiers: [
        {
          name: 'Cloth',
          description: 'Simulate fabric behavior',
          icon: '/Icons/mod_cloth.svg',
          detailedInfo: {
            overview: 'Cloth simulates fabric physics - gravity, wind, collisions. Essential for realistic clothing, flags, curtains, and soft materials.',
            pages: [
              {
                title: 'Basic Setup',
                content: 'Add Cloth modifier, set collision objects, press play. Adjust quality steps for smoother simulation (higher = more accurate).',
                image: '/examples/cloth-setup.jpg'
              },
              {
                title: 'Physical Properties',
                content: 'Adjust Mass for weight, Stiffness for rigidity, Damping for energy loss. Use presets like Cotton, Silk, or Leather as starting points.',
                image: '/examples/cloth-properties.jpg'
              }
            ]
          }
        },
        {
          name: 'Collision',
          description: 'Make objects solid for physics',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Collision makes objects solid for other physics simulations. Required for cloth, soft body, or particles to interact with surfaces.',
            pages: [
              {
                title: 'Collision Setup',
                content: 'Add Collision modifier to objects that should be solid. Adjust Thickness if objects pass through each other.',
                image: '/examples/collision-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Dynamic Paint',
          description: 'Paint effects from interaction',
          icon: '/Icons/mod_dynamicpaint.svg',
          detailedInfo: {
            overview: 'Dynamic Paint creates animated paint effects where objects leave trails, footsteps, or influence surfaces. Complex but powerful for effects.',
            pages: [
              {
                title: 'Canvas & Brush',
                content: 'Set one object as Canvas (receives paint), another as Brush (applies paint). Configure paint settings for desired effect.',
                image: '/examples/dynamicpaint-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Explode',
          description: 'Explode mesh with particles',
          icon: '/Icons/mod_explode.svg',
          detailedInfo: {
            overview: 'Explode breaks mesh apart along faces, typically used with particle systems for explosion or shattering effects.',
            pages: [
              {
                title: 'Particle Integration',
                content: 'Add particle system first, then Explode modifier. Faces separate following particle movement, creating shattering effect.',
                image: '/examples/explode-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Fluid',
          description: 'Simulate liquid physics',
          icon: '/Icons/mod_fluid.svg',
          detailedInfo: {
            overview: 'Fluid simulates realistic liquid behavior - flowing, splashing, filling containers. Computationally expensive but highly realistic.',
            pages: [
              {
                title: 'Domain & Flow',
                content: 'Create Domain (simulation boundary), set objects as Flow (liquid source) or Effector (obstacles). Bake simulation to cache results.',
                image: '/examples/fluid-domain.jpg'
              },
              {
                title: 'Resolution Settings',
                content: 'Higher resolution divisions create more detail but take longer to simulate. Balance quality with computation time.',
                image: '/examples/fluid-resolution.jpg'
              }
            ]
          }
        },
        {
          name: 'Ocean',
          description: 'Generate ocean surface',
          icon: '/Icons/mod_ocean.svg',
          detailedInfo: {
            overview: 'Ocean creates realistic animated water surfaces using wave simulation. Perfect for large water bodies with foam and spray effects.',
            pages: [
              {
                title: 'Wave Parameters',
                content: 'Adjust Scale for wave size, Choppiness for peak sharpness, Time to animate. Resolution controls detail level.',
                image: '/examples/ocean-waves.jpg'
              }
            ]
          }
        },
        {
          name: 'Particle Instance',
          description: 'Instance objects on particles',
          icon: '/Icons/mod_particle_instance.svg',
          detailedInfo: {
            overview: 'Particle Instance converts particle system to actual geometry instances. Creates crowds, forests, or any massive duplicated elements.',
            pages: [
              {
                title: 'Instance Setup',
                content: 'Add particle system, then Particle Instance modifier. Choose object to instance on each particle location.',
                image: '/examples/particleinstance-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'Particle System',
          description: 'Generate particle effects',
          icon: '/Icons/mod_particles.svg',
          detailedInfo: {
            overview: 'Particle System creates particles for effects like fire, smoke, rain, or instancing. Highly versatile for both effects and duplication.',
            pages: [
              {
                title: 'Emitter vs Hair',
                content: 'Emitter creates flowing particles (fire, rain), Hair creates static particles (grass, fur). Choose based on your needs.',
                image: '/examples/particles-types.jpg'
              },
              {
                title: 'Physics & Forces',
                content: 'Control particle behavior with Physics settings, add force fields for wind or turbulence. Adjust lifetime and velocity for realistic motion.',
                image: '/examples/particles-physics.jpg'
              }
            ]
          }
        },
        {
          name: 'Soft Body',
          description: 'Simulate soft, jiggly objects',
          icon: '/Icons/mod_soft.svg',
          detailedInfo: {
            overview: 'Soft Body simulates flexible, deformable objects like jelly, rubber, or soft tissue. Creates realistic bouncing, squishing, and jiggling.',
            pages: [
              {
                title: 'Stiffness Settings',
                content: 'Lower stiffness creates more jiggle, higher creates firmer objects. Use Goal weights to pin certain vertices in place.',
                image: '/examples/softbody-stiffness.jpg'
              },
              {
                title: 'Collision & Edges',
                content: 'Enable Self Collision to prevent object from intersecting itself. Use Edge springs for maintaining shape integrity.',
                image: '/examples/softbody-collision.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Modify',
      icon: '/Icons/modifier.svg',
      color: '#10b981',
      modifiers: [
        {
          name: 'Data Transfer',
          description: 'Transfer data between meshes',
          icon: '/Icons/mod_data_transfer.svg',
          detailedInfo: {
            overview: 'Data Transfer copies mesh data like normals, UVs, or vertex colors from one object to another. Essential for retopology workflows.',
            pages: [
              {
                title: 'Transfer Types',
                content: 'Transfer vertex data, edge data, face data, or custom normals. Useful for applying high-poly details to low-poly models.',
                image: '/examples/datatransfer-types.jpg'
              },
              {
                title: 'Mapping Methods',
                content: 'Choose how source data maps to target: Nearest Vertex, Nearest Face, or Projected. Each works best for different scenarios.',
                image: '/examples/datatransfer-mapping.jpg'
              }
            ]
          }
        },
        {
          name: 'Mesh Cache',
          description: 'Load external mesh animation',
          icon: '/Icons/surface_deform.svg',
          detailedInfo: {
            overview: 'Mesh Cache reads external animation files. Import complex simulations or animations from other software as mesh sequences.',
            pages: [
              {
                title: 'Cache Files',
                content: 'Load .mdd or .pc2 format cache files containing vertex animation. Great for bringing external simulations into Blender.',
                image: '/examples/meshcache-files.jpg'
              }
            ]
          }
        },
        {
          name: 'Mesh Sequence Cache',
          description: 'Load Alembic animations',
          icon: '/Icons/surface_deform.svg',
          detailedInfo: {
            overview: 'Mesh Sequence Cache loads Alembic (.abc) files containing animated meshes. Industry standard for transferring complex animations.',
            pages: [
              {
                title: 'Alembic Import',
                content: 'Load .abc files from other 3D software. Preserves animation, deformations, and transformations across different applications.',
                image: '/examples/alembic-import.jpg'
              }
            ]
          }
        },
        {
          name: 'Normal Edit',
          description: 'Modify mesh normals',
          icon: '/Icons/mod_normaledit.svg',
          detailedInfo: {
            overview: 'Normal Edit changes how light interacts with surfaces by modifying normals. Create fake lighting effects or smooth hard edges.',
            pages: [
              {
                title: 'Normal Modes',
                content: 'Radial mode points normals outward from a center, Directional aligns to a direction. Use for stylized shading effects.',
                image: '/examples/normaledit-modes.jpg'
              }
            ]
          }
        },
        {
          name: 'Weighted Normal',
          description: 'Calculate better normals',
          icon: '/Icons/mod_normaledit.svg',
          detailedInfo: {
            overview: 'Weighted Normal calculates smoother normal transitions based on face angles and areas. Improves shading on hard-surface models.',
            pages: [
              {
                title: 'Weighting Methods',
                content: 'Face Area and Corner Angle options control how normals are calculated. Prevents shading artifacts on complex hard-surface meshes.',
                image: '/examples/weightednormal-methods.jpg'
              }
            ]
          }
        },
        {
          name: 'UV Project',
          description: 'Project UVs from view',
          icon: '/Icons/mod_uvproject.svg',
          detailedInfo: {
            overview: 'UV Project creates UV coordinates by projecting from camera or objects. Great for animated projections or camera-mapped textures.',
            pages: [
              {
                title: 'Projector Setup',
                content: 'Assign camera or empties as projectors. UV coordinates update based on projector positions - perfect for animated textures.',
                image: '/examples/uvproject-setup.jpg'
              }
            ]
          }
        },
        {
          name: 'UV Warp',
          description: 'Animate UV coordinates',
          icon: '/Icons/mod_uvproject.svg',
          detailedInfo: {
            overview: 'UV Warp transforms UV coordinates using two objects. Create animated texture effects like flowing water or scrolling decals.',
            pages: [
              {
                title: 'Transform Control',
                content: 'Use two empties to define UV transformation. Moving empties animates texture position, rotation, and scale on the mesh.',
                image: '/examples/uvwarp-transform.jpg'
              }
            ]
          }
        },
        {
          name: 'Vertex Weight Edit',
          description: 'Edit vertex group weights',
          icon: '/Icons/mod_vertex_weight.svg',
          detailedInfo: {
            overview: 'Vertex Weight Edit modifies vertex group weights using various methods. Fine-tune weights for better deformations or masking.',
            pages: [
              {
                title: 'Weight Operations',
                content: 'Add, subtract, multiply weights using textures, curves, or distance. Refine vertex groups without manual painting.',
                image: '/examples/vertexweight-ops.jpg'
              }
            ]
          }
        },
        {
          name: 'Vertex Weight Mix',
          description: 'Combine vertex groups',
          icon: '/Icons/mod_vertex_weight.svg',
          detailedInfo: {
            overview: 'Vertex Weight Mix combines multiple vertex groups using various blend modes. Create complex weight combinations for advanced rigging.',
            pages: [
              {
                title: 'Mix Operations',
                content: 'Add, subtract, multiply, or use other blend modes to combine groups. Create complex weight distributions from simple groups.',
                image: '/examples/vertexweightmix-ops.jpg'
              }
            ]
          }
        },
        {
          name: 'Vertex Weight Proximity',
          description: 'Generate weights from distance',
          icon: '/Icons/mod_vertex_weight.svg',
          detailedInfo: {
            overview: 'Vertex Weight Proximity creates weights based on distance to target objects. Automatically generate falloff zones or influence areas.',
            pages: [
              {
                title: 'Distance Calculation',
                content: 'Set target object and maximum distance. Vertices closer to target receive higher weights with customizable falloff.',
                image: '/examples/vertexweightprox-distance.jpg'
              }
            ]
          }
        }
      ]
    }
  ]

  const practiceProjects = [
    { title: 'Create a Detailed Gear with Array Modifier', duration: '15 min', difficulty: 'Beginner' },
    { title: 'Build a Symmetrical Character Head', duration: '25 min', difficulty: 'Intermediate' },
    { title: 'Design a Cloth Simulation Scene', duration: '30 min', difficulty: 'Advanced' }
  ]

  // ============================================
  // RENDER
  // ============================================
  
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        <LessonHero {...heroConfig} />
        
        <TabNavigation 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeColor={themeColor}
        />

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <SectionHeader 
                  title="What are Modifiers?"
                  description="Modifiers are powerful non-destructive tools that change how an object looks or behaves without permanently altering its base geometry."
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

        {/* Modifier Types Tab */}
        {activeTab === 'types' && (
          <section style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
              <h2 style={{ fontSize: '3.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>
                Modifier Categories
              </h2>
              <p style={{ textAlign: 'center', color: '#8fa9bd', fontSize: '1.25rem', marginBottom: '3rem' }}>
                Explore the main types of modifiers in Blender
              </p>

              <div style={{ display: 'grid', gap: '3rem' }}>
                {modifierCategories.map((category, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: `0px solid ${category.color}` }}>
                      <img src={category.icon} alt={category.name} style={{ width: '40px', height: '40px' }} />
                      <h3 style={{ fontSize: '2rem', margin: 0, color: category.color }}>{category.name} Modifiers</h3>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {category.modifiers.map((modifier, modIdx) => (
                        <ClickableCard
                          key={modIdx}
                          item={modifier}
                          color={category.color}
                          onClick={() => {
                            setSelectedModifier({ ...modifier, color: category.color })
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
                Apply what you've learned with these hands-on exercises
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

        {selectedModifier && (
          <DetailModal
            item={selectedModifier}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onClose={() => setSelectedModifier(null)}
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