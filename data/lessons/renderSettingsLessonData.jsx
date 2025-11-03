export const renderSettingsLessonData = {

  heroConfig: {
    title: 'Render',
    gradientText: 'Settings',
    subtitle: 'Master output quality, optimization, and file formats for professional results',
    gradientColors: 'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/render.svg', title: '25+ Settings', subtitle: 'Essential options' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/render.svg', label: 'Render Settings' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Optimization' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#f59e0b',

  overviewCards: [
    {
      icon: '/Icons/render.svg',
      title: 'Quality vs Speed',
      content: 'Rendering is a balancing act between quality and time. Higher samples and resolution create stunning images but take longer. Understanding render settings lets you optimize for your specific needs - fast previews or final production quality.'
    },
    {
      icon: '/Icons/image.svg',
      title: 'Output Formats',
      content: 'Different file formats serve different purposes. PNG for images with transparency, JPEG for photos, EXR for compositing with maximum data. Choosing the right format ensures your renders work perfectly in your pipeline.'
    },
    {
      icon: '/Icons/light.svg',
      title: 'Render Engines',
      content: 'Cycles produces photorealistic physically-based renders. Eevee creates real-time results perfect for previews and stylized work. Each engine has unique settings and strengths - knowing when to use each is crucial.'
    }
  ],

  contentTitle: 'Render Properties & Output',
  contentDescription: 'Control quality, performance, and file output',

  categories: [
    {
      name: 'Render Engine Settings',
      icon: '/Icons/render.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Render Samples',
          description: 'Control image quality and noise',
          icon: '/Icons/render.svg',
          detailedInfo: {
            overview: 'Samples determine how many light calculations per pixel. More samples = cleaner image but longer render time. The most critical quality vs speed setting in Cycles.',
            pages: [
              {
                title: 'Viewport vs Render Samples',
                content: 'Viewport samples (default 1024) for interactive preview. Render samples (default 4096) for final output. Keep viewport low for speed, increase render samples for quality.',
                image: '/examples/render-samples-viewport.mp4'
              },
              {
                title: 'Sample Count Guidelines',
                content: 'Simple scenes: 128-512 samples. Medium complexity: 512-2048 samples. Complex/glass/caustics: 2048-8192+ samples. Start low, increase until noise is acceptable.',
                image: '/examples/render-samples-quality.mp4'
              },
              {
                title: 'Adaptive Sampling',
                content: 'Enable Adaptive Sampling to stop calculating pixels that are already clean. Saves massive time - some pixels need 100 samples, others need 4096. Blender automatically determines this.',
                image: '/examples/render-adaptive-sampling.mp4'
              },
              {
                title: 'Noise Threshold',
                content: 'Lower Noise Threshold (0.001-0.01) = stricter quality before stopping. Higher values (0.1) = faster but potentially noisier. Balances speed and quality with adaptive sampling.',
                image: '/examples/render-noise-threshold.mp4'
              }
            ]
          }
        },
        {
          name: 'Denoising',
          description: 'Remove noise from renders',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Denoising uses AI to remove noise from renders, letting you use fewer samples. OptiX (GPU) and OpenImageDenoise (CPU/GPU) provide fast, high-quality noise removal.',
            pages: [
              {
                title: 'Render Denoising',
                content: 'Enable Denoising in Render properties. OptiX for NVIDIA GPUs (fastest), OpenImageDenoise for others. Dramatically reduces required samples - often by 4-8x.',
                image: '/examples/render-denoise-enable.mp4'
              },
              {
                title: 'Denoising Data Passes',
                content: 'Enable Denoising Data passes (Albedo, Normal) for better denoising results. These guide the denoiser to preserve detail while removing noise.',
                image: '/examples/render-denoise-passes.mp4'
              },
              {
                title: 'Compositor Denoising',
                content: 'For maximum control, disable render denoising and use Denoise node in compositor. Allows mixing denoised and original, or applying selectively.',
                image: '/examples/render-denoise-compositor.mp4'
              }
            ]
          }
        },
        {
          name: 'Max Bounces',
          description: 'Control light bounce limits',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Light bounces multiple times before stopping. More bounces = more accurate indirect lighting but slower renders. Different bounce types for diffuse, glossy, transmission, and volume.',
            pages: [
              {
                title: 'Total Max Bounces',
                content: 'Total Max controls overall light bounces (default 12). Higher values brighten scenes with indirect lighting but increase render time. Most scenes need 8-12 bounces.',
                image: '/examples/render-max-bounces.mp4'
              },
              {
                title: 'Diffuse Bounces',
                content: 'Light bouncing off matte surfaces. 4 bounces usually sufficient. Interiors need more (6-8) for proper ambient occlusion and color bleeding.',
                image: '/examples/render-diffuse-bounces.mp4'
              },
              {
                title: 'Glossy & Transmission',
                content: 'Glossy (4): reflections bouncing. Transmission (12): light through glass. Glass objects need higher transmission for proper caustics and multiple refractions.',
                image: '/examples/render-glossy-transmission.mp4'
              },
              {
                title: 'Volume & Transparent',
                content: 'Volume (0 default): light through volumetrics (smoke, fog). Transparent (8): transparent objects. Enable volume bounces only when using volumetrics.',
                image: '/examples/render-volume-bounces.mp4'
              }
            ]
          }
        },
        {
          name: 'Light Paths',
          description: 'Advanced light behavior control',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Light Paths control how light interacts with different material types. Fine-tune caustics, clamping, and specific light behavior for optimization or artistic control.',
            pages: [
              {
                title: 'Caustics',
                content: 'Caustics are light patterns from reflective/refractive objects (water, glass). Expensive to compute. Disable for faster renders without glass/water, enable for realism.',
                image: '/examples/render-caustics.mp4'
              },
              {
                title: 'Clamping',
                content: 'Clamp Indirect limits brightness of indirect light, reducing fireflies (bright noise pixels). Set to 3-10 to eliminate fireflies without darkening too much.',
                image: '/examples/render-clamping.mp4'
              }
            ]
          }
        },
        {
          name: 'Device',
          description: 'CPU vs GPU rendering',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'Choose CPU or GPU rendering. GPUs (CUDA/OptiX for NVIDIA, HIP for AMD) render much faster for most scenes. CPU better for scenes exceeding GPU memory.',
            pages: [
              {
                title: 'GPU Rendering',
                content: 'Edit > Preferences > System > Cycles Render Devices. Enable your GPU. Typically 3-10x faster than CPU. Use OptiX for NVIDIA RTX cards (fastest).',
                image: '/examples/render-gpu-setup.mp4'
              },
              {
                title: 'When to Use CPU',
                content: 'Use CPU when scene exceeds GPU memory (Out of Memory errors). CPU can use system RAM (slower but handles huge scenes). Or combine CPU+GPU for maximum power.',
                image: '/examples/render-cpu-gpu.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Output Settings',
      icon: '/Icons/image.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Resolution',
          description: 'Set output dimensions',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Resolution determines output size in pixels. Higher resolution = more detail but exponentially longer render times. Balance quality needs with time constraints.',
            pages: [
              {
                title: 'Common Resolutions',
                content: '1920x1080 (Full HD/1080p), 3840x2160 (4K/UHD), 1280x720 (HD/720p), 2048x1080 (2K Cinema). Choose based on delivery platform and quality needs.',
                image: '/examples/render-resolutions.mp4'
              },
              {
                title: 'Resolution Percentage',
                content: 'Use percentage for preview renders. 50% = 1/4 pixels (4x faster), 25% = 1/16 pixels (16x faster). Test lighting/composition at low res, final render at 100%.',
                image: '/examples/render-res-percentage.mp4'
              },
              {
                title: 'Aspect Ratio',
                content: 'Set X/Y dimensions for desired ratio. 16:9 (widescreen standard), 21:9 (ultrawide), 1:1 (square/Instagram), 9:16 (vertical/mobile). Or use camera sensor settings.',
                image: '/examples/render-aspect-ratio.mp4'
              }
            ]
          }
        },
        {
          name: 'Frame Range',
          description: 'Define animation start and end',
          icon: '/Icons/time.svg',
          detailedInfo: {
            overview: 'Frame Range sets which frames to render for animations. Start and End frame define the sequence length. Frame Rate determines playback speed.',
            pages: [
              {
                title: 'Setting Frame Range',
                content: 'Start Frame: first frame to render. End Frame: last frame. Render only what you need to save time. Use timeline markers to remember important frames.',
                image: '/examples/render-frame-range.mp4'
              },
              {
                title: 'Frame Rate',
                content: '24fps (cinema standard), 30fps (TV/video standard), 60fps (smooth motion/gaming), 120fps+ (slow motion source). Higher FPS = more frames to render but smoother motion.',
                image: '/examples/render-frame-rate.mp4'
              },
              {
                title: 'Frame Step',
                content: 'Frame Step lets you render every Nth frame. Step of 2 = every other frame (preview). Step of 1 = all frames (final). Useful for fast animation previews.',
                image: '/examples/render-frame-step.mp4'
              }
            ]
          }
        },
        {
          name: 'File Format',
          description: 'Choose output image format',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'File format determines how images are saved. PNG for general use with transparency, JPEG for small photos, EXR for maximum quality and compositing data.',
            pages: [
              {
                title: 'PNG',
                content: 'PNG: Lossless compression, supports transparency (alpha channel). Best all-around format for still images. RGBA (with alpha) or RGB. Reasonable file sizes.',
                image: '/examples/render-format-png.mp4'
              },
              {
                title: 'JPEG',
                content: 'JPEG: Lossy compression, smallest files, no transparency. Quality slider 0-100 (90-95 recommended). Perfect for photos and web images where size matters. Not for compositing.',
                image: '/examples/render-format-jpeg.mp4'
              },
              {
                title: 'OpenEXR',
                content: 'EXR: Industry standard for VFX. 32-bit float precision, stores render passes, huge color range. Essential for compositing. Large files but maximum flexibility.',
                image: '/examples/render-format-exr.mp4'
              },
              {
                title: 'Animation Formats',
                content: 'For animations: Render PNG sequence (recommended - resumable), then encode to MP4/MOV in video editor. Or render directly to MP4 (faster but not resumable if crash).',
                image: '/examples/render-animation-formats.mp4'
              }
            ]
          }
        },
        {
          name: 'Color Management',
          description: 'Control color space and look',
          icon: '/Icons/color.svg',
          detailedInfo: {
            overview: 'Color Management ensures colors look correct across devices. View Transform changes overall look. Color Space defines how color data is stored.',
            pages: [
              {
                title: 'View Transform',
                content: 'Standard: Neutral, accurate colors. Filmic: Cinematic look with better highlights/shadows (recommended). False Color: Debug exposure. AgX: Modern filmic alternative.',
                image: '/examples/render-view-transform.mp4'
              },
              {
                title: 'Look',
                content: 'Look presets modify View Transform. Very High Contrast, High/Medium/Low Contrast, None. Adjust for desired mood. Medium Contrast good starting point.',
                image: '/examples/render-look.mp4'
              },
              {
                title: 'Exposure',
                content: 'Exposure brightens/darkens final image. Adjust in -3 to +3 range. Quick way to fix under/over-exposed renders without changing lights.',
                image: '/examples/render-exposure.mp4'
              },
              {
                title: 'Gamma',
                content: 'Gamma adjusts midtone brightness. 1.0 = linear, >1.0 = brighter midtones, <1.0 = darker midtones. Usually leave at 1.0 with Filmic.',
                image: '/examples/render-gamma.mp4'
              }
            ]
          }
        },
        {
          name: 'Output Path',
          description: 'Define where files are saved',
          icon: '/Icons/folder.svg',
          detailedInfo: {
            overview: 'Output Path determines where rendered images save. Use absolute paths or relative to .blend file. Organization is crucial for projects with many renders.',
            pages: [
              {
                title: 'Setting Output Path',
                content: 'Click folder icon to browse or type path. // means relative to .blend file. Create organized folders: //renders/lighting_test/, //renders/final/, etc.',
                image: '/examples/render-output-path.mp4'
              },
              {
                title: 'File Naming',
                content: 'Animations automatically append frame numbers (####). Use descriptive base names: character_turntable_####.png. Makes finding specific renders easier.',
                image: '/examples/render-file-naming.mp4'
              },
              {
                title: 'Overwrite',
                content: 'Overwrite setting lets you replace existing files or skip. Enable Overwrite to replace, disable to prevent accidents. Animation frames automatically overwrite.',
                image: '/examples/render-overwrite.mp4'
              }
            ]
          }
        },
        {
          name: 'Metadata',
          description: 'Embed render information',
          icon: '/Icons/info.svg',
          detailedInfo: {
            overview: 'Metadata embeds information into rendered files. Includes render time, samples, date, Blender version. Helpful for tracking settings used in specific renders.',
            pages: [
              {
                title: 'Metadata Options',
                content: 'Date, Time, Render Time, Frame, Camera, Scene, and custom notes. Helps document render settings. View metadata in image properties after rendering.',
                image: '/examples/render-metadata.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Film & Transparency',
      icon: '/Icons/modifier.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Transparent Background',
          description: 'Render without background',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Enable Transparent in Film settings to render objects without background. Essential for compositing renders over other footage or images.',
            pages: [
              {
                title: 'Enabling Transparency',
                content: 'Film > Transparent checkbox. Background becomes alpha channel (transparency). Save as PNG or EXR to preserve alpha. World color ignored when enabled.',
                image: '/examples/render-transparent.mp4'
              },
              {
                title: 'Transparent Glass',
                content: 'Enable Transparent Glass in Film settings to see through glass objects to transparency. Otherwise glass shows refracted background color.',
                image: '/examples/render-transparent-glass.mp4'
              }
            ]
          }
        },
        {
          name: 'Filter Size',
          description: 'Control anti-aliasing blur',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Filter Size controls pixel anti-aliasing. Higher values = softer edges but slightly blurry. Lower values = sharper but may show aliasing (jagged edges).',
            pages: [
              {
                title: 'Filter Settings',
                content: '1.5px default (balanced). 0.5-1.0 for sharper images. 2.0-3.0 for softer, more film-like. Adjust based on desired sharpness vs aliasing.',
                image: '/examples/render-filter-size.mp4'
              }
            ]
          }
        },
        {
          name: 'Motion Blur',
          description: 'Realistic motion blur in renders',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Motion Blur simulates camera shutter exposure, blurring moving objects. Creates realistic motion and fluidity. Position-based (fast) or full deformation (accurate).',
            pages: [
              {
                title: 'Enabling Motion Blur',
                content: 'Enable in Render Properties > Motion Blur. Position for fast (rigid motion), Deformation for accurate (includes mesh deformation). Shutter controls blur amount.',
                image: '/examples/render-motion-blur.mp4'
              },
              {
                title: 'Shutter Speed',
                content: 'Shutter value (0-2) controls blur strength. 0.5 = 180° shutter (cinema standard). 1.0 = 360° (full frame blur). Lower = less blur, higher = more blur.',
                image: '/examples/render-shutter-speed.mp4'
              },
              {
                title: 'Rolling Shutter',
                content: 'Rolling Shutter simulates CMOS sensor artifacts. Creates "jello" effect on fast pans. 0 = no effect, 0.1 = subtle, 1.0 = extreme. Optional realism.',
                image: '/examples/render-rolling-shutter.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Performance',
      icon: '/Icons/settings.svg',
      color: '#10b981',
      items: [
        {
          name: 'Tile Size',
          description: 'Optimize render buckets',
          icon: '/Icons/grid_3x3.svg',
          detailedInfo: {
            overview: 'Tiles divide image into smaller squares for rendering. Tile size affects render speed. Auto usually optimal, but manual adjustment can help specific scenarios.',
            pages: [
              {
                title: 'CPU vs GPU Tiles',
                content: 'CPU: Smaller tiles (16-64px) better for multi-core usage. GPU: Larger tiles (256-512px) maximize GPU efficiency. Auto sets these automatically.',
                image: '/examples/render-tile-size.mp4'
              },
              {
                title: 'When to Adjust',
                content: 'Large, simple scenes: increase tile size. Complex, detailed scenes: decrease tile size. Affects memory usage and parallel processing efficiency.',
                image: '/examples/render-tile-adjust.mp4'
              }
            ]
          }
        },
        {
          name: 'Persistent Images',
          description: 'Cache render data',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Persistent Images caches image data between frames, speeding up animation renders when images don\'t change. Uses more memory but saves time.',
            pages: [
              {
                title: 'Animation Optimization',
                content: 'Enable for animations with static textures. First frame loads images, subsequent frames reuse cached data. Significant speedup for image-heavy scenes.',
                image: '/examples/render-persistent-images.mp4'
              }
            ]
          }
        },
        {
          name: 'Simplify',
          description: 'Reduce scene complexity',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Simplify settings reduce scene complexity for faster test renders. Lower subdivision, disable features temporarily. Essential for preview renders.',
            pages: [
              {
                title: 'Max Subdivision',
                content: 'Limits subdivision surface levels. Set to 1-2 for previews (much faster), 6 for final renders. Dramatically speeds up preview renders.',
                image: '/examples/render-simplify-subdiv.mp4'
              },
              {
                title: 'Viewport/Render Toggle',
                content: 'Separate settings for viewport and render. Keep viewport simplified for speed, render at full quality. Enables efficient workflow.',
                image: '/examples/render-simplify-toggle.mp4'
              },
              {
                title: 'Camera Cull',
                content: 'Enable Camera Cull to skip rendering objects outside camera view. Set distance to cull objects beyond camera range. Significant speedup for large scenes.',
                image: '/examples/render-camera-cull.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Render Passes',
      icon: '/Icons/layer_active.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'View Layer Passes',
          description: 'Separate render elements',
          icon: '/Icons/layer_active.svg',
          detailedInfo: {
            overview: 'Render Passes separate lighting components for compositing control. Diffuse, Glossy, Emission, etc. as separate images. Maximum post-render flexibility.',
            pages: [
              {
                title: 'Essential Passes',
                content: 'Combined: Full image. Diffuse: Matte surfaces. Glossy: Reflections. Emission: Glowing objects. Transmission: Refraction. Enable passes needed for compositing.',
                image: '/examples/render-passes-essential.mp4'
              },
              {
                title: 'Data Passes',
                content: 'Z (depth), Normal, Mist, Ambient Occlusion. Used for compositing effects. Z-depth for depth of field, AO for detail enhancement, Normal for relighting.',
                image: '/examples/render-passes-data.mp4'
              },
              {
                title: 'Cryptomatte',
                content: 'Automatic object/material selection masks. Essential for VFX. Select any object in compositor instantly. Saves creating manual masks.',
                image: '/examples/render-cryptomatte.mp4'
              }
            ]
          }
        },
        {
          name: 'AOV (Arbitrary Output Variables)',
          description: 'Custom render passes',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'AOVs let you output custom shader values as separate passes. Output specific colors, masks, or data not available in standard passes.',
            pages: [
              {
                title: 'Creating AOVs',
                content: 'Add AOV in View Layer properties, use AOV Output node in shaders. Output any shader value as separate image. Advanced control for specific pipeline needs.',
                image: '/examples/render-aov.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  techniquesTitle: 'Optimization & Workflow',
  techniquesDescription: 'Speed up renders and establish efficient workflows',

  techniques: [
    {
      name: 'Speed Optimization',
      icon: '/Icons/time.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Preview Render Strategy',
          description: 'Fast iterations during development',
          icon: '/Icons/render.svg',
          detailedInfo: {
            overview: 'Preview renders should be fast for quick feedback. Use low samples, resolution percentage, simplified settings. Iterate quickly on lighting and composition.',
            pages: [
              {
                title: 'Preview Settings',
                content: 'Resolution: 50%. Samples: 128-256. Denoising: ON. Bounces: Lower (4-6 total). This combination gives 10-20x faster renders while showing overall look.',
                image: '/examples/render-preview-settings.mp4'
              },
              {
                title: 'Region Rendering',
                content: 'Press Ctrl+B in camera view, drag box around area of interest. Renders only selected region. Perfect for testing specific areas quickly.',
                image: '/examples/render-region.mp4'
              },
              {
                title: 'Viewport Rendering',
                content: 'Use viewport rendering (Z > Rendered) for real-time feedback. Adjust lights and materials interactively. Switch to camera view for composition checks.',
                image: '/examples/render-viewport.mp4'
              }
            ]
          }
        },
        {
          name: 'Render Layers Strategy',
          description: 'Break complex scenes into layers',
          icon: '/Icons/layer_active.svg',
          detailedInfo: {
            overview: 'Render complex scenes in separate layers for efficiency and control. Characters, environment, effects separately. Composite together with full control.',
            pages: [
              {
                title: 'Layer Separation',
                content: 'Create View Layers for characters, environment, FX. Render separately with appropriate settings. Heavy FX don\'t slow down character renders. Composite in post.',
                image: '/examples/render-layer-strategy.mp4'
              },
              {
                title: 'Holdout',
                content: 'Use Holdout shader to create transparent holes in one layer for another layer to show through. Essential for compositing multiple render layers.',
                image: '/examples/render-holdout.mp4'
              }
            ]
          }
        },
        {
          name: 'Render Farm & Network',
          description: 'Distribute rendering across machines',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'For large projects, distribute renders across multiple computers. Render frames simultaneously on different machines. Can reduce 10-hour renders to 1 hour with 10 machines.',
            pages: [
              {
                title: 'Frame Distribution',
                content: 'Assign frame ranges to different computers. Machine A: frames 1-100, Machine B: frames 101-200. Render animation much faster with available hardware.',
                image: '/examples/render-farm-frames.mp4'
              },
              {
                title: 'Render Farm Software',
                content: 'Use Flamenco (Blender\'s farm manager), Deadline, or cloud services (SheepIt, AWS, GCP). Automate frame distribution and collection.',
                image: '/examples/render-farm-software.mp4'
              }
            ]
          }
        },
        {
          name: 'Baking for Speed',
          description: 'Pre-calculate lighting',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Bake indirect lighting, AO, or full lighting to textures. Converts expensive calculations to simple texture lookups. Massive speedup for animations with static lighting.',
            pages: [
              {
                title: 'When to Bake',
                content: 'Static lighting + moving camera/objects: bake lighting. Interiors with complex GI: bake indirect. Transforms hours-per-frame to minutes.',
                image: '/examples/render-baking-when.mp4'
              },
              {
                title: 'Baking Process',
                content: 'UV unwrap objects, create bake images, set up bake settings, bake passes to textures. Use baked textures with simple shaders. Dramatic render time reduction.',
                image: '/examples/render-baking-process.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Quality Troubleshooting',
      icon: '/Icons/modifier.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Eliminating Noise',
          description: 'Get clean renders efficiently',
          icon: '/Icons/render.svg',
          detailedInfo: {
            overview: 'Noise/grain in renders means insufficient samples or problematic lighting. Multiple strategies to eliminate noise while minimizing render time.',
            pages: [
              {
                title: 'Denoising First',
                content: 'Enable denoising before increasing samples. Often solves noise at current sample count. Try OptiX (NVIDIA) or OpenImageDenoise. Can reduce needed samples by 4-8x.',
                image: '/examples/render-denoise-first.mp4'
              },
              {
                title: 'Increase Samples Strategically',
                content: 'If still noisy, double samples until acceptable. 256 noisy? Try 512. Still noisy? 1024. Check specific noise sources (glass, caustics) and increase relevant bounces.',
                image: '/examples/render-samples-increase.mp4'
              },
              {
                title: 'Fix Lighting Issues',
                content: 'Small, bright lights cause noise. Make area lights bigger. Increase world light strength, reduce lamp strength. Well-lit scenes need fewer samples.',
                image: '/examples/render-lighting-noise.mp4'
              },
              {
                title: 'Clamping for Fireflies',
                content: 'Bright noise pixels (fireflies) from caustics/reflections. Set Clamp Indirect to 3-10. Eliminates fireflies without darkening scene significantly.',
                image: '/examples/render-fireflies.mp4'
              }
            ]
          }
        },
        {
          name: 'Dark Renders',
          description: 'Fix under-exposed images',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Dark renders from insufficient lighting or incorrect settings. Multiple solutions from lighting adjustments to color management.',
            pages: [
              {
                title: 'Check Lighting',
                content: 'Add lights or increase strength. World lighting (HDRI) provides base illumination. Interior scenes need multiple light sources. Check lights aren\'t blocked.',
                image: '/examples/render-dark-lighting.mp4'
              },
              {
                title: 'Increase Bounces',
                content: 'Low bounce counts darken indirect lighting. Increase Diffuse bounces to 6-8 for interiors. More bounces = brighter ambient lighting from light bouncing around.',
                image: '/examples/render-dark-bounces.mp4'
              },
              {
                title: 'Exposure Adjustment',
                content: 'Quick fix: increase Exposure in Color Management (+0.5 to +2.0). Brightens entire render without changing lights. Good for final tweaking.',
                image: '/examples/render-dark-exposure.mp4'
              },
              {
                title: 'Filmic View Transform',
                content: 'Switch to Filmic if using Standard. Filmic better handles bright lights and can make scenes appear brighter with better contrast.',
                image: '/examples/render-dark-filmic.mp4'
              }
            ]
          }
        },
        {
          name: 'Bright/Blown Out Renders',
          description: 'Fix over-exposed images',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Over-exposed renders show white blown-out areas with no detail. Caused by excessive lighting or incorrect color management.',
            pages: [
              {
                title: 'Reduce Light Strength',
                content: 'Lower light power values. Sun/sky too bright? Reduce HDRI strength. Individual lights too strong? Decrease wattage. Aim for balanced lighting.',
                image: '/examples/render-bright-lights.mp4'
              },
              {
                title: 'Use Filmic',
                content: 'Filmic View Transform handles bright values better than Standard. Compresses highlights naturally, preventing blown-out whites. Essential for realistic lighting.',
                image: '/examples/render-bright-filmic.mp4'
              },
              {
                title: 'Exposure Control',
                content: 'Decrease Exposure in Color Management (-0.5 to -2.0). Quick overall darkening. Combined with Filmic Look (High Contrast) for best control.',
                image: '/examples/render-bright-exposure.mp4'
              }
            ]
          }
        },
        {
          name: 'Long Render Times',
          description: 'Optimize without quality loss',
          icon: '/Icons/time.svg',
          detailedInfo: {
            overview: 'Renders taking too long need optimization. Multiple strategies to reduce time while maintaining quality. Often can cut render time by 50-80%.',
            pages: [
              {
                title: 'Enable GPU Rendering',
                content: 'If using CPU, switch to GPU (Preferences > System > Cycles Render Devices). NVIDIA OptiX typically 5-10x faster than CPU for most scenes.',
                image: '/examples/render-time-gpu.mp4'
              },
              {
                title: 'Adaptive Sampling',
                content: 'Enable Adaptive Sampling if not already on. Stops calculating clean pixels early. Can reduce render time 30-50% with no quality loss.',
                image: '/examples/render-time-adaptive.mp4'
              },
              {
                title: 'Reduce Samples',
                content: 'Halve samples, enable denoising. Often looks identical but renders 2x faster. 4096 samples without denoise ≈ 1024 samples with denoise.',
                image: '/examples/render-time-samples.mp4'
              },
              {
                title: 'Lower Bounces',
                content: 'Reduce bounce counts. Outdoor/simple scenes: 6-8 total bounces sufficient. Only interiors with complex GI need 12 bounces.',
                image: '/examples/render-time-bounces.mp4'
              },
              {
                title: 'Simplify Settings',
                content: 'Use Simplify panel. Lower Max Subdivision to 2-3 for testing. Enable Camera Cull to skip off-camera objects. Disable unused features.',
                image: '/examples/render-time-simplify.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Production Workflows',
      icon: '/Icons/settings.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Animation Render Workflow',
          description: 'Efficient animation rendering',
          icon: '/Icons/time.svg',
          detailedInfo: {
            overview: 'Animation rendering requires special workflow. Test individual frames, render sequences, handle failures. Proper workflow saves massive time.',
            pages: [
              {
                title: 'Test Frame Selection',
                content: 'Test render frames at beginning, middle, end of animation. Ensures consistent quality throughout. Check fastest motion frame (most blur) for sample needs.',
                image: '/examples/render-anim-test.mp4'
              },
              {
                title: 'Render to Image Sequence',
                content: 'ALWAYS render animations as image sequences (PNG/EXR), never directly to video. If render crashes, resume from last frame. Video files corrupt if interrupted.',
                image: '/examples/render-anim-sequence.mp4'
              },
              {
                title: 'Encoding After Render',
                content: 'After sequence completes, encode to video using Video Editing workspace or external encoder (FFmpeg, HandBrake). Can re-encode without re-rendering.',
                image: '/examples/render-anim-encode.mp4'
              },
              {
                title: 'Placeholder Renders',
                content: 'Render low-quality sequence first (low samples/resolution) for timing/animation check. Fix issues, then render final quality. Saves wasting time on bad animations.',
                image: '/examples/render-anim-placeholder.mp4'
              }
            ]
          }
        },
        {
          name: 'Render Queue Management',
          description: 'Batch render multiple files',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'Queue multiple .blend files to render overnight. Command line rendering or batch scripts let you render several files automatically.',
            pages: [
              {
                title: 'Command Line Rendering',
                content: 'Use Blender command line: blender -b file.blend -a (render animation) or -f 1 (render frame 1). Run from terminal/command prompt. Renders without UI.',
                image: '/examples/render-command-line.mp4'
              },
              {
                title: 'Batch Scripts',
                content: 'Create .bat (Windows) or .sh (Linux/Mac) scripts to render multiple files sequentially. Set up before bed, wake up to finished renders.',
                image: '/examples/render-batch-script.mp4'
              }
            ]
          }
        },
        {
          name: 'Version Control',
          description: 'Manage render versions',
          icon: '/Icons/folder.svg',
          detailedInfo: {
            overview: 'Organize renders with clear version numbers and dates. Essential for client revisions and tracking changes. Prevents overwriting previous versions.',
            pages: [
              {
                title: 'Naming Convention',
                content: 'Use descriptive names with versions: ProjectName_Shot01_v001, v002, etc. Include dates: 2025-11-02. Clear naming prevents confusion and lost work.',
                image: '/examples/render-naming.mp4'
              },
              {
                title: 'Folder Structure',
                content: 'Organize: project/renders/shot01/v001/, v002/, final/. Keep iterations separate. Archive old versions, never delete. Storage is cheap, re-renders are expensive.',
                image: '/examples/render-folders.mp4'
              }
            ]
          }
        },
        {
          name: 'Render Checkpoints',
          description: 'Save progress during long renders',
          icon: '/Icons/time.svg',
          detailedInfo: {
            overview: 'For very long renders, save intermediate results. If computer crashes, don\'t lose everything. Checkpoint system provides safety net.',
            pages: [
              {
                title: 'Frame Checkpoints',
                content: 'Animation rendering saves each frame automatically. If crash, resume from last completed frame. Image sequences provide automatic checkpointing.',
                image: '/examples/render-checkpoints.mp4'
              },
              {
                title: 'Render Passes',
                content: 'For still images, render passes separately if render takes hours. Combine in compositor. If one pass fails, only re-render that pass.',
                image: '/examples/render-pass-checkpoint.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Optimize a Scene', 
      desc: 'Take a slow render and make it 10x faster',
      duration: '25 min', 
      difficulty: 'Beginner',
      skills: ['Samples', 'Denoising', 'Simplify', 'Resolution %']
    },
    { 
      title: 'Render Multi-Pass Composite', 
      desc: 'Create a render with separate passes for compositing',
      duration: '35 min', 
      difficulty: 'Intermediate',
      skills: ['Render Passes', 'View Layers', 'Cryptomatte', 'EXR Format']
    },
    { 
      title: 'Animation Render Pipeline', 
      desc: 'Set up and render a complete animation sequence',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['Frame Range', 'Image Sequence', 'Motion Blur', 'Video Encoding']
    },
    { 
      title: 'Production Quality Render', 
      desc: 'Balance quality and time for client-ready output',
      duration: '60 min', 
      difficulty: 'Advanced',
      skills: ['All Settings', 'Color Management', 'Quality Control', 'Batch Rendering']
    }
  ]
}