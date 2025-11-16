'use client'

import Image from 'next/image'
import Link from 'next/link'
import MonitorScene from './scenes/MonitorScene'
import { playHover } from '@/app/utils/sounds'

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
    <section className="hero-features-combined">
      {/* 3D Scene as full-width background */}
      <div className="hero-scene-background">
        <MonitorScene />
      </div>
      
      {/* Content container */}
      <div className="container">
        {/* Hero Text */}
        <div className="hero-text-overlay">
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
      
      <style jsx>{`
        .hero-features-combined {
          position: relative;
          padding: 0;
          margin: 0 -2rem;
          width: calc(100% + 4rem);
          background: transparent;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-scene-background {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-scene-background :global(#monitor-canvas) {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          opacity: 0.6;
          display: block !important;
          object-fit: cover;
        }

        .container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .hero-text-overlay {
          text-align: center;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .hero-text-overlay h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-text-overlay p {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: rgb(176, 196, 212);
          line-height: 1.5;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .features-grid :global(a) {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .feature-card {
          background: rgba(21, 35, 47, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(28, 45, 60, 0.9);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.2);
        }

        .feature-icon {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 120px;
        }

        .feature-card h3 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero-features-combined {
            min-height: 80vh;
            margin: 0 -1.5rem;
            width: calc(100% + 3rem);
          }

          .hero-scene-background :global(#monitor-canvas) {
            opacity: 0.4;
          }

          .container {
            padding: 3rem 1.5rem;
          }

          .hero-text-overlay {
            padding: 1.5rem;
            margin-bottom: 3rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .feature-card {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-features-combined {
            margin: 0 -1rem;
            width: calc(100% + 2rem);
            min-height: 75vh;
          }

          .container {
            padding: 2rem 1rem;
          }

          .features-grid {
            gap: 1rem;
          }

          .feature-card {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}