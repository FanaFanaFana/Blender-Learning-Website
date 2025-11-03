export const sculptingLessonData = {

  heroConfig: {
    title: 'Sculpting',
    gradientText: 'Mode',
    subtitle: 'Learn the art of digital sculpting and bring your organic creations to life',
    gradientColors: 'linear-gradient(135deg, #ec4899, #f43f5e, #fb923c)',
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/brush.svg', title: '30+ Brushes', subtitle: 'Essential tools' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/brush.sculpt.paint.svg', label: 'Sculpting Brushes' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#ec4899',

  overviewCards: [
    {
      icon: '/Icons/brush.sculpt.paint.svg',
      title: 'Digital Clay',
      content: 'Sculpting in Blender is like working with digital clay. Push, pull, smooth, and carve your mesh with intuitive brush strokes. Unlike traditional modeling, sculpting lets you shape forms organically and naturally.'
    },
    {
      icon: '/Icons/mesh_icosphere.svg',
      title: 'Dynamic Topology',
      content: 'Dyntopo (Dynamic Topology) automatically adds geometry where you need it. Sculpt freely without worrying about polygon count - Blender adds detail as you work, letting you focus purely on the artistic side.'
    },
    {
      icon: '/Icons/modifier.svg',
      title: 'Multiresolution Workflow',
      content: 'Use Multiresolution modifier to switch between detail levels. Sculpt fine details at high resolution while keeping a clean base mesh for animation. The best of both worlds for production-ready models.'
    }
  ],

   contentTitle: 'Sculpting Tools & Techniques',
   contentDescription: 'Master the brushes and workflows for digital sculpting',

  categories: [
    {
      name: 'Basic Brushes',
      icon: '/Icons/brush.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Blob',
          description: 'Push geometry like thick paint',
          icon: '/Icons/blob.png',
          detailedInfo: {
            overview: 'Blob moves vertices with a specific falloff, creating thick, paint-like strokes. Combines aspects of Draw and Inflate for unique organic effects.',
            pages: [
              {
                title: 'Thick Strokes',
                content: 'Blob creates volumetric, paint-like strokes. Great for organic masses, tree bark texture, or rough terrain. Strength controls how much material builds up.',
                image: '/examples/sculpt-blob-paint.mp4'
              }
            ]
          }
        },
        {
          name: 'Clay',
          description: 'Build up volume naturally',
          icon: '/Icons/clay.png',
          detailedInfo: {
            overview: 'Clay brush simulates working with actual clay. It builds up material in a flatter, more stable way than Draw, perfect for establishing basic forms.',
            pages: [
              {
                title: 'Building Forms',
                content: 'Clay brush adds material with a flattened profile, making it easier to build stable forms. Great for blocking out major shapes and anatomy.',
                image: '/examples/sculpt-clay-building.mp4'
              }
            ]
          }
        },
        {
          name: 'Clay Strips',
          description: 'Create ribbon-like strokes',
          icon: '/Icons/claystrips.png',
          detailedInfo: {
            overview: 'Clay Strips creates ribbon-like strokes with clear edges, perfect for defining muscle groups and organic forms with distinct separation.',
            pages: [
              {
                title: 'Muscle Definition',
                content: 'Clay Strips creates distinctive ribbon strokes. Perfect for defining muscle groups and creating clear form separation.',
                image: '/examples/sculpt-claystrips.mp4'
              }
            ]
          }
        },
        {
          name: 'Clay Thumb',
          description: 'Thumb-like impressions',
          icon: '/Icons/claythumb.png',
          detailedInfo: {
            overview: 'Clay Thumb simulates pushing with your thumb, creating smooth depressions and natural finger-like marks.',
            pages: [
              {
                title: 'Thumb Impressions',
                content: 'Creates smooth, thumb-like depressions. Great for organic dents and subtle surface variations.',
                image: '/examples/sculpt-claythumb.mp4'
              }
            ]
          }
        },
        {
          name: 'Crease Polish',
          description: 'Smooth and polish creases',
          icon: '/Icons/creasepolish.png',
          detailedInfo: {
            overview: 'Crease Polish smooths and refines existing creases while maintaining their definition.',
            pages: [
              {
                title: 'Polishing Creases',
                content: 'Smooths creases without losing their definition. Perfect for refining hard surface details and panel lines.',
                image: '/examples/sculpt-creasepolish.mp4'
              }
            ]
          }
        },
        {
          name: 'Crease Sharp',
          description: 'Create sharp, defined creases',
          icon: '/Icons/creasesharp.png',
          detailedInfo: {
            overview: 'Crease Sharp creates extremely sharp, defined creases with hard edges for mechanical details.',
            pages: [
              {
                title: 'Sharp Creases',
                content: 'Creates ultra-sharp creases for hard surface work. Ideal for mechanical edges and armor details.',
                image: '/examples/sculpt-creasesharp.mp4'
              }
            ]
          }
        },
        {
          name: 'Draw',
          description: 'Pull geometry outward',
          icon: '/Icons/draw.png',
          detailedInfo: {
            overview: 'The Draw brush is your primary sculpting tool. It pulls the surface outward in the direction of the surface normal, perfect for building up forms and adding volume.',
            pages: [
              {
                title: 'Basic Drawing',
                content: 'Left-click and drag to pull geometry outward. Hold Ctrl to invert and push inward (carving). Adjust brush size with F key, strength with Shift+F.',
                image: '/examples/sculpt-draw-basic.mp4'
              },
              {
                title: 'Stroke Settings',
                content: 'Use Space stroke method for smooth, continuous strokes. Dots method creates textured surfaces. Adjust spacing for different effects.',
                image: '/examples/sculpt-draw-strokes.mp4'
              }
            ]
          }
        },
        {
          name: 'Draw Sharp',
          description: 'Create defined edges and creases',
          icon: '/Icons/drawsharp.png',
          detailedInfo: {
            overview: 'Draw Sharp creates hard, defined edges and creases. Essential for mechanical details, armor plates, or any feature that needs sharp definition.',
            pages: [
              {
                title: 'Creating Sharp Features',
                content: 'Draw Sharp maintains hard edges unlike the regular Draw brush. Perfect for stylized characters, hard surface elements, or creating panel lines.',
                image: '/examples/sculpt-drawsharp-edges.mp4'
              }
            ]
          }
        },
        {
          name: 'Inflate',
          description: 'Expand surfaces uniformly',
          icon: '/Icons/inflate.png',
          detailedInfo: {
            overview: 'Inflate pushes the surface outward in all directions, creating a bloated or expanded effect. Great for organic swelling or cushioned surfaces.',
            pages: [
              {
                title: 'Uniform Expansion',
                content: 'Inflate expands forms evenly in all directions. Use for puffy clothing, fat deposits, or organic bulges. Ctrl inverts to deflate.',
                image: '/examples/sculpt-inflate-expand.mp4'
              }
            ]
          }
        },
        {
          name: 'Layer',
          description: 'Add controlled height layers',
          icon: '/Icons/layer.png',
          detailedInfo: {
            overview: 'Layer brush adds material up to a specific height. Unlike other brushes, it won\'t keep building infinitely - perfect for creating even, controlled surfaces.',
            pages: [
              {
                title: 'Height Control',
                content: 'Layer brush maintains consistent height, preventing excessive buildup. Ideal for armor plates, scales, or any element needing uniform thickness.',
                image: '/examples/sculpt-layer-height.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Smoothing & Refinement',
      icon: '/Icons/modifier.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Fill',
          description: 'Fill holes and valleys',
          icon: '/Icons/fill.png',
          detailedInfo: {
            overview: 'Fill raises low areas toward a flat plane, perfect for filling unwanted holes or smoothing valleys.',
            pages: [
              {
                title: 'Filling Cavities',
                content: 'Fill raises low areas to create even surfaces. Perfect for cleaning up unwanted indentations.',
                image: '/examples/sculpt-fill-cavity.mp4'
              }
            ]
          }
        },
        {
          name: 'Flatten',
          description: 'Create flat, even surfaces',
          icon: '/Icons/flatten.png',
          detailedInfo: {
            overview: 'Flatten creates planar surfaces by averaging the height of vertices. Perfect for hard surface elements or cleaning up flat areas.',
            pages: [
              {
                title: 'Planar Surfaces',
                content: 'Flatten calculates an average plane and pushes vertices toward it. Great for armor plates, walls, or any flat architectural element.',
                image: '/examples/sculpt-flatten-plane.mp4'
              }
            ]
          }
        },
        {
          name: 'Plateau',
          description: 'Create plateau-like flat tops',
          icon: '/Icons/plateau.png',
          detailedInfo: {
            overview: 'Plateau creates flat top surfaces while preserving valleys, like creating mesa formations.',
            pages: [
              {
                title: 'Flat Top Surfaces',
                content: 'Creates flat plateaus on raised areas. Perfect for stylized forms and architectural elements.',
                image: '/examples/sculpt-plateau.mp4'
              }
            ]
          }
        },
        {
          name: 'Scrape Multiplane',
          description: 'Create sharp edges',
          icon: '/Icons/multiplane.png',
          detailedInfo: {
            overview: 'Scrape with two angled planes to create sharp edges between surfaces, like a V-shaped chisel.',
            pages: [
              {
                title: 'Sharp Edges',
                content: 'Creates sharp edges between two planes. Perfect for stylized creases and mechanical edges.',
                image: '/examples/sculpt-multiplane-edge.mp4'
              }
            ]
          }
        },
        {
          name: 'Scrape',
          description: 'Remove material from peaks',
          icon: '/Icons/scrape.png',
          detailedInfo: {
            overview: 'Scrape removes high points while preserving valleys, like scraping excess clay. Essential for creating clean, refined surfaces.',
            pages: [
              {
                title: 'Peak Removal',
                content: 'Scrape targets high areas, leaving valleys intact. Perfect for refining forms after rough blocking. Ctrl inverts to peak instead.',
                image: '/examples/sculpt-scrape-peaks.mp4'
              }
            ]
          }
        },
        {
          name: 'Smooth',
          description: 'Average out surface irregularities',
          icon: '/Icons/smooth.png',
          detailedInfo: {
            overview: 'Smooth averages vertex positions to create softer transitions. Essential for refining your sculpt and removing unwanted bumps or artifacts.',
            pages: [
              {
                title: 'Surface Refinement',
                content: 'Hold Shift to temporarily activate Smooth brush. Use it constantly while sculpting to maintain clean transitions and remove noise.',
                image: '/examples/sculpt-smooth-refine.mp4'
              },
              {
                title: 'Smooth Strength',
                content: 'Lower strength for subtle smoothing, higher for aggressive flattening. Use with low strength for final polish, high strength to fix mistakes.',
                image: '/examples/sculpt-smooth-strength.mp4'
              }
            ]
          }
        },
        {
          name: 'Trim',
          description: 'Dynamic boolean trimming',
          icon: '/Icons/trim.png',
          detailedInfo: {
            overview: 'Trim dynamically removes geometry using drawn shapes for precise cutting and sculpting operations.',
            pages: [
              {
                title: 'Dynamic Trimming',
                content: 'Draw shapes to trim away geometry. More flexible than Box Trim with freeform cutting options.',
                image: '/examples/sculpt-trim.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Deformation',
      icon: '/Icons/transform.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Boundary',
          description: 'Deform mesh boundaries',
          icon: '/Icons/boundary.png',
          detailedInfo: {
            overview: 'Boundary brush manipulates open mesh edges and boundaries with various deformation modes.',
            pages: [
              {
                title: 'Edge Control',
                content: 'Specialized for transforming mesh boundaries. Multiple deformation modes for edge manipulation.',
                image: '/examples/sculpt-boundary.mp4'
              }
            ]
          }
        },
        {
          name: 'Elastic Grab',
          description: 'Grab with elastic deformation',
          icon: '/Icons/elasticgrab.png',
          detailedInfo: {
            overview: 'Elastic Grab is Grab with smooth elastic falloff, creating realistic rubber-like deformations.',
            pages: [
              {
                title: 'Elastic Movement',
                content: 'Creates smooth, elastic deformations. Better for organic forms than regular Grab.',
                image: '/examples/sculpt-elasticgrab.mp4'
              }
            ]
          }
        },
        {
          name: 'Elastic Snake Hook',
          description: 'Pull with elastic behavior',
          icon: '/Icons/elasticsnakehook.png',
          detailedInfo: {
            overview: 'Snake Hook with elastic deformation for smoother, more natural pulling of elongated forms.',
            pages: [
              {
                title: 'Elastic Pulling',
                content: 'Pulls geometry with elastic behavior for more natural organic extensions.',
                image: '/examples/sculpt-elasticsnakehook.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab',
          description: 'Move large areas freely',
          icon: '/Icons/grab.png',
          detailedInfo: {
            overview: 'Grab moves all vertices within the brush radius together. Essential for repositioning forms, adjusting proportions, or making broad changes.',
            pages: [
              {
                title: 'Form Manipulation',
                content: 'Grab is like grabbing physical clay and moving it. Perfect for adjusting silhouettes, proportions, or repositioning major features.',
                image: '/examples/sculpt-grab-move.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab 2D',
          description: 'Grab constrained to view plane',
          icon: '/Icons/grab2d.png',
          detailedInfo: {
            overview: 'Grabs and moves geometry constrained to the 2D view plane, giving precise control over movement direction.',
            pages: [
              {
                title: '2D Movement',
                content: 'Movement constrained to screen space. Perfect for precise adjustments without depth changes.',
                image: '/examples/sculpt-grab2d.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab Silhouette',
          description: 'Grab along view silhouette',
          icon: '/Icons/grabsilhouette.png',
          detailedInfo: {
            overview: 'Grabs geometry along the silhouette edge from the current view angle, perfect for refining shapes and profiles.',
            pages: [
              {
                title: 'Silhouette Control',
                content: 'Grab affects only the silhouette from your view. Perfect for refining shapes and character profiles.',
                image: '/examples/sculpt-grabsilhouette.mp4'
              }
            ]
          }
        },
        {
          name: 'Nudge',
          description: 'Smear geometry directionally',
          icon: '/Icons/nudge.png',
          detailedInfo: {
            overview: 'Nudge moves vertices in the direction of your stroke, like smearing wet clay. Perfect for adjusting flows and creating directional surface features.',
            pages: [
              {
                title: 'Directional Smearing',
                content: 'Nudge follows your stroke direction, moving surface detail along your path. Great for adjusting muscle flows or creating directional patterns.',
                image: '/examples/sculpt-nudge-smear.mp4'
              }
            ]
          }
        },
        {
          name: 'Pinch',
          description: 'Pull vertices together',
          icon: '/Icons/pinch.png',
          detailedInfo: {
            overview: 'Pinch pulls vertices toward the center of the brush, sharpening edges and creating tight, defined features.',
            pages: [
              {
                title: 'Edge Sharpening',
                content: 'Pinch tightens forms and sharpens edges. Use along ridges to make them more pronounced. Great for noses, ears, and bony protrusions.',
                image: '/examples/sculpt-pinch-sharpen.mp4'
              }
            ]
          }
        },
        {
          name: 'Pose',
          description: 'Pose without rigging',
          icon: '/Icons/pose.png',
          detailedInfo: {
            overview: 'Pose brush creates automatic IK chains for posing without armatures. Revolutionary for quick character poses.',
            pages: [
              {
                title: 'Auto-IK Posing',
                content: 'Pose creates automatic bone chains, letting you pose characters without rigging. Perfect for quick iterations.',
                image: '/examples/sculpt-pose-ik.mp4'
              }
            ]
          }
        },
        {
          name: 'Pull',
          description: 'Pull surfaces outward strongly',
          icon: '/Icons/pull.png',
          detailedInfo: {
            overview: 'Pull aggressively pulls geometry outward with strong directional force.',
            pages: [
              {
                title: 'Strong Pulling',
                content: 'Creates strong outward pulling motions. Great for dramatic form changes and extrusions.',
                image: '/examples/sculpt-pull.mp4'
              }
            ]
          }
        },
        {
          name: 'Relax Pinch',
          description: 'Relax with pinch component',
          icon: '/Icons/relaxpinch.png',
          detailedInfo: {
            overview: 'Relaxes surface tension while subtly pinching for controlled smoothing with edge preservation.',
            pages: [
              {
                title: 'Controlled Relaxation',
                content: 'Relaxes surfaces while maintaining some edge definition through pinching.',
                image: '/examples/sculpt-relaxpinch.mp4'
              }
            ]
          }
        },
        {
          name: 'Relax Slide',
          description: 'Slide vertices to relax tension',
          icon: '/Icons/relaxslide.png',
          detailedInfo: {
            overview: 'Slides vertices along the surface to relax tension and even out polygon distribution.',
            pages: [
              {
                title: 'Surface Relaxation',
                content: 'Slides vertices to relax surface tension and improve polygon flow.',
                image: '/examples/sculpt-relaxslide.mp4'
              }
            ]
          }
        },
        {
          name: 'Snake Hook',
          description: 'Pull out elongated forms',
          icon: '/Icons/snakehook.png',
          detailedInfo: {
            overview: 'Snake Hook pulls geometry outward while maintaining volume, perfect for creating tentacles, horns, fingers, or any elongated appendage.',
            pages: [
              {
                title: 'Pulling Forms',
                content: 'Snake Hook extends geometry while keeping volume consistent. Drag to pull out horns, spikes, tentacles, or any protruding element.',
                image: '/examples/sculpt-snakehook-pull.mp4'
              },
              {
                title: 'Magnify Option',
                content: 'Enable Magnify for volumetric pulling that maintains thickness. Disable for flatter, ribbon-like extrusions.',
                image: '/examples/sculpt-snakehook-magnify.mp4'
              }
            ]
          }
        },
        {
          name: 'Thumb',
          description: 'Small localized movements',
          icon: '/Icons/thumb.png',
          detailedInfo: {
            overview: 'Thumb creates small, focused movements like pushing with your thumb. More precise than Nudge.',
            pages: [
              {
                title: 'Precise Pushing',
                content: 'Creates subtle, thumb-like pushes. Perfect for small adjustments and detail work.',
                image: '/examples/sculpt-thumb.mp4'
              }
            ]
          }
        },
        {
          name: 'Twist',
          description: 'Twist vertices around center',
          icon: '/Icons/twist.png',
          detailedInfo: {
            overview: 'Twist rotates vertices around the brush center in a twisting motion.',
            pages: [
              {
                title: 'Twisting Motion',
                content: 'Twists geometry around the brush center. Great for spiral patterns and rotational effects.',
                image: '/examples/sculpt-twist.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detail & Texture',
      icon: '/Icons/texture.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Density',
          description: 'Control mesh density',
          icon: '/Icons/density.png',
          detailedInfo: {
            overview: 'Density brush controls the concentration of geometry in painted areas.',
            pages: [
              {
                title: 'Geometry Density',
                content: 'Paint to increase or decrease mesh density in specific areas.',
                image: '/examples/sculpt-density.mp4'
              }
            ]
          }
        },
        {
          name: 'Erase Multires Displacement',
          description: 'Create displacement creases',
          icon: '/Icons/erasemultiresdisplacement.png',
          detailedInfo: {
            overview: 'Creates creases specifically for multiresolution displacement workflows.',
            pages: [
              {
                title: 'Multires Creasing',
                content: 'Creates sharp creases that work well with multiresolution displacement maps.',
                image: '/examples/sculpt-creasemultires.mp4'
              }
            ]
          }
        },
        {
          name: 'Face Set Paint',
          description: 'Paint face sets',
          icon: '/Icons/faceset.png',
          detailedInfo: {
            overview: 'Paint face sets to organize your mesh into colored sections for better workflow control.',
            pages: [
              {
                title: 'Face Set Painting',
                content: 'Paint to create and organize face sets. Each set gets a unique color for easy identification.',
                image: '/examples/sculpt-faceset-paint.mp4'
              }
            ]
          }
        },
        {
          name: 'Mask',
          description: 'Protect areas from editing',
          icon: '/Icons/mask.png',
          detailedInfo: {
            overview: 'Mask protects areas from being modified by other brushes. Essential for isolating work areas and preserving finished details.',
            pages: [
              {
                title: 'Masking Basics',
                content: 'Paint to mask areas (darken). Ctrl+Paint to unmask. Alt+Click to clear all masks. Masked areas are protected from all brush strokes.',
                image: '/examples/sculpt-mask-paint.mp4'
              },
              {
                title: 'Mask Operations',
                content: 'Use Mask menu (A key) for box mask, lasso mask, or mask by cavity. Ctrl+I inverts mask. Essential for controlled sculpting.',
                image: '/examples/sculpt-mask-operations.mp4'
              }
            ]
          }
        },
        {
          name: 'Smear Multires Displacement',
          description: 'Smear displacement details',
          icon: '/Icons/smearmultiresdisplacement.png',
          detailedInfo: {
            overview: 'Smears multiresolution displacement details for blended transitions.',
            pages: [
              {
                title: 'Displacement Smearing',
                content: 'Blends and smears displacement map details in multiresolution workflows.',
                image: '/examples/sculpt-smearmultires.mp4'
              }
            ]
          }
        },
        {
          name: 'Airbrush',
          description: 'Spray paint colors',
          icon: '/Icons/airbrush.png',
          detailedInfo: {
            overview: 'Airbrush applies colors with soft, gradual falloff like spray paint.',
            pages: [
              {
                title: 'Spray Painting',
                content: 'Creates soft, gradual color application. Perfect for smooth color transitions and gradients.',
                image: '/examples/sculpt-airbrush.mp4'
              }
            ]
          }
        },
        {
          name: 'Blend Hard',
          description: 'Hard color blending',
          icon: '/Icons/blendhard.png',
          detailedInfo: {
            overview: 'Blends colors with hard edges for defined color transitions.',
            pages: [
              {
                title: 'Hard Blending',
                content: 'Blends colors while maintaining harder edges for more defined transitions.',
                image: '/examples/sculpt-blendhard.mp4'
              }
            ]
          }
        },
        {
          name: 'Blend Soft',
          description: 'Soft color blending',
          icon: '/Icons/blendsoft.png',
          detailedInfo: {
            overview: 'Blends colors with soft, gradual transitions.',
            pages: [
              {
                title: 'Soft Blending',
                content: 'Creates gentle color transitions. Perfect for subtle color variations.',
                image: '/examples/sculpt-blendsoft.mp4'
              }
            ]
          }
        },
        {
          name: 'Blend Square',
          description: 'Square-shaped color blending',
          icon: '/Icons/blendsquare.png',
          detailedInfo: {
            overview: 'Blends colors using a square brush shape for geometric blending patterns.',
            pages: [
              {
                title: 'Square Blending',
                content: 'Uses square brush shape for geometric color blending effects.',
                image: '/examples/sculpt-blendsquare.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Blend',
          description: 'Paint with blending',
          icon: '/Icons/paintblend.png',
          detailedInfo: {
            overview: 'Paints colors while blending with existing colors.',
            pages: [
              {
                title: 'Blended Painting',
                content: 'Paints while automatically blending with underlying colors.',
                image: '/examples/sculpt-paintblend.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Hard',
          description: 'Hard-edged painting',
          icon: '/Icons/painthard.png',
          detailedInfo: {
            overview: 'Paints colors with hard, defined edges.',
            pages: [
              {
                title: 'Hard Edge Painting',
                content: 'Creates sharp, defined color edges. Perfect for precise color work.',
                image: '/examples/sculpt-painthard.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Hard Pressure',
          description: 'Pressure-sensitive hard painting',
          icon: '/Icons/painthardpressure.png',
          detailedInfo: {
            overview: 'Hard-edged painting with pen pressure sensitivity.',
            pages: [
              {
                title: 'Pressure Hard Painting',
                content: 'Hard edge painting that responds to pen pressure for variable intensity.',
                image: '/examples/sculpt-painthardpressure.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Soft',
          description: 'Soft-edged painting',
          icon: '/Icons/paintsoft.png',
          detailedInfo: {
            overview: 'Paints colors with soft, feathered edges.',
            pages: [
              {
                title: 'Soft Edge Painting',
                content: 'Creates soft, gradual color transitions. Great for organic painting.',
                image: '/examples/sculpt-paintsoft.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Soft Pressure',
          description: 'Pressure-sensitive soft painting',
          icon: '/Icons/paintsoftpressure.png',
          detailedInfo: {
            overview: 'Soft-edged painting with pen pressure sensitivity.',
            pages: [
              {
                title: 'Pressure Soft Painting',
                content: 'Soft painting that responds to pen pressure for natural color application.',
                image: '/examples/sculpt-paintsoftpressure.mp4'
              }
            ]
          }
        },
        {
          name: 'Paint Square',
          description: 'Square brush painting',
          icon: '/Icons/paintsquare.png',
          detailedInfo: {
            overview: 'Paints colors using a square brush shape.',
            pages: [
              {
                title: 'Square Painting',
                content: 'Uses square brush shape for geometric painting patterns.',
                image: '/examples/sculpt-paintsquare.mp4'
              }
            ]
          }
        },
        {
          name: 'Sharpen',
          description: 'Increase color contrast',
          icon: '/Icons/sharpen.png',
          detailedInfo: {
            overview: 'Sharpens color transitions and increases local contrast.',
            pages: [
              {
                title: 'Color Sharpening',
                content: 'Increases contrast between colors for sharper, more defined color work.',
                image: '/examples/sculpt-sharpen.mp4'
              }
            ]
          }
        },
        {
          name: 'Smear',
          description: 'Blend and smear colors',
          icon: '/Icons/smear.png',
          detailedInfo: {
            overview: 'Smear blends existing vertex colors for smooth color transitions.',
            pages: [
              {
                title: 'Color Blending',
                content: 'Blends and spreads colors across the surface for soft transitions.',
                image: '/examples/sculpt-smear.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Cloth Simulation',
      icon: '/Icons/mod_cloth.svg',
      color: '#10b981',
      items: [
        {
          name: 'Bend Boundary Cloth',
          description: 'Bend fabric edges',
          icon: '/Icons/bendboundarycloth.png',
          detailedInfo: {
            overview: 'Bends fabric at boundaries and edges with cloth simulation for edge folding effects.',
            pages: [
              {
                title: 'Edge Bending',
                content: 'Bends fabric at boundaries. Great for hem folds, edge details, and boundary manipulation.',
                image: '/examples/sculpt-bendboundarycloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Bend Cloth',
          description: 'Bend fabric surfaces',
          icon: '/Icons/bendcloth.png',
          detailedInfo: {
            overview: 'Bends fabric with cloth simulation for curved folds and natural draping.',
            pages: [
              {
                title: 'Fabric Bending',
                content: 'Creates curved bends in fabric. Perfect for natural draping and curved folds.',
                image: '/examples/sculpt-bendcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Drag Cloth',
          description: 'Drag fabric with simulation',
          icon: '/Icons/dragcloth.png',
          detailedInfo: {
            overview: 'Drags fabric across the surface with realistic cloth physics and natural folding.',
            pages: [
              {
                title: 'Fabric Dragging',
                content: 'Drags fabric across surfaces creating natural folds and wrinkles as you move.',
                image: '/examples/sculpt-dragcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Expand Cloth',
          description: 'Expand fabric outward',
          icon: '/Icons/expandcloth.png',
          detailedInfo: {
            overview: 'Expands cloth geometry outward with simulation for natural fabric stretching and billowing effects.',
            pages: [
              {
                title: 'Fabric Expansion',
                content: 'Creates outward expansion with cloth physics. Perfect for billowing or wind-blown fabric.',
                image: '/examples/sculpt-expandcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab Cloth',
          description: 'Grab with cloth simulation',
          icon: '/Icons/grabcloth.png',
          detailedInfo: {
            overview: 'Combines grabbing with cloth simulation for natural fabric manipulation and realistic folds.',
            pages: [
              {
                title: 'Fabric Grabbing',
                content: 'Grab and move fabric with realistic cloth behavior. Creates natural folds as you manipulate.',
                image: '/examples/sculpt-grabcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab Planar Cloth',
          description: 'Planar grab with cloth physics',
          icon: '/Icons/grabplanarcloth.png',
          detailedInfo: {
            overview: 'Grabs and moves fabric along a plane with cloth simulation for controlled directional manipulation.',
            pages: [
              {
                title: 'Planar Fabric Movement',
                content: 'Grab and move fabric along a constrained plane. Perfect for adjusting fabric flow directionally.',
                image: '/examples/sculpt-grabplanarcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab Random Cloth',
          description: 'Random grab with cloth physics',
          icon: '/Icons/grabrandomcloth.png',
          detailedInfo: {
            overview: 'Grabs fabric with randomized motion for natural, irregular cloth deformation.',
            pages: [
              {
                title: 'Random Fabric Movement',
                content: 'Creates random, natural-looking fabric deformation. Great for organic, irregular wrinkles.',
                image: '/examples/sculpt-grabrandomcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Inflate Cloth',
          description: 'Inflate with cloth simulation',
          icon: '/Icons/inflatecloth.png',
          detailedInfo: {
            overview: 'Inflates fabric uniformly while maintaining cloth behavior for puffy, cushioned effects.',
            pages: [
              {
                title: 'Fabric Inflation',
                content: 'Inflates fabric with realistic cloth behavior. Great for pillows, puffy jackets, or inflated forms.',
                image: '/examples/sculpt-inflatecloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Pinch Folds Cloth',
          description: 'Create pinched fabric folds',
          icon: '/Icons/pinchfoldscloth.png',
          detailedInfo: {
            overview: 'Creates sharp, pinched folds in fabric with cloth simulation for realistic gathered fabric.',
            pages: [
              {
                title: 'Gathered Fabric',
                content: 'Pinches fabric into tight folds. Perfect for gathered seams, cinched fabric, or tight wrinkles.',
                image: '/examples/sculpt-pinchfoldscloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Pinch Point Cloth',
          description: 'Pinch single point with cloth',
          icon: '/Icons/pinchpointcloth.png',
          detailedInfo: {
            overview: 'Pinches fabric to a single point with cloth simulation for concentrated gathering effects.',
            pages: [
              {
                title: 'Point Gathering',
                content: 'Gathers fabric to a single point. Creates natural radial folds from the pinch location.',
                image: '/examples/sculpt-pinchpointcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Push Cloth',
          description: 'Push fabric inward',
          icon: '/Icons/pushcloth.png',
          detailedInfo: {
            overview: 'Pushes fabric inward with cloth simulation for creating indentations and pressed effects.',
            pages: [
              {
                title: 'Fabric Indentation',
                content: 'Pushes fabric inward with realistic wrinkle formation. Great for pressed or compressed areas.',
                image: '/examples/sculpt-pushcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Stretch Cloth',
          description: 'Stretch fabric areas',
          icon: '/Icons/stretchcloth.png',
          detailedInfo: {
            overview: 'Stretches fabric with cloth simulation for tight, pulled fabric effects.',
            pages: [
              {
                title: 'Fabric Stretching',
                content: 'Stretches fabric creating tension and smoothing. Perfect for tight clothing or stretched areas.',
                image: '/examples/sculpt-stretchcloth.mp4'
              }
            ]
          }
        },
        {
          name: 'Twist Boundary Cloth',
          description: 'Twist fabric boundaries',
          icon: '/Icons/twistboundarycloth.png',
          detailedInfo: {
            overview: 'Twists fabric along boundaries with cloth simulation for twisted edge effects.',
            pages: [
              {
                title: 'Boundary Twisting',
                content: 'Twists fabric edges creating spiral effects. Perfect for twisted hems or decorative edges.',
                image: '/examples/sculpt-twistboundarycloth.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  techniques: [
    {
      name: 'Essential Techniques',
      icon: '/Icons/tool.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Dynamic Topology',
          description: 'Auto-add geometry while sculpting',
          icon: '/Icons/mesh_icosphere.svg',
          detailedInfo: {
            overview: 'Dynamic Topology (Dyntopo) automatically adds and removes geometry as you sculpt. Enable it to focus purely on form without worrying about polygon count.',
            pages: [
              {
                title: 'Enabling Dyntopo',
                content: 'Press Ctrl+D to toggle Dyntopo on/off. When active, Blender automatically adds detail where you sculpt and removes it where not needed.',
                image: '/examples/sculpt-dyntopo-enable.mp4'
              },
              {
                title: 'Detail Size',
                content: 'Adjust Detail Size to control resolution. Smaller values = more detail but slower performance. Use R+drag to set detail size interactively.',
                image: '/examples/sculpt-dyntopo-detail.mp4'
              },
              {
                title: 'Detailing Methods',
                content: 'Relative Detail scales with view distance. Constant maintains uniform polygon size. Brush Detail adds geometry only where you sculpt.',
                image: '/examples/sculpt-dyntopo-methods.mp4'
              }
            ]
          }
        },
        {
          name: 'Remesh',
          description: 'Rebuild clean topology',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Remesh rebuilds your mesh with uniform topology. Essential for fixing stretched polygons or creating a clean base for further sculpting.',
            pages: [
              {
                title: 'Voxel Remesh',
                content: 'Press Ctrl+R for quick voxel remesh. Adjust Voxel Size for resolution. Remesh early and often to maintain clean topology.',
                image: '/examples/sculpt-remesh-voxel.mp4'
              },
              {
                title: 'When to Remesh',
                content: 'Remesh when polygons get stretched, after major form changes, or before adding fine detail. Maintains sculptability throughout your process.',
                image: '/examples/sculpt-remesh-timing.mp4'
              }
            ]
          }
        },
        {
          name: 'Symmetry',
          description: 'Mirror your sculpting strokes',
          icon: '/Icons/ops.gpencil.edit_mirror.svg',
          detailedInfo: {
            overview: 'Symmetry mirrors your strokes across chosen axes. Essential for characters and any symmetrical subject, saving time and ensuring balance.',
            pages: [
              {
                title: 'Axis Symmetry',
                content: 'Enable X, Y, or Z axis symmetry in the toolbar. Your strokes automatically mirror across the chosen axis. Toggle on/off as needed.',
                image: '/examples/sculpt-symmetry-axis.mp4'
              },
              {
                title: 'Radial Symmetry',
                content: 'Radial Symmetry repeats strokes in a circular pattern. Perfect for flowers, mechanical parts, or any radially symmetric element.',
                image: '/examples/sculpt-symmetry-radial.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Workflow Tips',
      icon: '/Icons/settings.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Multiresolution Setup',
          description: 'Non-destructive detail workflow',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Multiresolution modifier lets you add detail levels without affecting the base mesh. Perfect for production workflows where you need both detailed sculpts and clean animation topology.',
            pages: [
              {
                title: 'Adding Multires',
                content: 'Add Multiresolution modifier, then Subdivide to add levels. Sculpt at high levels, lower level for animation. Changes propagate between levels.',
                image: '/examples/sculpt-multires-setup.mp4'
              },
              {
                title: 'Level Management',
                content: 'Sculpt level controls active detail. Viewport level controls preview. Render level affects final output. Work at different levels for efficiency.',
                image: '/examples/sculpt-multires-levels.mp4'
              }
            ]
          }
        },
        {
          name: 'Matcap Lighting',
          description: 'Better form visualization',
          icon: '/Icons/shading_rendered.svg',
          detailedInfo: {
            overview: 'Matcaps provide instant studio lighting without setting up lights. Change matcap to see your forms clearly and catch surface issues.',
            pages: [
              {
                title: 'Changing Matcaps',
                content: 'Click matcap preview ball in viewport shading options. Choose matcaps that show form clearly. Bright matcaps for overall form, contrasted ones for detail.',
                image: '/examples/sculpt-matcap-change.mp4'
              }
            ]
          }
        },
        {
          name: 'Cavity Masking',
          description: 'Protect recessed areas',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Cavity masking automatically protects peaks or valleys. Sculpt only raised areas or only recesses without manual masking.',
            pages: [
              {
                title: 'Auto Masking',
                content: 'Enable Cavity in Auto-Masking options. Sculpt affects only peaks or valleys. Great for adding weathering, highlights, or controlled detail.',
                image: '/examples/sculpt-cavity-mask.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Sculpt a Stylized Character Head', 
      desc: 'Learn basic forms and proportions',
      duration: '30 min', 
      difficulty: 'Beginner',
      skills: ['Draw Brush', 'Clay Brush', 'Smooth', 'Dynamic Topology']
    },
    { 
      title: 'Create a Detailed Rock with Texture', 
      desc: 'Master surface detail and weathering',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Crease', 'Pinch', 'Draw Sharp', 'Texture Brushes']
    },
    { 
      title: 'Design an Organic Creature', 
      desc: 'Combine multiple brush techniques',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['Snake Hook', 'Grab', 'Inflate', 'Multiresolution']
    },
    { 
      title: 'Sculpt a Realistic Portrait', 
      desc: 'Advanced anatomy and likeness',
      duration: '90 min', 
      difficulty: 'Advanced',
      skills: ['All Brushes', 'Anatomy', 'Proportions', 'Fine Detail']
    }
  ]
}