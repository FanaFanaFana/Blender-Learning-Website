export const sculptingLessonData = {

 heroConfig : {
    title: 'Sculpting',
    gradientText: 'Basics',
    subtitle: 'Learn the art of digital sculpting and bring your organic creations to life',
    gradientColors: 'linear-gradient(135deg, #ec4899, #f43f5e, #fb923c)', // Pink to orange gradient
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/brush.svg', title: '12+ Brushes', subtitle: 'Essential tools' }
    ]
  },

   tabs : [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'brushes', icon: '/Icons/brush.svg', label: 'Sculpting Brushes' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

   themeColor : '#ec4899',

   overviewCards : [
    {
      icon: '/Icons/brush.svg',
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

   brushCategories : [
    {
      name: 'Basic Brushes',
      icon: '/Icons/brush.svg',
      color: '#ec4899',
      brushes: [
        {
          name: 'Draw',
          description: 'Pull geometry outward',
          icon: '/Icons/brush.sculpt.paint.svg',
          detailedInfo: {
            overview: 'The Draw brush is your primary sculpting tool. It pulls the surface outward in the direction of the surface normal, perfect for building up forms and adding volume.',
            pages: [
              {
                title: 'Basic Drawing',
                content: 'Left-click and drag to pull geometry outward. Hold Ctrl to invert and push inward (carving). Adjust brush size with F key, strength with Shift+F.',
                image: '/examples/sculpt-draw-basic.gif'
              },
              {
                title: 'Stroke Settings',
                content: 'Use Space stroke method for smooth, continuous strokes. Dots method creates textured surfaces. Adjust spacing for different effects.',
                image: '/examples/sculpt-draw-strokes.gif'
              }
            ]
          }
        },
        {
          name: 'Draw Sharp',
          description: 'Create defined edges and creases',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Draw Sharp creates hard, defined edges and creases. Essential for mechanical details, armor plates, or any feature that needs sharp definition.',
            pages: [
              {
                title: 'Creating Sharp Features',
                content: 'Draw Sharp maintains hard edges unlike the regular Draw brush. Perfect for stylized characters, hard surface elements, or creating panel lines.',
                image: '/examples/sculpt-drawsharp-edges.gif'
              }
            ]
          }
        },
        {
          name: 'Clay',
          description: 'Build up volume naturally',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Clay brush simulates working with actual clay. It builds up material in a flatter, more stable way than Draw, perfect for establishing basic forms.',
            pages: [
              {
                title: 'Building Forms',
                content: 'Clay brush adds material with a flattened profile, making it easier to build stable forms. Great for blocking out major shapes and anatomy.',
                image: '/examples/sculpt-clay-building.gif'
              },
              {
                title: 'Clay Strips Variant',
                content: 'Clay Strips creates ribbon-like strokes, perfect for defining muscle groups and organic forms with clear separation.',
                image: '/examples/sculpt-claystrips.gif'
              }
            ]
          }
        },
        {
          name: 'Layer',
          description: 'Add controlled height layers',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Layer brush adds material up to a specific height. Unlike other brushes, it won\'t keep building infinitely - perfect for creating even, controlled surfaces.',
            pages: [
              {
                title: 'Height Control',
                content: 'Layer brush maintains consistent height, preventing excessive buildup. Ideal for armor plates, scales, or any element needing uniform thickness.',
                image: '/examples/sculpt-layer-height.gif'
              }
            ]
          }
        },
        {
          name: 'Inflate',
          description: 'Expand surfaces uniformly',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Inflate pushes the surface outward in all directions, creating a bloated or expanded effect. Great for organic swelling or cushioned surfaces.',
            pages: [
              {
                title: 'Uniform Expansion',
                content: 'Inflate expands forms evenly in all directions. Use for puffy clothing, fat deposits, or organic bulges. Ctrl inverts to deflate.',
                image: '/examples/sculpt-inflate-expand.gif'
              }
            ]
          }
        },
        {
          name: 'Blob',
          description: 'Push geometry like thick paint',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Blob moves vertices with a specific falloff, creating thick, paint-like strokes. Combines aspects of Draw and Inflate for unique organic effects.',
            pages: [
              {
                title: 'Thick Strokes',
                content: 'Blob creates volumetric, paint-like strokes. Great for organic masses, tree bark texture, or rough terrain. Strength controls how much material builds up.',
                image: '/examples/sculpt-blob-paint.gif'
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
      brushes: [
        {
          name: 'Smooth',
          description: 'Average out surface irregularities',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Smooth averages vertex positions to create softer transitions. Essential for refining your sculpt and removing unwanted bumps or artifacts.',
            pages: [
              {
                title: 'Surface Refinement',
                content: 'Hold Shift to temporarily activate Smooth brush. Use it antly while sculpting to maintain clean transitions and remove noise.',
                image: '/examples/sculpt-smooth-refine.gif'
              },
              {
                title: 'Smooth Strength',
                content: 'Lower strength for subtle smoothing, higher for aggressive flattening. Use with low strength for final polish, high strength to fix mistakes.',
                image: '/examples/sculpt-smooth-strength.gif'
              }
            ]
          }
        },
        {
          name: 'Flatten',
          description: 'Create flat, even surfaces',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Flatten creates planar surfaces by averaging the height of vertices. Perfect for hard surface elements or cleaning up flat areas.',
            pages: [
              {
                title: 'Planar Surfaces',
                content: 'Flatten calculates an average plane and pushes vertices toward it. Great for armor plates, walls, or any flat architectural element.',
                image: '/examples/sculpt-flatten-plane.gif'
              }
            ]
          }
        },
        {
          name: 'Scrape',
          description: 'Remove material from peaks',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Scrape removes high points while preserving valleys, like scraping excess clay. Essential for creating clean, refined surfaces.',
            pages: [
              {
                title: 'Peak Removal',
                content: 'Scrape targets high areas, leaving valleys intact. Perfect for refining forms after rough blocking. Ctrl inverts to peak instead.',
                image: '/examples/sculpt-scrape-peaks.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detail & Texture',
      icon: '/Icons/texture.svg',
      color: '#f59e0b',
      brushes: [
        {
          name: 'Crease',
          description: 'Create sharp indented lines',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Crease creates sharp, indented lines in your surface. Essential for wrinkles, panel lines, or any sharp detail that needs to cut into the form.',
            pages: [
              {
                title: 'Sharp Details',
                content: 'Crease pinches vertices together and pushes them inward, creating sharp grooves. Perfect for wrinkles, seams, and mechanical panel separation.',
                image: '/examples/sculpt-crease-lines.gif'
              },
              {
                title: 'Crease vs Pinch',
                content: 'Crease both pinches and indents, while Pinch only brings vertices together. Use Crease for defined cuts, Pinch for sharpening edges.',
                image: '/examples/sculpt-crease-comparison.gif'
              }
            ]
          }
        },
        {
          name: 'Pinch',
          description: 'Pull vertices together',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Pinch pulls vertices toward the center of the brush, sharpening edges and creating tight, defined features without necessarily indenting.',
            pages: [
              {
                title: 'Edge Sharpening',
                content: 'Pinch tightens forms and sharpens edges. Use along ridges to make them more pronounced. Great for noses, ears, and bony protrusions.',
                image: '/examples/sculpt-pinch-sharpen.gif'
              }
            ]
          }
        },
        {
          name: 'Grab',
          description: 'Move large areas freely',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Grab moves all vertices within the brush radius together. Essential for repositioning forms, adjusting proportions, or making broad changes.',
            pages: [
              {
                title: 'Form Manipulation',
                content: 'Grab is like grabbing physical clay and moving it. Perfect for adjusting silhouettes, proportions, or repositioning major features.',
                image: '/examples/sculpt-grab-move.gif'
              },
              {
                title: 'Elastic Deform',
                content: 'Elastic Deform is Grab with falloff - affected vertices stretch smoothly. Better for organic deformations without creating sharp transitions.',
                image: '/examples/sculpt-elastic-deform.gif'
              }
            ]
          }
        },
        {
          name: 'Snake Hook',
          description: 'Pull out elongated forms',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Snake Hook pulls geometry outward while maintaining volume, perfect for creating tentacles, horns, fingers, or any elongated appendage.',
            pages: [
              {
                title: 'Pulling Forms',
                content: 'Snake Hook extends geometry while keeping volume consistent. Drag to pull out horns, spikes, tentacles, or any protruding element.',
                image: '/examples/sculpt-snakehook-pull.gif'
              },
              {
                title: 'Magnify Option',
                content: 'Enable Magnify for volumetric pulling that maintains thickness. Disable for flatter, ribbon-like extrusions.',
                image: '/examples/sculpt-snakehook-magnify.gif'
              }
            ]
          }
        },
        {
          name: 'Nudge',
          description: 'Smear geometry directionally',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Nudge moves vertices in the direction of your stroke, like smearing wet clay. Perfect for adjusting flows and creating directional surface features.',
            pages: [
              {
                title: 'Directional Smearing',
                content: 'Nudge follows your stroke direction, moving surface detail along your path. Great for adjusting muscle flows or creating directional patterns.',
                image: '/examples/sculpt-nudge-smear.gif'
              }
            ]
          }
        },
        {
          name: 'Rotate',
          description: 'Twist vertices around center',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Rotate twists vertices around the brush center. Create spiral patterns, adjust surface flows, or add rotational detail.',
            pages: [
              {
                title: 'Twisting Motion',
                content: 'Rotate spins vertices around brush center. Drag in circles to twist surface details. Great for creating spiral patterns or adjusting flows.',
                image: '/examples/sculpt-rotate-twist.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Specialized Tools',
      icon: '/Icons/tool.svg',
      color: '#10b981',
      brushes: [
        {
          name: 'Cloth',
          description: 'Simulate fabric behavior',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Cloth brush simulates fabric dynamics in real-time. Create realistic wrinkles, folds, and drapery without complex physics setups.',
            pages: [
              {
                title: 'Cloth Simulation',
                content: 'Cloth brush simulates fabric physics as you sculpt. Drag to create natural folds and wrinkles. Perfect for clothing and drapery.',
                image: '/examples/sculpt-cloth-folds.gif'
              },
              {
                title: 'Cloth Settings',
                content: 'Adjust Simulation Limit and other cloth parameters for different fabric types. Experiment with settings for silk, leather, or heavy fabric.',
                image: '/examples/sculpt-cloth-settings.gif'
              }
            ]
          }
        },
        {
          name: 'Simplify',
          description: 'Reduce mesh complexity',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Simplify reduces polygon count in painted areas while preserving overall shape. Great for optimizing high-poly sculpts or cleaning up dense areas.',
            pages: [
              {
                title: 'Mesh Optimization',
                content: 'Paint over areas to reduce polygon density. Useful for cleaning up over-detailed areas or preparing models for retopology.',
                image: '/examples/sculpt-simplify-reduce.gif'
              }
            ]
          }
        },
        {
          name: 'Mask',
          description: 'Protect areas from editing',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Mask protects areas from being modified by other brushes. Essential for isolating work areas and preserving finished details.',
            pages: [
              {
                title: 'Masking Basics',
                content: 'Paint to mask areas (darken). Ctrl+Paint to unmask. Alt+Click to clear all masks. Masked areas are protected from all brush strokes.',
                image: '/examples/sculpt-mask-paint.gif'
              },
              {
                title: 'Mask Operations',
                content: 'Use Mask menu (A key) for box mask, lasso mask, or mask by cavity. Ctrl+I inverts mask. Essential for controlled sculpting.',
                image: '/examples/sculpt-mask-operations.gif'
              }
            ]
          }
        },
        {
          name: 'Box Trim',
          description: 'Boolean cut with box',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Box Trim performs real-time boolean cuts using a box shape. Quickly remove large sections or create hard surface cuts in your sculpt.',
            pages: [
              {
                title: 'Boolean Cutting',
                content: 'Draw box to define cut area. Geometry inside box is removed instantly. Perfect for creating hard surface cuts, holes, or mechanical details.',
                image: '/examples/sculpt-boxtrim-cut.gif'
              }
            ]
          }
        },
        {
          name: 'Line Project',
          description: 'Project lines onto surface',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Line Project cuts or raises along a drawn line. Perfect for creating precise panel lines, seams, or raised details with perfect straightness.',
            pages: [
              {
                title: 'Precise Lines',
                content: 'Draw line to project onto surface. Creates perfectly straight cuts or raises. Essential for mechanical details and hard surface elements.',
                image: '/examples/sculpt-lineproject-cut.gif'
              }
            ]
          }
        }
      ]
    }
  ],

   techniques : [
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
                image: '/examples/sculpt-dyntopo-enable.gif'
              },
              {
                title: 'Detail Size',
                content: 'Adjust Detail Size to control resolution. Smaller values : more detail but slower performance. Use R+drag to set detail size interactively.',
                image: '/examples/sculpt-dyntopo-detail.gif'
              },
              {
                title: 'Detailing Methods',
                content: 'Relative Detail scales with view distance. ant maintains uniform polygon size. Brush Detail adds geometry only where you sculpt.',
                image: '/examples/sculpt-dyntopo-methods.gif'
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
                image: '/examples/sculpt-remesh-voxel.gif'
              },
              {
                title: 'When to Remesh',
                content: 'Remesh when polygons get stretched, after major form changes, or before adding fine detail. Maintains sculptability throughout your process.',
                image: '/examples/sculpt-remesh-timing.gif'
              }
            ]
          }
        },
        {
          name: 'Symmetry',
          description: 'Mirror your sculpting strokes',
          icon: '/Icons/mirror.svg',
          detailedInfo: {
            overview: 'Symmetry mirrors your strokes across chosen axes. Essential for characters and any symmetrical subject, saving time and ensuring balance.',
            pages: [
              {
                title: 'Axis Symmetry',
                content: 'Enable X, Y, or Z axis symmetry in the toolbar. Your strokes automatically mirror across the chosen axis. Toggle on/off as needed.',
                image: '/examples/sculpt-symmetry-axis.gif'
              },
              {
                title: 'Radial Symmetry',
                content: 'Radial Symmetry repeats strokes in a circular pattern. Perfect for flowers, mechanical parts, or any radially symmetric element.',
                image: '/examples/sculpt-symmetry-radial.gif'
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
                image: '/examples/sculpt-multires-setup.gif'
              },
              {
                title: 'Level Management',
                content: 'Sculpt level controls active detail. Viewport level controls preview. Render level affects final output. Work at different levels for efficiency.',
                image: '/examples/sculpt-multires-levels.gif'
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
                image: '/examples/sculpt-matcap-change.gif'
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
                image: '/examples/sculpt-cavity-mask.gif'
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