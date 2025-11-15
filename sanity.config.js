'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { media } from 'sanity-plugin-media'
import { BookOpen, Folder, ChartBar } from 'lucide-react'
// ✅ Import centralized categories
import { CATEGORIES, getCategoryKeys } from '@/app/config/categories'

export default defineConfig({
  // ------------------------------------------------------------------
  // ✅ Basic project settings
  // ------------------------------------------------------------------
  name: 'blender-platform',
  title: 'Blender Learning Platform',
  basePath: '/studio',
  studioHost: 'blender-learning-platform',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2025-11-03',
  useCdn: false,

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

            // Browse by Category - ✅ Now uses centralized config
            S.listItem()
              .title('📁 Browse by Category')
              .icon(Folder)
              .child(
                S.list()
                  .title('Select a Category')
                  .items(
                    // ✅ Dynamically generate category list items
                    getCategoryKeys().map(key => {
                      const cat = CATEGORIES[key]
                      return S.listItem()
                        .title(`${cat.emoji} ${cat.label}`)
                        .child(
                          S.documentTypeList('lesson')
                            .title(`${cat.label} Lessons`)
                            .filter(`_type == "lesson" && category == "${key}"`)
                        )
                    })
                  )
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

                      {/* ✅ Show category count from centralized config */}
                      <div
                        style={{
                          background: '#f0fdf4',
                          padding: '1rem',
                          borderRadius: '8px',
                          marginTop: '1rem',
                        }}
                      >
                        <h3 style={{ marginBottom: '0.5rem' }}>📊 Categories:</h3>
                        <p style={{ color: '#666' }}>
                          Total categories: <strong>{getCategoryKeys().length}</strong>
                        </p>
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                          gap: '0.5rem',
                          marginTop: '0.75rem'
                        }}>
                          {getCategoryKeys().map(key => {
                            const cat = CATEGORIES[key]
                            return (
                              <div 
                                key={key}
                                style={{
                                  padding: '0.5rem',
                                  background: `${cat.color}15`,
                                  borderRadius: '6px',
                                  fontSize: '0.9rem',
                                  color: cat.color
                                }}
                              >
                                {cat.emoji} {cat.label}
                              </div>
                            )
                          })}
                        </div>
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