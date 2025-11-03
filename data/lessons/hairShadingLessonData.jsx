// hairShadingLessonData.js
export const hairShadingLessonData = {
  heroConfig: {
    title: 'Hair Shading',
    gradientText: 'Hair & Fur',
    subtitle: 'Create realistic hair materials',
    gradientColors: 'linear-gradient(135deg, #991b1b, #dc2626, #fca5a5)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Shading' }
  ],
  themeColor: '#991b1b',
  overviewTitle: 'Hair Shading',
  overviewDescription: 'Shader setup for hair',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Hair BSDF', content: 'Realistic hair shader.' }
  ],
  contentTitle: 'Shading Tools',
  contentDescription: 'Hair material setup',
  categories: [
    {
      name: 'Shaders',
      color: '#991b1b',
      items: [
        {
          name: 'Hair BSDF',
          icon: '/Icons/tool.svg',
          description: 'Hair shader node',
          detailedInfo: {
            overview: 'Use Hair BSDF shader.',
            pages: [{ title: 'Shader', content: 'Set up hair material.', tips: ['Adjust roughness'] }]
          }
        }
      ]
    }
  ]
};
