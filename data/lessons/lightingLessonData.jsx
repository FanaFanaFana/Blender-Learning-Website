export const lightingLessonData = {

  heroConfig: {
    title: 'Lighting',
    gradientText: '& World',
    subtitle: 'Master the art of lighting to create mood, depth, and stunning visuals in your 3D scenes',
    gradientColors: 'linear-gradient(135deg, #f59e0b, #eab308, #fbbf24)',
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/light.svg', title: '5 Light Types', subtitle: 'Essential tools' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/light.svg', label: 'Light Types' },
    { id: 'techniques', icon: '/Icons/world.svg', label: 'World & HDRI' },
    { id: 'shortcuts', icon: '/Icons/shortcut.svg', label: 'Shortcuts' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#f59e0b',

  overviewTitle: 'Understanding Lighting in Blender',
  overviewDescription: 'Learn how light transforms your scenes from flat to cinematic',

  overviewCards: [
    {
      icon: '/Icons/light.svg',
      title: 'Why Lighting Matters',
      content: 'Lighting is 80% of what makes a render look good. Great lighting can make simple models look amazing, while poor lighting ruins even the best models. It creates mood, depth, focus, and realism. Master lighting and you master 3D art.'
    },
    {
      icon: '/Icons/light_sun.svg',
      title: 'Light Types in Blender',
      content: 'Blender offers five light types: Point (omnidirectional), Sun (parallel rays), Spot (focused cone), Area (soft realistic), and HDRI environment lighting. Each serves different purposes, from dramatic spotlights to natural outdoor illumination.'
    },
    {
      icon: '/Icons/world.svg',
      title: 'Three-Point Lighting',
      content: 'The foundation of good lighting: Key Light (main source), Fill Light (soften shadows), and Rim/Back Light (separation from background). This classic setup works for portraits, products, and almost any subject. Learn it first.'
    }
  ],

  contentTitle: 'Light Types & Properties',
  contentDescription: 'Master each light type and when to use them',

  categories: [
    {
      name: 'Basic Light Types',
      icon: '/Icons/light.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Point Light',
          description: 'Omnidirectional light source',
          icon: '/Icons/light_point.svg',
          detailedInfo: {
            overview: 'Point Light emits light equally in all directions from a single point, like a light bulb. Simple but versatile for general illumination, candles, lamps, or magical glowing objects.',
            pages: [
              {
                title: 'Point Light Basics',
                content: 'Add with Shift+A > Light > Point. Adjust Power (Watts) to control brightness - start with 100-1000W. Radius creates soft shadows (0 = hard shadows). Perfect for indoor scenes and practical lights.',
                image: '/examples/light-point-basic.mp4'
              },
              {
                title: 'When to Use Point',
                content: 'Use Point lights for: Light bulbs in lamps, candles and torches, glowing magical orbs, street lights, or any omnidirectional source. Quick to set up and performance-friendly.',
                image: '/examples/light-point-uses.mp4'
              },
              {
                title: 'Falloff & Radius',
                content: 'Light intensity decreases with distance (inverse square law in Cycles). Increase Radius for softer, more realistic shadows. Radius simulates physical light size - larger = softer.',
                image: '/examples/light-point-falloff.mp4'
              }
            ]
          }
        },
        {
          name: 'Sun Light',
          description: 'Parallel directional rays',
          icon: '/Icons/light_sun.svg',
          detailedInfo: {
            overview: 'Sun Light casts parallel rays in one direction, simulating sunlight or moonlight. Position doesn\'t matter - only rotation. Perfect for outdoor scenes and dramatic directional lighting.',
            pages: [
              {
                title: 'Sun Light Properties',
                content: 'Add with Shift+A > Light > Sun. Rotation controls direction (not position). Strength measured in power (1-5 typical for daylight). Angle parameter controls sun disk size and shadow softness.',
                image: '/examples/light-sun-basic.mp4'
              },
              {
                title: 'Outdoor Lighting',
                content: 'Sun Light is essential for outdoor scenes. Low angle = sunset/sunrise (warm). High angle = noon (harsh shadows). Combine with sky texture for complete outdoor lighting.',
                image: '/examples/light-sun-outdoor.mp4'
              },
              {
                title: 'Shadow Quality',
                content: 'Angle parameter: Smaller = sharper shadows (harsh midday), larger = softer shadows (overcast or atmosphere scattering). Earth sun angle ≈ 0.53°. Adjust for artistic control.',
                image: '/examples/light-sun-shadows.mp4'
              }
            ]
          }
        },
        {
          name: 'Spot Light',
          description: 'Focused cone of light',
          icon: '/Icons/light_spot.svg',
          detailedInfo: {
            overview: 'Spot Light emits a cone of light, like a flashlight or stage spotlight. Offers precise control over where light falls, perfect for dramatic lighting, highlighting subjects, or theatrical effects.',
            pages: [
              {
                title: 'Spot Light Controls',
                content: 'Spot Size controls cone width (degrees). Blend softens cone edges. Power controls brightness. Point spotlight at subject and adjust cone to frame perfectly.',
                image: '/examples/light-spot-basic.mp4'
              },
              {
                title: 'Dramatic Lighting',
                content: 'Use Spot lights for: Stage lighting, flashlights, focused product highlights, interrogation rooms, dramatic character lighting. Creates strong mood and directs viewer attention.',
                image: '/examples/light-spot-dramatic.mp4'
              },
              {
                title: 'IES Textures',
                content: 'Add IES texture in light settings for realistic architectural light patterns. IES files define real-world light falloff patterns from actual fixtures. Free from manufacturer websites.',
                image: '/examples/light-spot-ies.mp4'
              }
            ]
          }
        },
        {
          name: 'Area Light',
          description: 'Soft realistic lighting panel',
          icon: '/Icons/light_area.svg',
          detailedInfo: {
            overview: 'Area Light emits from a rectangular or circular surface, creating the softest, most realistic shadows. Essential for professional renders, product photography, and any scene requiring natural-looking soft light.',
            pages: [
              {
                title: 'Area Light Setup',
                content: 'Add Shift+A > Light > Area. Choose shape: Rectangle (softboxes, windows), Disk (round softboxes), Square. Size controls physical dimensions - larger = softer shadows. Most realistic light type.',
                image: '/examples/light-area-basic.mp4'
              },
              {
                title: 'Soft vs Hard Light',
                content: 'Small Area = hard shadows. Large Area = soft shadows. Distance also matters - closer light = softer shadows. Simulate studio softboxes for product renders by using large rectangles.',
                image: '/examples/light-area-softness.mp4'
              },
              {
                title: 'Studio Lighting',
                content: 'Use Area lights to recreate photography studios: Large rectangles as softboxes, small squares as hair lights, strips for rim lighting. Adjust power, size, and position for complete control.',
                image: '/examples/light-area-studio.mp4'
              },
              {
                title: 'Portal Lights',
                content: 'In Cycles, set Area light to Portal type for indoor scenes with HDRI. Place at windows to guide light sampling. Dramatically reduces noise and speeds up interior renders.',
                image: '/examples/light-area-portal.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Light Properties',
      icon: '/Icons/settings.svg',
      color: '#eab308',
      items: [
        {
          name: 'Power & Strength',
          description: 'Control light intensity',
          icon: '/Icons/power.svg',
          detailedInfo: {
            overview: 'Light intensity determines brightness. Measured in Watts (Point, Spot, Area) or raw strength values (Sun, World). Getting intensity right is crucial for realistic and mood-appropriate lighting.',
            pages: [
              {
                title: 'Realistic Values',
                content: 'Candle: 10-50W. Light bulb: 100-1000W. Softbox: 100-500W. Sun: 1-5 strength. These are starting points - adjust based on scene scale and desired mood. Eevee and Cycles may need different values.',
                image: '/examples/light-power-values.mp4'
              },
              {
                title: 'Scene Scale Matters',
                content: 'Light power scales with scene size. Small scene (1m cube) needs less power than large scene (100m building). Scale your models correctly or adjust light power accordingly.',
                image: '/examples/light-power-scale.mp4'
              }
            ]
          }
        },
        {
          name: 'Color Temperature',
          description: 'Warm and cool light tones',
          icon: '/Icons/color.svg',
          detailedInfo: {
            overview: 'Light color dramatically affects mood. Warm colors (orange/yellow) feel cozy and inviting. Cool colors (blue) feel cold, clinical, or nighttime. Use color temperature to guide emotional response.',
            pages: [
              {
                title: 'Color Temperature Scale',
                content: 'Candle: 1800K (very warm orange). Tungsten bulb: 3200K (warm). Daylight: 5500K (neutral). Overcast: 6500K (cool). Moonlight: 4100K (cool blue). Use Blackbody node for accurate color.',
                image: '/examples/light-temperature.mp4'
              },
              {
                title: 'Complementary Lighting',
                content: 'Mix warm and cool lights for visual interest: Warm key light + cool fill creates depth. Orange firelight + blue moonlight = classic night scene. Contrast creates professional look.',
                image: '/examples/light-complementary.mp4'
              }
            ]
          }
        },
        {
          name: 'Shadows',
          description: 'Control shadow quality',
          icon: '/Icons/shadow.svg',
          detailedInfo: {
            overview: 'Shadow quality affects realism and render time. Hard shadows look artificial; soft shadows look natural. Control shadow softness through light size, distance, and specific shadow settings.',
            pages: [
              {
                title: 'Cycles Shadow Settings',
                content: 'In Cycles, shadow softness is automatic based on light size/radius. Larger lights = softer shadows. Use Max Bounces to control shadow depth in Light Paths settings.',
                image: '/examples/light-shadow-cycles.mp4'
              },
              {
                title: 'Eevee Shadow Quality',
                content: 'In Eevee, increase Shadow Cube Size/Cascade Size in light properties for sharper shadows. Enable Contact Shadows for accurate small-scale detail. Balance quality vs performance.',
                image: '/examples/light-shadow-eevee.mp4'
              },
              {
                title: 'Shadow Terminator',
                content: 'Reduce shadow terminator artifacts on low-poly meshes by increasing geometry or using Shade Smooth. In Cycles, Geometry > Shadow Terminator offset can fix shading issues.',
                image: '/examples/light-shadow-terminator.mp4'
              }
            ]
          }
        },
        {
          name: 'Volumetric Lighting',
          description: 'Visible light beams and fog',
          icon: '/Icons/volume_data.svg',
          detailedInfo: {
            overview: 'Volumetric lighting makes light rays visible through fog, dust, or atmosphere. Creates dramatic god rays, atmospheric depth, and cinematic mood. Essential for interior and atmospheric scenes.',
            pages: [
              {
                title: 'Enabling Volumetrics',
                content: 'Cycles: Automatic with Volume Scatter in world or objects. Eevee: Enable Volumetric Lighting in Render Properties. Adjust tile size (lower = higher quality). Enable Volumetric Shadows for light interaction.',
                image: '/examples/light-volumetric-enable.mp4'
              },
              {
                title: 'World Volume',
                content: 'Shader Editor > World > Add Volume Scatter to world output. Adjust Density for fog thickness. Low values (0.001-0.01) for subtle atmosphere, higher for thick fog.',
                image: '/examples/light-volumetric-world.mp4'
              },
              {
                title: 'God Rays',
                content: 'Use Spot or Area lights with volumetrics for dramatic god rays. Position lights to shine through windows or openings. Adjust Volumetric Shadows quality for light shaft definition.',
                image: '/examples/light-volumetric-godrays.mp4'
              }
            ]
          }
        },
        {
          name: 'Light Visibility',
          description: 'Control what lights affect',
          icon: '/Icons/eye.svg',
          detailedInfo: {
            overview: 'Control which lights affect diffuse, specular, transmission, or volume. Useful for separating lighting concerns - dedicated rim light for reflections only, or fill light that doesn\'t affect specular highlights.',
            pages: [
              {
                title: 'Light Path Visibility',
                content: 'Light Properties > Visibility: Toggle Diffuse (affects base color), Glossy (affects reflections), Transmission (affects glass), Volume (affects fog). Disable options for specific lighting control.',
                image: '/examples/light-visibility.mp4'
              },
              {
                title: 'Practical Uses',
                content: 'Rim light with Diffuse off: Only creates edge highlights. Fill light with Glossy off: Brightens shadows without washing out reflections. Gives artistic control over lighting separation.',
                image: '/examples/light-visibility-uses.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Lighting',
      icon: '/Icons/light_hemi.svg',
      color: '#fbbf24',
      items: [
        {
          name: 'Mesh Lights',
          description: 'Turn any object into light',
          icon: '/Icons/mesh.svg',
          detailedInfo: {
            overview: 'Any mesh can emit light using Emission shader. Perfect for screens, neon signs, light strips, or custom-shaped light sources. More flexible than standard lights for complex shapes.',
            pages: [
              {
                title: 'Creating Mesh Lights',
                content: 'Add object, go to Shading workspace. Use Emission shader instead of Principled BSDF. Adjust Strength (1-100+). In Cycles, mesh lights actually illuminate the scene. In Eevee, limited light emission.',
                image: '/examples/light-mesh-basic.mp4'
              },
              {
                title: 'LED Strips & Signs',
                content: 'Model LED strips or neon signs, apply Emission material. Combine with Bloom in Eevee for realistic glow. Great for sci-fi panels, signs, or decorative lighting elements.',
                image: '/examples/light-mesh-led.mp4'
              },
              {
                title: 'Multiple Importance Sampling',
                content: 'In Cycles, enable Material > Settings > Multiple Importance for large mesh lights. Reduces noise significantly by smart sampling. Essential for large emissive surfaces like ceilings or windows.',
                image: '/examples/light-mesh-mis.mp4'
              }
            ]
          }
        },
        {
          name: 'Light Linking',
          description: 'Control what lights illuminate',
          icon: '/Icons/link.svg',
          detailedInfo: {
            overview: 'Light Linking lets you specify which lights affect which objects. Illuminate only specific elements while excluding others. Professional technique for complete lighting control.',
            pages: [
              {
                title: 'Setting Up Linking',
                content: 'Select light, Object Properties > Visibility > Light Linking. Create collection of objects to exclude or include. Use for dedicated lights that only affect hero objects.',
                image: '/examples/light-linking-setup.mp4'
              },
              {
                title: 'Practical Applications',
                content: 'Rim light only for character, not environment. Product light only for hero product. Background light that doesn\'t affect foreground. Gives layer-by-layer lighting control.',
                image: '/examples/light-linking-uses.mp4'
              }
            ]
          }
        },
        {
          name: 'Light Groups',
          description: 'Organize and manage lighting',
          icon: '/Icons/group.svg',
          detailedInfo: {
            overview: 'Organize lights into collections for easy management. Toggle entire lighting setups on/off, adjust groups together, or create alternative lighting scenarios quickly.',
            pages: [
              {
                title: 'Collection Organization',
                content: 'Create collections: "Key_Lights", "Fill_Lights", "Rim_Lights". Move lights into appropriate collections. Toggle visibility in Outliner to quickly test lighting setups.',
                image: '/examples/light-groups.mp4'
              },
              {
                title: 'Lighting Scenarios',
                content: 'Create multiple lighting setups in different collections: "Daytime", "Nighttime", "Studio". Toggle between complete lighting scenarios instantly. Speeds up iteration.',
                image: '/examples/light-scenarios.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  techniquesTitle: 'World Settings & HDRI Lighting',
  techniquesDescription: 'Master environment lighting and realistic sky setups',

  techniques: [
    {
      name: 'HDRI Environment Lighting',
      icon: '/Icons/world.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'What is HDRI?',
          description: 'High Dynamic Range Image lighting',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'HDRI (High Dynamic Range Image) is a 360° panoramic image capturing real-world lighting. Contains lighting information far beyond normal images - bright sun, dark shadows - providing incredibly realistic environment lighting.',
            pages: [
              {
                title: 'How HDRI Works',
                content: 'HDRI wraps around your scene like a sphere, providing lighting from all directions. Each pixel contains light intensity data, illuminating your objects as if they were in that real location.',
                image: '/examples/hdri-how.mp4'
              },
              {
                title: 'Benefits of HDRI',
                content: 'Instant realistic lighting. Accurate reflections in shiny materials. Natural ambient occlusion. Perfect color matching with real environments. One HDRI replaces dozens of manual lights.',
                image: '/examples/hdri-benefits.mp4'
              },
              {
                title: 'Free HDRI Resources',
                content: 'Polyhaven.com: Thousands of free HDRIs (CC0 license). HDRIHaven.com (now Polyhaven): High quality outdoor/indoor. Blender built-in HDRIs in Shading workspace. Download 4K+ for best quality.',
                image: '/examples/hdri-resources.mp4'
              }
            ]
          }
        },
        {
          name: 'Setting Up HDRI',
          description: 'Configure environment lighting',
          icon: '/Icons/world.svg',
          detailedInfo: {
            overview: 'Setting up HDRI in Blender transforms your lighting instantly. Replace default gray background with photorealistic environment providing natural lighting and reflections.',
            pages: [
              {
                title: 'Basic HDRI Setup',
                content: 'Shading workspace > World shader. Add Shift+A > Texture > Environment Texture. Open HDRI file (.hdr or .exr). Connect to World Output Background. Instantly realistic lighting!',
                image: '/examples/hdri-setup-basic.mp4'
              },
              {
                title: 'Strength Control',
                content: 'Adjust World shader Strength to control lighting intensity. 1.0 = normal, 0.5 = darker, 2.0 = brighter. Match intensity to your scene needs. Can also use Color > RGB Curves for precise control.',
                image: '/examples/hdri-setup-strength.mp4'
              },
              {
                title: 'Rotation & Positioning',
                content: 'Add Mapping + Texture Coordinate nodes before Environment Texture. Use Mapping > Rotation > Z to rotate HDRI. Position sun or windows exactly where you need them in your scene.',
                image: '/examples/hdri-setup-rotation.mp4'
              }
            ]
          }
        },
        {
          name: 'HDRI in Cycles vs Eevee',
          description: 'Engine-specific considerations',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'HDRI behaves differently in Cycles and Eevee. Understanding these differences helps you get the best results from each render engine.',
            pages: [
              {
                title: 'Cycles HDRI',
                content: 'Cycles fully supports HDRI with accurate lighting, reflections, and refraction. HDRI lights the scene naturally. Increase Max Bounces for better light distribution. Perfect for photorealism.',
                image: '/examples/hdri-cycles.mp4'
              },
              {
                title: 'Eevee HDRI Setup',
                content: 'Eevee needs Irradiance Volumes to capture HDRI lighting for dynamic objects. Add Shift+A > Light Probe > Irradiance Volume. Scale to cover scene. Render > Bake Indirect Lighting or enable auto-bake.',
                image: '/examples/hdri-eevee.mp4'
              },
              {
                title: 'Eevee Limitations',
                content: 'Eevee HDRI reflections limited to screen-space. Add Reflection Cubemap probes for better reflections. HDRI won\'t show in refractions. Consider adding dedicated lights for more control.',
                image: '/examples/hdri-eevee-limits.mp4'
              }
            ]
          }
        },
        {
          name: 'HDRI + Additional Lights',
          description: 'Combine environment with custom lighting',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Professional scenes combine HDRI environment lighting with additional lights for artistic control. HDRI provides base realism, custom lights add drama and focus.',
            pages: [
              {
                title: 'Supplementary Lighting',
                content: 'Use HDRI for environment and reflections. Add Area lights as fill or key lights for subject control. Adjust HDRI strength down (0.5-0.8), bring in focused lights for highlights.',
                image: '/examples/hdri-plus-lights.mp4'
              },
              {
                title: 'HDRI Strength Reduction',
                content: 'Lower HDRI strength to 0.3-0.5 for subtle environment lighting. Use custom lights for main illumination. Keeps realistic reflections while giving you creative lighting control.',
                image: '/examples/hdri-strength-reduce.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'World Shader Options',
      icon: '/Icons/shader.svg',
      color: '#eab308',
      items: [
        {
          name: 'Sky Texture',
          description: 'Procedural atmospheric sky',
          icon: '/Icons/sky.svg',
          detailedInfo: {
            overview: 'Sky Texture generates procedural skies with sun, atmosphere, and physically accurate scattering. Perfect for outdoor scenes without needing HDRI files. Fully customizable and animatable.',
            pages: [
              {
                title: 'Sky Texture Setup',
                content: 'World shader: Add Shift+A > Texture > Sky Texture > connect to Background. Choose Sky Type: Nishita (most realistic), Preetham, Hosek/Wilkie. Adjust Sun direction for time of day.',
                image: '/examples/world-sky-setup.mp4'
              },
              {
                title: 'Sun Position',
                content: 'Sun Rotation controls time of day. Low angle = sunset/sunrise (orange), high angle = noon (harsh). Elevation affects sky color and atmosphere thickness. Animate for day/night cycles.',
                image: '/examples/world-sky-sun.mp4'
              },
              {
                title: 'Atmosphere Settings',
                content: 'Adjust Altitude, Air density, Dust density, Ozone density for different planetary atmospheres or weather conditions. Create alien skies, pollution, clear mountain air, or stylized looks.',
                image: '/examples/world-sky-atmosphere.mp4'
              }
            ]
          }
        },
        {
          name: 'Gradient Background',
          description: 'Simple artistic backgrounds',
          icon: '/Icons/gradient.svg',
          detailedInfo: {
            overview: 'Create custom gradient backgrounds for stylized work or controlled studio environments. Useful when you want clean backgrounds without environment lighting complexity.',
            pages: [
              {
                title: 'Gradient Setup',
                content: 'World shader: Add Texture Coordinate > Generated to ColorRamp. Connect to Background color. Adjust ColorRamp stops for custom gradients. Simple artistic control for stylized renders.',
                image: '/examples/world-gradient.mp4'
              },
              {
                title: 'Studio Backgrounds',
                content: 'Use subtle gradients for product renders: White to light gray. Creates depth without distraction. Combine with studio lights for professional product visualization.',
                image: '/examples/world-gradient-studio.mp4'
              }
            ]
          }
        },
        {
          name: 'Multiple World Setups',
          description: 'Quick lighting scenario switching',
          icon: '/Icons/world.svg',
          detailedInfo: {
            overview: 'Create multiple world shaders for different lighting scenarios. Quickly switch between outdoor HDRI, studio setup, or dramatic sunset without rebuilding your lighting.',
            pages: [
              {
                title: 'World Shader Management',
                content: 'Create multiple world shaders with + icon. Name them: "Outdoor_Day", "Studio_White", "Sunset_Warm". Switch between setups instantly. Saves massive time during iteration.',
                image: '/examples/world-multiple.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Professional Lighting Techniques',
      icon: '/Icons/tool.svg',
      color: '#fbbf24',
      items: [
        {
          name: 'Three-Point Lighting',
          description: 'Classic lighting foundation',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Three-Point Lighting is the foundation of professional lighting: Key Light (main), Fill Light (shadows), Rim Light (separation). Master this and you understand 90% of lighting.',
            pages: [
              {
                title: 'Key Light',
                content: 'Main light source, usually 45° to side and above subject. Strongest light, defines form and mood. Use Area or Spot light. Typical power: 500-1000W. Creates main shadows.',
                image: '/examples/lighting-key.mp4'
              },
              {
                title: 'Fill Light',
                content: 'Soften harsh shadows from key light. Positioned opposite key, lower power (30-50% of key). Use large Area light for soft fill. Don\'t eliminate shadows completely - just soften.',
                image: '/examples/lighting-fill.mp4'
              },
              {
                title: 'Rim/Back Light',
                content: 'Behind subject, creates glowing edge separating subject from background. Use Area or Spot. Creates depth and professional look. Essential for character and product lighting.',
                image: '/examples/lighting-rim.mp4'
              },
              {
                title: 'Complete Setup',
                content: 'Combine all three: Key at 45° (bright), Fill opposite (-30° dimmer), Rim from behind. Adjust ratios for mood: High contrast = dramatic, low contrast = soft and friendly.',
                image: '/examples/lighting-threepoint-complete.mp4'
              }
            ]
          }
        },
        {
          name: 'Natural Window Lighting',
          description: 'Simulate realistic interior light',
          icon: '/Icons/window.svg',
          detailedInfo: {
            overview: 'Natural window lighting creates beautiful soft light for interiors. Large Area lights simulate windows, creating realistic indoor illumination perfect for architectural visualization.',
            pages: [
              {
                title: 'Window Light Setup',
                content: 'Large rectangular Area light positioned like window. High power (500-2000W). Rotate to face into room. Soft, directional light like real windows. Combine with HDRI for reflections.',
                image: '/examples/lighting-window-setup.mp4'
              },
              {
                title: 'Multiple Windows',
                content: 'Real rooms have multiple windows. Use several Area lights at different intensities. Front windows (strong), side windows (medium). Creates natural multi-directional lighting.',
                image: '/examples/lighting-window-multiple.mp4'
              },
              {
                title: 'Light Portals',
                content: 'In Cycles with HDRI, set Area lights to Portal type at windows. Guides light sampling for much faster rendering. Essential for interior archviz with exterior HDRI.',
                image: '/examples/lighting-window-portals.mp4'
              }
            ]
          }
        },
        {
          name: 'Product Photography Lighting',
          description: 'Commercial product visualization',
          icon: '/Icons/camera.svg',
          detailedInfo: {
            overview: 'Product photography lighting makes objects look premium and professional. Clean, controlled lighting that shows form, texture, and detail perfectly.',
            pages: [
              {
                title: 'Softbox Setup',
                content: 'Two large Area lights (rectangles) on either side at 45°. Equal power for even lighting, or adjust for slight shadow. Creates professional catalog-style lighting.',
                image: '/examples/lighting-product-softbox.mp4'
              },
              {
                title: 'Overhead Beauty Light',
                content: 'Large Area light directly above, slightly forward. Illuminates top surfaces, creates attractive highlights. Common for jewelry, tech products, food photography.',
                image: '/examples/lighting-product-overhead.mp4'
              },
              {
                title: 'Gradient Background',
                content: 'Use white-to-gray gradient background. Position product on infinite white plane (large scaled plane). Add subtle ambient occlusion pass for ground contact shadow.',
                image: '/examples/lighting-product-background.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  shortcuts: [
    {
      category: 'Light Management',
      items: [
        { key: 'Shift + A > Light', action: 'Add light to scene' },
        { key: 'Ctrl + L', action: 'Make light single-user (duplicate settings)' },
        { key: 'H', action: 'Hide selected lights' },
        { key: 'Alt + H', action: 'Unhide all lights' },
        { key: 'M', action: 'Move light to collection' },
        { key: 'Shift + D', action: 'Duplicate light' },
        { key: 'Alt + D', action: 'Duplicate linked (shares settings)' },
        { key: 'Ctrl + A', action: 'Apply transforms to light' }
      ]
    },
    {
      category: 'World Shader',
      items: [
        { key: 'Shift + A', action: 'Add world shader node' },
        { key: 'Ctrl + T', action: 'Add texture setup in world shader' },
        { key: 'Ctrl + Shift + Click', action: 'Preview world node output' },
        { key: 'Z', action: 'Viewport shading (see lighting changes)' },
        { key: 'Shift + Z', action: 'Toggle rendered viewport shading' }
      ]
    },
    {
      category: 'Viewport & Rendering',
      items: [
        { key: 'Z > Rendered', action: 'Preview lighting in viewport' },
        { key: 'Numpad 0', action: 'Camera view (see render lighting)' },
        { key: 'F12', action: 'Render image' },
        { key: 'Ctrl + B', action: 'Set render region (test lighting area)' },
        { key: 'Ctrl + Alt + B', action: 'Clear render region' },
        { key: 'Shift + Click viewport', action: 'Set light target point (Spot)' }
      ]
    }
  ],

  practiceTitle: 'Lighting Practice Projects',
  practiceDescription: 'Master lighting techniques with hands-on exercises',

  practiceProjects: [
    { 
      title: 'Three-Point Lighting Setup', 
      desc: 'Create classic three-point lighting for a character',
      duration: '25 min', 
      difficulty: 'Beginner',
      skills: ['Key Light', 'Fill Light', 'Rim Light', 'Area Lights']
    },
    { 
      title: 'Interior Scene with HDRI', 
      desc: 'Light an interior using HDRI and portal lights',
      duration: '35 min', 
      difficulty: 'Intermediate',
      skills: ['HDRI Setup', 'Portal Lights', 'Eevee/Cycles', 'Window Lighting']
    },
    { 
      title: 'Product Photography Studio', 
      desc: 'Build a professional product lighting setup',
      duration: '40 min', 
      difficulty: 'Intermediate',
      skills: ['Softbox Lighting', 'Area Lights', 'Gradient Background', 'Shadows']
    },
    { 
      title: 'Dramatic Cinematic Lighting', 
      desc: 'Create moody, atmospheric scene lighting',
      duration: '50 min', 
      difficulty: 'Advanced',
      skills: ['Volumetrics', 'Color Temperature', 'Spot Lights', 'All Techniques']
    }
  ]
}