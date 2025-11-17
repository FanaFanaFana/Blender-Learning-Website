'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function PathsScene() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const modelRef = useRef(null)
  const mixerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameIdRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    
    // Wait for canvas to have proper dimensions
    const initScene = () => {
      if (canvas.clientWidth === 0 || canvas.clientHeight === 0) {
        requestAnimationFrame(initScene)
        return
      }

      // Scene setup
      const scene = new THREE.Scene()
      sceneRef.current = scene
      
      const camera = new THREE.PerspectiveCamera(
        50,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
      )
      camera.position.z = 5
      camera.position.y = 1
      camera.position.x = 0
      cameraRef.current = camera
      
      const renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: true 
      })
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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
        '/assets/test.glb',
        (gltf) => {
          console.log('✅ GLB loaded successfully in production!')
          const model = gltf.scene
          modelRef.current = model
          
          scene.add(model)
          
          // Center and scale the model
          const box = new THREE.Box3().setFromObject(model)
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())
          
          model.position.sub(center)
          
          const maxDim = Math.max(size.x, size.y, size.z)
          const scale = 18 / maxDim
          model.scale.multiplyScalar(scale)
          
          // Add orange outlines to all meshes
          model.traverse((child) => {
            if (child.isMesh) {
              const edges = new THREE.EdgesGeometry(child.geometry)
              const line = new THREE.LineSegments(
                edges,
                new THREE.LineBasicMaterial({ color: 0x00000, linewidth: 3 })
              )
              child.add(line)
            }
          })
          
          // Setup animations if available
          if (gltf.animations && gltf.animations.length) {
            const mixer = new THREE.AnimationMixer(model)
            mixerRef.current = mixer
            gltf.animations.forEach((clip) => {
              mixer.clipAction(clip).play()
            })
          }
        },
        (progress) => {
          console.log('📦 Loading: ' + (progress.loaded / progress.total * 100) + '%')
        },
        (error) => {
          console.error('❌ Error loading GLB:', error)
        }
      )
      
      // Animation loop
      const clock = new THREE.Clock()
      let autoRotate = true
      
      function animate() {
        animationFrameIdRef.current = requestAnimationFrame(animate)
        
        const delta = clock.getDelta()
        
        // Update animation mixer with safety check
        if (mixerRef.current && delta > 0 && delta < 1) {
          mixerRef.current.update(delta * 0.05)
        }
        
        // Update model rotation
        if (modelRef.current) {
          if (autoRotate) {
            // Auto-rotate when no mouse interaction
            modelRef.current.rotation.y += 0.0003
          } else {
            // Mouse-controlled rotation
            const targetRotationY = mouseRef.current.x * 0.3
            const targetRotationX = mouseRef.current.y * -0.3
            
            modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.001
            modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.001
          }
        }
        
        // Render scene
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          renderer.render(scene, camera)
        }
      }
      
      // Start animation loop
      animate()
      console.log('🎬 Animation loop started')
      
      // Handle window resize
      const handleResize = () => {
        const width = canvas.clientWidth
        const height = canvas.clientHeight
        
        if (cameraRef.current) {
          cameraRef.current.aspect = width / height
          cameraRef.current.updateProjectionMatrix()
        }
        
        if (rendererRef.current) {
          rendererRef.current.setSize(width, height)
        }
      }
      
      window.addEventListener('resize', handleResize)
      
      // Store cleanup function
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }

    // Mouse interaction handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }
    
    const handleMouseEnter = () => {
      // Disable auto-rotation when mouse enters
      if (typeof autoRotate !== 'undefined') {
        autoRotate = false
      }
    }
    
    const handleMouseLeave = () => {
      // Re-enable auto-rotation when mouse leaves
      if (typeof autoRotate !== 'undefined') {
        autoRotate = true
      }
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    // Initialize scene
    const cleanupResize = initScene()
    
    // Cleanup function
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      
      if (cleanupResize) cleanupResize()
      
      // Cancel animation frame
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
      
      // Dispose renderer
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      
      // Dispose scene objects
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
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
      <canvas 
        ref={canvasRef} 
        id="paths-canvas" 
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }} 
      />
    </div>
  )
}