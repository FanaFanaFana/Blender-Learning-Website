"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { playHover } from '@/app/utils/sounds'

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const allTopics = [
    // 3D Modeling
    { title: 'Interface Areas', category: '3D Modeling', icon: '/Icons/outliner.svg', link: '/lessons/interface', color: '#3b82c4' },
    { title: 'Edit Mode', category: '3D Modeling', icon: '/Icons/editmode_hlt.svg', link: '/lessons/edit-mode', color: '#3b82c4' },
    { title: 'Modifiers', category: '3D Modeling', icon: '/Icons/modifier.svg', link: '/lessons/modifier', color: '#3b82c4' },
    { title: 'Sculpting', category: '3D Modeling', icon: '/Icons/sculptmode_hlt.svg', link: '/lessons/sculpting', color: '#3b82c4' },
    
    
    // Rendering
    { title: 'Render Engines', category: 'Rendering', icon: '/Icons/render_still.svg', link: '/lessons/render-engines', color: '#f59e0b' },
    { title: 'Lighting', category: 'Rendering', icon: '/Icons/light.svg', link: '/lessons/lighting', color: '#f59e0b' },
    { title: 'Camera', category: 'Rendering', icon: '/Icons/camera_data.svg', link: '/lessons/camera', color: '#f59e0b' },
    { title: 'Materials', category: 'Rendering', icon: '/Icons/material.svg', link: '/lessons/material', color: '#f59e0b' },
    { title: 'Render Settings', category: 'Rendering', icon: '/Icons/render_result.svg', link: '/lessons/render-settings', color: '#f59e0b' },
    
    // Animation
    { title: 'Keyframes', category: 'Animation', icon: '/Icons/keyframe.svg', link: 'lessons/keyframe', color: '#8b5cf6' },
    { title: 'Timeline', category: 'Animation', icon: '/Icons/anim.svg', link: '/lessons/timeline', color: '#8b5cf6' },
    { title: 'Graph Editor', category: 'Animation', icon: '/Icons/graph.svg', link: '/lessons/graph-editor', color: '#8b5cf6' },
    { title: 'Rigging', category: 'Animation', icon: '/Icons/armature_data.svg', link: '/lessons/rigging', color: '#8b5cf6' },
    { title: 'Physics', category: 'Animation', icon: '/Icons/physics.svg', link: '/lessons/physics', color: '#8b5cf6' },
    
    // Texturing
    { title: 'UV Mapping', category: 'Texturing', icon: '/Icons/uv.svg', link: null, color: '#a2d677' },
    { title: 'Texture Painting', category: 'Texturing', icon: '/Icons/keyframe.svg', link: null, color: '#a2d677' },
    { title: 'Image Textures', category: 'Texturing', icon: '/Icons/anim.svg', link: null, color: '#a2d677' },
    { title: 'Procedural Textures', category: 'Texturing', icon: '/Icons/graph.svg', link: null, color: '#a2d677' },
    { title: 'Baking', category: 'Texturing', icon: '/Icons/armature_data.svg', link: null, color: '#a2d677' },
    
    // Lesson Content
    { title: 'First 3D Model', category: 'Lessons', icon: '/Icons/mesh_cube.svg', link: '/lessons/first-model', color: '#0bf5e2' },
    { title: 'Character Modeling', category: 'Lessons', icon: '/Icons/mesh_monkey.svg', link: '/lessons/character-modelling', color: '#0bf5e2' },
    { title: 'Hard Surface Modeling', category: 'Lessons', icon: '/Icons/mod_bevel.svg', link: '/lessons/hard-surface', color: '#0bf5e2' },
    { title: 'Product Design', category: 'Lessons', icon: '/Icons/mesh_torus.svg', link: '/lessons/product-design', color: '#0bf5e2' },
    { title: 'Materials & Shading', category: 'Lessons', icon: '/Icons/material.svg', link: '/lessons/material', color: '#0bf5e2' },
    { title: 'Topology', category: 'Lessons', icon: '/Icons/mod_remesh.svg', link: '/lessons/topology', color: '#0bf5e2' },
    
    // 3D Printing
    { title: 'Manifold Geometry', category: '3D Printing', icon: '/Icons/mesh_cube.svg', link: null, color: '#ec4899' },
    { title: 'Scale & Units', category: '3D Printing', icon: '/Icons/tool.svg', link: null, color: '#ec4899' },
    { title: 'Support Structures', category: '3D Printing', icon: '/Icons/modifier.svg', link: null, color: '#ec4899' },
    { title: 'File Export', category: '3D Printing', icon: '/Icons/render_still.svg', link: null, color: '#ec4899' },
    
    // VFX Integration
    { title: 'Camera Tracking', category: 'VFX Integration', icon: '/Icons/camera_data.svg', link: null, color: '#f97316' },
    { title: 'Keying & Masking', category: 'VFX Integration', icon: '/Icons/render_result.svg', link: null, color: '#f97316' },
    { title: 'Shadow Catcher', category: 'VFX Integration', icon: '/Icons/light.svg', link: null, color: '#f97316' },
    { title: 'Color Matching', category: 'VFX Integration', icon: '/Icons/material.svg', link: null, color: '#f97316' },
    
    // Game Assets
    { title: 'Low-Poly Modeling', category: 'Game Assets', icon: '/Icons/mesh_cube.svg', link: null, color: '#06b6d4' },
    { title: 'Texture Baking', category: 'Game Assets', icon: '/Icons/material.svg', link: null, color: '#06b6d4' },
    { title: 'LOD Creation', category: 'Game Assets', icon: '/Icons/modifier.svg', link: null, color: '#06b6d4' },
    { title: 'Engine Export', category: 'Game Assets', icon: '/Icons/render_still.svg', link: null, color: '#06b6d4' },
    
    // Hair & Fur
    { title: 'Particle Hair', category: 'Hair & Fur', icon: '/Icons/physics.svg', link: null, color: '#a855f7' },
    { title: 'Grooming', category: 'Hair & Fur', icon: '/Icons/tool.svg', link: null, color: '#a855f7' },
    { title: 'Hair Shading', category: 'Hair & Fur', icon: '/Icons/material.svg', link: null, color: '#a855f7' },
    { title: 'Dynamics', category: 'Hair & Fur', icon: '/Icons/anim.svg', link: null, color: '#a855f7' },
    
    // Grease Pencil
    { title: 'Drawing Basics', category: 'Grease Pencil', icon: '/Icons/editmode_hlt.svg', link: null, color: '#14b8a6' },
    { title: 'GP Animation', category: 'Grease Pencil', icon: '/Icons/anim.svg', link: null, color: '#14b8a6' },
    { title: 'GP Modifiers', category: 'Grease Pencil', icon: '/Icons/modifier.svg', link: null, color: '#14b8a6' },
    { title: 'Mixed Media', category: 'Grease Pencil', icon: '/Icons/mesh_cube.svg', link: null, color: '#14b8a6' },
    
    // Geometry Nodes
    { title: 'Node Basics', category: 'Geometry Nodes', icon: '/Icons/graph.svg', link: null, color: '#eab308' },
    { title: 'Procedural Modeling', category: 'Geometry Nodes', icon: '/Icons/mesh_cube.svg', link: null, color: '#eab308' },
    { title: 'Instances', category: 'Geometry Nodes', icon: '/Icons/modifier.svg', link: null, color: '#eab308' },
    { title: 'Fields & Attributes', category: 'Geometry Nodes', icon: '/Icons/tool.svg', link: null, color: '#eab308' },
    
    // Project Management
    { title: 'File Organization', category: 'Project Management', icon: '/Icons/outliner.svg', link: null, color: '#64748b' },
    { title: 'Collections', category: 'Project Management', icon: '/Icons/mesh_cube.svg', link: null, color: '#64748b' },
    { title: 'Version Control', category: 'Project Management', icon: '/Icons/render_still.svg', link: null, color: '#64748b' },
    { title: 'Asset Libraries', category: 'Project Management', icon: '/Icons/material.svg', link: null, color: '#64748b' },
    
    // Simulation
    { title: 'Rigid Body', category: 'Simulation', icon: '/Icons/physics.svg', link: null, color: '#3b82f6' },
    { title: 'Cloth Simulation', category: 'Simulation', icon: '/Icons/modifier.svg', link: null, color: '#3b82f6' },
    { title: 'Fluid Simulation', category: 'Simulation', icon: '/Icons/render_result.svg', link: null, color: '#3b82f6' },
    { title: 'Particle Systems', category: 'Simulation', icon: '/Icons/anim.svg', link: null, color: '#3b82f6' }
  ]

  const filteredTopics = allTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Group by category
  const groupedTopics = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = []
    }
    acc[topic.category].push(topic)
    return acc
  }, {})

  // Handle mouse leave with a small delay
  const handleMouseLeave = (e) => {
    // Only close if mouse is leaving to the right side (not going up/down/left)
    const rect = e.currentTarget.getBoundingClientRect()
    if (e.clientX > rect.right) {
      setTimeout(() => {
        setIsSidebarOpen(false)
      }, 200)
    }
  }

  // Cancel delayed close when mouse re-enters
  const handleMouseEnter = () => {
    setIsSidebarOpen(true)
  }

  return (
    <>
      {/* Overlay for touch devices - closes sidebar when tapped */}
      {isSidebarOpen && (
        <div
        
          onClick={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
          onTouchEnd={(e) => {
            e.stopPropagation()
            setIsSidebarOpen(false)
          }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9998,
            background: 'rgba(0, 0, 0, 0.3)',
            pointerEvents: 'auto'
          }}
        />
      )}

      {/* Invisible buffer zone - helps prevent accidental closure on desktop */}
      {isSidebarOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '340px',
            height: '100vh',
            zIndex: 9999,
            pointerEvents: 'auto'
          }}
        />
      )}

      {/* Sidebar */}
      <div
      
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: isSidebarOpen ? '320px' : '0px',
          background: 'rgba(21, 35, 47, 0.95)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: isSidebarOpen ? '1.5rem' : '0',
          zIndex: 10000,
          transition: 'all 0.3s ease'
        }}
        className="documentation-sidebar"
      >
        {/* Search Bar */}
        <div style={{ marginBottom: '1.5rem', opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease' }}>
          <input
          onMouseEnter={playHover}
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              background: 'rgba(13, 27, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '0.95rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Topics List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: isSidebarOpen ? 1 : 0, transition: 'opacity 0.3s ease 0.1s'  }}>
          {Object.entries(groupedTopics).map(([category, topics]) => (
            <div key={category} >
              <h3 style={{
                
                fontSize: '0.85rem',
                fontWeight: '600',
                color: topics[0].color,
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em'
              }}>
                {category}
                
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {topics.map((topic, idx) => {
                  const TopicWrapper = topic.link ? Link : 'div'
                  const wrapperProps = topic.link ? { href: topic.link } : {}

                  return (
                    <TopicWrapper key={idx}  onMouseEnter={playHover} {...wrapperProps} style={{ textDecoration: 'none' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.625rem 0.875rem',
                          background: 'rgba(13, 27, 42, 0.4)',
                          borderRadius: '8px',
                          cursor: topic.link ? 'pointer' : 'default',
                          opacity: topic.link ? 1 : 0.5,
                          transition: 'all 0.2s ease',
                          border: '1px solid transparent'
                        }}
                        
                        onMouseEnter={(e) => {
                          if (topic.link) {
                            e.currentTarget.style.background = 'rgba(28, 45, 60, 0.6)'
                            e.currentTarget.style.borderColor = `${topic.color}40`
                            
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(13, 27, 42, 0.4)'
                          e.currentTarget.style.borderColor = 'transparent'
                        }}
                      >
                        <Image
                          src={topic.icon}
                          alt={topic.title}
                          width={20}
                          height={20}
                          style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
                        />
                        <span style={{
                          fontSize: '0.9rem',
                          color: '#fff',
                          fontWeight: '400'
                        }}>
                          {topic.title}
                        </span>
                        {!topic.link && (
                          <span style={{
                            marginLeft: 'auto',
                            fontSize: '0.75rem',
                            color: '#7a8c9e',
                            fontStyle: 'italic'
                          }}>
                            Soon
                          </span>
                        )}
                      </div>
                    </TopicWrapper>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invisible trigger zone - full left edge */}
      <div
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '10px',
          height: '100vh',
          zIndex: 9998,
          cursor: 'pointer'
        }}
      />

      {/* Hover Tab - Visual indicator */}
      <div
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsSidebarOpen(true)}
        onTouchEnd={() => setIsSidebarOpen(true)}
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '80px',
          background: 'rgba(21, 35, 47, 0.95)',
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        className="sidebar-tab"
      >
        <span style={{
          fontSize: '1.5rem',
          color: '#fff',
          transform: isSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ◀
        </span>
      </div>

      <style jsx>{`
        .documentation-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .documentation-sidebar::-webkit-scrollbar-track {
          background: rgba(13, 27, 42, 0.4);
        }

        .documentation-sidebar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .documentation-sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .sidebar-tab:hover {
          background: rgba(28, 45, 60, 0.95);
        }

        @media (max-width: 768px) {
          .sidebar-tab {
            display: none;
          }
        }
      `}</style>
    </>
  )
}