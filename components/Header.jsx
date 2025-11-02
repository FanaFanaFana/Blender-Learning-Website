'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalSearch from '@/components/GlobalSearch'
import { playHover } from '@/app/utils/sounds'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
           <Link href="/" className="logo" onMouseEnter={playHover} >
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
          
          <GlobalSearch />
          
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