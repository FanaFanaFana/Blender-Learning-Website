'use client'

import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: '/Icons/mesh_cube.svg',
      title: 'Open Knowledge',
      description: 'We believe in making 3D learning accessible to everyone, everywhere. No barriers, no paywalls, just pure learning.'
    },
    {
      icon: '/Icons/community.svg',
      title: 'Community First',
      description: 'Built by learners, for learners. Our community drives everything we do, from content creation to feature requests.'
    },
    {
      icon: '/Icons/view_camera.svg',
      title: 'Practical Focus',
      description: 'Learn by doing. Every tutorial, every guide focuses on real-world projects that build actual skills.'
    }
  ]

  const team = [
    {
      name: 'Yannick Croes',
      role: '3D Artist & Educator',
      image: '/logo.png',
      description: 'Passionate about making Blender accessible to everyone.'
    }
  ]

  

  return (
    <>
      

      {/* Our Story */}
      <section className="learning-paths">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)' }}>Our Story</h2>
          <p className="section-subtitle">How Blend Docs came to be</p>
          
          <div className="path-content">
            <div className="path-header" style={{ borderLeftColor: '#3b82f6' }}>
              <h3>From Frustration to Solution</h3>
              <p style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                Like many of you, I started my Blender journey feeling completely overwhelmed. 
                The official documentation was technical and dense. YouTube tutorials were scattered and inconsistent. 
                I spent more time searching for answers than actually learning.
              </p>
              <p style={{ lineHeight: 1.8, fontSize: '1.1rem', marginTop: '1rem' }}>
                That's when I realized: the Blender community needed a single, comprehensive resource that explained 
                things in plain language, with visual examples, and a clear learning path. So I built Blend Docs.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">What We Believe</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          
          <div className="features-grid">
            {values.map((value, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Image 
                    src={value.icon} 
                    alt={value.title}
                    width={80}
                    height={80}
                  />
                </div>
                <h3>{value.title}</h3>
                <p style={{ 
                  fontSize: '1rem',
                  color: 'rgb(176, 196, 212)',
                  lineHeight: 1.6
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="learning-paths">
        <div className="container">
          <div className="path-content">
            <div className="path-header" style={{ 
              borderLeftColor: '#8b5cf6',
              textAlign: 'center',
              borderLeft: 'none',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Our Mission</h3>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                lineHeight: 1.8,
                maxWidth: '800px',
                margin: '1rem auto 0'
              }}>
                "To empower every aspiring 3D artist with clear, comprehensive, and completely free 
                learning resources. We believe that creativity shouldn't have a price tag, and that 
                anyone with passion and dedication deserves the tools to bring their imagination to life."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="free-resources">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">The people making it happen</p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {team.map((member, index) => (
              <div key={index} className="resource-card" style={{ maxWidth: '400px' }}>
                <div className="resource-icon" style={{ 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  width: '120px',
                  height: '120px'
                }}>
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={80}
                    height={80}
                    style={{ borderRadius: '50%' }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p style={{ 
                  color: 'rgb(139, 92, 246)',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {member.role}
                </p>
                <p style={{ 
                  color: 'rgb(176, 196, 212)',
                  lineHeight: 1.6
                }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="learning-paths">
        <div className="container">
          <div className="path-content">
            <div className="path-header" style={{ 
              borderLeftColor: '#10b981',
              textAlign: 'center',
              borderLeft: 'none',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Join Our Journey</h3>
              <p style={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                Blend Docs is growing every day, and we'd love for you to be part of it. 
                Whether you're just starting out or you're a seasoned pro, there's a place for you here.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button className="cta-button">
                  Start Learning
                </button>
                <button className="cta-button" style={{ 
                  background: 'transparent',
                  border: '2px solid rgb(46, 108, 167)'
                }}>
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}