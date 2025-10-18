import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  const features = [
    {
      icon: '/modeling.svg',
      title: '3D Modeling',
      alt: '3D Modeling',
      link: '/learn#modeling'
    },
    {
      icon: '/rendered.svg',
      title: 'Rendering',
      alt: 'Rendering',
      link: '/learn#rendering'
    },
    {
      icon: '/animation.svg',
      title: 'Animation',
      alt: 'Animation',
      link: '/learn#animation'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
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