'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlenderCompendium() {
  const [selectedCategory, setSelectedCategory] = useState('modeling')

  const categories = {
    modeling: {
      title: '3D Modeling',
      icon: '/modeling.svg',
      color: '#3b82c4',
      description: 'Comprehensive guides on creating 3D objects and characters',
      topics: [
        { title: 'Interface Areas', description: 'Understanding Blender\'s workspace layout', icon: '/Icons/outliner.svg', link: '/InterfaceLesson' },
        { title: 'First 3D Model', description: 'Creating your first object in Blender', icon: '/Icons/mesh_cube.svg', link: '/FirstModelLesson' },
        { title: 'Edit Mode', description: 'Tools and techniques for mesh editing', icon: '/Icons/editmode_hlt.svg', link: '/EditModeLesson' },
        { title: 'Modifiers', description: 'Non-destructive modeling techniques', icon: '/Icons/modifier.svg', link: '/modifierlesson' },
        { title: 'Sculpting', description: 'Digital sculpting tools and workflows', icon: '/Icons/sculptmode_hlt.svg', link: '/SculptingLesson' },
        { title: 'Character Modeling', description: 'Creating character meshes and topology', icon: '/Icons/mesh_monkey.svg', link: '/CharacterModelingLesson' },
        { title: 'Hard Surface Modeling', description: 'Mechanical and architectural modeling', icon: '/Icons/mod_bevel.svg', link: '/HardSurfaceLesson' },
        { title: 'Product Design', description: 'Design workflows for product visualization', icon: '/Icons/mesh_torus.svg', link: '/ProductDesignLesson' }
      ]
    },
    rendering: {
      title: 'Rendering',
      icon: '/rendered.svg',
      color: '#f59e0b',
      description: 'Techniques and workflows for creating photorealistic images',
      topics: [
        { title: 'Introduction to Rendering', description: 'Understanding render engines and settings', icon: '/Icons/render_still.svg', link: null },
        { title: 'Lighting Fundamentals', description: 'Light types and lighting theory', icon: '/Icons/light.svg', link: null },
        { title: 'Camera Setup & Composition', description: 'Camera settings and framing techniques', icon: '/Icons/camera_data.svg', link: null },
        { title: 'Materials & Shaders', description: 'Creating realistic materials', icon: '/Icons/material.svg', link: null },
        { title: 'PBR Texturing', description: 'Physically-based rendering workflows', icon: '/Icons/texture.svg', link: null },
        { title: 'Advanced Lighting', description: 'Complex lighting setups and techniques', icon: '/Icons/light_sun.svg', link: null },
        { title: 'Compositing & Post-Processing', description: 'Final touches and color grading', icon: '/Icons/node_compositing.svg', link: null },
        { title: 'Portfolio Renders', description: 'Creating professional showcase work', icon: '/Icons/render_result.svg', link: null }
      ]
    },
    animation: {
      title: 'Animation',
      icon: '/animation.svg',
      color: '#8b5cf6',
      description: 'Guide to bringing your 3D creations to life with motion',
      topics: [
        { title: 'Animation Principles', description: 'Core concepts of movement and timing', icon: '/Icons/anim.svg', link: null },
        { title: 'Keyframe Basics', description: 'Creating and editing keyframes', icon: '/Icons/keyframe.svg', link: null },
        { title: 'Timeline & Graph Editor', description: 'Animation tools and curve editing', icon: '/Icons/graph.svg', link: null },
        { title: 'Rigging for Animation', description: 'Creating bone structures and controls', icon: '/Icons/armature_data.svg', link: null },
        { title: 'Walk Cycles', description: 'Animating natural character movement', icon: '/Icons/pose_hlt.svg', link: null },
        { title: 'Facial Animation', description: 'Expression and lip-sync techniques', icon: '/Icons/shapekey_data.svg', link: null },
        { title: 'Physics & Simulations', description: 'Dynamic simulations and effects', icon: '/Icons/physics.svg', link: null },
        { title: 'Full Character Animation', description: 'Complete character performance', icon: '/Icons/armature_data.svg', link: null }
      ]
    }
  }

  const currentCategory = categories[selectedCategory]

  return (
    <section className="learning-paths">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: 'rgba(21, 35, 47, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              color: '#ffffff',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(28, 45, 60, 0.8)'
              e.currentTarget.style.transform = 'translateX(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            ← Back
          </button>
          <div style={{ flex: 1 }}>
            <h2 className="section-title">Documentation</h2>
            <p className="section-subtitle">Explore comprehensive guides and references</p>
          </div>
        </div>

        <div className="path-selector">
          {Object.keys(categories).map((key) => (
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
  )
}