export const productDesignLessonData = {

 heroConfig : {
    title: 'Product Design',
    gradientText: 'in Blender',
    subtitle: 'Create beautiful, realistic consumer products from concept to photorealistic render',
    gradientColors: 'linear-gradient(135deg, #ec4899, #f43f5e, #f97316)', // Pink to orange gradient
    badges: [
      { icon: '/Icons/time.svg', title: '90 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/mesh_icosphere.svg', title: 'Commercial', subtitle: 'Focus area' }
    ]
  },

   tabs : [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'principles', icon: '/Icons/mesh_icosphere.svg', label: 'Principles' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'workflow', icon: '/Icons/modifier.svg', label: 'Workflow' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

   themeColor : '#ec4899',

   overviewCards : [
    {
      icon: '/Icons/mesh_icosphere.svg',
      title: 'Form & Ergonomics',
      content: 'Product design balances aesthetics with human interaction. Understand ergonomics, grip comfort, and how people naturally hold and use objects. Beautiful products feel as good as they look.'
    },
    {
      icon: '/Icons/brush.smooth.svg',
      title: 'Surface Quality',
      content: 'Products need flawless surfaces for photorealism. Master subdivision modeling, edge flow, and smooth shading. Every curve should be intentional, every surface pristine and production-ready.'
    },
    {
      icon: '/Icons/node_material.svg',
      title: 'Material Realism',
      content: 'Materials sell the product. Learn to create convincing plastics, metals, glass, and rubber. Real products use multiple materials - understand how they interact, reflect, and feel together.'
    }
  ],

   corePrinciples : [
    {
      name: 'Form Language',
      icon: '/Icons/mesh_icosphere.svg',
      color: '#ec4899',
      topics: [
        {
          name: 'Visual Balance',
          description: 'Proportions and symmetry in products',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Great products have visual balance - weight distribution feels right, proportions are pleasing. Use golden ratio, rule of thirds, and symmetry purposefully.',
            pages: [
              {
                title: 'Proportion Systems',
                content: 'Study classic proportion systems. The golden ratio creates pleasing relationships. Fibonacci spacing makes forms feel natural. Use these as guides, not rigid rules.',
                image: '/examples/product-proportions.gif'
              },
              {
                title: 'Mass Distribution',
                content: 'Heavier-looking elements at the bottom create stability. Top-heavy products feel unstable. Balance visual weight through form, not just actual mass.',
                image: '/examples/product-mass-balance.gif'
              },
              {
                title: 'Symmetry vs Asymmetry',
                content: 'Symmetry suggests reliability and precision. Asymmetry adds dynamism and interest. Most products are primarily symmetric with subtle asymmetric details.',
                image: '/examples/product-symmetry.gif'
              }
            ]
          }
        },
        {
          name: 'Ergonomic Design',
          description: 'Creating comfortable, usable forms',
          icon: '/Icons/tool.svg',
          detailedInfo: {
            overview: 'Products interact with humans. Understand grip diameter, finger placement, weight distribution. Comfortable products get used more and loved longer.',
            pages: [
              {
                title: 'Grip Ergonomics',
                content: 'Average grip diameter is 30-35mm. Add finger grooves where natural. Avoid sharp edges on held surfaces. Test forms with real-world hand positions.',
                image: '/examples/product-grip-ergo.gif'
              },
              {
                title: 'Button Placement',
                content: 'Place buttons where thumbs naturally rest. Power buttons accessible but not accidentally pressed. Group related controls. Consider left and right-handed use.',
                image: '/examples/product-button-placement.gif'
              },
              {
                title: 'Weight & Center of Mass',
                content: 'Balance point affects feel in hand. Bottom-heavy feels stable. Top-heavy feels awkward. Position heavy components low and centered for best feel.',
                image: '/examples/product-center-mass.gif'
              }
            ]
          }
        },
        {
          name: 'Design Language',
          description: 'Creating cohesive product families',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Products from the same brand share design DNA - consistent curves, materials, details. This creates brand recognition and cohesive product ecosystems.',
            pages: [
              {
                title: 'Signature Elements',
                content: 'Develop signature curves, edge treatments, or detail motifs. Apple has rounded corners, Dyson has smooth curves. Your products should have recognizable DNA.',
                image: '/examples/product-signature-elements.gif'
              },
              {
                title: 'Material Consistency',
                content: 'Use consistent material palettes across products. If one product uses brushed aluminum, others should too. Material consistency builds brand identity.',
                image: '/examples/product-material-consistency.gif'
              },
              {
                title: 'Detail Repetition',
                content: 'Repeat design details across products - same button style, same vent pattern, same edge radius. Repetition creates family resemblance and brand cohesion.',
                image: '/examples/product-detail-repetition.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Surface Quality',
      icon: '/Icons/brush.smooth.svg',
      color: '#f43f5e',
      topics: [
        {
          name: 'Subdivision Surfaces',
          description: 'Creating smooth, organic forms',
          icon: '/Icons/mod_subsurf.svg',
          detailedInfo: {
            overview: 'Subdivision surface modeling creates the smooth, flowing forms characteristic of consumer products. Master edge flow and support loops for perfect curves.',
            pages: [
              {
                title: 'Quad Topology',
                content: 'Maintain all-quad topology for clean subdivision. Avoid triangles and n-gons except on flat surfaces. Quads subdivide predictably, others create artifacts.',
                image: '/examples/product-quad-topology.gif'
              },
              {
                title: 'Edge Flow Direction',
                content: 'Edge loops should follow the form\'s natural curves. Think of topology like muscle fibers - they should follow the direction of stress and movement.',
                image: '/examples/product-edge-flow.gif'
              },
              {
                title: 'Creasing vs Support Loops',
                content: 'Use crease edges for hard transitions on subdivision. Use support loops for controlled curves. Know when each is appropriate for your design intent.',
                image: '/examples/product-crease-support.gif'
              }
            ]
          }
        },
        {
          name: 'Surface Continuity',
          description: 'G0, G1, G2 curve continuity',
          icon: '/Icons/curve_bezier.svg',
          detailedInfo: {
            overview: 'Surface continuity determines how smoothly surfaces flow together. G2 continuity (curvature) is essential for premium product feel - highlights should flow smoothly.',
            pages: [
              {
                title: 'Understanding Continuity',
                content: 'G0 is touching, G1 is tangent, G2 is curvature. Products need G2 for premium feel. Check continuity with MatCap shaders - highlights reveal discontinuities.',
                image: '/examples/product-continuity-levels.gif'
              },
              {
                title: 'Highlight Flow',
                content: 'Add studio lighting to check surface quality. Highlights should flow smoothly across surfaces with no breaks or kinks. Wavy highlights mean topology problems.',
                image: '/examples/product-highlight-flow.gif'
              },
              {
                title: 'Fixing Discontinuities',
                content: 'Adjust edge loops to smooth kinks. Add or remove loops to control curvature. Use proportional editing for subtle adjustments. Check from multiple angles.',
                image: '/examples/product-fixing-discontinuities.gif'
              }
            ]
          }
        },
        {
          name: 'Detail Transitions',
          description: 'Blending features smoothly',
          icon: '/Icons/mod_bevel.svg',
          detailedInfo: {
            overview: 'Where features meet surfaces, transitions must be smooth. Buttons blend into housings, screens sit in bezels, panels meet seamlessly. Poor transitions look cheap.',
            pages: [
              {
                title: 'Surface Blending',
                content: 'Use subdivision with proper edge loops to blend features. No sharp transitions unless intentional. Fillets should have consistent radius throughout.',
                image: '/examples/product-surface-blending.gif'
              },
              {
                title: 'Fillet Consistency',
                content: 'Use consistent fillet radii - typically 0.5mm, 1mm, 2mm, 5mm. Larger features get larger fillets. Consistency creates professional appearance.',
                image: '/examples/product-fillet-consistency.gif'
              },
              {
                title: 'Panel Gaps',
                content: 'Real products have tiny gaps between panels. 0.1-0.3mm gaps catch light and shadow. Add deliberate micro-gaps for realism, not mesh intersections.',
                image: '/examples/product-panel-gaps.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Material Design',
      icon: '/Icons/node_material.svg',
      color: '#f97316',
      topics: [
        {
          name: 'Plastic Materials',
          description: 'Creating convincing plastic surfaces',
          icon: '/Icons/brush.draw.svg',
          detailedInfo: {
            overview: 'Plastics are everywhere in products. Different plastics have different properties - matte ABS, glossy polycarbonate, soft-touch rubber. Master the subtle differences.',
            pages: [
              {
                title: 'Glossy Plastics',
                content: 'High roughness variation. Base roughness 0.1-0.3, but never uniform. Add subtle texture for realism. Slightly colored reflections - not pure white.',
                image: '/examples/product-glossy-plastic.gif'
              },
              {
                title: 'Matte Plastics',
                content: 'Higher roughness 0.5-0.8. Add surface texture - orange peel effect. Slight subsurface scattering for depth. Never perfectly diffuse - all materials reflect.',
                image: '/examples/product-matte-plastic.gif'
              },
              {
                title: 'Soft Touch Rubber',
                content: 'Medium roughness 0.4-0.6. Slightly darker than hard plastic. Visible pores in close-up. Finger smudges add realism - add as texture layer.',
                image: '/examples/product-soft-touch.gif'
              }
            ]
          }
        },
        {
          name: 'Metal Surfaces',
          description: 'Realistic metal materials',
          icon: '/Icons/mesh_icosphere.svg',
          detailedInfo: {
            overview: 'Metal reflects the environment sharply. Brushed metal has directional roughness. Anodized aluminum has colored metalness. Each metal type has distinct properties.',
            pages: [
              {
                title: 'Brushed Aluminum',
                content: 'Anisotropic roughness - different in brush direction vs perpendicular. Use tangent node for brush direction. Roughness 0.2-0.4 with directional variation.',
                image: '/examples/product-brushed-aluminum.gif'
              },
              {
                title: 'Polished Chrome',
                content: 'Very low roughness 0.05-0.15. Perfect mirror-like reflections. Shows environment clearly. Use HDRI for realistic reflections. Slight imperfections for realism.',
                image: '/examples/product-polished-chrome.gif'
              },
              {
                title: 'Anodized Aluminum',
                content: 'Colored metalness - tint the base color but keep metallic value high. Slight roughness increase vs bare aluminum. Common in premium electronics.',
                image: '/examples/product-anodized-aluminum.gif'
              }
            ]
          }
        },
        {
          name: 'Glass & Transparency',
          description: 'Creating realistic transparent materials',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Glass and transparent plastics need careful IOR settings and thickness consideration. Real glass has slight imperfections - fingerprints, dust, subtle tinting.',
            pages: [
              {
                title: 'Glass Properties',
                content: 'IOR 1.5 for glass, 1.45 for acrylic. Transmission 1.0 but with slight absorption for thickness. Add slight roughness 0.01-0.05 for realism, never perfectly smooth.',
                image: '/examples/product-glass-properties.gif'
              },
              {
                title: 'Screen Glass',
                content: 'Slightly tinted for anti-reflective coating. Oleophobic coating reduces fingerprints but they still show. Add subtle normal map for surface texture.',
                image: '/examples/product-screen-glass.gif'
              },
              {
                title: 'Imperfections',
                content: 'Add fingerprints, dust particles, micro-scratches. Use separate layer with low opacity. Place smudges where fingers naturally touch. Imperfections add realism.',
                image: '/examples/product-glass-imperfections.gif'
              }
            ]
          }
        }
      ]
    }
  ],

   techniques : [
    {
      name: 'Modeling Techniques',
      icon: '/Icons/tool.svg',
      color: '#a855f7',
      methods: [
        {
          name: 'Box Modeling Products',
          description: 'Building smooth forms from primitives',
          icon: '/Icons/mesh_cube.svg',
          detailedInfo: {
            overview: 'Start with simple cubes and cylinders, then subdivide and shape. Add edge loops strategically to control form. Maintain quad topology throughout.',
            pages: [
              {
                title: 'Primitive Blocking',
                content: 'Block out basic shape with low-poly primitives. Get proportions and overall form right first. Don\'t add detail until basic shape is perfect.',
                image: '/examples/product-box-blocking.gif'
              },
              {
                title: 'Strategic Loop Cuts',
                content: 'Add loops where form changes direction. More loops in curved areas, fewer on flat surfaces. Use Ctrl+R to add loops, scroll to adjust count before confirming.',
                image: '/examples/product-strategic-loops.gif'
              },
              {
                title: 'Form Sculpting',
                content: 'Enable proportional editing (O key). Adjust vertices to create curves. Use proportional falloff to affect surrounding geometry smoothly.',
                image: '/examples/product-form-sculpting.gif'
              }
            ]
          }
        },
        {
          name: 'Curve-Based Modeling',
          description: 'Using curves for perfect profiles',
          icon: '/Icons/curve_bezier.svg',
          detailedInfo: {
            overview: 'Curves create perfectly smooth profiles. Use bezier curves for product outlines, then convert to mesh or use as modifier targets. Parametric and adjustable.',
            pages: [
              {
                title: 'Profile Curves',
                content: 'Draw product profile with bezier curve. Adjust handles for perfect curves. Use Curve modifier to deform mesh along curve. Non-destructive workflow.',
                image: '/examples/product-profile-curves.gif'
              },
              {
                title: 'Revolve & Extrude',
                content: 'Use Screw modifier to revolve curve around axis - perfect for bottles, speakers, cylindrical products. Adjust axis position and angle for various forms.',
                image: '/examples/product-curve-revolve.gif'
              },
              {
                title: 'Bevel Curves to Mesh',
                content: 'Add depth to 2D curves with bevel depth. Control resolution. Convert to mesh when satisfied. Great for logos, buttons, embossed text.',
                image: '/examples/product-bevel-curves.gif'
              }
            ]
          }
        },
        {
          name: 'Boolean for Details',
          description: 'Adding features non-destructively',
          icon: '/Icons/mod_boolean.svg',
          detailedInfo: {
            overview: 'Use booleans for buttons, ports, vents, and cut-outs. Keep cutters organized and non-destructive. Apply only when design is final.',
            pages: [
              {
                title: 'Button Cut-Outs',
                content: 'Model button shape, position on surface. Add Boolean modifier (Difference) to housing. Keep button object for later use as actual button component.',
                image: '/examples/product-boolean-buttons.gif'
              },
              {
                title: 'Port & Connector Holes',
                content: 'Use cylinders for USB ports, audio jacks, charging ports. Array modifier for multiple ports. Boolean difference cuts perfect holes.',
                image: '/examples/product-boolean-ports.gif'
              },
              {
                title: 'Clean Boolean Results',
                content: 'After applying booleans, use Limited Dissolve to clean up. Add edge loops around cuts for clean topology. Bevel edges for realistic chamfers.',
                image: '/examples/product-boolean-cleanup.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detailing Methods',
      icon: '/Icons/mesh_grid.svg',
      color: '#06b6d4',
      methods: [
        {
          name: 'Logo & Branding',
          description: 'Adding brand elements',
          icon: '/Icons/text.svg',
          detailedInfo: {
            overview: 'Logos and text add authenticity. Use curves for vector-quality text and logos. Emboss, engrave, or apply as textures depending on manufacturing method.',
            pages: [
              {
                title: 'Embossed Logos',
                content: 'Add text curve, extrude slightly. Position on surface, use Shrinkwrap modifier to conform. Boolean union or apply as separate object with offset.',
                image: '/examples/product-embossed-logo.gif'
              },
              {
                title: 'Engraved Details',
                content: 'Create text/logo as curve, extrude inward. Boolean difference to cut into surface. Add slight bevel to engraved edges for realism.',
                image: '/examples/product-engraved-logo.gif'
              },
              {
                title: 'Printed Graphics',
                content: 'Use UV mapped textures for printed elements. Add slight normal map for texture depth. Never perfectly flat - add subtle imperfections.',
                image: '/examples/product-printed-graphics.gif'
              }
            ]
          }
        },
        {
          name: 'Buttons & Controls',
          description: 'Interactive elements',
          icon: '/Icons/tool.svg',
          detailedInfo: {
            overview: 'Buttons should feel pressable. Add subtle dome to button tops. Gap between button and housing suggests movement. Material changes indicate touch areas.',
            pages: [
              {
                title: 'Button Geometry',
                content: 'Model buttons separately from housing. Add 0.2-0.5mm gap around edges. Slight dome or contour on button top. Consider finger contact area.',
                image: '/examples/product-button-geometry.gif'
              },
              {
                title: 'Tactile Indicators',
                content: 'Add subtle ribs, dots, or texture to indicate button function without looking. Power button often has distinct feel. Use different materials.',
                image: '/examples/product-tactile-indicators.gif'
              },
              {
                title: 'LED Indicators',
                content: 'Model translucent rings or dots for LED shine-through. Use emission shader. Add light bloom in compositing. Consider both on and off states.',
                image: '/examples/product-led-indicators.gif'
              }
            ]
          }
        },
        {
          name: 'Texturing Details',
          description: 'Surface texture and patterns',
          icon: '/Icons/brush.draw.svg',
          detailedInfo: {
            overview: 'Surface texture prevents sterile CG look. Add subtle noise, finger texture, manufacturing marks. Procedural textures are flexible and tileable.',
            pages: [
              {
                title: 'Procedural Texture',
                content: 'Use Noise Texture for subtle surface variation. Wave Texture for brushed effects. Voronoi for patterned surfaces. Adjust scale and strength carefully.',
                image: '/examples/product-procedural-texture.gif'
              },
              {
                title: 'Normal Map Details',
                content: 'Add micro-details via normal maps - grain, texture, tiny imperfections. Much lighter than geometry. Bump map for subtle height, normal for directional detail.',
                image: '/examples/product-normal-details.gif'
              },
              {
                title: 'Wear Maps',
                content: 'Use dirt/wear maps to vary roughness across surface. Edges get more wear. High-touch areas show more use. Adds realism through imperfection.',
                image: '/examples/product-wear-maps.gif'
              }
            ]
          }
        }
      ]
    }
  ],

   workflowSteps : [
    {
      name: 'Concept & Research',
      icon: '/Icons/image.svg',
      color: '#10b981',
      steps: [
        {
          name: 'Reference Collection',
          description: 'Gathering visual research',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Study existing products in your category. Understand common design patterns, material choices, scale. Reference is essential for believable product design.',
            pages: [
              {
                title: 'Product Photography',
                content: 'Collect photos from multiple angles - front, side, top, details. Official product photos show ideal appearance. User photos show real-world use and wear.',
                image: '/examples/product-reference-photos.gif'
              },
              {
                title: 'Teardown Analysis',
                content: 'Look at disassembly images to understand ruction. See how parts fit together, material transitions, internal structure. Informs realistic design.',
                image: '/examples/product-teardown-analysis.gif'
              },
              {
                title: 'Ergonomic Study',
                content: 'Photo reference of products in use. Hand positions, grip styles, button access. Products must look good and work well - study both aspects.',
                image: '/examples/product-ergonomic-study.gif'
              }
            ]
          }
        },
        {
          name: 'Concept Sketching',
          description: 'Exploring form options',
          icon: '/Icons/tool.svg',
          detailedInfo: {
            overview: 'Sketch multiple concepts before 3D. Explore proportions, angles, details on paper or in 2D software. Faster iteration than 3D modeling.',
            pages: [
              {
                title: 'Form Exploration',
                content: 'Sketch 10-20 thumbnail concepts. Try different proportions, silhouettes, angles. Don\'t commit to first idea - explore variations quickly.',
                image: '/examples/product-form-exploration.gif'
              },
              {
                title: 'Detail Refinement',
                content: 'Choose best concept, refine details. Button placement, vent patterns, material breaks. Work out design language before 3D work begins.',
                image: '/examples/product-detail-refinement.gif'
              }
            ]
          }
        },
        {
          name: 'Dimensional Planning',
          description: 'Establishing scale and proportions',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Define real-world dimensions before modeling. Products exist in real space - consider human scale, hand size, typical use context.',
            pages: [
              {
                title: 'Scale Reference',
                content: 'Import scale reference - standard hand size, common object comparisons. Set up real-world units in Blender. Model to actual size, not arbitrary scale.',
                image: '/examples/product-scale-reference.gif'
              },
              {
                title: 'Proportion Guides',
                content: 'Use guide objects for key dimensions - overall length, button size, screen area. Measure existing products for realistic proportions.',
                image: '/examples/product-proportion-guides.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Base Modeling',
      icon: '/Icons/mesh_cube.svg',
      color: '#f59e0b',
      steps: [
        {
          name: 'Primary Forms',
          description: 'Building the main body',
          icon: '/Icons/mesh_icosphere.svg',
          detailedInfo: {
            overview: 'Model primary housing and major components first. Keep geometry simple and clean. Establish overall form before adding details.',
            pages: [
              {
                title: 'Housing Shell',
                content: 'Start with cube or cylinder, add minimal loops. Adjust vertices to match proportions. Use Mirror modifier for symmetry. Keep polygon count low initially.',
                image: '/examples/product-housing-shell.gif'
              },
              {
                title: 'Component Blocking',
                content: 'Add major components - screen area, button regions, ports. Block out as separate objects or face groups. Establish spatial relationships.',
                image: '/examples/product-component-blocking.gif'
              },
              {
                title: 'Curve Refinement',
                content: 'Add subdivision surface modifier. Add edge loops to control curves. Check silhouette from all angles. Adjust until forms are elegant and intentional.',
                image: '/examples/product-curve-refinement.gif'
              }
            ]
          }
        },
        {
          name: 'Edge Flow Optimization',
          description: 'Clean topology for smooth results',
          icon: '/Icons/mod_subsurf.svg',
          detailedInfo: {
            overview: 'Optimize topology for clean subdivision. All quads where possible, good edge flow following form. Place poles on flat areas away from curved surfaces.',
            pages: [
              {
                title: 'Quad Flow',
                content: 'Convert any triangles to quads if possible. Ensure edge loops flow smoothly around curves. Avoid poles on curved surfaces - they cause pinching.',
                image: '/examples/product-quad-flow.gif'
              },
              {
                title: 'Support Loops',
                content: 'Add support loops near edges to control subdivision sharpness. Closer loops : sharper edges. Adjust loop placement for desired edge softness.',
                image: '/examples/product-support-loops.gif'
              }
            ]
          }
        },
        {
          name: 'Surface Quality Check',
          description: 'Ensuring flawless surfaces',
          icon: '/Icons/brush.smooth.svg',
          detailedInfo: {
            overview: 'Use MatCap shaders and studio lighting to check surface quality. Highlights should flow smoothly with no kinks, breaks, or waviness.',
            pages: [
              {
                title: 'MatCap Preview',
                content: 'Enable MatCap shading in viewport. Use reflective MatCap to check surface continuity. Look for irregular highlights or broken reflections.',
                image: '/examples/product-matcap-check.gif'
              },
              {
                title: 'Studio Lighting Test',
                content: 'Add area lights to simulate studio setup. Observe how highlights fall across surfaces. Adjust topology until highlights flow perfectly.',
                image: '/examples/product-lighting-test.gif'
              },
              {
                title: 'Multi-Angle Review',
                content: 'Check model from all angles - front, back, top, bottom, three-quarter views. Surface quality must be consistent from every viewing angle.',
                image: '/examples/product-angle-review.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Detailing Phase',
      icon: '/Icons/modifier.svg',
      color: '#8b5cf6',
      steps: [
        {
          name: 'Features & Cutouts',
          description: 'Adding functional elements',
          icon: '/Icons/mod_boolean.svg',
          detailedInfo: {
            overview: 'Add buttons, ports, vents, and other functional features. Use boolean operations for clean cuts. Keep elements editable until design is final.',
            pages: [
              {
                title: 'Boolean Features',
                content: 'Model button shapes, port cutouts, vent patterns. Apply as boolean operations to main housing. Keep cutter objects organized in collection.',
                image: '/examples/product-boolean-features.gif'
              },
              {
                title: 'Component Modeling',
                content: 'Model actual buttons, not just holes. Create screen, ports, rubber feet. Each component gets proper materials and detail level.',
                image: '/examples/product-component-modeling.gif'
              }
            ]
          }
        },
        {
          name: 'Surface Detailing',
          description: 'Logos, textures, and graphics',
          icon: '/Icons/text.svg',
          detailedInfo: {
            overview: 'Add branding, text, surface patterns, and decorative elements. Consider manufacturing methods - embossed, engraved, printed, or molded.',
            pages: [
              {
                title: 'Brand Elements',
                content: 'Add logos, brand names, model numbers. Use curves for crisp text. Choose embossing, engraving, or printing based on product tier and style.',
                image: '/examples/product-brand-elements.gif'
              },
              {
                title: 'Texture Patterns',
                content: 'Add grip texture, vent patterns, decorative details. Use array modifier for repeated elements. Consider both aesthetics and function.',
                image: '/examples/product-texture-patterns.gif'
              },
              {
                title: 'Label & Markings',
                content: 'Add regulatory markings, usage icons, warning labels. Place on bottom or back surfaces. Use decals or UV mapped graphics for these.',
                image: '/examples/product-labels-markings.gif'
              }
            ]
          }
        },
        {
          name: 'Gap & Clearance',
          description: 'Adding realistic assembly gaps',
          icon: '/Icons/mesh_grid.svg',
          detailedInfo: {
            overview: 'Real products have tiny gaps between parts. Add 0.1-0.3mm gaps between panels and components. These catch light and shadow, adding realism and suggesting assembly.',
            pages: [
              {
                title: 'Panel Separation',
                content: 'Separate top and bottom housing with small gap. Offset faces slightly or use Solidify modifier. Gap should be consistent - use Array modifier for uniform spacing.',
                image: '/examples/product-panel-separation.gif'
              },
              {
                title: 'Button Clearances',
                content: 'Leave small gap around buttons - 0.2-0.5mm. Suggests button can move. Use Offset Faces or scale faces slightly inward after insetting.',
                image: '/examples/product-button-clearances.gif'
              },
              {
                title: 'Seam Lines',
                content: 'Add subtle seams where parts meet. Real products are assembled from multiple parts. Show seams deliberately - they tell manufacturing story.',
                image: '/examples/product-seam-lines.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Materials & Rendering',
      icon: '/Icons/node_material.svg',
      color: '#ef4444',
      steps: [
        {
          name: 'Material Setup',
          description: 'Creating realistic materials',
          icon: '/Icons/brush.draw.svg',
          detailedInfo: {
            overview: 'Apply materials based on manufacturing reality. Plastic housings, metal accents, rubber grips, glass screens. Each material has distinct properties.',
            pages: [
              {
                title: 'Base Materials',
                content: 'Assign base materials to components - plastic, metal, glass, rubber. Set up Principled BSDF correctly for each material type. Get base look right first.',
                image: '/examples/product-base-materials.gif'
              },
              {
                title: 'Texture Mapping',
                content: 'UV unwrap for texture application. Mark seams along edges and hidden areas. Use texture painting or procedural textures for surface variation.',
                image: '/examples/product-texture-mapping.gif'
              },
              {
                title: 'Detail Textures',
                content: 'Add roughness variation, normal maps for texture, fingerprints and wear. Layer multiple textures with Mix nodes. Subtle variation prevents CG look.',
                image: '/examples/product-detail-textures.gif'
              }
            ]
          }
        },
        {
          name: 'Lighting Setup',
          description: 'Studio lighting for products',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'Product photography uses studio lighting - key light, fill lights, rim lights, and HDRI environment. Create photography-style lighting setup.',
            pages: [
              {
                title: 'HDRI Environment',
                content: 'Use studio HDRI for base illumination and reflections. Adjust strength for mood - bright for clean product shots, dim for dramatic. HDRI provides realistic reflections.',
                image: '/examples/product-hdri-setup.gif'
              },
              {
                title: 'Key Light',
                content: 'Add large area light as key light - main illumination source. Position 45° from subject. Adjust size for soft shadows. Power should be 2-3x fill lights.',
                image: '/examples/product-key-light.gif'
              },
              {
                title: 'Fill & Rim Lights',
                content: 'Add fill light opposite key to soften shadows. Rim light from behind to separate product from background. Use lower power than key light for each.',
                image: '/examples/product-fill-rim-lights.gif'
              }
            ]
          }
        },
        {
          name: 'Camera & Composition',
          description: 'Framing product shots',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Product photography follows composition rules. Use three-quarter view to show depth, appropriate focal length to avoid distortion, and composition rules.',
            pages: [
              {
                title: 'Camera Angle',
                content: 'Use 3/4 view for hero shots - shows front and side simultaneously. Slightly above subject to show top. Avoid extreme angles unless for specific effect.',
                image: '/examples/product-camera-angle.gif'
              },
              {
                title: 'Focal Length',
                content: 'Use 50-85mm focal length for product shots. Wider lenses cause distortion. Longer lenses compress depth. 50mm mimics human eye, 85mm is flattering.',
                image: '/examples/product-focal-length.gif'
              },
              {
                title: 'Depth of Field',
                content: 'Use shallow depth of field to focus attention. F-stop 2.8-5.6 for product shots. Keep important features in focus, allow background to blur softly.',
                image: '/examples/product-depth-field.gif'
              }
            ]
          }
        },
        {
          name: 'Post-Processing',
          description: 'Final polish in compositing',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Enhance renders in compositor. Add subtle effects that sell the product - light bloom, color grading, subtle vignette, slight sharpening.',
            pages: [
              {
                title: 'Color Grading',
                content: 'Adjust color balance, saturation, contrast. Product renders often benefit from slight saturation boost. Use Color Balance node for mood adjustment.',
                image: '/examples/product-color-grading.gif'
              },
              {
                title: 'Glare & Bloom',
                content: 'Add Glare node for light bloom on bright areas. Use Fog Glow type, low threshold. Suggests shiny surfaces and adds premium feel. Keep subtle.',
                image: '/examples/product-glare-bloom.gif'
              },
              {
                title: 'Sharpening',
                content: 'Add subtle sharpening with Filter node. Makes edges crisper and enhances detail perception. Over-sharpening looks bad - keep barely noticeable.',
                image: '/examples/product-sharpening.gif'
              }
            ]
          }
        }
      ]
    }
  ],

   practiceProjects : [
    { 
      title: 'Design a Wireless Earbud Case', 
      desc: 'Smooth organic forms with mechanical precision',
      duration: '2 hours', 
      difficulty: 'Beginner',
      skills: ['Subdivision Surface', 'Boolean Operations', 'Edge Flow']
    },
    { 
      title: 'Model a Computer Mouse', 
      desc: 'Ergonomic design with button detailing',
      duration: '2.5 hours', 
      difficulty: 'Intermediate',
      skills: ['Curve Modeling', 'Panel Detailing', 'Material Assignment']
    },
    { 
      title: 'Create a Smart Speaker', 
      desc: 'Material mixing and fabric simulation',
      duration: '3 hours', 
      difficulty: 'Intermediate',
      skills: ['Array Modifier', 'Texture Baking', 'Cloth Simulation']
    },
    { 
      title: 'Design a Premium Headphone Set', 
      desc: 'Complex assembly with multiple materials',
      duration: '4 hours', 
      difficulty: 'Advanced',
      skills: ['Multi-Object Assembly', 'PBR Materials', 'Mirror Workflow', 'UV Unwrapping']
    }
  ]
}