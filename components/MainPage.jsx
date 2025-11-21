'use client'

import Image from 'next/image'
import Link from 'next/link'
import MonitorScene from './scenes/MonitorScene'
import { playHover } from '@/app/utils/sounds'
import './styles/MainPage.css'

export default function MainPage() {
  const features = [
    {
      icon: '/Icons/modeling.svg',
      title: '3D Modeling',
      alt: '3D Modeling',
      link: '/pages/learn#modeling'
    },
    {
      icon: '/Icons/rendered.svg',
      title: 'Rendering',
      alt: 'Rendering',
      link: '/pages/learn#rendering'
    },
    {
      icon: '/Icons/animation.svg',
      title: 'Animation',
      alt: 'Animation',
      link: '/pages/learn#animation'
    }
  ]

  return (
    <section className="hero-features-section">
      {/* 3D Scene as full-width background */}
      <div className="scene-background">
        <MonitorScene />
      </div>
      
      {/* Content container */}
      <div className="content-container">
        {/* Hero Text */}
        <div className="text-overlay">
          <h1>Blender Visual Documentation</h1>
          <p>Documentation for 3D modeling, animation, and rendering</p>
        </div>

        {/* Feature Cards */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} onMouseEnter={playHover}>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image 
                    src={feature.icon} 
                    alt={feature.alt}
                    width={120}
                    height={120}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3>{feature.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}