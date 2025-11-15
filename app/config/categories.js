// FILE: app/config/categories.js
// ✅ Single source of truth for all category definitions

export const CATEGORIES = {
  modeling: {
    key: 'modeling',
    label: '3D Modeling',
    title: '3D Modeling',
    icon: '/Icons/modeling.svg',
    color: '#3b82c4',
    description: 'Categories and lessons focused on creating and manipulating 3D models in Blender',
    emoji: ''
  },
  rendering: {
    key: 'rendering',
    label: 'Rendering',
    title: 'Rendering',
    icon: '/Icons/rendered.svg',
    color: '#f59e0b',
    description: 'Complete reference for render engines, lighting, and image output',
    emoji: ''
  },
  animation: {
    key: 'animation',
    label: 'Animation',
    title: 'Animation',
    icon: '/Icons/animation.svg',
    color: '#8b5cf6',
    description: 'Reference for keyframes, rigging, and motion systems in Blender',
    emoji: ''
  },
  texturing: {
    key: 'texturing',
    label: 'Texturing',
    title: 'Texturing',
    icon: '/Icons/material_data.svg',
    color: '#a2d677',
    description: 'UV mapping, texture painting, and material workflows',
    emoji: ''
  },
  Lesson: {
    key: 'Lesson',
    label: 'Lesson Content',
    title: 'Lesson Content',
    icon: '/Icons/blender_icon_current_file.svg',
    color: '#0bf5e2',
    description: 'Step-by-step tutorials and guided learning paths',
    emoji: ''
  },
  printing: {
    key: 'printing',
    label: '3D Printing',
    title: '3D Printing',
    icon: '/Icons/mesh_cube.svg',
    color: '#ec4899',
    description: 'Preparing models for 3D printing and manufacturing',
    emoji: ''
  },
  vfx: {
    key: 'vfx',
    label: 'VFX Integration',
    title: 'VFX Integration',
    icon: '/Icons/render_result.svg',
    color: '#f97316',
    description: 'Integrating 3D elements with live-action footage',
    emoji: ''
  },
  gameAssets: {
    key: 'gameAssets',
    label: 'Game Asset Creation',
    title: 'Game Asset Creation',
    icon: '/Icons/mesh_torus.svg',
    color: '#06b6d4',
    description: 'Optimized modeling for game engines',
    emoji: ''
  },
  hairFur: {
    key: 'hairFur',
    label: 'Hair & Fur',
    title: 'Hair & Fur',
    icon: '/Icons/armature_data.svg',
    color: '#a855f7',
    description: 'Particle systems and grooming workflows',
    emoji: ''
  },
  greaseGencil: {
    key: 'greaseGencil',
    label: 'Grease Pencil',
    title: 'Grease Pencil',
    icon: '/Icons/editmode_hlt.svg',
    color: '#14b8a6',
    description: '2D animation in 3D space',
    emoji: ''
  },
  geometryNodes: {
    key: 'geometryNodes',
    label: 'Geometry Nodes',
    title: 'Geometry Nodes',
    icon: '/Icons/graph.svg',
    color: '#eab308',
    description: 'Procedural modeling with node systems',
    emoji: ''
  },
  projectManagement: {
    key: 'projectManagement',
    label: 'Project Management',
    title: 'Project Management',
    icon: '/Icons/outliner.svg',
    color: '#64748b',
    description: 'Organization and workflow optimization',
    emoji: ''
  },
  Scripting: {
    key: 'Scripting',
    label: 'Scripting',
    title: 'Scripting',
    icon: '/Icons/console.svg',
    color: '#eab308',
    description: 'Scripting and automation with Python',
    emoji: ''
  },
  simulation: {
    key: 'simulation',
    label: 'Simulation',
    title: 'Simulation',
    icon: '/Icons/physics.svg',
    color: '#3b82f6',
    description: 'Physics simulations and dynamics',
    emoji: ''
  }
}

// ✅ Helper functions for easy access
export const getCategoryByKey = (key) => CATEGORIES[key] || null

export const getAllCategories = () => Object.values(CATEGORIES)

export const getCategoryKeys = () => Object.keys(CATEGORIES)

export const getMainCategories = () => ['modeling', 'rendering', 'animation'].map(key => CATEGORIES[key])

export const getCategoryLabel = (key) => CATEGORIES[key]?.label || key

export const getCategoryColor = (key) => CATEGORIES[key]?.color || '#3b82f6'

export const getCategoryIcon = (key) => CATEGORIES[key]?.icon || '/Icons/blender_icon_current_file.svg'

// ✅ For Sanity schema dropdown options
export const getSanityCategories = () => 
  Object.values(CATEGORIES).map(cat => ({
    title: `${cat.emoji} ${cat.label}`,
    value: cat.key
  }))

// ✅ For Header navigation (visible + dropdown)
export const getVisibleCategories = () => 
  getCategoryKeys().slice(0, 9).map(key => CATEGORIES[key])

export const getDropdownCategories = () => 
  getCategoryKeys().slice(5).map(key => CATEGORIES[key])