'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { media } from 'sanity-plugin-media'
import { BookOpen, Folder, Layers, ChartBar } from 'lucide-react'

export default defineConfig({
  // ------------------------------------------------------------------
  // ✅ Basic project settings
  // ------------------------------------------------------------------
  name: 'blender-platform',
  title: 'Blender Learning Platform',
  basePath: '/studio',
  studioHost: 'blender-learning-platform', // helps "Open in Studio" links work
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-11-03',
  useCdn: false, // 👈 required to see drafts in Studio and API

  // ------------------------------------------------------------------
  // ✅ Schema definitions
  // ------------------------------------------------------------------
  schema,

  // ------------------------------------------------------------------
  // ✅ Plugins
  // ------------------------------------------------------------------
  plugins: [
    media(),

    // ------------------------------------------------------------------
    // 🧱 Custom Structure Tool (Navigation)
    // ------------------------------------------------------------------
    structureTool({
      defaultDocumentNode: (S, { schemaType }) => {
        // Enable document view for lessons
        if (schemaType === 'lesson') {
          return S.document().views([S.view.form()])
        }
        return null
      },

      structure: (S) =>
        S.list()
          .title('📚 Content Management')
          .items([
            // All Lessons
            S.listItem()
              .title('📖 All Lessons')
              .icon(BookOpen)
              .child(
                S.documentTypeList('lesson')
                  .title('All Lessons')
                  .filter('_type == "lesson"')
                  .apiVersion('2025-11-03')
              ),

            S.divider(),

            // Browse by Category
            S.listItem()
              .title('📁 Browse by Category')
              .icon(Folder)
              .child(
                S.list()
                  .title('Select a Category')
                  .items([
                    // Modeling
                    S.listItem()
                      .title('🎨 3D Modeling')
                      .child(
                        S.documentTypeList('lesson')
                          .title('3D Modeling Lessons')
                          .filter('_type == "lesson" && category == "modeling"')
                      ),

                    // Rendering
                    S.listItem()
                      .title('💡 Rendering')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Rendering Lessons')
                          .filter('_type == "lesson" && category == "rendering"')
                      ),

                    // Animation
                    S.listItem()
                      .title('🎬 Animation')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Animation Lessons')
                          .filter('_type == "lesson" && category == "animation"')
                      ),

                    // Texturing
                    S.listItem()
                      .title('🖼️ Texturing')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Texturing Lessons')
                          .filter('_type == "lesson" && category == "texturing"')
                      ),

                    // 3D Printing
                    S.listItem()
                      .title('🖨️ 3D Printing')
                      .child(
                        S.documentTypeList('lesson')
                          .title('3D Printing Lessons')
                          .filter('_type == "lesson" && category == "printing"')
                      ),

                    // VFX
                    S.listItem()
                      .title('🎥 VFX Integration')
                      .child(
                        S.documentTypeList('lesson')
                          .title('VFX Lessons')
                          .filter('_type == "lesson" && category == "vfx"')
                      ),

                    // Game Assets
                    S.listItem()
                      .title('🎮 Game Assets')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Game Asset Lessons')
                          .filter('_type == "lesson" && category == "gameAssets"')
                      ),

                    // Hair & Fur
                    S.listItem()
                      .title('✨ Hair & Fur')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Hair & Fur Lessons')
                          .filter('_type == "lesson" && category == "hairFur"')
                      ),

                    // Grease Pencil
                    S.listItem()
                      .title('✏️ Grease Pencil')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Grease Pencil Lessons')
                          .filter('_type == "lesson" && category == "greasePencil"') // ✅ fixed typo
                      ),

                    // Geometry Nodes
                    S.listItem()
                      .title('🔷 Geometry Nodes')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Geometry Nodes Lessons')
                          .filter('_type == "lesson" && category == "geometryNodes"')
                      ),

                    // Project Management
                    S.listItem()
                      .title('📋 Project Management')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Project Management Lessons')
                          .filter('_type == "lesson" && category == "projectManagement"')
                      ),

                    // Simulation
                    S.listItem()
                      .title('💧 Simulation')
                      .child(
                        S.documentTypeList('lesson')
                          .title('Simulation Lessons')
                          .filter('_type == "lesson" && category == "simulation"')
                      ),
                  ])
              ),

            S.divider(),

            // Quick Stats / Welcome Section
            S.listItem()
              .title('📊 Quick Stats')
              .icon(ChartBar)
              .child(
                S.component()
                  .id('quickStats')
                  .component(() => (
                    <div style={{ padding: '2rem' }}>
                      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                        Welcome to Blender Learning Platform! 🎉
                      </h2>
                      <p style={{ marginBottom: '1rem', color: '#666' }}>
                        Your content management system for creating and managing Blender lessons.
                      </p>
                      <div
                        style={{
                          background: '#f0f9ff',
                          padding: '1rem',
                          borderRadius: '8px',
                          marginTop: '1.5rem',
                        }}
                      >
                        <h3 style={{ marginBottom: '0.5rem' }}>💡 Quick Tips:</h3>
                        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                          <li>
                            Use <strong>Browse by Category</strong> to find lessons quickly.
                          </li>
                          <li>
                            Each lesson is organized into <strong>tabs</strong> for easy editing.
                          </li>
                          <li>
                            Use the <strong>dropdowns</strong> for icons and colors — no code needed!
                          </li>
                          <li>
                            Upload media files directly in the <strong>Media</strong> fields.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
              ),
          ]),
    }),

    // Vision Tool (for GROQ testing)
    visionTool({
      defaultApiVersion: '2025-11-03',
    }),
  ],
})
