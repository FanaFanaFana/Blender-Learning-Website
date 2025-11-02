// FILE: app/lib/lessonLoader.js

/**
 * Centralized lesson data loader with caching
 * This version imports all lessons upfront (tree-shakeable by bundler)
 */

// Import all your lesson data files here
// Path: app/lib → up to app → up to root → into data/lessons
import { editModeLessonData } from '../../data/lessons/editModeLessonData'
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

const lessonCache = new Map()

// Map lesson IDs to their data
const lessonDataMap = {
    'edit-mode': editModeLessonData,
    'camera': cameraLessonData,
    'character-modelling': characterModelingLessonData,
    'first-model': firstModelLessonData,
    'hard-surface': hardsurfaceLessonData,
    'interface': interfaceLessonData,
    'lighting': lightingLessonData,
    'material': materialLessonData,
    'modifier': modifierLessonData,
    'product-design': productDesignLessonData,
    'render-engines': renderEnginesLessonData,
    'render-settings': renderSettingsLessonData,
    'sculpting': sculptingLessonData,
    'topology': topologyLessonData,
    'keyframe': keyframeLessonData,
    'timeline': timelineLessonData,
    'graph-editor': graphEditorLessonData,
    'rigging': riggingLessonData,
    'physics': physicsLessonData,
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