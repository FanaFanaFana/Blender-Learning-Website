// migrateToSanity.js
// Run with: node migrateToSanity.js

import { createClient } from '@sanity/client';
import { editModeLessonData } from '../data/lessons/editModeLessonData.js'
import { cameraLessonData } from '../data/lessons/cameraLessonData.js'
import { characterModelingLessonData } from '../data/lessons/characterModelingLessonData.js'
import { firstModelLessonData } from '../data/lessons/firstModelLessonData.js'
import { hardsurfaceLessonData } from '../data/lessons/hardsurfaceLessonData.js'
import { interfaceLessonData } from '../data/lessons/interfaceLessonData.js'
import { lightingLessonData } from '../data/lessons/lightingLessonData.js'
import { materialLessonData } from '../data/lessons/materialLessonData.js'
import { modifierLessonData } from '../data/lessons/modifierLessonData.js'
import { productDesignLessonData } from '../data/lessons/productDesignLessonData.js'
import { renderEnginesLessonData } from '../data/lessons/renderEnginesLessonData.js'
import { renderSettingsLessonData } from '../data/lessons/renderSettingsLessonData.js'
import { sculptingLessonData } from '../data/lessons/sculptingLessonData.js'
import { topologyLessonData } from '../data/lessons/topologyLessonData.js'
import { keyframeLessonData } from '../data/lessons/keyframeLessonData.js'
import { timelineLessonData } from '../data/lessons/timelineLessonData.js'
import { graphEditorLessonData } from '../data/lessons/graphEditorLessonData.js'
import { riggingLessonData } from '../data/lessons/riggingLessonData.js'
import { physicsLessonData } from '../data/lessons/physicsLessonData.js'
import { uvMappingLessonData } from '../data/lessons/uvMappingLessonData.js'
import { texturePaintingLessonData } from '../data/lessons/texturePaintingLessonData.js'
import { imageTexturesLessonData } from '../data/lessons/imageTexturesLessonData.js'
import { proceduralTexturesLessonData } from '../data/lessons/proceduralTexturesLessonData.js'
import { bakingLessonData } from '../data/lessons/bakingLessonData.js'
import { manifoldGeometryLessonData } from '../data/lessons/manifoldGeometryLessonData.js'
import { scaleUnitsLessonData } from '../data/lessons/scaleUnitsLessonData.js'
import { supportStructuresLessonData } from '../data/lessons/supportStructuresLessonData.js'
import { fileExportLessonData } from '../data/lessons/fileExportLessonData.js'
import { cameraTrackingLessonData } from '../data/lessons/cameraTrackingLessonData.js'
import { keyingMaskingLessonData } from '../data/lessons/keyingMaskingLessonData.js'
import { shadowCatcherLessonData } from '../data/lessons/shadowCatcherLessonData.js'
import { colorMatchingLessonData } from '../data/lessons/colorMatchingLessonData.js'
import { lowPolyModelingLessonData } from '../data/lessons/lowPolyModelingLessonData.js'
import { textureBakingLessonData } from '../data/lessons/textureBakingLessonData.js'
import { lodCreationLessonData } from '../data/lessons/lodCreationLessonData.js'
import { engineExportLessonData } from '../data/lessons/engineExportLessonData.js'
import { particleHairLessonData } from '../data/lessons/particleHairLessonData.js'
import { groomingLessonData } from '../data/lessons/groomingLessonData.js'
import { hairShadingLessonData } from '../data/lessons/hairShadingLessonData.js'
import { dynamicsLessonData } from '../data/lessons/dynamicsLessonData.js'
import { drawingBasicsLessonData } from '../data/lessons/drawingBasicsLessonData.js'
import { gpAnimationLessonData } from '../data/lessons/gpAnimationLessonData.js'
import { gpModifiersLessonData } from '../data/lessons/gpModifiersLessonData.js'
import { mixedMediaLessonData } from '../data/lessons/mixedMediaLessonData.js'
import { nodeBasicsLessonData } from '../data/lessons/nodeBasicsLessonData.js'
import { proceduralModelingLessonData } from '../data/lessons/proceduralModelingLessonData.js'
import { instancesLessonData } from '../data/lessons/instancesLessonData.js'
import { fieldsAttributesLessonData } from '../data/lessons/fieldsAttributesLessonData.js'
import { fileOrganizationLessonData } from '../data/lessons/fileOrganizationLessonData.js'
import { collectionsLessonData } from '../data/lessons/collectionsLessonData.js'
import { versionControlLessonData } from '../data/lessons/versionControlLessonData.js'
import { assetLibrariesLessonData } from '../data/lessons/assetLibrariesLessonData.js'
import { rigidBodyLessonData } from '../data/lessons/rigidBodyLessonData.js'
import { clothSimulationLessonData } from '../data/lessons/clothSimulationLessonData.js'
import { fluidSimulationLessonData } from '../data/lessons/fluidSimulationLessonData.js'
import { particleSystemsLessonData } from '../data/lessons/particleSystemsLessonData.js'


// Initialize Sanity client
const client = createClient({
  projectId: 'l9y29z8y',
  dataset: 'production',
  useCdn: false,
  token: 'sk1vd24uVdWdjwFf01MPOLmcXcH5z5uU3GkBBSpPCCR8LvGf56uf8bequDlXFr7jDsEOSLLubuAFK2OJ4iNpUWPpsrVlMA0dzf33zX3sA56Gk3l9Ifgtvfh2mxyrV0BmvyMVuxZzilHKqHZVxIEXDrskkyQ8Sc9BS40yg8J692pxUFnLr07C',
  apiVersion: '2024-01-01'
});

// Category mapping for each lesson
const lessonCategoryMapping = {
  'editModeLessonData': 'modeling',
  'modifierLessonData': 'modeling',
  'sculptingLessonData': 'modeling',
  'interfaceLessonData': 'modeling',
  'firstModelLessonData': 'Lesson',
  'characterModelingLessonData': 'Lesson',
  'hardsurfaceLessonData': 'Lesson',
  'productDesignLessonData': 'Lesson',
  'topologyLessonData': 'Lesson',
  'materialLessonData': 'rendering',
  'lightingLessonData': 'rendering',
  'cameraLessonData': 'rendering',
  'renderEnginesLessonData': 'rendering',
  'renderSettingsLessonData': 'rendering',
  'keyframeLessonData': 'animation',
  'timelineLessonData': 'animation',
  'graphEditorLessonData': 'animation',
  'riggingLessonData': 'animation',
  'physicsLessonData': 'animation',
  'uvMappingLessonData': 'texturing',
  'texturePaintingLessonData': 'texturing',
  'imageTexturesLessonData': 'texturing',
  'proceduralTexturesLessonData': 'texturing',
  'bakingLessonData': 'texturing',
  'manifoldGeometryLessonData': 'printing',
  'scaleUnitsLessonData': 'printing',
  'supportStructuresLessonData': 'printing',
  'fileExportLessonData': 'printing',
  'cameraTrackingLessonData': 'vfx',
  'keyingMaskingLessonData': 'vfx',
  'shadowCatcherLessonData': 'vfx',
  'colorMatchingLessonData': 'vfx',
  'lowPolyModelingLessonData': 'gameAssets',
  'textureBakingLessonData': 'gameAssets',
  'lodCreationLessonData': 'gameAssets',
  'engineExportLessonData': 'gameAssets',
  'particleHairLessonData': 'hairFur',
  'groomingLessonData': 'hairFur',
  'hairShadingLessonData': 'hairFur',
  'dynamicsLessonData': 'hairFur',
  'drawingBasicsLessonData': 'greaseGencil',
  'gpAnimationLessonData': 'greaseGencil',
  'gpModifiersLessonData': 'greaseGencil',
  'mixedMediaLessonData': 'greaseGencil',
  'nodeBasicsLessonData': 'geometryNodes',
  'proceduralModelingLessonData': 'geometryNodes',
  'instancesLessonData': 'geometryNodes',
  'fieldsAttributesLessonData': 'geometryNodes',
  'fileOrganizationLessonData': 'projectManagement',
  'collectionsLessonData': 'projectManagement',
  'versionControlLessonData': 'projectManagement',
  'assetLibrariesLessonData': 'projectManagement',
  'rigidBodyLessonData': 'simulation',
  'clothSimulationLessonData': 'simulation',
  'fluidSimulationLessonData': 'simulation',
  'particleSystemsLessonData': 'simulation'
};

// Helper function to transform lesson data with safety checks
function transformLessonData(lessonData, category) {
  const doc = {
    _type: 'lesson',
    
    // Generate a slug from the title
    lessonId: {
      _type: 'slug',
      current: lessonData.heroConfig.title
        .toLowerCase()
        .replace(/\s+/g, '-')
    },
    
    category: category, // Add category here
    themeColor: lessonData.themeColor || '#3b82f6',
    
    // Hero Config - REQUIRED
    heroConfig: {
      _type: 'object',
      title: lessonData.heroConfig.title,
      gradientText: lessonData.heroConfig.gradientText || '',
      subtitle: lessonData.heroConfig.subtitle || '',
      gradientColors: lessonData.heroConfig.gradientColors || '',
      badges: (lessonData.heroConfig.badges || []).map(badge => ({
        _type: 'object',
        _key: Math.random().toString(36).substr(2, 9),
        icon: badge.icon || '',
        title: badge.title || '',
        subtitle: badge.subtitle || ''
      }))
    },
    
    // Tabs - REQUIRED
    tabs: (lessonData.tabs || []).map(tab => ({
      _type: 'object',
      _key: tab.id || Math.random().toString(36).substr(2, 9),
      id: tab.id || '',
      icon: tab.icon || '',
      label: tab.label || ''
    })),
  };

  // Overview - OPTIONAL
  if (lessonData.overviewTitle) doc.overviewTitle = lessonData.overviewTitle;
  if (lessonData.overviewDescription) doc.overviewDescription = lessonData.overviewDescription;
  
  if (lessonData.overviewCards && Array.isArray(lessonData.overviewCards)) {
    doc.overviewCards = lessonData.overviewCards.map(card => ({
      _type: 'object',
      _key: Math.random().toString(36).substr(2, 9),
      icon: card.icon || '',
      title: card.title || '',
      content: card.content || ''
    }));
  }

  // Content Section - OPTIONAL
  if (lessonData.contentTitle) doc.contentTitle = lessonData.contentTitle;
  if (lessonData.contentDescription) doc.contentDescription = lessonData.contentDescription;
  
  // Categories - OPTIONAL but complex
  if (lessonData.categories && Array.isArray(lessonData.categories)) {
    doc.categories = lessonData.categories.map(category => ({
      _type: 'object',
      _key: Math.random().toString(36).substr(2, 9),
      name: category.name || '',
      color: category.color || '',
      icon: category.icon || '',
      items: (category.items || category.brushes || []).map(item => ({
        _type: 'object',
        _key: Math.random().toString(36).substr(2, 9),
        name: item.name || '',
        icon: item.icon || '',
        description: item.description || '',
        detailedInfo: item.detailedInfo ? {
          _type: 'object',
          overview: item.detailedInfo.overview || '',
          pages: (item.detailedInfo.pages || []).map(page => ({
            _type: 'object',
            _key: Math.random().toString(36).substr(2, 9),
            title: page.title || '',
            content: page.content || '',
            image: page.image || '',
            tips: page.tips || []
          }))
        } : undefined
      }))
    }));
  }

  // Techniques Section - OPTIONAL
  if (lessonData.techniquesTitle) doc.techniquesTitle = lessonData.techniquesTitle;
  if (lessonData.techniquesDescription) doc.techniquesDescription = lessonData.techniquesDescription;
  
  if (lessonData.techniques && Array.isArray(lessonData.techniques)) {
    doc.techniques = lessonData.techniques.map(technique => ({
      _type: 'object',
      _key: Math.random().toString(36).substr(2, 9),
      name: technique.name || '',
      color: technique.color || '',
      icon: technique.icon || '',
      items: (technique.items || []).map(item => ({
        _type: 'object',
        _key: Math.random().toString(36).substr(2, 9),
        name: item.name || '',
        icon: item.icon || '',
        description: item.description || '',
        detailedInfo: item.detailedInfo ? {
          _type: 'object',
          overview: item.detailedInfo.overview || '',
          pages: (item.detailedInfo.pages || []).map(page => ({
            _type: 'object',
            _key: Math.random().toString(36).substr(2, 9),
            title: page.title || '',
            content: page.content || '',
            image: page.image || ''
          }))
        } : undefined
      }))
    }));
  }

  // Shortcuts Section - OPTIONAL
  if (lessonData.shortcuts && Array.isArray(lessonData.shortcuts)) {
    doc.shortcuts = lessonData.shortcuts.map(shortcutSection => ({
      _type: 'object',
      _key: Math.random().toString(36).substr(2, 9),
      category: shortcutSection.category || '',
      items: (shortcutSection.items || []).map(item => ({
        _type: 'object',
        _key: Math.random().toString(36).substr(2, 9),
        action: item.action || '',
        key: item.key || ''
      }))
    }));
  }

  // Practice Section - OPTIONAL
  if (lessonData.practiceTitle) doc.practiceTitle = lessonData.practiceTitle;
  if (lessonData.practiceDescription) doc.practiceDescription = lessonData.practiceDescription;
  
  if (lessonData.practiceProjects && Array.isArray(lessonData.practiceProjects)) {
    doc.practiceProjects = lessonData.practiceProjects.map(project => ({
      _type: 'object',
      _key: Math.random().toString(36).substr(2, 9),
      title: project.title || '',
      desc: project.desc || '',
      duration: project.duration || '',
      difficulty: project.difficulty || '',
      skills: project.skills || []
    }));
  }

  return doc;
}

// All lessons to migrate with their names
const allLessons = [
  { data: editModeLessonData, name: 'editModeLessonData' },
  { data: cameraLessonData, name: 'cameraLessonData' },
  { data: characterModelingLessonData, name: 'characterModelingLessonData' },
  { data: firstModelLessonData, name: 'firstModelLessonData' },
  { data: hardsurfaceLessonData, name: 'hardsurfaceLessonData' },
  { data: interfaceLessonData, name: 'interfaceLessonData' },
  { data: lightingLessonData, name: 'lightingLessonData' },
  { data: materialLessonData, name: 'materialLessonData' },
  { data: modifierLessonData, name: 'modifierLessonData' },
  { data: productDesignLessonData, name: 'productDesignLessonData' },
  { data: renderEnginesLessonData, name: 'renderEnginesLessonData' },
  { data: renderSettingsLessonData, name: 'renderSettingsLessonData' },
  { data: sculptingLessonData, name: 'sculptingLessonData' },
  { data: topologyLessonData, name: 'topologyLessonData' },
  { data: keyframeLessonData, name: 'keyframeLessonData' },
  { data: timelineLessonData, name: 'timelineLessonData' },
  { data: graphEditorLessonData, name: 'graphEditorLessonData' },
  { data: riggingLessonData, name: 'riggingLessonData' },
  { data: physicsLessonData, name: 'physicsLessonData' },
  { data: uvMappingLessonData, name: 'uvMappingLessonData' },
  { data: texturePaintingLessonData, name: 'texturePaintingLessonData' },
  { data: imageTexturesLessonData, name: 'imageTexturesLessonData' },
  { data: proceduralTexturesLessonData, name: 'proceduralTexturesLessonData' },
  { data: bakingLessonData, name: 'bakingLessonData' },
  { data: manifoldGeometryLessonData, name: 'manifoldGeometryLessonData' },
  { data: scaleUnitsLessonData, name: 'scaleUnitsLessonData' },
  { data: supportStructuresLessonData, name: 'supportStructuresLessonData' },
  { data: fileExportLessonData, name: 'fileExportLessonData' },
  { data: cameraTrackingLessonData, name: 'cameraTrackingLessonData' },
  { data: keyingMaskingLessonData, name: 'keyingMaskingLessonData' },
  { data: shadowCatcherLessonData, name: 'shadowCatcherLessonData' },
  { data: colorMatchingLessonData, name: 'colorMatchingLessonData' },
  { data: lowPolyModelingLessonData, name: 'lowPolyModelingLessonData' },
  { data: textureBakingLessonData, name: 'textureBakingLessonData' },
  { data: lodCreationLessonData, name: 'lodCreationLessonData' },
  { data: engineExportLessonData, name: 'engineExportLessonData' },
  { data: particleHairLessonData, name: 'particleHairLessonData' },
  { data: groomingLessonData, name: 'groomingLessonData' },
  { data: hairShadingLessonData, name: 'hairShadingLessonData' },
  { data: dynamicsLessonData, name: 'dynamicsLessonData' },
  { data: drawingBasicsLessonData, name: 'drawingBasicsLessonData' },
  { data: gpAnimationLessonData, name: 'gpAnimationLessonData' },
  { data: gpModifiersLessonData, name: 'gpModifiersLessonData' },
  { data: mixedMediaLessonData, name: 'mixedMediaLessonData' },
  { data: nodeBasicsLessonData, name: 'nodeBasicsLessonData' },
  { data: proceduralModelingLessonData, name: 'proceduralModelingLessonData' },
  { data: instancesLessonData, name: 'instancesLessonData' },
  { data: fieldsAttributesLessonData, name: 'fieldsAttributesLessonData' },
  { data: fileOrganizationLessonData, name: 'fileOrganizationLessonData' },
  { data: collectionsLessonData, name: 'collectionsLessonData' },
  { data: versionControlLessonData, name: 'versionControlLessonData' },
  { data: assetLibrariesLessonData, name: 'assetLibrariesLessonData' },
  { data: rigidBodyLessonData, name: 'rigidBodyLessonData' },
  { data: clothSimulationLessonData, name: 'clothSimulationLessonData' },
  { data: fluidSimulationLessonData, name: 'fluidSimulationLessonData' },
  { data: particleSystemsLessonData, name: 'particleSystemsLessonData' }
];

async function migrateAllLessons() {
  try {
    console.log('🚀 Starting migration of all lessons...');
    console.log(`📚 Found ${allLessons.length} lessons to migrate\n`);

    const results = [];

    for (let i = 0; i < allLessons.length; i++) {
      const { data: lessonData, name: lessonName } = allLessons[i];
      const lessonTitle = lessonData.heroConfig?.title || 'Unknown Lesson';
      const category = lessonCategoryMapping[lessonName] || 'Lesson';
      
      try {
        console.log(`[${i + 1}/${allLessons.length}] Migrating: ${lessonTitle} (Category: ${category})...`);
        
        const lessonDocument = transformLessonData(lessonData, category);
        const result = await client.create(lessonDocument);
        
        results.push({ success: true, title: lessonTitle, category, id: result._id });
        console.log(`✅ Success: ${lessonTitle} (ID: ${result._id})\n`);
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Failed: ${lessonTitle}`);
        console.error(`   Error: ${error.message}\n`);
        results.push({ success: false, title: lessonTitle, category, error: error.message });
      }
    }

    // Summary
    console.log('\n📊 Migration Summary:');
    console.log('═'.repeat(50));
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`✅ Successful: ${successful}/${allLessons.length}`);
    console.log(`❌ Failed: ${failed}/${allLessons.length}`);
    
    // Category breakdown
    console.log('\n📁 By Category:');
    const byCategory = results.reduce((acc, r) => {
      if (r.success) {
        acc[r.category] = (acc[r.category] || 0) + 1;
      }
      return acc;
    }, {});
    
    Object.entries(byCategory).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} lessons`);
    });
    
    if (failed > 0) {
      console.log('\n❌ Failed lessons:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`   - ${r.title}: ${r.error}`);
      });
    }
    
    return results;
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run the migration
migrateAllLessons()
  .then(() => {
    console.log('🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error:', error.message);
    process.exit(1);
  });