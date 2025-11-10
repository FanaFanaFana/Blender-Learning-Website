'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PathsScene from './PathsScene'
import { playHover } from '@/app/utils/sounds'
import { client } from '@/sanity/lib/client'

export default function BlenderCompendium() {
  const [selectedCategory, setSelectedCategory] = useState('modeling')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [categories, setCategories] = useState({})
  const [loading, setLoading] = useState(true)

  // Category metadata (icons, colors, descriptions)
  const categoryMetadata = {
    modeling: {
      title: '3D Modeling',
      icon: '/Icons/modeling.svg',
      color: '#3b82c4',
      description: 'Categories and lessons focused on creating and manipulating 3D models in Blender'
    },
    rendering: {
      title: 'Rendering',
      icon: '/Icons/rendered.svg',
      color: '#f59e0b',
      description: 'Complete reference for render engines, lighting, and image output'
    },
    animation: {
      title: 'Animation',
      icon: '/Icons/animation.svg',
      color: '#8b5cf6',
      description: 'Reference for keyframes, rigging, and motion systems in Blender'
    },
    texturing: {
      title: 'Texturing',
      icon: '/Icons/material_data.svg',
      color: '#a2d677',
      description: 'UV mapping, texture painting, and material workflows'
    },
    Lesson: {
      title: 'Lesson Content',
      icon: '/Icons/blender_icon_current_file.svg',
      color: '#0bf5e2',
      description: 'Step-by-step tutorials and guided learning paths'
    },
    printing: {
      title: '3D Printing',
      icon: '/Icons/mesh_cube.svg',
      color: '#ec4899',
      description: 'Preparing models for 3D printing and manufacturing'
    },
    vfx: {
      title: 'VFX Integration',
      icon: '/Icons/render_result.svg',
      color: '#f97316',
      description: 'Integrating 3D elements with live-action footage'
    },
    gameAssets: {
      title: 'Game Asset Creation',
      icon: '/Icons/mesh_torus.svg',
      color: '#06b6d4',
      description: 'Optimized modeling for game engines'
    },
    hairFur: {
      title: 'Hair & Fur',
      icon: '/Icons/armature_data.svg',
      color: '#a855f7',
      description: 'Particle systems and grooming workflows'
    },
    greaseGencil: {
      title: 'Grease Pencil',
      icon: '/Icons/editmode_hlt.svg',
      color: '#14b8a6',
      description: '2D animation in 3D space'
    },
    geometryNodes: {
      title: 'Geometry Nodes',
      icon: '/Icons/graph.svg',
      color: '#eab308',
      description: 'Procedural modeling with node systems'
    },
    projectManagement: {
      title: 'Project Management',
      icon: '/Icons/outliner.svg',
      color: '#64748b',
      description: 'Organization and workflow optimization'
    },
    simulation: {
      title: 'Simulation',
      icon: '/Icons/physics.svg',
      color: '#3b82f6',
      description: 'Physics simulations and dynamics'
    }
  }

  const mainCategories = ['modeling', 'rendering', 'animation']

  // Fetch lessons from Sanity
  useEffect(() => {
    async function fetchLessons() {
      try {
        const query = `
          *[_type == "lesson"] {
            "id": lessonId.current,
            
            // ✅ Fetch lessonIcon directly
            "icon": lessonIcon,
            
            // Try NEW format first, fallback to OLD format
            "title": coalesce(title, heroConfig.gradientText, heroConfig.title),
            "description": coalesce(subtitle, heroConfig.subtitle),
            
            category,
            
            // Try NEW format color first, fallback to OLD format
            "themeColor": coalesce(color, themeColor),
            
            // Include full lesson data for detailed pages
            heroConfig,
            categories[] {
              name,
              icon,
              color,
              items[] {
                name,
                description,
                icon,
                detailedInfo {
                  overview,
                  pages[] {
                    title,
                    content,
                    mediaType,
                    image,
                    "uploadedMediaUrl": uploadedMedia.asset->url,
                    tips
                  }
                }
              }
            }
          }
        `
        const lessons = await client.fetch(query)
        
        console.log('📚 Fetched lessons with icons:', lessons)
        
        // Group lessons by category
        const groupedLessons = lessons.reduce((acc, lesson) => {
          const cat = lesson.category || 'Lesson'
          if (!acc[cat]) {
            acc[cat] = {
              ...categoryMetadata[cat],
              topics: []
            }
          }
          acc[cat].topics.push({
            title: lesson.title || 'Untitled',
            description: lesson.description || 'No description available',
            icon: lesson.icon || '/Icons/blender_icon_current_file.svg',
            link: `/lessons/${lesson.id}`
          })
          return acc
        }, {})

        // Merge with metadata for categories without lessons
        const mergedCategories = Object.keys(categoryMetadata).reduce((acc, key) => {
          acc[key] = groupedLessons[key] || {
            ...categoryMetadata[key],
            topics: []
          }
          return acc
        }, {})

        setCategories(mergedCategories)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching lessons:', error)
        setLoading(false)
      }
    }

    fetchLessons()
  }, [])

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && categories[hash]) {
      setSelectedCategory(hash)
    }
  }, [categories])

  const currentCategory = categories[selectedCategory] || {}

  if (loading) {
    return (
      <div style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#8fa9bd'
      }}>
        Loading lessons...
      </div>
    )
  }

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
                onMouseEnter={playHover}
                key={key}
                className={`path-button ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
                style={selectedCategory === key ? { 
                  borderColor: categoryMetadata[key]?.color, 
                  backgroundColor: `${categoryMetadata[key]?.color}15` 
                } : {}}
              >
                <Image 
                  src={categoryMetadata[key]?.icon || '/Icons/blender_icon_current_file.svg'} 
                  alt={categoryMetadata[key]?.title || key} 
                  width={50} 
                  height={50} 
                />
                <span>{categoryMetadata[key]?.title || key}</span>
              </button>
            ))}

            {/* Dropdown Button */}
            <div style={{ position: 'relative' }}>
              <button
                onMouseEnter={playHover}
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
                  {['texturing', 'Lesson', 'printing', 'vfx', 'gameAssets', 'hairFur', 'greaseGencil', 'geometryNodes', 'projectManagement', 'simulation'].map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCategory(key)
                        setIsDropdownOpen(false)
                      }}
                      style={{
                        width: '100%',
                        background: selectedCategory === key ? `${categoryMetadata[key]?.color}30` : 'transparent',
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
                        e.currentTarget.style.background = `${categoryMetadata[key]?.color}15`
                        if (selectedCategory !== key) e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = selectedCategory === key ? `${categoryMetadata[key]?.color}30` : 'transparent'
                        e.currentTarget.style.color = selectedCategory === key ? '#0a0f14' : '#fff'
                      }}
                    >
                      <Image 
                        src={categoryMetadata[key]?.icon || '/Icons/blender_icon_current_file.svg'} 
                        alt={categoryMetadata[key]?.title || key} 
                        width={24} 
                        height={24} 
                        style={{ filter: selectedCategory === key ? 'none' : 'brightness(0) invert(1)' }} 
                      />
                      <span>{categoryMetadata[key]?.title || key}</span>
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

            {currentCategory.topics && currentCategory.topics.length > 0 ? (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '1.5rem' 
              }}>
                {currentCategory.topics.map((topic, index) => {
                  const TopicWrapper = topic.link ? Link : 'div'
                  const wrapperProps = topic.link ? { href: topic.link } : {}
                  
                  return (
                    <TopicWrapper key={index} onMouseEnter={playHover} {...wrapperProps} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                            onError={(e) => {
                              console.error(`Failed to load icon for ${topic.title}:`, topic.icon)
                              e.currentTarget.src = '/Icons/blender_icon_current_file.svg'
                            }}
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
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#8fa9bd'
              }}>
                <p>No lessons available in this category yet.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Create lessons in Sanity Studio and assign them to this category.
                </p>
              </div>
            )}
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
          display: 'flex';
          alignItems: 'center';
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