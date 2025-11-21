'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { ChevronDown, X } from 'lucide-react'
import '@/components/styles/LegalPages.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is BlendDocs?",
      answer: "BlendDocs is a visual documentation platform for Blender, providing comprehensive guides, tutorials, and references for 3D modeling, animation, and rendering. We aim to make learning Blender more accessible through visual aids and structured lessons."
    },
    {
      question: "Is BlendDocs free to use?",
      answer: "Yes! BlendDocs is completely free to use. All our lessons, tutorials, and documentation are available to everyone without any subscription or payment required. We believe in keeping 3D education accessible to all."
    },
    {
      question: "Is BlendDocs affiliated with the Blender Foundation?",
      answer: "No, BlendDocs is an independent educational platform and is not affiliated with, endorsed by, or sponsored by the Blender Foundation. We use Blender icons under the CC BY-SA 4.0 license for educational purposes."
    },
    {
      question: "Do I need to create an account?",
      answer: "An account is optional. You can browse all content without logging in. However, creating an account allows you to bookmark lessons, track your progress, and save your favorite resources for easy access later."
    },
    {
      question: "What version of Blender do your tutorials cover?",
      answer: "Our tutorials are primarily created for the latest stable version of Blender. We update our content regularly to reflect new features and changes. Most concepts apply across recent Blender versions (3.0+)."
    },
    {
      question: "Can I suggest new tutorial topics?",
      answer: "Absolutely! We welcome suggestions from our community. Please contact us at yannick.work3d@gmail.com with your ideas, and we'll consider them for future content updates."
    },
    {
      question: "How do I report an error or issue?",
      answer: "If you find any errors in our documentation or encounter technical issues with the website, please email us at yannick.work3d@gmail.com with details about the problem. We appreciate your help in improving BlendDocs!"
    },
    {
      question: "Can I use BlendDocs content for my own projects or teaching?",
      answer: "Our original content is protected by copyright. However, you may reference our materials for personal learning or link to our pages. If you're interested in using our content for teaching or commercial purposes, please contact us for permission."
    },
    {
      question: "Why do you collect email addresses?",
      answer: "We collect email addresses only for account creation and communication purposes. We will never share your email with third parties or send spam. You can read more in our Privacy Policy."
    },
    {
      question: "How can I support BlendDocs?",
      answer: "The best way to support us is by using the platform and sharing it with others who might benefit. If you'd like to contribute financially, you can use the Donate button in the footer. Every contribution helps us maintain and expand our content!"
    },
    {
      question: "Are there mobile apps available?",
      answer: "Currently, BlendDocs is a web-based platform optimized for both desktop and mobile browsers. We don't have dedicated mobile apps at this time, but our website is fully responsive and works great on phones and tablets."
    },
    {
      question: "How often is new content added?",
      answer: "We regularly update and expand our content library. Follow us or check back frequently to see new lessons, tutorials, and features. We're constantly working to improve and add more comprehensive resources."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Sidebar />
      
      <main className="legal-page">
        <button 
          onClick={() => window.history.back()} 
          className="legal-close-button" 
          title="Go Back"
        >
          <X size={24} />
        </button>
        
        <div className="legal-container">
          <div className="legal-header">
            <h1>Frequently Asked Questions</h1>
            <p className="last-updated">Find answers to common questions about BlendDocs</p>
          </div>

          <div className="faq-content">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className="faq-icon"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? '1' : '0'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h2>Still have questions?</h2>
            <p>If you couldn't find the answer you were looking for, feel free to reach out to us:</p>
            <a href="mailto:yannick.work3d@gmail.com" className="contact-button">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}