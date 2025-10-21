export const materialLessonData = {
  heroConfig: {
    title: 'Blender',
    gradientText: 'Materials & Shading',
    subtitle: 'Master materials, shaders, and textures to bring your 3D models to life',
    gradientColors: 'linear-gradient(135deg, #3b82f6, #06b6d4, #22d3ee)',
    badges: []
  },

  tabs: [
  { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
  { id: 'modes', icon: '/Icons/node_material.svg', label: 'Shader Editor' },
  { id: 'principles', icon: '/Icons/image.svg', label: 'Textures' },
  { id: 'shortcuts', icon: '/Icons/light.svg', label: 'Lighting & Rendering' }
],

  themeColor: '#3b82f6',

  overviewCards: [
    {
      icon: '/Icons/material.svg',
      title: 'What Are Materials?',
      content:
        'Materials define how your 3D objects look — their color, reflectivity, roughness, and how they interact with light. Blender’s Principled BSDF shader makes realistic materials easy to create.'
    },
    {
      icon: '/Icons/node_material.svg',
      title: 'Node-Based Workflow',
      content:
        'The Shader Editor lets you create materials by connecting nodes. Combine textures, shaders, and math nodes to build procedural or image-based materials.'
    },
    {
      icon: '/Icons/image.svg',
      title: 'Textures and Maps',
      content:
        'Textures control specific surface details such as color, bump, or metallic effects. You can use image textures, procedural textures, or a combination of both for maximum realism.'
    }
  ],

  shaderEditor: [
    {
      name: 'Principled BSDF Shader',
      icon: '/Icons/shader_bsdf.svg',
      color: '#3b82f6',
      areas: [
        {
          name: 'Base Color',
          icon: '/Icons/color.svg',
          description: 'Defines the surface color or texture of the material',
          detailedInfo: {
            overview:
              'The Base Color is the primary color input for your material. It can be a simple color or a texture map connected to the input node.',
            image: '/examples/principled-basecolor.gif',
            tips: [
              'Connect an Image Texture node to control color',
              'Use ColorRamp for artistic control',
              'Supports procedural textures too'
            ]
          }
        },
        {
          name: 'Roughness & Metallic',
          icon: '/Icons/metallic.svg',
          description: 'Controls how reflective or smooth a surface is',
          detailedInfo: {
            overview:
              'The Roughness slider controls surface smoothness; low values create sharp reflections. Metallic determines whether the material behaves like metal or a dielectric surface.',
            image: '/examples/roughness-metallic.gif',
            tips: [
              'Metallic = 1 for metals',
              'Use grayscale texture for roughness maps',
              'Avoid using color maps for metallic input'
            ]
          }
        },
        {
          name: 'Normal & Bump Mapping',
          icon: '/Icons/normalmap.svg',
          description: 'Adds fine surface detail without changing geometry',
          detailedInfo: {
            overview:
              'Normal and bump maps simulate small surface irregularities. Connect them via the Normal Map or Bump node to the shader’s Normal input.',
            image: '/examples/normal-bump.gif',
            tips: [
              'Use Non-Color Data for normal maps',
              'Invert green channel if lighting looks wrong',
              'Bump node can convert grayscale height to normals'
            ]
          }
        },
        {
          name: 'Emission',
          icon: '/Icons/light.svg',
          description: 'Makes objects emit light',
          detailedInfo: {
            overview:
              'The Emission input gives materials the ability to glow. It can be used for light sources, neon signs, or stylized effects.',
            image: '/examples/emission.gif',
            tips: [
              'Combine with Bloom in Eevee for glow effect',
              'Intensity affects scene lighting only in Cycles',
              'Use Emission Shader node for pure light output'
            ]
          }
        }
      ]
    },
    {
      name: 'Shader Nodes & Utilities',
      icon: '/Icons/node.svg',
      color: '#06b6d4',
      areas: [
        {
          name: 'Mix Shader',
          icon: '/Icons/mixshader.svg',
          description: 'Blend two shaders together',
          detailedInfo: {
            overview:
              'Use the Mix Shader node to blend between two shaders based on a factor value. Commonly used for layering materials such as metal with paint or glass with roughness.',
            image: '/examples/mix-shader.gif',
            tips: [
              '0 = top shader only, 1 = bottom shader only',
              'Use Fresnel for realistic blends',
              'Can combine any shader types'
            ]
          }
        },
        {
          name: 'Fresnel',
          icon: '/Icons/fresnel.svg',
          description: 'Simulates light reflection at glancing angles',
          detailedInfo: {
            overview:
              'The Fresnel node outputs a value based on viewing angle. It’s used to make edges more reflective, mimicking real-world light behavior.',
            image: '/examples/fresnel.gif',
            tips: [
              'Combine with Mix Shader for reflections',
              'IOR value affects strength of reflection',
              'Great for glass, car paint, and plastics'
            ]
          }
        },
        {
          name: 'Math & Color Nodes',
          icon: '/Icons/math.svg',
          description: 'Modify values and colors procedurally',
          detailedInfo: {
            overview:
              'Math and Color nodes allow fine control over texture blending and procedural generation. They modify values for advanced shader control.',
            image: '/examples/math-color.gif',
            tips: [
              'MixRGB blends colors like Photoshop layers',
              'Math node controls numeric logic (Add, Multiply, etc.)',
              'Use to drive masks and procedural patterns'
            ]
          }
        }
      ]
    }
  ],

  textures: [
    {
      name: 'Texture Types',
      icon: '/Icons/image.svg',
      color: '#22d3ee',
      areas: [
        {
          name: 'Image Textures',
          icon: '/Icons/image.svg',
          description: 'Apply image files as material maps',
          detailedInfo: {
            overview:
              'Load image textures (color, roughness, normal, etc.) and connect them to shader inputs. Set to “Non-Color Data” for non-color maps.',
            image: '/examples/image-texture.gif',
            tips: [
              'Use Color for Base Color input',
              'Use Non-Color for Normal/Roughness maps',
              'Pack images into .blend for portability'
            ]
          }
        },
        {
          name: 'Procedural Textures',
          icon: '/Icons/procedural.svg',
          description: 'Generated patterns using nodes',
          detailedInfo: {
            overview:
              'Procedural textures like Noise, Musgrave, and Voronoi generate infinite patterns. Perfect for materials like concrete, wood, or marble.',
            image: '/examples/procedural-texture.gif',
            tips: [
              'Combine with ColorRamp for custom colors',
              'Scale values change pattern density',
              'No UV maps needed'
            ]
          }
        },
        {
          name: 'UV Mapping',
          icon: '/Icons/uv.svg',
          description: 'Control how textures are applied to models',
          detailedInfo: {
            overview:
              'UV maps unwrap your 3D model into 2D space. They determine how image textures wrap around your object’s surface.',
            image: '/examples/uv-mapping.gif',
            tips: [
              'U > Smart UV Project for quick unwraps',
              'Use UV Map node for custom coordinates',
              'Avoid stretching for better texture fidelity'
            ]
          }
        }
      ]
    }
  ],

  shortcuts: [
    {
      category: 'Shader Editor Navigation',
      items: [
        { key: 'Shift + A', action: 'Add new node' },
        { key: 'Ctrl + Shift + Click', action: 'Preview node output' },
        { key: 'G', action: 'Move node' },
        { key: 'Alt + Right Click', action: 'Delete node link' },
        { key: 'F', action: 'Connect selected nodes' },
        { key: 'Ctrl + X', action: 'Delete and reconnect links' },
        { key: 'M', action: 'Mute node' },
        { key: 'Ctrl + Shift + D', action: 'Duplicate node with links' }
      ]
    },
    {
      category: 'Material Management',
      items: [
        { key: 'Shift + A', action: 'Add new material slot' },
        { key: 'Ctrl + L', action: 'Link materials between objects' },
        { key: 'Ctrl + I', action: 'Invert node selection' },
        { key: 'Alt + Click', action: 'Select linked nodes' },
        { key: 'Ctrl + N', action: 'Add new material' },
        { key: 'F4', action: 'Context menu in Shader Editor' }
      ]
    },
    {
      category: 'Rendering & Preview',
      items: [
        { key: 'Z', action: 'Shading pie menu (Rendered mode)' },
        { key: 'Shift + Z', action: 'Toggle wireframe overlay' },
        { key: 'F12', action: 'Render image' },
        { key: 'Ctrl + F12', action: 'Render animation' },
        { key: 'Ctrl + B', action: 'Render region box select' },
        { key: 'Ctrl + Alt + B', action: 'Clear render region' }
      ]
    }
  ]
};
