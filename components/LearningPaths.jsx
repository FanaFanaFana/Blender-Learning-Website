'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PathsScene from './PathsScene'

export default function BlenderCompendium() {
  const [selectedCategory, setSelectedCategory] = useState('modeling')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && categories[hash]) {
      setSelectedCategory(hash)
    }
  }, [])

  const mainCategories = ['modeling', 'rendering', 'animation']

  const categories = {
    modeling: {
      title: '3D Modeling',
      icon: '/modeling.svg',
      color: '#3b82c4',
      description: 'Categories and lessons focused on creating and manipulating 3D models in Blender',
      topics: [
        { title: 'Interface Areas', description: 'Understanding Blender\'s workspace layout', icon: '/Icons/outliner.svg', link: '/InterfaceLesson' },
        { title: 'Edit Mode', description: 'Tools and techniques for mesh editing', icon: '/Icons/editmode_hlt.svg', link: '/EditModeLesson' },
        { title: 'Modifiers', description: 'Non-destructive modeling techniques', icon: '/Icons/modifier.svg', link: '/modifierlesson' },
        { title: 'Sculpting', description: 'Digital sculpting tools and workflows', icon: '/Icons/sculptmode_hlt.svg', link: '/SculptingLesson' },
        
      ]
    },
    rendering: {
      title: 'Rendering',
      icon: '/rendered.svg',
      color: '#f59e0b',
      description: 'Complete reference for render engines, lighting, and image output',
      topics: [
        { title: 'Render Engines', description: 'Eevee vs Cycles comparison', icon: '/Icons/render_still.svg', link: null },
        { title: 'Lighting', description: 'Light types, HDRI, world settings', icon: '/Icons/light.svg', link: null },
        { title: 'Camera', description: 'Camera settings, depth of field, composition', icon: '/Icons/camera_data.svg', link: null },
        { title: 'Materials', description: 'Shader nodes, PBR workflow', icon: '/Icons/material.svg', link: null },
        { title: 'Render Settings', description: 'Samples, resolution, output formats', icon: '/Icons/render_result.svg', link: null }
      ]
    },
    animation: {
      title: 'Animation',
      icon: '/animation.svg',
      color: '#8b5cf6',
      description: 'Reference for keyframes, rigging, and motion systems in Blender',
      topics: [
        { title: 'Keyframes', description: 'Setting and editing keyframes', icon: '/Icons/keyframe.svg', link: null },
        { title: 'Timeline', description: 'Playback controls and scrubbing', icon: '/Icons/anim.svg', link: null },
        { title: 'Graph Editor', description: 'Animation curves and interpolation', icon: '/Icons/graph.svg', link: null },
        { title: 'Rigging', description: 'Armatures, bones, constraints', icon: '/Icons/armature_data.svg', link: null },
        { title: 'Physics', description: 'Rigid body, soft body, cloth, fluid', icon: '/Icons/physics.svg', link: null }
      ]
    },
    Texturing: {
      title: 'Texturing',
      icon: 'icons/material_data.svg',
      color: '#a2d677ff',
      description: 'UV mapping, texture painting, and material workflows',
      topics: [
        { title: 'UV Mapping', description: 'Unwrapping and UV layout techniques', icon: '/Icons/uv.svg', link: null },
        { title: 'Texture Painting', description: 'Painting directly on 3D models', icon: '/Icons/keyframe.svg', link: null },
        { title: 'Image Textures', description: 'Using images in materials', icon: '/Icons/anim.svg', link: null },
        { title: 'Procedural Textures', description: 'Node-based texture generation', icon: '/Icons/graph.svg', link: null },
        { title: 'Baking', description: 'Baking textures and lighting information', icon: '/Icons/armature_data.svg', link: null }
      ]
    },
    Lesson: {
      title: 'Lesson Content',
      icon: 'Icons/blender_icon_current_file.svg',
      color: '#0bf5e2ff',
      description: 'Step-by-step tutorials and guided learning paths',
      topics: [
        { title: 'First 3D Model', description: 'Creating your first object in Blender', icon: '/Icons/mesh_cube.svg', link: '/FirstModelLesson' },
        { title: 'Character Modeling', description: 'Creating character meshes and topology', icon: '/Icons/mesh_monkey.svg', link: '/CharacterModelingLesson' },
        { title: 'Hard Surface Modeling', description: 'Mechanical and architectural modeling', icon: '/Icons/mod_bevel.svg', link: '/HardSurfaceLesson' },
        { title: 'Product Design', description: 'Design workflows for product visualization', icon: '/Icons/mesh_torus.svg', link: '/ProductDesignLesson' },
        { title: 'Topology', description: 'Digital sculpting tools and workflows', icon: '/Icons/mod_remesh.svg', link: '/TopologyLesson' },
        { title: 'Materials & Shading', description: 'Creating realistic materials with the Shader Editor', icon: '/Icons/material.svg',  link: '/MaterialLesson' }
      ]
    },
    printing: {
      title: '3D Printing',
      icon: '/Icons/mesh_cube.svg',
      color: '#ec4899',
      description: 'Preparing models for 3D printing and manufacturing',
      topics: [
        { title: 'Manifold Geometry', description: 'Creating watertight, printable meshes', icon: '/Icons/mesh_cube.svg', link: null },
        { title: 'Scale & Units', description: 'Setting correct dimensions for printing', icon: '/Icons/tool.svg', link: null },
        { title: 'Support Structures', description: 'Planning for print supports', icon: '/Icons/modifier.svg', link: null },
        { title: 'File Export', description: 'Exporting STL and other formats', icon: '/Icons/render_still.svg', link: null }
      ]
    },
    vfx: {
      title: 'VFX Integration',
      icon: '/Icons/render_result.svg',
      color: '#f97316',
      description: 'Integrating 3D elements with live-action footage',
      topics: [
        { title: 'Camera Tracking', description: 'Match-moving and camera solve', icon: '/Icons/camera_data.svg', link: null },
        { title: 'Keying & Masking', description: 'Green screen and compositing', icon: '/Icons/render_result.svg', link: null },
        { title: 'Shadow Catcher', description: 'Realistic shadow integration', icon: '/Icons/light.svg', link: null },
        { title: 'Color Matching', description: 'Matching CG to footage', icon: '/Icons/material.svg', link: null }
      ]
    },
    gameAssets: {
      title: 'Game Asset Creation',
      icon: '/Icons/mesh_torus.svg',
      color: '#06b6d4',
      description: 'Optimized modeling for game engines',
      topics: [
        { title: 'Low-Poly Modeling', description: 'Efficient geometry for real-time', icon: '/Icons/mesh_cube.svg', link: null },
        { title: 'Texture Baking', description: 'Baking high-res details to textures', icon: '/Icons/material.svg', link: null },
        { title: 'LOD Creation', description: 'Level of detail optimization', icon: '/Icons/modifier.svg', link: null },
        { title: 'Engine Export', description: 'FBX, glTF export workflows', icon: '/Icons/render_still.svg', link: null }
      ]
    },
    hairFur: {
      title: 'Hair & Fur',
      icon: '/Icons/armature_data.svg',
      color: '#a855f7',
      description: 'Particle systems and grooming workflows',
      topics: [
        { title: 'Particle Hair', description: 'Hair particle system basics', icon: '/Icons/physics.svg', link: null },
        { title: 'Grooming', description: 'Styling and combing techniques', icon: '/Icons/tool.svg', link: null },
        { title: 'Hair Shading', description: 'Realistic hair materials', icon: '/Icons/material.svg', link: null },
        { title: 'Dynamics', description: 'Hair physics and simulation', icon: '/Icons/anim.svg', link: null }
      ]
    },
    greaseGencil: {
      title: 'Grease Pencil',
      icon: '/Icons/editmode_hlt.svg',
      color: '#14b8a6',
      description: '2D animation in 3D space',
      topics: [
        { title: 'Drawing Basics', description: 'Strokes, fills, and layers', icon: '/Icons/editmode_hlt.svg', link: null },
        { title: 'Animation', description: 'Frame-by-frame animation', icon: '/Icons/anim.svg', link: null },
        { title: 'Modifiers', description: 'Grease Pencil modifiers', icon: '/Icons/modifier.svg', link: null },
        { title: 'Mixed Media', description: 'Combining 2D and 3D', icon: '/Icons/mesh_cube.svg', link: null }
      ]
    },
    geometryNodes: {
      title: 'Geometry Nodes',
      icon: '/Icons/graph.svg',
      color: '#eab308',
      description: 'Procedural modeling with node systems',
      topics: [
        { title: 'Node Basics', description: 'Understanding geometry nodes', icon: '/Icons/graph.svg', link: null },
        { title: 'Procedural Modeling', description: 'Non-destructive workflows', icon: '/Icons/mesh_cube.svg', link: null },
        { title: 'Instances', description: 'Scattering and instancing', icon: '/Icons/modifier.svg', link: null },
        { title: 'Fields & Attributes', description: 'Data-driven geometry', icon: '/Icons/tool.svg', link: null }
      ]
    },
    projectManagement: {
      title: 'Project Management',
      icon: '/Icons/outliner.svg',
      color: '#64748b',
      description: 'Organization and workflow optimization',
      topics: [
        { title: 'File Organization', description: 'Naming conventions and structure', icon: '/Icons/outliner.svg', link: null },
        { title: 'Collections', description: 'Scene organization', icon: '/Icons/mesh_cube.svg', link: null },
        { title: 'Version Control', description: 'Managing file versions', icon: '/Icons/render_still.svg', link: null },
        { title: 'Asset Libraries', description: 'Reusable asset management', icon: '/Icons/material.svg', link: null }
      ]
    },
    simulation: {
      title: 'Simulation',
      icon: '/Icons/physics.svg',
      color: '#3b82f6',
      description: 'Physics simulations and dynamics',
      topics: [
        { title: 'Rigid Body', description: 'Collision and dynamics', icon: '/Icons/physics.svg', link: null },
        { title: 'Cloth Simulation', description: 'Fabric and soft bodies', icon: '/Icons/modifier.svg', link: null },
        { title: 'Fluid Simulation', description: 'Liquids and gases', icon: '/Icons/render_result.svg', link: null },
        { title: 'Particle Systems', description: 'Fire, smoke, and effects', icon: '/Icons/anim.svg', link: null }
      ]
    }
  }

  const currentCategory = categories[selectedCategory]

  return (
    <>
      {/* Hero section with 3D scene background */}
      <section className="paths-hero-section">
        {/* 3D Scene as full-width background */}
        <div className="paths-scene-background">
          <PathsScene />
        </div>

        {/* Text overlay */}
        <div className="container">
          <div className="paths-text-overlay">
            <h2>Documentation</h2>
            <p>Explore comprehensive guides and references</p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="learning-paths">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            
          </div>
          <div className="path-selector">
            {mainCategories.map((key) => (
              <button
                key={key}
                className={`path-button ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
                style={selectedCategory === key ? { borderColor: categories[key].color, backgroundColor: `${categories[key].color}15` } : {}}
              >
                <Image src={categories[key].icon} alt={categories[key].title} width={50} height={50} />
                <span>{categories[key].title}</span>
              </button>
            ))}

            {/* Dropdown Button */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="path-button"
                style={{
                  minWidth: 'auto',
                  padding: '1rem 1.5rem'
                }}
              >
                <span style={{ 
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  display: 'inline-block',
                  fontSize: '1.2rem'
                }}>
                  ▼
                </span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: 'calc(100% + 0.5rem)',
                  right: 0,
                  background: 'rgba(21, 35, 47, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  minWidth: '250px',
                  maxHeight: '70vh',
                  overflowY: 'auto',
                  zIndex: 1000,
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}>
                  {['Texturing', 'Lesson', 'printing', 'vfx', 'gameAssets', 'hairFur', 'greaseGencil', 'geometryNodes', 'projectManagement', 'simulation'].map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCategory(key)
                        setIsDropdownOpen(false)
                      }}
                      style={{
                        width: '100%',
                        background: selectedCategory === key ? `${categories[key].color}30` : 'transparent',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        color: selectedCategory === key ? '#0a0f14' : '#fff',
                        fontSize: '1rem',
                        fontWeight: selectedCategory === key ? '600' : '400',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.25rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${categories[key].color}15`
                        if (selectedCategory !== key) e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = selectedCategory === key ? `${categories[key].color}30` : 'transparent'
                        e.currentTarget.style.color = selectedCategory === key ? '#0a0f14' : '#fff'
                      }}
                    >
                      <Image src={categories[key].icon} alt={categories[key].title} width={24} height={24} style={{ filter: selectedCategory === key ? 'none' : 'brightness(0) invert(1)' }} />
                      <span>{categories[key].title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="path-content">
            <div className="path-header" style={{ borderLeftColor: currentCategory.color }}>
              <h3>{currentCategory.title}</h3>
              <p>{currentCategory.description}</p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {currentCategory.topics.map((topic, index) => {
                const TopicWrapper = topic.link ? Link : 'div'
                const wrapperProps = topic.link ? { href: topic.link } : {}
                
                return (
                  <TopicWrapper key={index} {...wrapperProps} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{
                      background: 'rgba(21, 35, 47, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(28, 45, 60, 0.8)'
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    >
                      <div style={{ 
                        width: '60px', 
                        height: '60px',
                        background: `${currentCategory.color}15`,
                        borderRadius: '12px',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                      }}>
                        <Image 
                          src={topic.icon} 
                          alt={topic.title}
                          width={36}
                          height={36}
                          style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                        />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 600 }}>{topic.title}</h4>
                        <p style={{ color: '#8fa9bd', margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>{topic.description}</p>
                      </div>
                    </div>
                  </TopicWrapper>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .paths-hero-section {
          position: relative;
          padding: 0;
          margin: 0 -2rem;
          width: calc(100% + 4rem);
          background: transparent;
          min-height: 50vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin-bottom: 3rem;
        }

        .paths-scene-background {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .paths-scene-background :global(#paths-canvas) {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          opacity: 0.5;
          display: block !important;
          object-fit: cover;
        }

        .paths-text-overlay {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .paths-text-overlay h2 {
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
        }

        .paths-text-overlay p {
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          color: rgb(176, 196, 212);
          line-height: 1.5;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 768px) {
          .paths-hero-section {
            min-height: 40vh;
            margin: 0 -1.5rem;
            width: calc(100% + 3rem);
          }

          .paths-scene-background :global(#paths-canvas) {
            opacity: 0.4;
          }

          .paths-text-overlay {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .paths-hero-section {
            margin: 0 -1rem;
            width: calc(100% + 2rem);
          }
        }
      `}</style>
    </>
  )
}