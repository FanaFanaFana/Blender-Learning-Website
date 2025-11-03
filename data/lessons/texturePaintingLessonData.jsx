// texturePaintingLessonData.js
export const texturePaintingLessonData = {
  heroConfig: {
    title: 'Texture Painting',
    gradientText: 'Fundamentals',
    subtitle: 'Paint directly on 3D models',
    gradientColors: 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Paint Tools' }
  ],
  themeColor: '#8b5cf6',
  overviewTitle: 'Texture Painting',
  overviewDescription: 'Paint textures in 3D space',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Texture Paint Mode', content: 'Paint directly on your models.' }
  ],
  contentTitle: 'Paint Tools',
  contentDescription: 'Texture painting tools',
  categories: [
    {
      name: 'Brushes',
      color: '#8b5cf6',
      items: [
        {
          name: 'Draw Brush',
          icon: '/Icons/tool.svg',
          description: 'Paint on model surfaces',
          detailedInfo: {
            overview: 'Basic painting tool.',
            pages: [{ title: 'Painting', content: 'Click and drag to paint.', tips: ['Adjust brush size with F'] }]
          }
        }
      ]
    }
  ]
};