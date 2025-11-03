export const uvMappingLessonData = {

  heroConfig: {
    title: 'UV Mapping',
    gradientText: 'Texturing Fundamentals',
    subtitle: 'Master the art of unwrapping 3D geometry for perfect textures',
    gradientColors: 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/uv.svg', title: '15+ Tools', subtitle: 'Complete UV toolkit' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/uv.svg', label: 'UV Tools' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#8b5cf6',

  overviewTitle: 'Welcome to UV Mapping!',
  overviewDescription: 'Learn how to unwrap 3D models for perfect texture application',

  overviewCards: [
    {
      icon: '/Icons/uv.svg',
      title: 'What is UV Mapping?',
      content: 'UV Mapping is the process of projecting a 3D model\'s surface onto a 2D plane. Think of it like unwrapping a cardboard box and laying it flat - this allows you to paint textures that wrap perfectly around your 3D model.'
    },
    {
      icon: '/Icons/texture.svg',
      title: 'Why UV Mapping Matters',
      content: 'Good UV mapping is essential for texturing. It determines how your textures, materials, and details appear on your model. Poor UVs lead to stretched, distorted textures. Clean UVs give you professional, controllable results.'
    },
    {
      icon: '/Icons/node_compositing.svg',
      title: 'The UV Workflow',
      content: 'UV mapping follows a clear workflow: Mark seams where the model should "cut open", unwrap the geometry, arrange UV islands efficiently, and optimize for minimal distortion. Master this and your textures will always look perfect!'
    }
  ],

  contentTitle: 'UV Mapping Tools',
  contentDescription: 'Explore Blender\'s powerful UV unwrapping and layout toolkit',

  categories: [
    {
      name: 'UV Editor Basics',
      color: '#8b5cf6',
      items: [
        {
          name: 'UV Editor Interface',
          icon: '/Icons/uv.svg',
          description: 'Navigate and understand the UV Editor workspace',
          detailedInfo: {
            overview: 'The UV Editor is where you view and edit your model\'s UV layout. It shows a 2D representation of your 3D geometry, allowing you to arrange how textures map onto your model.',
            pages: [
              {
                title: 'Opening UV Editor',
                content: 'Split your viewport or switch an editor to UV Editor type. The left side shows your 3D model, the right shows the flattened UV layout. Select faces in 3D view to see them highlight in UV Editor.',
                image: '/examples/uv-editor-interface.mp4',
                tips: [
                  'Switch editor type from top-left dropdown',
                  'UV Editor and 3D View selections sync',
                  'N panel shows UV coordinates',
                  'Grid helps visualize texture space'
                ]
              },
              {
                title: 'UV Selection Modes',
                content: 'Just like Edit Mode, UV Editor has vertex, edge, and face selection. Switch between modes with 1, 2, 3 keys. Select UV islands to move, rotate, or scale them in texture space.',
                image: '/examples/uv-selection-modes.mp4',
                tips: [
                  '1/2/3 keys switch selection modes',
                  'L selects linked UV islands',
                  'A selects all UVs',
                  'Alt+A deselects all',
                  'B for box select, C for circle select'
                ]
              }
            ]
          }
        },
        {
          name: 'UV Coordinates',
          icon: '/Icons/node_texture.svg',
          description: 'Understand UV coordinate system and texture space',
          detailedInfo: {
            overview: 'UV coordinates define where each vertex sits in texture space. U is horizontal (like X), V is vertical (like Y). The 0-1 range represents your main texture tile.',
            pages: [
              {
                title: 'Understanding UV Space',
                content: 'The UV grid represents your texture. Bottom-left is (0,0), top-right is (1,1). Keep UVs within 0-1 range for best results, though you can go outside for tiling textures.',
                image: '/examples/uv-coordinates.mp4',
                tips: [
                  '0-1 range is standard texture space',
                  'Outside 0-1 creates tiling (if enabled)',
                  'UVs can overlap for shared textures',
                  'N panel shows exact coordinates',
                  'Scale UVs by 2 to halve texture size'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Seam Marking',
      color: '#8b5cf6',
      items: [
        {
          name: 'Mark Seam',
          icon: '/Icons/edgesel.svg',
          description: 'Define where model cuts open for unwrapping',
          detailedInfo: {
            overview: 'Seams tell Blender where to "cut" your model for unwrapping. Like cutting a cardboard box to lay it flat, seams separate geometry into UV islands.',
            pages: [
              {
                title: 'Marking Seams',
                content: 'In Edit Mode, select edges where you want cuts, press Ctrl+E > Mark Seam. Marked seams appear red/orange. Think strategically - seams should be hidden or in natural breaks.',
                image: '/examples/uv-mark-seam.mp4',
                tips: [
                  'Ctrl+E opens edge menu',
                  'Mark seams in hidden areas when possible',
                  'Sharp edges are good seam locations',
                  'Less seams = better (but more distortion)',
                  'Clear seam removes marking'
                ]
              },
              {
                title: 'Strategic Seam Placement',
                content: 'Place seams along natural breaks - under arms, back of heads, inside edges. Avoid seams on prominent visible surfaces. Think like a tailor cutting fabric patterns.',
                image: '/examples/uv-seam-strategy.mp4',
                tips: [
                  'Hide seams where viewer won\'t see',
                  'Follow existing topology lines',
                  'Use sharp edges as guides',
                  'Character seams: back, under arms, inner legs',
                  'Hard surface: panel separations'
                ]
              }
            ]
          }
        },
        {
          name: 'Clear Seam',
          icon: '/Icons/panel_close.svg',
          description: 'Remove seam markings from edges',
          detailedInfo: {
            overview: 'Clear Seam removes seam markings from selected edges. Use this to adjust your seam layout or fix over-seamed models.',
            pages: [
              {
                title: 'Clearing Seams',
                content: 'Select seamed edges, Ctrl+E > Clear Seam. Edges return to normal (no longer marked as cut points). Useful when adjusting unwrap strategy.',
                image: '/examples/uv-clear-seam.mp4',
                tips: [
                  'Select edges first',
                  'Ctrl+E for edge menu',
                  'Removes red seam marking',
                  'Re-unwrap after adjusting seams'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Unwrapping Methods',
      color: '#8b5cf6',
      items: [
        {
          name: 'Unwrap',
          icon: '/Icons/ops.mesh.uvs_unwrap.svg',
          description: 'Standard angle-based unwrapping',
          detailedInfo: {
            overview: 'Unwrap is the main UV unwrapping method. It uses your seams to flatten geometry with minimal distortion. Works great for organic and complex shapes.',
            pages: [
              {
                title: 'Basic Unwrapping',
                content: 'Select all faces (A), press U > Unwrap. Blender cuts at seams and flattens geometry. Check UV Editor to see result. Look for red stretching - adjust seams if needed.',
                image: '/examples/uv-unwrap.mp4',
                tips: [
                  'U opens UV menu',
                  'Works best with good seam placement',
                  'Check stretch overlay for quality',
                  'Can unwrap selected faces only',
                  'Re-unwrap anytime to update'
                ]
              }
            ]
          }
        },
        {
          name: 'Smart UV Project',
          icon: '/Icons/ops.mesh.uvs_smart_project.svg',
          description: 'Automatic seam-free unwrapping',
          detailedInfo: {
            overview: 'Smart UV Project automatically creates seams and unwraps in one step. Great for quick results or complex objects where manual seaming is tedious.',
            pages: [
              {
                title: 'Smart UV Project',
                content: 'Select faces, U > Smart UV Project. Blender analyzes geometry and creates multiple islands automatically. Fast but creates many seams - good for initial layouts.',
                image: '/examples/uv-smart-project.mp4',
                tips: [
                  'No manual seaming required',
                  'Great for hard surface models',
                  'Adjust island margin in F9',
                  'Creates many small islands',
                  'Angle Limit controls island separation'
                ]
              }
            ]
          }
        },
        {
          name: 'Project from View',
          icon: '/Icons/view_camera.svg',
          description: 'Project UVs from camera perspective',
          detailedInfo: {
            overview: 'Project from View unwraps geometry as if you\'re projecting a photo onto it from your current view angle. Perfect for flat surfaces or camera-mapped textures.',
            pages: [
              {
                title: 'View Projection',
                content: 'Position your 3D view to desired angle, select faces, U > Project from View. UVs map exactly as shown in viewport. Great for logos, decals, or photo-based texturing.',
                image: '/examples/uv-project-from-view.mp4',
                tips: [
                  'Set view angle before projecting',
                  'Orthographic view for flat projection',
                  'Perfect for decals and logos',
                  'Use for camera-mapped textures',
                  'Scale bounds option in F9'
                ]
              }
            ]
          }
        },
        {
          name: 'Cylinder Projection',
          icon: '/Icons/mesh_cylinder.svg',
          description: 'Wrap UVs around cylindrical shapes',
          detailedInfo: {
            overview: 'Cylinder projection unwraps geometry as if wrapping around a cylinder. Perfect for bottles, cans, poles, or any cylindrical objects.',
            pages: [
              {
                title: 'Cylindrical Projection',
                content: 'For cylindrical objects, use U > Cylinder Projection. Wraps UVs around vertical axis. Adjust direction and scale in operator panel.',
                image: '/examples/uv-cylinder-project.mp4',
                tips: [
                  'Best for vertical cylinders',
                  'Adjust align and rotation',
                  'Creates vertical seam',
                  'Scale to fit prevents stretching',
                  'Great for cans, bottles, trees'
                ]
              }
            ]
          }
        },
        {
          name: 'Sphere Projection',
          icon: '/Icons/mesh_uvsphere.svg',
          description: 'Wrap UVs around spherical shapes',
          detailedInfo: {
            overview: 'Sphere projection creates latitude/longitude layout like a world map. Perfect for spherical objects like planets, balls, or character heads.',
            pages: [
              {
                title: 'Sphere Projection',
                content: 'For spherical objects, use U > Sphere Projection. Creates latitude/longitude layout. Some stretch at poles is normal and expected.',
                image: '/examples/uv-sphere-project.mp4',
                tips: [
                  'Perfect for spheres and heads',
                  'Creates poles at top/bottom',
                  'Similar to world map projection',
                  'Stretch at poles is normal',
                  'Combine with other methods for details'
                ]
              }
            ]
          }
        },
        {
          name: 'Cube Projection',
          icon: '/Icons/mesh_cube.svg',
          description: 'Project from six sides like a cube map',
          detailedInfo: {
            overview: 'Cube Projection unwraps geometry from six directions. Creates six separate projections - great for blocky objects or architectural elements.',
            pages: [
              {
                title: 'Cube Mapping',
                content: 'Select geometry, U > Cube Projection. Creates six projections from each axis direction. Good for architectural elements or box-like shapes.',
                image: '/examples/uv-cube-project.mp4',
                tips: [
                  'Projects from 6 directions',
                  'Good for hard surface objects',
                  'Creates multiple overlapping UVs',
                  'Scale to bounds option available',
                  'Use for box-like geometry'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'UV Editing',
      color: '#8b5cf6',
      items: [
        {
          name: 'Move UVs',
          icon: '/Icons/ops.transform.translate.svg',
          description: 'Move UV islands and vertices',
          detailedInfo: {
            overview: 'Move UVs just like in 3D view - select and press G. Position UV islands for optimal texture layout and minimize wasted space.',
            pages: [
              {
                title: 'Moving UVs',
                content: 'Select UVs in UV Editor, press G to grab/move. Click to confirm position. Use X or Y to constrain to axis. Arrange islands efficiently to use all texture space.',
                image: '/examples/uv-move.mp4',
                tips: [
                  'G key to grab/move',
                  'X/Y constrains to axis',
                  'Hold Ctrl to snap to grid',
                  'Pack islands tightly for efficiency',
                  'Leave small margins between islands'
                ]
              }
            ]
          }
        },
        {
          name: 'Rotate UVs',
          icon: '/Icons/ops.transform.rotate.svg',
          description: 'Rotate UV islands for better packing',
          detailedInfo: {
            overview: 'Rotate UV islands to fit them together efficiently or align them with texture direction. Essential for optimal space usage.',
            pages: [
              {
                title: 'Rotating UVs',
                content: 'Select UVs, press R to rotate. Move mouse and click to confirm. Type numbers for precise angles (90 for 90 degrees). Rotate islands to pack efficiently.',
                image: '/examples/uv-rotate.mp4',
                tips: [
                  'R key to rotate',
                  'Type 90 for 90 degree rotation',
                  'Hold Ctrl for 5 degree snapping',
                  'Rotate to maximize packing',
                  'Align with texture direction'
                ]
              }
            ]
          }
        },
        {
          name: 'Scale UVs',
          icon: '/Icons/ops.transform.resize.svg',
          description: 'Scale UV islands for texture density control',
          detailedInfo: {
            overview: 'Scale controls how much texture space an island uses. Larger islands get more texture detail. Scale strategically to give important areas more resolution.',
            pages: [
              {
                title: 'Scaling UVs',
                content: 'Select UVs, press S to scale. Important areas should be larger for better detail. Less visible areas can be smaller to save space.',
                image: '/examples/uv-scale.mp4',
                tips: [
                  'S key to scale',
                  'S then X or Y for one axis',
                  'Larger UVs = more texture detail',
                  'Keep relative sizes consistent',
                  'Important areas get more space'
                ]
              }
            ]
          }
        },
        {
          name: 'Pin UVs',
          icon: '/Icons/pinned.svg',
          description: 'Lock UV vertices in place',
          detailedInfo: {
            overview: 'Pin UV vertices to prevent them from moving during unwrap operations. Great for fixing corner positions or preserving manual adjustments.',
            pages: [
              {
                title: 'Pinning UVs',
                content: 'Select UV vertices, press P to pin (Alt+P to unpin). Pinned UVs stay fixed during unwrap - perfect for locking corners or borders.',
                image: '/examples/uv-pin.mp4',
                tips: [
                  'P to pin, Alt+P to unpin',
                  'Pinned UVs shown with red markers',
                  'Use to lock corner positions',
                  'Pin borders for controlled unwrap',
                  'Clear with Alt+P before re-unwrapping'
                ]
              }
            ]
          }
        },
        {
          name: 'Stitch UVs',
          icon: '/Icons/ops.mesh.uvs_stitch.svg',
          description: 'Merge UV islands together',
          detailedInfo: {
            overview: 'Stitch merges selected UV vertices/edges, connecting separate islands. Use to remove unnecessary seams or join islands for continuous textures.',
            pages: [
              {
                title: 'Stitching UVs',
                content: 'Select UV edges across seam, press V to stitch. Merges UVs and removes seam. Great for fixing over-segmented islands or creating continuous flows.',
                image: '/examples/uv-stitch.mp4',
                tips: [
                  'V key to stitch',
                  'Select edges from both islands',
                  'Removes seam from 3D geometry',
                  'Can cause distortion if not careful',
                  'Use for continuous texture areas'
                ]
              }
            ]
          }
        },
        {
          name: 'Align UVs',
          icon: '/Icons/ops.transform.align.svg',
          description: 'Align UVs to edges or axis',
          detailedInfo: {
            overview: 'Align tools straighten UV edges and organize islands. Create perfect rectangles and align islands to grid for cleaner texture painting.',
            pages: [
              {
                title: 'Aligning UVs',
                content: 'Select UVs, UV > Align. Choose Straighten, Align X/Y, or Align Auto. Straightens edges and creates rectangular islands perfect for tileable textures.',
                image: '/examples/uv-align.mp4',
                tips: [
                  'Straighten makes edges perfectly straight',
                  'Align X/Y aligns to axis',
                  'Auto aligns to best-fit rectangle',
                  'Great for architectural UVs',
                  'Essential for tileable textures'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Layout & Packing',
      color: '#8b5cf6',
      items: [
        {
          name: 'Pack Islands',
          icon: '/Icons/package.svg',
          description: 'Automatically arrange islands efficiently',
          detailedInfo: {
            overview: 'Pack Islands automatically arranges UV islands to minimize wasted space. Essential final step for efficient texture usage.',
            pages: [
              {
                title: 'Packing UVs',
                content: 'After unwrapping, UV > Pack Islands. Blender arranges islands efficiently within 0-1 space. Adjust margin to control spacing between islands.',
                image: '/examples/uv-pack-islands.mp4',
                tips: [
                  'Run after all unwrapping',
                  'Adjust margin for padding',
                  'Rotate option for tighter packing',
                  'Maximizes texture resolution',
                  'Leave small margin to prevent bleeding'
                ]
              }
            ]
          }
        },
        {
          name: 'Average Islands Scale',
          icon: '/Icons/ops.transform.resize.svg',
          description: 'Equalize texture density across islands',
          detailedInfo: {
            overview: 'Average Islands Scale ensures all islands have similar texture density. Critical for consistent texture quality across your entire model.',
            pages: [
              {
                title: 'Averaging Scale',
                content: 'UV > Average Islands Scale. Adjusts all island sizes so each gets similar texture space relative to 3D area. Ensures consistent texel density.',
                image: '/examples/uv-average-islands-scale.mp4',
                tips: [
                  'Run before packing islands',
                  'Ensures consistent quality',
                  'Based on 3D surface area',
                  'Can adjust individual islands after',
                  'Important for professional results'
                ]
              }
            ]
          }
        },
        {
          name: 'Minimize Stretch',
          icon: '/Icons/ops.mesh.uvs_minimize_stretch.svg',
          description: 'Reduce UV distortion interactively',
          detailedInfo: {
            overview: 'Minimize Stretch iteratively relaxes UVs to reduce distortion. Watch in real-time as red stretched areas turn blue. Great for improving existing unwraps.',
            pages: [
              {
                title: 'Minimizing Stretch',
                content: 'Select UVs, UV > Minimize Stretch. Tool runs iteratively - watch stretch visualization change. Press Enter to confirm or Esc to cancel.',
                image: '/examples/uv-minimize-stretch.mp4',
                tips: [
                  'Reduces distortion gradually',
                  'Watch stretch overlay change',
                  'Takes several iterations',
                  'Best used after good unwrap'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Techniques',
      color: '#8b5cf6',
      items: [
        {
          name: 'Export UV Layout',
          icon: '/Icons/export.svg',
          description: 'Export UV layout as image for painting',
          detailedInfo: {
            overview: 'Export UV Layout saves your UVs as an image file. Use this template in Photoshop or other painting software to create textures perfectly aligned to your model.',
            pages: [
              {
                title: 'Exporting UV Layout',
                content: 'UV > Export UV Layout. Choose resolution, file format (PNG, SVG), and options. Creates an image showing all UV islands - perfect template for texture painting in external software.',
                image: '/examples/uv-export-layout.mp4',
                tips: [
                  'Higher resolution for detailed painting',
                  'PNG for raster, SVG for vector',
                  'Include modified edges option',
                  'Use as painting template',
                  'Re-export if UVs change'
                ]
              }
            ]
          }
        },
        {
          name: 'Follow Active Quads',
          icon: '/Icons/mesh_grid.svg',
          description: 'Unwrap based on active face orientation',
          detailedInfo: {
            overview: 'Follow Active Quads unwraps selected faces to match active face orientation. Creates perfectly rectangular UVs following quad flow - ideal for organic surfaces.',
            pages: [
              {
                title: 'Follow Active Quads',
                content: 'Select faces and make one active (last selected), U > Follow Active Quads. Unwraps selection following active face direction. Perfect for clean quad-based topology.',
                image: '/examples/uv-follow-active-quads.mp4',
                tips: [
                  'Last selected face is active',
                  'Creates even grid-like UVs',
                  'Perfect for organic surfaces',
                  'Works best on quad topology',
                  'Adjust edge length settings in F9'
                ]
              }
            ]
          }
        },
        {
          name: 'Select Overlapping',
          icon: '/Icons/overlay.svg',
          description: 'Find overlapping UV islands',
          detailedInfo: {
            overview: 'Select Overlapping finds UV islands that occupy the same texture space. Use to identify problems or intentional overlaps for texture reuse.',
            pages: [
              {
                title: 'Finding Overlaps',
                content: 'UV > Select > Overlap. Selects all overlapping UVs. Red in UV editor indicates overlaps. Some overlaps are intentional (mirrored parts), others are errors.',
                image: '/examples/uv-select-overlapping.mp4',
                tips: [
                  'Found in UV > Select menu',
                  'Overlaps shown in red',
                  'Some overlaps are intentional',
                  'Mirror objects often overlap',
                  'Check before final texture painting'
                ]
              }
            ]
          }
        },
        {
          name: 'Reset UVs',
          icon: '/Icons/loop_back.svg',
          description: 'Clear UV data and start fresh',
          detailedInfo: {
            overview: 'Reset removes all UV data, giving you a clean slate. Useful when UV layout is beyond fixing and you need to start unwrapping from scratch.',
            pages: [
              {
                title: 'Resetting UVs',
                content: 'Select all faces, U > Reset. Clears UV coordinates and seams. All faces reset to default (overlapped at origin). Start fresh with new seam placement and unwrapping.',
                image: '/examples/uv-reset.mp4',
                tips: [
                  'Clears all UV data',
                  'Removes seam markings',
                  'Fresh start for unwrapping',
                  'Cannot be undone easily',
                  'Use when layout is unfixable'
                ]
              }
            ]
          }
        }
      ]
    }
  ],

  practiceTitle: 'Practice Projects',
  practiceDescription: 'Apply your UV mapping skills with these hands-on projects',

  practiceProjects: [
    { 
      title: 'Unwrap a Simple Crate', 
      desc: 'Learn basic seam marking and unwrapping on a box shape', 
      duration: '10 min', 
      difficulty: 'Beginner',
      skills: ['Mark seams', 'Unwrap', 'Pack islands']
    },
    { 
      title: 'UV Map a Coffee Mug', 
      desc: 'Practice cylinder projection and handle unwrapping', 
      duration: '15 min', 
      difficulty: 'Beginner',
      skills: ['Cylinder projection', 'Strategic seams', 'Scale islands']
    },
    { 
      title: 'Character Head UV Layout', 
      desc: 'Master strategic seam placement for organic forms', 
      duration: '25 min', 
      difficulty: 'Intermediate',
      skills: ['Strategic seams', 'Minimize stretch', 'Average scale']
    },
    { 
      title: 'Hard Surface Vehicle', 
      desc: 'Complex unwrapping with multiple materials and tight packing', 
      duration: '30 min', 
      difficulty: 'Advanced',
      skills: ['Smart UV project', 'Multiple materials', 'Optimize packing']
    },
    { 
      title: 'Architectural Building', 
      desc: 'Align UVs for tileable textures and modular workflow', 
      duration: '20 min', 
      difficulty: 'Intermediate',
      skills: ['Align tools', 'Follow active quads', 'Tileable setup']
    }
  ]
}