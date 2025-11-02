export const timelineLessonData = {

  heroConfig: {
    title: 'Timeline',
    gradientText: 'Control',
    subtitle: 'Master playback, scrubbing, and time-based controls for animation workflow',
    gradientColors: 'linear-gradient(135deg, #10b981, #06b6d4, #3b82f6)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' },
      { icon: '/Icons/timeline.svg', title: 'Frame Perfect', subtitle: 'Precision control' }
    ]
  },

  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/timeline.svg', label: 'Timeline Controls' },
    { id: 'techniques', icon: '/Icons/tool.svg', label: 'Techniques' },
    { id: 'practice', icon: '/Icons/view_camera.svg', label: 'Practice' }
  ],

  themeColor: '#10b981',

  overviewCards: [
    {
      icon: '/Icons/timeline.svg',
      title: 'Timeline Fundamentals',
      content: 'The Timeline is your animation control center. Scrub through time, control playback, set frame ranges, and navigate your animation. Every animation workflow starts here with frame-accurate control.'
    },
    {
      icon: '/Icons/playback.svg',
      title: 'Playback System',
      content: 'Real-time playback lets you preview your animation instantly. Control speed, loop ranges, sync audio, and play forward or backward. Essential for evaluating timing and motion feel.'
    },
    {
      icon: '/Icons/marker.svg',
      title: 'Time Management',
      content: 'Set start/end frames, create markers for important moments, and use frame rate settings to match your output. Organize complex animations with precise time control and reference points.'
    }
  ],

  contentTitle: 'Timeline Tools & Controls',
  contentDescription: 'Learn playback navigation and time-based workflow',

  categories: [
    {
      name: 'Playback Controls',
      icon: '/Icons/playback.svg',
      color: '#10b981',
      items: [
        {
          name: 'Play/Pause',
          description: 'Start and stop animation playback',
          icon: '/Icons/play.svg',
          detailedInfo: {
            overview: 'Press Spacebar to play or pause animation. The most essential timeline control for previewing your work in real-time.',
            pages: [
              {
                title: 'Basic Playback',
                content: 'Spacebar plays from current frame. Press again to pause. Playback loops by default from start to end frame. Simple and instant.',
                image: '/examples/timeline-play-basic.gif'
              },
              {
                title: 'Playback Speed',
                content: 'Animation plays at project frame rate. If viewport can\'t keep up, playback slows down. Check FPS display in timeline for real speed.',
                image: '/examples/timeline-play-speed.gif'
              }
            ]
          }
        },
        {
          name: 'Reverse Play',
          description: 'Play animation backward',
          icon: '/Icons/play_reverse.svg',
          detailedInfo: {
            overview: 'Shift+Spacebar plays animation in reverse. Great for checking motion flow and finding timing issues.',
            pages: [
              {
                title: 'Backward Preview',
                content: 'Shift+Spacebar plays backward from current frame. Loops in reverse. Perfect for analyzing motion in both directions.',
                image: '/examples/timeline-reverse.gif'
              }
            ]
          }
        },
        {
          name: 'Play Range',
          description: 'Play specific frame range',
          icon: '/Icons/play_range.svg',
          detailedInfo: {
            overview: 'Set custom start/end frames for playback. Focus on specific sections without playing entire animation.',
            pages: [
              {
                title: 'Custom Ranges',
                content: 'Set Preview Range in timeline header. Drag brackets to define range. Playback loops within this range only.',
                image: '/examples/timeline-range.gif'
              },
              {
                title: 'Quick Scrubbing',
                content: 'Use preview range to isolate problem areas. Quickly iterate on specific sections without waiting for full playback.',
                image: '/examples/timeline-range-scrub.gif'
              }
            ]
          }
        },
        {
          name: 'Step Forward/Back',
          description: 'Advance one frame at a time',
          icon: '/Icons/step.svg',
          detailedInfo: {
            overview: 'Left/Right arrow keys step one frame at a time. Up/Down arrows jump 10 frames. Frame-accurate navigation.',
            pages: [
              {
                title: 'Single Frame Steps',
                content: 'Left/Right arrows move one frame. Hold Shift for larger jumps. Perfect for frame-perfect positioning and pose checking.',
                image: '/examples/timeline-step.gif'
              },
              {
                title: 'Fast Navigation',
                content: 'Up/Down arrows jump 10 frames. Combine with Shift for 100 frame jumps. Navigate long animations quickly.',
                image: '/examples/timeline-step-fast.gif'
              }
            ]
          }
        },
        {
          name: 'Jump to Start/End',
          description: 'Jump to timeline boundaries',
          icon: '/Icons/skip.svg',
          detailedInfo: {
            overview: 'Shift+Left arrow jumps to start frame. Shift+Right arrow jumps to end. Instant navigation to timeline boundaries.',
            pages: [
              {
                title: 'Quick Jumps',
                content: 'Shift+Left/Right arrows jump to start or end of timeline range. Fast way to review from beginning or check ending.',
                image: '/examples/timeline-jump.gif'
              }
            ]
          }
        },
        {
          name: 'Sync Audio',
          description: 'Play sound with animation',
          icon: '/Icons/audio.svg',
          detailedInfo: {
            overview: 'Audio scrubbing lets you hear sound while scrubbing timeline. Essential for lip sync and music timing.',
            pages: [
              {
                title: 'Audio Playback',
                content: 'Add audio strips in Video Sequencer. Enable audio scrubbing in preferences. Hear sound during playback and scrubbing.',
                image: '/examples/timeline-audio.gif'
              },
              {
                title: 'Lip Sync Workflow',
                content: 'Scrub through dialogue, set keyframes on phonemes. Audio scrubbing makes timing mouth shapes to sound straightforward.',
                image: '/examples/timeline-audio-lipsync.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Timeline Navigation',
      icon: '/Icons/navigation.svg',
      color: '#06b6d4',
      items: [
        {
          name: 'Scrubbing',
          description: 'Drag through timeline',
          icon: '/Icons/scrub.svg',
          detailedInfo: {
            overview: 'Click and drag on timeline to scrub through animation. Most intuitive way to preview and find specific frames.',
            pages: [
              {
                title: 'Click and Drag',
                content: 'Click timeline ruler and drag left/right. Current frame indicator (blue line) follows your mouse. Instant visual feedback.',
                image: '/examples/timeline-scrub-basic.gif'
              },
              {
                title: 'Precise Scrubbing',
                content: 'Hold Shift while scrubbing for slower, more precise control. Perfect for finding exact frames or subtle timing.',
                image: '/examples/timeline-scrub-precise.gif'
              }
            ]
          }
        },
        {
          name: 'Jump to Frame',
          description: 'Go to specific frame number',
          icon: '/Icons/frame.svg',
          detailedInfo: {
            overview: 'Click frame number in timeline header and type specific frame. Instant jump to exact frame.',
            pages: [
              {
                title: 'Direct Input',
                content: 'Click current frame number (blue digits), type frame number, press Enter. Jump directly to any frame instantly.',
                image: '/examples/timeline-jump-frame.gif'
              }
            ]
          }
        },
        {
          name: 'Jump to Keyframe',
          description: 'Navigate between keyframes',
          icon: '/Icons/keyframe_jump.svg',
          detailedInfo: {
            overview: 'Up/Down arrows jump to next/previous keyframe on selected object. Skip empty frames and land on actual animation.',
            pages: [
              {
                title: 'Keyframe Navigation',
                content: 'Select object, press Up/Down arrows to jump between its keyframes. Ignore empty frames, land exactly on animated poses.',
                image: '/examples/timeline-jump-key.gif'
              }
            ]
          }
        },
        {
          name: 'Zoom Timeline',
          description: 'Change timeline scale',
          icon: '/Icons/zoom.svg',
          detailedInfo: {
            overview: 'Scroll to zoom in/out on timeline. See more detail or get broader overview. Essential for different animation phases.',
            pages: [
              {
                title: 'Timeline Scaling',
                content: 'Scroll wheel over timeline to zoom. Closer zoom shows individual frames clearly. Zoom out for overview of entire animation.',
                image: '/examples/timeline-zoom.gif'
              },
              {
                title: 'Pan Timeline',
                content: 'Middle mouse drag to pan timeline left/right. Or Shift+Scroll to pan. Navigate to different sections while zoomed in.',
                image: '/examples/timeline-pan.gif'
              }
            ]
          }
        },
        {
          name: 'Frame All',
          description: 'View entire timeline',
          icon: '/Icons/frame_all.svg',
          detailedInfo: {
            overview: 'Home key frames entire animation range. See all keyframes at once. Quick reset when lost in zoomed view.',
            pages: [
              {
                title: 'Full View',
                content: 'Press Home to frame entire timeline. Shows start to end frame. Perfect for getting overview after detailed work.',
                image: '/examples/timeline-frame-all.gif'
              }
            ]
          }
        },
        {
          name: 'Timeline Ruler',
          description: 'Frame number reference',
          icon: '/Icons/ruler.svg',
          detailedInfo: {
            overview: 'The ruler shows frame numbers and markers. Click to jump to frames, see keyframe diamonds, identify timing.',
            pages: [
              {
                title: 'Reading Ruler',
                content: 'Numbers show frame count. Diamonds show keyframes. Green markers show important moments. Provides complete temporal context.',
                image: '/examples/timeline-ruler.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Frame Range Settings',
      icon: '/Icons/settings.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Start Frame',
          description: 'Set animation beginning',
          icon: '/Icons/start_frame.svg',
          detailedInfo: {
            overview: 'Define where animation starts. Usually frame 1, but can be any frame. Sets playback loop beginning.',
            pages: [
              {
                title: 'Setting Start',
                content: 'Start Frame field in timeline header sets beginning. Playback loops from here. Render starts from this frame.',
                image: '/examples/timeline-start-frame.gif'
              }
            ]
          }
        },
        {
          name: 'End Frame',
          description: 'Set animation conclusion',
          icon: '/Icons/end_frame.svg',
          detailedInfo: {
            overview: 'Define where animation ends. Sets playback loop end and default render range.',
            pages: [
              {
                title: 'Setting End',
                content: 'End Frame field sets conclusion point. Playback loops back to start from here. Render stops at this frame.',
                image: '/examples/timeline-end-frame.gif'
              },
              {
                title: 'Frame Range Calculation',
                content: 'Total frames = End - Start + 1. For 24fps, 240 frames = 10 seconds. Plan your timing with math.',
                image: '/examples/timeline-range-math.gif'
              }
            ]
          }
        },
        {
          name: 'Current Frame',
          description: 'Active frame indicator',
          icon: '/Icons/current_frame.svg',
          detailedInfo: {
            overview: 'Blue line and number show current frame. Where keyframes insert, what you see in viewport. Your temporal position.',
            pages: [
              {
                title: 'Frame Indicator',
                content: 'Vertical blue line shows current frame. Blue number displays frame count. All operations happen at this frame.',
                image: '/examples/timeline-current.gif'
              }
            ]
          }
        },
        {
          name: 'Preview Range',
          description: 'Temporary playback range',
          icon: '/Icons/preview_range.svg',
          detailedInfo: {
            overview: 'Set temporary playback range without changing start/end frames. Focus on specific sections. Toggle on/off as needed.',
            pages: [
              {
                title: 'Range Brackets',
                content: 'Enable Preview Range, drag green/red brackets. Playback loops within brackets only. Start/End frames unchanged.',
                image: '/examples/timeline-preview-range.gif'
              },
              {
                title: 'Quick Section Work',
                content: 'Set preview range over problem area. Iterate quickly without playing full animation. Disable when done.',
                image: '/examples/timeline-preview-iterate.gif'
              }
            ]
          }
        },
        {
          name: 'Frame Rate',
          description: 'Frames per second setting',
          icon: '/Icons/fps.svg',
          detailedInfo: {
            overview: 'Set project frame rate (FPS). 24fps for film, 30fps for TV/video, 60fps for games. Affects playback and render speed.',
            pages: [
              {
                title: 'FPS Settings',
                content: 'Set in Output Properties. 24fps is cinema standard, 30fps for broadcast, 60fps for smooth motion. Choose based on output medium.',
                image: '/examples/timeline-fps.gif'
              },
              {
                title: 'Timing Calculations',
                content: 'At 24fps: 24 frames = 1 second. 12 frames = 0.5 seconds. 6 frames = 0.25 seconds. Math determines animation length.',
                image: '/examples/timeline-fps-calc.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Markers & Organization',
      icon: '/Icons/marker.svg',
      color: '#8b5cf6',
      items: [
        {
          name: 'Add Marker',
          description: 'Mark important frames',
          icon: '/Icons/marker_add.svg',
          detailedInfo: {
            overview: 'Press M to add marker at current frame. Name and annotate important moments. Jump between markers quickly.',
            pages: [
              {
                title: 'Creating Markers',
                content: 'Move to important frame, press M. Type name. Green marker appears. Perfect for marking beats, actions, or sections.',
                image: '/examples/timeline-marker-add.gif'
              },
              {
                title: 'Marker Uses',
                content: 'Mark dialogue beats, action starts, camera changes, or reference points. Organize complex animations into labeled sections.',
                image: '/examples/timeline-marker-uses.gif'
              }
            ]
          }
        },
        {
          name: 'Rename Marker',
          description: 'Change marker labels',
          icon: '/Icons/marker_rename.svg',
          detailedInfo: {
            overview: 'Right-click marker and choose Rename. Update labels as animation evolves. Keep markers descriptive.',
            pages: [
              {
                title: 'Updating Names',
                content: 'Right-click marker > Rename. Type new name. Markers stay organized with descriptive labels throughout production.',
                image: '/examples/timeline-marker-rename.gif'
              }
            ]
          }
        },
        {
          name: 'Jump to Marker',
          description: 'Navigate to labeled frames',
          icon: '/Icons/marker_jump.svg',
          detailedInfo: {
            overview: 'Ctrl+Right/Left arrows jump to next/previous marker. Skip directly to important moments without scrubbing.',
            pages: [
              {
                title: 'Marker Navigation',
                content: 'Ctrl+Arrow keys jump between markers. Land exactly on labeled frames. Navigate complex animations by sections.',
                image: '/examples/timeline-marker-jump.gif'
              }
            ]
          }
        },
        {
          name: 'Delete Marker',
          description: 'Remove markers',
          icon: '/Icons/marker_delete.svg',
          detailedInfo: {
            overview: 'Select marker and press X to delete. Clean up outdated markers as animation changes.',
            pages: [
              {
                title: 'Removing Markers',
                content: 'Click marker to select (turns white), press X to delete. Keep timeline clean by removing obsolete markers.',
                image: '/examples/timeline-marker-delete.gif'
              }
            ]
          }
        },
        {
          name: 'Camera Bind Marker',
          description: 'Link cameras to markers',
          icon: '/Icons/marker_camera.svg',
          detailedInfo: {
            overview: 'Bind camera to marker for automatic camera switching. Multi-cam editing made simple with timeline markers.',
            pages: [
              {
                title: 'Camera Switching',
                content: 'Select marker, Ctrl+B to bind active camera. Playback automatically switches cameras at markers. Multi-cam workflow.',
                image: '/examples/timeline-marker-camera.gif'
              }
            ]
          }
        },
        {
          name: 'Pose Markers',
          description: 'Store quick pose references',
          icon: '/Icons/marker_pose.svg',
          detailedInfo: {
            overview: 'Use markers to store quick pose references. Jump to key poses during animation refinement.',
            pages: [
              {
                title: 'Pose Reference Points',
                content: 'Mark extreme poses, contacts, and key positions. Jump between major poses during polishing without searching.',
                image: '/examples/timeline-marker-pose.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Playback Options',
      icon: '/Icons/options.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Play in All Editors',
          description: 'Sync playback everywhere',
          icon: '/Icons/sync_all.svg',
          detailedInfo: {
            overview: 'Enable to sync playback across all timeline editors. See animation, Graph Editor, and Dope Sheet update together.',
            pages: [
              {
                title: 'Synchronized Preview',
                content: 'Enable in Playback menu. All editors scrub together. See curves, keyframes, and viewport simultaneously during playback.',
                image: '/examples/timeline-sync-all.gif'
              }
            ]
          }
        },
        {
          name: 'Play Every N Frames',
          description: 'Skip frames for speed',
          icon: '/Icons/skip_frames.svg',
          detailedInfo: {
            overview: 'Play every 2nd, 3rd, or Nth frame for faster preview on heavy scenes. Sacrifice smoothness for speed.',
            pages: [
              {
                title: 'Fast Preview',
                content: 'Set in Playback menu. Play every 2 frames doubles playback speed. Heavy scenes play smoothly by skipping frames.',
                image: '/examples/timeline-skip-frames.gif'
              }
            ]
          }
        },
        {
          name: 'Frame Dropping',
          description: 'Skip frames to maintain speed',
          icon: '/Icons/frame_drop.svg',
          detailedInfo: {
            overview: 'Automatically drop frames if viewport can\'t keep up with frame rate. Maintains timing but skips display frames.',
            pages: [
              {
                title: 'Performance Mode',
                content: 'Enable Frame Dropping in Playback menu. Blender skips drawing frames to maintain playback speed. Real-time timing preserved.',
                image: '/examples/timeline-frame-drop.gif'
              }
            ]
          }
        },
        {
          name: 'AV Sync',
          description: 'Synchronize audio/video',
          icon: '/Icons/av_sync.svg',
          detailedInfo: {
            overview: 'Keep audio and animation in sync. Choose to drop frames or stretch time to maintain audio alignment.',
            pages: [
              {
                title: 'Audio Alignment',
                content: 'Enable AV-sync to keep sound and animation together. Critical for dialogue, music, or sound effects timing.',
                image: '/examples/timeline-av-sync.gif'
              }
            ]
          }
        },
        {
          name: 'Follow Current Frame',
          description: 'Auto-scroll timeline',
          icon: '/Icons/follow.svg',
          detailedInfo: {
            overview: 'Timeline automatically scrolls to keep current frame visible during playback. Stay centered on action.',
            pages: [
              {
                title: 'Auto Scrolling',
                content: 'Enable in timeline header. Timeline pans automatically during playback to keep blue line visible. Never lose current frame.',
                image: '/examples/timeline-follow.gif'
              }
            ]
          }
        },
        {
          name: 'Show Seconds',
          description: 'Display time in seconds',
          icon: '/Icons/seconds.svg',
          detailedInfo: {
            overview: 'Toggle between frame numbers and timecode (seconds). Different displays for different workflows.',
            pages: [
              {
                title: 'Time Display',
                content: 'Enable Show Seconds to see timecode instead of frames. Better for audio work and real-world timing references.',
                image: '/examples/timeline-seconds.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Timeline',
      icon: '/Icons/advanced.svg',
      color: '#ef4444',
      items: [
        {
          name: 'Timeline Layers',
          description: 'Multiple animation layers',
          icon: '/Icons/layers.svg',
          detailedInfo: {
            overview: 'View multiple animation layers simultaneously. See base layer and additive animations together.',
            pages: [
              {
                title: 'Layer Visualization',
                content: 'NLA editor shows animation layers stacked. Timeline shows combined result. Layer corrections over base animations.',
                image: '/examples/timeline-layers.gif'
              }
            ]
          }
        },
        {
          name: 'Onion Skinning',
          description: 'See previous/next frames',
          icon: '/Icons/onion.svg',
          detailedInfo: {
            overview: 'Display ghost frames before and after current frame. See motion flow and spacing visually.',
            pages: [
              {
                title: 'Motion Preview',
                content: 'Enable in Viewport Overlays. Ghost images show previous/next poses. Visualize spacing and arcs without playback.',
                image: '/examples/timeline-onion.gif'
              },
              {
                title: 'Frame Range',
                content: 'Adjust how many frames before/after to show. More frames = longer motion trails. Fewer = cleaner view of immediate flow.',
                image: '/examples/timeline-onion-range.gif'
              }
            ]
          }
        },
        {
          name: 'Motion Paths',
          description: 'Visualize trajectory',
          icon: '/Icons/motion_path.svg',
          detailedInfo: {
            overview: 'Calculate and display motion paths for objects. See entire trajectory as curve in viewport.',
            pages: [
              {
                title: 'Path Calculation',
                content: 'Select object, Calculate Motion Paths. Curve shows complete movement arc. Essential for analyzing spacing and trajectory.',
                image: '/examples/timeline-motion-path.gif'
              }
            ]
          }
        },
        {
          name: 'Playback Caching',
          description: 'Cache frames for smooth playback',
          icon: '/Icons/cache.svg',
          detailedInfo: {
            overview: 'Blender caches frames during first playback. Subsequent plays are smooth. Green bar shows cached frames.',
            pages: [
              {
                title: 'Cache System',
                content: 'Green bar in timeline shows cached frames. First playback may stutter while caching. After caching, playback is smooth and real-time.',
                image: '/examples/timeline-cache.gif'
              }
            ]
          }
        },
        {
          name: 'Simplify Viewport',
          description: 'Reduce complexity for playback',
          icon: '/Icons/simplify.svg',
          detailedInfo: {
            overview: 'Temporarily reduce subdivision, particles, and effects for smoother playback. Enable in Scene Properties.',
            pages: [
              {
                title: 'Performance Boost',
                content: 'Simplify reduces visual quality during playback for speed. Heavy scenes play smoothly. Render uses full quality.',
                image: '/examples/timeline-simplify.gif'
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
      color: '#10b981',
      items: [
        {
          name: 'Preview Range Iteration',
          description: 'Focus on specific sections',
          icon: '/Icons/preview_range.svg',
          detailedInfo: {
            overview: 'Use preview ranges to iterate on problem areas. Loop small sections repeatedly until perfect, then move to next section.',
            pages: [
              {
                title: 'Sectional Refinement',
                content: 'Identify problem section, set preview range around it. Loop playback continuously. Refine until perfect. Move to next section.',
                image: '/examples/workflow-preview-refine.gif'
              },
              {
                title: 'Timing Adjustment',
                content: 'Use preview range to test different timing options. Adjust keyframes, play section, compare. Faster iteration than full playback.',
                image: '/examples/workflow-preview-timing.gif'
              }
            ]
          }
        },
        {
          name: 'Marker-Based Organization',
          description: 'Structure complex animations',
          icon: '/Icons/marker.svg',
          detailedInfo: {
            overview: 'Use markers to break animation into manageable sections. Label acts, beats, or camera cuts. Navigate by sections.',
            pages: [
              {
                title: 'Scene Breakdown',
                content: 'Add markers for each major beat: "Intro", "Action", "Reaction", "Resolve". Jump between sections with Ctrl+Arrows.',
                image: '/examples/workflow-marker-sections.gif'
              },
              {
                title: 'Shot Management',
                content: 'Mark each camera cut. Bind cameras to markers. Jump between shots instantly. Multi-cam editing made simple.',
                image: '/examples/workflow-marker-shots.gif'
              }
            ]
          }
        },
        {
          name: 'Scrub-Key Workflow',
          description: 'Scrub, pose, keyframe, repeat',
          icon: '/Icons/scrub.svg',
          detailedInfo: {
            overview: 'Traditional animation workflow: scrub to frame, create pose, insert keyframe, move to next frame. Fundamental technique.',
            pages: [
              {
                title: 'Frame-by-Frame',
                content: 'Scrub to desired frame. Adjust pose. Press I to keyframe. Step forward (arrow key). Repeat. Simple, effective workflow.',
                image: '/examples/workflow-scrub-key.gif'
              },
              {
                title: 'With Auto-Key',
                content: 'Enable Auto Keyframe. Now just scrub and pose - keyframes insert automatically. Faster iteration for experienced animators.',
                image: '/examples/workflow-scrub-auto.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Advanced Techniques',
      icon: '/Icons/settings.svg',
      color: '#3b82f6',
      items: [
        {
          name: 'Playback Speed Analysis',
          description: 'Evaluate at different speeds',
          icon: '/Icons/speed.svg',
          detailedInfo: {
            overview: 'View animation at different speeds to catch different problems. Slow for details, fast for overall flow.',
            pages: [
              {
                title: 'Slow Motion Review',
                content: 'Set preview range, enable "Play Every 2 Frames" to slow down. Catch subtle timing issues and small pops.',
                image: '/examples/advanced-slow-motion.gif'
              },
              {
                title: 'Fast Preview',
                content: 'Play at 2x speed to see overall flow and energy. Does it still feel good? Fast preview reveals pacing issues.',
                image: '/examples/advanced-fast-preview.gif'
              }
            ]
          }
        },
        {
          name: 'Audio Sync Workflow',
          description: 'Match animation to sound',
          icon: '/Icons/audio.svg',
          detailedInfo: {
            overview: 'Use timeline audio scrubbing to match animation perfectly to dialogue or music beats.',
            pages: [
              {
                title: 'Finding Beats',
                content: 'Scrub through audio slowly. When you hear important sound, add marker. Build entire timing structure from audio.',
                image: '/examples/advanced-audio-beats.gif'
              },
              {
                title: 'Lip Sync Timing',
                content: 'Scrub to phoneme, set mouth shape keyframe. Audio scrubbing lets you hear exactly what shape matches what sound.',
                image: '/examples/advanced-audio-lipsync.gif'
              }
            ]
          }
        },
        {
          name: 'Frame-Accurate Editing',
          description: 'Precision timing control',
          icon: '/Icons/precision.svg',
          detailedInfo: {
            overview: 'Professional animation requires frame-perfect timing. Use direct frame input and step controls for precision.',
            pages: [
              {
                title: 'Exact Frame Jumps',
                content: 'Click frame number, type exact frame. Jump precisely to important moments. No approximation or scrubbing required.',
                image: '/examples/advanced-exact-frame.gif'
              },
              {
                title: 'Single Frame Adjustments',
                content: 'Use arrow keys to step one frame at a time. Adjust keyframe timing by single frames. Professional polish requires this precision.',
                image: '/examples/advanced-frame-adjust.gif'
              }
            ]
          }
        },
        {
          name: 'Cached Playback Workflow',
          description: 'Optimize preview performance',
          icon: '/Icons/cache.svg',
          detailedInfo: {
            overview: 'Let frames cache on first playback. Subsequent plays are smooth. Use for client reviews and final checks.',
            pages: [
              {
                title: 'Cache Building',
                content: 'Play animation once to cache all frames (watch green bar fill). Second playback is smooth and real-time. Perfect for client reviews.',
                image: '/examples/advanced-cache-build.gif'
              },
              {
                title: 'Clear Cache',
                content: 'Change animation? Clear cache with Free Bake in timeline menu. Rebuild cache with fresh playback. Ensures accurate preview.',
                image: '/examples/advanced-cache-clear.gif'
              }
            ]
          }
        },
        {
          name: 'Multi-Monitor Playback',
          description: 'Preview on multiple screens',
          icon: '/Icons/multi_screen.svg',
          detailedInfo: {
            overview: 'Set up multiple viewports or editors for simultaneous preview. See animation, curves, and timeline at once.',
            pages: [
              {
                title: 'Split Layouts',
                content: 'Create layout with 3D viewport, Graph Editor, and Timeline visible. All update during playback. Monitor everything simultaneously.',
                image: '/examples/advanced-multi-monitor.gif'
              },
              {
                title: 'Comparison Viewport',
                content: 'Split 3D viewport to see multiple camera angles during playback. Compare framing while animation plays.',
                image: '/examples/advanced-viewport-compare.gif'
              }
            ]
          }
        }
      ]
    },
    {
      name: 'Professional Tips',
      icon: '/Icons/pro.svg',
      color: '#f59e0b',
      items: [
        {
          name: 'Director\'s Review Setup',
          description: 'Prepare for feedback sessions',
          icon: '/Icons/review.svg',
          detailedInfo: {
            overview: 'Set up timeline for smooth director reviews. Cache animation, add markers for sections, prepare questions.',
            pages: [
              {
                title: 'Review Preparation',
                content: 'Cache full animation, add markers for each shot, set comfortable playback speed. Smooth presentation builds confidence.',
                image: '/examples/pro-review-setup.gif'
              },
              {
                title: 'Section Navigation',
                content: 'Use markers to jump to specific notes. "Can you show me that jump again?" - Ctrl+Arrow to marker, instant replay.',
                image: '/examples/pro-review-navigate.gif'
              }
            ]
          }
        },
        {
          name: 'Reference Timing',
          description: 'Match reference footage timing',
          icon: '/Icons/reference.svg',
          detailedInfo: {
            overview: 'Load reference video, add markers at key poses. Match your keyframes to reference timing exactly.',
            pages: [
              {
                title: 'Video Reference',
                content: 'Add reference video to timeline. Scrub through, mark key poses. Transfer timing to your animation via markers.',
                image: '/examples/pro-reference-timing.gif'
              },
              {
                title: 'Frame Counting',
                content: 'Count frames between poses in reference. Apply same frame counts to your animation. Ensures natural timing.',
                image: '/examples/pro-reference-count.gif'
              }
            ]
          }
        },
        {
          name: 'Playblast Workflow',
          description: 'Create preview videos',
          icon: '/Icons/playblast.svg',
          detailedInfo: {
            overview: 'Render viewport playback to video file. Share with team, review on other devices, or compare versions.',
            pages: [
              {
                title: 'Creating Playblasts',
                content: 'Set viewport shading to Solid. Viewport > View Animation. Creates video file of real-time preview. Fast iteration tool.',
                image: '/examples/pro-playblast.gif'
              },
              {
                title: 'Version Comparison',
                content: 'Create playblast of each iteration. Compare side-by-side in video player. Track improvements objectively.',
                image: '/examples/pro-playblast-compare.gif'
              }
            ]
          }
        },
        {
          name: 'Frame Rate Conversion',
          description: 'Adapt timing to different FPS',
          icon: '/Icons/fps_convert.svg',
          detailedInfo: {
            overview: 'Change project FPS and scale keyframes proportionally. Convert 30fps animation to 24fps while maintaining timing.',
            pages: [
              {
                title: 'FPS Scaling',
                content: 'Select all keyframes in Dope Sheet. Scale by FPS ratio (24/30 = 0.8). Animation maintains exact timing at new frame rate.',
                image: '/examples/pro-fps-convert.gif'
              },
              {
                title: 'International Standards',
                content: '24fps for film worldwide. 25fps for PAL (Europe). 29.97fps for NTSC (Americas). Know your target before starting.',
                image: '/examples/pro-fps-standards.gif'
              }
            ]
          }
        }
      ]
    }
  ],

  practiceProjects: [
    { 
      title: 'Master Scrubbing Control', 
      desc: 'Practice precise frame navigation',
      duration: '15 min', 
      difficulty: 'Beginner',
      skills: ['Scrubbing', 'Frame Stepping', 'Preview Ranges', 'Playback']
    },
    { 
      title: 'Marker-Based Scene Organization', 
      desc: 'Structure a multi-shot animation',
      duration: '20 min', 
      difficulty: 'Beginner',
      skills: ['Markers', 'Navigation', 'Camera Binding', 'Section Management']
    },
    { 
      title: 'Audio Sync Animation', 
      desc: 'Match character actions to music beats',
      duration: '35 min', 
      difficulty: 'Intermediate',
      skills: ['Audio Scrubbing', 'Marker Timing', 'Beat Detection', 'Sync']
    },
    { 
      title: 'Professional Review Package', 
      desc: 'Prepare animation for director feedback',
      duration: '25 min', 
      difficulty: 'Advanced',
      skills: ['Caching', 'Playblast', 'Markers', 'Presentation Setup']
    }
  ]
}