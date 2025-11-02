export const physicsLessonData = {

  heroConfig: {
    title: 'Physics',
    gradientText: 'Simulation',
    subtitle: 'Harness real-world physics with rigid body, soft body, cloth, and fluid dynamics',
    gradientColors: 'linear-gradient(135deg, #14b8a6, #06b6d4, #0ea5e9)',
    badges: [
      { icon: '/Icons/time.svg', title: '60 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/mod_physics.svg', title: '5 Systems', subtitle: 'Physics types' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/mod_physics.svg', label: 'Physics Systems' },
    { id: 'techniques', icon: '/Icons/settings.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#14b8a6',

  overviewCards: [
    {
      icon: '/Icons/mod_physics.svg',
      title: 'Real-World Behavior',
      content: 'Physics simulations bring realism to your scenes with gravity, collisions, and material properties. From falling objects to flowing liquids, simulate natural phenomena that would be impossible to animate by hand.'
    },
    {
      icon: '/Icons/time.svg',
      title: 'Cache & Bake',
      content: 'Simulations calculate frame-by-frame based on physics laws. Bake your simulations to lock in the results, improving playback performance and allowing you to focus on other aspects of your scene.'
    },
    {
      icon: '/Icons/modifier.svg',
      title: 'Modifier Stack',
      content: 'Most physics are applied as modifiers, letting you combine them with other effects. Stack cloth with subdivision, collision with deformation, creating complex interactions in a non-destructive workflow.'
    }
  ],

  contentTitle: 'Physics Systems & Properties',
  contentDescription: 'Master the simulation systems for realistic motion and interaction',

  categories: [
    {
      name: 'Rigid Body',
      icon: '/Icons/mod_physics.svg',
      color: '#14b8a6',
      items: [
        {
          name: 'Active Rigid Body',
          description: 'Dynamic objects affected by forces',
          icon: '/Icons/rigidbody_active.png',
          detailedInfo: {
            overview: 'Active Rigid Bodies are dynamic objects that fall, bounce, and collide based on physics. They respond to gravity, forces, and collisions with other objects.',
            pages: [
              {
                title: 'Creating Active Bodies',
                content: 'Add Rigid Body physics from the Physics Properties panel. Set type to Active. Objects immediately respond to gravity and will fall when animation plays.',
                image: '/examples/physics-rigidbody-active.gif'
              },
              {
                title: 'Mass & Center of Mass',
                content: 'Mass affects how objects respond to forces. Heavier objects require more force to move. Adjust Center of Mass to change balance and rotation behavior.',
                image: '/examples/physics-rigidbody-mass.gif'
              },
              {
                title: 'Collision Shape',
                content: 'Collision Shape determines physics boundaries. Box/Sphere are fast, Convex Hull fits complex shapes, Mesh is most accurate but slowest. Choose based on detail needs.',
                image: '/examples/physics-rigidbody-shape.gif'
              }
            ]
          }
        },
        {
          name: 'Passive Rigid Body',
          description: 'Static collision objects',
          icon: '/Icons/rigidbody_passive.svg',
          detailedInfo: {
            overview: 'Passive Rigid Bodies are static objects that other objects collide with but don\'t move themselves. Perfect for floors, walls, and collision boundaries.',
            pages: [
              {
                title: 'Static Colliders',
                content: 'Set Rigid Body type to Passive. Objects become immovable collision surfaces. Active bodies bounce off passive bodies but passive bodies never move.',
                image: '/examples/physics-rigidbody-passive.gif'
              },
              {
                title: 'Animated Passives',
                content: 'Enable Animated checkbox to move passive bodies with keyframes. Active bodies collide with them as they move, perfect for moving platforms or obstacles.',
                image: '/examples/physics-rigidbody-animated.gif'
              }
            ]
          }
        },
        {
          name: 'Collision Properties',
          description: 'Control bounce and friction',
          icon: '/Icons/collision.svg',
          detailedInfo: {
            overview: 'Collision properties control how objects interact. Bounciness, friction, and damping determine the physical feel of impacts and motion.',
            pages: [
              {
                title: 'Bounciness',
                content: 'Bounciness (Restitution) ranges 0-1. Zero means no bounce, one means perfect elastic collision. Adjust for rubber balls (0.9) vs clay (0.1).',
                image: '/examples/physics-collision-bounce.gif'
              },
              {
                title: 'Friction',
                content: 'Friction resists sliding. High friction (0.8-1.0) for rubber on concrete, low (0.1-0.2) for ice or metal. Affects how objects slide after contact.',
                image: '/examples/physics-collision-friction.gif'
              },
              {
                title: 'Damping',
                content: 'Damping slows object motion over time. Translation damping affects linear motion, rotation damping affects spinning. Simulates air resistance.',
                image: '/examples/physics-collision-damping.gif'
              }
            ]
          }
        },
        {
          name: 'Constraints',
          description: 'Link objects together',
          icon: '/Icons/constraint.svg',
          detailedInfo: {
            overview: 'Rigid Body Constraints link objects together with physics joints. Create hinges, motors, springs, and complex mechanical systems.',
            pages: [
              {
                title: 'Fixed Constraint',
                content: 'Fixed constraint glues two objects together. They move as one unit but maintain independent collision. Perfect for compound objects.',
                image: '/examples/physics-constraint-fixed.gif'
              },
              {
                title: 'Hinge Constraint',
                content: 'Hinge creates rotation around an axis. Enable motor for powered rotation, set limits for restricted movement. Perfect for doors, wheels, joints.',
                image: '/examples/physics-constraint-hinge.gif'
              },
              {
                title: 'Spring Constraint',
                content: 'Spring constraint creates elastic connection between objects. Adjust stiffness and damping for bouncy or rigid springs. Great for suspension.',
                image: '/examples/physics-constraint-spring.gif'
              }
            ]
          }
        },
        {
          name: 'Force Fields',
          description: 'Apply external forces',
          icon: '/Icons/force_field.svg',
          detailedInfo: {
            overview: 'Force Fields affect rigid bodies within their influence. Create wind, vortexes, explosions, and other environmental forces.',
            pages: [
              {
                title: 'Wind Force',
                content: 'Wind creates directional force. Adjust strength and flow. Point wind direction with object rotation. Stack multiple winds for complex air flow.',
                image: '/examples/physics-force-wind.gif'
              },
              {
                title: 'Vortex Force',
                content: 'Vortex creates spinning force around axis. Objects spiral inward or outward. Perfect for tornados, drains, or orbital motion.',
                image: '/examples/physics-force-vortex.gif'
              },
              {
                title: 'Turbulence',
                content: 'Turbulence adds chaotic motion. Increase strength for wild randomness, adjust flow for variation scale. Great for natural unpredictability.',
                image: '/examples/physics-force-turbulence.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Soft Body',
      icon: '/Icons/mod_softbody.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Soft Body Basics',
          description: 'Deformable physics objects',
          icon: '/Icons/softbody.png',
          detailedInfo: {
            overview: 'Soft Body physics simulates deformable objects like jelly, rubber, or flesh. Vertices move independently based on forces, edges, and springs.',
            pages: [
              {
                title: 'Enabling Soft Body',
                content: 'Add Soft Body physics from Physics Properties. Object becomes deformable, responding to gravity and collisions with flexible deformation.',
                image: '/examples/physics-softbody-enable.gif'
              },
              {
                title: 'Edge Springs',
                content: 'Edges act as springs connecting vertices. Adjust Stiffness for rigidity (low = jelly, high = rubber). Pull determines how much edges resist stretching.',
                image: '/examples/physics-softbody-springs.gif'
              },
              {
                title: 'Goal Weights',
                content: 'Goal weights pin vertices to original position. Weight 1 = locked, 0 = free. Paint vertex groups for partial pinning, perfect for cloth tails or flags.',
                image: '/examples/physics-softbody-goals.gif'
              }
            ]
          }
        },
        {
          name: 'Soft Body Settings',
          description: 'Control deformation behavior',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'Soft Body settings control simulation quality, solver steps, and material properties. Balance realism with performance.',
            pages: [
              {
                title: 'Simulation Quality',
                content: 'Increase Step Min/Max for stability. Higher steps = more accurate but slower. Use Choke to prevent interpenetration in tight spaces.',
                image: '/examples/physics-softbody-quality.gif'
              },
              {
                title: 'Damping',
                content: 'Damping reduces oscillation. Higher values stop bouncing faster. Essential for preventing runaway jiggling in soft objects.',
                image: '/examples/physics-softbody-damping.gif'
              }
            ]
          }
        },
        {
          name: 'Self Collision',
          description: 'Prevent mesh self-intersection',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Self Collision prevents soft body from intersecting itself. Essential for cloth, rubber objects, or anything that folds.',
            pages: [
              {
                title: 'Enabling Self Collision',
                content: 'Enable Self Collision in Soft Body Collision panel. Adjust Ball Size for detection radius. Larger radius = more distance but fewer intersections.',
                image: '/examples/physics-softbody-selfcollision.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Cloth Simulation',
      icon: '/Icons/mod_cloth.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Cloth Physics',
          description: 'Realistic fabric simulation',
          icon: '/Icons/cloth.png',
          detailedInfo: {
            overview: 'Cloth simulation creates realistic fabric behavior with wrinkles, folds, and draping. Optimized for clothing, flags, curtains, and any fabric material.',
            pages: [
              {
                title: 'Basic Cloth Setup',
                content: 'Add Cloth physics to mesh. Object drapes under gravity, creating natural folds. Works best with subdivided meshes for smooth wrinkles.',
                image: '/examples/physics-cloth-basic.gif'
              },
              {
                title: 'Pinning Vertices',
                content: 'Create vertex group, assign vertices weight 1. Enable Shape > Pin Group in cloth settings. Pinned vertices stay locked, rest drapes naturally.',
                image: '/examples/physics-cloth-pinning.gif'
              },
              {
                title: 'Collision Objects',
                content: 'Add Collision physics to objects cloth should interact with. Cloth drapes over collision objects, wrapping around forms naturally.',
                image: '/examples/physics-cloth-collision.gif'
              }
            ]
          }
        },
        {
          name: 'Cloth Properties',
          description: 'Material physical properties',
          icon: '/Icons/material.svg',
          detailedInfo: {
            overview: 'Cloth properties control fabric type behavior. Adjust stiffness, damping, and mass for different materials from silk to leather.',
            pages: [
              {
                title: 'Fabric Presets',
                content: 'Presets provide starting points: Silk (light, fluid), Denim (heavy, stiff), Leather (thick, resistant). Customize from there for exact behavior.',
                image: '/examples/physics-cloth-presets.gif'
              },
              {
                title: 'Stiffness Settings',
                content: 'Tension = resistance to stretching, Compression = resistance to bunching, Shear = resistance to diagonal deformation, Bending = resistance to folding.',
                image: '/examples/physics-cloth-stiffness.gif'
              },
              {
                title: 'Damping',
                content: 'Damping reduces cloth motion over time. Tension/Compression damping stops bouncing, Bending damping settles folds. Higher values = faster settling.',
                image: '/examples/physics-cloth-damping.gif'
              }
            ]
          }
        },
        {
          name: 'Internal Springs',
          description: 'Additional structural support',
          icon: '/Icons/constraint.svg',
          detailedInfo: {
            overview: 'Internal Springs add invisible structural support between vertices, preventing excessive stretching and maintaining cloth shape.',
            pages: [
              {
                title: 'Spring Types',
                content: 'Structural springs follow edges, Shear springs connect diagonals, Bending springs maintain surface curvature. Enable multiple types for stability.',
                image: '/examples/physics-cloth-springs.gif'
              }
            ]
          }
        },
        {
          name: 'Cloth Collision',
          description: 'Collision detection settings',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Cloth Collision settings control how fabric interacts with objects and itself. Balance quality with performance.',
            pages: [
              {
                title: 'Collision Distance',
                content: 'Distance sets gap between cloth and collision object. Too small = poking through, too large = hovering. Balance based on animation speed.',
                image: '/examples/physics-cloth-distance.gif'
              },
              {
                title: 'Self Collision',
                content: 'Enable Self Collision to prevent cloth from intersecting itself. Essential for flags, capes, or any fabric that folds back on itself.',
                image: '/examples/physics-cloth-selfcollision.gif'
              }
            ]
          }
        },
        {
          name: 'Pressure & Volume',
          description: 'Inflated cloth effects',
          icon: '/Icons/inflate.png',
          detailedInfo: {
            overview: 'Pressure creates inflated cloth like balloons or airbags. Volume preservation maintains cloth volume during simulation.',
            pages: [
              {
                title: 'Pressure Simulation',
                content: 'Enable Pressure with closed mesh. Positive pressure inflates (balloon), negative deflates. Adjust Pressure value for inflation strength.',
                image: '/examples/physics-cloth-pressure.gif'
              },
              {
                title: 'Target Volume',
                content: 'Target Volume maintains initial cloth volume. Prevents cloth from collapsing or expanding excessively during simulation.',
                image: '/examples/physics-cloth-volume.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Fluid Simulation',
      icon: '/Icons/mod_fluidsim.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Fluid Domain',
          description: 'Simulation boundary container',
          icon: '/Icons/domain.png',
          detailedInfo: {
            overview: 'Fluid Domain defines where simulation occurs. All fluid flows, collides, and dissipates within domain boundaries.',
            pages: [
              {
                title: 'Creating Domain',
                content: 'Add cube scaled to contain fluid area. Add Fluid physics, set type to Domain. This becomes simulation container. Larger domains = more memory.',
                image: '/examples/physics-fluid-domain.gif'
              },
              {
                title: 'Domain Resolution',
                content: 'Resolution Divisions controls fluid detail. Higher = more detail but slower simulation. Start low (64-128) for tests, increase for final renders.',
                image: '/examples/physics-fluid-resolution.gif'
              },
              {
                title: 'Domain Type',
                content: 'Liquid for water/liquids, Gas for smoke/fire. Each type has specialized settings for that simulation behavior.',
                image: '/examples/physics-fluid-type.gif'
              }
            ]
          }
        },
        {
          name: 'Fluid Flow',
          description: 'Fluid emission sources',
          icon: '/Icons/flow.png',
          detailedInfo: {
            overview: 'Flow objects emit fluid into domain. Control emission rate, velocity, and initial velocity for realistic fluid injection.',
            pages: [
              {
                title: 'Flow Types',
                content: 'Geometry emits from mesh surface, Inflow continuously generates fluid. Use Geometry for initial states, Inflow for continuous sources like taps.',
                image: '/examples/physics-fluid-flow.gif'
              },
              {
                title: 'Initial Velocity',
                content: 'Set Initial Velocity for fluid starting motion. Add velocity along normals for spray, add object velocity for moving emitters.',
                image: '/examples/physics-fluid-velocity.gif'
              },
              {
                title: 'Sampling',
                content: 'Sampling Substeps improves thin fluid streams. Higher substeps = smoother emission but slower simulation. Increase for fast-moving fluid.',
                image: '/examples/physics-fluid-sampling.gif'
              }
            ]
          }
        },
        {
          name: 'Fluid Collision',
          description: 'Obstacles for fluid interaction',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Effector objects deflect and interact with fluid. Fluid flows around, splashes against, and is contained by collision objects.',
            pages: [
              {
                title: 'Setting Up Collisions',
                content: 'Add Fluid physics to object, set type to Effector. Fluid now collides with object surface. Volume Initialization controls precision.',
                image: '/examples/physics-fluid-effector.gif'
              },
              {
                title: 'Surface Settings',
                content: 'Enable Is Planar for infinite planes (floors). Surface Thickness prevents thin objects from leaking. Adjust based on object type.',
                image: '/examples/physics-fluid-surface.gif'
              }
            ]
          }
        },
        {
          name: 'Liquid Physics',
          description: 'Water and liquid simulation',
          icon: '/Icons/liquid.png',
          detailedInfo: {
            overview: 'Liquid simulation handles water, oils, and viscous fluids. Control viscosity, surface tension, and diffusion for different liquid types.',
            pages: [
              {
                title: 'Viscosity',
                content: 'Viscosity controls liquid thickness. Low (0-1) = water, medium (5-20) = oil, high (50+) = honey. Affects flow speed and behavior.',
                image: '/examples/physics-liquid-viscosity.gif'
              },
              {
                title: 'Mesh Generation',
                content: 'Liquid generates mesh for rendering. Adjust Upres Factor for detail. Particle Radius affects smoothness. Higher values = smoother surface.',
                image: '/examples/physics-liquid-mesh.gif'
              },
              {
                title: 'Diffusion',
                content: 'Diffusion spreads liquid particles, creating smoother flow. Higher values smooth out splashes and ripples for calmer liquid behavior.',
                image: '/examples/physics-liquid-diffusion.gif'
              }
            ]
          }
        },
        {
          name: 'Gas & Smoke',
          description: 'Smoke and fire simulation',
          icon: '/Icons/smoke.png',
          detailedInfo: {
            overview: 'Gas domain handles smoke, fire, and atmospheric effects. Control buoyancy, vorticity, and dissipation for realistic gaseous behavior.',
            pages: [
              {
                title: 'Smoke Basics',
                content: 'Set Domain Type to Gas. Flow objects emit smoke. Adjust Density for opacity, Temperature for buoyancy. Hot smoke rises, cold smoke falls.',
                image: '/examples/physics-smoke-basic.gif'
              },
              {
                title: 'Vorticity',
                content: 'Vorticity adds swirling detail to smoke. Higher values create more turbulent, chaotic motion. Essential for realistic smoke behavior.',
                image: '/examples/physics-smoke-vorticity.gif'
              },
              {
                title: 'Fire Simulation',
                content: 'Enable Fire in Domain settings. Set Flow to Fire + Smoke. Flame responds to fuel, creates heat, and generates smoke. Adjust reaction speed.',
                image: '/examples/physics-fire-simulation.gif'
              }
            ]
          }
        },
        {
          name: 'Baking Fluid',
          description: 'Cache simulation for playback',
          icon: '/Icons/bake.png',
          detailedInfo: {
            overview: 'Baking calculates and saves simulation to disk. Essential for fluid simulations - they must be baked before rendering.',
            pages: [
              {
                title: 'Baking Process',
                content: 'Set frame range, click Bake Data. Simulation calculates each frame, saving to cache. Larger domains and higher resolution take more time.',
                image: '/examples/physics-fluid-bake.gif'
              },
              {
                title: 'Bake Types',
                content: 'Bake Data for basic simulation, Bake Mesh for liquid surface, Bake Particles for spray/foam/bubbles. Bake in order for dependent systems.',
                image: '/examples/physics-fluid-baketypes.gif'
              },
              {
                title: 'Cache Management',
                content: 'Free Data clears cache. Adjust frame range to rebake sections. Resume continues from last baked frame. Save cache files for backup.',
                image: '/examples/physics-fluid-cache.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Dynamic Paint',
      icon: '/Icons/brush.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Paint Canvas',
          description: 'Surface that receives paint',
          icon: '/Icons/canvas.png',
          detailedInfo: {
            overview: 'Canvas objects receive dynamic paint from brush objects. Create footprints, tire tracks, paint splatter, or any surface interaction.',
            pages: [
              {
                title: 'Setting Up Canvas',
                content: 'Add Dynamic Paint modifier, set to Canvas. Choose Surface type: Paint for colors, Displace for height, Wave for ripples.',
                image: '/examples/physics-dpaint-canvas.gif'
              },
              {
                title: 'Output Settings',
                content: 'Paint outputs to vertex colors, image sequence, or displacement. Choose based on need - vertex for previews, image for detail.',
                image: '/examples/physics-dpaint-output.gif'
              }
            ]
          }
        },
        {
          name: 'Paint Brush',
          description: 'Objects that apply paint',
          icon: '/Icons/brush.svg',
          detailedInfo: {
            overview: 'Brush objects apply paint to canvas surfaces. Objects, particles, or volumes can all act as brushes.',
            pages: [
              {
                title: 'Creating Brushes',
                content: 'Add Dynamic Paint modifier, set to Brush. Object now paints on canvas. Mesh Volume paints entire volume, Mesh Distance paints proximity.',
                image: '/examples/physics-dpaint-brush.gif'
              },
              {
                title: 'Paint Settings',
                content: 'Adjust Paint Color, Alpha, Wetness. Enable Particle System for spray effects. Velocity affects paint streaking and spread.',
                image: '/examples/physics-dpaint-settings.gif'
              }
            ]
          }
        },
        {
          name: 'Displacement Paint',
          description: 'Height-based surface effects',
          icon: '/Icons/displace.png',
          detailedInfo: {
            overview: 'Displacement paint creates height variations on surfaces. Perfect for footprints, tire tracks, or any indentation effect.',
            pages: [
              {
                title: 'Height Effects',
                content: 'Set Canvas Surface Type to Displace. Brush objects create height displacement. Negative values create indents, positive creates bumps.',
                image: '/examples/physics-dpaint-displace.gif'
              }
            ]
          }
        },
        {
          name: 'Wave Simulation',
          description: 'Ripple and wave effects',
          icon: '/Icons/wave.png',
          detailedInfo: {
            overview: 'Wave surfaces create ripples and waves when brushes interact. Simulate water ripples, energy fields, or propagating effects.',
            pages: [
              {
                title: 'Wave Physics',
                content: 'Set Surface Type to Waves. Brush interaction creates ripples that propagate outward. Adjust Spring, Damping, Wave Speed for different effects.',
                image: '/examples/physics-dpaint-waves.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Particles & Hair',
      icon: '/Icons/particles.svg',
      color: '#f43f5e',
      items: [
        {
          name: 'Particle Systems',
          description: 'Emitter and hair systems',
          icon: '/Icons/particle_emitter.png',
          detailedInfo: {
            overview: 'Particle systems create multiple objects or strands. Emitter type shoots particles, Hair type grows strands from surface.',
            pages: [
              {
                title: 'Emitter Particles',
                content: 'Add Particle System, type Emitter. Particles shoot from surface based on settings. Adjust lifetime, velocity, and emission rate.',
                image: '/examples/physics-particle-emitter.gif'
              },
              {
                title: 'Hair System',
                content: 'Set type to Hair. Strands grow from surface as curves. Perfect for fur, grass, cables, or any strand-based effect.',
                image: '/examples/physics-particle-hair.gif'
              }
            ]
          }
        },
        {
          name: 'Particle Physics',
          description: 'Physical particle behavior',
          icon: '/Icons/mod_physics.svg',
          detailedInfo: {
            overview: 'Particle physics controls how particles move and interact. Add gravity, forces, collisions, and complex motion.',
            pages: [
              {
                title: 'Physics Settings',
                content: 'Enable Newtonian physics for gravity and forces. Adjust Mass, Drag, and damping for different particle behavior from feathers to rocks.',
                image: '/examples/physics-particle-physics.gif'
              },
              {
                title: 'Force Fields',
                content: 'Particles react to force fields. Add Wind, Turbulence, or Vortex for complex motion. Adjust strength and falloff per field.',
                image: '/examples/physics-particle-forces.gif'
              }
            ]
          }
        },
        {
          name: 'Particle Collision',
          description: 'Collision detection for particles',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Particles can collide with objects and react physically. Add deflection for bouncing or killing for absorption.',
            pages: [
              {
                title: 'Collision Setup',
                content: 'Enable Collision in particle settings. Add Collision physics to deflector objects. Adjust Friction and Bounciness for surface behavior.',
                image: '/examples/physics-particle-collision.gif'
              },
              {
                title: 'Kill & Stick',
                content: 'Enable Kill on collision to delete particles on contact. Use Stick for particles that attach to surfaces like snow or paint splatter.',
                image: '/examples/physics-particle-kill.gif'
              }
            ]
          }
        },
        {
          name: 'Hair Dynamics',
          description: 'Simulated hair physics',
          icon: '/Icons/hair.png',
          detailedInfo: {
            overview: 'Hair Dynamics adds physics to hair strands. Create flowing hair, swaying grass, or any strand that should move naturally.',
            pages: [
              {
                title: 'Enabling Hair Dynamics',
                content: 'In Hair system, enable Hair Dynamics. Strands respond to forces and collisions. Adjust Stiffness for hair type - soft for fine hair, stiff for cables.',
                image: '/examples/physics-hair-dynamics.gif'
              },
              {
                title: 'Pinning Roots',
                content: 'Pin Root locks strand base to surface. Rest moves freely. Adjust Pin Goal for partial pinning along strand length.',
                image: '/examples/physics-hair-pinning.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Special Physics',
      icon: '/Icons/settings.svg',
      color: '#a855f7',
      items: [
        {
          name: 'Ocean Modifier',
          description: 'Large-scale water simulation',
          icon: '/Icons/ocean.png',
          detailedInfo: {
            overview: 'Ocean Modifier creates large water surfaces with waves, foam, and realistic motion without expensive fluid simulation.',
            pages: [
              {
                title: 'Ocean Basics',
                content: 'Add Ocean modifier to plane. Instant animated ocean with waves. Adjust Scale, Choppiness, and Time for wave characteristics.',
                image: '/examples/physics-ocean-basic.gif'
              },
              {
                title: 'Wave Spectrum',
                content: 'Control wave types with Spectrum settings. Adjust Wave Scale, Wave Alignment, Wave Direction for realistic or stylized seas.',
                image: '/examples/physics-ocean-spectrum.gif'
              },
              {
                title: 'Foam & Spray',
                content: 'Generate Foam data from wave crests. Use as vertex group for white foam material. Creates realistic breaking wave effects.',
                image: '/examples/physics-ocean-foam.gif'
              }
            ]
          }
        },
        {
          name: 'Smoke Flow Objects',
          description: 'Animated smoke emission',
          icon: '/Icons/smoke.png',
          detailedInfo: {
            overview: 'Flow objects control where and how smoke emits. Animate position, scale, and strength for dynamic smoke effects.',
            pages: [
              {
                title: 'Flow Animation',
                content: 'Animate flow object transform for moving smoke sources. Keyframe Flow velocity for pulsing emission or exhaust effects.',
                image: '/examples/physics-smoke-flow.gif'
              }
            ]
          }
        },
        {
          name: 'Explode Modifier',
          description: 'Particle-based destruction',
          icon: '/Icons/explode.png',
          detailedInfo: {
            overview: 'Explode Modifier scatters mesh faces along particle paths. Create explosions, disintegration, or shattering effects.',
            pages: [
              {
                title: 'Explosion Setup',
                content: 'Add Particle System, then Explode Modifier. Faces follow particles creating destruction. Adjust Particle UV for timing control.',
                image: '/examples/physics-explode-basic.gif'
              },
              {
                title: 'Controlled Destruction',
                content: 'Use vertex groups to control which faces explode. Paint weights for partial destruction or directional breaking patterns.',
                image: '/examples/physics-explode-control.gif'
              }
            ]
          }
        },
        {
          name: 'Collision Modifier',
          description: 'Real-time collision deformation',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Collision Modifier allows objects to collide with cloth, soft bodies, and particles. Essential for physics interaction.',
            pages: [
              {
                title: 'Adding Collisions',
                content: 'Add Collision physics to object. Other physics systems now detect and respond to this object. Adjust Thickness and Damping.',
                image: '/examples/physics-collision-modifier.gif'
              },
              {
                title: 'Collision Quality',
                content: 'Increase Thickness for safety margin. Enable Single Sided for thin objects. Adjust Friction for surface grip.',
                image: '/examples/physics-collision-quality.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  techniques: [
    {
      name: 'Simulation Workflows',
      icon: '/Icons/tool.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Baking Physics',
          description: 'Cache simulations for playback',
          icon: '/Icons/bake.png',
          detailedInfo: {
            overview: 'Baking calculates physics ahead of time and stores results. Essential for complex simulations, improves playback, and allows editing after simulation.',
            pages: [
              {
                title: 'When to Bake',
                content: 'Bake when simulation is too slow for real-time, before rendering, or when you need to edit simulation results. Fluid must always be baked.',
                image: '/examples/physics-baking-when.gif'
              },
              {
                title: 'Baking Process',
                content: 'Set frame range in scene settings. Click Bake in physics panel. Calculation runs from start to end frame, saving to cache folder.',
                image: '/examples/physics-baking-process.gif'
              },
              {
                title: 'Cache Location',
                content: 'Cache saves to project folder by default. Change path for network rendering. External cache can be shared between blend files.',
                image: '/examples/physics-baking-cache.gif'
              }
            ]
          }
        },
        {
          name: 'Optimization Tips',
          description: 'Faster simulation techniques',
          icon: '/Icons/settings.svg',
          detailedInfo: {
            overview: 'Optimize simulations for speed without sacrificing quality. Use smart techniques to reduce calculation time.',
            pages: [
              {
                title: 'Start Low Resolution',
                content: 'Test with low resolution or few particles. Increase detail only for final bake. Save hours of iteration time with quick previews.',
                image: '/examples/physics-optimize-resolution.gif'
              },
              {
                title: 'Limit Domain Size',
                content: 'Keep fluid domains as small as possible. Larger domains = exponentially longer bake times. Crop tight to action area.',
                image: '/examples/physics-optimize-domain.gif'
              },
              {
                title: 'Reduce Substeps',
                content: 'Lower substeps for faster simulation. Increase only if seeing artifacts. Many simulations work fine with minimal substeps.',
                image: '/examples/physics-optimize-substeps.gif'
              }
            ]
          }
        },
        {
          name: 'Combining Physics',
          description: 'Stack multiple physics types',
          icon: '/Icons/modifier.svg',
          detailedInfo: {
            overview: 'Combine different physics for complex effects. Cloth on soft body, particles with fluid, create rich interactions.',
            pages: [
              {
                title: 'Physics Stack Order',
                content: 'Physics modifiers evaluate in stack order. Generally: Soft Body → Cloth → Collision. Order affects final result.',
                image: '/examples/physics-combine-stack.gif'
              },
              {
                title: 'Cloth + Collision',
                content: 'Character with Collision modifier, cloth draped over. Cloth conforms to animated character. Classic character clothing setup.',
                image: '/examples/physics-combine-cloth.gif'
              },
              {
                title: 'Particles + Force Fields',
                content: 'Emit particles, add force fields for complex motion. Wind for leaves, vortex for spirals, turbulence for chaos. Layer forces.',
                image: '/examples/physics-combine-particles.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Real-World Examples',
      icon: '/Icons/view_camera.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Realistic Flag',
          description: 'Cloth simulation with wind',
          icon: '/Icons/flag.png',
          detailedInfo: {
            overview: 'Create realistic waving flag using cloth physics and wind force. Pin one edge, let rest flow naturally.',
            pages: [
              {
                title: 'Flag Setup',
                content: 'Subdivided plane with Cloth modifier. Create vertex group on pole edge, pin in cloth settings. Add Wind force field.',
                image: '/examples/physics-example-flag.gif'
              },
              {
                title: 'Cloth Settings',
                content: 'Reduce Mass for lighter fabric. Increase Air Viscosity for air resistance. Adjust Stiffness low for silk flag, higher for heavy flag.',
                image: '/examples/physics-example-flag-settings.gif'
              }
            ]
          }
        },
        {
          name: 'Falling Objects',
          description: 'Rigid body domino chain',
          icon: '/Icons/rigidbody_active.png',
          detailedInfo: {
            overview: 'Chain reaction of falling objects using rigid body physics. Classic domino effect or collapsing structures.',
            pages: [
              {
                title: 'Domino Setup',
                content: 'Array of cubes as Active Rigid Bodies. First domino keyframed to fall. Chain reaction propagates through collision.',
                image: '/examples/physics-example-domino.gif'
              },
              {
                title: 'Timing Control',
                content: 'Adjust object spacing and fall angle for timing. Use passive objects as guides. Control cascade speed with friction.',
                image: '/examples/physics-example-domino-timing.gif'
              }
            ]
          }
        },
        {
          name: 'Water Pour',
          description: 'Liquid flowing into container',
          icon: '/Icons/liquid.png',
          detailedInfo: {
            overview: 'Simulate liquid pouring from one container to another. Classic fluid simulation exercise.',
            pages: [
              {
                title: 'Pour Setup',
                content: 'Domain containing both containers. Source container as Flow (Geometry, Initial Velocity). Receiving container as Effector.',
                image: '/examples/physics-example-pour.gif'
              },
              {
                title: 'Liquid Behavior',
                content: 'Adjust Initial Velocity for pour speed. Set appropriate Viscosity for liquid type. Generate mesh for smooth render.',
                image: '/examples/physics-example-pour-behavior.gif'
              }
            ]
          }
        },
        {
          name: 'Smoke Plume',
          description: 'Rising smoke column',
          icon: '/Icons/smoke.png',
          detailedInfo: {
            overview: 'Create rising smoke column with turbulent detail. Perfect for chimneys, candles, or fire aftermath.',
            pages: [
              {
                title: 'Smoke Setup',
                content: 'Gas domain above emitter. Flow object set to Smoke with temperature. Hot smoke rises naturally with buoyancy.',
                image: '/examples/physics-example-smoke.gif'
              },
              {
                title: 'Detail & Turbulence',
                content: 'Increase Vorticity for swirling detail. Add Noise for fine turbulence. Adjust Heat Buoyancy for rise speed.',
                image: '/examples/physics-example-smoke-detail.gif'
              }
            ]
          }
        },
        {
          name: 'Breaking Objects',
          description: 'Destruction with cell fracture',
          icon: '/Icons/explode.png',
          detailedInfo: {
            overview: 'Break objects into pieces using Cell Fracture addon and rigid body physics. Create realistic destruction.',
            pages: [
              {
                title: 'Fracture Setup',
                content: 'Enable Cell Fracture addon. Select object, Cell Fracture to break into pieces. Each piece becomes Active Rigid Body.',
                image: '/examples/physics-example-fracture.gif'
              },
              {
                title: 'Impact Trigger',
                content: 'Animated object hits fractured object. Impact activates pieces. Use constraints for initial held-together state.',
                image: '/examples/physics-example-fracture-impact.gif'
              }
            ]
          }
        },
        {
          name: 'Ocean Scene',
          description: 'Large-scale water with waves',
          icon: '/Icons/ocean.png',
          detailedInfo: {
            overview: 'Create expansive ocean with realistic waves using Ocean Modifier. Efficient for large water surfaces.',
            pages: [
              {
                title: 'Ocean Setup',
                content: 'Large plane with Ocean Modifier. Adjust Resolution for detail level. Set Wave Scale for size, Time for animation speed.',
                image: '/examples/physics-example-ocean.gif'
              },
              {
                title: 'Ocean Realism',
                content: 'Enable Foam generation for wave crests. Adjust Choppiness for wave sharpness. Align waves for directional wind effect.',
                image: '/examples/physics-example-ocean-realism.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Troubleshooting',
      icon: '/Icons/error.svg',
      color: '#ef4444',
      items: [
        {
          name: 'Exploding Simulations',
          description: 'Fix unstable physics',
          icon: '/Icons/warning.svg',
          detailedInfo: {
            overview: 'Physics explosions happen when forces become too extreme. Usually caused by timestep issues or collision problems.',
            pages: [
              {
                title: 'Increase Substeps',
                content: 'Low substeps cause instability. Increase Steps Per Frame in physics settings. More steps = more stable but slower.',
                image: '/examples/physics-trouble-substeps.gif'
              },
              {
                title: 'Check Collisions',
                content: 'Objects starting inside collision volumes cause explosions. Move apart or increase Collision Distance for safety margin.',
                image: '/examples/physics-trouble-collision.gif'
              },
              {
                title: 'Reduce Forces',
                content: 'Extreme force values cause instability. Scale down force field strength. Increase damping to reduce energy.',
                image: '/examples/physics-trouble-forces.gif'
              }
            ]
          }
        },
        {
          name: 'Penetration Issues',
          description: 'Objects passing through',
          icon: '/Icons/collision.png',
          detailedInfo: {
            overview: 'Collision penetration ruins physics realism. Usually caused by thin objects, high speed, or low quality settings.',
            pages: [
              {
                title: 'Increase Thickness',
                content: 'Collision Thickness creates safety margin. Increase until penetration stops. Especially important for thin collision objects.',
                image: '/examples/physics-trouble-thickness.gif'
              },
              {
                title: 'Better Collision Shape',
                content: 'Mesh collision is most accurate but slowest. Use for final quality. Convex Hull good balance. Box/Sphere fastest but least accurate.',
                image: '/examples/physics-trouble-shape.gif'
              },
              {
                title: 'CCD for Fast Objects',
                content: 'Enable Continuous Collision Detection (CCD) in rigid body settings for fast-moving objects. Prevents tunneling through thin objects.',
                image: '/examples/physics-trouble-ccd.gif'
              }
            ]
          }
        },
        {
          name: 'Slow Simulations',
          description: 'Improve calculation speed',
          icon: '/Icons/time.svg',
          detailedInfo: {
            overview: 'Simulations can be slow. Optimize settings to maintain quality while reducing calculation time.',
            pages: [
              {
                title: 'Preview Resolution',
                content: 'Reduce resolution/particles for preview. Use viewport particle display percentage. Full detail only for final bake.',
                image: '/examples/physics-trouble-preview.gif'
              },
              {
                title: 'Simplify Collision',
                content: 'Use simpler collision shapes. Box collision much faster than Mesh. Reduce collision object polygon count.',
                image: '/examples/physics-trouble-simplify.gif'
              },
              {
                title: 'Disable Unnecessary Features',
                content: 'Turn off self-collision if not needed. Disable particle interactions if not visible. Each feature adds calculation time.',
                image: '/examples/physics-trouble-disable.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Domino Chain Reaction', 
      desc: 'Master rigid body physics fundamentals',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Rigid Body', 'Collisions', 'Passive Objects', 'Timing']
    },
    { 
      title: 'Waving Flag in Wind', 
      desc: 'Learn cloth simulation and pinning',
      duration: '30 min', 
      difficulty: 'Beginner',
      skills: ['Cloth Physics', 'Pinning', 'Wind Forces', 'Material Settings']
    },
    { 
      title: 'Water Glass Pour', 
      desc: 'Understand fluid dynamics basics',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['Fluid Domain', 'Flow Objects', 'Effectors', 'Mesh Generation']
    },
    { 
      title: 'Smoke Trail Effect', 
      desc: 'Create atmospheric gas simulation',
      duration: '40 min', 
      difficulty: 'Intermediate',
      skills: ['Gas Domain', 'Smoke Flow', 'Vorticity', 'Baking']
    },
    { 
      title: 'Destruction Sequence', 
      desc: 'Break objects with fracture and rigid body',
      duration: '60 min', 
      difficulty: 'Advanced',
      skills: ['Cell Fracture', 'Constraints', 'Impact Triggers', 'Timing Control']
    },
    { 
      title: 'Ocean Water Surface', 
      desc: 'Large-scale water with foam and spray',
      duration: '50 min', 
      difficulty: 'Advanced',
      skills: ['Ocean Modifier', 'Wave Spectrum', 'Foam Generation', 'Material Setup']
    }
  ]
}