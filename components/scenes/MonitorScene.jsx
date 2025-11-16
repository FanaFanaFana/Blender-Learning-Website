'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function MonitorScene() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const modelRef = useRef(null)
  const mixerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    
    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const camera = new THREE.PerspectiveCamera(
      20,
      canvas.clientWidth / canvas.clientHeight,
      0.5,
      1000
    )
    camera.position.z = 6
    camera.position.y = 0
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
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
      '/assets/monitor.glb',
      (gltf) => {
        const model = gltf.scene
        modelRef.current = model
        scene.add(model)
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
        
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 5 / maxDim
        model.scale.multiplyScalar(scale)
        
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
        console.log('Loading: ' + (progress.loaded / progress.total * 100) + '%')
      },
      (error) => {
        console.error('Error loading GLB:', error)
      }
    )
    
    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    
    // Animation loop
    const clock = new THREE.Clock()
    
    function animate() {
      requestAnimationFrame(animate)
      
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta())
      }
      
      if (modelRef.current) {
        const targetRotationY = mouseRef.current.x * 0.3
        const targetRotationX = mouseRef.current.y * -0.3
        
        modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.005
        modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.005
      }
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Handle window resize
    const handleResize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      
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
  }, [])

  return <canvas ref={canvasRef} id="monitor-canvas" />
}