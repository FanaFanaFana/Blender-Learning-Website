'use client'

import { useState, useEffect } from 'react'

export default function GlobalSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // All your lessons AND their internal content
  const allLessons = [
    // Main Modeling Path Lessons
    { title: 'Interface Areas', path: 'Modeling', difficulty: 'Beginner', link: '/InterfaceLesson', color: '#3b82c4', tags: ['interface', 'viewport', 'editor', 'workspace', 'beginner'], type: 'lesson' },
    { title: 'First 3D Model', path: 'Modeling', difficulty: 'Beginner', link: '/FirstModelLesson', color: '#3b82c4', tags: ['modeling', 'mesh', 'object', 'beginner'], type: 'lesson' },
    { title: 'Edit Mode', path: 'Modeling', difficulty: 'Beginner', link: '/EditModeLesson', color: '#3b82c4', tags: ['edit', 'vertices', 'edges', 'faces', 'beginner'], type: 'lesson' },
    { title: 'Modifiers', path: 'Modeling', difficulty: 'Intermediate', link: '/modifierlesson', color: '#3b82c4', tags: ['modifiers', 'array', 'mirror', 'subdivision', 'intermediate'], type: 'lesson' },
    { title: 'Sculpting', path: 'Modeling', difficulty: 'Intermediate', link: '/SculptingLesson', color: '#3b82c4', tags: ['sculpt', 'brush', 'organic', 'intermediate'], type: 'lesson' },
    { title: 'Character', path: 'Modeling', difficulty: 'Advanced', link: '/CharacterModelingLesson', color: '#3b82c4', tags: ['character', 'anatomy', 'modeling', 'advanced'], type: 'lesson' },
    { title: 'Hard Surface', path: 'Modeling', difficulty: 'Advanced', link: '/HardSurfaceLesson', color: '#3b82c4', tags: ['hard surface', 'mechanical', 'precision', 'advanced'], type: 'lesson' },
    { title: 'Product Design in Blender', path: 'Modeling', difficulty: 'Advanced', link: '/ProductDesignLesson', color: '#3b82c4', tags: ['product', 'design', 'commercial', 'advanced'], type: 'lesson' },
    
    // Rendering Path Lessons
    { title: 'Introduction to Rendering', path: 'Rendering', difficulty: 'Beginner', link: null, color: '#f59e0b', tags: ['render', 'cycles', 'eevee', 'beginner'], type: 'lesson' },
    { title: 'Lighting Fundamentals', path: 'Rendering', difficulty: 'Beginner', link: null, color: '#f59e0b', tags: ['lighting', 'lights', 'hdri', 'beginner'], type: 'lesson' },
    { title: 'Camera Setup & Composition', path: 'Rendering', difficulty: 'Beginner', link: null, color: '#f59e0b', tags: ['camera', 'composition', 'framing', 'beginner'], type: 'lesson' },
    { title: 'Materials & Shaders', path: 'Rendering', difficulty: 'Intermediate', link: null, color: '#f59e0b', tags: ['materials', 'shaders', 'nodes', 'intermediate'], type: 'lesson' },
    { title: 'PBR Texturing', path: 'Rendering', difficulty: 'Intermediate', link: null, color: '#f59e0b', tags: ['pbr', 'textures', 'realistic', 'intermediate'], type: 'lesson' },
    { title: 'Advanced Lighting Techniques', path: 'Rendering', difficulty: 'Advanced', link: null, color: '#f59e0b', tags: ['lighting', 'volumetrics', 'advanced'], type: 'lesson' },
    { title: 'Compositing & Post-Processing', path: 'Rendering', difficulty: 'Advanced', link: null, color: '#f59e0b', tags: ['compositing', 'post', 'effects', 'advanced'], type: 'lesson' },
    { title: 'Portfolio Render Projects', path: 'Rendering', difficulty: 'Advanced', link: null, color: '#f59e0b', tags: ['portfolio', 'project', 'professional', 'advanced'], type: 'lesson' },
    
    // Animation Path Lessons
    { title: 'Animation Principles', path: 'Animation', difficulty: 'Beginner', link: null, color: '#8b5cf6', tags: ['animation', 'principles', 'timing', 'beginner'], type: 'lesson' },
    { title: 'Keyframe Basics', path: 'Animation', difficulty: 'Beginner', link: null, color: '#8b5cf6', tags: ['keyframe', 'animation', 'timeline', 'beginner'], type: 'lesson' },
    { title: 'Timeline & Graph Editor', path: 'Animation', difficulty: 'Beginner', link: null, color: '#8b5cf6', tags: ['timeline', 'graph', 'curves', 'beginner'], type: 'lesson' },
    { title: 'Rigging for Animation', path: 'Animation', difficulty: 'Intermediate', link: null, color: '#8b5cf6', tags: ['rigging', 'bones', 'armature', 'intermediate'], type: 'lesson' },
    { title: 'Creating Walk Cycles', path: 'Animation', difficulty: 'Intermediate', link: null, color: '#8b5cf6', tags: ['walk', 'cycle', 'loop', 'intermediate'], type: 'lesson' },
    { title: 'Facial Animation', path: 'Animation', difficulty: 'Advanced', link: null, color: '#8b5cf6', tags: ['face', 'expressions', 'shape keys', 'advanced'], type: 'lesson' },
    { title: 'Physics & Simulations', path: 'Animation', difficulty: 'Advanced', link: null, color: '#8b5cf6', tags: ['physics', 'simulation', 'dynamics', 'advanced'], type: 'lesson' },
    { title: 'Full Character Animation', path: 'Animation', difficulty: 'Advanced', link: null, color: '#8b5cf6', tags: ['character', 'animation', 'performance', 'advanced'], type: 'lesson' },

    // ===== MODIFIERS (from Modifier Lesson) =====
    // Generate Modifiers
    { title: 'Array Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=array', color: '#3b82c4', tags: ['array', 'duplicate', 'pattern', 'repeat', 'modifier'], type: 'tool', description: 'Duplicate objects in a pattern' },
    { title: 'Bevel Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=bevel', color: '#3b82c4', tags: ['bevel', 'round', 'edges', 'smooth', 'modifier'], type: 'tool', description: 'Round off sharp edges' },
    { title: 'Boolean Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=boolean', color: '#3b82c4', tags: ['boolean', 'combine', 'subtract', 'union', 'difference', 'modifier'], type: 'tool', description: 'Combine or subtract meshes' },
    { title: 'Mirror Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=mirror', color: '#3b82c4', tags: ['mirror', 'symmetry', 'symmetrical', 'reflection', 'modifier'], type: 'tool', description: 'Create symmetrical objects' },
    { title: 'Subdivision Surface', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=subdivision', color: '#3b82c4', tags: ['subdivision', 'smooth', 'subsurf', 'detail', 'modifier'], type: 'tool', description: 'Smooth and add detail to meshes' },
    { title: 'Solidify Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=solidify', color: '#3b82c4', tags: ['solidify', 'thickness', 'shell', 'walls', 'modifier'], type: 'tool', description: 'Add thickness to surfaces' },
    { title: 'Wireframe Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=wireframe', color: '#3b82c4', tags: ['wireframe', 'edges', 'lattice', 'structure', 'modifier'], type: 'tool', description: 'Convert edges to geometry' },
    { title: 'Decimate Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=decimate', color: '#3b82c4', tags: ['decimate', 'reduce', 'optimize', 'polygons', 'modifier'], type: 'tool', description: 'Reduce polygon count' },
    { title: 'Build Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=build', color: '#3b82c4', tags: ['build', 'animate', 'progressive', 'appear', 'modifier'], type: 'tool', description: 'Animate mesh appearing progressively' },
    { title: 'Remesh Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=remesh', color: '#3b82c4', tags: ['remesh', 'topology', 'voxel', 'retopo', 'modifier'], type: 'tool', description: 'Rebuild mesh topology' },
    { title: 'Skin Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=skin', color: '#3b82c4', tags: ['skin', 'surface', 'edges', 'branch', 'modifier'], type: 'tool', description: 'Create surfaces from edges' },
    { title: 'Triangulate Modifier', path: 'Modeling → Modifiers', difficulty: 'Beginner', link: '/modifierlesson?modifier=triangulate', color: '#3b82c4', tags: ['triangulate', 'triangles', 'export', 'game', 'modifier'], type: 'tool', description: 'Convert faces to triangles' },
    { title: 'Weld Modifier', path: 'Modeling → Modifiers', difficulty: 'Beginner', link: '/modifierlesson?modifier=weld', color: '#3b82c4', tags: ['weld', 'merge', 'vertices', 'cleanup', 'modifier'], type: 'tool', description: 'Merge nearby vertices' },
    { title: 'Screw Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=screw', color: '#3b82c4', tags: ['screw', 'spiral', 'lathe', 'revolve', 'modifier'], type: 'tool', description: 'Create spiral or revolved shapes' },
    { title: 'Multiresolution Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=multiresolution', color: '#3b82c4', tags: ['multires', 'sculpt', 'detail', 'levels', 'modifier'], type: 'tool', description: 'Add sculpting detail levels' },
    { title: 'Edge Split Modifier', path: 'Modeling → Modifiers', difficulty: 'Beginner', link: '/modifierlesson?modifier=edgesplit', color: '#3b82c4', tags: ['edge split', 'sharp', 'shading', 'hard edges', 'modifier'], type: 'tool', description: 'Split edges for hard shading' },
    { title: 'Mask Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=mask', color: '#3b82c4', tags: ['mask', 'hide', 'vertex group', 'visibility', 'modifier'], type: 'tool', description: 'Hide vertices dynamically' },

    // Deform Modifiers
    { title: 'Armature Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=armature', color: '#8b5cf6', tags: ['armature', 'bones', 'rig', 'skeleton', 'deform', 'modifier'], type: 'tool', description: 'Deform using bone skeleton' },
    { title: 'Lattice Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=lattice', color: '#3b82c4', tags: ['lattice', 'deform', 'cage', 'control', 'modifier'], type: 'tool', description: 'Deform using control cage' },
    { title: 'Curve Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=curve', color: '#3b82c4', tags: ['curve', 'deform', 'path', 'bend', 'modifier'], type: 'tool', description: 'Deform along curve path' },
    { title: 'Displace Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=displace', color: '#3b82c4', tags: ['displace', 'texture', 'terrain', 'detail', 'modifier'], type: 'tool', description: 'Offset vertices by texture' },
    { title: 'Shrinkwrap Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=shrinkwrap', color: '#3b82c4', tags: ['shrinkwrap', 'project', 'surface', 'conform', 'modifier'], type: 'tool', description: 'Project mesh onto surface' },
    { title: 'Simple Deform Modifier', path: 'Modeling → Modifiers', difficulty: 'Beginner', link: '/modifierlesson?modifier=simpledeform', color: '#3b82c4', tags: ['simple deform', 'twist', 'bend', 'taper', 'stretch', 'modifier'], type: 'tool', description: 'Basic twist, bend, taper effects' },
    { title: 'Smooth Modifier', path: 'Modeling → Modifiers', difficulty: 'Beginner', link: '/modifierlesson?modifier=smooth', color: '#3b82c4', tags: ['smooth', 'average', 'soften', 'modifier'], type: 'tool', description: 'Average vertex positions' },
    { title: 'Wave Modifier', path: 'Animation → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=wave', color: '#8b5cf6', tags: ['wave', 'ripple', 'animation', 'water', 'modifier'], type: 'tool', description: 'Create wave deformations' },
    { title: 'Cast Modifier', path: 'Modeling → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=cast', color: '#3b82c4', tags: ['cast', 'sphere', 'cylinder', 'shape', 'modifier'], type: 'tool', description: 'Project mesh onto shape' },
    { title: 'Hook Modifier', path: 'Animation → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=hook', color: '#8b5cf6', tags: ['hook', 'control', 'empty', 'animate', 'modifier'], type: 'tool', description: 'Control vertices with empty' },
    { title: 'Mesh Deform Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=meshdeform', color: '#3b82c4', tags: ['mesh deform', 'cage', 'bind', 'deform', 'modifier'], type: 'tool', description: 'Deform with cage mesh' },
    { title: 'Surface Deform Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=surfacedeform', color: '#3b82c4', tags: ['surface deform', 'bind', 'follow', 'cloth', 'modifier'], type: 'tool', description: 'Bind to animated surface' },
    { title: 'Warp Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=warp', color: '#3b82c4', tags: ['warp', 'space', 'deform', 'transform', 'modifier'], type: 'tool', description: 'Deform between two objects' },
    { title: 'Laplacian Deform Modifier', path: 'Modeling → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=laplacian', color: '#3b82c4', tags: ['laplacian', 'smooth', 'anchor', 'deform', 'modifier'], type: 'tool', description: 'Advanced mesh deformation' },

    // Physics Modifiers
    { title: 'Cloth Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=cloth', color: '#8b5cf6', tags: ['cloth', 'fabric', 'simulation', 'physics', 'modifier'], type: 'tool', description: 'Simulate fabric behavior' },
    { title: 'Collision Modifier', path: 'Animation → Modifiers', difficulty: 'Intermediate', link: '/modifierlesson?modifier=collision', color: '#8b5cf6', tags: ['collision', 'physics', 'solid', 'interact', 'modifier'], type: 'tool', description: 'Make objects solid for physics' },
    { title: 'Fluid Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=fluid', color: '#8b5cf6', tags: ['fluid', 'liquid', 'water', 'simulation', 'modifier'], type: 'tool', description: 'Simulate liquid physics' },
    { title: 'Ocean Modifier', path: 'Rendering → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=ocean', color: '#f59e0b', tags: ['ocean', 'water', 'waves', 'sea', 'modifier'], type: 'tool', description: 'Generate ocean surface' },
    { title: 'Particle System', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=particles', color: '#8b5cf6', tags: ['particles', 'fire', 'smoke', 'rain', 'effects', 'modifier'], type: 'tool', description: 'Generate particle effects' },
    { title: 'Soft Body Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=softbody', color: '#8b5cf6', tags: ['soft body', 'jiggle', 'physics', 'flexible', 'modifier'], type: 'tool', description: 'Simulate soft, jiggly objects' },
    { title: 'Dynamic Paint Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=dynamicpaint', color: '#8b5cf6', tags: ['dynamic paint', 'paint', 'interaction', 'effects', 'modifier'], type: 'tool', description: 'Paint effects from interaction' },
    { title: 'Explode Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=explode', color: '#8b5cf6', tags: ['explode', 'shatter', 'particles', 'break', 'modifier'], type: 'tool', description: 'Explode mesh with particles' },
    { title: 'Particle Instance Modifier', path: 'Animation → Modifiers', difficulty: 'Advanced', link: '/modifierlesson?modifier=particleinstance', color: '#8b5cf6', tags: ['particle instance', 'duplicate', 'instancing', 'crowds', 'modifier'], type: 'tool', description: 'Instance objects on particles' }
  ]

  const filteredLessons = searchQuery.trim() === '' ? [] : allLessons.filter(lesson => {
    const query = searchQuery.toLowerCase()
    return (
      lesson.title.toLowerCase().includes(query) ||
      lesson.path.toLowerCase().includes(query) ||
      lesson.difficulty.toLowerCase().includes(query) ||
      (lesson.description && lesson.description.toLowerCase().includes(query)) ||
      lesson.tags.some(tag => tag.includes(query))
    )
  })

  // Keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="search-button"
        style={{
          padding: '0.6rem 1.2rem',
          background: 'rgba(21, 35, 47, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          color: '#b0c4d4',
          fontSize: '0.95rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          transition: 'all 0.3s ease',
          marginLeft: '1rem',
          marginRight: '1rem'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#3b82f6'
          e.currentTarget.style.background = 'rgba(21, 35, 47, 0.9)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
        }}
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="search-text">Search</span>
        <kbd className="search-kbd" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.15rem 0.4rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontFamily: 'monospace'
        }}>⌘K</kbd>
      </button>
      
      <style jsx>{`
        @media (max-width: 1024px) {
          .search-text,
          .search-kbd {
            display: none;
          }
          .search-button {
            padding: 0.6rem !important;
          }
        }
      `}</style>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <div 
            onClick={() => setIsSearchOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998
            }}
          />

          {/* Search Box */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '700px',
            background: 'rgba(13, 27, 42, 0.98)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(20px)',
            overflow: 'hidden',
            zIndex: 9999
          }}>
            {/* Search Input */}
            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ position: 'relative' }}>
                <svg 
                  style={{ 
                    position: 'absolute', 
                    left: '1rem', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    width: '24px', 
                    height: '24px', 
                    opacity: 0.5 
                  }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for lessons, modifiers, tools, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3.5rem',
                    fontSize: '1.1rem',
                    background: 'rgba(21, 35, 47, 0.5)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Results */}
            <div style={{ 
              maxHeight: '400px', 
              overflowY: 'auto',
              padding: '1rem'
            }}>
              {searchQuery.trim() === '' ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#8fa9bd' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Try searching for:</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {['modeling', 'array', 'mirror', 'cloth', 'animation', 'sculpting', 'interface', 'beginner'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(59, 130, 246, 0.1)',
                          border: '1px solid rgba(59, 130, 246, 0.3)',
                          borderRadius: '8px',
                          color: '#3b82f6',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredLessons.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#8fa9bd' }}>
                  <p style={{ fontSize: '1.1rem' }}>No results found for "{searchQuery}"</p>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try different keywords or check out our learning paths</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {filteredLessons.map((lesson, index) => (
                    <a
                      key={index}
                      href={lesson.link || '#'}
                      onClick={(e) => {
                        if (!lesson.link) {
                          e.preventDefault()
                          alert('Coming soon!')
                        } else {
                          setIsSearchOpen(false)
                        }
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(21, 35, 47, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                        cursor: lesson.link ? 'pointer' : 'not-allowed',
                        opacity: lesson.link ? 1 : 0.6
                      }}
                      onMouseEnter={(e) => {
                        if (lesson.link) {
                          e.currentTarget.style.background = 'rgba(21, 35, 47, 0.9)'
                          e.currentTarget.style.borderColor = lesson.color
                          e.currentTarget.style.transform = 'translateX(5px)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                        e.currentTarget.style.transform = 'translateX(0)'
                      }}
                    >
                      <div style={{
                        width: '4px',
                        height: '40px',
                        background: lesson.color,
                        borderRadius: '2px'
                      }} />
                      <div style={{ flex: 1 }}>
                        <h4 style={{ 
                          fontSize: '1.1rem', 
                          fontWeight: '600', 
                          marginBottom: '0.25rem',
                          color: '#fff'
                        }}>
                          {lesson.title}
                        </h4>
                        {lesson.description && (
                          <p style={{ fontSize: '0.85rem', color: '#8fa9bd', marginBottom: '0.5rem' }}>
                            {lesson.description}
                          </p>
                        )}
                        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.85rem' }}>
                          <span style={{ color: lesson.color }}>{lesson.path}</span>
                          {lesson.type === 'tool' && (
                            <span style={{
                              padding: '0.2rem 0.5rem',
                              background: 'rgba(139, 92, 246, 0.2)',
                              color: '#8b5cf6',
                              borderRadius: '6px',
                              fontSize: '0.7rem',
                              textTransform: 'uppercase',
                              fontWeight: '600'
                            }}>
                              Tool
                            </span>
                          )}
                          <span style={{
                            padding: '0.2rem 0.5rem',
                            background: lesson.difficulty === 'Beginner' ? 'rgba(16, 185, 129, 0.2)' :
                                       lesson.difficulty === 'Intermediate' ? 'rgba(245, 158, 11, 0.2)' :
                                       'rgba(239, 68, 68, 0.2)',
                            color: lesson.difficulty === 'Beginner' ? '#10b981' :
                                   lesson.difficulty === 'Intermediate' ? '#f59e0b' :
                                   '#ef4444',
                            borderRadius: '6px',
                            fontSize: '0.75rem'
                          }}>
                            {lesson.difficulty}
                          </span>
                          {!lesson.link && (
                            <span style={{ color: '#8fa9bd', fontSize: '0.75rem' }}>Coming soon</span>
                          )}
                        </div>
                      </div>
                      {lesson.link && (
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}