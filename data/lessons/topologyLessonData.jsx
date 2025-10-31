export const topologyLessonData = {

  heroConfig: {
    title: 'Mesh',
    gradientText: 'Topology',
    subtitle: 'Learn the art of clean edge flow and professional mesh structure',
    gradientColors: 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/mesh_cube.svg', title: '15+ Concepts', subtitle: 'Core principles' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'modes', icon: '/Icons/mesh_cube.svg', label: 'Core Principles' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#8b5cf6',

  overviewCards: [
    {
      icon: '/Icons/mesh_cube.svg',
      title: 'What is Topology?',
      content: 'Topology refers to the arrangement and flow of edges, vertices, and faces in your 3D mesh. Good topology ensures your model deforms correctly, animates smoothly, and renders efficiently. It\'s the difference between professional and amateur 3D work.'
    },
    {
      icon: '/Icons/editmode_hlt.svg',
      title: 'Why Topology Matters',
      content: 'Poor topology causes animation artifacts, deformation issues, and subdivision problems. Clean topology with proper edge loops enables smooth character animation, clean hard-surface modeling, and efficient rendering. It\'s the foundation of production-quality 3D models.'
    },
    {
      icon: '/Icons/tool.svg',
      title: 'Learning the Flow',
      content: 'Topology is about understanding how edges should flow around forms. Circular forms need edge loops, sharp corners need terminating edges, and deformation areas need proper edge density. Master these patterns and you master 3D modeling.'
    }
  ],

  selectionModes: [
    {
      name: 'Quad Topology',
      icon: '/Icons/mesh_grid.svg',
      color: '#8b5cf6',
      description: 'Build with four-sided faces for clean subdivision',
      detailedInfo: {
        overview: 'Quads (four-sided polygons) are the foundation of good topology. They subdivide predictably, deform cleanly, and are industry standard for animation and subdivision modeling.',
        pages: [
          {
            title: 'Why Quads Matter',
            content: 'Quads subdivide into four smaller quads, creating even, predictable geometry. Triangles and N-gons (5+ sides) create irregular subdivision patterns that cause visual artifacts and deformation issues.',
            image: '/examples/topology-quads-vs-tris.gif',
            tips: [
              'Aim for 95%+ quads in your mesh',
              'Triangles are acceptable on flat, non-deforming surfaces',
              'N-gons break subdivision and should be avoided',
              'Use Grid Fill and LoopTools for clean quads',
              'Check topology with face orientation overlay'
            ]
          },
          {
            title: 'Converting to Quads',
            content: 'Select problem areas, press X > Limited Dissolve to remove unnecessary edges. Use F to fill missing faces, then adjust edge flow. The Triangulate to Quads operator (Alt+J) can help convert triangulated meshes.',
            image: '/examples/topology-convert-quads.gif',
            tips: [
              'Alt+J converts tris to quads where possible',
              'Limited Dissolve removes unneeded edges',
              'Manually rebuild complex problem areas',
              'Use Checker Deselect to identify tris',
              'Import settings affect mesh triangulation'
            ]
          },
          {
            title: 'Acceptable Triangles',
            content: 'Triangles are fine on flat surfaces that won\'t deform - like building walls, hard-surface details, or environmental props. Keep them away from deformation areas like joints and facial features.',
            image: '/examples/topology-acceptable-triangles.gif',
            tips: [
              'Static objects can use triangles freely',
              'Game engines triangulate everything anyway',
              'Keep tris off curved or bending surfaces',
              'Hidden areas can have tris',
              'Final mesh is often triangulated for export'
            ]
          }
        ]
      }
    },
    {
      name: 'Edge Flow',
      icon: '/Icons/edgesel.svg',
      color: '#ec4899',
      description: 'Direct edges along natural form contours',
      detailedInfo: {
        overview: 'Edge flow describes how edge loops travel across your mesh. Proper flow follows muscle structure on characters, panel lines on hard surfaces, and natural contours on organic forms.',
        pages: [
          {
            title: 'Following Natural Forms',
            content: 'Edge loops should wrap around cylindrical forms like limbs, follow muscle groups on bodies, and radiate around circular features like eyes. Think of edges as topographic lines on a map.',
            image: '/examples/topology-edge-flow-organic.gif',
            tips: [
              'Edge loops wrap around limbs horizontally',
              'Follow muscle anatomy on characters',
              'Radiate from poles at features',
              'Maintain consistent loop spacing',
              'Study real anatomy for reference'
            ]
          },
          {
            title: 'Hard Surface Flow',
            content: 'On mechanical objects, edges should follow panel lines, feature boundaries, and manufacturing details. Bevels need supporting edge loops, and sharp corners need edge termination.',
            image: '/examples/topology-edge-flow-hardsurface.gif',
            tips: [
              'Follow panel lines and seams',
              'Support bevels with parallel edges',
              'Terminate edges at corners cleanly',
              'Use edge loops to define forms',
              'Maintain quad flow even on mechanical'
            ]
          },
          {
            title: 'Deformation Areas',
            content: 'Joints (shoulders, elbows, knees) need horizontal edge loops to enable bending. Face needs loops around mouth (smile lines), eyes (squint lines), and forehead (expression lines).',
            image: '/examples/topology-deformation-areas.gif',
            tips: [
              'Add edge loops perpendicular to bend direction',
              'Face needs concentric loops around features',
              'More loops = smoother deformation',
              'Test with armatures to verify flow',
              'Study facial action units (FACS)'
            ]
          }
        ]
      }
    },
    {
      name: 'Poles and Terminators',
      icon: '/Icons/vertexsel.svg',
      color: '#f59e0b',
      description: 'Handle edge convergence points correctly',
      detailedInfo: {
        overview: 'Poles are vertices where more or fewer than four edges meet. They\'re sometimes necessary but should be placed strategically. Understanding poles is crucial for clean topology.',
        pages: [
          {
            title: 'Understanding Poles',
            content: 'A normal quad has 4 edges meeting at each vertex. Poles have 3 (tri-pole) or 5+ edges (N-pole). They break the quad flow but are often necessary for topology transitions.',
            image: '/examples/topology-poles-types.gif',
            tips: [
              'Poles are unavoidable on spheres and cylinders',
              'Place poles in low-stress areas',
              'Face poles: near nose, back of head',
              'Body poles: under arms, on flat areas',
              '3-poles are better than 5+ poles'
            ]
          },
          {
            title: 'Strategic Pole Placement',
            content: 'Place poles where they won\'t cause deformation issues. On faces, poles go on the nose bridge, eye corners, and ear connection. On bodies, hide them in low-deformation areas like shoulder blades.',
            image: '/examples/topology-pole-placement.gif',
            tips: [
              'Keep poles off deformation areas',
              'Face: bridge of nose is safe',
              'Body: shoulder blade area works well',
              'Never on joint bend lines',
              'Use poles to redirect edge flow'
            ]
          },
          {
            title: 'Edge Termination',
            content: 'When you need to end an edge loop, create a pole. This redirects edge flow without breaking quad structure. Common when adding detail to specific areas without affecting the entire mesh.',
            image: '/examples/topology-edge-termination.gif',
            tips: [
              'Use poles to terminate edge loops',
              'Better than letting edges run forever',
              'Plan termination points early',
              'Use for localized detail additions',
              'Can spiral edges to avoid poles'
            ]
          }
        ]
      }
    },
    {
      name: 'Edge Density',
      icon: '/Icons/ops.mesh.loopcut_slide.svg',
      color: '#10b981',
      description: 'Place detail where needed, simplify elsewhere',
      detailedInfo: {
        overview: 'Edge density should vary across your mesh. High detail in important areas (faces, hands), lower detail in simple areas (forearms, flat surfaces). This optimizes both deformation and performance.',
        pages: [
          {
            title: 'Detail Hierarchy',
            content: 'Face gets the most geometry (expressions need it). Hands need moderate detail (finger joints). Torso can be simpler. Background objects need minimal geometry.',
            image: '/examples/topology-edge-density.gif',
            tips: [
              'Face: high density for expressions',
              'Hands: moderate for finger articulation',
              'Torso: lower density, still deforms',
              'Background: minimal geometry',
              'Optimize based on camera distance'
            ]
          },
          {
            title: 'Transition Zones',
            content: 'When transitioning from high to low density, use edge loop reduction techniques. Add poles, merge edges, or use diagonal edges to step down geometry gradually.',
            image: '/examples/topology-density-transition.gif',
            tips: [
              'Gradual transitions prevent artifacts',
              'Use poles to reduce loop count',
              'Diagonal edges help step down',
              'Don\'t jump from dense to sparse suddenly',
              'Plan density transitions early'
            ]
          },
          {
            title: 'Subdivision Preparation',
            content: 'Models meant for subdivision modifier need less base geometry. The modifier adds detail. Focus on edge flow and form, let subdivision add density.',
            image: '/examples/topology-subdivision-prep.gif',
            tips: [
              'Start with minimal geometry',
              'Let subdivision add detail',
              'Use Multires for sculpting prep',
              'Crease edges for hard surfaces',
              'Fewer polys = easier to edit'
            ]
          }
        ]
      }
    },
    {
      name: 'Manifold Geometry',
      icon: '/Icons/mesh_cube.svg',
      color: '#3b82f6',
      description: 'Create watertight, valid 3D meshes',
      detailedInfo: {
        overview: 'Manifold geometry means every edge connects exactly two faces, and the mesh has no holes or internal faces. Non-manifold geometry causes 3D printing, simulation, and rendering issues.',
        pages: [
          {
            title: 'What is Manifold?',
            content: 'A manifold mesh represents a real 3D object - it has volume, inside, and outside. Non-manifold edges (connected to 3+ faces) or loose geometry break this, causing technical issues.',
            image: '/examples/topology-manifold-concept.gif',
            tips: [
              'Every edge should connect exactly 2 faces',
              'No loose vertices or edges',
              'No internal faces or geometry',
              'Mesh must be closed (watertight)',
              '3D Print Toolbox finds non-manifold issues'
            ]
          },
          {
            title: 'Finding Non-Manifold',
            content: 'Select all (A), then Select > Select All by Trait > Non-Manifold. Problem areas highlight. Common causes: overlapping geometry, internal faces, or disconnected parts.',
            image: '/examples/topology-find-nonmanifold.gif',
            tips: [
              'Shift+Ctrl+Alt+M selects non-manifold',
              'Check with 3D Print Toolbox addon',
              'Common in imported meshes',
              'Fix by merging or deleting doubles',
              'Required for 3D printing'
            ]
          },
          {
            title: 'Fixing Non-Manifold',
            content: 'Remove doubles (M > By Distance), delete internal faces, fill holes (F), and ensure no overlapping geometry. The 3D Print Toolbox has automatic fixing tools.',
            image: '/examples/topology-fix-nonmanifold.gif',
            tips: [
              'Merge vertices by distance',
              'Delete internal faces',
              'Fill holes with F or Grid Fill',
              'Check normals (face orientation)',
              'Use Make Manifold in 3D Print addon'
            ]
          }
        ]
      }
    },
    {
      name: 'Subdivision Surface',
      icon: '/Icons/mod_subsurf.svg',
      color: '#06b6d4',
      description: 'Model with subdivision modifier in mind',
      detailedInfo: {
        overview: 'The Subdivision Surface modifier smooths your mesh by subdividing it. Understanding how it works is essential for efficient modeling - you build the cage, subdivision creates the smooth result.',
        pages: [
          {
            title: 'How Subdivision Works',
            content: 'Subdivision splits each face into smaller faces and averages vertex positions to create smooth surfaces. Your base mesh (cage) controls the final smooth form.',
            image: '/examples/topology-subdivision-basics.gif',
            tips: [
              'Base mesh is the control cage',
              'Add modifier with Ctrl+1, Ctrl+2, etc.',
              'More levels = smoother but slower',
              ' 2 levels usually enough for rendering',
              'Model with modifier active to see result'
            ]
          },
          {
            title: 'Edge Creasing',
            content: 'Shift+E to crease selected edges. Creased edges stay sharp after subdivision. Perfect for hard-surface modeling - crisp bevels without dense geometry.',
            image: '/examples/topology-edge-creasing.gif',
            tips: [
              'Shift+E to crease edges (0-1)',
              'Keeps edges sharp in subdivision',
              'Great for hard-surface details',
              'Better than dense geometry',
              'Can animate crease values'
            ]
          },
          {
            title: 'Supporting Edge Loops',
            content: 'To keep corners sharp, add edge loops close to edges. The closer the loops, the sharper the corner after subdivision. This is the traditional method before creasing was added.',
            image: '/examples/topology-supporting-loops.gif',
            tips: [
              'Add loops near edges for sharpness',
              'Closer loops = sharper result',
              'Traditional hard-surface technique',
              'More control than creasing',
              'Use for organic hard transitions'
            ]
          }
        ]
      }
    }
  ],

  techniques: [
    {
      name: 'Retopology Basics',
      icon: '/Icons/ops.mesh.knife_tool.svg',
      color: '#8b5cf6',
      description: 'Create clean topology over sculpted meshes',
      detailedInfo: {
        overview: 'Retopology is the process of creating a new, clean mesh over a high-resolution sculpt. It\'s essential for making sculpted models usable in animation and games.',
        pages: [
          {
            title: 'Why Retopologize?',
            content: 'Sculpts have millions of polygons with chaotic topology. Retopology creates a clean, quad-based mesh with proper edge flow that can be rigged, animated, and textured efficiently.',
            image: '/examples/topology-retopo-why.gif',
            tips: [
              'Sculpts are too dense for animation',
              'Need clean topology for rigging',
              'Better UV unwrapping on clean mesh',
              'Drastically improves performance',
              'Industry-standard workflow'
            ]
          },
          {
            title: 'Manual Retopology',
            content: 'Add a plane, enable Snap to Face. Extrude edges (E) to draw topology over the sculpt. Build edge loops following the form. This gives maximum control.',
            image: '/examples/topology-manual-retopo.gif',
            tips: [
              'Enable Face snapping in header',
              'Start with major edge loops',
              'Follow muscle and form contours',
              'Build out from key features',
              'Takes practice but full control'
            ]
          },
          {
            title: 'Retopology Tools',
            content: 'RetopoFlow addon provides specialized tools. Instant Meshes (external) auto-generates topology. These speed up the process but may need manual cleanup.',
            image: '/examples/topology-retopo-tools.gif',
            tips: [
              'RetopoFlow addon in Blender',
              'Instant Meshes for auto-retopo',
              'Quad Remesher for quick results',
              'ZRemesher in ZBrush',
              'Always check and clean results'
            ]
          }
        ]
      }
    },
    {
      name: 'Loop Reduction',
      icon: '/Icons/ops.mesh.loopcut_slide.svg',
      color: '#10b981',
      description: 'Reduce geometry while maintaining form',
      detailedInfo: {
        overview: 'Loop reduction removes edge loops while preserving mesh shape. Essential for optimization and transitioning from high to low density areas.',
        pages: [
          {
            title: 'Edge Loop Deletion',
            content: 'Select an edge loop (Alt+Click), press X > Dissolve Edges. The loop disappears and surrounding faces merge. Only works cleanly with good quad topology.',
            image: '/examples/topology-loop-reduction.gif',
            tips: [
              'Alt+Click to select loop',
              'X > Dissolve Edges to remove',
              'Only works on clean quad topology',
              'Test on copy first',
              'Can cause N-gons if not careful'
            ]
          },
          {
            title: 'Loop Merging',
            content: 'Select two parallel edge loops, use LoopTools (addon) > Bridge. Merges loops together. Great for reducing density in specific areas.',
            image: '/examples/topology-loop-merge.gif',
            tips: [
              'Enable LoopTools addon',
              'Select two parallel loops',
              'Right-click > LoopTools > Bridge',
              'Great for gradual density reduction',
              'Maintains quad topology'
            ]
          },
          {
            title: 'Limited Dissolve',
            content: 'Select area, X > Limited Dissolve. Automatically removes unnecessary edges while maintaining form. Adjust angle threshold to control aggression.',
            image: '/examples/topology-limited-dissolve.gif',
            tips: [
              'Removes edges that don\'t affect form',
              'Adjust max angle for control',
              'Great for cleaning imported meshes',
              'May create N-gons',
              'Check result carefully'
            ]
          }
        ]
      }
    },
    {
      name: 'Fixing Common Issues',
      icon: '/Icons/tool.svg',
      color: '#ec4899',
      description: 'Identify and repair topology problems',
      detailedInfo: {
        overview: 'Learn to spot and fix common topology mistakes: overlapping geometry, flipped normals, non-manifold edges, and poor edge flow.',
        pages: [
          {
            title: 'Flipped Normals',
            content: 'Face Orientation overlay shows flipped faces in red. Select all (A), Shift+N to recalculate normals outside. Flip individual faces with Alt+N > Flip.',
            image: '/examples/topology-fix-normals.gif',
            tips: [
              'Enable Face Orientation overlay',
              'Red = flipped, blue = correct',
              'Shift+N recalculates outside',
              'Alt+N > Flip for manual control',
              'Common in imported meshes'
            ]
          },
          {
            title: 'Overlapping Geometry',
            content: 'Select all (A), M > By Distance to merge overlapping vertices. Set distance to 0.0001 for precision. Use Remove Doubles for older Blender versions.',
            image: '/examples/topology-fix-overlapping.gif',
            tips: [
              'M > By Distance merges close verts',
              'Adjust threshold carefully',
              'Common from import/export',
              'Check before and after count',
              'Can accidentally merge intentional detail'
            ]
          },
          {
            title: 'Ngons and Triangles',
            content: 'Use Checker Deselect to spot tris. Select N-gons with Select > Select All by Trait > Faces by Sides. Fix by adding edges (J) or dissolving (X) strategically.',
            image: '/examples/topology-fix-ngons.gif',
            tips: [
              'Select faces, Checker Deselect shows tris',
              'J key to connect vertices with edge',
              'Use Knife (K) to split N-gons',
              'Grid Fill for organized quads',
              'Manual fixes give best results'
            ]
          }
        ]
      }
    },
    {
      name: 'Character Face Topology',
      icon: '/Icons/mesh_grid.svg',
      color: '#f59e0b',
      description: 'Master facial edge loops for animation',
      detailedInfo: {
        overview: 'Face topology is the most critical part of character modeling. Proper edge flow around features enables realistic expressions and deformations.',
        pages: [
          {
            title: 'Eye Loop Pattern',
            content: 'Concentric loops around eyes enable squinting, wide eyes, and eyelid movement. Minimum 3 loops around eye socket. More for realistic characters.',
            image: '/examples/topology-face-eyes.gif',
            tips: [
              'Minimum 3 concentric eye loops',
              'Top and bottom eyelid need separate loops',
              'Corner vertices are poles',
              'Radiate from eye corners',
              'More loops = better expressions'
            ]
          },
          {
            title: 'Mouth Loop Pattern',
            content: 'Loops encircle mouth following smile lines. Minimum 4 loops around lips. These enable talking, smiling, and all mouth expressions.',
            image: '/examples/topology-face-mouth.gif',
            tips: [
              'Loops follow natural smile lines',
              'Minimum 4 loops around mouth',
              'Edge flow radiates from corners',
              'Lip edges need detail',
              'Center vertices for symmetry'
            ]
          },
          {
            title: 'Full Face Flow',
            content: 'Edge flow connects eyes, nose, mouth, and ears. Cheek bones, jaw line, and forehead need horizontal loops. Nose bridge is a common pole location.',
            image: '/examples/topology-face-full.gif',
            tips: [
              'Connect all features with loops',
              'Horizontal loops across forehead',
              'Vertical loops down nose',
              'Poles on nose bridge are safe',
              'Study facial anatomy extensively'
            ]
          }
        ]
      }
    },
    {
      name: 'Body Topology',
      icon: '/Icons/ops.mesh.primitive_cube_add.svg',
      color: '#3b82f6',
      description: 'Build bodies that deform correctly',
      detailedInfo: {
        overview: 'Body topology must accommodate all major joint movements: shoulders, elbows, hips, knees. Proper loops prevent mesh collapse during animation.',
        pages: [
          {
            title: 'Limb Topology',
            content: 'Horizontal loops around arms and legs enable bending. Minimum 3 loops across joints (more for realistic). Loops should be perpendicular to bend direction.',
            image: '/examples/topology-body-limbs.gif',
            tips: [
              'Horizontal loops for limb bending',
              'Minimum 3 loops at each joint',
              'Elbow/knee needs most detail',
              'Loops perpendicular to bend',
              'Test with simple armature'
            ]
          },
          {
            title: 'Torso Topology',
            content: 'Edge loops follow muscle groups. Horizontal loops around chest, waist. Vertical loops down spine, sides. Shoulder connection is complex - study references.',
            image: '/examples/topology-body-torso.gif',
            tips: [
              'Follow muscle anatomy',
              'Horizontal loops around torso',
              'Vertical loops down sides',
              'Shoulder needs careful planning',
              'Reference anatomy books'
            ]
          },
          {
            title: 'Hand and Foot Topology',
            content: 'Hands need loops around each finger joint (3 each) plus palm. Feet can be simpler but toes still need articulation loops. Thumb requires special attention.',
            image: '/examples/topology-body-hands.gif',
            tips: [
              'Each finger needs 3 joint loops',
              'Palm needs radial pattern',
              'Thumb topology is tricky',
              'Feet can be simpler',
              'More detail = better animation'
            ]
          }
        ]
      }
    },
    {
      name: 'Hard Surface Topology',
      icon: '/Icons/mod_edgesplit.svg',
      color: '#a855f7',
      description: 'Clean topology for mechanical objects',
      detailedInfo: {
        overview: 'Hard surface topology emphasizes clean quads, proper bevels, and supporting geometry for sharp edges. Different from organic but equally important.',
        pages: [
          {
            title: 'Panel Lines and Flow',
            content: 'Edge loops should follow panel lines, seams, and manufacturing details. Creates natural divisions and helps with texturing. Plan panel flow early.',
            image: '/examples/topology-hardsurface-panels.gif',
            tips: [
              'Follow panel lines with loops',
              'Seams define separate panels',
              'Aids both topology and texturing',
              'Study real manufactured objects',
              'Boolean operations need cleanup'
            ]
          },
          {
            title: 'Bevel Topology',
            content: 'Bevels need supporting edge loops parallel to the bevel. These maintain bevel shape through subdivision. Use edge creasing for sharper results.',
            image: '/examples/topology-hardsurface-bevels.gif',
            tips: [
              'Support bevels with parallel loops',
              'Use edge creasing for sharpness',
              'Bevel modifier needs clean base',
              'Control bevel width with spacing',
              'Can use weighted normals'
            ]
          },
          {
            title: 'Boolean Cleanup',
            content: 'Boolean operations create messy topology. After booleans, dissolve unnecessary edges, rebuild with quads, add supporting loops. Never leave raw boolean results.',
            image: '/examples/topology-hardsurface-boolean.gif',
            tips: [
              'Booleans create messy topology',
              'Always clean up afterward',
              'Limited Dissolve helps',
              'Manually rebuild complex areas',
              'Use booleans as starting point only'
            ]
          }
        ]
      }
    }
  ],

  practiceProjects: [
    { 
      title: 'Retopologize a Sculpted Rock', 
      desc: 'Practice basic retopology on a simple organic form', 
      duration: '15 min', 
      difficulty: 'Beginner',
      skills: ['Manual retopo', 'Face snapping', 'Quad flow']
    },
    { 
      title: 'Create Clean Cylinder Topology', 
      desc: 'Build perfect circular edge flow and pole placement', 
      duration: '10 min', 
      difficulty: 'Beginner',
      skills: ['Circular topology', 'Pole placement', 'Edge loops']
    },
    { 
      title: 'Model a Stylized Character Head', 
      desc: 'Apply facial topology principles with proper loops', 
      duration: '30 min', 
      difficulty: 'Intermediate',
      skills: ['Facial loops', 'Eye topology', 'Mouth loops']
    },
    { 
      title: 'Fix Imported Mesh Topology', 
      desc: 'Clean up and optimize messy imported geometry', 
      duration: '20 min', 
      difficulty: 'Intermediate',
      skills: ['Non-manifold fixes', 'Quad conversion', 'Edge reduction']
    },
    { 
      title: 'Build a Mechanical Joint', 
      desc: 'Hard-surface topology with bevels and panel lines', 
      duration: '25 min', 
      difficulty: 'Advanced',
      skills: ['Hard surface', 'Bevel support', 'Boolean cleanup']
    },
    { 
      title: 'Retopo Full Character Body', 
      desc: 'Complete retopology with proper joint edge loops', 
      duration: '60 min', 
      difficulty: 'Advanced',
      skills: ['Full body topology', 'Joint loops', 'Density management']
    }
  ]
}