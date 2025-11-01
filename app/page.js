'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // 30% volume
      audioRef.current.play().catch(err => {
        console.log('Autoplay blocked by browser')
      })
    }
  }, [])

  return (
    <div className="page-wrapper">
      <Sidebar />
      <Header />
      
      <audio ref={audioRef} loop>
        <source src="/blender.wav" type="audio/wav" />
      </audio>
      
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}