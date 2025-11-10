// FILE: components/Header.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchComponent from '@/components/SearchComponent'
import BuilderModal from '@/components/builder/BuilderModal'
import { playHover } from '@/app/utils/sounds'
import { Settings } from 'lucide-react'

export default function Header({ lessonData = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBuilder, setShowBuilder] = useState(false)

  const handleBuilderClick = () => {
    setShowBuilder(true)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link href="/" className="logo" onMouseEnter={playHover}>
                <Image
                  src="/logo.png"
                  alt="Blender Logo"
                  width={50}
                  height={50}
                  className="logo-img"
                />
                <span>Blend Docs</span>
              </Link>
            </div>

            <SearchComponent />

            <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link
                onMouseEnter={playHover}
                href="/#home"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test1.svg" alt="" width={24} height={24} />
                <span>Home</span>
              </Link>
              <Link
                onMouseEnter={playHover}
                href="/learn"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test2.svg" alt="" width={24} height={24} />
                <span>Docs</span>
              </Link>
              <Link
                onMouseEnter={playHover}
                href="/about"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test3.svg" alt="" width={24} height={24} />
                <span>About</span>
              </Link>
              <Link
                onMouseEnter={playHover}
                href="/contact"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test4.svg" alt="" width={24} height={24} />
                <span>Contact</span>
              </Link>

              <button
                onClick={handleBuilderClick}
                onMouseEnter={playHover}
                className="nav-link builder-trigger"
                title="Open Lesson Builder"
              >
                <Settings size={24} />
                <span>Builder</span>
              </button>
            </nav>

            <button
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <style jsx>{`
          .builder-trigger {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
            border: none;
            border-radius: 8px;
            padding: 0.75rem 1.25rem !important;
            transition: all 0.3s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: white;
            font-size: clamp(1rem, 2vw, 1.3rem);
            font-weight: 600;
          }

          .builder-trigger:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
          }

          @media (max-width: 768px) {
            .builder-trigger {
              width: 100%;
              justify-content: center;
              margin-top: 1rem;
              padding: 1rem !important;
            }
          }
        `}</style>
      </header>

      {showBuilder && (
        <BuilderModal
          currentLesson={lessonData}
          onClose={() => setShowBuilder(false)}
        />
      )}
    </>
  )
}