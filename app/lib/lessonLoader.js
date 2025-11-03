// FILE: app/lib/lessonLoader.js

/**
 * Centralized lesson data loader with caching
 * This version imports all lessons upfront (tree-shakeable by bundler)
 */

// Import all your lesson data files here
// Path: app/lib → up to app → up to root → into data/lessons
import { editModeLessonData } from '../../data/lessons/editModeLessonData.jsx'
import { cameraLessonData } from '../../data/lessons/cameraLessonData'
import { characterModelingLessonData } from '../../data/lessons/characterModelingLessonData'
import { firstModelLessonData } from '../../data/lessons/firstModelLessonData'
import { hardsurfaceLessonData } from '../../data/lessons/hardsurfaceLessonData'
import { interfaceLessonData } from '../../data/lessons/interfaceLessonData'
import { lightingLessonData } from '../../data/lessons/lightingLessonData'
import { materialLessonData } from '../../data/lessons/materialLessonData'
import { modifierLessonData } from '../../data/lessons/modifierLessonData'
import { productDesignLessonData } from '../../data/lessons/productDesignLessonData'
import { renderEnginesLessonData } from '../../data/lessons/renderEnginesLessonData'
import { renderSettingsLessonData } from '../../data/lessons/renderSettingsLessonData'
import { sculptingLessonData } from '../../data/lessons/sculptingLessonData'
import { topologyLessonData } from '../../data/lessons/topologyLessonData'
import { keyframeLessonData } from '../../data/lessons/keyframeLessonData'
import { timelineLessonData } from '@/data/lessons/timelineLessonData'
import { graphEditorLessonData } from '@/data/lessons/graphEditorLessonData'
import { riggingLessonData } from '@/data/lessons/riggingLessonData'
import { physicsLessonData } from '@/data/lessons/physicsLessonData'

// New Texturing lessons
import { uvMappingLessonData } from '../../data/lessons/uvMappingLessonData'
import { texturePaintingLessonData } from '../../data/lessons/texturePaintingLessonData'
import { imageTexturesLessonData } from '../../data/lessons/imageTexturesLessonData'
import { proceduralTexturesLessonData } from '../../data/lessons/proceduralTexturesLessonData'
import { bakingLessonData } from '../../data/lessons/bakingLessonData'

// New 3D Printing lessons
import { manifoldGeometryLessonData } from '../../data/lessons/manifoldGeometryLessonData'
import { scaleUnitsLessonData } from '../../data/lessons/scaleUnitsLessonData'
import { supportStructuresLessonData } from '../../data/lessons/supportStructuresLessonData'
import { fileExportLessonData } from '../../data/lessons/fileExportLessonData'

// New VFX Integration lessons
import { cameraTrackingLessonData } from '../../data/lessons/cameraTrackingLessonData'
import { keyingMaskingLessonData } from '../../data/lessons/keyingMaskingLessonData'
import { shadowCatcherLessonData } from '../../data/lessons/shadowCatcherLessonData'
import { colorMatchingLessonData } from '../../data/lessons/colorMatchingLessonData'

// New Game Assets lessons
import { lowPolyModelingLessonData } from '../../data/lessons/lowPolyModelingLessonData'
import { textureBakingLessonData } from '../../data/lessons/textureBakingLessonData'
import { lodCreationLessonData } from '../../data/lessons/lodCreationLessonData'
import { engineExportLessonData } from '../../data/lessons/engineExportLessonData'

// New Hair & Fur lessons
import { particleHairLessonData } from '../../data/lessons/particleHairLessonData'
import { groomingLessonData } from '../../data/lessons/groomingLessonData'
import { hairShadingLessonData } from '../../data/lessons/hairShadingLessonData'
import { dynamicsLessonData } from '../../data/lessons/dynamicsLessonData'

// New Grease Pencil lessons
import { drawingBasicsLessonData } from '../../data/lessons/drawingBasicsLessonData'
import { gpAnimationLessonData } from '../../data/lessons/gpAnimationLessonData'
import { gpModifiersLessonData } from '../../data/lessons/gpModifiersLessonData'
import { mixedMediaLessonData } from '../../data/lessons/mixedMediaLessonData'

// New Geometry Nodes lessons
import { nodeBasicsLessonData } from '../../data/lessons/nodeBasicsLessonData'
import { proceduralModelingLessonData } from '../../data/lessons/proceduralModelingLessonData'
import { instancesLessonData } from '../../data/lessons/instancesLessonData'
import { fieldsAttributesLessonData } from '../../data/lessons/fieldsAttributesLessonData'

// New Project Management lessons
import { fileOrganizationLessonData } from '../../data/lessons/fileOrganizationLessonData'
import { collectionsLessonData } from '../../data/lessons/collectionsLessonData'
import { versionControlLessonData } from '../../data/lessons/versionControlLessonData'
import { assetLibrariesLessonData } from '../../data/lessons/assetLibrariesLessonData'

// New Simulation lessons
import { rigidBodyLessonData } from '../../data/lessons/rigidBodyLessonData'
import { clothSimulationLessonData } from '../../data/lessons/clothSimulationLessonData'
import { fluidSimulationLessonData } from '../../data/lessons/fluidSimulationLessonData'
import { particleSystemsLessonData } from '../../data/lessons/particleSystemsLessonData'

const lessonCache = new Map()

// Map lesson IDs to their data
const lessonDataMap = {
    // 3D Modeling
    'edit-mode': editModeLessonData,
    'interface': interfaceLessonData,
    'modifier': modifierLessonData,
    'sculpting': sculptingLessonData,
    
    // Rendering
    'camera': cameraLessonData,
    'lighting': lightingLessonData,
    'material': materialLessonData,
    'render-engines': renderEnginesLessonData,
    'render-settings': renderSettingsLessonData,
    
    // Animation
    'keyframe': keyframeLessonData,
    'timeline': timelineLessonData,
    'graph-editor': graphEditorLessonData,
    'rigging': riggingLessonData,
    'physics': physicsLessonData,
    
    // Texturing
    'uv-mapping': uvMappingLessonData,
    'texture-painting': texturePaintingLessonData,
    'image-textures': imageTexturesLessonData,
    'procedural-textures': proceduralTexturesLessonData,
    'baking': bakingLessonData,
    
    // Lessons
    'first-model': firstModelLessonData,
    'character-modelling': characterModelingLessonData,
    'hard-surface': hardsurfaceLessonData,
    'product-design': productDesignLessonData,
    'topology': topologyLessonData,
    
    // 3D Printing
    'manifold-geometry': manifoldGeometryLessonData,
    'scale-units': scaleUnitsLessonData,
    'support-structures': supportStructuresLessonData,
    'file-export': fileExportLessonData,
    
    // VFX Integration
    'camera-tracking': cameraTrackingLessonData,
    'keying-masking': keyingMaskingLessonData,
    'shadow-catcher': shadowCatcherLessonData,
    'color-matching': colorMatchingLessonData,
    
    // Game Assets
    'low-poly-modeling': lowPolyModelingLessonData,
    'texture-baking': textureBakingLessonData,
    'lod-creation': lodCreationLessonData,
    'engine-export': engineExportLessonData,
    
    // Hair & Fur
    'particle-hair': particleHairLessonData,
    'grooming': groomingLessonData,
    'hair-shading': hairShadingLessonData,
    'dynamics': dynamicsLessonData,
    
    // Grease Pencil
    'drawing-basics': drawingBasicsLessonData,
    'gp-animation': gpAnimationLessonData,
    'gp-modifiers': gpModifiersLessonData,
    'mixed-media': mixedMediaLessonData,
    
    // Geometry Nodes
    'node-basics': nodeBasicsLessonData,
    'procedural-modeling': proceduralModelingLessonData,
    'instances': instancesLessonData,
    'fields-attributes': fieldsAttributesLessonData,
    
    // Project Management
    'file-organization': fileOrganizationLessonData,
    'collections': collectionsLessonData,
    'version-control': versionControlLessonData,
    'asset-libraries': assetLibrariesLessonData,
    
    // Simulation
    'rigid-body': rigidBodyLessonData,
    'cloth-simulation': clothSimulationLessonData,
    'fluid-simulation': fluidSimulationLessonData,
    'particle-systems': particleSystemsLessonData,
}


/**
 * Get lesson data by ID
 * Returns cached version if available
 */
export async function loadLessonData(lessonId) {
    // Check if already cached
    if (lessonCache.has(lessonId)) {
        return lessonCache.get(lessonId)
    }

    const data = lessonDataMap[lessonId]

    if (!data) {
        throw new Error(`Lesson "${lessonId}" not found. Available lessons: ${Object.keys(lessonDataMap).join(', ')}`)
    }

    // Cache it
    lessonCache.set(lessonId, data)

    // Return as promise for consistency
    return Promise.resolve(data)
}

/**
 * Preload lesson data
 * Call this when user hovers over a lesson card
 */
export function preloadLesson(lessonId) {
    if (!lessonCache.has(lessonId) && lessonDataMap[lessonId]) {
        lessonCache.set(lessonId, lessonDataMap[lessonId])
    }
}

/**
 * Clear cache (useful for development/hot reload)
 */
export function clearLessonCache() {
    lessonCache.clear()
}

/**
 * Get all available lesson IDs
 */
export function getAvailableLessons() {
    return Object.keys(lessonDataMap)
}