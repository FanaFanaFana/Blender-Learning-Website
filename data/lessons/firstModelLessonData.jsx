// FILE: data/lessons/firstModelLessonData.js

export const firstModelLessonData = {
  heroConfig : {
    title: 'Your First',
    gradientText: '3D Model',
    subtitle: 'Start your 3D journey with hands-on modeling basics',
    gradientColors: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/filebrowser.svg', title: '1 Project', subtitle: 'Build a coffee mug' }
    ]
  },

  tabs : [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'steps', icon: '/Icons/tool.svg', label: 'Learning Steps' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor : '#3b82f6',

  overviewCards : [
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
  ],

  modelingSteps : [
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
                image: '/examples/first-model-add-cube.gif',
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
                image: '/examples/first-model-cube-components.gif',
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
                image: '/examples/first-model-enter-edit-mode.gif',
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
                image: '/examples/first-model-selection-modes.gif',
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
                image: '/examples/first-model-navigation-basics.gif',
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
                image: '/examples/first-model-frame-selected.gif',
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
                image: '/examples/first-model-extrude-basic.gif',
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
                image: '/examples/first-model-extrude-constrained.gif',
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
                image: '/examples/first-model-scale-basic.gif',
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
                image: '/examples/first-model-scale-axis.gif',
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
                image: '/examples/first-model-loop-cut.gif',
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
                image: '/examples/first-model-inset-faces.gif',
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
          icon: '/Icons/node_material.svg',
          detailedInfo: {
            overview: 'Smooth shading makes your models look organic and polished by blending the lighting between faces.',
            pages: [
              {
                title: 'Applying Smooth Shading',
                content: 'Right-click your object and choose "Shade Smooth". Your model instantly looks more organic and less blocky.',
                image: '/examples/first-model-shade-smooth.gif',
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
                image: '/examples/first-model-subdivision-surface.gif',
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
  ],

  practiceProjects : [
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
}