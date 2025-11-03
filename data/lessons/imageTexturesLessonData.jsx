// imageTexturesLessonData.js
export const imageTexturesLessonData = {
  heroConfig: {
    title: 'Image Textures',
    gradientText: 'Fundamentals',
    subtitle: 'Apply image-based textures',
    gradientColors: 'linear-gradient(135deg, #ec4899, #f472b6, #fbcfe8)',
    badges: [
      { icon: '/Icons/time.svg', title: '20 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Image Textures' }
  ],
  themeColor: '#ec4899',
  overviewTitle: 'Image Textures',
  overviewDescription: 'Use photos and images as textures',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Image Textures', content: 'Load images onto models.' }
  ],
  contentTitle: 'Image Tools',
  contentDescription: 'Working with image textures',
  categories: [
    {
      name: 'Image Operations',
      color: '#ec4899',
      items: [
        {
          name: 'Load Image',
          icon: '/Icons/tool.svg',
          description: 'Import texture images',
          detailedInfo: {
            overview: 'Load external images.',
            pages: [{ title: 'Loading', content: 'Open image files.', tips: ['Support for PNG, JPG, EXR'] }]
          }
        }
      ]
    }
  ]
};