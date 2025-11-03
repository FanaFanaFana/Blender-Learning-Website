export const renderEnginesLessonData = {

  heroConfig: {
    title: 'Render',
    gradientText: 'Engines',
    subtitle: 'Master Eevee and Cycles to bring your scenes to life with stunning visuals',
    gradientColors: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/view_camera.svg', title: '2 Engines', subtitle: 'Rendering systems' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/shading_rendered.svg', label: 'Engine Features' },
    { id: 'techniques', icon: '/Icons/settings.svg', label: 'Optimization' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#3b82f6',

  overviewTitle: 'Understanding Render Engines',
  overviewDescription: 'Choose the right rendering approach for your project',

  overviewCards: [
    {
      icon: '/Icons/light_sun.svg',
      title: 'Eevee: Real-Time Speed',
      content: 'Eevee is a real-time render engine that shows results instantly. Perfect for animations, motion graphics, and iterative design work where speed matters. Uses rasterization like game engines for fast viewport feedback.'
    },
    {
      icon: '/Icons/shading_rendered.svg',
      title: 'Cycles: Photorealistic Quality',
      content: 'Cycles is a path-traced render engine delivering physically accurate lighting and materials. Slower but produces photorealistic results. Essential for product visualization, architectural renders, and final quality output.'
    },
    {
      icon: '/Icons/tool.svg',
      title: 'Choosing the Right Engine',
      content: 'Use Eevee for fast previews, stylized work, and real-time projects. Choose Cycles for final renders requiring accurate lighting, caustics, or photorealism. Many artists use both: Eevee for workflow, Cycles for finals.'
    }
  ],

  contentTitle: 'Engine Features Comparison',
  contentDescription: 'Explore what makes each render engine unique',

  categories: [
    {
      name: 'Eevee Features',
      icon: '/Icons/light_sun.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Real-Time Rendering',
          description: 'Instant visual feedback',
          icon: '/Icons/play.svg',
          detailedInfo: {
            overview: 'Eevee renders in real-time, showing results instantly as you work. Perfect for animations and interactive workflows where you need immediate feedback.',
            pages: [
              {
                title: 'Instant Preview',
                content: 'Changes to materials, lighting, and objects appear instantly. No waiting for render calculations. What you see in the viewport is what you get.',
                image: '/examples/eevee-realtime.mp4'
              },
              {
                title: 'Interactive Workflow',
                content: 'Adjust lights, materials, and camera while seeing results live. Perfect for fine-tuning compositions and lighting setups quickly.',
                image: '/examples/eevee-interactive.mp4'
              }
            ]
          }
        },
        {
          name: 'Screen Space Reflections',
          description: 'Fast reflection approximations',
          icon: '/Icons/shading_texture.svg',
          detailedInfo: {
            overview: 'Screen Space Reflections (SSR) create reflections based on visible screen pixels. Fast but limited to what\'s on screen.',
            pages: [
              {
                title: 'Enabling SSR',
                content: 'Enable in Render Properties > Screen Space Reflections. Adjust refraction for glass materials. Works best for flat or slightly curved surfaces.',
                image: '/examples/eevee-ssr-enable.mp4'
              },
              {
                title: 'SSR Limitations',
                content: 'Only reflects what\'s visible on screen. Objects behind camera or off-screen won\'t appear in reflections. Use reflection planes for important reflections.',
                image: '/examples/eevee-ssr-limits.mp4'
              }
            ]
          }
        },
        {
          name: 'Bloom',
          description: 'Glowing light effects',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Bloom creates glowing halos around bright areas, simulating camera lens effects and adding atmosphere to scenes.',
            pages: [
              {
                title: 'Bloom Settings',
                content: 'Enable in Render Properties > Bloom. Adjust threshold to control which areas glow. Radius controls spread. Perfect for neon lights, magic effects, and lens flare.',
                image: '/examples/eevee-bloom.mp4'
              },
              {
                title: 'Stylized Effects',
                content: 'Use high bloom intensity for stylized, dreamy looks. Combine with emission materials for glowing objects and magical atmospheres.',
                image: '/examples/eevee-bloom-stylized.mp4'
              }
            ]
          }
        },
        {
          name: 'Ambient Occlusion',
          description: 'Contact shadows for depth',
          icon: '/Icons/shading_solid.svg',
          detailedInfo: {
            overview: 'Ambient Occlusion adds subtle shadows in corners and crevices, enhancing depth perception and grounding objects in the scene.',
            pages: [
              {
                title: 'AO Setup',
                content: 'Enable in Render Properties > Ambient Occlusion. Increase distance for larger shadowed areas. Adjust factor to control intensity.',
                image: '/examples/eevee-ao.mp4'
              },
              {
                title: 'Depth Enhancement',
                content: 'AO makes surfaces feel more three-dimensional by darkening contact points. Essential for making scenes feel grounded and realistic.',
                image: '/examples/eevee-ao-depth.mp4'
              }
            ]
          }
        },
        {
          name: 'Subsurface Scattering',
          description: 'Translucent materials',
          icon: '/Icons/material.svg',
          detailedInfo: {
            overview: 'Subsurface Scattering simulates light passing through translucent materials like skin, wax, or marble.',
            pages: [
              {
                title: 'SSS in Eevee',
                content: 'Enable in Render Properties > Subsurface Scattering. Use Principled BSDF subsurface for skin, wax, jade. Faster approximation than Cycles.',
                image: '/examples/eevee-sss.mp4'
              }
            ]
          }
        },
        {
          name: 'Shadows',
          description: 'Fast shadow methods',
          icon: '/Icons/light_spot.svg',
          detailedInfo: {
            overview: 'Eevee uses shadow maps for fast shadow calculation. Different quality settings balance speed and accuracy.',
            pages: [
              {
                title: 'Shadow Maps',
                content: 'Increase Cube Size and Cascade Size in light properties for sharper shadows. Higher values = better quality but slower performance.',
                image: '/examples/eevee-shadows.mp4'
              },
              {
                title: 'Contact Shadows',
                content: 'Enable Contact Shadows on lights for accurate small-scale shadows. Perfect for object-ground contact and fine detail.',
                image: '/examples/eevee-contact-shadows.mp4'
              }
            ]
          }
        },
        {
          name: 'Volumetrics',
          description: 'Atmospheric fog and smoke',
          icon: '/Icons/volume_data.svg',
          detailedInfo: {
            overview: 'Volumetric lighting creates atmospheric fog, god rays, and visible light beams through participating media.',
            pages: [
              {
                title: 'Volume Setup',
                content: 'Enable Volumetric Lighting in Render Properties. Add Volume Scatter in World shader for atmospheric fog. Adjust density for intensity.',
                image: '/examples/eevee-volumetrics.mp4'
              },
              {
                title: 'Light Shafts',
                content: 'Use spotlights with volumetrics for god rays and light beams. Adjust Volumetric Shadows for light interaction quality.',
                image: '/examples/eevee-light-shafts.mp4'
              }
            ]
          }
        },
        {
          name: 'Irradiance Volumes',
          description: 'Baked indirect lighting',
          icon: '/Icons/lightprobe_volume.svg',
          detailedInfo: {
            overview: 'Irradiance Volumes bake indirect lighting information for realistic light bounces without real-time calculation cost.',
            pages: [
              {
                title: 'Light Probe Setup',
                content: 'Add Irradiance Volume to scene. Adjust resolution to cover your scene. Bake indirect lighting for accurate light bounces on dynamic objects.',
                image: '/examples/eevee-irradiance.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Cycles Features',
      icon: '/Icons/shading_rendered.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Path Tracing',
          description: 'Physically accurate light simulation',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Cycles traces light rays through the scene, simulating real-world physics. Produces accurate reflections, refractions, and caustics automatically.',
            pages: [
              {
                title: 'How Path Tracing Works',
                content: 'Cycles shoots rays from camera into scene, bouncing off surfaces and calculating light interactions. Each sample improves accuracy. More samples = less noise but longer render.',
                image: '/examples/cycles-pathtracing.mp4'
              },
              {
                title: 'Sample Count',
                content: 'Render samples control quality. Start with 128 for tests, use 512-2048 for finals. More samples reduce noise but increase render time proportionally.',
                image: '/examples/cycles-samples.mp4'
              }
            ]
          }
        },
        {
          name: 'Accurate Reflections',
          description: 'True mirror and glossy reflections',
          icon: '/Icons/ops.mesh.primitive_ico_sphere_add.svg',
          detailedInfo: {
            overview: 'Cycles calculates true reflections by tracing rays. Reflects everything in the scene accurately, including off-screen objects.',
            pages: [
              {
                title: 'Perfect Reflections',
                content: 'All surfaces reflect accurately based on roughness. No screen-space limitations - objects behind camera appear correctly in reflections.',
                image: '/examples/cycles-reflections.mp4'
              },
              {
                title: 'Glossy Materials',
                content: 'Roughness creates natural blur in reflections. Lower roughness = sharper reflections. Cycles handles all glossy materials accurately.',
                image: '/examples/cycles-glossy.mp4'
              }
            ]
          }
        },
        {
          name: 'Caustics',
          description: 'Light focused through glass',
          icon: '/Icons/light_point.svg',
          detailedInfo: {
            overview: 'Caustics are focused light patterns created when light passes through or reflects off curved transparent or reflective surfaces.',
            pages: [
              {
                title: 'Glass Caustics',
                content: 'Glass objects naturally create caustics in Cycles. Light bends through refractive surfaces, creating beautiful light patterns on surfaces below.',
                image: '/examples/cycles-caustics-glass.mp4'
              },
              {
                title: 'Optimizing Caustics',
                content: 'Increase Max Bounces for clearer caustics. Use Caustic Reflective/Refractive options in Light Paths. Requires higher samples for clean results.',
                image: '/examples/cycles-caustics-setup.mp4'
              }
            ]
          }
        },
        {
          name: 'True Refractions',
          description: 'Accurate light bending',
          icon: '/Icons/material.svg',
          detailedInfo: {
            overview: 'Cycles accurately simulates light bending through transparent materials, creating realistic glass, water, and crystal.',
            pages: [
              {
                title: 'IOR Settings',
                content: 'Index of Refraction (IOR) controls light bending. Glass = 1.45, Water = 1.33, Diamond = 2.42. Accurate IOR creates realistic materials.',
                image: '/examples/cycles-refraction-ior.mp4'
              },
              {
                title: 'Transmission',
                content: 'Use Transmission in Principled BSDF for glass. Combine with Roughness for frosted glass. Cycles handles nested glass correctly.',
                image: '/examples/cycles-transmission.mp4'
              }
            ]
          }
        },
        {
          name: 'Volumetric Rendering',
          description: 'Physically accurate volumes',
          icon: '/Icons/volume_data.svg',
          detailedInfo: {
            overview: 'Cycles calculates light scattering through volumes with full physical accuracy, creating realistic fog, smoke, and atmospheric effects.',
            pages: [
              {
                title: 'Volume Scatter',
                content: 'Add Volume Scatter in shader for fog and smoke. Density controls thickness. Anisotropy controls forward/backward scattering direction.',
                image: '/examples/cycles-volume-scatter.mp4'
              },
              {
                title: 'Volume Absorption',
                content: 'Volume Absorption creates colored tinting like stained glass or colored water. Combine with scatter for complete volume effects.',
                image: '/examples/cycles-volume-absorption.mp4'
              }
            ]
          }
        },
        {
          name: 'Advanced SSS',
          description: 'Accurate subsurface scattering',
          icon: '/Icons/mesh.svg',
          detailedInfo: {
            overview: 'Cycles calculates true subsurface scattering, accurately simulating light penetration through skin, wax, jade, and other translucent materials.',
            pages: [
              {
                title: 'SSS Setup',
                content: 'Use Subsurface in Principled BSDF. Adjust subsurface radius (RGB) to control color penetration depth. Red travels furthest for realistic skin.',
                image: '/examples/cycles-sss-setup.mp4'
              },
              {
                title: 'Random Walk',
                content: 'Christensen-Burley is fast, Random Walk is more accurate. Use Random Walk for thin objects like ears, Random Walk (Fixed Radius) for thick objects.',
                image: '/examples/cycles-sss-methods.mp4'
              }
            ]
          }
        },
        {
          name: 'Motion Blur',
          description: 'Realistic movement blur',
          icon: '/Icons/anim.svg',
          detailedInfo: {
            overview: 'Cycles creates true motion blur by calculating object positions across the shutter time, producing cinematic movement blur.',
            pages: [
              {
                title: 'Motion Blur Settings',
                content: 'Enable in Render Properties > Motion Blur. Adjust Shutter to control blur amount. Position controls blur timing (before/after frame).',
                image: '/examples/cycles-motion-blur.mp4'
              }
            ]
          }
        },
        {
          name: 'Light Portals',
          description: 'Optimize HDRI lighting',
          icon: '/Icons/light_area.svg',
          detailedInfo: {
            overview: 'Light Portals guide sampling through windows and openings, dramatically reducing noise in interior scenes lit by HDRIs.',
            pages: [
              {
                title: 'Portal Setup',
                content: 'Add Area Light at windows, set to Portal type. Portals tell Cycles where light enters, focusing samples efficiently. Reduces noise significantly in interiors.',
                image: '/examples/cycles-portals.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Performance Features',
      icon: '/Icons/settings.svg',
      color: '#10b981',
      items: [
        {
          name: 'GPU Rendering',
          description: 'Hardware acceleration',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'Both engines support GPU acceleration. Eevee requires GPU, Cycles can use CPU or GPU. GPU is significantly faster for most scenes.',
            pages: [
              {
                title: 'GPU Setup',
                content: 'Edit > Preferences > System > Cycles Render Devices. Select CUDA (NVIDIA), OptiX (NVIDIA RTX), or HIP (AMD). GPU renders 5-10x faster than CPU.',
                image: '/examples/gpu-setup.mp4'
              },
              {
                title: 'Device Selection',
                content: 'In Render Properties, choose CPU, GPU, or both. Using both is slower than GPU alone. OptiX offers best performance on RTX cards.',
                image: '/examples/device-selection.mp4'
              }
            ]
          }
        },
        {
          name: 'Denoising',
          description: 'AI-powered noise reduction',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Both engines support denoising to reduce render noise. Cycles uses OptiX or OpenImageDenoise for clean results with fewer samples.',
            pages: [
              {
                title: 'Cycles Denoising',
                content: 'Enable in Render Properties > Denoising. OptiX (RTX cards) is fastest, OpenImageDenoise works on all hardware. Reduces required samples by 50-75%.',
                image: '/examples/cycles-denoise.mp4'
              },
              {
                title: 'Eevee Denoising',
                content: 'Less critical in Eevee but available for shadows and ambient occlusion. Helps reduce noise in volumetrics and Screen Space effects.',
                image: '/examples/eevee-denoise.mp4'
              }
            ]
          }
        },
        {
          name: 'Adaptive Sampling',
          description: 'Smart sample distribution',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Cycles Adaptive Sampling stops sampling pixels that are already clean, focusing render power on noisy areas for faster, smarter rendering.',
            pages: [
              {
                title: 'Adaptive Settings',
                content: 'Enable in Render Properties > Sampling > Adaptive Sampling. Lower threshold = more accurate but slower. Typical saves 20-40% render time.',
                image: '/examples/adaptive-sampling.mp4'
              }
            ]
          }
        },
        {
          name: 'Render Passes',
          description: 'Multi-layer output control',
          icon: '/Icons/output.svg',
          detailedInfo: {
            overview: 'Both engines output separate render passes for compositing flexibility. Split lighting, materials, and effects into layers.',
            pages: [
              {
                title: 'Pass Setup',
                content: 'View Layer Properties > Passes. Enable Combined, Diffuse, Glossy, Emission etc. Compose in Compositing workspace for total control.',
                image: '/examples/render-passes.mp4'
              },
              {
                title: 'Cryptomatte',
                content: 'Enable Cryptomatte for automatic selection masks. Select any object in compositing without pre-planning. Essential for professional workflows.',
                image: '/examples/cryptomatte.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  techniques: [
    {
      name: 'Optimization Strategies',
      icon: '/Icons/settings.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Eevee Optimization',
          description: 'Maximize real-time performance',
          icon: '/Icons/light_sun.svg',
          detailedInfo: {
            overview: 'Optimize Eevee by balancing quality settings, using baked lighting, and managing effects carefully for smooth viewport performance.',
            pages: [
              {
                title: 'Quality Settings',
                content: 'Start with default Shadows. Increase only if needed. Lower Volumetric tile size for faster fog. Disable unused features like SSR or Bloom if not visible.',
                image: '/examples/eevee-optimize-quality.mp4'
              },
              {
                title: 'Baked Lighting',
                content: 'Use Irradiance Volumes for indirect lighting. Bake Reflection Cubemaps for complex reflections. Pre-calculate what doesn\'t need real-time updates.',
                image: '/examples/eevee-optimize-bake.mp4'
              },
              {
                title: 'Texture Resolution',
                content: 'Use appropriate texture sizes. 2K for hero objects, 1K for mid-ground, 512px for background. Reduces memory and increases viewport speed.',
                image: '/examples/eevee-optimize-textures.mp4'
              }
            ]
          }
        },
        {
          name: 'Cycles Optimization',
          description: 'Reduce render times efficiently',
          icon: '/Icons/shading_rendered.svg',
          detailedInfo: {
            overview: 'Optimize Cycles through smart sampling, light path limiting, and strategic quality settings without sacrificing final image quality.',
            pages: [
              {
                title: 'Light Path Limits',
                content: 'Reduce Max Bounces in Light Paths. For most scenes: Total=8, Diffuse=2, Glossy=4, Transmission=8. Lower unnecessary bounces saves massive render time.',
                image: '/examples/cycles-optimize-bounces.mp4'
              },
              {
                title: 'Clamping',
                content: 'Use Light Paths > Clamping to reduce fireflies. Set Indirect Light to 3-10 for cleaner renders. Slight accuracy loss but huge noise reduction.',
                image: '/examples/cycles-optimize-clamp.mp4'
              },
              {
                title: 'Simplify Settings',
                content: 'Render Properties > Simplify. Reduce Max Subdivisions for faster displacement. Lower AO bounces. Use for test renders and animations.',
                image: '/examples/cycles-optimize-simplify.mp4'
              }
            ]
          }
        },
        {
          name: 'Hybrid Workflow',
          description: 'Combine both engines strategically',
          icon: '/Icons/tool.svg',
          detailedInfo: {
            overview: 'Professional workflows often use both engines: Eevee for iteration and animation previews, Cycles for final quality renders.',
            pages: [
              {
                title: 'Preview with Eevee',
                content: 'Set up lighting and materials in Eevee for instant feedback. Test animations and camera movements in real-time. Switch to Cycles only for finals.',
                image: '/examples/hybrid-preview.mp4'
              },
              {
                title: 'Material Translation',
                content: 'Most materials work in both engines. Keep shaders simple: Principled BSDF translates perfectly. Test Eevee-specific features won\'t appear in Cycles.',
                image: '/examples/hybrid-materials.mp4'
              },
              {
                title: 'Render Layers',
                content: 'Render complex elements in Cycles, simple elements in Eevee. Composite together. Background in Eevee, hero object in Cycles saves time.',
                image: '/examples/hybrid-layers.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Common Workflows',
      icon: '/Icons/modifier.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Product Visualization',
          description: 'Photorealistic product renders',
          icon: '/Icons/mesh.svg',
          detailedInfo: {
            overview: 'Product visualization requires photorealism and accurate materials. Cycles is the clear choice for final quality commercial renders.',
            pages: [
              {
                title: 'Cycles Setup',
                content: 'Use Cycles with high samples (1024+). Enable Caustics for glass products. Use HDRI lighting for realistic reflections. Denoise for clean results.',
                image: '/examples/workflow-product-cycles.mp4'
              },
              {
                title: 'Material Accuracy',
                content: 'Use accurate IOR values. Measure real material roughness. Reference photos for color and finish. Accuracy matters for client work.',
                image: '/examples/workflow-product-materials.mp4'
              }
            ]
          }
        },
        {
          name: 'Stylized Animation',
          description: 'Fast playback and iteration',
          icon: '/Icons/anim.svg',
          detailedInfo: {
            overview: 'Stylized work and animations benefit from Eevee\'s real-time feedback. See results immediately and iterate rapidly.',
            pages: [
              {
                title: 'Eevee Animation',
                content: 'Use Eevee for motion graphics, stylized characters, and fast-turnaround animation. Render at 24fps+ easily. Preview in real-time as you animate.',
                image: '/examples/workflow-animation-eevee.mp4'
              },
              {
                title: 'Non-Photoreal Rendering',
                content: 'Eevee excels at stylized looks. Use Bloom for glow effects. Sharp shadows for cartoon look. Fast enough for experimentation.',
                image: '/examples/workflow-stylized.mp4'
              }
            ]
          }
        },
        {
          name: 'Architectural Visualization',
          description: 'Interior and exterior renders',
          icon: '/Icons/home.svg',
          detailedInfo: {
            overview: 'Architectural visualization combines both engines: Eevee for design iteration, Cycles for client presentations and final quality.',
            pages: [
              {
                title: 'Interior Lighting',
                content: 'Use Cycles with Light Portals for interiors. Accurate caustics through windows. Realistic material reflections. Denoise for clean glass.',
                image: '/examples/workflow-archviz-interior.mp4'
              },
              {
                title: 'Exterior Speed',
                content: 'Exteriors can use Eevee for daytime renders. Good performance with natural lighting. Switch to Cycles for night scenes with complex lighting.',
                image: '/examples/workflow-archviz-exterior.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  // Techniques tab customization
  techniquesTitle: 'Optimization & Workflows',
  techniquesDescription: 'Master performance and professional render strategies',

  practiceTitle: 'Hands-On Render Projects',
  practiceDescription: 'Apply render engine knowledge with practical exercises',

  practiceProjects: [
    { 
      title: 'Create a Glass Material Comparison', 
      desc: 'Compare glass rendering in both engines',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Glass Shader', 'Transmission', 'IOR', 'Caustics']
    },
    { 
      title: 'Build a Product Showcase Scene', 
      desc: 'Professional product render setup',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['HDRI Lighting', 'Cycles', 'Material Setup', 'Denoising']
    },
    { 
      title: 'Optimize an Animation Scene', 
      desc: 'Speed up render times for animation',
      duration: '30 min', 
      difficulty: 'Intermediate',
      skills: ['Eevee', 'Light Probes', 'Performance', 'Baking']
    },
    { 
      title: 'Master Volumetric Lighting', 
      desc: 'Create atmospheric fog and god rays',
      duration: '35 min', 
      difficulty: 'Advanced',
      skills: ['Volumetrics', 'Both Engines', 'Atmosphere', 'Light Shafts']
    }
  ]
}