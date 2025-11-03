export const riggingLessonData = {

  heroConfig: {
    title: 'Rigging',
    gradientText: 'Systems',
    subtitle: 'Build flexible armatures, bones, and constraints for character animation control',
    gradientColors: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
    badges: [
      { icon: '/Icons/time.svg', title: '60 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' },
      { icon: '/Icons/armature.svg', title: 'Full Control', subtitle: 'Animation ready' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/armature.svg', label: 'Rig Components' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#8b5cf6',

  overviewCards: [
    {
      icon: '/Icons/armature.svg',
      title: 'Armature Basics',
      content: 'Armatures are skeleton systems made of bones. Each bone controls part of your mesh. Build hierarchies where parent bones drive children - move a shoulder, the arm follows. The foundation of character animation.'
    },
    {
      icon: '/Icons/bone.svg',
      title: 'Bone Hierarchy',
      content: 'Bones exist in parent-child relationships. Parent bones control children automatically. A spine controls torso, torso controls shoulders, shoulders control arms. Hierarchies create realistic, efficient control.'
    },
    {
      icon: '/Icons/constraint.svg',
      title: 'Constraints System',
      content: 'Constraints add intelligent behavior to bones. IK makes feet stick to ground, Copy Rotation mirrors movement, Limit Rotation prevents impossible poses. Constraints transform simple bones into smart control systems.'
    }
  ],

  contentTitle: 'Rigging Tools & Components',
  contentDescription: 'Master armatures, bones, and constraint systems',

  categories: [
    {
      name: 'Armature Basics',
      icon: '/Icons/armature.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Add Armature',
          description: 'Create skeleton system',
          icon: '/Icons/armature_add.svg',
          detailedInfo: {
            overview: 'Add armature object to create skeleton. Armature contains bones. One armature can have hundreds of bones organized in hierarchy.',
            pages: [
              {
                title: 'Creating Armature',
                content: 'Shift+A > Armature > Single Bone. Creates armature object with one bone. Switch to Edit Mode to add more bones and build skeleton.',
                image: '/examples/armature-add.mp4'
              },
              {
                title: 'Armature Object',
                content: 'Armature is container object. Bones live inside it. Transform armature to move entire skeleton. All bones move together.',
                image: '/examples/armature-object.mp4'
              }
            ]
          }
        },
        {
          name: 'Edit Mode',
          description: 'Build bone structure',
          icon: '/Icons/edit_mode.svg',
          detailedInfo: {
            overview: 'Edit Mode is where you build skeleton structure. Add bones, position joints, create hierarchy. Construction phase.',
            pages: [
              {
                title: 'Edit vs Pose',
                content: 'Edit Mode (Tab): Build skeleton structure. Pose Mode (Ctrl+Tab): Animate the rig. Object Mode: Transform entire armature.',
                image: '/examples/armature-modes.mp4'
              },
              {
                title: 'Joint Editing',
                content: 'Select bone ends (joints). G to move, R to rotate, S to scale. Build skeleton by positioning joints precisely.',
                image: '/examples/armature-edit-joints.mp4'
              }
            ]
          }
        },
        {
          name: 'Pose Mode',
          description: 'Animate and test rig',
          icon: '/Icons/pose_mode.svg',
          detailedInfo: {
            overview: 'Pose Mode is animation mode. Rotate and move bones to pose character. Test rig functionality. Set keyframes for animation.',
            pages: [
              {
                title: 'Posing Bones',
                content: 'Ctrl+Tab enters Pose Mode. Select bones, R to rotate, G to move. Pose character without changing base structure.',
                image: '/examples/armature-pose.mp4'
              },
              {
                title: 'Reset Pose',
                content: 'Alt+G, Alt+R, Alt+S clears transforms. Returns bones to rest position. Essential for testing and resetting.',
                image: '/examples/armature-reset.mp4'
              }
            ]
          }
        },
        {
          name: 'X-Ray Display',
          description: 'See bones through mesh',
          icon: '/Icons/xray.svg',
          detailedInfo: {
            overview: 'Enable X-Ray to see bones through mesh. Essential for selecting and manipulating skeleton inside character.',
            pages: [
              {
                title: 'Visibility Toggle',
                content: 'In armature properties, enable In Front. Bones always visible through mesh. Click and pose without fighting visibility.',
                image: '/examples/armature-xray.mp4'
              }
            ]
          }
        },
        {
          name: 'Bone Display',
          description: 'Visualization options',
          icon: '/Icons/bone_display.svg',
          detailedInfo: {
            overview: 'Change bone visualization: Octahedral, Stick, B-Bone, Envelope. Different displays for different workflow needs.',
            pages: [
              {
                title: 'Display Types',
                content: 'Octahedral shows bone direction clearly. Stick for simple view. B-Bone shows curves. Envelope shows influence.',
                image: '/examples/armature-display.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Building Bones',
      icon: '/Icons/bone.svg',
      color: '#6366f1',
      items: [
        {
          name: 'Extrude Bone',
          description: 'Create connected child bones',
          icon: '/Icons/extrude.svg',
          detailedInfo: {
            overview: 'E to extrude new bone from selected tip. Creates connected child bone. Build chains quickly - spine, arm, finger bones.',
            pages: [
              {
                title: 'Bone Chains',
                content: 'Select bone tip, press E to extrude. New bone starts where parent ends. Automatically connected and parented. Build limbs fast.',
                image: '/examples/bone-extrude.mp4'
              },
              {
                title: 'Chain Building',
                content: 'Extrude repeatedly to create chains. E, move, E, move. Create entire arm or leg chain in seconds.',
                image: '/examples/bone-chain.mp4'
              }
            ]
          }
        },
        {
          name: 'Duplicate Bone',
          description: 'Copy bones',
          icon: '/Icons/duplicate.svg',
          detailedInfo: {
            overview: 'Shift+D duplicates selected bones. Copy bone structures. Create symmetrical limbs or repeated elements.',
            pages: [
              {
                title: 'Copying Structures',
                content: 'Build left arm, select all bones, Shift+D duplicate. Mirror X to create right arm. Instant symmetry.',
                image: '/examples/bone-duplicate.mp4'
              }
            ]
          }
        },
        {
          name: 'Subdivide Bone',
          description: 'Split bones into segments',
          icon: '/Icons/subdivide.svg',
          detailedInfo: {
            overview: 'Right-click > Subdivide splits bone into multiple segments. Add control points in middle of limbs.',
            pages: [
              {
                title: 'Adding Joints',
                content: 'Select bone, Subdivide to split. Creates new joint in middle. Add twist controls or bendy bone segments.',
                image: '/examples/bone-subdivide.mp4'
              }
            ]
          }
        },
        {
          name: 'Parent Bone',
          description: 'Create bone relationships',
          icon: '/Icons/parent.svg',
          detailedInfo: {
            overview: 'Ctrl+P creates parent-child relationships. Child bones follow parent automatically. Build skeleton hierarchy.',
            pages: [
              {
                title: 'Hierarchy Setup',
                content: 'Select child bone, then parent bone. Ctrl+P > Keep Offset. Child now follows parent transforms.',
                image: '/examples/bone-parent.mp4'
              },
              {
                title: 'Connected vs Offset',
                content: 'Connected: child starts exactly at parent tip. Keep Offset: maintains child position. Choose based on need.',
                image: '/examples/bone-parent-types.mp4'
              }
            ]
          }
        },
        {
          name: 'Bone Roll',
          description: 'Rotate bone twist axis',
          icon: '/Icons/roll.svg',
          detailedInfo: {
            overview: 'Ctrl+R in Edit Mode rotates bone around its length. Controls which direction is "up" for bone. Essential for proper deformation.',
            pages: [
              {
                title: 'Twist Alignment',
                content: 'Select bone, Ctrl+R to roll. Aligns bone local axes. Critical for proper constraint behavior and deformation.',
                image: '/examples/bone-roll.mp4'
              },
              {
                title: 'Recalculate Roll',
                content: 'Select all bones, Ctrl+N to recalculate roll automatically. Aligns bones to global or local axes. Quick alignment.',
                image: '/examples/bone-roll-auto.mp4'
              }
            ]
          }
        },
        {
          name: 'Bone Naming',
          description: 'Organize with names',
          icon: '/Icons/name.svg',
          detailedInfo: {
            overview: 'Name bones descriptively. Use .L/.R suffix for left/right. Proper naming enables symmetry tools and clear organization.',
            pages: [
              {
                title: 'Naming Convention',
                content: 'Use descriptive names: "arm.upper.L", "leg.lower.R". .L/.R enables X-Axis Mirror. Professional rigs need clear names.',
                image: '/examples/bone-naming.mp4'
              },
              {
                title: 'Batch Renaming',
                content: 'Select bones, F2 to rename. Use Find/Replace for batch operations. Rename entire chains quickly.',
                image: '/examples/bone-rename-batch.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Skinning & Weight Paint',
      icon: '/Icons/weight.svg',
      color: '#a855f7',
      items: [
        {
          name: 'Automatic Weights',
          description: 'Auto-bind mesh to bones',
          icon: '/Icons/auto_weight.svg',
          detailedInfo: {
            overview: 'Select mesh, then armature. Ctrl+P > With Automatic Weights. Blender calculates bone influences automatically.',
            pages: [
              {
                title: 'Quick Binding',
                content: 'Select mesh, shift-select armature. Ctrl+P > Automatic Weights. Mesh binds to bones with calculated weights.',
                image: '/examples/skin-auto-weights.mp4'
              },
              {
                title: 'When It Works',
                content: 'Auto weights work well for clean topology near bones. Character in T-pose, bones inside mesh. May need manual cleanup.',
                image: '/examples/skin-auto-when.mp4'
              }
            ]
          }
        },
        {
          name: 'Weight Paint Mode',
          description: 'Manually paint influences',
          icon: '/Icons/weight_paint.svg',
          detailedInfo: {
            overview: 'Weight Paint Mode lets you paint bone influence directly on mesh. Red = full influence, blue = no influence. Essential for fine control.',
            pages: [
              {
                title: 'Painting Weights',
                content: 'Select mesh, Ctrl+Tab > Weight Paint. Select bone in armature. Paint red where bone should control mesh. Blue where it shouldn\'t.',
                image: '/examples/skin-weight-paint.mp4'
              },
              {
                title: 'Weight Tools',
                content: 'Smooth weights, normalize all. Limit Total to prevent over-influence. Transfer weights from similar mesh.',
                image: '/examples/skin-weight-tools.mp4'
              }
            ]
          }
        },
        {
          name: 'Vertex Groups',
          description: 'Named vertex collections',
          icon: '/Icons/vertex_group.svg',
          detailedInfo: {
            overview: 'Each bone creates vertex group. Vertex groups store which vertices bone affects and how much. Foundation of skinning.',
            pages: [
              {
                title: 'Group Management',
                content: 'Vertex groups in mesh properties. One group per bone, same name as bone. Edit weights by assigning to groups.',
                image: '/examples/skin-vertex-groups.mp4'
              }
            ]
          }
        },
        {
          name: 'Envelope Skinning',
          description: 'Distance-based influence',
          icon: '/Icons/envelope.svg',
          detailedInfo: {
            overview: 'Envelope skinning uses bone distance and radius. Simpler than weight painting but less control. Good for quick tests.',
            pages: [
              {
                title: 'Distance Weights',
                content: 'Switch bone to Envelope mode. Adjust envelope radius. Vertices weight by distance from bone. Quick but imprecise.',
                image: '/examples/skin-envelope.mp4'
              }
            ]
          }
        },
        {
          name: 'Heat Weighting',
          description: 'Advanced auto-weighting',
          icon: '/Icons/heat.svg',
          detailedInfo: {
            overview: 'Heat weighting simulates heat spread through mesh. More accurate than simple distance. Better automatic weights.',
            pages: [
              {
                title: 'Better Auto-Weights',
                content: 'Ctrl+P > With Automatic Weights uses heat weighting by default. Accounts for mesh topology and bone structure.',
                image: '/examples/skin-heat.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Constraints',
      icon: '/Icons/constraint.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Copy Location',
          description: 'Match another bone\'s position',
          icon: '/Icons/copy_location.svg',
          detailedInfo: {
            overview: 'Copy Location makes bone follow target position. Eyes track target, hand grabs object. Simple but powerful.',
            pages: [
              {
                title: 'Position Following',
                content: 'Add Copy Location constraint. Set target bone/object. Constrained bone moves to match target position.',
                image: '/examples/constraint-copy-location.mp4'
              },
              {
                title: 'Axis Control',
                content: 'Enable/disable X, Y, Z axes independently. Follow only horizontal, only vertical, or specific combination.',
                image: '/examples/constraint-copy-loc-axis.mp4'
              }
            ]
          }
        },
        {
          name: 'Copy Rotation',
          description: 'Match another bone\'s rotation',
          icon: '/Icons/copy_rotation.svg',
          detailedInfo: {
            overview: 'Copy Rotation makes bone rotate like target. Mirror limb movements, synchronize rotations. Essential for mechanical rigs.',
            pages: [
              {
                title: 'Rotation Matching',
                content: 'Add Copy Rotation constraint. Bone now rotates exactly like target bone. Perfect for symmetrical motion.',
                image: '/examples/constraint-copy-rotation.mp4'
              }
            ]
          }
        },
        {
          name: 'Copy Scale',
          description: 'Match another bone\'s scale',
          icon: '/Icons/copy_scale.svg',
          detailedInfo: {
            overview: 'Copy Scale matches size. Breathing rigs, growing effects, or synchronized scaling. Less common but useful.',
            pages: [
              {
                title: 'Scale Matching',
                content: 'Bone scales to match target. Use for breath, muscle flex, or any synchronized size change.',
                image: '/examples/constraint-copy-scale.mp4'
              }
            ]
          }
        },
        {
          name: 'Limit Location',
          description: 'Restrict movement range',
          icon: '/Icons/limit_location.svg',
          detailedInfo: {
            overview: 'Limit Location prevents bone from moving outside defined bounds. Foot stays on ground, hand stays in valid range.',
            pages: [
              {
                title: 'Position Bounds',
                content: 'Set min/max for X, Y, Z. Bone can\'t move outside these limits. Prevent impossible poses automatically.',
                image: '/examples/constraint-limit-location.mp4'
              }
            ]
          }
        },
        {
          name: 'Limit Rotation',
          description: 'Restrict rotation range',
          icon: '/Icons/limit_rotation.svg',
          detailedInfo: {
            overview: 'Limit Rotation prevents impossible bends. Elbow only bends 0-150°, knee only bends one way. Anatomically correct rigs.',
            pages: [
              {
                title: 'Rotation Bounds',
                content: 'Set min/max rotation angles. Elbow can\'t bend backward, neck can\'t twist 360°. Automatic pose correction.',
                image: '/examples/constraint-limit-rotation.mp4'
              },
              {
                title: 'Anatomical Limits',
                content: 'Study real anatomy. Knees: 0-150°. Elbows: 0-145°. Shoulders: -45° to 180°. Set limits to match reality.',
                image: '/examples/constraint-limit-anatomy.mp4'
              }
            ]
          }
        },
        {
          name: 'Limit Scale',
          description: 'Restrict size changes',
          icon: '/Icons/limit_scale.svg',
          detailedInfo: {
            overview: 'Limit Scale prevents extreme size changes. Bones maintain reasonable proportions. Prevent accidental gigantic or tiny poses.',
            pages: [
              {
                title: 'Scale Bounds',
                content: 'Set minimum and maximum scale values. Prevents animator from accidentally creating broken proportions.',
                image: '/examples/constraint-limit-scale.mp4'
              }
            ]
          }
        },
        {
          name: 'Track To',
          description: 'Point bone at target',
          icon: '/Icons/track_to.svg',
          detailedInfo: {
            overview: 'Track To makes bone point at target. Eyes follow cursor, head tracks moving object. Automatic aiming.',
            pages: [
              {
                title: 'Auto Aiming',
                content: 'Add Track To constraint, set target. Bone automatically rotates to point at target. Move target, bone follows.',
                image: '/examples/constraint-track-to.mp4'
              },
              {
                title: 'Eye Tracking',
                content: 'Classic use: eye bones track Empty. Move Empty around, eyes follow automatically. Simple but effective.',
                image: '/examples/constraint-track-eyes.mp4'
              }
            ]
          }
        },
        {
          name: 'Locked Track',
          description: 'Track with axis locking',
          icon: '/Icons/locked_track.svg',
          detailedInfo: {
            overview: 'Like Track To but locks one axis. Head follows target but stays upright. More controlled tracking.',
            pages: [
              {
                title: 'Constrained Tracking',
                content: 'Tracks target but locks one rotation axis. Head follows but doesn\'t tilt sideways. Natural constrained movement.',
                image: '/examples/constraint-locked-track.mp4'
              }
            ]
          }
        },
        {
          name: 'Damped Track',
          description: 'Smooth tracking motion',
          icon: '/Icons/damped_track.svg',
          detailedInfo: {
            overview: 'Damped Track is smoothest tracking. One axis points at target. Simpler than Track To, no twist issues.',
            pages: [
              {
                title: 'Simple Tracking',
                content: 'Damped Track is most reliable tracking constraint. No complex axis issues. Just points bone at target smoothly.',
                image: '/examples/constraint-damped-track.mp4'
              }
            ]
          }
        },
        {
          name: 'Stretch To',
          description: 'Stretch bone to reach target',
          icon: '/Icons/stretch_to.svg',
          detailedInfo: {
            overview: 'Stretch To elongates bone to reach target. Rope, rubber band, or cartoon stretch effects. Length adjusts dynamically.',
            pages: [
              {
                title: 'Dynamic Length',
                content: 'Bone stretches or compresses to touch target. Move target, bone length adjusts. Cartoony or mechanical rigs.',
                image: '/examples/constraint-stretch-to.mp4'
              }
            ]
          }
        },
        {
          name: 'Floor Constraint',
          description: 'Prevent going below plane',
          icon: '/Icons/floor.svg',
          detailedInfo: {
            overview: 'Floor constraint prevents bone from going below target object. Feet don\'t penetrate ground. Simple collision.',
            pages: [
              {
                title: 'Ground Contact',
                content: 'Bone stops at floor plane. Can\'t go through floor object. Simple but effective for keeping feet grounded.',
                image: '/examples/constraint-floor.mp4'
              }
            ]
          }
        },
        {
          name: 'Clamp To',
          description: 'Constrain bone to curve path',
          icon: '/Icons/clamp_to.svg',
          detailedInfo: {
            overview: 'Clamp To locks bone to curve. Bone slides along path but can\'t leave it. Train on tracks, bead on wire.',
            pages: [
              {
                title: 'Path Following',
                content: 'Bone position locked to curve. Can slide along path. Perfect for mechanical movement along defined route.',
                image: '/examples/constraint-clamp-to.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'IK (Inverse Kinematics)',
      icon: '/Icons/ik.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'IK Constraint',
          description: 'Goal-based posing',
          icon: '/Icons/ik_constraint.svg',
          detailedInfo: {
            overview: 'IK (Inverse Kinematics) lets you pose by moving end goal. Move hand, entire arm follows automatically. Revolutionary for animation.',
            pages: [
              {
                title: 'IK Basics',
                content: 'Add IK constraint to end bone (hand/foot). Set target to control bone. Move target, entire chain solves automatically.',
                image: '/examples/ik-basic.mp4'
              },
              {
                title: 'Chain Length',
                content: 'Set chain length to control how many parent bones participate. 2 = upper+lower arm. 3 = shoulder+upper+lower arm.',
                image: '/examples/ik-chain-length.mp4'
              }
            ]
          }
        },
        {
          name: 'Pole Target',
          description: 'Control IK orientation',
          icon: '/Icons/pole_target.svg',
          detailedInfo: {
            overview: 'Pole Target controls which direction IK chain bends. Points knee/elbow direction. Essential for natural-looking IK.',
            pages: [
              {
                title: 'Bend Direction',
                content: 'Add pole target to IK constraint. Knee/elbow points toward pole. Move pole, bend direction changes.',
                image: '/examples/ik-pole.mp4'
              },
              {
                title: 'Pole Angle',
                content: 'Adjust pole angle value to rotate chain around IK line. Fine-tune knee/elbow twist without moving pole.',
                image: '/examples/ik-pole-angle.mp4'
              }
            ]
          }
        },
        {
          name: 'IK vs FK',
          description: 'Understand both systems',
          icon: '/Icons/ik_fk.svg',
          detailedInfo: {
            overview: 'FK (Forward Kinematics) = rotate each bone manually. IK = move goal, chain solves. Each has strengths. Best rigs have both.',
            pages: [
              {
                title: 'FK Advantages',
                content: 'FK gives precise per-bone control. Better for arcing motions, swim animation, or when foot lifts off ground.',
                image: '/examples/ik-fk-forward.mp4'
              },
              {
                title: 'IK Advantages',
                content: 'IK keeps hand/foot pinned. Better for walking (foot stays planted), grabbing objects, or constrained motion.',
                image: '/examples/ik-fk-inverse.mp4'
              },
              {
                title: 'IK/FK Switch',
                content: 'Professional rigs have both. Switch between IK and FK with property. Walk with IK, kick with FK.',
                image: '/examples/ik-fk-switch.mp4'
              }
            ]
          }
        },
        {
          name: 'IK Stretching',
          description: 'Allow chain extension',
          icon: '/Icons/ik_stretch.svg',
          detailedInfo: {
            overview: 'Enable IK stretch to let chain elongate when target is far away. Cartoon stretching or soft IK for distant reaches.',
            pages: [
              {
                title: 'Stretch Control',
                content: 'Enable Stretch in IK constraint. Chain elongates to reach distant targets. Cartoon stretching made simple.',
                image: '/examples/ik-stretch.mp4'
              }
            ]
          }
        },
        {
          name: 'Spline IK',
          description: 'Bend chain along curve',
          icon: '/Icons/spline_ik.svg',
          detailedInfo: {
            overview: 'Spline IK bends bone chain along curve path. Tails, tentacles, ropes, snakes. Organic bendy structures.',
            pages: [
              {
                title: 'Curve Following',
                content: 'Spline IK constraint makes bone chain follow curve shape. Edit curve, bones follow automatically. Perfect for tails.',
                image: '/examples/ik-spline.mp4'
              },
              {
                title: 'Chain Curve',
                content: 'Use for any bendy structure: spine, tail, tentacle, rope, whip. Bones naturally follow curve deformation.',
                image: '/examples/ik-spline-use.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Rigging',
      icon: '/Icons/advanced.svg',
      color: '#10b981',
      items: [
        {
          name: 'Bone Layers',
          description: 'Organize complex rigs',
          icon: '/Icons/layers.svg',
          detailedInfo: {
            overview: 'Assign bones to layers. Toggle layers to show/hide bone groups. Keep animation controls separate from deformation bones.',
            pages: [
              {
                title: 'Layer Organization',
                content: 'Put control bones on layer 1, deform bones on layer 2, mechanism bones on layer 3. Show only what animator needs.',
                image: '/examples/advanced-layers.mp4'
              }
            ]
          }
        },
        {
          name: 'Bone Groups',
          description: 'Color-code bones',
          icon: '/Icons/bone_groups.svg',
          detailedInfo: {
            overview: 'Create bone groups with colors. Left side blue, right side red, spine yellow. Visual organization improves workflow.',
            pages: [
              {
                title: 'Color Coding',
                content: 'Create groups, assign colors. Select bones, assign to group. Colored bones easy to identify in complex rigs.',
                image: '/examples/advanced-groups.mp4'
              }
            ]
          }
        },
        {
          name: 'Custom Shapes',
          description: 'Replace bone appearance',
          icon: '/Icons/custom_shape.svg',
          detailedInfo: {
            overview: 'Replace bone visualization with custom mesh. Circles, boxes, arrows. Make control bones easy to select and intuitive.',
            pages: [
              {
                title: 'Control Shapes',
                content: 'Create mesh shape (circle, arrow). Assign to bone as custom shape. Professional rigs have clear custom controls.',
                image: '/examples/advanced-custom-shapes.mp4'
              }
            ]
          }
        },
        {
          name: 'Bone Collections',
          description: 'Group and manage bones',
          icon: '/Icons/collections.svg',
          detailedInfo: {
            overview: 'Modern alternative to bone layers. Create named collections, assign bones, toggle visibility. Better organization.',
            pages: [
              {
                title: 'Collection System',
                content: 'Create collections: "Controls", "Deform", "Mechanism". Assign bones, toggle visibility. Clearer than numbered layers.',
                image: '/examples/advanced-collections.mp4'
              }
            ]
          }
        },
        {
          name: 'Action Constraints',
          description: 'Drive animation with properties',
          icon: '/Icons/action.svg',
          detailedInfo: {
            overview: 'Action constraint plays animation based on bone transform. Single slider drives complex corrective shapes or mechanical motion.',
            pages: [
              {
                title: 'Driven Animation',
                content: 'Action constraint plays stored animation based on driver bone. Rotate one bone, entire mechanism animates automatically.',
                image: '/examples/advanced-action.mp4'
              }
            ]
          }
        },
        {
          name: 'Drivers',
          description: 'Property relationships',
          icon: '/Icons/driver.svg',
          detailedInfo: {
            overview: 'Drivers make properties control other properties. Rotate bone = open mouth. Math expressions create complex relationships.',
            pages: [
              {
                title: 'Property Linking',
                content: 'Add driver to property. Link to other bone/property. One control automatically drives multiple properties.',
                image: '/examples/advanced-drivers.mp4'
              },
              {
                title: 'Expression Drivers',
                content: 'Use math in drivers. Divide rotation by 2, multiply by 0.5. Complex relationships from simple expressions.',
                image: '/examples/advanced-driver-expressions.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  techniques: [
    {
      name: 'Essential Workflows',
      icon: '/Icons/tool.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Biped Character Rig',
          description: 'Build standard character skeleton',
          icon: '/Icons/biped.svg',
          detailedInfo: {
            overview: 'Standard biped rig workflow: build spine, add limbs, create IK, bind mesh. Foundation for humanoid characters.',
            pages: [
              {
                title: 'Spine Chain',
                content: 'Start with spine: pelvis, lower back, mid back, upper back, neck, head. Parent from pelvis up. Root of entire rig.',
                image: '/examples/workflow-biped-spine.mp4'
              },
              {
                title: 'Limb Chains',
                content: 'Add limbs from spine: shoulder, upper arm, lower arm, hand. Upper leg, lower leg, foot. Extrude chains from torso.',
                image: '/examples/workflow-biped-limbs.mp4'
              },
              {
                title: 'IK Setup',
                content: 'Add IK to legs and arms. Create control bones for hands and feet. Add pole targets for knees and elbows.',
                image: '/examples/workflow-biped-ik.mp4'
              },
              {
                title: 'Weight Painting',
                content: 'Bind with automatic weights. Clean up shoulder, hips, and knee areas. Test deformation with extreme poses.',
                image: '/examples/workflow-biped-weights.mp4'
              }
            ]
          }
        },
        {
          name: 'Facial Rig Setup',
          description: 'Control system for expressions',
          icon: '/Icons/face.svg',
          detailedInfo: {
            overview: 'Facial rigging combines bones and shape keys. Bones for jaw/eyes, shape keys for expressions. Powerful character emotion.',
            pages: [
              {
                title: 'Jaw Bone',
                content: 'Single bone at jaw hinge point. Rotate to open mouth. Simple mechanical jaw control.',
                image: '/examples/workflow-face-jaw.mp4'
              },
              {
                title: 'Eye Bones',
                content: 'Bone for each eye. Track To constraint points at empty target. Move target, eyes follow naturally.',
                image: '/examples/workflow-face-eyes.mp4'
              },
              {
                title: 'Shape Key Integration',
                content: 'Use shape keys for smile, frown, blink. Drive shape keys with bone transforms using drivers. Unified control system.',
                image: '/examples/workflow-face-shapes.mp4'
              }
            ]
          }
        },
        {
          name: 'Quadruped Rig',
          description: 'Four-legged creature skeleton',
          icon: '/Icons/quadruped.svg',
          detailedInfo: {
            overview: 'Quadruped rigging adapts biped principles. Spine stays horizontal, all four limbs use IK. Animals, creatures, vehicles.',
            pages: [
              {
                title: 'Horizontal Spine',
                content: 'Build spine horizontally: hips, lower back, mid back, upper back, neck, head. More spine bones than biped for flexibility.',
                image: '/examples/workflow-quad-spine.mp4'
              },
              {
                title: 'Four IK Limbs',
                content: 'All four legs get IK chains. Front legs can have reverse knee direction. Pole targets for all limbs.',
                image: '/examples/workflow-quad-legs.mp4'
              },
              {
                title: 'Tail Setup',
                content: 'Add tail chain from hips. Use FK or Spline IK. Long tails work better with Spline IK following curve.',
                image: '/examples/workflow-quad-tail.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Techniques',
      icon: '/Icons/settings.svg',
      color: '#6366f1',
      items: [
        {
          name: 'Reverse Foot IK',
          description: 'Professional foot roll control',
          icon: '/Icons/reverse_foot.svg',
          detailedInfo: {
            overview: 'Reverse foot rig gives heel-toe-side roll control. Industry standard for character legs. Complex but essential.',
            pages: [
              {
                title: 'Reverse Bone Chain',
                content: 'Create control bones in reverse: toe to heel to foot. IK target at toe, chain runs backward through foot.',
                image: '/examples/advanced-reverse-foot-chain.mp4'
              },
              {
                title: 'Pivot Points',
                content: 'Add bones at heel, toe tip, and ball of foot. Each becomes pivot point. Rotate for heel roll, toe roll, foot pivot.',
                image: '/examples/advanced-reverse-foot-pivots.mp4'
              },
              {
                title: 'Control Integration',
                content: 'Main foot control has custom properties: Heel Roll, Toe Roll, Foot Pivot. Drive pivot bones with these properties.',
                image: '/examples/advanced-reverse-foot-controls.mp4'
              }
            ]
          }
        },
        {
          name: 'Bendy Bones (B-Bones)',
          description: 'Curved bone deformation',
          icon: '/Icons/bbone.svg',
          detailedInfo: {
            overview: 'B-Bones curve smoothly between start and end. Reduce bone count while maintaining smooth deformation. Modern rigging standard.',
            pages: [
              {
                title: 'B-Bone Setup',
                content: 'Switch bone to B-Bone type. Set segments (usually 8-16). Bone now curves smoothly, deforms mesh beautifully.',
                image: '/examples/advanced-bbone-setup.mp4'
              },
              {
                title: 'Handle Control',
                content: 'Set custom B-Bone handles - bones that control curve shape. Twist and curve controlled by handle bones.',
                image: '/examples/advanced-bbone-handles.mp4'
              },
              {
                title: 'When to Use',
                content: 'Use B-Bones for long sections: forearms, calves, spine, neck. Smooth curves without excessive bone chains.',
                image: '/examples/advanced-bbone-use.mp4'
              }
            ]
          }
        },
        {
          name: 'Corrective Shape Keys',
          description: 'Fix deformation problems',
          icon: '/Icons/corrective.svg',
          detailedInfo: {
            overview: 'Corrective shape keys fix deformation issues. Shoulder bulge when arm raises, muscle flex when elbow bends. Driven by bone rotation.',
            pages: [
              {
                title: 'Problem Identification',
                content: 'Pose character to extreme. Notice bad deformation - shoulder collapse, elbow pinch. Mark these for correction.',
                image: '/examples/advanced-corrective-find.mp4'
              },
              {
                title: 'Sculpt Correction',
                content: 'Create shape key in problem pose. Sculpt mesh to look correct. This is your corrective shape.',
                image: '/examples/advanced-corrective-sculpt.mp4'
              },
              {
                title: 'Driver Setup',
                content: 'Add driver to shape key. Drive with bone rotation. Shape activates automatically when pose happens.',
                image: '/examples/advanced-corrective-driver.mp4'
              }
            ]
          }
        },
        {
          name: 'Mechanical Rig',
          description: 'Gears, pistons, hinges',
          icon: '/Icons/mechanical.svg',
          detailedInfo: {
            overview: 'Mechanical rigs use constraints and drivers for precise technical motion. Gears that mesh, pistons that extend, doors that hinge.',
            pages: [
              {
                title: 'Gear System',
                content: 'Use Copy Rotation with factor. Two gears with factors 1.0 and -0.5 create 2:1 gear ratio. Rotate one, other follows correctly.',
                image: '/examples/advanced-mech-gears.mp4'
              },
              {
                title: 'Piston Rig',
                content: 'Use Stretch To constraint for piston rod. Track To for piston orientation. Automatic extension as parts move.',
                image: '/examples/advanced-mech-piston.mp4'
              },
              {
                title: 'Hinge Control',
                content: 'Limit Rotation constraint creates perfect hinge. Set min/max angles. Door opens exactly 90°, no more.',
                image: '/examples/advanced-mech-hinge.mp4'
              }
            ]
          }
        },
        {
          name: 'Rig Cleanup',
          description: 'Optimize finished rig',
          icon: '/Icons/cleanup.svg',
          detailedInfo: {
            overview: 'Professional rigs are clean and organized. Hide deformation bones, color controls, add custom shapes. Polish for animators.',
            pages: [
              {
                title: 'Layer Organization',
                content: 'Put control bones on visible layer. Deform bones on hidden layer. Mechanism bones on third layer. Clean animator view.',
                image: '/examples/advanced-cleanup-layers.mp4'
              },
              {
                title: 'Bone Naming',
                content: 'Rename all bones descriptively. "DEF-" prefix for deform bones. "MCH-" for mechanism. "CTRL-" for controls. Professional standard.',
                image: '/examples/advanced-cleanup-naming.mp4'
              },
              {
                title: 'Custom Shapes',
                content: 'Replace control bones with clear shapes. Circles, arrows, boxes. Animator sees intent immediately.',
                image: '/examples/advanced-cleanup-shapes.mp4'
              },
              {
                title: 'Bone Collections',
                content: 'Create named collections: "Face", "Arms", "Legs", "Fingers". Toggle collections to focus on specific body areas.',
                image: '/examples/advanced-cleanup-collections.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Professional Tips',
      icon: '/Icons/pro.svg',
      color: '#a855f7',
      items: [
        {
          name: 'Test Rig Early',
          description: 'Catch problems before binding',
          icon: '/Icons/test.svg',
          detailedInfo: {
            overview: 'Test rig in extreme poses before final weight painting. Find constraint issues, bone placement problems, range limits.',
            pages: [
              {
                title: 'Extreme Pose Testing',
                content: 'Pose to extremes: arms overhead, deep squat, full twist. Does rig break? Fix bones before spending hours on weights.',
                image: '/examples/pro-test-extreme.mp4'
              },
              {
                title: 'IK Reach Test',
                content: 'Test IK limits. Can character reach floor? Reach overhead? Touch toes? Adjust bone lengths and IK chain now.',
                image: '/examples/pro-test-ik.mp4'
              }
            ]
          }
        },
        {
          name: 'Symmetry Workflow',
          description: 'Build half, mirror to other',
          icon: '/Icons/symmetry.svg',
          detailedInfo: {
            overview: 'Build one side completely, then mirror to other. Use .L/.R naming convention. X-Axis Mirror for symmetrical posing.',
            pages: [
              {
                title: 'Mirror Bones',
                content: 'Build left side fully. Select all left bones. Armature > Symmetrize. Right side created automatically with .R names.',
                image: '/examples/pro-symmetry-mirror.mp4'
              },
              {
                title: 'X-Axis Mirror',
                content: 'Enable X-Axis Mirror in Options. Pose left side, right side mirrors automatically. Symmetrical posing efficiency.',
                image: '/examples/pro-symmetry-pose.mp4'
              }
            ]
          }
        },
        {
          name: 'Rig Documentation',
          description: 'Document controls and usage',
          icon: '/Icons/docs.svg',
          detailedInfo: {
            overview: 'Professional rigs include documentation. Text objects explain controls. Custom properties labeled clearly. Animator-friendly.',
            pages: [
              {
                title: 'Control Labels',
                content: 'Add text objects near control bones: "Foot IK", "Heel Roll", "Hand FK". Animator knows what each control does.',
                image: '/examples/pro-docs-labels.mp4'
              },
              {
                title: 'Property Names',
                content: 'Custom properties need clear names: "HeelRoll", not "cr1". Description field explains functionality. Professional polish.',
                image: '/examples/pro-docs-properties.mp4'
              }
            ]
          }
        },
        {
          name: 'Rig Versioning',
          description: 'Save rig development stages',
          icon: '/Icons/version.svg',
          detailedInfo: {
            overview: 'Save rig at major milestones. Before weight painting, before constraint setup. Easy rollback if something breaks.',
            pages: [
              {
                title: 'Version Saves',
                content: 'Save as "character_rig_v01", "v02", etc. Before major changes, save new version. Safety net for experimentation.',
                image: '/examples/pro-version-save.mp4'
              }
            ]
          }
        },
        {
          name: 'Performance Optimization',
          description: 'Keep rig efficient',
          icon: '/Icons/performance.svg',
          detailedInfo: {
            overview: 'Heavy rigs slow animation. Minimize constraint count, reduce bone chains, use B-Bones. Balance control and performance.',
            pages: [
              {
                title: 'Bone Count',
                content: 'More bones = slower rig. Use B-Bones instead of many small bones. 200 bones max for most characters.',
                image: '/examples/pro-perf-bones.mp4'
              },
              {
                title: 'Constraint Efficiency',
                content: 'Each constraint adds calculation time. Minimize unnecessary constraints. Merge multiple simple constraints if possible.',
                image: '/examples/pro-perf-constraints.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Simple Arm Rig', 
      desc: 'Build basic FK arm with three bones',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Bone Creation', 'Parenting', 'Basic Hierarchy', 'Weight Painting']
    },
    { 
      title: 'IK Leg with Pole Target', 
      desc: 'Create leg with IK and knee control',
      duration: '35 min', 
      difficulty: 'Beginner',
      skills: ['IK Constraint', 'Pole Target', 'Limit Rotation', 'Testing']
    },
    { 
      title: 'Complete Biped Character Rig', 
      desc: 'Full body rig with IK limbs and spine',
      duration: '90 min', 
      difficulty: 'Intermediate',
      skills: ['Full Skeleton', 'IK Setup', 'Weight Painting', 'Rig Testing']
    },
    { 
      title: 'Advanced Facial Rig', 
      desc: 'Eyes, jaw, and shape key-driven expressions',
      duration: '60 min', 
      difficulty: 'Advanced',
      skills: ['Facial Bones', 'Drivers', 'Shape Keys', 'Track To', 'Complex Integration']
    }
  ]
}