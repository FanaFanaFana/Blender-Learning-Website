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
  const snowflakesRef = useRef([])

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
    
    const loader = new GLTFLoader()
    
    // Load main monitor model
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
      undefined,
      (error) => {
        console.error('Error loading monitor GLB:', error)
      }
    )
    
    // Load snowflake model and create instances
    loader.load(
      '/assets/Snowflake.glb',
      (gltf) => {
        console.log('Snowflake model loaded successfully!')
        const snowflakeTemplate = gltf.scene
        const numSnowflakes = 100
        
        // Make snowflakes visible with emissive material
        snowflakeTemplate.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              color: 0xffffff,
              emissive: 0xaaaaff,
              emissiveIntensity: 0.5,
              metalness: 0.3,
              roughness: 0.4
            })
          }
        })
        
        for (let i = 0; i < numSnowflakes; i++) {
          const snowflake = snowflakeTemplate.clone()
          
          // Random starting position - closer to camera
          snowflake.position.x = (Math.random() - 0.5) * 15
          snowflake.position.y = Math.random() * 10 + 3
          snowflake.position.z = (Math.random() - 0.5) * 10 - 2
          
          // Larger scale for visibility
          const scale = Math.random() * 1.5 + 2.2
          snowflake.scale.set(scale, scale, scale)
          
          // Random rotation
          snowflake.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          )
          
          // Store animation data
          snowflake.userData = {
            speed: Math.random() * 0.002 + 0.001,
            drift: (Math.random() - 0.5) * 0.008,
            rotationSpeed: {
              x: (Math.random() - 0.5) * 0.01,
              y: (Math.random() - 0.5) * 0.02,
              z: (Math.random() - 0.5) * 0.01
            }
          }
          
          scene.add(snowflake)
          snowflakesRef.current.push(snowflake)
        }
        
        console.log(`Added ${numSnowflakes} snowflakes to scene`)
      },
      (progress) => {
        console.log('Loading snowflakes: ' + (progress.loaded / progress.total * 100) + '%')
      },
      (error) => {
        console.error('Error loading snowflake GLB:', error)
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
      
      // Animate main monitor model
      if (modelRef.current) {
        const targetRotationY = mouseRef.current.x * 0.3
        const targetRotationX = mouseRef.current.y * -0.3
        
        modelRef.current.rotation.y += (targetRotationY - modelRef.current.rotation.y) * 0.005
        modelRef.current.rotation.x += (targetRotationX - modelRef.current.rotation.x) * 0.005
      }
      
      // Animate snowflakes
      snowflakesRef.current.forEach((snowflake) => {
        // Fall down
        snowflake.position.y -= snowflake.userData.speed
        
        // Drift sideways
        snowflake.position.x += snowflake.userData.drift
        
        // Rotate
        snowflake.rotation.x += snowflake.userData.rotationSpeed.x
        snowflake.rotation.y += snowflake.userData.rotationSpeed.y
        snowflake.rotation.z += snowflake.userData.rotationSpeed.z
        
        // Reset to top when it falls below view
        if (snowflake.position.y < -3) {
          snowflake.position.y = Math.random() * 5 + 8
          snowflake.position.x = (Math.random() - 0.5) * 15
          snowflake.position.z = (Math.random() - 0.5) * 10 - 2
        }
      })
      
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