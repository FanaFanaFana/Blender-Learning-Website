export const materialLessonData = {

  heroConfig: {
    title: 'Materials',
    gradientText: '& Shading',
    subtitle: 'Master the art of creating realistic and stylized materials with Blender\'s powerful shader system',
    gradientColors: 'linear-gradient(135deg, #3b82f6, #06b6d4, #10b981)',
    badges: [
      { icon: '/Icons/time.svg', title: '50 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/node_material.svg', title: 'Node-Based', subtitle: 'Workflow' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/node_material.svg', label: 'Shader Nodes' },
    { id: 'techniques', icon: '/Icons/image.svg', label: 'Texturing' },
    { id: 'shortcuts', icon: '/Icons/shortcut.svg', label: 'Shortcuts' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#3b82f6',

  overviewTitle: 'Understanding Materials & Shading',
  overviewDescription: 'Learn the fundamentals of creating beautiful materials',

  overviewCards: [
    {
      icon: '/Icons/material.svg',
      title: 'What Are Materials?',
      content: 'Materials define how objects appear in your scene - their color, reflectivity, roughness, transparency, and how they interact with light. Every surface property is controlled through the material system, from matte paint to shiny metal to translucent glass.'
    },
    {
      icon: '/Icons/node_material.svg',
      title: 'Node-Based Shading',
      content: 'Blender uses a powerful node-based system in the Shader Editor. Connect nodes like building blocks to create any material imaginable. Mix shaders, add textures, and use math operations for complete creative control. No coding required!'
    },
    {
      icon: '/Icons/shader_bsdf.svg',
      title: 'Principled BSDF',
      content: 'The Principled BSDF is your one-stop shader for physically accurate materials. It combines multiple material types (metal, glass, plastic) into one versatile node using industry-standard parameters. Perfect for beginners and professionals alike.'
    }
  ],

  contentTitle: 'Shader Nodes & Materials',
  contentDescription: 'Master the building blocks of material creation',

  categories: [
    {
      name: 'Principled BSDF Parameters',
      icon: '/Icons/shader_bsdf.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Base Color',
          description: 'The fundamental surface color',
          icon: '/Icons/color.svg',
          detailedInfo: {
            overview: 'Base Color defines the primary color or texture of your material. It\'s the foundation - the actual "color" you see on the surface before lighting calculations.',
            pages: [
              {
                title: 'Color Input',
                content: 'Set directly with the color picker for solid colors. Connect Image Texture nodes for photo-realistic surfaces. Use procedural textures for infinite variation without image files.',
                image: '/examples/basecolor-input.gif'
              },
              {
                title: 'sRGB vs Linear',
                content: 'Always use Color space for Base Color inputs. This ensures colors display correctly. Non-color data is only for data maps like roughness or normal maps.',
                image: '/examples/basecolor-colorspace.gif'
              }
            ]
          }
        },
        {
          name: 'Metallic',
          description: 'Makes surfaces behave like metal',
          icon: '/Icons/metallic.svg',
          detailedInfo: {
            overview: 'Metallic determines whether a surface is metal (1.0) or non-metal/dielectric (0.0). Metals reflect their environment and don\'t have diffuse color - only reflections.',
            pages: [
              {
                title: 'Metal vs Non-Metal',
                content: 'Set to 1.0 for pure metals like gold, silver, aluminum. Set to 0.0 for everything else - plastic, wood, fabric, skin. There\'s no in-between in real physics, but you can blend for stylized effects.',
                image: '/examples/metallic-comparison.gif'
              },
              {
                title: 'Metallic Maps',
                content: 'Use black and white images to define metallic regions. White = metal, black = non-metal. Perfect for painted metal, scratched surfaces, or mixed-material objects.',
                image: '/examples/metallic-map.gif'
              }
            ]
          }
        },
        {
          name: 'Roughness',
          description: 'Controls surface smoothness',
          icon: '/Icons/roughness.svg',
          detailedInfo: {
            overview: 'Roughness determines how smooth or rough a surface is. 0.0 = perfect mirror, 1.0 = completely matte. It\'s the most important parameter for realistic materials.',
            pages: [
              {
                title: 'Roughness Values',
                content: 'Smooth surfaces (0.0-0.2): Mirrors, polished metal, water. Medium roughness (0.3-0.6): Plastic, painted surfaces, wood. Rough surfaces (0.7-1.0): Fabric, concrete, matte paint.',
                image: '/examples/roughness-range.gif'
              },
              {
                title: 'Roughness Maps',
                content: 'Grayscale textures add realistic surface variation. Use Non-Color data space. Darker = smoother, lighter = rougher. Adds micro-detail that makes materials believable.',
                image: '/examples/roughness-map.gif'
              }
            ]
          }
        },
        {
          name: 'Transmission',
          description: 'Creates transparent materials',
          icon: '/Icons/glass.svg',
          detailedInfo: {
            overview: 'Transmission makes materials transparent, allowing light to pass through. Combined with IOR (Index of Refraction), it creates realistic glass, water, and other transparent materials.',
            pages: [
              {
                title: 'Glass Setup',
                content: 'Set Transmission to 1.0 for full transparency. Adjust IOR: Glass = 1.45, Water = 1.33, Diamond = 2.42. Lower Roughness for clear glass, increase for frosted effects.',
                image: '/examples/transmission-glass.gif'
              },
              {
                title: 'Transmission + Roughness',
                content: 'Combine transmission with roughness for frosted glass, ice, or translucent plastic. Higher roughness blurs the refraction for realistic diffusion effects.',
                image: '/examples/transmission-roughness.gif'
              }
            ]
          }
        },
        {
          name: 'Subsurface Scattering',
          description: 'Light penetrating translucent surfaces',
          icon: '/Icons/sss.svg',
          detailedInfo: {
            overview: 'Subsurface Scattering (SSS) simulates light entering a surface, scattering inside, and exiting elsewhere. Essential for realistic skin, wax, marble, leaves, and other translucent organic materials.',
            pages: [
              {
                title: 'SSS Setup',
                content: 'Increase Subsurface value (0.1-1.0) to enable the effect. Adjust Subsurface Radius (RGB) to control how far each color channel penetrates. Red travels furthest in skin, creating realistic translucency.',
                image: '/examples/sss-setup.gif'
              },
              {
                title: 'Subsurface Color',
                content: 'Subsurface Color tints light passing through the material. Use red-orange for skin, green for leaves, white for wax. This color mixes with light inside the material.',
                image: '/examples/sss-color.gif'
              }
            ]
          }
        },
        {
          name: 'Emission',
          description: 'Make surfaces glow and emit light',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Emission makes materials glow, adding light to the scene. Perfect for screens, neon signs, magic effects, or any light-emitting surface.',
            pages: [
              {
                title: 'Emission Basics',
                content: 'Set Emission strength (1-10+ for bright lights). Choose Emission color or connect Image Texture for LED displays. In Cycles, emission actually lights the scene.',
                image: '/examples/emission-basic.gif'
              },
              {
                title: 'Bloom Effect',
                content: 'Enable Bloom in Eevee (Render Properties) to create realistic glow halos around bright emission. Adjust threshold and intensity for stylized or realistic effects.',
                image: '/examples/emission-bloom.gif'
              }
            ]
          }
        },
        {
          name: 'Normal Maps',
          description: 'Add surface detail without geometry',
          icon: '/Icons/normalmap.svg',
          detailedInfo: {
            overview: 'Normal maps simulate surface irregularities by changing how light bounces off the surface. They add incredible detail - scratches, pores, fabric weave - without adding polygons.',
            pages: [
              {
                title: 'Normal Map Setup',
                content: 'Add Image Texture > Normal Map node > connect to Principled BSDF Normal input. CRITICAL: Set Image Texture to Non-Color Data space. Adjust strength to control intensity.',
                image: '/examples/normal-map-setup.gif'
              },
              {
                title: 'Inverted Green Channel',
                content: 'If lighting looks inverted, your normal map uses a different standard. In Normal Map node, check Color Space. Try inverting the green channel if needed using Color > Invert node.',
                image: '/examples/normal-map-invert.gif'
              }
            ]
          }
        },
        {
          name: 'Bump Maps',
          description: 'Heightmap-based surface detail',
          icon: '/Icons/bump.svg',
          detailedInfo: {
            overview: 'Bump maps use grayscale heightmaps to simulate surface detail. White = raised, black = recessed. Simpler than normal maps but less accurate. Great for procedural detail.',
            pages: [
              {
                title: 'Bump Node Setup',
                content: 'Add Bump node between texture and Normal input. Connect grayscale texture to Height. Adjust Strength and Distance for intensity. Invert checkbox flips raised/recessed.',
                image: '/examples/bump-node.gif'
              },
              {
                title: 'Bump vs Normal',
                content: 'Bump maps are computed from heightmaps at render time. Normal maps are pre-calculated and more accurate. Use bump for procedural textures, normals for photo-realistic detail.',
                image: '/examples/bump-vs-normal.gif'
              }
            ]
          }
        },
        {
          name: 'Alpha',
          description: 'Transparency masking',
          icon: '/Icons/alpha.svg',
          detailedInfo: {
            overview: 'Alpha controls opacity through transparency masking. Unlike transmission (which refracts), alpha simply makes parts invisible - perfect for leaves, hair, decals, or cutout shapes.',
            pages: [
              {
                title: 'Alpha Setup',
                content: 'Connect grayscale texture to Alpha input. Set material Blend Mode to Alpha Clip (sharp edges) or Alpha Blend (soft edges). Enable Show Backface in material settings if needed.',
                image: '/examples/alpha-setup.gif'
              },
              {
                title: 'Alpha Blending',
                content: 'Alpha Clip uses threshold for sharp cutouts (leaves, fences). Alpha Blend uses smooth transparency (smoke, glass decals). Hash adds noise to reduce sorting issues.',
                image: '/examples/alpha-blend.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Essential Shader Nodes',
      icon: '/Icons/node.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Mix Shader',
          description: 'Blend two shaders together',
          icon: '/Icons/mixshader.svg',
          detailedInfo: {
            overview: 'Mix Shader blends two shaders based on a factor (0-1) or mask texture. Essential for layered materials, clearcoat effects, or transitioning between material types.',
            pages: [
              {
                title: 'Basic Mixing',
                content: 'Connect two shaders to inputs. Factor 0 = top shader only, Factor 1 = bottom shader only, 0.5 = 50/50 mix. Use for layering paint over metal or creating weathered surfaces.',
                image: '/examples/mix-shader-basic.gif'
              },
              {
                title: 'Texture-Based Mixing',
                content: 'Connect texture to Fac input for complex blending. Dirt maps, wear masks, or procedural noise control where each shader appears. Creates realistic weathering and variation.',
                image: '/examples/mix-shader-texture.gif'
              }
            ]
          }
        },
        {
          name: 'ColorRamp',
          description: 'Remap colors and values',
          icon: '/Icons/colorramp.svg',
          detailedInfo: {
            overview: 'ColorRamp converts input values to custom color gradients. Essential for artistic control over procedural textures, masks, and value ranges.',
            pages: [
              {
                title: 'Value Remapping',
                content: 'Input values (0-1) map to gradient stops. Add stops to create complex gradients. Adjust interpolation (Linear, Ease, Constant) for different transition styles.',
                image: '/examples/colorramp-basic.gif'
              },
              {
                title: 'Creating Masks',
                content: 'Use ColorRamp to convert textures into masks. Position black/white stops to isolate value ranges. Perfect for selecting specific height ranges or color areas.',
                image: '/examples/colorramp-mask.gif'
              }
            ]
          }
        },
        {
          name: 'Mapping',
          description: 'Control texture coordinates',
          icon: '/Icons/mapping.svg',
          detailedInfo: {
            overview: 'Mapping node transforms texture coordinates - moving, rotating, and scaling textures on your objects. Essential for positioning image textures and procedural patterns.',
            pages: [
              {
                title: 'Transform Controls',
                content: 'Location moves texture position. Rotation spins texture. Scale controls size (smaller values = larger pattern). Combine with Texture Coordinate node for full control.',
                image: '/examples/mapping-transform.gif'
              },
              {
                title: 'Texture Coordinate',
                content: 'Texture Coordinate node provides different mapping modes: Generated (object bounds), UV (unwrapped), Object (world space). Connect to Mapping node for maximum flexibility.',
                image: '/examples/mapping-coordinate.gif'
              }
            ]
          }
        },
        {
          name: 'Fresnel',
          description: 'Edge-based reflection control',
          icon: '/Icons/fresnel.svg',
          detailedInfo: {
            overview: 'Fresnel outputs values based on viewing angle. Surfaces are more reflective at glancing angles - exactly how real materials behave. Essential for realistic shading.',
            pages: [
              {
                title: 'Realistic Reflections',
                content: 'Connect Fresnel to Mix Shader factor to blend diffuse and glossy. Creates realistic edge reflections on plastic, car paint, or any non-metal surface.',
                image: '/examples/fresnel-reflection.gif'
              },
              {
                title: 'IOR Control',
                content: 'IOR parameter controls reflection intensity. 1.45 = glass/plastic, 1.33 = water. Higher values create stronger edge reflections. Match material\'s real-world IOR.',
                image: '/examples/fresnel-ior.gif'
              }
            ]
          }
        },
        {
          name: 'Mix RGB',
          description: 'Blend colors with different methods',
          icon: '/Icons/mixrgb.svg',
          detailedInfo: {
            overview: 'Mix RGB (MixRGB) blends two colors or textures using various blend modes - just like Photoshop layers. Essential for combining textures and creating complex materials.',
            pages: [
              {
                title: 'Blend Modes',
                content: 'Mix: Average blend. Multiply: Darken. Add: Brighten. Overlay: Contrast. Each mode creates different effects. Experiment to find the right look for texture layering.',
                image: '/examples/mixrgb-modes.gif'
              },
              {
                title: 'Texture Layering',
                content: 'Stack multiple MixRGB nodes to layer textures. Combine color maps with dirt overlays, add wear and tear, or blend multiple material types seamlessly.',
                image: '/examples/mixrgb-layering.gif'
              }
            ]
          }
        },
        {
          name: 'Math Node',
          description: 'Perform mathematical operations',
          icon: '/Icons/math.svg',
          detailedInfo: {
            overview: 'Math node performs operations on values: Add, Multiply, Greater Than, Power, etc. Essential for procedural control, masks, and driving shader parameters mathematically.',
            pages: [
              {
                title: 'Common Operations',
                content: 'Add/Subtract: Adjust values. Multiply: Scale values. Power: Create falloffs. Greater/Less Than: Create masks. Clamp: Limit value ranges for control.',
                image: '/examples/math-operations.gif'
              },
              {
                title: 'Procedural Control',
                content: 'Use Math nodes to drive material parameters. Multiply roughness by texture, add values to emission, create complex masking logic. Building blocks for procedural materials.',
                image: '/examples/math-procedural.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Procedural Textures',
      icon: '/Icons/procedural.svg',
      color: '#10b981',
      items: [
        {
          name: 'Noise Texture',
          description: 'Random organic patterns',
          icon: '/Icons/noise.svg',
          detailedInfo: {
            overview: 'Noise Texture generates random organic patterns. Perfect for imperfections, variation, dirt masks, or any natural randomness. Infinite resolution - never pixelated.',
            pages: [
              {
                title: 'Noise Types',
                content: 'Perlin: Smooth organic noise. Voronoi: Cellular patterns. Musgrave: Fractal terrain. Each creates different patterns. Scale controls pattern size, Detail adds complexity.',
                image: '/examples/noise-types.gif'
              },
              {
                title: 'Practical Uses',
                content: 'Add subtle roughness variation. Create dirt masks. Generate bump maps. Vary color across surfaces. Noise adds realism by preventing perfect uniformity.',
                image: '/examples/noise-uses.gif'
              }
            ]
          }
        },
        {
          name: 'Wave Texture',
          description: 'Bands and ripple patterns',
          icon: '/Icons/wave.svg',
          detailedInfo: {
            overview: 'Wave Texture creates regular repeating patterns: bands, rings, or sine waves. Perfect for stylized materials, wood grain, or technical patterns.',
            pages: [
              {
                title: 'Wave Types',
                content: 'Bands: Straight lines. Rings: Concentric circles. Saw/Triangle: Different edge profiles. Adjust Scale for frequency, Distortion for waviness.',
                image: '/examples/wave-types.gif'
              },
              {
                title: 'Wood and Patterns',
                content: 'Combine Wave (rings) with Noise for realistic wood grain. Use ColorRamp to convert to wood colors. Distort with noise for natural variation.',
                image: '/examples/wave-wood.gif'
              }
            ]
          }
        },
        {
          name: 'Voronoi Texture',
          description: 'Cellular and organic patterns',
          icon: '/Icons/voronoi.svg',
          detailedInfo: {
            overview: 'Voronoi creates cellular patterns based on distance to random points. Generates organic cells, honeycomb patterns, or abstract technological surfaces.',
            pages: [
              {
                title: 'Voronoi Outputs',
                content: 'Distance output: Cell boundaries. Color output: Cell colors. Position: Cell centers. Each output creates different effects. F1/F2 distance creates different patterns.',
                image: '/examples/voronoi-outputs.gif'
              },
              {
                title: 'Practical Applications',
                content: 'Create reptile scales, honeycomb patterns, cracked surfaces, or sci-fi tech panels. Combine with ColorRamp and other textures for complex procedural materials.',
                image: '/examples/voronoi-uses.gif'
              }
            ]
          }
        },
        {
          name: 'Musgrave Texture',
          description: 'Fractal patterns and terrain',
          icon: '/Icons/musgrave.svg',
          detailedInfo: {
            overview: 'Musgrave generates fractal patterns perfect for terrain, mountains, clouds, or rough organic surfaces. Based on mathematical fractals for natural complexity.',
            pages: [
              {
                title: 'Musgrave Types',
                content: 'fBM: Smooth terrain. Multifractal: Sharp ridges. Hybrid: Mix of both. Ridged: Mountain ranges. Each creates different landscape styles.',
                image: '/examples/musgrave-types.gif'
              },
              {
                title: 'Terrain Surfaces',
                content: 'Use Musgrave for rock surfaces, mountain displacement, cloud formations. Adjust Dimension for smoothness, Lacunarity for detail scale. Creates realistic natural complexity.',
                image: '/examples/musgrave-terrain.gif'
              }
            ]
          }
        },
        {
          name: 'Magic Texture',
          description: 'Psychedelic abstract patterns',
          icon: '/Icons/magic.svg',
          detailedInfo: {
            overview: 'Magic Texture generates abstract, colorful, psychedelic patterns. Perfect for stylized work, energy effects, or surreal artistic materials.',
            pages: [
              {
                title: 'Magic Patterns',
                content: 'Adjust Depth for pattern complexity, Turbulence for chaos. Creates swirling, flowing, abstract patterns. Great for magic effects, stylized energy, or abstract art.',
                image: '/examples/magic-pattern.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  techniquesTitle: 'Texturing & UV Mapping',
  techniquesDescription: 'Master texture application and coordinate systems',

  techniques: [
    {
      name: 'Image Textures',
      icon: '/Icons/image.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'PBR Texture Workflow',
          description: 'Industry-standard texture maps',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'PBR (Physically Based Rendering) uses multiple texture maps to define material properties. Each map controls a specific aspect: color, roughness, metallic, normal, etc.',
            pages: [
              {
                title: 'PBR Map Types',
                content: 'Base Color (color), Roughness (surface smoothness), Metallic (metal/non-metal), Normal (surface detail), Height/Displacement (geometry), AO (ambient occlusion). Each map uses specific color space settings.',
                image: '/examples/pbr-maps.gif'
              },
              {
                title: 'Connecting Maps',
                content: 'Base Color: Color space. Normal: Non-Color + Normal Map node. Roughness/Metallic: Non-Color. CRITICAL: Wrong color space causes incorrect rendering. Always check!',
                image: '/examples/pbr-connect.gif'
              },
              {
                title: 'Free PBR Resources',
                content: 'Download PBR textures from: Polyhaven (CC0, free), AmbientCG (free), Quixel Megascans (free with Epic account). These provide complete material texture sets.',
                image: '/examples/pbr-resources.gif'
              }
            ]
          }
        },
        {
          name: 'UV Unwrapping',
          description: 'Flatten 3D geometry to 2D',
          icon: '/Icons/uv.svg',
          detailedInfo: {
            overview: 'UV unwrapping converts 3D surfaces to 2D layouts so textures know where to appear. Like unwrapping a cardboard box into a flat pattern.',
            pages: [
              {
                title: 'Smart UV Project',
                content: 'Select all faces (A), press U > Smart UV Project. Quick automatic unwrap for most objects. Adjust Angle Limit and Island Margin in operator panel. Good starting point.',
                image: '/examples/uv-smart.gif'
              },
              {
                title: 'Mark Seams',
                content: 'For clean unwraps: Select edges where you want cuts (Alt+Click for loops), Ctrl+E > Mark Seam. Then U > Unwrap. Place seams in hidden areas for best results.',
                image: '/examples/uv-seams.gif'
              },
              {
                title: 'UV Editor',
                content: 'Switch to UV Editing workspace. Select faces in 3D view to see UVs. Scale, rotate, move UV islands in UV editor. Use Straighten to fix warping.',
                image: '/examples/uv-editor.gif'
              }
            ]
          }
        },
        {
          name: 'Texture Painting',
          description: 'Paint directly on models',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Texture Paint mode lets you paint directly on your 3D model. Perfect for creating custom textures, adding details, or hand-painting stylized materials.',
            pages: [
              {
                title: 'Texture Paint Setup',
                content: 'Switch to Texture Paint workspace. Create new image in Image Texture node (+ icon), set resolution. Select the Image Texture node to paint on it. Paint directly on model.',
                image: '/examples/texture-paint-setup.gif'
              },
              {
                title: 'Painting Techniques',
                content: 'Use different brushes, adjust radius (F) and strength (Shift+F). Enable symmetry for character painting. Paint multiple maps: color, roughness, metallic for complete control.',
                image: '/examples/texture-paint-technique.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Material Management',
      icon: '/Icons/material.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Material Slots',
          description: 'Multiple materials per object',
          icon: '/Icons/material.svg',
          detailedInfo: {
            overview: 'Objects can have multiple material slots, each applied to different faces. Essential for objects with different surface types, like a character with skin, clothes, and metal.',
            pages: [
              {
                title: 'Adding Slots',
                content: 'Material Properties > + icon to add slot. Assign existing material or create new. Select faces in Edit mode, choose slot, click Assign to apply material to selected faces.',
                image: '/examples/material-slots.gif'
              },
              {
                title: 'Organizing Materials',
                content: 'Use descriptive names: "Metal_Rusty", "Fabric_Red", etc. Use Fake User (shield icon) to keep unused materials. Link materials between objects with Ctrl+L.',
                image: '/examples/material-organize.gif'
              }
            ]
          }
        },
        {
          name: 'Material Libraries',
          description: 'Reuse materials across projects',
          icon: '/Icons/library.svg',
          detailedInfo: {
            overview: 'Save materials to libraries for reuse across projects. Build your own material library or use community-created material packs.',
            pages: [
              {
                title: 'Appending Materials',
                content: 'File > Append, navigate to .blend file, open Materials folder, select materials. Appended materials become part of current file. Perfect for sharing between projects.',
                image: '/examples/material-append.gif'
              },
              {
                title: 'Asset Browser',
                content: 'Mark materials as Assets (right-click in outliner). Access via Asset Browser. Create custom asset library for your studio materials. Tag and organize for easy finding.',
                image: '/examples/material-assets.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  shortcuts: [
    {
      category: 'Shader Editor',
      items: [
        { key: 'Shift + A', action: 'Add new shader node' },
        { key: 'Ctrl + Shift + Click', action: 'Preview node output (Viewer Node)' },
        { key: 'G', action: 'Move selected nodes' },
        { key: 'X / Delete', action: 'Delete selected nodes' },
        { key: 'Ctrl + X', action: 'Delete node but keep connections' },
        { key: 'M', action: 'Mute/unmute selected node' },
        { key: 'Ctrl + Shift + D', action: 'Duplicate node with connections' },
        { key: 'Ctrl + T', action: 'Add texture setup (Image Texture + Mapping + Coord)' },
        { key: 'F', action: 'Link selected nodes automatically' }
      ]
    },
    {
      category: 'Material Properties',
      items: [
        { key: 'Shift + A', action: 'Add new material slot' },
        { key: 'Ctrl + L', action: 'Link materials to selected objects' },
        { key: 'Alt + Click', action: 'Select linked nodes in Shader Editor' },
        { key: 'Z', action: 'Viewport shading pie menu' },
        { key: 'Shift + Z', action: 'Toggle wireframe over solid/material view' }
      ]
    },
    {
      category: 'UV Editing',
      items: [
        { key: 'U', action: 'UV unwrap menu' },
        { key: 'Ctrl + E', action: 'Mark/clear seams' },
        { key: 'Alt + Click', action: 'Select edge loop for seaming' },
        { key: 'S', action: 'Scale UVs' },
        { key: 'R', action: 'Rotate UVs' },
        { key: 'L', action: 'Select linked UV island' },
        { key: 'P', action: 'Pin UVs in place' },
        { key: 'Alt + P', action: 'Unpin UVs' }
      ]
    }
  ],

  practiceTitle: 'Material Practice Projects',
  practiceDescription: 'Build real materials and master the shader workflow',

  practiceProjects: [
    { 
      title: 'Create Basic Materials', 
      desc: 'Make plastic, metal, and glass from scratch',
      duration: '25 min', 
      difficulty: 'Beginner',
      skills: ['Principled BSDF', 'Metallic', 'Roughness', 'Transmission']
    },
    { 
      title: 'Apply PBR Textures', 
      desc: 'Download and set up a complete PBR material set',
      duration: '30 min', 
      difficulty: 'Beginner',
      skills: ['Image Textures', 'UV Unwrapping', 'Normal Maps', 'Color Space']
    },
    { 
      title: 'Build Procedural Wood', 
      desc: 'Create realistic wood using only procedural nodes',
      duration: '40 min', 
      difficulty: 'Intermediate',
      skills: ['Wave Texture', 'Noise', 'ColorRamp', 'Bump Mapping']
    },
    { 
      title: 'Master Advanced Shading', 
      desc: 'Combine multiple shaders for complex materials',
      duration: '50 min', 
      difficulty: 'Advanced',
      skills: ['Mix Shader', 'Fresnel', 'Layered Materials', 'All Nodes']
    }
  ]
}