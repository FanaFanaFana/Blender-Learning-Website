import Link from 'next/link'
import MonitorScene from './MonitorScene'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Learn Blender</h1>
            <p>Master the art of 3D modeling, animation, and rendering</p>
            <Link href="/learn">
              <button className="cta-button">Get Started</button>
            </Link>
          </div>
          <div className="hero-image">
            <MonitorScene />
          </div>
        </div>
      </div>
    </section>
  )
}