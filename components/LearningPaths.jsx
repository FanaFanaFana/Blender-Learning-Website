'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LearningPaths() {
  const [selectedPath, setSelectedPath] = useState('modeling')

  const paths = {
    modeling: {
      title: '3D Modeling',
      icon: '/modeling.svg',
      color: '#3b82c4',
      description: 'Master the art of creating 3D objects and characters',
      lessons: [
        { title: 'Interface Areas',  difficulty: 'Beginner', link: '/InterfaceLesson' },
        { title: 'First 3D Model', duration: '30 min', difficulty: 'Beginner', link: '/FirstModelLesson' },
        { title: 'Edit Mode', duration: '25 min', difficulty: 'Beginner', link: '/EditModeLesson' },
        { title: 'Modifiers', duration: '40 min', difficulty: 'Intermediate', link: '/modifierlesson' },
        { title: 'Sculpting', duration: '45 min', difficulty: 'Intermediate', link: '/SculptingLesson' },
        { title: 'Character', duration: '2 hours', difficulty: 'Advanced', link: '/CharacterModelingLesson' },
        { title: 'Hard Surface', duration: '1.5 hours', difficulty: 'Advanced', link: '/HardSurfaceLesson' },
        { title: 'Product Design in Blender', duration: '1 hour', difficulty: 'Advanced', link: '/ProductDesignLesson' }
      ]
    },
    rendering: {
      title: 'Rendering',
      icon: '/rendered.svg',
      color: '#f59e0b',
      description: 'Create stunning, photorealistic images',
      lessons: [
        { title: 'Introduction to Rendering', duration: '20 min', difficulty: 'Beginner', link: null },
        { title: 'Lighting Fundamentals', duration: '35 min', difficulty: 'Beginner', link: null },
        { title: 'Camera Setup & Composition', duration: '30 min', difficulty: 'Beginner', link: null },
        { title: 'Materials & Shaders', duration: '50 min', difficulty: 'Intermediate', link: null },
        { title: 'PBR Texturing', duration: '45 min', difficulty: 'Intermediate', link: null },
        { title: 'Advanced Lighting Techniques', duration: '1 hour', difficulty: 'Advanced', link: null },
        { title: 'Compositing & Post-Processing', duration: '1.5 hours', difficulty: 'Advanced', link: null },
        { title: 'Portfolio Render Projects', duration: '2 hours', difficulty: 'Advanced', link: null }
      ]
    },
    animation: {
      title: 'Animation',
      icon: '/animation.svg',
      color: '#8b5cf6',
      description: 'Bring your creations to life with motion',
      lessons: [
        { title: 'Animation Principles', duration: '25 min', difficulty: 'Beginner', link: null },
        { title: 'Keyframe Basics', duration: '30 min', difficulty: 'Beginner', link: null },
        { title: 'Timeline & Graph Editor', duration: '35 min', difficulty: 'Beginner', link: null },
        { title: 'Rigging for Animation', duration: '1 hour', difficulty: 'Intermediate', link: null },
        { title: 'Creating Walk Cycles', duration: '45 min', difficulty: 'Intermediate', link: null },
        { title: 'Facial Animation', duration: '1.5 hours', difficulty: 'Advanced', link: null },
        { title: 'Physics & Simulations', duration: '1 hour', difficulty: 'Advanced', link: null },
        { title: 'Full Character Animation', duration: '2.5 hours', difficulty: 'Advanced', link: null }
      ]
    }
  }

  const currentPath = paths[selectedPath]

  return (
    <section className="learning-paths">
      <div className="container">
        <h2 className="section-title">Choose Your Learning Path</h2>
        <p className="section-subtitle">Pick a path and start learning today</p>

        <div className="path-selector">
          {Object.keys(paths).map((key) => (
            <button
              key={key}
              className={`path-button ${selectedPath === key ? 'active' : ''}`}
              onClick={() => setSelectedPath(key)}
              style={selectedPath === key ? { borderColor: paths[key].color, backgroundColor: `${paths[key].color}15` } : {}}
            >
              <Image src={paths[key].icon} alt={paths[key].title} width={50} height={50} />
              <span>{paths[key].title}</span>
            </button>
          ))}
        </div>

        <div className="path-content">
          <div className="path-header" style={{ borderLeftColor: currentPath.color }}>
            <h3>{currentPath.title}</h3>
            <p>{currentPath.description}</p>
          </div>

          <div className="lessons-grid">
            {currentPath.lessons.map((lesson, index) => {
              const LessonWrapper = lesson.link ? Link : 'div'
              const wrapperProps = lesson.link ? { href: lesson.link } : {}
              
              return (
                <LessonWrapper key={index} {...wrapperProps} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="lesson-card">
                    <div className="lesson-number" style={{ backgroundColor: `${currentPath.color}20`, color: currentPath.color }}>
                      {index + 1}
                    </div>
                    <div className="lesson-info">
                      <h4>{lesson.title}</h4>
                      <div className="lesson-meta">
                       {/*   <span className="lesson-duration">⏱️ {lesson.duration}</span>   */}
                        <span 
                          className="lesson-difficulty"
                          style={{ 
                            backgroundColor: lesson.difficulty === 'Beginner' ? '#10b98120' : 
                                           lesson.difficulty === 'Intermediate' ? '#f59e0b20' : '#ef444420',
                            color: lesson.difficulty === 'Beginner' ? '#10b981' : 
                                   lesson.difficulty === 'Intermediate' ? '#f59e0b' : '#ef4444'
                          }}
                        >
                          {lesson.difficulty}
                        </span>
                      </div>
                    </div>
                    <button className="start-lesson-btn" style={{ color: currentPath.color }}>
                      Start →
                    </button>
                  </div>
                </LessonWrapper>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}