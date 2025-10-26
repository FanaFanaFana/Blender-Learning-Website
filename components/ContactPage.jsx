'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 3000)
      return
    }

    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactMethods = [
    {
      icon: '/test4.svg',
      title: 'Email',
      detail: 'support@blenddocs.com',
      description: 'Get in touch via email',
      color: '#3b82f6'
    },
    {
      icon: '/test2.svg',
      title: 'Discord',
      detail: 'Join our community',
      description: 'Chat with other learners',
      color: '#8b5cf6'
    },
    {
      icon: '/test3.svg',
      title: 'Documentation',
      detail: 'Browse our guides',
      description: 'Find answers in our docs',
      color: '#10b981'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ display: 'block', textAlign: 'center' }}>
            <div className="hero-text">
              <h1>
                Get in Touch
              </h1>
              <p>
                Have questions about Blender? Need help with your 3D journey? We're here to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Image 
                    src={method.icon} 
                    alt={method.title}
                    width={80}
                    height={80}
                  />
                </div>
                <h3 style={{ color: method.color }}>{method.title}</h3>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: 'rgb(255, 255, 255)',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  {method.detail}
                </p>
                <p style={{ 
                  fontSize: '0.9rem',
                  color: 'rgb(143, 169, 189)',
                  margin: 0
                }}>
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="learning-paths">
        <div className="container">
          <div className="path-content">
            <div className="path-header" style={{ borderLeftColor: '#3b82f6' }}>
              <h3>Send us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            {submitStatus === 'success' && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '2rem',
                color: '#10b981',
                textAlign: 'center',
                fontWeight: 600
              }}>
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
                padding: '1rem',
                marginBottom: '2rem',
                color: '#ef4444',
                textAlign: 'center',
                fontWeight: 600
              }}>
                ✗ Please fill out all required fields.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ 
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgb(176, 196, 212)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(13, 27, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgb(176, 196, 212)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(13, 27, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgb(176, 196, 212)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(13, 27, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ 
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'rgb(176, 196, 212)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(13, 27, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'rgb(255, 255, 255)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6'
                    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="cta-button"
                style={{
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}