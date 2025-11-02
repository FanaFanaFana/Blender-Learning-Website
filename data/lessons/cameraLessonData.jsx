export const cameraLessonData = {

  heroConfig: {
    title: 'Camera',
    gradientText: 'Settings',
    subtitle: 'Master cinematography, composition, and camera techniques in Blender',
    gradientColors: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/view_camera.svg', title: '20+ Techniques', subtitle: 'Essential skills' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/view_camera.svg', label: 'Camera Settings' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Composition' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#3b82f6',

  overviewCards: [
    {
      icon: '/Icons/view_camera.svg',
      title: 'The Virtual Camera',
      content: 'Blender\'s camera works like a real-world camera with focal length, aperture, and sensor settings. Understanding these properties lets you create professional cinematography and control exactly how your scene is captured.'
    },
    {
      icon: '/Icons/image.svg',
      title: 'Composition Rules',
      content: 'Great shots follow proven composition principles like the rule of thirds, leading lines, and framing. Learn to guide the viewer\'s eye and create visually compelling images that tell a story.'
    },
    {
      icon: '/Icons/light.svg',
      title: 'Depth of Field',
      content: 'Control what\'s in focus to direct attention and create cinematic looks. Depth of field separates subjects from backgrounds, adds realism, and creates that coveted "professional camera" aesthetic.'
    }
  ],

  contentTitle: 'Camera Properties & Settings',
  contentDescription: 'Master the technical aspects of virtual cinematography',

  categories: [
    {
      name: 'Basic Camera Properties',
      icon: '/Icons/view_camera.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Focal Length',
          description: 'Control field of view and perspective',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Focal length determines how much of the scene fits in frame and affects perspective distortion. Lower values (wide angle) show more, higher values (telephoto) zoom in and compress depth.',
            pages: [
              {
                title: 'Wide Angle (18-35mm)',
                content: 'Wide angle lenses show more of the scene with exaggerated perspective. Great for establishing shots, architecture, and cramped spaces. Creates dramatic depth and makes spaces feel larger.',
                image: '/examples/camera-wide-angle.gif'
              },
              {
                title: 'Normal (35-70mm)',
                content: 'Normal focal lengths approximate human vision with natural perspective. Perfect for general shots, portraits, and realistic scenes. 50mm is considered the "standard" focal length.',
                image: '/examples/camera-normal.gif'
              },
              {
                title: 'Telephoto (70-200mm+)',
                content: 'Telephoto lenses zoom in and compress depth, making backgrounds appear closer. Ideal for portraits, product shots, and isolating subjects. Creates shallow depth of field.',
                image: '/examples/camera-telephoto.gif'
              }
            ]
          }
        },
        {
          name: 'Sensor Size',
          description: 'Define the image capture area',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Sensor size affects field of view and depth of field. Larger sensors capture more light and create shallower depth of field. Common presets include Full Frame (36mm) and APS-C (23.6mm).',
            pages: [
              {
                title: 'Sensor Impact',
                content: 'Larger sensors require longer focal lengths for the same framing, naturally creating shallower depth of field. Full Frame sensors are standard for professional photography and cinema.',
                image: '/examples/camera-sensor-size.gif'
              },
              {
                title: 'Crop Factor',
                content: 'Smaller sensors "crop" the image, effectively multiplying focal length. A 50mm lens on APS-C behaves like 75mm on Full Frame. Understand this for matching real-world camera behavior.',
                image: '/examples/camera-crop-factor.gif'
              }
            ]
          }
        },
        {
          name: 'Clipping Start/End',
          description: 'Set near and far render distances',
          icon: '/Icons/restrict_view_off.svg',
          detailedInfo: {
            overview: 'Clipping planes define what the camera can see. Objects closer than Clip Start or farther than Clip End are invisible. Adjust these to optimize performance and prevent z-fighting.',
            pages: [
              {
                title: 'Clip Start',
                content: 'Objects closer than Clip Start disappear. Keep this as large as possible (0.1m typical) to avoid depth precision issues. Too small causes flickering on distant objects.',
                image: '/examples/camera-clip-start.gif'
              },
              {
                title: 'Clip End',
                content: 'Objects beyond Clip End are culled from rendering. Set this just beyond your furthest object to optimize performance. For large scenes, use multiple cameras with different ranges.',
                image: '/examples/camera-clip-end.gif'
              }
            ]
          }
        },
        {
          name: 'Camera Type',
          description: 'Choose between perspective and orthographic',
          icon: '/Icons/view_ortho.svg',
          detailedInfo: {
            overview: 'Perspective cameras mimic human vision with vanishing points. Orthographic cameras show parallel lines with no perspective distortion - essential for technical drawings and specific artistic styles.',
            pages: [
              {
                title: 'Perspective Camera',
                content: 'Standard camera with realistic perspective and depth. Objects get smaller with distance, parallel lines converge. Used for 99% of realistic renders and animations.',
                image: '/examples/camera-perspective.gif'
              },
              {
                title: 'Orthographic Camera',
                content: 'No perspective distortion - parallel lines stay parallel. Objects don\'t get smaller with distance. Perfect for technical diagrams, architectural plans, and stylized 2D-looking renders.',
                image: '/examples/camera-orthographic.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Depth of Field',
      icon: '/Icons/light.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'F-Stop (Aperture)',
          description: 'Control depth of field strength',
          icon: '/Icons/light.svg',
          detailedInfo: {
            overview: 'F-Stop controls how much of the image is in focus. Lower values (f/1.4, f/2.8) create shallow depth of field with blurred backgrounds. Higher values (f/8, f/16) keep more in focus.',
            pages: [
              {
                title: 'Shallow Depth (f/1.4-f/2.8)',
                content: 'Low f-stop creates strong blur. Subject pops from background, draws immediate attention. Perfect for portraits, product shots, and cinematic looks. Requires precise focus.',
                image: '/examples/camera-shallow-dof.gif'
              },
              {
                title: 'Medium Depth (f/4-f/5.6)',
                content: 'Balanced depth of field. Subject clear, background softly blurred. Most versatile setting for general photography and most cinematic shots.',
                image: '/examples/camera-medium-dof.gif'
              },
              {
                title: 'Deep Depth (f/8-f/16)',
                content: 'Everything in focus from foreground to background. Essential for landscapes, architecture, and scenes where all elements matter. Minimal artistic blur.',
                image: '/examples/camera-deep-dof.gif'
              }
            ]
          }
        },
        {
          name: 'Focus Distance',
          description: 'Set the point of perfect focus',
          icon: '/Icons/empty_single_arrow.svg',
          detailedInfo: {
            overview: 'Focus Distance determines which plane is perfectly sharp. Objects at this distance are in focus; objects closer or farther get progressively blurred based on f-stop.',
            pages: [
              {
                title: 'Setting Focus',
                content: 'Click the eyedropper next to Focus Distance and click on your subject to auto-focus. Or manually set the distance. This is your "point of sharpness" in the scene.',
                image: '/examples/camera-set-focus.gif'
              },
              {
                title: 'Focus Target',
                content: 'You can also use an Empty as a focus target. Parent an empty to a moving object, and the camera will track focus automatically. Perfect for animated scenes.',
                image: '/examples/camera-focus-target.gif'
              },
              {
                title: 'Rack Focus',
                content: 'Animate focus distance between objects to shift viewer attention. Classic cinematic technique for transitions and dramatic reveals. Keyframe the Focus Distance property.',
                image: '/examples/camera-rack-focus.gif'
              }
            ]
          }
        },
        {
          name: 'Aperture Blades',
          description: 'Control bokeh shape',
          icon: '/Icons/mesh.circle.svg',
          detailedInfo: {
            overview: 'Aperture blades determine the shape of out-of-focus highlights (bokeh). More blades create rounder bokeh; fewer create polygonal shapes. Affects the aesthetic quality of blur.',
            pages: [
              {
                title: 'Blade Count',
                content: 'Increase blade count for circular bokeh (realistic modern lenses). Decrease for polygonal bokeh (vintage lens look). 5-6 blades = pentagon/hexagon shapes, 12+ = nearly circular.',
                image: '/examples/camera-aperture-blades.gif'
              },
              {
                title: 'Blade Rotation',
                content: 'Rotate aperture blades to change bokeh orientation. Creates unique artistic effects, especially with non-circular blade counts. Subtle but impacts overall image feel.',
                image: '/examples/camera-blade-rotation.gif'
              }
            ]
          }
        },
        {
          name: 'Viewport DOF',
          description: 'Preview depth of field in viewport',
          icon: '/Icons/hide_off.svg',
          detailedInfo: {
            overview: 'Enable Depth of Field in viewport shading to preview blur while working. Essential for composing shots and adjusting focus without constant test renders.',
            pages: [
              {
                title: 'Enabling Preview',
                content: 'In viewport shading options, enable Depth of Field. Adjust Max Blur for preview quality. Lower values = faster viewport, higher = more accurate preview.',
                image: '/examples/camera-viewport-dof.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Camera Constraints',
      icon: '/Icons/constraint.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Track To',
          description: 'Always point at a target',
          icon: '/Icons/constraint.svg',
          detailedInfo: {
            overview: 'Track To constraint makes the camera automatically point at an object. Move the camera freely; it always looks at the target. Essential for animated shots and dolly moves.',
            pages: [
              {
                title: 'Setting Up Tracking',
                content: 'Add Track To constraint to camera, select target object. Camera will always point at target regardless of camera position. Perfect for orbit shots and following subjects.',
                image: '/examples/camera-track-to.gif'
              },
              {
                title: 'Track Axis',
                content: 'Set Track To to -Z (camera\'s forward direction) and Up to Y. This ensures proper orientation. Incorrect axis settings cause the camera to point sideways or flip.',
                image: '/examples/camera-track-axis.gif'
              }
            ]
          }
        },
        {
          name: 'Follow Path',
          description: 'Animate along curves',
          icon: '/Icons/curve_path.svg',
          detailedInfo: {
            overview: 'Follow Path constraint makes the camera travel along a curve. Create smooth, complex camera moves without keyframing every position. Hollywood-style dolly and crane shots.',
            pages: [
              {
                title: 'Path Animation',
                content: 'Add Follow Path constraint, select your curve. Camera follows the path automatically. Combine with Track To to look at subjects while moving.',
                image: '/examples/camera-follow-path.gif'
              },
              {
                title: 'Timing Control',
                content: 'Adjust Offset to control position along path. Keyframe Offset for speed control - ease in/out for smooth starts and stops. Follow Curve option makes camera bank in turns.',
                image: '/examples/camera-path-timing.gif'
              }
            ]
          }
        },
        {
          name: 'Damped Track',
          description: 'Smooth tracking constraint',
          icon: '/Icons/constraint.svg',
          detailedInfo: {
            overview: 'Damped Track is like Track To but simpler and more stable. Prevents flipping and gimbal issues. Ideal for most basic tracking scenarios.',
            pages: [
              {
                title: 'Stable Tracking',
                content: 'Damped Track provides smoother, more stable tracking than Track To. Less prone to flipping issues. Preferred for most tracking scenarios.',
                image: '/examples/camera-damped-track.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Features',
      icon: '/Icons/settings.svg',
      color: '#10b981',
      items: [
        {
          name: 'Motion Blur',
          description: 'Add realistic movement blur',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Motion blur simulates the blur from moving objects or camera movement. Creates fluid, cinematic motion and helps fast movements feel natural rather than strobing.',
            pages: [
              {
                title: 'Camera Motion Blur',
                content: 'Enable Motion Blur in render settings. Adjust Shutter to control strength (1.0 = realistic, lower = less blur). Essential for camera moves and animated subjects.',
                image: '/examples/camera-motion-blur.gif'
              },
              {
                title: 'Shutter Curve',
                content: 'Rolling shutter simulates CMOS sensor artifacts. Instant shutter captures a single moment. Rolling creates that "jello" effect from fast pans - sometimes desired for realism.',
                image: '/examples/camera-shutter-curve.gif'
              }
            ]
          }
        },
        {
          name: 'Safe Areas',
          description: 'Frame for different aspect ratios',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Safe areas show what will be visible across different displays and aspect ratios. Title Safe (inner) ensures text is visible; Action Safe (outer) keeps important action in frame.',
            pages: [
              {
                title: 'Using Safe Areas',
                content: 'Enable Safe Areas in viewport overlays. Keep titles within inner box, important action within outer box. Critical for TV broadcast and films shown on different screens.',
                image: '/examples/camera-safe-areas.gif'
              }
            ]
          }
        },
        {
          name: 'Camera Background Images',
          description: 'Reference images in camera view',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Add reference images directly to the camera view for matching shots, rotoscoping, or modeling from reference. Images stay aligned with camera perspective.',
            pages: [
              {
                title: 'Adding References',
                content: 'In camera properties, add Background Images. Set to Camera or use Front/Side for modeling reference. Adjust opacity to see both reference and your 3D scene.',
                image: '/examples/camera-bg-images.gif'
              }
            ]
          }
        },
        {
          name: 'Passepartout',
          description: 'Darken areas outside frame',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Passepartout darkens everything outside the camera frame, helping you focus on composition and see exactly what will render without distractions.',
            pages: [
              {
                title: 'Composition Focus',
                content: 'Enable Passepartout in camera settings. Increase alpha to darken outside areas more. Helps you concentrate on what\'s actually in frame during composition.',
                image: '/examples/camera-passepartout.gif'
              }
            ]
          }
        },
        {
          name: 'Resolution & Aspect Ratio',
          description: 'Control output dimensions',
          icon: '/Icons/image.svg',
          detailedInfo: {
            overview: 'Resolution determines output size. Aspect ratio controls frame proportions. Common ratios: 16:9 (widescreen), 2.39:1 (cinema), 1:1 (square/Instagram), 9:16 (vertical/TikTok).',
            pages: [
              {
                title: 'Standard Formats',
                content: '1920x1080 (Full HD 16:9), 3840x2160 (4K 16:9), 2048x858 (2K Cinema 2.39:1), 1080x1080 (Square). Choose based on delivery platform and artistic intent.',
                image: '/examples/camera-resolutions.gif'
              },
              {
                title: 'Resolution Percentage',
                content: 'Use percentage slider for preview renders. 50% = quarter resolution, renders 4x faster. Use 100% only for final output. Saves massive time during testing.',
                image: '/examples/camera-res-percentage.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  techniquesTitle: 'Composition & Cinematography',
  techniquesDescription: 'Master visual storytelling through camera placement and framing',

  techniques: [
    {
      name: 'Composition Rules',
      icon: '/Icons/image.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Rule of Thirds',
          description: 'Place subjects at intersecting lines',
          icon: '/Icons/grid_3x3.svg',
          detailedInfo: {
            overview: 'Divide frame into 9 equal rectangles (3x3 grid). Place important elements along lines or at intersections. Creates balanced, visually pleasing compositions that guide the eye naturally.',
            pages: [
              {
                title: 'Applying the Rule',
                content: 'Position your subject\'s eyes at an intersection point. Place horizons on the top or bottom third line, not center. Leads the viewer\'s eye and creates dynamic balance.',
                image: '/examples/camera-rule-thirds.gif'
              },
              {
                title: 'When to Break It',
                content: 'Center compositions work for symmetry, confrontation, or stability. Breaking rules intentionally creates specific moods. Understand rules before breaking them effectively.',
                image: '/examples/camera-break-thirds.gif'
              }
            ]
          }
        },
        {
          name: 'Leading Lines',
          description: 'Guide viewer attention with lines',
          icon: '/Icons/curve_path.svg',
          detailedInfo: {
            overview: 'Use natural or artificial lines in your scene to lead the viewer\'s eye toward your subject. Roads, fences, architecture, shadows - anything linear that creates visual pathways.',
            pages: [
              {
                title: 'Types of Lines',
                content: 'Horizontal lines convey stability and calm. Vertical lines suggest strength and power. Diagonal lines create energy and movement. Curved lines feel organic and flowing.',
                image: '/examples/camera-leading-lines.gif'
              },
              {
                title: 'Creating Pathways',
                content: 'Position camera so environmental lines converge on your subject. Roads, hallways, and architectural elements naturally guide eyes. Multiple lines increase impact.',
                image: '/examples/camera-line-convergence.gif'
              }
            ]
          }
        },
        {
          name: 'Framing',
          description: 'Use foreground to frame subjects',
          icon: '/Icons/border.inner.svg',
          detailedInfo: {
            overview: 'Place elements in the foreground to create a natural frame around your subject. Doorways, windows, trees, architecture - frames focus attention and add depth.',
            pages: [
              {
                title: 'Natural Frames',
                content: 'Shoot through doorways, windows, or arches. Frames create layers, add context, and draw attention to what\'s framed. Makes subjects feel observed or important.',
                image: '/examples/camera-natural-frames.gif'
              },
              {
                title: 'Depth Creation',
                content: 'Frames separate foreground from subject, creating depth. Especially powerful with shallow depth of field - blurred frame, sharp subject. Adds cinematic quality.',
                image: '/examples/camera-frame-depth.gif'
              }
            ]
          }
        },
        {
          name: 'Negative Space',
          description: 'Use empty space intentionally',
          icon: '/Icons/border.all.svg',
          detailedInfo: {
            overview: 'Empty space around your subject creates breathing room and emphasis. Strategic emptiness is as important as what you include. Negative space directs attention and sets mood.',
            pages: [
              {
                title: 'Isolation and Emphasis',
                content: 'Surround subject with negative space to emphasize isolation, importance, or scale. More space = more emphasis. Creates minimalist, impactful compositions.',
                image: '/examples/camera-negative-space.gif'
              },
              {
                title: 'Directional Space',
                content: 'Place negative space in the direction a subject is looking or moving. Creates anticipation and natural flow. Looking left? Add space on left side.',
                image: '/examples/camera-directional-space.gif'
              }
            ]
          }
        },
        {
          name: 'Symmetry',
          description: 'Create balance through mirroring',
          icon: '/Icons/ops.gpencil.edit_mirror.svg',
          detailedInfo: {
            overview: 'Symmetrical compositions create formal, stable, powerful feelings. Perfect for architecture, faces, formal subjects. Balance creates immediate visual satisfaction.',
            pages: [
              {
                title: 'Perfect Symmetry',
                content: 'Center your subject, ensure equal weight on both sides. Use for architecture, formal portraits, intimidating subjects. Creates instant impact and formality.',
                image: '/examples/camera-symmetry.gif'
              },
              {
                title: 'Reflections',
                content: 'Water, mirrors, and polished surfaces create natural symmetry. Reflections double visual impact and add surreal, contemplative quality.',
                image: '/examples/camera-reflections.gif'
              }
            ]
          }
        },
        {
          name: 'Depth Layers',
          description: 'Create foreground, middle, background',
          icon: '/Icons/layer_active.svg',
          detailedInfo: {
            overview: 'Strong compositions have distinct foreground, middleground, and background layers. Creates 3D feeling on 2D screen and guides eye through the scene progressively.',
            pages: [
              {
                title: 'Three-Layer Composition',
                content: 'Place elements at different depths. Foreground frames or adds interest, middleground holds subject, background provides context. Each layer should add value.',
                image: '/examples/camera-depth-layers.gif'
              },
              {
                title: 'Using Depth of Field',
                content: 'Blur foreground and background to emphasize middle layer. Selective focus separates layers clearly. Subject pops while maintaining environmental context.',
                image: '/examples/camera-layers-dof.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Camera Angles & Shots',
      icon: '/Icons/view_camera.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Eye Level',
          description: 'Neutral, human perspective',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Camera at subject\'s eye level creates neutral, relatable feeling. Most natural and comfortable viewing angle. Standard for dialogue and normal interactions.',
            pages: [
              {
                title: 'Natural Connection',
                content: 'Eye level puts viewer at same height as subject, creating equality and natural connection. Default choice for most scenes requiring neutral emotional tone.',
                image: '/examples/camera-eye-level.gif'
              }
            ]
          }
        },
        {
          name: 'Low Angle',
          description: 'Make subjects powerful or imposing',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Camera below subject looking up. Makes subjects appear larger, more powerful, dominant, or heroic. Background becomes sky or ceiling - clean and dramatic.',
            pages: [
              {
                title: 'Power and Heroism',
                content: 'Low angles make subjects tower over viewer. Use for heroes, villains, authority figures, or anything that should feel powerful or intimidating. Sky background adds scale.',
                image: '/examples/camera-low-angle.gif'
              },
              {
                title: 'Architecture',
                content: 'Low angles emphasize height and grandeur of buildings. Makes structures feel massive and impressive. Classic for establishing shots of cities or monuments.',
                image: '/examples/camera-low-architecture.gif'
              }
            ]
          }
        },
        {
          name: 'High Angle',
          description: 'Make subjects vulnerable or weak',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Camera above subject looking down. Makes subjects appear smaller, weaker, vulnerable, or insignificant. Ground becomes dominant background element.',
            pages: [
              {
                title: 'Vulnerability',
                content: 'High angles diminish subjects, making them appear weak or threatened. Use for victims, defeated characters, or moments of helplessness. Viewer becomes observer from position of power.',
                image: '/examples/camera-high-angle.gif'
              },
              {
                title: 'Overview Shots',
                content: 'Extreme high angles (bird\'s eye view) show spatial relationships and scale. Perfect for establishing shots, battle scenes, or showing subject in environment.',
                image: '/examples/camera-high-overview.gif'
              }
            ]
          }
        },
        {
          name: 'Dutch Angle',
          description: 'Create unease with tilted frame',
          icon: '/Icons/driver_rotational_difference.svg',
          detailedInfo: {
            overview: 'Tilted camera creates slanted horizon. Generates disorientation, unease, tension, or chaos. Powerful tool for psychological scenes, action, or stylized content.',
            pages: [
              {
                title: 'Psychological Impact',
                content: 'Dutch angle destabilizes viewer, creating anxiety or discomfort. Use for villain introductions, mental instability, chaos, or moments of confusion. Subtle tilts = unease, extreme tilts = chaos.',
                image: '/examples/camera-dutch-angle.gif'
              },
              {
                title: 'Action and Style',
                content: 'Dynamic dutch angles add energy to action sequences. Also used stylistically for bold, non-realistic aesthetics. Popular in music videos and stylized content.',
                image: '/examples/camera-dutch-action.gif'
              }
            ]
          }
        },
        {
          name: 'Over the Shoulder',
          description: 'Show perspective in conversations',
          icon: '/Icons/view_camera.svg',
          detailedInfo: {
            overview: 'Camera behind one character\'s shoulder looking at another. Standard for dialogue scenes, creates intimacy and shows perspective. Viewer experiences conversation from participant\'s viewpoint.',
            pages: [
              {
                title: 'Dialogue Coverage',
                content: 'Foreground character\'s shoulder and head frame one side. Other character faces camera. Cut between OTS shots to cover conversation naturally. Includes both subjects in frame for context.',
                image: '/examples/camera-ots.gif'
              },
              {
                title: 'Depth and Intimacy',
                content: 'OTS creates depth with foreground element and shows spatial relationship. More intimate than two separate closeups. Viewer feels present in conversation.',
                image: '/examples/camera-ots-depth.gif'
              }
            ]
          }
        },
        {
          name: 'Establishing Shot',
          description: 'Show location and context',
          icon: '/Icons/world.svg',
          detailedInfo: {
            overview: 'Wide shot showing location and spatial relationships. Opens scenes by orienting viewer to where and when action takes place. Essential for context before closer shots.',
            pages: [
              {
                title: 'Setting the Scene',
                content: 'Wide view of environment showing location, time of day, weather, and context. Answers "where are we?" before cutting to closer action. Often exterior of buildings or full room views.',
                image: '/examples/camera-establishing.gif'
              },
              {
                title: 'Reestablishing',
                content: 'After close-ups, reestablish with wide shot to reorient viewer or show passage of time. Reminds audience of spatial relationships between scene elements.',
                image: '/examples/camera-reestablishing.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Camera Movement',
      icon: '/Icons/transform_origins.svg',
      color: '#ec4899',
      items: [
        {
          name: 'Pan',
          description: 'Horizontal camera rotation',
          icon: '/Icons/driver_rotational_difference.svg',
          detailedInfo: {
            overview: 'Rotating camera left or right on horizontal axis while position stays fixed. Reveals environment, follows subjects, or transitions between elements. Most basic camera move.',
            pages: [
              {
                title: 'Following Action',
                content: 'Pan smoothly to follow moving subjects. Keep subject in frame as they move horizontally. Natural way to track movement without changing camera position.',
                image: '/examples/camera-pan.gif'
              },
              {
                title: 'Revealing Space',
                content: 'Pan across environment to reveal its scope. Start on one element, pan to reveal full space or another important element. Builds anticipation through gradual reveal.',
                image: '/examples/camera-pan-reveal.gif'
              }
            ]
          }
        },
        {
          name: 'Tilt',
          description: 'Vertical camera rotation',
          icon: '/Icons/driver_rotational_difference.svg',
          detailedInfo: {
            overview: 'Rotating camera up or down on vertical axis. Reveals height, follows vertical movement, or emphasizes scale. Like nodding yes/no with your head.',
            pages: [
              {
                title: 'Revealing Height',
                content: 'Tilt up to show towering subjects or impressive height. Tilt down to show subjects below or emphasize descent. Creates sense of scale and vertical space.',
                image: '/examples/camera-tilt.gif'
              },
              {
                title: 'Dramatic Reveals',
                content: 'Start low, tilt up to reveal tall subject\'s full height. Creates anticipation and emphasis. Classic character introduction technique for important figures.',
                image: '/examples/camera-tilt-reveal.gif'
              }
            ]
          }
        },
        {
          name: 'Dolly/Track',
          description: 'Move camera forward or backward',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Moving camera physically closer or farther from subject. Creates immersive feeling of moving through space. Different from zoom - perspective changes as you move.',
            pages: [
              {
                title: 'Dolly In',
                content: 'Moving toward subject increases intimacy and intensity. Draws viewer into moment or character. Perspective shift makes movement feel real and immersive.',
                image: '/examples/camera-dolly-in.gif'
              },
              {
                title: 'Dolly Out',
                content: 'Moving away from subject creates distance, reveals context, or shows isolation. Pull back to reveal surprising environment or show character\'s loneliness.',
                image: '/examples/camera-dolly-out.gif'
              },
              {
                title: 'Dolly vs Zoom',
                content: 'Dolly changes perspective - foreground and background relationship shifts. Zoom just magnifies - perspective stays flat. Dolly feels cinematic, zoom feels cheap unless used stylistically.',
                image: '/examples/camera-dolly-vs-zoom.gif'
              }
            ]
          }
        },
        {
          name: 'Truck/Strafe',
          description: 'Move camera left or right',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Camera moves sideways (left or right) parallel to subject. Follows lateral action, reveals environment horizontally, or creates dynamic parallax effect with foreground/background.',
            pages: [
              {
                title: 'Following Movement',
                content: 'Track alongside moving subject to keep them in frame. Camera moves at same speed as subject. Creates dynamic feeling while maintaining consistent framing.',
                image: '/examples/camera-truck.gif'
              },
              {
                title: 'Parallax Effect',
                content: 'Foreground moves faster than background when trucking, creating strong depth. Use foreground elements to emphasize this parallax for cinematic 3D feeling.',
                image: '/examples/camera-truck-parallax.gif'
              }
            ]
          }
        },
        {
          name: 'Pedestal',
          description: 'Move camera up or down',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Moving camera straight up or down vertically. Reveals vertical space, follows vertical action, or adjusts composition dynamically. Like an elevator movement.',
            pages: [
              {
                title: 'Vertical Movement',
                content: 'Pedestal up to follow rising subject or reveal upper environment. Pedestal down to follow descent or emphasize height by starting high.',
                image: '/examples/camera-pedestal.gif'
              }
            ]
          }
        },
        {
          name: 'Crane/Boom',
          description: 'Sweeping vertical movement',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Large sweeping movement combining vertical and horizontal motion. Creates epic, grand feeling. Often used for establishing shots or emotional moments.',
            pages: [
              {
                title: 'Sweeping Moves',
                content: 'Start low and rise while moving, or start high and descend. Creates dramatic, cinematic feeling. Perfect for opening/closing shots or revealing scale.',
                image: '/examples/camera-crane.gif'
              },
              {
                title: 'Emotional Impact',
                content: 'Rising crane shot feels uplifting, hopeful, or triumphant. Descending feels ominous, sad, or intimate. Powerful tool for emotional storytelling.',
                image: '/examples/camera-crane-emotion.gif'
              }
            ]
          }
        },
        {
          name: 'Orbit',
          description: 'Circle around subject',
          icon: '/Icons/driver_rotational_difference.svg',
          detailedInfo: {
            overview: 'Camera moves in circle around subject while always pointing at it. Reveals subject from all angles, creates dynamic energy, or emphasizes importance.',
            pages: [
              {
                title: 'Character Reveals',
                content: 'Orbit around character to show them from all sides. Classic hero introduction shot. Emphasizes importance and gives complete view of subject.',
                image: '/examples/camera-orbit.gif'
              },
              {
                title: 'Using Track To',
                content: 'Animate camera position in circular path, use Track To constraint to keep camera pointed at subject. Or use Follow Path with curve for perfect circles.',
                image: '/examples/camera-orbit-setup.gif'
              }
            ]
          }
        },
        {
          name: 'Handheld',
          description: 'Add realistic camera shake',
          icon: '/Icons/transform_origins.svg',
          detailedInfo: {
            overview: 'Subtle random movement simulating handheld camera. Adds realism, energy, or documentary feel. Can increase tension or create intimate, personal feeling.',
            pages: [
              {
                title: 'Adding Shake',
                content: 'Keyframe subtle random position and rotation changes, or use noise modifier on camera animation. Small movements = professional handheld, large movements = chaotic action.',
                image: '/examples/camera-handheld.gif'
              },
              {
                title: 'When to Use',
                content: 'Action sequences, horror, documentary-style realism, or intimate moments. Avoid for formal, stable scenes. Too much shake becomes distracting.',
                image: '/examples/camera-handheld-usage.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Create a Product Showcase', 
      desc: 'Master depth of field and camera orbits',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Focal Length', 'Depth of Field', 'Orbit Movement', 'Composition']
    },
    { 
      title: 'Film a Dialogue Scene', 
      desc: 'Practice camera angles and coverage',
      duration: '30 min', 
      difficulty: 'Beginner',
      skills: ['Eye Level', 'Over the Shoulder', 'Shot-Reverse-Shot', 'Rule of Thirds']
    },
    { 
      title: 'Design a Cinematic Sequence', 
      desc: 'Combine multiple camera techniques',
      duration: '45 min', 
      difficulty: 'Intermediate',
      skills: ['Establishing Shot', 'Dolly Movement', 'Crane Shots', 'Camera Tracking']
    },
    { 
      title: 'Create a Music Video Style Piece', 
      desc: 'Advanced camera choreography and timing',
      duration: '60 min', 
      difficulty: 'Advanced',
      skills: ['Complex Moves', 'Dutch Angles', 'Rhythm Matching', 'Follow Path']
    }
  ]
}