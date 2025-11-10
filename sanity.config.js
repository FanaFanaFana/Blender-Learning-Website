// FILE: sanity.config.js
'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schemaTypes'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // ✅ Reads from environment variable
  dataset: 'production',
  apiVersion: '2025-11-03', // ✅ Add this!
  
  title: 'Blender Learning Platform',
  
  schema,
  
  plugins: [
    media(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('📚 Content Management')
          .items([
            // All Lessons
            S.listItem()
              .title('📖 All Lessons')
              .icon(() => '📖')
              .child(
                S.documentTypeList('lesson')
                  .title('All Lessons')
                  .filter('_type == "lesson"')
                  .apiVersion('2025-11-03') // ✅ Add to ALL filters
              ),
            
            S.divider(),
            
            // Browse by Category
            S.listItem()
              .title('📁 Browse by Category')
              .icon(() => '📁')
              .child(
                S.list()
                  .title('Select a Category')
                  .items([
                    // Modeling
                    S.listItem()
                      .title('🎨 3D Modeling')
                      .icon(() => '🎨')
                      .child(
                        S.documentTypeList('lesson')
                          .title('3D Modeling Lessons')
                          .filter('_type == "lesson" && category == "modeling"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Rendering
                    S.listItem()
                      .title('💡 Rendering')
                      .icon(() => '💡')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Rendering Lessons')
                          .filter('_type == "lesson" && category == "rendering"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Animation
                    S.listItem()
                      .title('🎬 Animation')
                      .icon(() => '🎬')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Animation Lessons')
                          .filter('_type == "lesson" && category == "animation"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Texturing
                    S.listItem()
                      .title('🖼️ Texturing')
                      .icon(() => '🖼️')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Texturing Lessons')
                          .filter('_type == "lesson" && category == "texturing"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Lesson Content
                    S.listItem()
                      .title('📝 Lesson Content')
                      .icon(() => '📝')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Lesson Content')
                          .filter('_type == "lesson" && category == "Lesson"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    S.divider(),
                    
                    // 3D Printing
                    S.listItem()
                      .title('🖨️ 3D Printing')
                      .icon(() => '🖨️')
                      .child(
                        S.documentTypeList('lesson')
                          .title('3D Printing Lessons')
                          .filter('_type == "lesson" && category == "printing"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // VFX
                    S.listItem()
                      .title('🎥 VFX Integration')
                      .icon(() => '🎥')
                      .child(
                        S.documentTypeList('lesson')
                          .title('VFX Lessons')
                          .filter('_type == "lesson" && category == "vfx"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Game Assets
                    S.listItem()
                      .title('🎮 Game Assets')
                      .icon(() => '🎮')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Game Asset Lessons')
                          .filter('_type == "lesson" && category == "gameAssets"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Hair & Fur
                    S.listItem()
                      .title('✨ Hair & Fur')
                      .icon(() => '✨')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Hair & Fur Lessons')
                          .filter('_type == "lesson" && category == "hairFur"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Grease Pencil
                    S.listItem()
                      .title('✏️ Grease Pencil')
                      .icon(() => '✏️')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Grease Pencil Lessons')
                          .filter('_type == "lesson" && category == "greaseGencil"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Geometry Nodes
                    S.listItem()
                      .title('🔷 Geometry Nodes')
                      .icon(() => '🔷')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Geometry Nodes Lessons')
                          .filter('_type == "lesson" && category == "geometryNodes"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Project Management
                    S.listItem()
                      .title('📋 Project Management')
                      .icon(() => '📋')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Project Management Lessons')
                          .filter('_type == "lesson" && category == "projectManagement"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                    
                    // Simulation
                    S.listItem()
                      .title('💧 Simulation')
                      .icon(() => '💧')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Simulation Lessons')
                          .filter('_type == "lesson" && category == "simulation"')
                          .apiVersion('2025-11-03') // ✅
                      ),
                  ])
              ),
            
            S.divider(),
            
            // Quick Stats
            S.listItem()
              .title('📊 Quick Stats')
              .icon(() => '📊')
              .child(
                S.component()
                  .id('quickStats')
                  .component(() => (
                    <div style={{ padding: '2rem' }}>
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Welcome to Blender Learning Platform! 🎉
                      </h2>
                      <p style={{ marginBottom: '1rem', color: '#666' }}>
                        Your content management system for creating amazing Blender lessons.
                      </p>
                      <div style={{ 
                        background: '#f0f9ff', 
                        padding: '1rem', 
                        borderRadius: '8px',
                        marginTop: '1.5rem'
                      }}>
                        <h3 style={{ marginBottom: '0.5rem' }}>💡 Quick Tips:</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                          <li>Use <strong>Browse by Category</strong> to find lessons quickly</li>
                          <li>Each lesson is organized into <strong>tabs</strong> for easy editing</li>
                          <li>Use the <strong>dropdowns</strong> for icons and colors - no code needed!</li>
                          <li>Upload videos directly in the <strong>Media</strong> fields</li>
                        </ul>
                      </div>
                    </div>
                  ))
              ),
          ])
    }),
    visionTool({
      defaultApiVersion: '2025-11-03' // ✅ Add this too
    }),
  ],
})