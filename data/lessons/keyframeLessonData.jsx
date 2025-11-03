export const keyframeLessonData = {

  heroConfig: {
    title: 'Keyframe',
    gradientText: 'Animation',
    subtitle: 'Master the fundamentals of animation through keyframe control and timing',
    gradientColors: 'linear-gradient(135deg, #06b6d4, #3b82f6, #8b5cf6)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/keyframe.svg', title: '12 Principles', subtitle: 'Animation basics' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/keyframe.svg', label: 'Keyframe Types' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#3b82f6',

  overviewCards: [
    {
      icon: '/Icons/keyframe.svg',
      title: 'Keyframe Basics',
      content: 'Keyframes define specific values at specific times. Blender automatically interpolates between them, creating smooth motion. Every animation starts with setting keyframes on the properties you want to animate.'
    },
    {
      icon: '/Icons/graph.svg',
      title: 'F-Curves & Interpolation',
      content: 'The Graph Editor shows your animation as curves. Each keyframe is a point on the curve, and the curve shape determines motion. Linear, Bezier, and Constant interpolation give you complete control over timing and easing.'
    },
    {
      icon: '/Icons/dope.svg',
      title: 'Dope Sheet Workflow',
      content: 'The Dope Sheet provides a timeline view of all keyframes. Perfect for adjusting timing, organizing complex animations, and getting an overview of your entire scene\'s motion at a glance.'
    }
  ],

  contentTitle: 'Keyframe Tools & Methods',
  contentDescription: 'Learn to set, edit, and refine animation keyframes',

  categories: [
    {
      name: 'Setting Keyframes',
      icon: '/Icons/keyframe.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Insert Keyframe',
          description: 'Set a keyframe at current frame',
          icon: '/Icons/keyframe_insert.svg',
          detailedInfo: {
            overview: 'Press I to insert a keyframe on selected properties. This records the current value at the current frame, creating a point in your animation timeline.',
            pages: [
              {
                title: 'Quick Keyframing',
                content: 'Hover over any property and press I to keyframe it. Or right-click and choose "Insert Keyframe". The property turns yellow when keyframed.',
                image: '/examples/keyframe-insert-basic.mp4'
              },
              {
                title: 'Keyframe Menu',
                content: 'Press I in the 3D viewport for the keyframe menu. Choose Location, Rotation, Scale, or LocRotScale to keyframe transform channels quickly.',
                image: '/examples/keyframe-insert-menu.mp4'
              }
            ]
          }
        },
        {
          name: 'Auto Keyframe',
          description: 'Automatically insert keyframes',
          icon: '/Icons/record.svg',
          detailedInfo: {
            overview: 'Enable Auto Keyframe to automatically create keyframes when you change values. Toggle the record button in the timeline header to activate.',
            pages: [
              {
                title: 'Auto Recording',
                content: 'Click the red dot in timeline header to enable. Now any property change automatically creates a keyframe. Perfect for quick animation iterations.',
                image: '/examples/keyframe-auto-enable.mp4'
              },
              {
                title: 'Auto Keyframe Modes',
                content: 'Replace mode overwrites existing keyframes. Add/Replace only adds new ones. Use the dropdown next to the record button to choose.',
                image: '/examples/keyframe-auto-modes.mp4'
              }
            ]
          }
        },
        {
          name: 'Delete Keyframe',
          description: 'Remove keyframes',
          icon: '/Icons/keyframe_delete.svg',
          detailedInfo: {
            overview: 'Press Alt+I to delete keyframes on selected properties. Or right-click a property and choose "Delete Keyframe".',
            pages: [
              {
                title: 'Removing Keyframes',
                content: 'Alt+I in viewport opens delete menu. Choose which channels to clear. Or select keyframes in Graph Editor and press X to delete.',
                image: '/examples/keyframe-delete.mp4'
              }
            ]
          }
        },
        {
          name: 'Clear Keyframes',
          description: 'Remove all keyframes',
          icon: '/Icons/panel_clear.svg',
          detailedInfo: {
            overview: 'Clear all keyframes from selected objects or specific channels. Useful for starting fresh or removing unwanted animation data.',
            pages: [
              {
                title: 'Clearing Animation',
                content: 'Alt+I > Clear Keyframes removes all keyframes from selected channels. Or in Graph Editor, select all (A) and delete (X).',
                image: '/examples/keyframe-clear.mp4'
              }
            ]
          }
        },
        {
          name: 'Replace Keyframe',
          description: 'Update existing keyframe',
          icon: '/Icons/keyframe_replace.svg',
          detailedInfo: {
            overview: 'Move to an existing keyframe and press I to update its value. The keyframe stays at the same time but records the new value.',
            pages: [
              {
                title: 'Updating Values',
                content: 'Jump to keyframe, change the value, press I. The existing keyframe updates rather than creating a new one.',
                image: '/examples/keyframe-replace.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Keyframe Types',
      icon: '/Icons/keyframe_types.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Keyframe',
          description: 'Standard yellow keyframe',
          icon: '/Icons/keyframe.svg',
          detailedInfo: {
            overview: 'The standard keyframe type, shown in yellow. Used for most animation. Represents a value at a specific time.',
            pages: [
              {
                title: 'Standard Keys',
                content: 'Yellow diamonds mark regular keyframes. These are your bread and butter - set them, adjust timing, refine motion.',
                image: '/examples/keyframe-standard.mp4'
              }
            ]
          }
        },
        {
          name: 'Breakdown',
          description: 'In-between keyframe',
          icon: '/Icons/keyframe_breakdown.svg',
          detailedInfo: {
            overview: 'Breakdown keyframes (green) are in-betweens that automatically adjust when moving surrounding keyframes. Great for maintaining relative timing.',
            pages: [
              {
                title: 'Smart In-Betweens',
                content: 'Set as Breakdown (Shift+E in Graph Editor). Green keys maintain their relative position when you move surrounding keyframes.',
                image: '/examples/keyframe-breakdown.mp4'
              }
            ]
          }
        },
        {
          name: 'Moving Hold',
          description: 'Hold value until next key',
          icon: '/Icons/keyframe_moving.svg',
          detailedInfo: {
            overview: 'Moving Hold keyframes (orange) create constant interpolation - the value holds until the next keyframe. Perfect for sudden movements or holds.',
            pages: [
              {
                title: 'Hold Frames',
                content: 'Press T in Graph Editor > Constant to make orange hold keys. Value stays flat until next keyframe - great for snappy animation.',
                image: '/examples/keyframe-moving-hold.mp4'
              }
            ]
          }
        },
        {
          name: 'Extreme',
          description: 'Mark extreme poses',
          icon: '/Icons/keyframe_extreme.svg',
          detailedInfo: {
            overview: 'Extreme keyframes (pink) mark important poses or extreme positions. Visual organizational tool for complex animations.',
            pages: [
              {
                title: 'Marking Extremes',
                content: 'Select keyframe, press R in Graph Editor, choose Extreme. Pink color helps identify key poses in your animation.',
                image: '/examples/keyframe-extreme.mp4'
              }
            ]
          }
        },
        {
          name: 'Jitter',
          description: 'Add noise to animation',
          icon: '/Icons/keyframe_jitter.svg',
          detailedInfo: {
            overview: 'Jitter keyframes (light green) add controlled randomness. Useful for camera shake or organic movement variation.',
            pages: [
              {
                title: 'Adding Variation',
                content: 'Set as Jitter type for controlled randomness. Great for handwriting, camera shake, or breaking up mechanical motion.',
                image: '/examples/keyframe-jitter.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Interpolation Modes',
      icon: '/Icons/graph.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Bezier',
          description: 'Smooth curved interpolation',
          icon: '/Icons/interpolation_bezier.svg',
          detailedInfo: {
            overview: 'Bezier interpolation creates smooth curves with handles for precise control. Default for most animations. Provides natural easing.',
            pages: [
              {
                title: 'Curved Motion',
                content: 'Bezier handles let you shape curves exactly. Drag handles in Graph Editor to create custom easing and timing.',
                image: '/examples/interp-bezier.mp4'
              },
              {
                title: 'Handle Types',
                content: 'V key in Graph Editor: Auto handles for smooth flow, Vector for sharp angles, Aligned for manual control.',
                image: '/examples/interp-bezier-handles.mp4'
              }
            ]
          }
        },
        {
          name: 'Linear',
          description: 'Straight line interpolation',
          icon: '/Icons/interpolation_linear.svg',
          detailedInfo: {
            overview: 'Linear interpolation creates straight lines between keyframes. Constant speed with no easing. Mechanical and predictable.',
            pages: [
              {
                title: 'Constant Speed',
                content: 'Press T > Linear in Graph Editor. Creates even motion with no acceleration. Good for robots, machines, or technical motion.',
                image: '/examples/interp-linear.mp4'
              }
            ]
          }
        },
        {
          name: 'Constant',
          description: 'Hold value (no interpolation)',
          icon: '/Icons/interpolation_constant.svg',
          detailedInfo: {
            overview: 'Constant interpolation holds the value until the next keyframe. No in-between - instant change. Perfect for sudden movements or switches.',
            pages: [
              {
                title: 'Instant Changes',
                content: 'Press T > Constant for instant jumps. Value holds flat then snaps to next keyframe. Essential for stop-motion style or switches.',
                image: '/examples/interp-constant.mp4'
              }
            ]
          }
        },
        {
          name: 'Easing',
          description: 'Automatic ease in/out',
          icon: '/Icons/easing.svg',
          detailedInfo: {
            overview: 'Easing types provide automatic acceleration/deceleration. Ease In, Ease Out, Ease In Out for natural-feeling motion without manual curve editing.',
            pages: [
              {
                title: 'Auto Easing',
                content: 'Press T in Graph Editor for easing menu. Ease In accelerates, Ease Out decelerates, Ease In-Out does both. Quick natural motion.',
                image: '/examples/interp-easing.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Graph Editor Tools',
      icon: '/Icons/graph_editor.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'View F-Curves',
          description: 'Visualize animation curves',
          icon: '/Icons/graph.svg',
          detailedInfo: {
            overview: 'The Graph Editor shows your animation as curves. Each property is a separate curve, with time horizontal and value vertical.',
            pages: [
              {
                title: 'Reading Curves',
                content: 'Steeper curves = faster motion. Flat curves = holds. Smooth curves = smooth motion. Shape of curve determines feel of movement.',
                image: '/examples/graph-reading.mp4'
              },
              {
                title: 'Navigation',
                content: 'Middle mouse to pan, scroll to zoom. Home to frame all. . (period) to frame selected keyframes. Same as 3D viewport navigation.',
                image: '/examples/graph-navigation.mp4'
              }
            ]
          }
        },
        {
          name: 'Select Keyframes',
          description: 'Choose keyframes to edit',
          icon: '/Icons/select.svg',
          detailedInfo: {
            overview: 'Box select (B), circle select (C), or click keyframes. Multiple selection lets you transform many keys at once.',
            pages: [
              {
                title: 'Selection Tools',
                content: 'Click to select individual keys. B for box select. A to select all. Alt+A to deselect. Shift+click to add to selection.',
                image: '/examples/graph-select.mp4'
              }
            ]
          }
        },
        {
          name: 'Transform Keys',
          description: 'Move, scale, rotate keyframes',
          icon: '/Icons/transform.svg',
          detailedInfo: {
            overview: 'G to move, S to scale, R to rotate selected keyframes. Transform multiple keys to adjust timing and values quickly.',
            pages: [
              {
                title: 'Moving Keyframes',
                content: 'G moves keyframes in time and value. Constrain to X (time only) or Y (value only) axis. Shift for precision.',
                image: '/examples/graph-move.mp4'
              },
              {
                title: 'Scaling Timing',
                content: 'S scales keyframes around cursor. Scale horizontally to speed up/slow down. Scale vertically to exaggerate/diminish values.',
                image: '/examples/graph-scale.mp4'
              }
            ]
          }
        },
        {
          name: 'Snap Keyframes',
          description: 'Align keys precisely',
          icon: '/Icons/snap.svg',
          detailedInfo: {
            overview: 'Shift+S opens snap menu. Snap keyframes to cursor, current frame, nearest frame, or nearest second for precise alignment.',
            pages: [
              {
                title: 'Precise Alignment',
                content: 'Shift+S for snap menu. Snap to frame snaps to whole numbers. Snap to second aligns to exact seconds. Essential for precise timing.',
                image: '/examples/graph-snap.mp4'
              }
            ]
          }
        },
        {
          name: 'Duplicate Keys',
          description: 'Copy keyframes',
          icon: '/Icons/duplicate.svg',
          detailedInfo: {
            overview: 'Shift+D duplicates selected keyframes. Copy animation patterns, create cycles, or repeat motion sequences.',
            pages: [
              {
                title: 'Copying Motion',
                content: 'Select keyframes, Shift+D to duplicate. Move duplicates to new location. Perfect for creating repeated actions or cycles.',
                image: '/examples/graph-duplicate.mp4'
              }
            ]
          }
        },
        {
          name: 'Handle Types',
          description: 'Control curve shape',
          icon: '/Icons/handle.svg',
          detailedInfo: {
            overview: 'V key opens handle menu. Auto, Vector, Aligned, and Free handle types give different curve control methods.',
            pages: [
              {
                title: 'Auto Handles',
                content: 'Auto handles create smooth curves automatically. Best for most situations - let Blender calculate smooth transitions.',
                image: '/examples/graph-handle-auto.mp4'
              },
              {
                title: 'Vector Handles',
                content: 'Vector creates straight lines to next keyframe. Perfect for sharp direction changes or linear motion.',
                image: '/examples/graph-handle-vector.mp4'
              },
              {
                title: 'Free Handles',
                content: 'Free handles move independently for complete control. Drag handles to create custom curves with any shape.',
                image: '/examples/graph-handle-free.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Dope Sheet Tools',
      icon: '/Icons/dope.svg',
      color: '#10b981',
      items: [
        {
          name: 'Timeline Overview',
          description: 'See all animation at once',
          icon: '/Icons/timeline.svg',
          detailedInfo: {
            overview: 'Dope Sheet shows all keyframes as blocks on a timeline. Perfect for timing adjustments and getting an overview of complex scenes.',
            pages: [
              {
                title: 'Reading Timeline',
                content: 'Each row is a property or object. Keyframes appear as diamonds. Color indicates keyframe type. Scrub through time to preview.',
                image: '/examples/dope-overview.mp4'
              }
            ]
          }
        },
        {
          name: 'Move Keyframes',
          description: 'Adjust timing',
          icon: '/Icons/move_timeline.svg',
          detailedInfo: {
            overview: 'Select and drag keyframes horizontally to adjust timing. Move multiple keyframes together to shift entire animation sequences.',
            pages: [
              {
                title: 'Timing Adjustments',
                content: 'Select keyframes and press G to move. Constrain to X for horizontal only. Adjust spacing between keys to change animation speed.',
                image: '/examples/dope-move.mp4'
              }
            ]
          }
        },
        {
          name: 'Summary View',
          description: 'Collapsed timeline view',
          icon: '/Icons/summary.svg',
          detailedInfo: {
            overview: 'Summary mode shows one row per object instead of individual channels. Perfect for managing complex scenes with many objects.',
            pages: [
              {
                title: 'Simplified View',
                content: 'Switch to Summary mode in header. Each object gets one row showing all its keyframes. Great for scene-wide timing.',
                image: '/examples/dope-summary.mp4'
              }
            ]
          }
        },
        {
          name: 'Action Editor',
          description: 'Manage animation actions',
          icon: '/Icons/action.svg',
          detailedInfo: {
            overview: 'Action Editor mode lets you create, switch, and blend multiple animations (actions) for the same object.',
            pages: [
              {
                title: 'Multiple Animations',
                content: 'Create different actions for walk, run, idle, etc. Switch between them or use NLA editor to blend actions together.',
                image: '/examples/dope-actions.mp4'
              }
            ]
          }
        },
        {
          name: 'Channel Groups',
          description: 'Organize channels',
          icon: '/Icons/group.svg',
          detailedInfo: {
            overview: 'Group related channels together. Collapse groups to simplify view. Color-code groups for easy identification.',
            pages: [
              {
                title: 'Organization',
                content: 'Select channels, Ctrl+G to group. Name and color groups. Collapse/expand groups to manage complex rigs.',
                image: '/examples/dope-groups.mp4'
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
      color: '#3b82f6',
      items: [
        {
          name: 'Pose to Pose',
          description: 'Key poses first, then refine',
          icon: '/Icons/pose.svg',
          detailedInfo: {
            overview: 'Traditional animation technique: create extreme poses first, then add in-betweens. Establishes timing and key moments before refining.',
            pages: [
              {
                title: 'Key Poses',
                content: 'Start with 3-5 extreme poses that tell your story. Set keyframes on these major moments. Ignore timing details initially.',
                image: '/examples/workflow-pose-to-pose-1.mp4'
              },
              {
                title: 'Timing Pass',
                content: 'Adjust keyframe spacing to get timing right. Closer keys = faster motion. Further apart = slower. Refine before adding detail.',
                image: '/examples/workflow-pose-to-pose-2.mp4'
              },
              {
                title: 'Adding Breakdowns',
                content: 'Add in-between keyframes (breakdowns) to refine the motion path. Use breakdown keyframe type to keep them relative.',
                image: '/examples/workflow-pose-to-pose-3.mp4'
              }
            ]
          }
        },
        {
          name: 'Straight Ahead',
          description: 'Animate frame by frame forward',
          icon: '/Icons/forward.svg',
          detailedInfo: {
            overview: 'Animate chronologically, creating each frame in sequence. More spontaneous and organic, great for effects and natural motion.',
            pages: [
              {
                title: 'Frame by Frame',
                content: 'Enable Auto Keyframe. Start at frame 1, pose, move forward, pose again. Build animation sequentially. More fluid and spontaneous.',
                image: '/examples/workflow-straight-ahead.mp4'
              },
              {
                title: 'When to Use',
                content: 'Best for effects, fire, water, organic motion, or when you want loose, spontaneous feel. Harder to control timing than pose-to-pose.',
                image: '/examples/workflow-straight-timing.mp4'
              }
            ]
          }
        },
        {
          name: 'Blocking',
          description: 'Rough animation with holds',
          icon: '/Icons/block.svg',
          detailedInfo: {
            overview: 'Create rough animation with constant interpolation (stepped mode). All poses are holds until you switch to smooth interpolation.',
            pages: [
              {
                title: 'Stepped Preview',
                content: 'Set all keyframes to Constant interpolation (stepped mode). See clear pose-to-pose timing without smooth movement between.',
                image: '/examples/workflow-blocking-stepped.mp4'
              },
              {
                title: 'Timing Approval',
                content: 'Adjust timing with clear poses. Get approval on blocked animation before investing time in polish. Much faster to iterate.',
                image: '/examples/workflow-blocking-timing.mp4'
              },
              {
                title: 'Convert to Spline',
                content: 'Once timing approved, switch interpolation to Bezier. Now refine curves and add breakdowns to polish motion.',
                image: '/examples/workflow-blocking-spline.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Techniques',
      icon: '/Icons/settings.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Graph Editor Polish',
          description: 'Refine curves for perfect timing',
          icon: '/Icons/graph.svg',
          detailedInfo: {
            overview: 'Professional animation lives in the Graph Editor. Adjust curves to add anticipation, follow-through, and natural timing.',
            pages: [
              {
                title: 'Curve Shape Analysis',
                content: 'Steep curves = fast motion. Flat = slow/hold. S-curves create natural acceleration/deceleration. Read curves to understand motion.',
                image: '/examples/polish-curve-reading.mp4'
              },
              {
                title: 'Adding Overshoot',
                content: 'Pull curve slightly past target value, then return. Creates bounce and energy. Drag handles or add extra keyframe beyond target.',
                image: '/examples/polish-overshoot.mp4'
              },
              {
                title: 'Ease In/Out',
                content: 'Flatten curves at start/end of motion for natural ease. Steep in middle for fast action. Creates weight and believability.',
                image: '/examples/polish-ease.mp4'
              }
            ]
          }
        },
        {
          name: 'Offset Animation',
          description: 'Stagger timing for organic feel',
          icon: '/Icons/offset.svg',
          detailedInfo: {
            overview: 'Offset keyframes between different body parts. Everything shouldn\'t move at once - create cascading, wave-like motion.',
            pages: [
              {
                title: 'Body Mechanics',
                content: 'When arm moves, shoulder moves first, then upper arm, forearm, hand, fingers. Offset each by 2-3 frames for natural cascade.',
                image: '/examples/offset-body.mp4'
              },
              {
                title: 'Secondary Motion',
                content: 'Main action happens first. Hair, clothes, antennae follow a few frames later. Creates sense of weight and momentum.',
                image: '/examples/offset-secondary.mp4'
              }
            ]
          }
        },
        {
          name: 'Cyclic Animation',
          description: 'Create seamless loops',
          icon: '/Icons/cycle.svg',
          detailedInfo: {
            overview: 'Make first and last keyframes identical. Use modifiers to extend animation infinitely. Perfect for walks, runs, idles.',
            pages: [
              {
                title: 'Creating Cycles',
                content: 'Copy frame 1 keyframe to end frame. Use Cycle modifier in Graph Editor to repeat infinitely. Adjust timing to taste.',
                image: '/examples/cycle-create.mp4'
              },
              {
                title: 'Cycle Offset',
                content: 'Use Cycle with Offset for variation. Each cycle builds on the last - perfect for accumulating rotation or progressive motion.',
                image: '/examples/cycle-offset.mp4'
              }
            ]
          }
        },
        {
          name: 'Copy Mirrored',
          description: 'Mirror keyframes to opposite side',
          icon: '/Icons/mirror.svg',
          detailedInfo: {
            overview: 'Copy keyframes from left to right side (or vice versa) for characters. Speeds up walk cycles and symmetrical animations.',
            pages: [
              {
                title: 'Pose Copying',
                content: 'In pose mode, Ctrl+C to copy pose. Select opposite bones, Ctrl+Shift+V to paste mirrored. Maintains symmetry.',
                image: '/examples/copy-mirror-pose.mp4'
              },
              {
                title: 'Keyframe Mirroring',
                content: 'Copy left side keyframes, paste to right side with mirroring. Perfect for walk cycles - animate one step, mirror for other.',
                image: '/examples/copy-mirror-keys.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Bouncing Ball', 
      desc: 'Learn timing, spacing, and squash & stretch',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Basic Keyframes', 'Graph Editor', 'Timing', 'Squash & Stretch']
    },
    { 
      title: 'Pendulum Swing', 
      desc: 'Master arc motion and easing',
      duration: '25 min', 
      difficulty: 'Beginner',
      skills: ['Rotation Keys', 'Arc Motion', 'Ease In/Out', 'Follow Through']
    },
    { 
      title: 'Character Walk Cycle', 
      desc: 'Create a looping walk animation',
      duration: '60 min', 
      difficulty: 'Intermediate',
      skills: ['Pose to Pose', 'Cycles', 'Offset', 'Polish']
    },
    { 
      title: 'Facial Animation', 
      desc: 'Animate emotion and dialogue',
      duration: '45 min', 
      difficulty: 'Advanced',
      skills: ['Shape Keys', 'Timing', 'Anticipation', 'Overlap']
    }
  ]
}