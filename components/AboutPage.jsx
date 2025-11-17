'use client'

import Image from 'next/image'
import PathsScene from './scenes/PathsScene'
import { playHover } from '@/app/utils/sounds'

export default function AboutPage() {
  return (
    <div style={{ background: 'transparent' }}>
      {/* Hero Section with 3D Background */}
      <section style={{
        position: 'relative',
        padding: 0,
        margin: '0 -2rem',
        width: 'calc(100% + 4rem)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: '3rem'
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.3
        }}>
          <PathsScene />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.1,
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
          }}>
            About Blend Docs
          </h1>
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: 'rgb(176, 196, 212)',
            lineHeight: 1.5,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)'
          }}>
            Making Blender accessible to everyone, one tutorial at a time
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Our Story */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            padding: '2rem',
            background: 'rgba(21, 35, 47, 0.6)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              Our Story
            </h2>
            <div style={{
              color: 'rgb(176, 196, 212)',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: 1.8
            }}>
              <p style={{ marginBottom: '1rem' }}>
                Like many of you, I started my Blender journey feeling completely overwhelmed. 
                The official documentation was technical and dense. YouTube tutorials were scattered and inconsistent. 
                I spent more time searching for answers than actually learning.
              </p>
              <p style={{ margin: 0 }}>
                That's when I realized: the Blender community needed a single, comprehensive resource that explained 
                things in plain language, with visual examples, and a clear learning path. So I built Blend Docs.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '0.75rem'
          }}>
            What We Believe
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgb(143, 169, 189)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: '3rem'
          }}>
            The principles that guide everything we do
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                icon: '/Icons/mesh_cube.svg',
                title: 'Open Knowledge',
                description: 'We believe in making 3D learning accessible to everyone, everywhere. No barriers, no paywalls, just pure learning.',
                color: '#3b82f6'
              },
              {
                icon: '/Icons/community.svg',
                title: 'Community First',
                description: 'Built by learners, for learners. Our community drives everything we do, from content creation to feature requests.',
                color: '#10b981'
              },
              {
                icon: '/Icons/view_camera.svg',
                title: 'Practical Focus',
                description: 'Learn by doing. Every tutorial, every guide focuses on real-world projects that build actual skills.',
                color: '#8b5cf6'
              }
            ].map((value, index) => (
              <div 
                key={index} 
                style={{
                  background: 'rgba(21, 35, 47, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(28, 45, 60, 0.8)'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
                  playHover()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${value.color}15`
                }}>
                  <Image 
                    src={value.icon} 
                    alt={value.title}
                    width={36}
                    height={36}
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
                  />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.15rem',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                    color: '#ffffff'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    color: 'rgb(143, 169, 189)',
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            padding: '2rem',
            background: 'rgba(21, 35, 47, 0.6)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              Our Mission
            </h2>
            <p style={{
              color: 'rgb(176, 196, 212)',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              lineHeight: 1.8,
              margin: 0
            }}>
              "To empower every aspiring 3D artist with clear, comprehensive, and completely free 
              learning resources. We believe that creativity shouldn't have a price tag, and that 
              anyone with passion and dedication deserves the tools to bring their imagination to life."
            </p>
          </div>
        </section>

        {/* Team */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '0.75rem'
          }}>
            Meet the Team
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'rgb(143, 169, 189)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: '3rem'
          }}>
            The people making it happen
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div 
              style={{
                background: 'rgba(21, 35, 47, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '2rem',
                textAlign: 'center',
                maxWidth: '350px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(28, 45, 60, 0.8)'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
                playHover()
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(21, 35, 47, 0.6)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'rgba(59, 130, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image 
                  src="/assets/yannick.png" 
                  alt="Yannick Croes"
                  width={190}
                  height={160}
                />
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 600,
                marginBottom: '0.5rem'
              }}>
                Yannick Croes
              </h3>
              <p style={{
                color: '#8b5cf6',
                fontWeight: 600,
                marginBottom: '1rem',
                fontSize: '1rem'
              }}>
                3D Artist & Educator
              </p>
              <p style={{
                color: 'rgb(143, 169, 189)',
                lineHeight: 1.6,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                Passionate about making Blender accessible to everyone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ marginBottom: '4rem' }}>
          <div style={{
            padding: '2rem',
            background: 'rgba(21, 35, 47, 0.6)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              Join Our Journey
            </h2>
            <p style={{
              color: 'rgb(176, 196, 212)',
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
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
              <button 
                onClick={() => window.location.href = '/pages/learn'}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '1rem 2rem',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  playHover()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }}>
                Start Learning
              </button>
              <button 
                onClick={() => window.open('https://discord.gg/A5yYmxVXuP', '_blank')}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '1rem 2rem',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  playHover()
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }}>
                Join Discord
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}