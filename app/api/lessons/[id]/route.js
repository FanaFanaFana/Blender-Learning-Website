// FILE: app/api/lessons/[id]/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const { searchParams } = new URL(request.url)
    const includeDraft = searchParams.get('draft') === 'true'
    
    // ✅ Keep all lesson data, just skip detailedInfo.pages
    const query = includeDraft
      ? `*[_type == "lesson" && lessonId.current == $id && _id in path("drafts.**")][0] {
          lessonId,
          category,
          themeColor,
          lessonIcon,
          heroConfig,
          enabledTabs,
          tabContents[] {
            _key,
            tabId,
            _type,
            contentTitle,
            contentDescription,
            categories[] {
              name,
              icon,
              color,
              items[] {
                name,
                description,
                icon
              }
            },
            shortcuts[] {
              category,
              icon,
              items[] {
                action,
                key
              }
            },
            practiceTitle,
            practiceDescription,
            practiceProjects[] {
              title,
              desc,
              duration,
              difficulty,
              skills
            }
          },
          overviewTitle,
          overviewDescription,
          overviewCards,
          contentTitle,
          contentDescription,
          categories[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          shortcuts[] {
            category,
            icon,
            items[] {
              action,
              key
            }
          },
          practiceTitle,
          practiceDescription,
          practiceProjects[] {
            title,
            desc,
            duration,
            difficulty,
            skills
          },
          "_isDraft": true
        } ?? *[_type == "lesson" && lessonId.current == $id && !(_id in path("drafts.**"))][0] {
          lessonId,
          category,
          themeColor,
          lessonIcon,
          heroConfig,
          enabledTabs,
          tabContents[] {
            _key,
            tabId,
            _type,
            contentTitle,
            contentDescription,
            categories[] {
              name,
              icon,
              color,
              items[] {
                name,
                description,
                icon
              }
            },
            shortcuts[] {
              category,
              icon,
              items[] {
                action,
                key
              }
            },
            practiceTitle,
            practiceDescription,
            practiceProjects[] {
              title,
              desc,
              duration,
              difficulty,
              skills
            }
          },
          overviewTitle,
          overviewDescription,
          overviewCards,
          contentTitle,
          contentDescription,
          categories[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          shortcuts[] {
            category,
            icon,
            items[] {
              action,
              key
            }
          },
          practiceTitle,
          practiceDescription,
          practiceProjects[] {
            title,
            desc,
            duration,
            difficulty,
            skills
          },
          "_isDraft": false
        }`
      : `*[_type == "lesson" && lessonId.current == $id && !(_id in path("drafts.**"))][0] {
          lessonId,
          category,
          themeColor,
          lessonIcon,
          heroConfig,
          enabledTabs,
          tabContents[] {
            _key,
            tabId,
            _type,
            contentTitle,
            contentDescription,
            categories[] {
              name,
              icon,
              color,
              items[] {
                name,
                description,
                icon
              }
            },
            shortcuts[] {
              category,
              icon,
              items[] {
                action,
                key
              }
            },
            practiceTitle,
            practiceDescription,
            practiceProjects[] {
              title,
              desc,
              duration,
              difficulty,
              skills
            }
          },
          overviewTitle,
          overviewDescription,
          overviewCards,
          contentTitle,
          contentDescription,
          categories[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques[] {
            name,
            icon,
            color,
            items[] {
              name,
              description,
              icon
            }
          },
          shortcuts[] {
            category,
            icon,
            items[] {
              action,
              key
            }
          },
          practiceTitle,
          practiceDescription,
          practiceProjects[] {
            title,
            desc,
            duration,
            difficulty,
            skills
          }
        }`
    
    const lesson = await client.fetch(query, { id })
    
    if (!lesson) {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      )
    }

    lesson.lessonIcon = lesson.lessonIcon || '/Icons/blender_icon_current_file.svg'

    console.log('✅ API: Fetched lesson structure:', {
      hasHeroConfig: !!lesson.heroConfig,
      heroTitle: lesson.heroConfig?.title,
      heroGradient: lesson.heroConfig?.gradientText,
      hasCategories: !!lesson.categories,
      categoriesCount: lesson.categories?.length,
      hasTechniques: !!lesson.techniques,
      techniquesCount: lesson.techniques?.length
    })
    
    return NextResponse.json(lesson)
  } catch (error) {
    console.error('Error fetching lesson:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lesson' },
      { status: 500 }
    )
  }
}