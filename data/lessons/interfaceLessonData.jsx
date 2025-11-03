export const interfaceLessonData = {
  heroConfig: {
    title: 'Blender',
    gradientText: 'Interface',
    subtitle: 'Master the Blender interface and start your 3D journey with confidence',
    gradientColors: 'linear-gradient(135deg, #f97316, #fb923c, #fbbf24)',
    badges: []
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/view3d.svg', label: 'Interface Areas' },
    { id: 'shortcuts', icon: '/Icons/settings.svg', label: 'Shortcuts' }
  ],

  themeColor: '#f97316',

  overviewTitle: 'Understanding Blender\'s Interface',
  overviewDescription: 'Get familiar with the workspace before diving in',

  overviewCards: [
    {
      icon: '/Icons/view3d.svg',
      title: 'Workspaces',
      content: 'At the top of Blender, you\'ll see workspace tabs like Modeling, Sculpting, and Shading. Each workspace is pre-configured with specific panels and tools for different tasks. Start with "Modeling" for now.'
    },
    {
      icon: '/Icons/panel.svg',
      title: 'Editor Areas',
      content: 'Your screen is divided into different editor areas. Each area can display a different editor type (3D Viewport, Outliner, Properties, etc.). You can split, join, and resize these areas to customize your workspace.'
    },
    {
      icon: '/Icons/settings.svg',
      title: 'Customization',
      content: 'Don\'t worry about memorizing everything at once. Blender is designed to let you customize everything to your workflow. Focus on learning the main areas first, then gradually explore advanced options as you need them.'
    }
  ],

  contentTitle: 'Interface Areas',
  contentDescription: 'Explore Blender\'s powerful editors and panels',

  categories: [
    {
      name: 'Editor Types',
      icon: '/Icons/view3d.svg',
      color: '#f97316',
      items: [
        {
          name: '3D Viewport',
          icon: '/Icons/view3d.svg',
          description: 'Main 3D workspace for modeling and scene composition',
          detailedInfo: {
            overview: 'The 3D Viewport is your primary workspace where you view and manipulate 3D objects. Navigate with middle mouse button, select objects, and use tools from the left toolbar.',
            pages: [
              {
                title: 'Viewport Navigation',
                content: 'The 3D Viewport is where all the magic happens. Use your middle mouse button to orbit around your scene, Shift+MMB to pan, and scroll to zoom. The viewport shows your 3D objects from any angle you choose.',
                image: '/examples/viewport-navigation.mp4',
                tips: [
                  'MMB to rotate view',
                  'Shift+MMB to pan',
                  'Scroll to zoom',
                  'Numpad keys for quick views (1:Front, 3:Side, 7:Top)'
                ]
              }
            ]
          }
        },
        {
          name: 'Python Console',
          icon: '/Icons/console.svg',
          description: 'Execute Python scripts and commands',
          detailedInfo: {
            overview: 'Interactive Python console for running scripts, testing code, and automating Blender tasks. Access Blender\'s API directly and see results immediately.',
            pages: [
              {
                title: 'Using the Console',
                content: 'The Python Console lets you interact with Blender through code. Type commands, see instant results, and learn the API. Perfect for automation and scripting.',
                image: '/examples/python-console.gif',
                tips: [
                  'bpy.ops for operations',
                  'bpy.data for scene data',
                  'bpy.context for active objects',
                  'Tab for autocomplete'
                ]
              }
            ]
          }
        },
        {
          name: 'Info Editor',
          icon: '/Icons/info.svg',
          description: 'View operations log and system messages',
          detailedInfo: {
            overview: 'Shows all operations executed in Blender as Python commands. Useful for learning the API, debugging, and creating scripts from your actions.',
            pages: [
              {
                title: 'Operation Logging',
                content: 'Every action you perform in Blender is logged here as Python code. This is incredibly useful for learning the API and creating automated scripts.',
                image: '/examples/info-editor.gif',
                tips: [
                  'Copy commands to create scripts',
                  'Shows errors and warnings',
                  'Right-click to copy commands',
                  'Reveals Python equivalent of UI actions'
                ]
              }
            ]
          }
        },
        {
          name: 'Text Editor',
          icon: '/Icons/text.svg',
          description: 'Write and run Python scripts',
          detailedInfo: {
            overview: 'Built-in text editor for writing Python scripts, shaders, and notes. Run scripts directly in Blender to automate tasks or create add-ons.',
            pages: [
              {
                title: 'Script Editing',
                content: 'Write Python scripts directly in Blender. Use templates, run scripts instantly with Alt+P, and create powerful automation tools.',
                image: '/examples/text-editor.gif',
                tips: [
                  'Alt+P to run script',
                  'Templates menu for examples',
                  'Syntax highlighting included',
                  'Create multiple text files'
                ]
              }
            ]
          }
        },
        {
          name: 'Asset Browser',
          icon: '/Icons/asset_manager.svg',
          description: 'Browse and manage asset libraries',
          detailedInfo: {
            overview: 'Organize and access your asset libraries. Drag and drop materials, objects, node groups, and poses. Create custom libraries for project-specific assets.',
            pages: [
              {
                title: 'Managing Assets',
                content: 'The Asset Browser helps you organize reusable content. Mark assets, create catalogs, and drag them into your scene for instant use.',
                image: '/examples/asset-browser.gif',
                tips: [
                  'Mark assets with shield icon',
                  'Drag assets into scene',
                  'Create catalogs for organization',
                  'Link libraries from other files'
                ]
              }
            ]
          }
        },
        {
          name: 'Shader Editor',
          icon: '/Icons/node_material.svg',
          description: 'Node-based material and shader creation',
          detailedInfo: {
            overview: 'Create materials using a node-based system. Connect texture, shader, and color nodes to build complex, realistic materials for your 3D objects.',
            pages: [
              {
                title: 'Node-Based Materials',
                content: 'The Shader Editor uses a node system to create materials. Connect nodes together to build everything from simple colors to complex, photorealistic surfaces.',
                image: '/examples/shader-editor.gif',
                tips: [
                  'Shift+A to add nodes',
                  'Connect node sockets by dragging',
                  'Ctrl+Shift+Click to preview node output',
                  'Use Mix Shader to blend materials'
                ]
              }
            ]
          }
        },
        {
          name: 'UV Editor',
          icon: '/Icons/uv.svg',
          description: 'Unwrap and edit UV texture coordinates',
          detailedInfo: {
            overview: 'Unwrap 3D objects into 2D space for texture painting. Essential for applying images and textures accurately to your models.',
            pages: [
              {
                title: 'UV Unwrapping',
                content: 'The UV Editor lets you unwrap your 3D models into 2D space. This is essential for texture painting and applying image textures.',
                image: '/examples/uv-editor.gif',
                tips: [
                  'U key in Edit Mode to unwrap',
                  'Select seams with Ctrl+E > Mark Seam',
                  'Pin vertices with P key',
                  'Use Smart UV Project for quick unwraps'
                ]
              }
            ]
          }
        },
        {
          name: 'Geometry Nodes',
          icon: '/Icons/geometry_nodes.svg',
          description: 'Procedural modeling with node-based workflows',
          detailedInfo: {
            overview: 'Create procedural geometry, scatter objects, and build complex systems using a node-based approach. Powerful for creating parametric and non-destructive effects.',
            pages: [
              {
                title: 'Procedural Modeling',
                content: 'Geometry Nodes let you create procedural effects and complex geometry systems. Build parametric models that update automatically.',
                image: '/examples/geometry-nodes.gif',
                tips: [
                  'Shift+A to add nodes',
                  'Use Distribute Points on Faces for scattering',
                  'Instance on Points to duplicate objects',
                  'Combine with modifiers for complex results'
                ]
              }
            ]
          }
        },
        {
          name: 'Timeline',
          icon: '/Icons/time.svg',
          description: 'Animation playback and keyframe overview',
          detailedInfo: {
            overview: 'Scrub through animation frames, view keyframes, and control playback. Shows a simplified view of your animation timeline.',
            pages: [
              {
                title: 'Animation Control',
                content: 'The Timeline shows your animation frames. Scrub the playhead to preview animation, set keyframes, and control playback speed.',
                image: '/examples/timeline.gif',
                tips: [
                  'Spacebar to play/pause',
                  'I key to insert keyframes',
                  'Drag blue playhead to scrub',
                  'Left/Right arrows to step frames'
                ]
              }
            ]
          }
        },
        {
          name: 'Dope Sheet',
          icon: '/Icons/action.svg',
          description: 'Keyframe management and animation timing',
          detailedInfo: {
            overview: 'View and edit all keyframes in your scene. Organize animation channels, adjust timing, and manage complex animations with multiple objects.',
            pages: [
              {
                title: 'Keyframe Management',
                content: 'The Dope Sheet shows all your keyframes in a spreadsheet format. Move, copy, and organize keyframes for precise animation control.',
                image: '/examples/dope-sheet.gif',
                tips: [
                  'G to move keyframes',
                  'S to scale timing',
                  'K toggles auto-keying',
                  'Tab switches to Shape Key Editor'
                ]
              }
            ]
          }
        },
        {
          name: 'Graph Editor',
          icon: '/Icons/graph.svg',
          description: 'Edit animation curves and interpolation',
          detailedInfo: {
            overview: 'Fine-tune animation by editing bezier curves. Control easing, speed, and exact values of animated properties over time.',
            pages: [
              {
                title: 'Animation Curves',
                content: 'The Graph Editor shows animation as curves. Edit handles to control easing and timing, creating smooth or snappy motion.',
                image: '/examples/graph-editor.gif',
                tips: [
                  'V for handle types',
                  'Shift+E for extrapolation modes',
                  'N panel shows exact keyframe values',
                  'Normalize view with Home key'
                ]
              }
            ]
          }
        },
        {
          name: 'NLA Editor',
          icon: '/Icons/nla.svg',
          description: 'Non-linear animation mixing and sequencing',
          detailedInfo: {
            overview: 'Layer and blend multiple animations as "action strips". Perfect for creating complex character animations by combining different motion clips.',
            pages: [
              {
                title: 'Action Strips',
                content: 'The NLA Editor lets you combine multiple animations into sequences. Layer walk cycles, blend actions, and create complex character performances.',
                image: '/examples/nla-editor.gif',
                tips: [
                  'Push Down icon creates action strip',
                  'Blend In/Out for smooth transitions',
                  'Scale strips to change playback speed',
                  'Mute tracks with M key'
                ]
              }
            ]
          }
        },
        {
          name: 'Video Sequencer',
          icon: '/Icons/sequence.svg',
          description: 'Video editing and compositing timeline',
          detailedInfo: {
            overview: 'Edit videos, add effects, and composite renders. Cut footage, add transitions, and create complete video projects within Blender.',
            pages: [
              {
                title: 'Video Editing',
                content: 'Blender includes a full video editor. Cut footage, add effects, composite renders, and create complete video projects.',
                image: '/examples/video-sequencer.gif',
                tips: [
                  'Add > Movie to import footage',
                  'K key for blade/cut tool',
                  'Use effects strips for transitions',
                  'Ctrl+Alt+Numpad0 sets preview range'
                ]
              }
            ]
          }
        },
        {
          name: 'Image Editor',
          icon: '/Icons/image.svg',
          description: 'View and paint on textures and renders',
          detailedInfo: {
            overview: 'Preview rendered images, paint textures directly, and work with UV layouts. Can also display render results and compositing output.',
            pages: [
              {
                title: 'Texture Painting',
                content: 'The Image Editor displays textures and renders. Switch to Paint mode to paint directly on your textures in 2D.',
                image: '/examples/image-editor.gif',
                tips: [
                  'Switch to Paint mode for texture painting',
                  'S key to sample colors',
                  'F11 to show last render',
                  'Slot system for multiple images'
                ]
              }
            ]
          }
        },
        {
          name: 'Compositor',
          icon: '/Icons/node_compositing.svg',
          description: 'Node-based post-processing and effects',
          detailedInfo: {
            overview: 'Add post-processing effects to renders using nodes. Color grade, add glows, lens effects, and combine render layers.',
            pages: [
              {
                title: 'Post-Processing',
                content: 'The Compositor uses nodes to add effects to your renders. Color grade, add glows, combine layers, and create stunning final images.',
                image: '/examples/compositor.gif',
                tips: [
                  'Use Render Layers node as input',
                  'Enable backdrop for preview',
                  'Mix nodes combine layers',
                  'Viewer node shows intermediate results'
                ]
              }
            ]
          }
        },
        {
          name: 'Texture Node Editor',
          icon: '/Icons/texture.svg',
          description: 'Procedural texture creation (legacy)',
          detailedInfo: {
            overview: 'Create procedural textures for older Blender Internal renderer. Most workflows now use Shader Editor instead.',
            pages: [
              {
                title: 'Legacy Textures',
                content: 'This editor creates procedural textures for the legacy Blender Internal renderer. Modern workflows use the Shader Editor instead.',
                image: '/examples/texture-nodes.gif',
                tips: [
                  'Legacy feature, use Shader Editor for modern work',
                  'Still useful for some procedural effects',
                  'Limited compared to shader nodes',
                  'Can export to external renderers'
                ]
              }
            ]
          }
        },
        {
          name: 'Outliner',
          icon: '/Icons/outliner.svg',
          description: 'Scene hierarchy and object organization',
          detailedInfo: {
            overview: 'View all objects, materials, and data in your scene as a hierarchical list. Organize with collections, manage visibility, and quickly select items.',
            pages: [
              {
                title: 'Scene Organization',
                content: 'The Outliner shows your entire scene structure in a tree view. Organize objects into collections, toggle visibility, and manage your scene hierarchy efficiently.',
                image: '/examples/outliner.gif',
                tips: [
                  'Click to select objects',
                  'Eye icon toggles visibility',
                  'Arrow icon toggles selectability',
                  'M key moves objects to collections'
                ]
              }
            ]
          }
        },
        {
          name: 'Properties',
          icon: '/Icons/properties.svg',
          description: 'Settings for objects, materials, and scene',
          detailedInfo: {
            overview: 'Contains tabbed panels for all object properties, modifiers, materials, render settings, and scene configuration. Your main settings hub.',
            pages: [
              {
                title: 'Property Panels',
                content: 'The Properties panel contains all settings for your selected object, from modifiers to materials to physics. Each icon tab opens a different category of settings.',
                image: '/examples/properties.gif',
                tips: [
                  'Each icon opens a different tab',
                  'Wrench icon for modifiers',
                  'Material icon for shader properties',
                  'Camera icon for render settings'
                ]
              }
            ]
          }
        },
        {
          name: 'Movie Clip Editor',
          icon: '/Icons/tracker.svg',
          description: 'Motion tracking and camera solving',
          detailedInfo: {
            overview: 'Track camera motion from video footage. Place markers on video, solve camera movement, and integrate 3D objects into live-action footage.',
            pages: [
              {
                title: 'Motion Tracking',
                content: 'The Movie Clip Editor tracks camera movement in video footage. Place markers, solve camera motion, and composite 3D objects into real footage.',
                image: '/examples/movie-clip.gif',
                tips: [
                  'Add markers with Ctrl+Click',
                  'Track Forward/Backward buttons',
                  'Solve camera motion',
                  'Essential for VFX compositing'
                ]
              }
            ]
          }
        },
        {
          name: 'File Browser',
          icon: '/Icons/filebrowser.svg',
          description: 'Navigate files and import/append assets',
          detailedInfo: {
            overview: 'Browse your file system to open, save, import, and append assets. Preview thumbnails of blend files and images before importing.',
            pages: [
              {
                title: 'File Management',
                content: 'The File Browser helps you navigate your file system, preview blend files, and import external assets into your scene.',
                image: '/examples/file-browser.gif',
                tips: [
                  'Ctrl+O to open files',
                  'File > Import for external formats',
                  'Append copies data from other files',
                  'Link creates live references'
                ]
              }
            ]
          }
        },
        {
          name: 'Spreadsheet',
          icon: '/Icons/spreadsheet.svg',
          description: 'View geometry data in table format',
          detailedInfo: {
            overview: 'Inspect vertex positions, attributes, and geometry data in spreadsheet format. Useful for debugging geometry nodes and checking data.',
            pages: [
              {
                title: 'Geometry Data',
                content: 'The Spreadsheet shows geometry data as tables. Perfect for debugging geometry nodes and inspecting vertex attributes.',
                image: '/examples/spreadsheet.gif',
                tips: [
                  'Shows vertices, edges, faces',
                  'View attributes and custom data',
                  'Filter by selection',
                  'Essential for geometry nodes debugging'
                ]
              }
            ]
          }
        },
        {
          name: 'Preferences',
          icon: '/Icons/settings.svg',
          description: 'Blender settings and add-ons',
          detailedInfo: {
            overview: 'Configure Blender preferences, enable add-ons, customize keymap, and adjust interface settings. Edit > Preferences to access.',
            pages: [
              {
                title: 'Customization',
                content: 'Preferences let you customize Blender to your workflow. Enable add-ons, change shortcuts, adjust interface settings, and more.',
                image: '/examples/preferences.gif',
                tips: [
                  'Add-ons tab for extensions',
                  'Keymap for custom shortcuts',
                  'Save Preferences to keep settings',
                  'Import/Export keymaps'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Panel & UI Elements',
      icon: '/Icons/panel.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Tool Shelf (T)',
          icon: '/Icons/tool.svg',
          description: 'Left sidebar with modeling and transform tools',
          detailedInfo: {
            overview: 'The Tool Shelf appears on the left side of the 3D Viewport. Contains tools for modeling, sculpting, and other operations specific to your current mode.',
            pages: [
              {
                title: 'Accessing Tools',
                content: 'Press T to toggle the Tool Shelf. This panel contains all your active tools, changing based on which mode you\'re in (Object, Edit, Sculpt, etc.).',
                image: '/examples/tool-shelf.gif',
                tips: [
                  'T key to toggle visibility',
                  'Tools change based on mode',
                  'Click and hold for tool variations',
                  'Shift+Spacebar for tool switching'
                ]
              }
            ]
          }
        },
        {
          name: 'Properties Panel (N)',
          icon: '/Icons/properties.svg',
          description: 'Right sidebar with precise values and settings',
          detailedInfo: {
            overview: 'The N-panel shows detailed properties of selected objects, including transforms, item settings, and tool options. Essential for precise modeling.',
            pages: [
              {
                title: 'Precise Control',
                content: 'The N-panel gives you precise control over transforms and object properties. Type exact values instead of eyeballing with the mouse.',
                image: '/examples/n-panel.gif',
                tips: [
                  'N key to toggle',
                  'Type exact transform values',
                  'View section shows viewport settings',
                  'Tool section shows active tool options'
                ]
              }
            ]
          }
        },
        {
          name: 'Status Bar',
          icon: '/Icons/statusbar.svg',
          description: 'Bottom bar with scene stats and shortcuts',
          detailedInfo: {
            overview: 'Shows scene statistics (vertices, faces), memory usage, and contextual keyboard shortcuts. Right side displays current operation hints.',
            pages: [
              {
                title: 'Scene Information',
                content: 'The Status Bar shows useful scene information like vertex count, memory usage, and context-sensitive keyboard shortcuts.',
                image: '/examples/status-bar.gif',
                tips: [
                  'Shows vertex/face count',
                  'Displays memory usage',
                  'Shows active shortcuts',
                  'Right side hints current operation'
                ]
              }
            ]
          }
        },
        {
          name: 'Header Bar',
          icon: '/Icons/statusbar.svg',
          description: 'Top bar of each editor with menus and settings',
          detailedInfo: {
            overview: 'Each editor has a header bar with menus, view options, and mode selectors. Drag header to move or resize editor areas.',
            pages: [
              {
                title: 'Editor Headers',
                content: 'Every editor has a header bar with menus and options. Use these to change editor type, adjust settings, and access specific features.',
                image: '/examples/header-bar.gif',
                tips: [
                  'Right-click header for options',
                  'Drag corners to split editors',
                  'Click icon to change editor type',
                  'Hide/show with right-click menu'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Modifier & Constraint Panels',
      icon: '/Icons/modifier.svg',
      color: '#a855f7',
      items: [
        {
          name: 'Modifiers',
          icon: '/Icons/modifier.svg',
          description: 'Non-destructive geometry operations',
          detailedInfo: {
            overview: 'Modifiers alter geometry without permanently changing it. Stack multiple modifiers for complex effects. Found in Properties panel (wrench icon).',
            pages: [
              {
                title: 'Modifier Stack',
                content: 'Modifiers change your geometry non-destructively. Stack them in any order, adjust settings, and apply when you\'re ready. Perfect for procedural workflows.',
                image: '/examples/modifiers.gif',
                tips: [
                  'Array for duplication',
                  'Subdivision Surface for smoothing',
                  'Mirror for symmetrical modeling',
                  'Order matters - drag to reorder'
                ]
              }
            ]
          }
        },
        {
          name: 'Constraints',
          icon: '/Icons/Constraint.svg',
          description: 'Control object transforms and relationships',
          detailedInfo: {
            overview: 'Constraints control how objects move and rotate relative to other objects. Essential for rigging, animation, and mechanical setups.',
            pages: [
              {
                title: 'Object Relationships',
                content: 'Constraints create relationships between objects. Make one object follow another, limit motion, or create complex mechanical rigs.',
                image: '/examples/Constraints.gif',
                tips: [
                  'Copy Location/Rotation/Scale',
                  'Track To makes object face target',
                  'Limit Location restricts movement',
                  'Child Of for parenting'
                ]
              }
            ]
          }
        },
        {
          name: 'Physics Properties',
          icon: '/Icons/physics.svg',
          description: 'Simulation settings for objects',
          detailedInfo: {
            overview: 'Add physics simulations like rigid body, cloth, fluid, and particles. Configure collision, mass, and simulation parameters.',
            pages: [
              {
                title: 'Physics Simulations',
                content: 'Add realistic physics to your objects. Create falling objects, flowing cloth, splashing fluids, and complex particle systems.',
                image: '/examples/physics.gif',
                tips: [
                  'Rigid Body for falling objects',
                  'Cloth for fabric simulation',
                  'Fluid for liquids',
                  'Bake simulations to cache'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Data Management',
      icon: '/Icons/data.svg',
      color: '#14b8a6',
      items: [
        {
          name: 'Collections',
          icon: '/Icons/collection_color_05.svg',
          description: 'Organize objects into groups',
          detailedInfo: {
            overview: 'Collections organize objects hierarchically. Control visibility, selectability, and rendering per collection. Essential for complex scenes.',
            pages: [
              {
                title: 'Scene Organization',
                content: 'Collections group related objects together. Create hierarchies, control visibility, and organize complex scenes efficiently.',
                image: '/examples/collections.gif',
                tips: [
                  'M key to move to collection',
                  'Eye icon for viewport visibility',
                  'Camera icon for render visibility',
                  'Nest collections for organization'
                ]
              }
            ]
          }
        },
        {
          name: 'Data-Blocks',
          icon: '/Icons/cube.svg',
          description: 'Reusable data shared between objects',
          detailedInfo: {
            overview: 'Meshes, materials, and other data can be shared. Number shows usage count. Shield icon prevents deletion. Zero users are removed on save.',
            pages: [
              {
                title: 'Shared Data',
                content: 'Data-blocks are reusable assets. Multiple objects can share the same mesh or material. Edit once, update everywhere.',
                image: '/examples/datablocks.gif',
                tips: [
                  'Shield for fake user (keeps data)',
                  'Number shows usage count',
                  'Unlink to create unique copy',
                  'Browse with dropdown menu'
                ]
              }
            ]
          }
        },
        {
          name: 'Custom Properties',
          icon: '/Icons/properties.svg',
          description: 'Add custom data to objects',
          detailedInfo: {
            overview: 'Add custom properties to objects for rigging controls, metadata, or driving animations. Access in N-panel under Item tab.',
            pages: [
              {
                title: 'Custom Data',
                content: 'Add your own custom properties to objects. Perfect for rig controls, storing metadata, or creating driver relationships.',
                image: '/examples/custom-props.gif',
                tips: [
                  'Great for rig controls',
                  'Use in drivers for automation',
                  'Can be animated',
                  'String, float, int, or bool types'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Object Modes',
      icon: '/Icons/object_datamode.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Object Mode',
          icon: '/Icons/object_datamode.svg',
          description: 'Select and transform whole objects',
          detailedInfo: {
            overview: 'Default mode for working with complete objects. Move, rotate, and scale entire meshes, cameras, lights, and other object types.',
            pages: [
              {
                title: 'Working with Objects',
                content: 'Object Mode lets you work with complete objects. Move them around, rotate, scale, and manage your scene at a high level.',
                image: '/examples/object-mode.gif',
                tips: [
                  'Tab to switch to Edit Mode',
                  'Ctrl+Tab for mode pie menu',
                  'G/R/S for transform operations',
                  'Shift+A to add new objects'
                ]
              }
            ]
          }
        },
        {
          name: 'Edit Mode',
          icon: '/Icons/editmode_hlt.svg',
          description: 'Modify mesh geometry at component level',
          detailedInfo: {
            overview: 'Edit vertices, edges, and faces of mesh objects. Extrude, scale, merge, and sculpt the actual geometry of your models.',
            pages: [
              {
                title: 'Mesh Editing',
                content: 'Edit Mode lets you modify the actual geometry of your meshes. Select vertices, edges, and faces to reshape your models.',
                image: '/examples/edit-mode.gif',
                tips: [
                  'Tab to toggle Edit Mode',
                  '1/2/3 for vertex/edge/face select',
                  'E to extrude',
                  'Ctrl+R for loop cuts'
                ]
              }
            ]
          }
        },
        {
          name: 'Sculpt Mode',
          icon: '/Icons/sculptmode_hlt.svg',
          description: 'Organic modeling with brush-based tools',
          detailedInfo: {
            overview: 'Sculpt high-detail organic forms using various brushes. Paint-like interface for creating characters, creatures, and detailed surfaces.',
            pages: [
              {
                title: 'Digital Sculpting',
                content: 'Sculpt Mode lets you shape geometry like clay. Use brushes to push, pull, smooth, and detail your models organically.',
                image: '/examples/sculpt-mode.gif',
                tips: [
                  'F key changes brush size',
                  'Shift to smooth',
                  'Use Dyntopo for adaptive detail',
                  'Remesh for even topology'
                ]
              }
            ]
          }
        },
        {
          name: 'Texture Paint',
          icon: '/Icons/tpaint_hlt.svg',
          description: 'Paint textures directly on 3D models',
          detailedInfo: {
            overview: 'Paint colors and textures directly onto your 3D objects. Create custom textures by painting in 3D space with various brushes.',
            pages: [
              {
                title: 'Texture Painting',
                content: 'Texture Paint mode lets you paint directly on your 3D models. Create custom textures by painting colors, patterns, and details in 3D space.',
                image: '/examples/texture-paint.gif',
                tips: [
                  'Requires UV unwrapping first',
                  'S key to sample colors',
                  'Use stencil for precise painting',
                  'Multiple texture slots supported'
                ]
              }
            ]
          }
        },
        {
          name: 'Weight Paint',
          icon: '/Icons/wpaint_hlt.svg',
          description: 'Assign bone influence for deformation',
          detailedInfo: {
            overview: 'Paint vertex weights to control how bones deform mesh. Essential for character rigging - determines which bones influence which parts of the mesh.',
            pages: [
              {
                title: 'Rigging Weights',
                content: 'Weight Paint assigns influence values to vertices. Paint how much each bone affects different parts of your character mesh.',
                image: '/examples/weight-paint.gif',
                tips: [
                  'Blue: no influence, Red: full influence',
                  'X for weight gradient tool',
                  'Use Auto Normalize',
                  'Sample weights with Shift+K'
                ]
              }
            ]
          }
        },
        {
          name: 'Vertex Paint',
          icon: '/Icons/vpaint_hlt.svg',
          description: 'Paint colors directly on vertices',
          detailedInfo: {
            overview: 'Assign colors directly to mesh vertices. Quick way to add color variation without textures, or create vertex color data for shaders.',
            pages: [
              {
                title: 'Vertex Colors',
                content: 'Vertex Paint mode lets you paint colors directly on mesh vertices. No UV mapping needed - colors are stored per vertex.',
                image: '/examples/vertex-paint.gif',
                tips: [
                  'No UV mapping needed',
                  'Good for ambient occlusion baking',
                  'Can be used in shader nodes',
                  'F for brush size'
                ]
              }
            ]
          }
        },
        {
          name: 'Pose Mode',
          icon: '/Icons/pose_hlt.svg',
          description: 'Animate and position armature bones',
          detailedInfo: {
            overview: 'Pose rigged characters by rotating and moving bones. Set keyframes to create animations. Works only with armature objects.',
            pages: [
              {
                title: 'Character Animation',
                content: 'Pose Mode lets you animate rigged characters. Select bones, rotate and move them, then set keyframes to create animation.',
                image: '/examples/pose-mode.gif',
                tips: [
                  'Select armature, Ctrl+Tab for Pose Mode',
                  'R/G for rotate/move bones',
                  'Alt+G/R/S clears transforms',
                  'I key to insert keyframes'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Top Bar Elements',
      icon: '/Icons/topbar.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Workspaces',
          icon: '/Icons/workspace.svg',
          description: 'Pre-configured screen layouts for different tasks',
          detailedInfo: {
            overview: 'Tabs at the top provide optimized layouts for Modeling, Sculpting, UV Editing, Shading, Animation, Rendering, and more. Switch between them or create custom workspaces.',
            pages: [
              {
                title: 'Workspace Tabs',
                content: 'Workspaces are pre-configured screen layouts. Each workspace is optimized for specific tasks like modeling, sculpting, or animation.',
                image: '/examples/workspaces.gif',
                tips: [
                  'Ctrl+PageUp/Down to switch',
                  'Plus icon to add new workspace',
                  'Can customize any workspace',
                  'Right-click tab for options'
                ]
              }
            ]
          }
        },
        {
          name: 'Scene Collection',
          icon: '/Icons/scene.svg',
          description: 'Active scene and view layer selection',
          detailedInfo: {
            overview: 'Dropdown to switch between different scenes in your project. Multiple scenes can exist in one file, each with its own objects and settings.',
            pages: [
              {
                title: 'Multiple Scenes',
                content: 'Create multiple scenes in one Blender file. Each scene can have different objects, cameras, and settings. Perfect for multi-shot projects.',
                image: '/examples/scene-collection.gif',
                tips: [
                  'Plus icon creates new scene',
                  'Useful for different shots',
                  'Each scene has own timeline',
                  'Can link objects between scenes'
                ]
              }
            ]
          }
        },
        {
          name: 'View Layers',
          icon: '/Icons/renderlayers.svg',
          description: 'Organize scene into renderable layers',
          detailedInfo: {
            overview: 'Separate your scene into layers for rendering. Each view layer can have different visibility, render settings, and compositing passes.',
            pages: [
              {
                title: 'Render Layers',
                content: 'View Layers let you organize your scene for rendering. Create separate layers for characters, environments, effects, then combine in compositing.',
                image: '/examples/view-layers.gif',
                tips: [
                  'Useful for complex compositing',
                  'Different render settings per layer',
                  'Combine layers in Compositor',
                  'Exclude collections from layers'
                ]
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Viewport Display',
      icon: '/Icons/display.svg',
      color: '#10b981',
      items: [
        {
          name: 'Shading Modes',
          icon: '/Icons/node_material.svg',
          description: 'Switch between viewport display styles',
          detailedInfo: {
            overview: 'Four shading modes: Wireframe (see through), Solid (basic shading), Material Preview (textures), and Rendered (full lighting). Located in top-right of viewport.',
            pages: [
              {
                title: 'Viewport Shading',
                content: 'Switch between four shading modes to see your model differently. Wireframe for topology, Solid for modeling, Material Preview for texturing, Rendered for final look.',
                image: '/examples/shading-modes.gif',
                tips: [
                  'Z key opens shading pie menu',
                  'Solid for modeling',
                  'Material Preview for texturing',
                  'Rendered for final preview'
                ]
              }
            ]
          }
        },
        {
          name: 'Overlays',
          icon: '/Icons/overlay.svg',
          description: 'Toggle viewport guides and gizmos',
          detailedInfo: {
            overview: 'Control visibility of grid, axes, wireframes, bones, and other viewport overlays. Dropdown in top-right of 3D Viewport.',
            pages: [
              {
                title: 'Viewport Overlays',
                content: 'Overlays show helpful guides in the viewport - grid floor, object origins, wireframes, and more. Toggle them individually or all at once.',
                image: '/examples/overlays.gif',
                tips: [
                  'Toggle individual overlays',
                  'Hide all with Alt+Shift+Z',
                  'Wireframe overlay useful for modeling',
                  'Customize colors and opacity'
                ]
              }
            ]
          }
        },
        {
          name: 'Gizmos',
          icon: '/Icons/gizmo.svg',
          description: 'Interactive transform and tool widgets',
          detailedInfo: {
            overview: 'Visual widgets for moving, rotating, and scaling. Drag arrows for single-axis transforms, or use the colored circles and planes.',
            pages: [
              {
                title: 'Transform Gizmos',
                content: 'Gizmos are the colorful arrows and circles that help you transform objects. Click and drag to move, rotate, or scale interactively.',
                image: '/examples/gizmos.gif',
                tips: [
                  'Click center for free transform',
                  'Click axis for constrained transform',
                  'Toggle with gizmo button (top-right)',
                  'Customize in Preferences'
                ]
              }
            ]
          }
        }
      ]
    }
  ],

  shortcuts: [
    { 
      category: 'Selection', 
      items: [
        { key: 'Left Click', action: 'Select object' },
        { key: 'Shift + Click', action: 'Add to selection' },
        { key: 'Alt + Click', action: 'Deselect' },
        { key: 'A', action: 'Select all' },
        { key: 'Alt + A', action: 'Deselect all' },
        { key: 'Ctrl + I', action: 'Invert selection' },
        { key: 'B', action: 'Box select (drag)' },
        { key: 'C', action: 'Circle select (paint)' },
        { key: 'Ctrl + Click', action: 'Lasso select' },
        { key: 'Alt + B', action: 'Box clipping (hide view area)' }
      ]
    },
    { 
      category: 'Navigation', 
      items: [
        { key: 'MMB Drag', action: 'Rotate view' },
        { key: 'Shift + MMB', action: 'Pan view' },
        { key: 'Ctrl + MMB', action: 'Zoom view' },
        { key: 'Scroll Wheel', action: 'Zoom in/out' },
        { key: 'Numpad .', action: 'Frame selected' },
        { key: 'Home', action: 'Frame all objects' },
        { key: 'Numpad 0', action: 'Camera view' },
        { key: 'Numpad 1', action: 'Front view' },
        { key: 'Numpad 3', action: 'Right side view' },
        { key: 'Numpad 7', action: 'Top view' },
        { key: 'Ctrl + Numpad 1/3/7', action: 'Opposite view' },
        { key: 'Numpad 5', action: 'Toggle orthographic/perspective' },
        { key: 'Shift + MMB + Move', action: 'Roll view (tilt camera)' }
      ]
    },
    { 
      category: 'Transformation', 
      items: [
        { key: 'G', action: 'Grab/Move' },
        { key: 'R', action: 'Rotate' },
        { key: 'S', action: 'Scale' },
        { key: 'G/R/S + X/Y/Z', action: 'Constrain to axis' },
        { key: 'G/R/S + Shift+X/Y/Z', action: 'Constrain to plane (exclude axis)' },
        { key: 'G/R/S + Number', action: 'Precise transform value' },
        { key: 'Shift while transforming', action: 'Slow/precise movement' },
        { key: 'Ctrl while transforming', action: 'Snap to grid/increment' },
        { key: 'Alt + G/R/S', action: 'Clear transformation' },
        { key: 'Shift + R', action: 'Repeat last operation' }
      ]
    },
    { 
      category: 'Interface', 
      items: [
        { key: 'T', action: 'Toggle left toolbar' },
        { key: 'N', action: 'Toggle right properties panel' },
        { key: 'F3 or Spacebar', action: 'Search menu' },
        { key: 'F11', action: 'Show last render' },
        { key: 'F12', action: 'Render image' },
        { key: 'Ctrl + F12', action: 'Render animation' },
        { key: 'Shift + Spacebar', action: 'Tool switcher' },
        { key: 'Ctrl + Right/Left Arrow', action: 'Switch workspace' },
        { key: 'Shift + A', action: 'Add menu' },
        { key: 'X or Delete', action: 'Delete' }
      ]
    },
    { 
      category: 'Display & Shading', 
      items: [
        { key: 'Z', action: 'Shading pie menu' },
        { key: 'Alt + Z', action: 'Toggle X-ray mode' },
        { key: 'Shift + Z', action: 'Toggle wireframe' },
        { key: '/', action: 'Local view (isolate selected)' },
        { key: 'H', action: 'Hide selected' },
        { key: 'Alt + H', action: 'Unhide all' },
        { key: 'Shift + H', action: 'Hide unselected' },
        { key: 'Alt + Shift + Z', action: 'Toggle all overlays' }
      ]
    },
    { 
      category: 'Edit Mode', 
      items: [
        { key: 'Tab', action: 'Toggle Edit Mode' },
        { key: '1/2/3', action: 'Vertex/Edge/Face select mode' },
        { key: 'Ctrl + Tab', action: 'Mode pie menu' },
        { key: 'E', action: 'Extrude' },
        { key: 'I', action: 'Inset faces' },
        { key: 'Ctrl + R', action: 'Loop cut' },
        { key: 'K', action: 'Knife tool' },
        { key: 'Ctrl + B', action: 'Bevel' },
        { key: 'Alt + Click (edge)', action: 'Select edge loop' },
        { key: 'F', action: 'Fill/Make face' },
        { key: 'M', action: 'Merge menu' },
        { key: 'P', action: 'Separate' },
        { key: 'Ctrl + J', action: 'Join objects' }
      ]
    },
    { 
      category: 'Modeling Tools', 
      items: [
        { key: 'Shift + D', action: 'Duplicate' },
        { key: 'Alt + D', action: 'Linked duplicate' },
        { key: 'Ctrl + A', action: 'Apply menu' },
        { key: 'Ctrl + P', action: 'Parent menu' },
        { key: 'Alt + P', action: 'Clear parent' },
        { key: 'Shift + S', action: 'Snap/cursor menu' },
        { key: 'O', action: 'Toggle proportional editing' },
        { key: 'Shift + O', action: 'Proportional falloff types' }
      ]
    },
    { 
      category: 'General', 
      items: [
        { key: 'Ctrl + S', action: 'Save file' },
        { key: 'Ctrl + Shift + S', action: 'Save as' },
        { key: 'Ctrl + O', action: 'Open file' },
        { key: 'Ctrl + N', action: 'New file' },
        { key: 'Ctrl + Z', action: 'Undo' },
        { key: 'Ctrl + Shift + Z', action: 'Redo' },
        { key: 'Ctrl + Q', action: 'Quit Blender' },
        { key: 'F4', action: 'File context menu' }
      ]
    },
    { 
      category: 'Animation', 
      items: [
        { key: 'I', action: 'Insert keyframe' },
        { key: 'Alt + I', action: 'Delete keyframe' },
        { key: 'Spacebar (Timeline)', action: 'Play/Pause animation' },
        { key: 'Left/Right Arrow', action: 'Step frames' },
        { key: 'Up/Down Arrow', action: 'Jump to keyframe' },
        { key: 'Shift + Left/Right Arrow', action: 'Jump to first/last frame' }
      ]
    }
  ]
}