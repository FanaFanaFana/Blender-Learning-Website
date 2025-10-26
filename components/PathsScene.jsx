'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function PathsScene() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const modelRef = useRef(null)
  const mixerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const edgesRef = useRef([])
  const [showTopology, setShowTopology] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    
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
      '/test.glb',
      (gltf) => {
        console.log('GLB loaded successfully!', gltf)
        const model = gltf.scene
        modelRef.current = model
        
        // Log initial state
        console.log('Model position:', model.position)
        console.log('Model scale:', model.scale)
        
        scene.add(model)
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        console.log('Bounding box size:', size)
        console.log('Bounding box center:', center)
        
        model.position.sub(center)
        
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 18 / maxDim
        model.scale.multiplyScalar(scale)
        
        console.log('Applied scale:', scale)
        console.log('Final position:', model.position)
        
        // Create wireframe geometry for topology view (shows all triangles/quads)
        model.traverse((child) => {
          if (child.isMesh) {
            const wireframe = new THREE.WireframeGeometry(child.geometry)
            const line = new THREE.LineSegments(
              wireframe,
              new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 })
            )
            line.visible = false
            child.add(line)
            edgesRef.current.push(line)
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
        mixerRef.current.update(clock.getDelta() * 0.05) //Speed of the animation
      }
      
      if (modelRef.current) {
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

  // Toggle topology visibility
  useEffect(() => {
    edgesRef.current.forEach((line) => {
      line.visible = showTopology
    })
  }, [showTopology])

  const toggleTopology = () => {
    setShowTopology(!showTopology)
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} id="paths-canvas" style={{ width: '100%', height: '100%' }} />
      <button
        onClick={toggleTopology}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '12px 24px',
          backgroundColor: showTopology ? '#4a9fd8' : '#ffffff',
          color: showTopology ? '#ffffff' : '#000000',
          border: '2px solid #4a9fd8',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '14px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)'
        }}
      >
        {showTopology ? 'Hide Topology' : 'Show Topology'}
      </button>
    </div>
  )
}