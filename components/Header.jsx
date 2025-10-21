'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalSearch from '@/components/GlobalSearch'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Image 
              src="/logo.png" 
              alt="Blender Logo" 
              width={40} 
              height={40}
              className="logo-img" 
            />
            <span>Blend Docs</span>
          </div>
          
          <GlobalSearch />
          
          <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link 
              href="/#home" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image src="/test1.svg" alt="" width={24} height={24} />
              <span>Home</span>
            </Link>
            <Link 
              href="/#courses" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image src="/test2.svg" alt="" width={24} height={24} />
              <span>Docs</span>
            </Link>
            <Link 
              href="/#about" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image src="/test3.svg" alt="" width={24} height={24} />
              <span>About</span>
            </Link>
            <Link 
              href="/#contact" 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image src="/test4.svg" alt="" width={24} height={24} />
              <span>Contact</span>
            </Link>
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
    </header>
  )
}