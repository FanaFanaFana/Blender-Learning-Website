// FILE: app/api/lessons/[id]/route.js
import { client } from '@/sanity/lib/client'
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const { searchParams } = new URL(request.url)
    const includeDraft = searchParams.get('draft') === 'true'
    
    // ✅ FIXED: Corrected media URL fetching
    let query
    if (includeDraft) {
      // Check draft first, fallback to published
      query = `
        *[_type == "lesson" && lessonId.current == $id && _id in path("drafts.**")][0] {
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
                icon,
                detailedInfo {
                  overview,
                  pages[] {
                    title,
                    content,
                    mediaType,
                    image,
                    uploadedMediaUrl,
                    tips
                  }
                }
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
              icon,
              detailedInfo {
                overview,
                pages[] {
                  title,
                  content,
                  mediaType,
                  image,
                  uploadedMediaUrl,
                  tips
                }
              }
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques,
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
                icon,
                detailedInfo {
                  overview,
                  pages[] {
                    title,
                    content,
                    mediaType,
                    image,
                    uploadedMediaUrl,
                    tips
                  }
                }
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
              icon,
              detailedInfo {
                overview,
                pages[] {
                  title,
                  content,
                  mediaType,
                  image,
                  uploadedMediaUrl,
                  tips
                }
              }
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques,
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
        }
      `
    } else {
      // Only fetch published
      query = `
        *[_type == "lesson" && lessonId.current == $id && !(_id in path("drafts.**"))][0] {
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
                icon,
                detailedInfo {
                  overview,
                  pages[] {
                    title,
                    content,
                    mediaType,
                    image,
                    uploadedMediaUrl,
                    tips
                  }
                }
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
              icon,
              detailedInfo {
                overview,
                pages[] {
                  title,
                  content,
                  mediaType,
                  image,
                  uploadedMediaUrl,
                  tips
                }
              }
            }
          },
          techniquesTitle,
          techniquesDescription,
          techniques,
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
        }
      `
    }
    
    const lesson = await client.fetch(query, { id })
    
    if (!lesson) {
      return NextResponse.json(
        { error: 'Lesson not found' },
        { status: 404 }
      )
    }

    // Ensure lessonIcon has a default value if null
    lesson.lessonIcon = lesson.lessonIcon || '/Icons/blender_icon_current_file.svg'

    console.log('✅ API: Fetched lesson with tabContents:', {
      hasTabContents: !!lesson.tabContents,
      tabContentsLength: lesson.tabContents?.length,
      tabIds: lesson.tabContents?.map(tc => tc.tabId)
    })

    // ✅ Process media URLs for root-level categories
    if (lesson.categories) {
      lesson.categories = lesson.categories.map(cat => ({
        ...cat,
        items: (cat.items || []).map(item => ({
          ...item,
          detailedInfo: item.detailedInfo ? {
            ...item.detailedInfo,
            pages: (item.detailedInfo.pages || []).map(page => {
              const finalUrl = page.mediaType === 'upload' 
                ? page.uploadedMediaUrl 
                : page.image
              
              console.log('📹 Processing page media:', {
                mediaType: page.mediaType,
                uploadedMediaUrl: page.uploadedMediaUrl,
                image: page.image,
                finalUrl
              })
              
              return {
                ...page,
                finalMediaUrl: finalUrl
              }
            })
          } : undefined
        }))
      }))
    }

    // ✅ Process media URLs for tabContents categories
    if (lesson.tabContents && Array.isArray(lesson.tabContents)) {
      lesson.tabContents = lesson.tabContents.map(tabContent => {
        const processed = { ...tabContent }
        
        if (processed.categories) {
          processed.categories = processed.categories.map(cat => ({
            ...cat,
            items: (cat.items || []).map(item => ({
              ...item,
              detailedInfo: item.detailedInfo ? {
                ...item.detailedInfo,
                pages: (item.detailedInfo.pages || []).map(page => {
                  const finalUrl = page.mediaType === 'upload' 
                    ? page.uploadedMediaUrl 
                    : page.image
                  
                  console.log('📹 Processing tabContent page media:', {
                    tabId: processed.tabId,
                    mediaType: page.mediaType,
                    uploadedMediaUrl: page.uploadedMediaUrl,
                    image: page.image,
                    finalUrl
                  })
                  
                  return {
                    ...page,
                    finalMediaUrl: finalUrl
                  }
                })
              } : undefined
            }))
          }))
        }
        
        return processed
      })
      
      console.log('✅ API: Processed tabContents media URLs')
    }
    
    return NextResponse.json(lesson)
  } catch (error) {
    console.error('Error fetching lesson:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lesson' },
      { status: 500 }
    )
  }
}