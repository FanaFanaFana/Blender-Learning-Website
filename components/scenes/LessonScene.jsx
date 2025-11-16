'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function LessonScene() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const modelRef = useRef(null)
  const mixerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const cameraRef = useRef(null)
  const [modelReady, setModelReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    
    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    camera.position.y = 1
    camera.position.x = -.01
    cameraRef.current = camera
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)
    
    const fillLight = new THREE.DirectionalLight(0x4a9fd8, 0.8)
    fillLight.position.set(-5, 0, -5)
    scene.add(fillLight)
    
    const backLight = new THREE.DirectionalLight(0xffffff, 1.0)
    backLight.position.set(0, -5, -5)
    scene.add(backLight)
    
    // Load GLB model
    const loader = new GLTFLoader()
    loader.load(
      '/assets/LessonMov.glb',
      (gltf) => {
        console.log('Lessonmov.glb loaded successfully!', gltf)
        const model = gltf.scene
        
        // Don't add to scene yet
        model.visible = false
        
        // Force update all matrices first
        model.updateMatrixWorld(true)
        model.traverse((child) => {
          child.updateMatrixWorld(true)
        })
        
        // Calculate bounding box
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        console.log('Bounding box size:', size)
        console.log('Bounding box center:', center)
        
        // Center the model
        model.position.x = -center.x
        model.position.y = -center.y
        model.position.z = -center.z
        
        // Scale the model
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 15 / maxDim
        model.scale.set(scale, scale, scale)
        
        // Update after transforms
        model.updateMatrixWorld(true)
        
        console.log('Applied scale:', scale)
        console.log('Final position:', model.position)
        
        // Setup animations
        if (gltf.animations && gltf.animations.length) {
          const mixer = new THREE.AnimationMixer(model)
          mixerRef.current = mixer
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play()
          })
        }
        
        // Add to scene
        scene.add(model)
        modelRef.current = model
        
        // Make visible after a short delay
        setTimeout(() => {
          model.visible = true
          setModelReady(true)
        }, 100)
      },
      (progress) => {
        console.log('Loading: ' + (progress.loaded / progress.total * 100) + '%')
      },
      (error) => {
        console.error('Error loading Lessonmov.glb:', error)
      }
    )
    
    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }
    
    container.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop
    const clock = new THREE.Clock()
    
    function animate() {
      requestAnimationFrame(animate)
      
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta() * 0.05)
      }
      
      if (modelRef.current && modelReady) {
        const targetRotationY = mouseRef.current.x * 0.3
        const targetRotationX = mouseRef.current.y * -0.3
        
        modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.003
        modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.003
      }
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Handle window resize
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)
      
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }
    }
  }, [modelReady])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: modelReady ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }} 
    />
  )
}