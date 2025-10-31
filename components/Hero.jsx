'use client'

import Link from 'next/link'
import MonitorScene from './MonitorScene'

export default function Hero() {
  return (
    <section className="hero-redesign">
      {/* 3D Scene as full-width background */}
      <div className="hero-scene-background">
        <MonitorScene />
      </div>
      
      {/* Text content overlaid with container for centering */}
      <div className="container">
        <div className="hero-text-overlay">
          <h1>Blender Visual Documentation</h1>
          <p>Documentation for 3D modeling, animation, and rendering</p>
        </div>
      </div>
      
      <style jsx>{`
        .hero-redesign {
          position: relative;
          padding: 0;
          margin: 0 -2rem; /* Negative margin to break out of any parent padding */
          width: calc(100% + 4rem); /* Compensate for negative margin */
          background: transparent;
          min-height: 70vh;
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

        .hero-text-overlay {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
          max-width: 900px;
          margin: 0 auto;
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

        @media (max-width: 768px) {
          .hero-redesign {
            min-height: 60vh;
            margin: 0 -1.5rem;
            width: calc(100% + 3rem);
          }

          .hero-scene-background :global(#monitor-canvas) {
            opacity: 0.4;
          }

          .hero-text-overlay {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-redesign {
            margin: 0 -1rem;
            width: calc(100% + 2rem);
          }
        }
      `}</style>
    </section>
  )
}