// bakingLessonData.js
export const bakingLessonData = {
  heroConfig: {
    title: 'Texture Baking',
    gradientText: 'Fundamentals',
    subtitle: 'Bake lighting and details to textures',
    gradientColors: 'linear-gradient(135deg, #ef4444, #f87171, #fca5a5)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Baking' }
  ],
  themeColor: '#ef4444',
  overviewTitle: 'Texture Baking',
  overviewDescription: 'Bake complex shading to textures',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Baking Process', content: 'Convert 3D detail to 2D maps.' }
  ],
  contentTitle: 'Baking Tools',
  contentDescription: 'Texture baking operations',
  categories: [
    {
      name: 'Bake Types',
      color: '#ef4444',
      items: [
        {
          name: 'Normal Map',
          icon: '/Icons/tool.svg',
          description: 'Bake surface detail',
          detailedInfo: {
            overview: 'Create normal maps.',
            pages: [{ title: 'Normal Baking', content: 'Bake high-res detail.', tips: ['Use cage for better results'] }]
          }
        }
      ]
    }
  ]
};