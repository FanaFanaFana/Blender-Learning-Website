export const graphEditorLessonData = {

  heroConfig: {
    title: 'Graph',
    gradientText: 'Editor',
    subtitle: 'Master animation curves, interpolation, and the art of timing through F-Curves',
    gradientColors: 'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)',
    badges: [
      { icon: '/Icons/time.svg', title: '50 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' },
      { icon: '/Icons/graph.svg', title: 'Infinite Control', subtitle: 'Curve precision' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/graph.svg', label: 'Curve Tools' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#f59e0b',

  overviewCards: [
    {
      icon: '/Icons/graph.svg',
      title: 'F-Curve Fundamentals',
      content: 'Every animation is a curve. The Graph Editor visualizes property values over time as F-Curves (Function Curves). Understanding curve shape is understanding motion - steep curves mean fast movement, flat curves mean holds.'
    },
    {
      icon: '/Icons/bezier.svg',
      title: 'Interpolation Control',
      content: 'Interpolation determines how Blender calculates values between keyframes. Bezier curves give you handles for custom easing, Linear creates constant speed, Constant creates instant jumps. Master interpolation, master timing.'
    },
    {
      icon: '/Icons/handle.svg',
      title: 'Handle Types',
      content: 'Bezier handles control curve shape with precision. Auto handles flow smoothly, Vector creates sharp angles, Aligned gives manual control, Free allows independent handle movement. The foundation of professional animation polish.'
    }
  ],

  contentTitle: 'Graph Editor Tools & Controls',
  contentDescription: 'Learn to read, edit, and perfect animation curves',

  categories: [
    {
      name: 'Reading Curves',
      icon: '/Icons/view.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Understanding F-Curves',
          description: 'Interpret curve shape as motion',
          icon: '/Icons/curve.svg',
          detailedInfo: {
            overview: 'F-Curves plot property values (vertical) over time (horizontal). The curve\'s slope indicates speed - steep = fast, flat = slow or hold.',
            pages: [
              {
                title: 'Curve Anatomy',
                content: 'Horizontal axis = time (frames). Vertical axis = value (location, rotation, etc). Keyframes = points on curve. Curve shape between = interpolation.',
                image: '/examples/graph-curve-anatomy.mp4'
              },
              {
                title: 'Reading Speed',
                content: 'Steep curve = fast change = quick motion. Gentle slope = slow change = gradual motion. Flat line = no change = hold. Curve angle IS speed.',
                image: '/examples/graph-reading-speed.mp4'
              },
              {
                title: 'Direction Analysis',
                content: 'Upward curve = increasing values. Downward = decreasing. Curve direction tells you if object moves forward/back, up/down, or rotates.',
                image: '/examples/graph-direction.mp4'
              }
            ]
          }
        },
        {
          name: 'Channel Colors',
          description: 'Color-coded property channels',
          icon: '/Icons/color.svg',
          detailedInfo: {
            overview: 'Each property type has a color. Location = Red/Green/Blue (X/Y/Z), Rotation = Red/Green/Blue, Scale = Red/Green/Blue. Learn colors for quick identification.',
            pages: [
              {
                title: 'Standard Colors',
                content: 'X axis = Red, Y axis = Green, Z axis = Blue. Universal across Location, Rotation, and Scale. Consistent color scheme throughout Blender.',
                image: '/examples/graph-colors.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Comparison',
          description: 'Analyze multiple curves together',
          icon: '/Icons/compare.svg',
          detailedInfo: {
            overview: 'View multiple channels simultaneously. Compare X/Y/Z movement, see rotation vs position, understand relationships between properties.',
            pages: [
              {
                title: 'Multi-Channel View',
                content: 'Show multiple channels to see relationships. If X and Y move together, object moves diagonally. Compare timing across channels.',
                image: '/examples/graph-compare.mp4'
              },
              {
                title: 'Normalized View',
                content: 'Normalize curves to compare shapes regardless of values. See if timing matches even when scales differ. Essential for analysis.',
                image: '/examples/graph-normalized.mp4'
              }
            ]
          }
        },
        {
          name: 'Slope Analysis',
          description: 'Evaluate acceleration/deceleration',
          icon: '/Icons/slope.svg',
          detailedInfo: {
            overview: 'Curve slope reveals acceleration. Increasing slope = acceleration. Decreasing slope = deceleration. Constant slope = constant speed.',
            pages: [
              {
                title: 'Acceleration Curves',
                content: 'S-curve shape shows ease in/out. Curve starts flat (slow), gets steeper (accelerates), then flattens (decelerates). Natural motion pattern.',
                image: '/examples/graph-acceleration.mp4'
              },
              {
                title: 'Identifying Problems',
                content: 'Sharp angle = sudden speed change = pop. Flat section = unexpected pause. Weird curve = weird motion. Graph reveals all issues.',
                image: '/examples/graph-problems.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Navigation & Selection',
      icon: '/Icons/navigation.svg',
      color: '#ef4444',
      items: [
        {
          name: 'Pan and Zoom',
          description: 'Navigate the graph space',
          icon: '/Icons/zoom.svg',
          detailedInfo: {
            overview: 'Middle mouse to pan, scroll to zoom. Navigate curves like 3D viewport. Essential for detailed curve editing.',
            pages: [
              {
                title: 'Graph Navigation',
                content: 'Scroll to zoom in/out. Middle mouse drag to pan. Zoom horizontally (time) or vertically (values) independently with axis constraints.',
                image: '/examples/graph-nav-zoom.mp4'
              },
              {
                title: 'Frame Selected',
                content: 'Period key (.) frames selected keyframes. Home frames all visible curves. Numpad period frames all channels. Quick focus tools.',
                image: '/examples/graph-nav-frame.mp4'
              }
            ]
          }
        },
        {
          name: 'Select Keyframes',
          description: 'Choose points to edit',
          icon: '/Icons/select.svg',
          detailedInfo: {
            overview: 'Click keyframes to select. Box select (B), circle select (C), lasso select. Select multiple for batch editing.',
            pages: [
              {
                title: 'Selection Tools',
                content: 'Click to select one keyframe. Shift+click to add to selection. B for box select, C for circle. A selects all visible.',
                image: '/examples/graph-select-basic.mp4'
              },
              {
                title: 'Advanced Selection',
                content: 'Select columns (K), rows, or by channel. Select all keyframes at current frame. Select handles independently from keyframes.',
                image: '/examples/graph-select-advanced.mp4'
              }
            ]
          }
        },
        {
          name: 'Channel Visibility',
          description: 'Show/hide curve channels',
          icon: '/Icons/visibility.svg',
          detailedInfo: {
            overview: 'Toggle channels on/off to reduce clutter. Focus on specific properties. Hide everything except what you\'re editing.',
            pages: [
              {
                title: 'Channel Management',
                content: 'Click eye icon to hide/show channels. Shift+click to solo channel. Hide complex rigs to see only animated properties.',
                image: '/examples/graph-visibility.mp4'
              }
            ]
          }
        },
        {
          name: 'Cursor Placement',
          description: 'Position 2D cursor',
          icon: '/Icons/cursor.svg',
          detailedInfo: {
            overview: 'Shift+Right-click to place 2D cursor. Use as pivot point for scaling/rotation. Snap to cursor, or cursor to selection.',
            pages: [
              {
                title: 'Cursor Tools',
                content: 'Shift+Right-click places cursor. Snap keyframes to cursor value or time. Scale around cursor as pivot point. Powerful reference tool.',
                image: '/examples/graph-cursor.mp4'
              }
            ]
          }
        },
        {
          name: 'Filter Channels',
          description: 'Search and filter properties',
          icon: '/Icons/filter.svg',
          detailedInfo: {
            overview: 'Filter channels by name or type. Show only Location, or only selected objects. Manage complex scenes efficiently.',
            pages: [
              {
                title: 'Channel Filtering',
                content: 'Type in filter box to search properties by name. Show only animated, only errors, or only selected. Clean up cluttered graphs.',
                image: '/examples/graph-filter.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Interpolation Modes',
      icon: '/Icons/interpolation.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Bezier Interpolation',
          description: 'Smooth curves with handles',
          icon: '/Icons/bezier.svg',
          detailedInfo: {
            overview: 'Bezier is the default interpolation. Smooth curves with handles for precise control. Best for organic, natural motion.',
            pages: [
              {
                title: 'Bezier Basics',
                content: 'Smooth curve between keyframes. Drag handles to adjust easing. Most versatile interpolation mode for animation.',
                image: '/examples/interp-bezier-basic.mp4'
              },
              {
                title: 'Handle Control',
                content: 'Longer handles = gentler curves. Short handles = tighter curves. Rotate handles to change curve direction. Complete control over motion.',
                image: '/examples/interp-bezier-handles.mp4'
              }
            ]
          }
        },
        {
          name: 'Linear Interpolation',
          description: 'Straight lines, constant speed',
          icon: '/Icons/linear.svg',
          detailedInfo: {
            overview: 'Linear creates straight lines between keyframes. Constant speed with no easing. Mechanical, predictable motion.',
            pages: [
              {
                title: 'Constant Speed',
                content: 'Select keyframes, T > Linear. Straight line = constant velocity. No acceleration or deceleration. Good for robots or technical motion.',
                image: '/examples/interp-linear.mp4'
              },
              {
                title: 'When to Use',
                content: 'Use for mechanical movement, UI elements, or as starting point before adding easing. Rarely used for organic animation.',
                image: '/examples/interp-linear-use.mp4'
              }
            ]
          }
        },
        {
          name: 'Constant Interpolation',
          description: 'Hold value, stepped animation',
          icon: '/Icons/constant.svg',
          detailedInfo: {
            overview: 'Constant interpolation holds value until next keyframe. Creates stepped, stop-motion style animation. Essential for blocking.',
            pages: [
              {
                title: 'Stepped Keys',
                content: 'Select keyframes, T > Constant. Value holds flat, then jumps to next keyframe. Perfect for pose-to-pose blocking.',
                image: '/examples/interp-constant.mp4'
              },
              {
                title: 'Blocking Workflow',
                content: 'Set all keys to Constant during blocking phase. See poses clearly without smooth motion. Switch to Bezier for polish phase.',
                image: '/examples/interp-constant-blocking.mp4'
              }
            ]
          }
        },
        {
          name: 'Ease In',
          description: 'Slow start, accelerate',
          icon: '/Icons/ease_in.svg',
          detailedInfo: {
            overview: 'Ease In starts slow and accelerates. Curve is flat at start, gets steeper. Natural for objects starting to move.',
            pages: [
              {
                title: 'Acceleration Curve',
                content: 'T > Ease In creates automatic acceleration. Object starts slowly, speeds up toward end. Feels weighty and natural.',
                image: '/examples/interp-ease-in.mp4'
              }
            ]
          }
        },
        {
          name: 'Ease Out',
          description: 'Fast start, decelerate',
          icon: '/Icons/ease_out.svg',
          detailedInfo: {
            overview: 'Ease Out starts fast and decelerates. Curve is steep at start, flattens at end. Natural for objects coming to rest.',
            pages: [
              {
                title: 'Deceleration Curve',
                content: 'T > Ease Out creates automatic deceleration. Object moves quickly, slows down smoothly. Landing animation standard.',
                image: '/examples/interp-ease-out.mp4'
              }
            ]
          }
        },
        {
          name: 'Ease In-Out',
          description: 'Smooth start and end',
          icon: '/Icons/ease_in_out.svg',
          detailedInfo: {
            overview: 'Ease In-Out accelerates then decelerates. S-curve shape. Most natural feeling motion for most situations.',
            pages: [
              {
                title: 'S-Curve Motion',
                content: 'T > Ease In-Out creates S-curve. Starts slow, speeds up in middle, slows at end. The "neutral" natural motion.',
                image: '/examples/interp-ease-in-out.mp4'
              },
              {
                title: 'Default Choice',
                content: 'When in doubt, use Ease In-Out. Looks natural for most movements. Refine with manual handles if needed.',
                image: '/examples/interp-ease-default.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Handle Types',
      icon: '/Icons/handle.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Auto Handles',
          description: 'Automatically smooth curves',
          icon: '/Icons/handle_auto.svg',
          detailedInfo: {
            overview: 'Auto handles create smooth curves automatically. Blender calculates optimal handle positions. Best for most organic animation.',
            pages: [
              {
                title: 'Automatic Smoothing',
                content: 'V > Automatic creates auto-calculated smooth curves. Handles adjust when moving keyframes. Set and forget for smooth motion.',
                image: '/examples/handle-auto.mp4'
              },
              {
                title: 'When to Use',
                content: 'Default choice for organic motion. Let Blender calculate optimal smoothness. Override with other handle types only when needed.',
                image: '/examples/handle-auto-use.mp4'
              }
            ]
          }
        },
        {
          name: 'Auto Clamped',
          description: 'Auto handles without overshoot',
          icon: '/Icons/handle_auto_clamped.svg',
          detailedInfo: {
            overview: 'Auto Clamped prevents curves from overshooting beyond keyframe values. Stays within min/max range. Safe automatic smoothing.',
            pages: [
              {
                title: 'Controlled Smoothing',
                content: 'Like Auto handles but prevents overshoot. Curve never goes beyond keyframe values. Safer for properties with limits.',
                image: '/examples/handle-auto-clamped.mp4'
              }
            ]
          }
        },
        {
          name: 'Vector Handles',
          description: 'Straight lines, sharp angles',
          icon: '/Icons/handle_vector.svg',
          detailedInfo: {
            overview: 'Vector handles create straight lines to adjacent keyframes. Sharp corners at keyframe points. Linear interpolation but with handle control.',
            pages: [
              {
                title: 'Linear Segments',
                content: 'V > Vector creates straight lines. Sharp angle at keyframe. Perfect for direction changes or mechanical motion.',
                image: '/examples/handle-vector.mp4'
              },
              {
                title: 'Sharp Transitions',
                content: 'Use Vector for instant direction changes. Ball bouncing, robot moving, or any sharp motion change. No gradual curve.',
                image: '/examples/handle-vector-use.mp4'
              }
            ]
          }
        },
        {
          name: 'Aligned Handles',
          description: 'Manually smooth, linked handles',
          icon: '/Icons/handle_aligned.svg',
          detailedInfo: {
            overview: 'Aligned handles stay in straight line. Moving one handle moves the other. Ensures smooth curve through keyframe.',
            pages: [
              {
                title: 'Linked Smoothness',
                content: 'V > Aligned keeps handles in line. Drag one side, other side mirrors to maintain smoothness. Manual control with guaranteed flow.',
                image: '/examples/handle-aligned.mp4'
              }
            ]
          }
        },
        {
          name: 'Free Handles',
          description: 'Independent handle control',
          icon: '/Icons/handle_free.svg',
          detailedInfo: {
            overview: 'Free handles move independently. Create asymmetric curves with different easing on each side. Maximum control.',
            pages: [
              {
                title: 'Asymmetric Control',
                content: 'V > Free allows independent handle movement. Different ease in vs ease out. Shape curves exactly as needed.',
                image: '/examples/handle-free.mp4'
              },
              {
                title: 'Advanced Easing',
                content: 'Use Free for custom timing. Slow in, fast out - or vice versa. Handles don\'t affect each other. Professional polish tool.',
                image: '/examples/handle-free-use.mp4'
              }
            ]
          }
        },
        {
          name: 'Handle Select',
          description: 'Select and manipulate handles',
          icon: '/Icons/handle_select.svg',
          detailedInfo: {
            overview: 'Click handles to select independently from keyframes. Drag to reshape curves. Essential for precise curve control.',
            pages: [
              {
                title: 'Handle Editing',
                content: 'Click handle end to select. Drag to reshape curve. G to move, R to rotate, S to scale. Precise curve sculpting.',
                image: '/examples/handle-select.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Transform Tools',
      icon: '/Icons/transform.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Move Keyframes',
          description: 'Translate keys in time/value',
          icon: '/Icons/move.svg',
          detailedInfo: {
            overview: 'G to move selected keyframes. Adjust timing (horizontal) or values (vertical). Most basic curve editing operation.',
            pages: [
              {
                title: 'Basic Movement',
                content: 'Select keyframes, press G to grab. Move freely or constrain to X (time) or Y (value) axis. Click to confirm, right-click to cancel.',
                image: '/examples/transform-move.mp4'
              },
              {
                title: 'Timing Adjustment',
                content: 'G > X moves only in time. Slide keyframes earlier/later without changing values. Adjust speed without affecting poses.',
                image: '/examples/transform-move-time.mp4'
              },
              {
                title: 'Value Adjustment',
                content: 'G > Y moves only in value. Change keyframe values without affecting timing. Adjust intensity while keeping pace.',
                image: '/examples/transform-move-value.mp4'
              }
            ]
          }
        },
        {
          name: 'Scale Keyframes',
          description: 'Scale timing or values',
          icon: '/Icons/scale.svg',
          detailedInfo: {
            overview: 'S to scale selected keyframes. Make motion faster/slower or more/less extreme. Scale around cursor or median point.',
            pages: [
              {
                title: 'Timing Scale',
                content: 'S > X scales in time. Compress keyframes = faster motion. Expand keyframes = slower motion. Speed up or slow down actions.',
                image: '/examples/transform-scale-time.mp4'
              },
              {
                title: 'Value Scale',
                content: 'S > Y scales values. Make movement more/less extreme. Exaggerate or diminish animation without changing timing.',
                image: '/examples/transform-scale-value.mp4'
              },
              {
                title: 'Pivot Points',
                content: 'Scale around cursor, individual origins, or median. Position 2D cursor, then scale around it. Powerful timing tool.',
                image: '/examples/transform-scale-pivot.mp4'
              }
            ]
          }
        },
        {
          name: 'Rotate Keyframes',
          description: 'Rotate curves around pivot',
          icon: '/Icons/rotate.svg',
          detailedInfo: {
            overview: 'R to rotate selected keyframes around pivot point. Change curve slope and direction. Creative timing adjustment.',
            pages: [
              {
                title: 'Curve Rotation',
                content: 'Select keyframes, place cursor as pivot, press R to rotate. Changes relative timing and values simultaneously.',
                image: '/examples/transform-rotate.mp4'
              }
            ]
          }
        },
        {
          name: 'Duplicate Keyframes',
          description: 'Copy keyframes',
          icon: '/Icons/duplicate.svg',
          detailedInfo: {
            overview: 'Shift+D duplicates selected keyframes. Copy motion patterns, create cycles, or repeat actions.',
            pages: [
              {
                title: 'Copy Motion',
                content: 'Select keyframes, Shift+D to duplicate. Move duplicates to new position. Repeat motion patterns quickly.',
                image: '/examples/transform-duplicate.mp4'
              },
              {
                title: 'Creating Cycles',
                content: 'Copy first cycle of walk. Duplicate and place at end. Extend animation by repeating patterns.',
                image: '/examples/transform-duplicate-cycle.mp4'
              }
            ]
          }
        },
        {
          name: 'Delete Keyframes',
          description: 'Remove selected keys',
          icon: '/Icons/delete.svg',
          detailedInfo: {
            overview: 'X to delete selected keyframes. Clean up unwanted keys. Simplify curves by removing unnecessary points.',
            pages: [
              {
                title: 'Key Removal',
                content: 'Select keyframes, press X to delete. Interpolation adjusts automatically. Keep curves clean with minimal keys.',
                image: '/examples/transform-delete.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Curve Modifiers',
      icon: '/Icons/modifier.svg',
      color: '#10b981',
      items: [
        {
          name: 'Smooth Modifier',
          description: 'Average and smooth curves',
          icon: '/Icons/smooth.svg',
          detailedInfo: {
            overview: 'Smooth modifier averages keyframe values. Removes noise and jitter. Clean up motion capture or rough animation.',
            pages: [
              {
                title: 'Curve Smoothing',
                content: 'Add Smooth modifier to noisy curves. Adjust iterations for more/less smoothing. Cleans up shaky animation instantly.',
                image: '/examples/modifier-smooth.mp4'
              }
            ]
          }
        },
        {
          name: 'Noise Modifier',
          description: 'Add controlled randomness',
          icon: '/Icons/noise.svg',
          detailedInfo: {
            overview: 'Noise modifier adds random variation. Camera shake, nervous movements, or organic variation. Controlled chaos.',
            pages: [
              {
                title: 'Adding Variation',
                content: 'Noise modifier creates random offsets. Adjust scale for intensity, phase for pattern. Bring life to mechanical animation.',
                image: '/examples/modifier-noise.mp4'
              }
            ]
          }
        },
        {
          name: 'Cycles Modifier',
          description: 'Repeat animation infinitely',
          icon: '/Icons/cycles.svg',
          detailedInfo: {
            overview: 'Cycles modifier repeats animation. Create looping walks, runs, or idle animations. Extend short animation infinitely.',
            pages: [
              {
                title: 'Looping Animation',
                content: 'Add Cycles modifier to make animation repeat. Before/After options control which direction loops. Walk cycles made easy.',
                image: '/examples/modifier-cycles.mp4'
              },
              {
                title: 'Cycle with Offset',
                content: 'Enable Cycle with Offset for accumulation. Each cycle adds to previous - perfect for wheels or progressive rotation.',
                image: '/examples/modifier-cycles-offset.mp4'
              }
            ]
          }
        },
        {
          name: 'Envelope Modifier',
          description: 'Scale curve by envelope',
          icon: '/Icons/envelope.svg',
          detailedInfo: {
            overview: 'Envelope modifier scales curve within min/max bounds. Control intensity over time. Fade in/out effects.',
            pages: [
              {
                title: 'Dynamic Scaling',
                content: 'Envelope creates min/max bounds that scale animation. Ramp intensity up/down smoothly over time.',
                image: '/examples/modifier-envelope.mp4'
              }
            ]
          }
        },
        {
          name: 'Limits Modifier',
          description: 'Clamp values to range',
          icon: '/Icons/limits.svg',
          detailedInfo: {
            overview: 'Limits modifier restricts values to min/max range. Prevent overshoot. Keep properties within valid bounds.',
            pages: [
              {
                title: 'Value Clamping',
                content: 'Set min/max limits. Curves can\'t exceed these values. Prevents rotation beyond 360°, or location outside area.',
                image: '/examples/modifier-limits.mp4'
              }
            ]
          }
        },
        {
          name: 'Stepped Interpolation',
          description: 'Force stepped/blocky motion',
          icon: '/Icons/stepped.svg',
          detailedInfo: {
            overview: 'Stepped modifier makes smooth curves stepped. Creates stop-motion or retro game style. Lower frame rate aesthetic.',
            pages: [
              {
                title: 'Stop Motion Effect',
                content: 'Stepped modifier samples curve at intervals. Creates choppy, stop-motion aesthetic from smooth animation.',
                image: '/examples/modifier-stepped.mp4'
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
      color: '#f59e0b',
      items: [
        {
          name: 'Pose-to-Pose Curves',
          description: 'Building animation from key poses',
          icon: '/Icons/pose.svg',
          detailedInfo: {
            overview: 'Professional workflow: create extreme poses first, then refine curves. Graph Editor is where poses become performance.',
            pages: [
              {
                title: 'Block in Constant',
                content: 'Set all initial keyframes to Constant interpolation. See pure poses without interpolation. Refine timing before adding curves.',
                image: '/examples/workflow-block-constant.mp4'
              },
              {
                title: 'Convert to Bezier',
                content: 'Select all keyframes, T > Bezier. Smooth interpolation appears. Now refine curves for natural motion.',
                image: '/examples/workflow-convert-bezier.mp4'
              },
              {
                title: 'Add Breakdowns',
                content: 'Insert keyframes between extremes. Adjust curves to control motion path. Polish timing with handle editing.',
                image: '/examples/workflow-breakdowns.mp4'
              }
            ]
          }
        },
        {
          name: 'Ease Workflow',
          description: 'Adding weight and timing',
          icon: '/Icons/ease.svg',
          detailedInfo: {
            overview: 'Professional animation requires proper easing. Graph Editor is where you add weight, anticipation, and natural timing.',
            pages: [
              {
                title: 'Flat at Extremes',
                content: 'Flatten curves at key poses (drag handles horizontal). Creates holds at important moments. Gives weight and emphasis.',
                image: '/examples/workflow-ease-flatten.mp4'
              },
              {
                title: 'Steep in Middle',
                content: 'Make curves steeper between poses. Fast motion through in-betweens, slow at extremes. Creates snappy, energetic motion.',
                image: '/examples/workflow-ease-steep.mp4'
              },
              {
                title: 'Overshoot and Settle',
                content: 'Pull curve slightly past target, then return. Creates bounce and springiness. Small overshoot adds life.',
                image: '/examples/workflow-ease-overshoot.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Simplification',
          description: 'Clean up messy curves',
          icon: '/Icons/simplify.svg',
          detailedInfo: {
            overview: 'Motion capture and auto-generation create messy curves. Simplify to remove unnecessary keyframes while maintaining motion.',
            pages: [
              {
                title: 'Decimate Modifier',
                content: 'Use Decimate to reduce keyframe count. Maintains curve shape with fewer keys. Essential for mocap cleanup.',
                image: '/examples/workflow-simplify-decimate.mp4'
              },
              {
                title: 'Manual Simplification',
                content: 'Select unnecessary keyframes and delete. Keep only extremes and essential breakdowns. Cleaner curves = easier editing.',
                image: '/examples/workflow-simplify-manual.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Techniques',
      icon: '/Icons/settings.svg',
      color: '#ef4444',
      items: [
        {
          name: 'Offset Animation',
          description: 'Stagger curves for follow-through',
          icon: '/Icons/offset.svg',
          detailedInfo: {
            overview: 'Offset curves by a few frames for cascading motion. Shoulders lead arms, torso follows head. Creates organic flow.',
            pages: [
              {
                title: 'Body Chain Offset',
                content: 'Copy shoulder curve. Move it 2 frames later for upper arm, 2 more for forearm. Creates wave of motion through body.',
                image: '/examples/advanced-offset-body.mp4'
              },
              {
                title: 'Secondary Motion',
                content: 'Offset hair, cloth, and accessories by 3-6 frames behind main motion. Creates drag and follow-through. Everything doesn\'t move at once.',
                image: '/examples/advanced-offset-secondary.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Sculpting',
          description: 'Paint curves with handles',
          icon: '/Icons/sculpt_curve.svg',
          detailedInfo: {
            overview: 'Think of handles as sculpting tools. Drag and shape curves like clay. Free handles give complete artistic control.',
            pages: [
              {
                title: 'Handle as Brush',
                content: 'Switch to Free handles. Drag handles to "paint" curve shape. Think of curve as ribbon you\'re shaping by hand.',
                image: '/examples/advanced-sculpt-handles.mp4'
              },
              {
                title: 'Micro Adjustments',
                content: 'Tiny handle adjustments = subtle timing changes. Zoom in, make minute tweaks. Professional polish is in the details.',
                image: '/examples/advanced-sculpt-micro.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Mirroring',
          description: 'Copy and flip curves',
          icon: '/Icons/mirror.svg',
          detailedInfo: {
            overview: 'Copy curves from one side to another with mirroring. Left arm to right arm, left leg to right. Symmetrical animation efficiency.',
            pages: [
              {
                title: 'Copy Mirrored',
                content: 'Copy left side keyframes. Paste to right side channels with mirroring enabled. Walk cycle: animate one step, mirror for other.',
                image: '/examples/advanced-mirror-copy.mp4'
              },
              {
                title: 'Time Offset Mirror',
                content: 'Mirror and offset in time. Left foot at frame 1, right foot at frame 13. Creates alternating walk pattern automatically.',
                image: '/examples/advanced-mirror-offset.mp4'
              }
            ]
          }
        },
        {
          name: 'Multi-Curve Editing',
          description: 'Edit multiple curves simultaneously',
          icon: '/Icons/multi_curve.svg',
          detailedInfo: {
            overview: 'Select keyframes across multiple channels. Transform them together. Batch editing for complex character animation.',
            pages: [
              {
                title: 'Proportional Editing',
                content: 'Enable Proportional Editing (O). Move one keyframe, nearby keys move proportionally. Smooth timing adjustments across curves.',
                image: '/examples/advanced-multi-proportional.mp4'
              },
              {
                title: 'Normalized View',
                content: 'Normalize curves to edit shapes regardless of values. Compare timing visually even when value ranges differ.',
                image: '/examples/advanced-multi-normalized.mp4'
              }
            ]
          }
        },
        {
          name: 'Graph Template Saving',
          description: 'Save curve shapes as presets',
          icon: '/Icons/template.svg',
          detailedInfo: {
            overview: 'Save common curve shapes as presets. Reuse perfect bounce curve, perfect ease, or custom timing patterns.',
            pages: [
              {
                title: 'Curve Presets',
                content: 'Create perfect curve once. Save as preset. Apply to other channels instantly. Build library of timing patterns.',
                image: '/examples/advanced-template-save.mp4'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Professional Polish',
      icon: '/Icons/pro.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Anticipation Curves',
          description: 'Add wind-up before actions',
          icon: '/Icons/anticipation.svg',
          detailedInfo: {
            overview: 'Pull curve slightly opposite direction before main action. Creates anticipation and adds energy. Core animation principle.',
            pages: [
              {
                title: 'Opposite Direction',
                content: 'Before jumping up, curve dips down. Before moving right, slight move left. Drag handle to create small dip before main action.',
                image: '/examples/polish-anticipation-dip.mp4'
              },
              {
                title: 'Timing Ratio',
                content: 'Anticipation is typically 1/4 to 1/3 the duration of main action. Quick wind-up, longer main movement. Creates energy.',
                image: '/examples/polish-anticipation-timing.mp4'
              }
            ]
          }
        },
        {
          name: 'Follow-Through Curves',
          description: 'Settling after main action',
          icon: '/Icons/follow_through.svg',
          detailedInfo: {
            overview: 'After main action, add overshoot then settle. Curve goes past target, oscillates back. Creates weight and realism.',
            pages: [
              {
                title: 'Overshoot Pattern',
                content: 'Action ends at target? Pull curve past target, then back. Small wave pattern creates settling. Feels physical.',
                image: '/examples/polish-follow-overshoot.mp4'
              },
              {
                title: 'Diminishing Returns',
                content: 'Each bounce gets smaller. First overshoot is largest, second smaller, third tiny. Natural energy dissipation.',
                image: '/examples/polish-follow-diminish.mp4'
              }
            ]
          }
        },
        {
          name: 'S-Curve Perfection',
          description: 'The ideal motion curve',
          icon: '/Icons/s_curve.svg',
          detailedInfo: {
            overview: 'Perfect S-curve: flat at start, accelerate smoothly, fast in middle, decelerate smoothly, flat at end. Template for natural motion.',
            pages: [
              {
                title: 'Building S-Curves',
                content: 'Start with Ease In-Out. Adjust handles until curve is smooth S-shape. Flat at extremes, steep in middle. Natural motion standard.',
                image: '/examples/polish-s-curve-build.mp4'
              },
              {
                title: 'S-Curve Variations',
                content: 'Asymmetric S: more ease in than out, or vice versa. Adjust to character weight and intent. Heavy = more ease in.',
                image: '/examples/polish-s-curve-variations.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Copying',
          description: 'Reuse perfect curves',
          icon: '/Icons/copy_curve.svg',
          detailedInfo: {
            overview: 'Got a perfect curve? Copy it. Paste to other channels or other objects. Consistency across similar actions.',
            pages: [
              {
                title: 'Copy Paste Curves',
                content: 'Select keyframes, Ctrl+C to copy. Select target channel, Ctrl+V to paste. Same timing applied to different property.',
                image: '/examples/polish-copy-curve.mp4'
              }
            ]
          }
        },
        {
          name: 'Motion Blur Consideration',
          description: 'Curves for motion blur',
          icon: '/Icons/motion_blur.svg',
          detailedInfo: {
            overview: 'Fast motion needs proper curves for motion blur. Steep curves = motion blur. Account for blur in timing decisions.',
            pages: [
              {
                title: 'Blur-Friendly Timing',
                content: 'Very fast actions (1-2 frames) need steep curves. Motion blur hides detail. Slower actions need careful curve work.',
                image: '/examples/polish-blur-timing.mp4'
              }
            ]
          }
        },
        {
          name: 'Curve Diagnostic',
          description: 'Identify and fix problems',
          icon: '/Icons/diagnostic.svg',
          detailedInfo: {
            overview: 'Learn to spot problematic curve patterns. Sharp angles = pops. Flat unexpected sections = floaty motion. Weird bumps = jitter.',
            pages: [
              {
                title: 'Common Problems',
                content: 'Sharp angle in curve = sudden speed change = pop. Find and smooth. Unexpected flat = pause. Bump in curve = wobble.',
                image: '/examples/polish-diagnostic-problems.mp4'
              },
              {
                title: 'Fixing Pops',
                content: 'Pop at keyframe? Switch to Auto or Free handles. Adjust to smooth transition. Curve should flow smoothly through keyframe.',
                image: '/examples/polish-diagnostic-fix.mp4'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Bouncing Ball with Perfect Curves', 
      desc: 'Master S-curves and ease timing',
      duration: '30 min', 
      difficulty: 'Beginner',
      skills: ['Reading Curves', 'Bezier Handles', 'Ease In/Out', 'S-Curves']
    },
    { 
      title: 'Anticipation and Follow-Through', 
      desc: 'Add secondary motion to character jump',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['Anticipation', 'Overshoot', 'Follow-Through', 'Handle Sculpting']
    },
    { 
      title: 'Walk Cycle Curve Polish', 
      desc: 'Perfect timing for character walk',
      duration: '60 min', 
      difficulty: 'Intermediate',
      skills: ['Offset Animation', 'Cycles Modifier', 'Multi-Curve Editing', 'Mirroring']
    },
    { 
      title: 'Performance Animation Polish', 
      desc: 'Refine complex character performance',
      duration: '90 min', 
      difficulty: 'Advanced',
      skills: ['All Techniques', 'Curve Sculpting', 'Diagnostic', 'Professional Polish']
    }
  ]
}