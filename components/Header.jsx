'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import SearchComponent from '@/components/SearchComponent'
import BuilderModal from '@/components/builder/BuilderModal'
import { playHover } from '@/app/utils/sounds'
import { Settings } from 'lucide-react'
import { getVisibleCategories, getDropdownCategories } from '@/app/config/categories'
import './styles/Header.css'

export default function Header({ lessonData = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBuilder, setShowBuilder] = useState(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false)
  const router = useRouter()

  const handleBuilderClick = () => {
    setShowBuilder(true)
    setMobileMenuOpen(false)
  }

  const visibleCategories = getVisibleCategories()
  const dropdownCategories = getDropdownCategories()

  const handleCategoryClick = (categoryKey) => {
    setCategoryDropdownOpen(false)
    router.replace(`/pages/learn#${categoryKey}`)
    setTimeout(() => {
      if (window.location.pathname === '/pages/learn') {
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      }
    }, 100)
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link href="/" className="logo" onMouseEnter={playHover}>
                <Image
                  src="/Icons/logo.png"
                  alt="Blender Logo"
                  width={50}
                  height={50}
                  className="logo-img"
                />
                <span>Blend Docs</span>
              </Link>
            </div>

            <SearchComponent />

            {mobileMenuOpen && (
              <div 
                className="mobile-nav-overlay"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}

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
                href="/pages/learn"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test2.svg" alt="" width={24} height={24} />
                <span>Docs</span>
              </Link>
              <Link
                onMouseEnter={playHover}
                href="/pages/about"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image src="/Icons/test3.svg" alt="" width={24} height={24} />
                <span>About</span>
              </Link>
              <Link
                onMouseEnter={playHover}
                href="/pages/contact"
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

        {/* Category Navigation Bar */}
        <div className="category-bar">
          <div className="container">
            <div className="category-links">
              {visibleCategories.map((cat) => (
                <button
                  key={cat.key}
                  className="category-link"
                  onMouseEnter={playHover}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
              
              {/* More dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  className="category-link category-more"
                  onMouseEnter={playHover}
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  <span style={{ 
                    fontSize: '0.7rem',
                    transform: categoryDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    display: 'inline-block'
                  }}>▼</span>
                  <span>More</span>
                </button>

                {categoryDropdownOpen && (
                  <>
                    <div 
                      className="category-dropdown-overlay"
                      onClick={() => setCategoryDropdownOpen(false)}
                    />
                    <div className="category-dropdown">
                      <button 
                        className="category-dropdown-close"
                        onClick={() => setCategoryDropdownOpen(false)}
                      >
                        ✕ Close
                      </button>
                      <div className="category-dropdown-items-container">
                        {Array.from(
                          new Map(
                            [...visibleCategories, ...dropdownCategories].map(cat => [cat.key, cat])
                          ).values()
                        ).map((cat) => (
                          <button
                            key={cat.key}
                            className="category-dropdown-item"
                            onMouseEnter={playHover}
                            onClick={() => {
                              handleCategoryClick(cat.key)
                              setCategoryDropdownOpen(false)
                              setMobileMenuOpen(false)
                            }}
                          >
                            <span>{cat.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
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