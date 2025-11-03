// FILE: app/utils/searchIndex.js
// This file indexes all your lesson data for searching

// Import all your lesson data files - EXACT filenames from your directory
import { characterModelingLessonData } from '../../data/lessons/characterModelingLessonData'
import { editModeLessonData } from '../../data/lessons/editModeLessonData.jsx'
import { firstModelLessonData } from '../../data/lessons/firstModelLessonData.jsx'
import { interfaceLessonData } from '../../data/lessons/interfaceLessonData.jsx'
import { modifierLessonData } from '../../data/lessons/modifierLessonData.jsx'
import { sculptingLessonData } from '../../data/lessons/sculptingLessonData'
import { hardsurfaceLessonData } from '../../data/lessons/hardsurfaceLessonData.jsx'
import { productDesignLessonData } from '../../data/lessons/productDesignLessonData.jsx'
import { materialLessonData } from '../../data/lessons/materialLessonData.jsx'
import { cameraLessonData } from '../../data/lessons/cameraLessonData'
import { lightingLessonData } from '../../data/lessons/lightingLessonData.jsx'
import { renderEnginesLessonData } from '../../data/lessons/renderEnginesLessonData.jsx'
import { renderSettingsLessonData } from '../../data/lessons/renderSettingsLessonData.jsx'
import { topologyLessonData } from '../../data/lessons/topologyLessonData'
import { keyframeLessonData } from '../../data/lessons/keyframeLessonData.jsx'
import { timelineLessonData } from '@/data/lessons/timelineLessonData'
import { graphEditorLessonData } from '@/data/lessons/graphEditorLessonData'
import { riggingLessonData } from '@/data/lessons/riggingLessonData'
import { physicsLessonData } from '@/data/lessons/physicsLessonData'

// Texturing lessons
import { uvMappingLessonData } from '../../data/lessons/uvMappingLessonData'
import { texturePaintingLessonData } from '../../data/lessons/texturePaintingLessonData'
import { imageTexturesLessonData } from '../../data/lessons/imageTexturesLessonData'
import { proceduralTexturesLessonData } from '../../data/lessons/proceduralTexturesLessonData'
import { bakingLessonData } from '../../data/lessons/bakingLessonData'

// 3D Printing lessons
import { manifoldGeometryLessonData } from '../../data/lessons/manifoldGeometryLessonData'
import { scaleUnitsLessonData } from '../../data/lessons/scaleUnitsLessonData'
import { supportStructuresLessonData } from '../../data/lessons/supportStructuresLessonData'
import { fileExportLessonData } from '../../data/lessons/fileExportLessonData'

// VFX Integration lessons
import { cameraTrackingLessonData } from '../../data/lessons/cameraTrackingLessonData'
import { keyingMaskingLessonData } from '../../data/lessons/keyingMaskingLessonData'
import { shadowCatcherLessonData } from '../../data/lessons/shadowCatcherLessonData'
import { colorMatchingLessonData } from '../../data/lessons/colorMatchingLessonData'

// Game Assets lessons
import { lowPolyModelingLessonData } from '../../data/lessons/lowPolyModelingLessonData'
import { textureBakingLessonData } from '../../data/lessons/textureBakingLessonData'
import { lodCreationLessonData } from '../../data/lessons/lodCreationLessonData'
import { engineExportLessonData } from '../../data/lessons/engineExportLessonData'

// Hair & Fur lessons
import { particleHairLessonData } from '../../data/lessons/particleHairLessonData'
import { groomingLessonData } from '../../data/lessons/groomingLessonData'
import { hairShadingLessonData } from '../../data/lessons/hairShadingLessonData'
import { dynamicsLessonData } from '../../data/lessons/dynamicsLessonData'

// Grease Pencil lessons
import { drawingBasicsLessonData } from '../../data/lessons/drawingBasicsLessonData'
import { gpAnimationLessonData } from '../../data/lessons/gpAnimationLessonData.jsx'
import { gpModifiersLessonData } from '../../data/lessons/gpModifiersLessonData'
import { mixedMediaLessonData } from '../../data/lessons/mixedMediaLessonData'

// Geometry Nodes lessons
import { nodeBasicsLessonData } from '../../data/lessons/nodeBasicsLessonData'
import { proceduralModelingLessonData } from '../../data/lessons/proceduralModelingLessonData'
import { instancesLessonData } from '../../data/lessons/instancesLessonData'
import { fieldsAttributesLessonData } from '../../data/lessons/fieldsAttributesLessonData'

// Project Management lessons
import { fileOrganizationLessonData } from '../../data/lessons/fileOrganizationLessonData'
import { collectionsLessonData } from '../../data/lessons/collectionsLessonData'
import { versionControlLessonData } from '../../data/lessons/versionControlLessonData'
import { assetLibrariesLessonData } from '../../data/lessons/assetLibrariesLessonData'

// Simulation lessons
import { rigidBodyLessonData } from '../../data/lessons/rigidBodyLessonData'
import { clothSimulationLessonData } from '../../data/lessons/clothSimulationLessonData'
import { fluidSimulationLessonData } from '../../data/lessons/fluidSimulationLessonData'
import { particleSystemsLessonData } from '../../data/lessons/particleSystemsLessonData'

function extractSearchableItems(lessonData, lessonInfo) {
  const items = []
  
  // Helper to create search item
  const createItem = (title, description, type, path, detailedInfo, color, tags = [], tabId = 'content', fullItem = null) => ({
    title,
    description,
    type,
    path,
    link: lessonInfo.link,
    color: color || lessonInfo.color,
    difficulty: lessonInfo.difficulty,
    tags: [...tags, ...lessonInfo.baseTags],
    detailedInfo,
    tabId, // Which tab to switch to
    fullItem // The complete item data for the modal
  })

  // Index overview cards
  if (lessonData.overviewCards) {
    lessonData.overviewCards.forEach(card => {
      items.push(createItem(
        card.title,
        card.content,
        'concept',
        `${lessonInfo.title} → Overview`,
        null,
        lessonInfo.color,
        ['overview', 'concept'],
        'overview'
      ))
    })
  }

  // Index modeling steps (categorized)
  if (lessonData.modelingSteps) {
    lessonData.modelingSteps.forEach(category => {
      category.steps.forEach(step => {
        items.push(createItem(
          step.name,
          step.description,
          'step',
          `${lessonInfo.title} → Steps → ${category.name}`,
          step.detailedInfo,
          category.color,
          ['step', 'tutorial', step.name.toLowerCase()],
          'content',
          { ...step, color: category.color }
        ))
      })
    })
  }

  // Index selection modes (flat array)
  if (lessonData.selectionModes) {
    lessonData.selectionModes.forEach(mode => {
      items.push(createItem(
        mode.name,
        mode.description,
        'mode',
        `${lessonInfo.title} → Modes`,
        mode.detailedInfo,
        mode.color,
        ['mode', 'selection', mode.name.toLowerCase()],
        'content',
        mode
      ))
    })
  }

  // Index essential tools (can be flat or categorized)
  if (lessonData.essentialTools) {
    if (lessonData.essentialTools[0]?.tools) {
      // Categorized
      lessonData.essentialTools.forEach(category => {
        category.tools.forEach(tool => {
          items.push(createItem(
            tool.name,
            tool.description,
            'tool',
            `${lessonInfo.title} → Tools → ${category.name}`,
            tool.detailedInfo,
            category.color,
            ['tool', tool.name.toLowerCase()],
            'content',
            { ...tool, color: category.color }
          ))
        })
      })
    } else {
      // Flat array
      lessonData.essentialTools.forEach(tool => {
        items.push(createItem(
          tool.name,
          tool.description,
          'tool',
          `${lessonInfo.title} → Tools`,
          tool.detailedInfo,
          tool.color || lessonInfo.color,
          ['tool', tool.name.toLowerCase()],
          'content',
          tool
        ))
      })
    }
  }

  // Index categories (brushes, techniques, interface areas, etc.)
  if (lessonData.categories) {
    lessonData.categories.forEach(category => {
      const categoryItems = category.items || category.brushes || []
      categoryItems.forEach(item => {
        items.push(createItem(
          item.name,
          item.description,
          category.name.toLowerCase().includes('brush') ? 'brush' : 'tool',
          `${lessonInfo.title} → ${category.name}`,
          item.detailedInfo,
          category.color,
          ['tool', 'brush', item.name.toLowerCase()],
          'content',
          { ...item, color: category.color }
        ))
      })
    })
  }

  // Index techniques
  if (lessonData.techniques) {
    lessonData.techniques.forEach(category => {
      const techniqueItems = category.items || category.methods || []
      techniqueItems.forEach(technique => {
        items.push(createItem(
          technique.name,
          technique.description,
          'technique',
          `${lessonInfo.title} → Techniques → ${category.name}`,
          technique.detailedInfo,
          category.color,
          ['technique', 'method', technique.name.toLowerCase()],
          'techniques',
          { ...technique, color: category.color }
        ))
      })
    })
  }

  // Index workflow steps
  if (lessonData.workflowSteps) {
    lessonData.workflowSteps.forEach(category => {
      category.steps.forEach(step => {
        items.push(createItem(
          step.name,
          step.description,
          'workflow',
          `${lessonInfo.title} → Workflow → ${category.name}`,
          step.detailedInfo,
          category.color,
          ['workflow', 'process', step.name.toLowerCase()],
          'content',
          { ...step, color: category.color }
        ))
      })
    })
  }

  // Index modifier categories
  if (lessonData.modifierCategories) {
    lessonData.modifierCategories.forEach(category => {
      category.modifiers.forEach(modifier => {
        items.push(createItem(
          modifier.name,
          modifier.description,
          'modifier',
          `${lessonInfo.title} → Modifiers → ${category.name}`,
          modifier.detailedInfo,
          category.color,
          ['modifier', modifier.name.toLowerCase()],
          'content',
          { ...modifier, color: category.color }
        ))
      })
    })
  }

  // Index interface areas (DEPRECATED - now uses categories)
  if (lessonData.interfaceAreas) {
    lessonData.interfaceAreas.forEach(category => {
      category.areas.forEach(area => {
        items.push(createItem(
          area.name,
          area.description,
          'interface',
          `${lessonInfo.title} → Areas → ${category.name}`,
          area.detailedInfo,
          category.color,
          ['interface', 'ui', area.name.toLowerCase()],
          'content',
          { ...area, color: category.color }
        ))
      })
    })
  }

  // Index shortcuts
  if (lessonData.shortcuts) {
    lessonData.shortcuts.forEach(section => {
      section.items.forEach(shortcut => {
        items.push(createItem(
          shortcut.action,
          `Keyboard shortcut: ${shortcut.key}`,
          'shortcut',
          `${lessonInfo.title} → Shortcuts → ${section.category}`,
          null,
          lessonInfo.color,
          ['shortcut', 'keyboard', shortcut.key.toLowerCase(), shortcut.action.toLowerCase()],
          'shortcuts'
        ))
      })
    })
  }

  // Index core principles (hard surface)
  if (lessonData.corePrinciples) {
    lessonData.corePrinciples.forEach(category => {
      category.topics.forEach(topic => {
        items.push(createItem(
          topic.name,
          topic.description,
          'principle',
          `${lessonInfo.title} → Principles → ${category.name}`,
          topic.detailedInfo,
          category.color,
          ['principle', 'concept', topic.name.toLowerCase()],
          'content',
          { ...topic, color: category.color }
        ))
      })
    })
  }

  return items
}

// Define all your lessons with their metadata
const lessons = [
  // 3D Modeling
  {
    data: editModeLessonData,
    title: 'Edit Mode',
    link: '/lessons/edit-mode',
    color: '#10b981',
    difficulty: 'Beginner',
    baseTags: ['edit', 'mode', 'beginner', 'modeling']
  },
  {
    data: interfaceLessonData,
    title: 'Interface',
    link: '/lessons/interface',
    color: '#f97316',
    difficulty: 'Beginner',
    baseTags: ['interface', 'ui', 'beginner']
  },
  {
    data: modifierLessonData,
    title: 'Modifiers',
    link: '/lessons/modifier',
    color: '#3b82c4',
    difficulty: 'Intermediate',
    baseTags: ['modifiers', 'intermediate', 'modeling']
  },
  {
    data: sculptingLessonData,
    title: 'Sculpting',
    link: '/lessons/sculpting',
    color: '#3b82c4',
    difficulty: 'Intermediate',
    baseTags: ['sculpting', 'intermediate', 'modeling']
  },
  
  // Rendering
  {
    data: cameraLessonData,
    title: 'Camera',
    link: '/lessons/camera',
    color: '#f59e0b',
    difficulty: 'Beginner',
    baseTags: ['camera', 'rendering', 'beginner']
  },
  {
    data: lightingLessonData,
    title: 'Lighting',
    link: '/lessons/lighting',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['lighting', 'rendering', 'intermediate']
  },
  {
    data: materialLessonData,
    title: 'Materials & Shading',
    link: '/lessons/material',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['materials', 'shading', 'intermediate', 'rendering']
  },
  {
    data: renderEnginesLessonData,
    title: 'Render Engines',
    link: '/lessons/render-engines',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['rendering', 'engines', 'intermediate']
  },
  {
    data: renderSettingsLessonData,
    title: 'Render Settings',
    link: '/lessons/render-settings',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['rendering', 'settings', 'intermediate']
  },
  
  // Animation
  {
    data: keyframeLessonData,
    title: 'Keyframes',
    link: '/lessons/keyframe',
    color: '#8b5cf6',
    difficulty: 'Intermediate',
    baseTags: ['keyframes', 'animation', 'intermediate']
  },
  {
    data: timelineLessonData,
    title: 'Timeline',
    link: '/lessons/timeline',
    color: '#8b5cf6',
    difficulty: 'Intermediate', 
    baseTags: ['timeline', 'animation', 'intermediate']
  },
  {
    data: graphEditorLessonData,
    title: 'Graph Editor',
    link: '/lessons/graph-editor',    
    color: '#8b5cf6',
    difficulty: 'Advanced',
    baseTags: ['graph editor', 'animation', 'advanced'] 
  },
  {
    data: riggingLessonData,  
    title: 'Rigging',
    link: '/lessons/rigging',  
    color: '#8b5cf6',
    difficulty: 'Advanced',
    baseTags: ['rigging', 'animation', 'advanced']
  },
  {
    data: physicsLessonData,  
    title: 'Physics',
    link: '/lessons/physics',
    color: '#8b5cf6',
    difficulty: 'Advanced',
    baseTags: ['physics', 'animation', 'advanced']
  },

  // Texturing
  {
    data: uvMappingLessonData,
    title: 'UV Mapping',
    link: '/lessons/uv-mapping',
    color: '#06b6d4',
    difficulty: 'Intermediate',
    baseTags: ['uv', 'mapping', 'texturing', 'intermediate']
  },
  {
    data: texturePaintingLessonData,
    title: 'Texture Painting',
    link: '/lessons/texture-painting',
    color: '#06b6d4',
    difficulty: 'Intermediate',
    baseTags: ['texture', 'painting', 'texturing', 'intermediate']
  },
  {
    data: imageTexturesLessonData,
    title: 'Image Textures',
    link: '/lessons/image-textures',
    color: '#06b6d4',
    difficulty: 'Beginner',
    baseTags: ['image', 'textures', 'texturing', 'beginner']
  },
  {
    data: proceduralTexturesLessonData,
    title: 'Procedural Textures',
    link: '/lessons/procedural-textures',
    color: '#06b6d4',
    difficulty: 'Intermediate',
    baseTags: ['procedural', 'textures', 'texturing', 'intermediate']
  },
  {
    data: bakingLessonData,
    title: 'Baking',
    link: '/lessons/baking',
    color: '#06b6d4',
    difficulty: 'Advanced',
    baseTags: ['baking', 'texturing', 'advanced']
  },

  // Lessons
  {
    data: firstModelLessonData,
    title: 'First 3D Model',
    link: '/lessons/first-model',
    color: '#3b82c4',
    difficulty: 'Beginner',
    baseTags: ['modeling', 'beginner', 'basics']
  },
  {
    data: characterModelingLessonData,
    title: 'Character Modeling',
    link: '/lessons/character-modelling',
    color: '#ec4899',
    difficulty: 'Advanced',
    baseTags: ['character', 'modeling', 'advanced']
  },
  {
    data: hardsurfaceLessonData,
    title: 'Hard Surface',
    link: '/lessons/hard-surface',
    color: '#3b82c4',
    difficulty: 'Advanced',
    baseTags: ['hard surface', 'advanced', 'modeling']
  },
  {
    data: productDesignLessonData,
    title: 'Product Design',
    link: '/lessons/product-design',
    color: '#3b82c4',
    difficulty: 'Advanced',
    baseTags: ['product', 'design', 'advanced', 'modeling']
  },
  {
    data: topologyLessonData,
    title: 'Topology',
    link: '/lessons/topology',
    color: '#3b82c4',
    difficulty: 'Advanced',
    baseTags: ['topology', 'modeling', 'advanced']
  },

  // 3D Printing
  {
    data: manifoldGeometryLessonData,
    title: 'Manifold Geometry',
    link: '/lessons/manifold-geometry',
    color: '#14b8a6',
    difficulty: 'Intermediate',
    baseTags: ['3d printing', 'manifold', 'geometry', 'intermediate']
  },
  {
    data: scaleUnitsLessonData,
    title: 'Scale & Units',
    link: '/lessons/scale-units',
    color: '#14b8a6',
    difficulty: 'Beginner',
    baseTags: ['3d printing', 'scale', 'units', 'beginner']
  },
  {
    data: supportStructuresLessonData,
    title: 'Support Structures',
    link: '/lessons/support-structures',
    color: '#14b8a6',
    difficulty: 'Intermediate',
    baseTags: ['3d printing', 'supports', 'intermediate']
  },
  {
    data: fileExportLessonData,
    title: 'File Export',
    link: '/lessons/file-export',
    color: '#14b8a6',
    difficulty: 'Beginner',
    baseTags: ['3d printing', 'export', 'beginner']
  },

  // VFX Integration
  {
    data: cameraTrackingLessonData,
    title: 'Camera Tracking',
    link: '/lessons/camera-tracking',
    color: '#ef4444',
    difficulty: 'Advanced',
    baseTags: ['vfx', 'tracking', 'camera', 'advanced']
  },
  {
    data: keyingMaskingLessonData,
    title: 'Keying & Masking',
    link: '/lessons/keying-masking',
    color: '#ef4444',
    difficulty: 'Intermediate',
    baseTags: ['vfx', 'keying', 'masking', 'intermediate']
  },
  {
    data: shadowCatcherLessonData,
    title: 'Shadow Catcher',
    link: '/lessons/shadow-catcher',
    color: '#ef4444',
    difficulty: 'Intermediate',
    baseTags: ['vfx', 'shadow', 'compositing', 'intermediate']
  },
  {
    data: colorMatchingLessonData,
    title: 'Color Matching',
    link: '/lessons/color-matching',
    color: '#ef4444',
    difficulty: 'Intermediate',
    baseTags: ['vfx', 'color', 'grading', 'intermediate']
  },

  // Game Assets
  {
    data: lowPolyModelingLessonData,
    title: 'Low Poly Modeling',
    link: '/lessons/low-poly-modeling',
    color: '#22c55e',
    difficulty: 'Intermediate',
    baseTags: ['game dev', 'low poly', 'modeling', 'intermediate']
  },
  {
    data: textureBakingLessonData,
    title: 'Texture Baking',
    link: '/lessons/texture-baking',
    color: '#22c55e',
    difficulty: 'Advanced',
    baseTags: ['game dev', 'baking', 'textures', 'advanced']
  },
  {
    data: lodCreationLessonData,
    title: 'LOD Creation',
    link: '/lessons/lod-creation',
    color: '#22c55e',
    difficulty: 'Advanced',
    baseTags: ['game dev', 'lod', 'optimization', 'advanced']
  },
  {
    data: engineExportLessonData,
    title: 'Engine Export',
    link: '/lessons/engine-export',
    color: '#22c55e',
    difficulty: 'Intermediate',
    baseTags: ['game dev', 'export', 'unity', 'unreal', 'intermediate']
  },

  // Hair & Fur
  {
    data: particleHairLessonData,
    title: 'Particle Hair',
    link: '/lessons/particle-hair',
    color: '#a855f7',
    difficulty: 'Advanced',
    baseTags: ['hair', 'fur', 'particles', 'advanced']
  },
  {
    data: groomingLessonData,
    title: 'Grooming',
    link: '/lessons/grooming',
    color: '#a855f7',
    difficulty: 'Advanced',
    baseTags: ['hair', 'fur', 'grooming', 'advanced']
  },
  {
    data: hairShadingLessonData,
    title: 'Hair Shading',
    link: '/lessons/hair-shading',
    color: '#a855f7',
    difficulty: 'Advanced',
    baseTags: ['hair', 'fur', 'shading', 'advanced']
  },
  {
    data: dynamicsLessonData,
    title: 'Dynamics',
    link: '/lessons/dynamics',
    color: '#a855f7',
    difficulty: 'Advanced',
    baseTags: ['hair', 'fur', 'dynamics', 'simulation', 'advanced']
  },

  // Grease Pencil
  {
    data: drawingBasicsLessonData,
    title: 'Drawing Basics',
    link: '/lessons/drawing-basics',
    color: '#ec4899',
    difficulty: 'Beginner',
    baseTags: ['grease pencil', '2d', 'drawing', 'beginner']
  },
  {
    data: gpAnimationLessonData,
    title: 'GP Animation',
    link: '/lessons/gp-animation',
    color: '#ec4899',
    difficulty: 'Intermediate',
    baseTags: ['grease pencil', '2d', 'animation', 'intermediate']
  },
  {
    data: gpModifiersLessonData,
    title: 'GP Modifiers',
    link: '/lessons/gp-modifiers',
    color: '#ec4899',
    difficulty: 'Intermediate',
    baseTags: ['grease pencil', '2d', 'modifiers', 'intermediate']
  },
  {
    data: mixedMediaLessonData,
    title: 'Mixed Media',
    link: '/lessons/mixed-media',
    color: '#ec4899',
    difficulty: 'Advanced',
    baseTags: ['grease pencil', '2d', '3d', 'mixed media', 'advanced']
  },

  // Geometry Nodes
  {
    data: nodeBasicsLessonData,
    title: 'Node Basics',
    link: '/lessons/node-basics',
    color: '#f59e0b',
    difficulty: 'Intermediate',
    baseTags: ['geometry nodes', 'procedural', 'nodes', 'intermediate']
  },
  {
    data: proceduralModelingLessonData,
    title: 'Procedural Modeling',
    link: '/lessons/procedural-modeling',
    color: '#f59e0b',
    difficulty: 'Advanced',
    baseTags: ['geometry nodes', 'procedural', 'modeling', 'advanced']
  },
  {
    data: instancesLessonData,
    title: 'Instances',
    link: '/lessons/instances',
    color: '#f59e0b',
    difficulty: 'Advanced',
    baseTags: ['geometry nodes', 'instances', 'optimization', 'advanced']
  },
  {
    data: fieldsAttributesLessonData,
    title: 'Fields & Attributes',
    link: '/lessons/fields-attributes',
    color: '#f59e0b',
    difficulty: 'Advanced',
    baseTags: ['geometry nodes', 'fields', 'attributes', 'advanced']
  },

  // Project Management
  {
    data: fileOrganizationLessonData,
    title: 'File Organization',
    link: '/lessons/file-organization',
    color: '#64748b',
    difficulty: 'Beginner',
    baseTags: ['project management', 'organization', 'workflow', 'beginner']
  },
  {
    data: collectionsLessonData,
    title: 'Collections',
    link: '/lessons/collections',
    color: '#64748b',
    difficulty: 'Beginner',
    baseTags: ['project management', 'collections', 'organization', 'beginner']
  },
  {
    data: versionControlLessonData,
    title: 'Version Control',
    link: '/lessons/version-control',
    color: '#64748b',
    difficulty: 'Intermediate',
    baseTags: ['project management', 'version control', 'git', 'intermediate']
  },
  {
    data: assetLibrariesLessonData,
    title: 'Asset Libraries',
    link: '/lessons/asset-libraries',
    color: '#64748b',
    difficulty: 'Intermediate',
    baseTags: ['project management', 'assets', 'libraries', 'intermediate']
  },

  // Simulation
  {
    data: rigidBodyLessonData,
    title: 'Rigid Body',
    link: '/lessons/rigid-body',
    color: '#06b6d4',
    difficulty: 'Intermediate',
    baseTags: ['simulation', 'rigid body', 'physics', 'intermediate']
  },
  {
    data: clothSimulationLessonData,
    title: 'Cloth Simulation',
    link: '/lessons/cloth-simulation',
    color: '#06b6d4',
    difficulty: 'Advanced',
    baseTags: ['simulation', 'cloth', 'physics', 'advanced']
  },
  {
    data: fluidSimulationLessonData,
    title: 'Fluid Simulation',
    link: '/lessons/fluid-simulation',
    color: '#06b6d4',
    difficulty: 'Advanced',
    baseTags: ['simulation', 'fluid', 'physics', 'advanced']
  },
  {
    data: particleSystemsLessonData,
    title: 'Particle Systems',
    link: '/lessons/particle-systems',
    color: '#06b6d4',
    difficulty: 'Advanced',
    baseTags: ['simulation', 'particles', 'physics', 'advanced']
  },
]

// Build the complete search index
export function buildSearchIndex() {
  const allItems = []
  
  lessons.forEach(lesson => {
    const items = extractSearchableItems(lesson.data, lesson)
    allItems.push(...items)
  })
  
  console.log(`Search index built: ${allItems.length} items from ${lessons.length} lessons`)
  return allItems
}

// Search function
export function searchLessons(query, searchIndex) {
  if (!query || query.trim() === '') return []
  
  const lowerQuery = query.toLowerCase().trim()
  const words = lowerQuery.split(' ').filter(w => w.length > 0)
  
  return searchIndex.filter(item => {
    // Search in title
    const titleMatch = item.title.toLowerCase().includes(lowerQuery)
    
    // Search in description
    const descMatch = item.description?.toLowerCase().includes(lowerQuery)
    
    // Search in tags
    const tagMatch = item.tags.some(tag => 
      words.some(word => tag.includes(word))
    )
    
    // Search in path
    const pathMatch = item.path.toLowerCase().includes(lowerQuery)
    
    return titleMatch || descMatch || tagMatch || pathMatch
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aExact = a.title.toLowerCase() === lowerQuery ? 1 : 0
    const bExact = b.title.toLowerCase() === lowerQuery ? 1 : 0
    if (aExact !== bExact) return bExact - aExact
    
    // Then prioritize title starts with
    const aStarts = a.title.toLowerCase().startsWith(lowerQuery) ? 1 : 0
    const bStarts = b.title.toLowerCase().startsWith(lowerQuery) ? 1 : 0
    return bStarts - aStarts
  })
}