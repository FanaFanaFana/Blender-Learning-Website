export const characterModelingLessonData = {

 heroConfig : {
    title: 'Modeling',
    gradientText: 'Characters',
    subtitle: 'Transform simple shapes into detailed organic models using Blender\'s powerful sculpting tools',
    gradientColors: 'linear-gradient(135deg, #ec4899, #8b5cf6, #6366f1)', // Pink to purple gradient
    
  },

   tabs : [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'tools', icon: '/Icons/tool.svg', label: 'Sculpting Tools' },
    { id: 'workflow', icon: '/Icons/modifier.svg', label: 'Workflow' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

   themeColor : '#ec4899',

   overviewCards : [
    {
      icon: '/Icons/mesh_monkey.svg',
      title: 'Dynamic Topology',
      content: 'Dyntopo automatically adds and removes geometry as you sculpt, giving you unlimited detail exactly where you need it. Perfect for organic forms that require varying levels of detail across the surface.'
    },
    {
      icon: '/Icons/mod_multires.svg',
      title: 'Multiresolution Sculpting',
      content: 'Work with multiple detail levels on the same mesh. Sculpt fine wrinkles at high resolution while maintaining a clean, animation-ready base mesh at lower levels.'
    },
    {
      icon: '/Icons/settings.svg',
      title: 'Brush Customization',
      content: 'Every sculpting brush can be customized with strength, radius, and falloff curves. Use textures and alphas to create unique surface details and patterns.'
    }
  ],

   sculptingTools : [
    {
      name: 'Primary Brushes',
      icon: '/Icons/ops.sculpt.brush_stroke.svg',
      color: '#ec4899',
      tools: [
        {
          name: 'Draw',
          description: 'Push surface outward or inward',
          icon: '/Icons/ops.gpencil.draw.svg',
          detailedInfo: {
            overview: 'The Draw brush is your primary sculpting tool. It pulls or pushes the surface in the direction of your brush stroke, perfect for building up forms and adding detail.',
            image: '/examples/sculpt-draw.mp4',
            pages: [
              {
                title: 'Basic Usage',
                content: 'Left-click and drag to pull surface outward. Hold Ctrl while dragging to push inward. Use lighter pressure for subtle details, stronger for dramatic changes.',
                image: '/examples/sculpt-draw-basic.mp4'
              },
              {
                title: 'Strength & Radius',
                content: 'F key adjusts brush radius (size), Shift+F adjusts strength. Lower strength gives more control, higher strength creates bold strokes. Find the right balance for your needs.',
                image: '/examples/sculpt-draw-settings.mp4'
              },
              {
                title: 'Stroke Direction',
                content: 'Brush follows your view angle. Sculpt works best from multiple angles - rotate your view frequently. Use Shift+Spacebar for quick view navigation.',
                image: '/examples/sculpt-draw-angles.mp4'
              }
            ]
          }
        },
        {
          name: 'Grab',
          description: 'Pull and move large areas',
          icon: '/Icons/brush.uv_sculpt.grab.svg',
          detailedInfo: {
            overview: 'Grab moves geometry as if you\'re pulling clay. Excellent for repositioning major forms, adjusting proportions, and creating large movements.',
            image: '/examples/sculpt-grab.mp4',
            pages: [
              {
                title: 'Grab Technique',
                content: 'Click and hold, then drag to pull geometry. The brush picks up all vertices within the radius and moves them together. Great for major shape adjustments.',
                image: '/examples/sculpt-grab-basic.mp4'
              },
              {
                title: 'Elastic Deform',
                content: 'Hold Shift while using Grab for elastic deformation - nearby areas deform smoothly. Creates more natural, flowing movements than standard Grab.',
                image: '/examples/sculpt-grab-elastic.mp4'
              }
            ]
          }
        },
        {
          name: 'Smooth',
          description: 'Average out surface irregularities',
          icon: '/Icons/ops.mesh.vertices_smooth.svg',
          detailedInfo: {
            overview: 'Smooth averages vertex positions to create softer surfaces. Essential for blending harsh edges and refining your sculpt.',
            image: '/examples/sculpt-smooth.mp4',
            pages: [
              {
                title: 'Smoothing Technique',
                content: 'Hold Shift with any brush active to temporarily activate Smooth. Use it frequently to soften edges and blend forms. Quick taps work better than long strokes.',
                image: '/examples/sculpt-smooth-basic.mp4'
              },
              {
                title: 'Targeted Smoothing',
                content: 'Use smaller brush radius for detail smoothing, larger for overall form refinement. Lower strength gives subtle results, higher creates dramatic smoothing.',
                image: '/examples/sculpt-smooth-control.mp4'
              }
            ]
          }
        },
        {
          name: 'Crease',
          description: 'Create sharp indentations',
          icon: '/Icons/edge_crease.svg',
          detailedInfo: {
            overview: 'Crease creates sharp, pinched lines in your surface. Perfect for wrinkles, folds, clothing seams, and any hard-edged details.',
            image: '/examples/sculpt-crease.mp4',
            pages: [
              {
                title: 'Crease vs Draw',
                content: 'While Draw pushes in, Crease pinches vertices together creating a sharper valley. Use for detail lines like skin wrinkles or fabric folds.',
                image: '/examples/sculpt-crease-basic.mp4'
              },
              {
                title: 'Crease Depth',
                content: 'Lower strength creates subtle lines, higher creates deep grooves. Multiple passes deepen existing creases. Smooth afterward to soften if too harsh.',
                image: '/examples/sculpt-crease-depth.mp4'
              }
            ]
          }
        },
        {
          name: 'Clay Strips',
          description: 'Build up flat, clay-like strokes',
          icon: '/Icons/brush.sculpt.clay_strips.svg',
          detailedInfo: {
            overview: 'Clay Strips adds material in flat, ribbon-like strokes. Excellent for building major forms quickly, like a real sculptor adding clay.',
            image: '/examples/sculpt-claystrips.mp4',
            pages: [
              {
                title: 'Form Building',
                content: 'Use Clay Strips for initial form blocking. Each stroke adds a flattened ribbon of material. Perfect for building up muscles, anatomical forms, or any organic shapes.',
                image: '/examples/sculpt-claystrips-build.mp4'
              },
              {
                title: 'Surface Control',
                content: 'The flat nature creates interesting surface variation. Use it to establish planes and volumes before detailing. Smooth afterward to blend.',
                image: '/examples/sculpt-claystrips-planes.mp4'
              }
            ]
          }
        },
        {
          name: 'Inflate',
          description: 'Expand surface uniformly',
          icon: '/Icons/brush.sculpt.inflate.svg',
          detailedInfo: {
            overview: 'Inflate pushes the surface outward along vertex normals, creating even expansion. Great for making things puffier or creating organic swelling.',
            image: '/examples/sculpt-inflate.mp4',
            pages: [
              {
                title: 'Uniform Growth',
                content: 'Unlike Draw which follows view, Inflate expands outward from the surface itself. Creates rounder, more balloon-like forms. Perfect for organic swelling.',
                image: '/examples/sculpt-inflate-basic.mp4'
              },
              {
                title: 'Detail Refinement',
                content: 'Use with low strength to gently push out areas that need more volume. Hold Ctrl to deflate/shrink areas. Great for final volume adjustments.',
                image: '/examples/sculpt-inflate-control.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detail Brushes',
      icon: '/Icons/brush.sculpt.draw.svg',
      color: '#8b5cf6',
      tools: [
        {
          name: 'Pinch',
          description: 'Squeeze vertices together',
          icon: '/Icons/brush.sculpt.pinch.svg',
          detailedInfo: {
            overview: 'Pinch pulls vertices toward the center of your brush stroke, creating sharp ridges or defined edges. Essential for hard-edged details.',
            image: '/examples/sculpt-pinch.mp4',
            pages: [
              {
                title: 'Edge Definition',
                content: 'Use Pinch along edges to sharpen them. Creates ridges, sharpens features, and adds definition. Multiple passes create more dramatic effects.',
                image: '/examples/sculpt-pinch-edges.mp4'
              },
              {
                title: 'Detail Enhancement',
                content: 'Pinch can emphasize existing details. Use it sparingly - too much creates unnatural pinched looks. Alternate with Smooth to refine.',
                image: '/examples/sculpt-pinch-detail.mp4'
              }
            ]
          }
        },
        {
          name: 'Scrape',
          description: 'Flatten and plane surfaces',
          icon: '/Icons/brush.sculpt.scrape.svg',
          detailedInfo: {
            overview: 'Scrape flattens the surface, as if scraping excess clay away. Perfect for creating planar surfaces and hard-surface elements on organic forms.',
            image: '/examples/sculpt-scrape.mp4',
            pages: [
              {
                title: 'Surface Flattening',
                content: 'Use Scrape to create flat planes on organic forms. Great for stylized characters or adding hard-surface elements to organic models.',
                image: '/examples/sculpt-scrape-flatten.mp4'
              },
              {
                title: 'Cleanup Tool',
                content: 'Scrape can clean up bumpy areas, removing unwanted variations. Use it to establish clean base surfaces before adding detail.',
                image: '/examples/sculpt-scrape-cleanup.mp4'
              }
            ]
          }
        },
        {
          name: 'Layer',
          description: 'Add consistent height layers',
          icon: '/Icons/brush.sculpt.layer.svg',
          detailedInfo: {
            overview: 'Layer brush adds material up to a specific height, then stops. Perfect for creating consistent raised details like scales or armor plates.',
            image: '/examples/sculpt-layer.mp4',
            pages: [
              {
                title: 'Consistent Detailing',
                content: 'Layer won\'t go beyond a set height, even if you paint over same area repeatedly. Ideal for creating uniform details like scales, tiles, or textures.',
                image: '/examples/sculpt-layer-scales.mp4'
              },
              {
                title: 'Height Control',
                content: 'Adjust Height value in brush settings to control how much material is added. Negative values create indentations of consistent depth.',
                image: '/examples/sculpt-layer-height.mp4'
              }
            ]
          }
        },
        {
          name: 'Blob',
          description: 'Add rounded bulges',
          icon: '/Icons/brush.sculpt.blob.svg',
          detailedInfo: {
            overview: 'Blob creates soft, rounded protrusions. Excellent for organic bumps, blisters, scales, or any rounded surface detail.',
            image: '/examples/sculpt-blob.mp4',
            pages: [
              {
                title: 'Organic Details',
                content: 'Blob creates soft rounded bumps perfect for organic details. Use it for scales, bumpy skin, organic growths, or stylized features.',
                image: '/examples/sculpt-blob-organic.mp4'
              },
              {
                title: 'Size Variation',
                content: 'Vary brush size and strength for different sized details. Multiple overlapping blobs create interesting clustered effects.',
                image: '/examples/sculpt-blob-variation.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Tools',
      icon: '/Icons/ops.sculpt.dynamic_topology_toggle.svg',
      color: '#6366f1',
      tools: [
        {
          name: 'Mask',
          description: 'Protect areas from sculpting',
          icon: '/Icons/brush.sculpt.mask.svg',
          detailedInfo: {
            overview: 'Masking protects areas of your model from being affected by sculpting. Essential for working on specific areas without disturbing others.',
            image: '/examples/sculpt-mask.mp4',
            pages: [
              {
                title: 'Creating Masks',
                content: 'Hold Ctrl and drag to paint a mask (shown as darker area). Masked areas won\'t be affected by sculpting. Hold Ctrl+Alt to remove mask.',
                image: '/examples/sculpt-mask-create.mp4'
              },
              {
                title: 'Mask Operations',
                content: 'Alt+M opens mask menu: Clear All, Invert, Smooth, Sharpen. Box Mask (B) and Lasso Mask (Shift+Ctrl+Left-click) select areas quickly.',
                image: '/examples/sculpt-mask-operations.mp4'
              },
              {
                title: 'Extract & Separate',
                content: 'Use masks to extract features into separate objects, or hide masked/unmasked areas. Powerful for complex model organization.',
                image: '/examples/sculpt-mask-extract.mp4'
              }
            ]
          }
        },
        {
          name: 'Cloth',
          description: 'Simulate fabric dynamics',
          icon: '/Icons/brush.sculpt.cloth.svg',
          detailedInfo: {
            overview: 'Cloth brush simulates fabric physics in real-time as you sculpt. Create natural fabric folds, wrinkles, and draping effects.',
            image: '/examples/sculpt-cloth.mp4',
            pages: [
              {
                title: 'Fabric Simulation',
                content: 'Drag across surface to simulate cloth movement. Creates natural folds and wrinkles. Different simulation modes create different fabric behaviors.',
                image: '/examples/sculpt-cloth-simulate.mp4'
              },
              {
                title: 'Cloth Settings',
                content: 'Adjust stiffness for different fabric types. Use Pin Simulation Boundary to keep edges fixed. Cloth works best on dense geometry.',
                image: '/examples/sculpt-cloth-settings.mp4'
              }
            ]
          }
        },
        {
          name: 'Pose',
          description: 'Move model like rigged character',
          icon: '/Icons/brush.sculpt.pose.svg',
          detailedInfo: {
            overview: 'Pose brush automatically segments your model and lets you rotate parts like a rigged character - without actual rigging.',
            image: '/examples/sculpt-pose.mp4',
            pages: [
              {
                title: 'Automatic Posing',
                content: 'Click and drag to rotate model segments. Blender automatically detects joints and creates natural bending. Great for quick pose adjustments.',
                image: '/examples/sculpt-pose-basic.mp4'
              },
              {
                title: 'Pose Origin & IK',
                content: 'Use Pose Origin mode to set rotation point. Enable IK chains for natural limb movement. Perfect for character iteration.',
                image: '/examples/sculpt-pose-ik.mp4'
              }
            ]
          }
        },
        {
          name: 'Snake Hook',
          description: 'Pull out tendrils and extrusions',
          icon: '/Icons/brush.sculpt.snake_hook.svg',
          detailedInfo: {
            overview: 'Snake Hook pulls geometry outward in long extrusions. Perfect for creating tentacles, hair, horns, or any elongated features.',
            image: '/examples/sculpt-snakehook.mp4',
            pages: [
              {
                title: 'Creating Extrusions',
                content: 'Click and drag outward to pull long strands of geometry. Creates natural tapering. Essential for tentacles, hair, spikes, or roots.',
                image: '/examples/sculpt-snakehook-basic.mp4'
              },
              {
                title: 'Magnification & Pinch',
                content: 'Adjust Magnification to control strand thickness. Enable Pinch for natural tapering. Multiple passes refine shape.',
                image: '/examples/sculpt-snakehook-settings.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

   workflowSteps : [
    {
      name: 'Preparation',
      icon: '/Icons/mesh_cube.svg',
      color: '#10b981',
      steps: [
        {
          name: 'Dynamic Topology Setup',
          description: 'Configure automatic detail addition',
          icon: '/Icons/mod_remesh.svg',
          detailedInfo: {
            overview: 'Dynamic Topology (Dyntopo) automatically adds and removes geometry as you sculpt, giving you infinite detail where needed without manual subdivision.',
            image: '/examples/sculpt-dyntopo.mp4',
            pages: [
              {
                title: 'Enabling Dyntopo',
                content: 'In Sculpt Mode, click Dyntopo button in header or press Ctrl+D. Your mesh can now gain detail as you sculpt. Perfect for organic, exploratory sculpting.',
                image: '/examples/sculpt-dyntopo-enable.mp4'
              },
              {
                title: 'Detail Size',
                content: 'Adjust Detail Size or Resolution to control how much detail is added. Smaller values = more detail (more polygons). Find balance between detail and performance.',
                image: '/examples/sculpt-dyntopo-detail.mp4'
              },
              {
                title: 'Detailing Method',
                content: 'Use Constant Detail for uniform density, Brush Detail for varying based on brush size, or Manual for full control. Each suits different workflows.',
                image: '/examples/sculpt-dyntopo-methods.mp4'
              }
            ]
          }
        },
        {
          name: 'Multiresolution Alternative',
          description: 'Level-based detail management',
          icon: '/Icons/mod_multires.svg',
          detailedInfo: {
            overview: 'Multiresolution modifier lets you sculpt at high detail while keeping a clean base mesh. Switch between detail levels non-destructively.',
            image: '/examples/sculpt-multires.mp4',
            pages: [
              {
                title: 'Adding Multires',
                content: 'Add Multiresolution modifier in Modifiers panel. Click Subdivide to add detail levels. Sculpt at high levels, switch to low for base edits.',
                image: '/examples/sculpt-multires-add.mp4'
              },
              {
                title: 'Level Management',
                content: 'Preview slider controls viewport detail, Sculpt slider controls active sculpting level, Render sets final output detail. Work at different levels for efficiency.',
                image: '/examples/sculpt-multires-levels.mp4'
              },
              {
                title: 'When to Use',
                content: 'Use Multires when you need clean topology for animation. Use Dyntopo for pure sculpting freedom. Multires keeps base mesh intact for rigging.',
                image: '/examples/sculpt-multires-comparison.mp4'
              }
            ]
          }
        },
        {
          name: 'Reference Images',
          description: 'Set up visual guides',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Reference images help you maintain correct proportions and capture details accurately. Essential for realistic or character sculpting.',
            image: '/examples/sculpt-reference.mp4',
            pages: [
              {
                title: 'Adding References',
                content: 'Add > Image > Reference in Object Mode. Position images around your model. Use front, side, and back views for full coverage. Lock them to prevent accidental movement.',
                image: '/examples/sculpt-reference-add.mp4'
              },
              {
                title: 'Reference Best Practices',
                content: 'Use semi-transparent images (adjust opacity in properties). Scale references to match your model size. Toggle visibility with Alt+H to declutter workspace.',
                image: '/examples/sculpt-reference-tips.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Blocking & Form',
      icon: '/Icons/mesh_monkey.svg',
      color: '#f59e0b',
      steps: [
        {
          name: 'Primary Forms',
          description: 'Establish major volumes',
          icon: '/Icons/brush.sculpt.clay_strips.svg',
          detailedInfo: {
            overview: 'Start with simple shapes and build up major forms before adding any detail. Focus on silhouette and proportions first.',
            image: '/examples/sculpt-blocking.mp4',
            pages: [
              {
                title: 'Big Shapes First',
                content: 'Use Clay Strips, Draw, and Grab to establish major volumes. Don\'t worry about detail yet - focus on getting proportions and overall shape right.',
                image: '/examples/sculpt-blocking-forms.mp4'
              },
              {
                title: 'Symmetry Mode',
                content: 'Enable X-axis symmetry for characters and symmetrical objects. Saves time and ensures balance. Disable later for asymmetric details.',
                image: '/examples/sculpt-blocking-symmetry.mp4'
              },
              {
                title: 'Constant Refinement',
                content: 'Rotate view constantly - view from all angles. Use Smooth frequently to blend forms. Step back often to check overall proportions.',
                image: '/examples/sculpt-blocking-refine.mp4'
              }
            ]
          }
        },
        {
          name: 'Secondary Forms',
          description: 'Add anatomical structure',
          icon: '/Icons/armature.svg',
          detailedInfo: {
            overview: 'Once primary volumes are correct, add secondary forms like major muscle groups, bone landmarks, and structural details.',
            image: '/examples/sculpt-secondary.mp4',
            pages: [
              {
                title: 'Anatomical Landmarks',
                content: 'Add visible skeletal points: collarbones, shoulder blades, hip bones, knee caps. These anchor muscles and define structure.',
                image: '/examples/sculpt-secondary-anatomy.mp4'
              },
              {
                title: 'Major Muscle Groups',
                content: 'Block in large muscle masses without detail. Focus on how muscles flow and overlap. Use Clay Strips for ribbon-like muscle forms.',
                image: '/examples/sculpt-secondary-muscles.mp4'
              },
              {
                title: 'Form Relationships',
                content: 'Ensure forms flow into each other naturally. Check how light reads the surface - harsh transitions indicate problems. Smooth to blend.',
                image: '/examples/sculpt-secondary-flow.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detailing',
      icon: '/Icons/brush.sculpt.draw.svg',
      color: '#ef4444',
      steps: [
        {
          name: 'Tertiary Details',
          description: 'Add surface variation',
          icon: '/Icons/brush.sculpt.crease.svg',
          detailedInfo: {
            overview: 'With forms established, add surface details like wrinkles, pores, fabric texture, and small imperfections that bring life to your sculpt.',
            image: '/examples/sculpt-detail.mp4',
            pages: [
              {
                title: 'Texture & Pores',
                content: 'Use textured brushes or alphas for skin pores, fabric weave, or surface texture. Keep strength low for subtlety. Build up gradually.',
                image: '/examples/sculpt-detail-texture.mp4'
              },
              {
                title: 'Wrinkles & Folds',
                content: 'Use Crease for wrinkle lines, smooth to soften. Add compression wrinkles on inside of bends, stretch marks on outside. Follow anatomy.',
                image: '/examples/sculpt-detail-wrinkles.mp4'
              },
              {
                title: 'Asymmetry',
                content: 'Disable symmetry and add asymmetric details - scars, imperfections, character. Perfect symmetry looks unnatural. Add life with variation.',
                image: '/examples/sculpt-detail-asymmetry.mp4'
              }
            ]
          }
        },
        {
          name: 'Using Alphas',
          description: 'Stamp complex details',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Alphas are grayscale images that add complex details in single strokes. Perfect for scales, patterns, or any repeating surface detail.',
            image: '/examples/sculpt-alpha.mp4',
            pages: [
              {
                title: 'Loading Alphas',
                content: 'In brush settings, add texture and load alpha image. Adjust mapping (View Plane, Area Plane, etc.) for best results. Control with strength.',
                image: '/examples/sculpt-alpha-load.mp4'
              },
              {
                title: 'Alpha Techniques',
                content: 'Use Drag stroke method for controlled placement. Adjust spacing for repeated patterns. Combine multiple alphas for complex textures.',
                image: '/examples/sculpt-alpha-techniques.mp4'
              }
            ]
          }
        },
        {
          name: 'Final Polish',
          description: 'Refine and perfect',
          icon: '/Icons/brush.sculpt.smooth.svg',
          detailedInfo: {
            overview: 'Final pass to ensure all details read well, forms flow naturally, and the overall sculpt achieves your artistic vision.',
            image: '/examples/sculpt-polish.mp4',
            pages: [
              {
                title: 'Global Smoothing',
                content: 'Use large Smooth brush with low strength to unify the surface. Remove any remaining artifacts. Check from multiple angles and lighting.',
                image: '/examples/sculpt-polish-smooth.mp4'
              },
              {
                title: 'Detail Enhancement',
                content: 'Sharpen key features with Pinch or Crease. Enhance shadows and highlights by emphasizing form transitions. Make focal points pop.',
                image: '/examples/sculpt-polish-enhance.mp4'
              },
              {
                title: 'Edge Definition',
                content: 'Clean up silhouette edges. Ensure they read clearly from distance. Sharp edges catch light beautifully - use them for effect.',
                image: '/examples/sculpt-polish-edges.mp4'
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
    desc: 'Practice facial anatomy and expressions',
    duration: '60 min', 
    difficulty: 'Beginner',
    skills: ['Draw Brush', 'Clay Strips', 'Smooth', 'Grab', 'Dynamic Topology']
  },
  { 
    title: 'Create an Organic Creature', 
    desc: 'Design and sculpt an original creature',
    duration: '90 min', 
    difficulty: 'Intermediate',
    skills: ['Snake Hook', 'Blob', 'Inflate', 'Masking', 'Cloth Brush']
  },
  { 
    title: 'Detailed Human Bust', 
    desc: 'Realistic anatomy from reference',
    duration: '2 hours', 
    difficulty: 'Advanced',
    skills: ['All Brushes', 'Multiresolution', 'Anatomy', 'Alphas', 'Detail Sculpting']
  },
  { 
    title: 'Hard Surface Mech Part', 
    desc: 'Combine sculpting with hard surface',
    duration: '45 min', 
    difficulty: 'Intermediate',
    skills: ['Scrape', 'Flatten', 'Mask', 'Layer Brush', 'Hard Surface']
  }
]
}